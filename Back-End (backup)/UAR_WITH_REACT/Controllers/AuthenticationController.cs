//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using UAR_WITH_REACT.Authentication.Windows;
//using UAR_WITH_REACT.Models;

//namespace UAR_WITH_REACT.Controllers
//{
//    [ApiController]
//    public class AuthenticationController : ControllerBase
//    {
//        private readonly UARAuditAppDbContext _context;

//        public AuthenticationController(UARAuditAppDbContext context)
//        {
//            _context = context;
//        }

//        //[HttpGet]
//        //[Route("api/[controller]")]
//        //public string Index()
//        //{
//        //    string userName = HttpContext.User.Identity.Name;
//        //    return userName;
//        //}


//        [Route("api/[controller]")]
//        [HttpPost]
//        public IActionResult WindowsAuthentice([FromBody] UserRequest userRequest)
//        {

//            string validateMsg = userRequest.Validate();

//            if(string.IsNullOrEmpty(validateMsg))
//            {
//                WindowsAuthentication windowsAuthentication = new WindowsAuthentication(userRequest);

//                if(windowsAuthentication.Authenticate())
//                {
//                    return Ok(true);
//                }
//                else
//                {
//                    return Unauthorized("Invalid username or password");
//                }
//            }
//            else
//            {
//                return BadRequest(validateMsg);
//            }
//        }
//    }
//}


using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UAR_WITH_REACT.Models;
using System;
using System.Collections.Generic;
using System.DirectoryServices;
using System.DirectoryServices.AccountManagement;
using System.Security.Principal;

namespace UAR_WITH_REACT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        [Authorize]
        //[Route("User")]
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
