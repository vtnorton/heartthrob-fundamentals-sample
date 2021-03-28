using FluentAssertions;
using NUnit.Framework;

namespace HFundamentals.Sample.Tests.Unit
{
    class Test
    {
        [Test]
        public void ShouldPass()
        {
            true.Should().BeTrue();
        }
    }
}
