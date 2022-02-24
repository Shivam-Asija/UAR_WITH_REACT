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
    public class SystemsController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public SystemsController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/Systems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblSystem>>> GetTblSystems()
        {
            return await _context.TblSystems.ToListAsync();
        }

        // GET: api/Systems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblSystem>> GetTblSystem(string id)
        {
            var tblSystem = await _context.TblSystems.FindAsync(id);

            if (tblSystem == null)
            {
                return NotFound();
            }

            return tblSystem;
        }

        // PUT: api/Systems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblSystem(string id, TblSystem tblSystem)
        {
            if (id != tblSystem.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblSystem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblSystemExists(id))
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

        // POST: api/Systems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblSystem>> PostTblSystem(TblSystem tblSystem)
        {
            _context.TblSystems.Add(tblSystem);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TblSystemExists(tblSystem.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTblSystem", new { id = tblSystem.Id }, tblSystem);
        }

        // DELETE: api/Systems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblSystem(string id)
        {
            var tblSystem = await _context.TblSystems.FindAsync(id);
            if (tblSystem == null)
            {
                return NotFound();
            }

            _context.TblSystems.Remove(tblSystem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblSystemExists(string id)
        {
            return _context.TblSystems.Any(e => e.Id == id);
        }
    }
}
