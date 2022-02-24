using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace UAR_WITH_REACT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class loginUsernameController : ControllerBase   
    {
        public IActionResult Index()
        {
            string User = Environment.UserName;
            Console.WriteLine(User);
            return Ok(User);
        }
    }
}
