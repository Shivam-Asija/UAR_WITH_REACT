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
    public class StatusController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public StatusController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/Status
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblStatus>>> GetTblStatuses()
        {
            return await _context.TblStatuses.ToListAsync();
        }

        // GET: api/Status/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblStatus>> GetTblStatus(string id)
        {
            var tblStatus = await _context.TblStatuses.FindAsync(id);

            if (tblStatus == null)
            {
                return NotFound();
            }

            return tblStatus;
        }

        // PUT: api/Status/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblStatus(string id, TblStatus tblStatus)
        {
            if (id != tblStatus.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblStatus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblStatusExists(id))
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

        // POST: api/Status
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblStatus>> PostTblStatus(TblStatus tblStatus)
        {
            _context.TblStatuses.Add(tblStatus);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TblStatusExists(tblStatus.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTblStatus", new { id = tblStatus.Id }, tblStatus);
        }

        // DELETE: api/Status/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblStatus(string id)
        {
            var tblStatus = await _context.TblStatuses.FindAsync(id);
            if (tblStatus == null)
            {
                return NotFound();
            }

            _context.TblStatuses.Remove(tblStatus);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblStatusExists(string id)
        {
            return _context.TblStatuses.Any(e => e.Id == id);
        }
    }
}
