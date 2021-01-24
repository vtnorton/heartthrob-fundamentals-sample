#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["HFundamentals.Sample/HFundamentals.Sample.csproj", "HFundamentals.Sample/"]
RUN dotnet restore "HFundamentals.Sample/HFundamentals.Sample.csproj"
COPY . .
WORKDIR "/src/HFundamentals.Sample"
RUN dotnet build "HFundamentals.Sample.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "HFundamentals.Sample.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HFundamentals.Sample.dll"]