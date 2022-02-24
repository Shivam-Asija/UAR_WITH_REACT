using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UAR_WITH_REACT.Models;

namespace UAR_WITH_REACT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAccessRequestsController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public UserAccessRequestsController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/UserAccessRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblUserAccessRequest>>> GetTblUserAccessRequests()
        {
            return await _context.TblUserAccessRequests.Where(b=> b.BatchId == 21).ToListAsync();
        }

        // GET: api/UserAccessRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblUserAccessRequest>> GetTblUserAccessRequest(long id)
        {
            var tblUserAccessRequest = await _context.TblUserAccessRequests.FindAsync(id);

            if (tblUserAccessRequest == null)
            {
                return NotFound();
            }

            return tblUserAccessRequest;
        }

        // PUT: api/UserAccessRequests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblUserAccessRequest(long id, TblUserAccessRequest tblUserAccessRequest)
        {
            if (id != tblUserAccessRequest.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblUserAccessRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblUserAccessRequestExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserAccessRequests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblUserAccessRequest>> PostTblUserAccessRequest(TblUserAccessRequest tblUserAccessRequest)
        {
            _context.TblUserAccessRequests.Add(tblUserAccessRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblUserAccessRequest", new { id = tblUserAccessRequest.Id }, tblUserAccessRequest);
        }

        // DELETE: api/UserAccessRequests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblUserAccessRequest(long id)
        {
            var tblUserAccessRequest = await _context.TblUserAccessRequests.FindAsync(id);
            if (tblUserAccessRequest == null)
            {
                return NotFound();
            }

            _context.TblUserAccessRequests.Remove(tblUserAccessRequest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblUserAccessRequestExists(long id)
        {
            return _context.TblUserAccessRequests.Any(e => e.Id == id);
        }
    }
}
