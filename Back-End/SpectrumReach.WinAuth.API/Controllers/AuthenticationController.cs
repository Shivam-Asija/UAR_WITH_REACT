using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpectrumReach.Authentication.Windows.Models;
using System;
using System.Collections.Generic;
using System.DirectoryServices;
using System.DirectoryServices.AccountManagement;
using System.Security.Principal;

namespace SpectrumReach.Authentication.Windows.Controllers
{
    [Route("api/authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        [Authorize]
        [Route("User")]
        [HttpGet]
        public IActionResult GetUser()
        {
            try
            {
                var user = new UserModel();
                var username = User.Identity.Name;

                var domain = username.Split(new char[] { '\\', '/' })[0];
                username = username.Split(new char[] { '\\', '/' })[1];               

                using (PrincipalContext domainContext = new PrincipalContext(ContextType.Domain, domain))
                using (UserPrincipal principal = UserPrincipal.FindByIdentity(domainContext, username))
                using (var searcher = new DirectorySearcher(new DirectoryEntry("LDAP://" + domainContext.Name)))
                {

                    user.IsAuthenticated = User.Identity.IsAuthenticated;
                    user.DisplayName = principal.DisplayName;
                    user.EmailAddress = principal.EmailAddress;
                    user.Name = principal.SamAccountName;
                    user.FirstName = principal.GivenName;
                    user.Surname = principal.Surname;
                    user.Roles = new List<string>();

                    searcher.Filter = string.Format("(&(objectCategory=group)(member={0}))", principal.DistinguishedName);
                    searcher.SearchScope = SearchScope.Subtree;
                    searcher.PropertiesToLoad.Add("cn");

                    foreach (SearchResult entry in searcher.FindAll())
                        if (entry.Properties.Contains("cn"))
                            user.Roles.Add(entry.Properties["cn"][0].ToString());
                }

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
