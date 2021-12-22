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
    public class CompletedRequestsController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public CompletedRequestsController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/CompletedRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblCompletedRequest>>> GetTblCompletedRequests()
        {
            return await _context.TblCompletedRequests.ToListAsync();
        }

        // GET: api/CompletedRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblCompletedRequest>> GetTblCompletedRequest(long id)
        {
            var tblCompletedRequest = await _context.TblCompletedRequests.FindAsync(id);

            if (tblCompletedRequest == null)
            {
                return NotFound();
            }

            return tblCompletedRequest;
        }

        // PUT: api/CompletedRequests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblCompletedRequest(long id, TblCompletedRequest tblCompletedRequest)
        {
            if (id != tblCompletedRequest.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblCompletedRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblCompletedRequestExists(id))
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

        // POST: api/CompletedRequests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblCompletedRequest>> PostTblCompletedRequest(TblCompletedRequest tblCompletedRequest)
        {
            _context.TblCompletedRequests.Add(tblCompletedRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblCompletedRequest", new { id = tblCompletedRequest.Id }, tblCompletedRequest);
        }

        // DELETE: api/CompletedRequests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblCompletedRequest(long id)
        {
            var tblCompletedRequest = await _context.TblCompletedRequests.FindAsync(id);
            if (tblCompletedRequest == null)
            {
                return NotFound();
            }

            _context.TblCompletedRequests.Remove(tblCompletedRequest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblCompletedRequestExists(long id)
        {
            return _context.TblCompletedRequests.Any(e => e.Id == id);
        }
    }
}
