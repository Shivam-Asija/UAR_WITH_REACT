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
    public class AccessesController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public AccessesController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/TblAccesses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblAccess>>> GetTblAccesses()
        {
            return await _context.TblAccesses.ToListAsync();
        }

        // GET: api/TblAccesses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblAccess>> GetTblAccess(string id)
        {
            var tblAccess = await _context.TblAccesses.FindAsync(id);

            if (tblAccess == null)
            {
                return NotFound();
            }

            return tblAccess;
        }

        // PUT: api/TblAccesses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblAccess(string id, TblAccess tblAccess)
        {
            if (id != tblAccess.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblAccess).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblAccessExists(id))
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

        // POST: api/TblAccesses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblAccess>> PostTblAccess(TblAccess tblAccess)
        {
            _context.TblAccesses.Add(tblAccess);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TblAccessExists(tblAccess.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTblAccess", new { id = tblAccess.Id }, tblAccess);
        }

        // DELETE: api/TblAccesses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblAccess(string id)
        {
            var tblAccess = await _context.TblAccesses.FindAsync(id);
            if (tblAccess == null)
            {
                return NotFound();
            }

            _context.TblAccesses.Remove(tblAccess);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblAccessExists(string id)
        {
            return _context.TblAccesses.Any(e => e.Id == id);
        }
    }
}
