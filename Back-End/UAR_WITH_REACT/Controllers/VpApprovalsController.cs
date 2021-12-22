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
    public class VpApprovalsController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public VpApprovalsController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/VpApprovals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblVpApproval>>> GetTblVpApprovals()
        {
            return await _context.TblVpApprovals.ToListAsync();
        }

        // GET: api/VpApprovals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblVpApproval>> GetTblVpApproval(long id)
        {
            var tblVpApproval = await _context.TblVpApprovals.FindAsync(id);

            if (tblVpApproval == null)
            {
                return NotFound();
            }

            return tblVpApproval;
        }

        // PUT: api/VpApprovals/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblVpApproval(long id, TblVpApproval tblVpApproval)
        {
            if (id != tblVpApproval.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblVpApproval).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblVpApprovalExists(id))
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

        // POST: api/VpApprovals
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblVpApproval>> PostTblVpApproval(TblVpApproval tblVpApproval)
        {
            _context.TblVpApprovals.Add(tblVpApproval);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblVpApproval", new { id = tblVpApproval.Id }, tblVpApproval);
        }

        // DELETE: api/VpApprovals/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblVpApproval(long id)
        {
            var tblVpApproval = await _context.TblVpApprovals.FindAsync(id);
            if (tblVpApproval == null)
            {
                return NotFound();
            }

            _context.TblVpApprovals.Remove(tblVpApproval);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblVpApprovalExists(long id)
        {
            return _context.TblVpApprovals.Any(e => e.Id == id);
        }
    }
}
