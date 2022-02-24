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
    public class ChangeRequestsController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public ChangeRequestsController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/ChangeRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblChangeRequest>>> GetTblChangeRequests()
        {
            return await _context.TblChangeRequests.ToListAsync();
        }

        // GET: api/ChangeRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblChangeRequest>> GetTblChangeRequest(long id)
        {
            var tblChangeRequest = await _context.TblChangeRequests.FindAsync(id);

            if (tblChangeRequest == null)
            {
                return NotFound();
            }

            return tblChangeRequest;
        }

        // PUT: api/ChangeRequests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblChangeRequest(long id, TblChangeRequest tblChangeRequest)
        {
            if (id != tblChangeRequest.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblChangeRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblChangeRequestExists(id))
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

        // POST: api/ChangeRequests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblChangeRequest>> PostTblChangeRequest(TblChangeRequest tblChangeRequest)
        {
            _context.TblChangeRequests.Add(tblChangeRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblChangeRequest", new { id = tblChangeRequest.Id }, tblChangeRequest);
        }

        // DELETE: api/ChangeRequests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblChangeRequest(long id)
        {
            var tblChangeRequest = await _context.TblChangeRequests.FindAsync(id);
            if (tblChangeRequest == null)
            {
                return NotFound();
            }

            _context.TblChangeRequests.Remove(tblChangeRequest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblChangeRequestExists(long id)
        {
            return _context.TblChangeRequests.Any(e => e.Id == id);
        }
    }
}
