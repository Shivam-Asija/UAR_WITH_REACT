using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UAR_WITH_REACT.Models;

namespace UAR_WITH_REACT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EclipsePendingController : ControllerBase
    {

        private readonly UARAuditAppDbContext _context;

        public EclipsePendingController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<TblUserAccessRequest>>> GetTblUserAccessRequests()
        //{
        //    var userAccessRequest = _context.TblUserAccessRequests.Where(b => b.BatchId == 21).ToListAsync();
        //    var batch = _context.TblBatches.Where(b => b.Active.ToString() == "1").ToListAsync();
        //    var user = _context.TblUsers.ToListAsync();
        //    var manager = _context.TblUserHierarchies.ToListAsync();
        //    IEnumerable test = (IEnumerable)userAccessRequest;

        //    var join = _context.TblUserAccessRequests.Join(_context.TblUserHierarchies, x => x.Id, y=> y.UserId, (x,y)=> new { X = x, Y = y });

        //    return await _context.TblUserAccessRequests.Where(b => b.BatchId == 21).ToListAsync();
        //}
    }
}
