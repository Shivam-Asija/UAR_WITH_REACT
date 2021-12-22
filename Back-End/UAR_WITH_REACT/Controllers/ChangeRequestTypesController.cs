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
    public class ChangeRequestTypesController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public ChangeRequestTypesController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/ChangeRequestTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblChangeRequestType>>> GetTblChangeRequestTypes()
        {
            return await _context.TblChangeRequestTypes.ToListAsync();
        }

        // GET: api/ChangeRequestTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblChangeRequestType>> GetTblChangeRequestType(string id)
        {
            var tblChangeRequestType = await _context.TblChangeRequestTypes.FindAsync(id);

            if (tblChangeRequestType == null)
            {
                return NotFound();
            }

            return tblChangeRequestType;
        }

        // PUT: api/ChangeRequestTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblChangeRequestType(string id, TblChangeRequestType tblChangeRequestType)
        {
            if (id != tblChangeRequestType.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblChangeRequestType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblChangeRequestTypeExists(id))
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

        // POST: api/ChangeRequestTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblChangeRequestType>> PostTblChangeRequestType(TblChangeRequestType tblChangeRequestType)
        {
            _context.TblChangeRequestTypes.Add(tblChangeRequestType);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TblChangeRequestTypeExists(tblChangeRequestType.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTblChangeRequestType", new { id = tblChangeRequestType.Id }, tblChangeRequestType);
        }

        // DELETE: api/ChangeRequestTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblChangeRequestType(string id)
        {
            var tblChangeRequestType = await _context.TblChangeRequestTypes.FindAsync(id);
            if (tblChangeRequestType == null)
            {
                return NotFound();
            }

            _context.TblChangeRequestTypes.Remove(tblChangeRequestType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblChangeRequestTypeExists(string id)
        {
            return _context.TblChangeRequestTypes.Any(e => e.Id == id);
        }
    }
}
