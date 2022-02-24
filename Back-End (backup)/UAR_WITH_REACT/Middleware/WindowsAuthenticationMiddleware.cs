using Microsoft.Extensions.DependencyInjection;
using UAR_WITH_REACT.Controllers;
using System.Reflection;

namespace UAR_WITH_REACT.Middleware
{
    public static class WindowsAuthenticationMiddleware
    {
        public static IMvcBuilder AddWindowsAuthenticationMiddleware(this IMvcBuilder builder)
        {
            return builder.AddApplicationPart(typeof(AuthenticationController).GetTypeInfo().Assembly);
        }
    }
}
