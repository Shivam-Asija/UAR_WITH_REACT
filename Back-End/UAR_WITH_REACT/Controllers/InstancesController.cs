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
    public class InstancesController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public InstancesController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/Instances
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblInstance>>> GetTblInstances()
        {
            return await _context.TblInstances.ToListAsync();
        }

        // GET: api/Instances/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblInstance>> GetTblInstance(string id)
        {
            var tblInstance = await _context.TblInstances.FindAsync(id);

            if (tblInstance == null)
            {
                return NotFound();
            }

            return tblInstance;
        }

        // PUT: api/Instances/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblInstance(string id, TblInstance tblInstance)
        {
            if (id != tblInstance.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblInstance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblInstanceExists(id))
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

        // POST: api/Instances
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblInstance>> PostTblInstance(TblInstance tblInstance)
        {
            _context.TblInstances.Add(tblInstance);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TblInstanceExists(tblInstance.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTblInstance", new { id = tblInstance.Id }, tblInstance);
        }

        // DELETE: api/Instances/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblInstance(string id)
        {
            var tblInstance = await _context.TblInstances.FindAsync(id);
            if (tblInstance == null)
            {
                return NotFound();
            }

            _context.TblInstances.Remove(tblInstance);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblInstanceExists(string id)
        {
            return _context.TblInstances.Any(e => e.Id == id);
        }
    }
}
