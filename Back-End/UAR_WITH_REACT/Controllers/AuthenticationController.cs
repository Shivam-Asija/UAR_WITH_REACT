using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UAR_WITH_REACT.Authentication.Windows;
using UAR_WITH_REACT.Models;

namespace UAR_WITH_REACT.Controllers
{
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public AuthenticationController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        //[HttpGet]
        //[Route("api/[controller]")]
        //public string Index()
        //{
        //    string userName = HttpContext.User.Identity.Name;
        //    return userName;
        //}


        [Route("api/[controller]")]
        [HttpPost]
        public IActionResult WindowsAuthentice([FromBody] UserRequest userRequest)
        {

            string validateMsg = userRequest.Validate();

            if(string.IsNullOrEmpty(validateMsg))
            {
                WindowsAuthentication windowsAuthentication = new WindowsAuthentication(userRequest);

                if(windowsAuthentication.Authenticate())
                {
                    return Ok(true);
                }
                else
                {
                    return Unauthorized("Invalid username or password");
                }
            }
            else
            {
                return BadRequest(validateMsg);
            }
        }
    }
}
