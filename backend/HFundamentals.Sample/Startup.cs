using Heartthrob.Fundamentals.Core;
using Heartthrob.Fundamentals.Core.Models.Entities;
using HFundamentals.Sample.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace HFundamentals.Sample
{
    public class Startup
    {
        public Startup(IConfiguration configuration) => Configuration = configuration;

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddHeartthrob<ApplicationDbContext>(Configuration.GetSection("Heartthrob"));

            services.AddControllers();
        }

        public void Configure(
            IApplicationBuilder app, 
            IWebHostEnvironment env,
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            if (env.IsDevelopment())
                app.UseHeartthrobDevTools(userManager, roleManager, Configuration);

            // app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}
