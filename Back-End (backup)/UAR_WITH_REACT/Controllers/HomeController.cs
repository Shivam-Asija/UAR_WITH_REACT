using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UAR_WITH_REACT.Models;

namespace UAR_WITH_REACT.Controllers
{
    //[Authorize]
    //[Route("api/[controller]")]
    //[ApiController]
    //public class HomeController : ControllerBase
    //{
    //    private readonly UARAuditAppDbContext _context;

    //    public HomeController(UARAuditAppDbContext context)
    //    {
    //        _context = context;
    //    }

    //    // GET: api/ChangeRequests
    //    [HttpGet]
    //    public async Task<ActionResult<IEnumerable<TblChangeRequest>>> GetTblChangeRequests()
    //    {
    //        return Ok(true);
    //    }



    //    private bool TblChangeRequestExists(long id)
    //    {
    //        return _context.TblChangeRequests.Any(e => e.Id == id);
    //    }
    //}
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        public IActionResult Index()
        {

            return Redirect("http://localhost:3000/");
        }
        
        
    }

}
