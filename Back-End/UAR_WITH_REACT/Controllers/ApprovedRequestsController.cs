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
    public class ApprovedRequestsController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public ApprovedRequestsController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/ApprovedRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblApprovedRequest>>> GetTblApprovedRequests()
        {
            return await _context.TblApprovedRequests.ToListAsync();
        }

        // GET: api/ApprovedRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblApprovedRequest>> GetTblApprovedRequest(long id)
        {
            var tblApprovedRequest = await _context.TblApprovedRequests.FindAsync(id);

            if (tblApprovedRequest == null)
            {
                return NotFound();
            }

            return tblApprovedRequest;
        }

        // PUT: api/ApprovedRequests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblApprovedRequest(long id, TblApprovedRequest tblApprovedRequest)
        {
            if (id != tblApprovedRequest.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblApprovedRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblApprovedRequestExists(id))
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

        // POST: api/ApprovedRequests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblApprovedRequest>> PostTblApprovedRequest(TblApprovedRequest tblApprovedRequest)
        {
            _context.TblApprovedRequests.Add(tblApprovedRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblApprovedRequest", new { id = tblApprovedRequest.Id }, tblApprovedRequest);
        }

        // DELETE: api/ApprovedRequests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblApprovedRequest(long id)
        {
            var tblApprovedRequest = await _context.TblApprovedRequests.FindAsync(id);
            if (tblApprovedRequest == null)
            {
                return NotFound();
            }

            _context.TblApprovedRequests.Remove(tblApprovedRequest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblApprovedRequestExists(long id)
        {
            return _context.TblApprovedRequests.Any(e => e.Id == id);
        }
    }
}
