using Microsoft.Extensions.DependencyInjection;
using SpectrumReach.Authentication.Windows.Controllers;
using System.Reflection;

namespace SpectrumReach.Authentication.Windows.Middleware
{
    public static class WindowsAuthenticationMiddleware
    {
        public static IMvcBuilder AddWindowsAuthenticationMiddleware(this IMvcBuilder builder)
        {
            return builder.AddApplicationPart(typeof(AuthenticationController).GetTypeInfo().Assembly);
        }
    }
}
