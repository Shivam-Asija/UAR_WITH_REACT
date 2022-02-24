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
    public class UserHierarchiesController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public UserHierarchiesController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/UserHierarchies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblUserHierarchy>>> GetTblUserHierarchies()
        {
            return await _context.TblUserHierarchies.ToListAsync();
        }

        // GET: api/UserHierarchies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblUserHierarchy>> GetTblUserHierarchy(int id)
        {
            var tblUserHierarchy = await _context.TblUserHierarchies.FindAsync(id);

            if (tblUserHierarchy == null)
            {
                return NotFound();
            }

            return tblUserHierarchy;
        }

        // PUT: api/UserHierarchies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblUserHierarchy(int id, TblUserHierarchy tblUserHierarchy)
        {
            if (id != tblUserHierarchy.BatchId)
            {
                return BadRequest();
            }

            _context.Entry(tblUserHierarchy).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblUserHierarchyExists(id))
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

        // POST: api/UserHierarchies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblUserHierarchy>> PostTblUserHierarchy(TblUserHierarchy tblUserHierarchy)
        {
            _context.TblUserHierarchies.Add(tblUserHierarchy);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TblUserHierarchyExists(tblUserHierarchy.BatchId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTblUserHierarchy", new { id = tblUserHierarchy.BatchId }, tblUserHierarchy);
        }

        // DELETE: api/UserHierarchies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblUserHierarchy(int id)
        {
            var tblUserHierarchy = await _context.TblUserHierarchies.FindAsync(id);
            if (tblUserHierarchy == null)
            {
                return NotFound();
            }

            _context.TblUserHierarchies.Remove(tblUserHierarchy);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblUserHierarchyExists(int id)
        {
            return _context.TblUserHierarchies.Any(e => e.BatchId == id);
        }
    }
}
