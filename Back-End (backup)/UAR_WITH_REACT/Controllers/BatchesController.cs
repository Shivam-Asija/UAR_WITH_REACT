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
    public class BatchesController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public BatchesController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/Batches
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblBatch>>> GetTblBatches()
        {
            return await _context.TblBatches.ToListAsync();
        }

        // GET: api/Batches/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblBatch>> GetTblBatch(int id)
        {
            var tblBatch = await _context.TblBatches.FindAsync(id);

            if (tblBatch == null)
            {
                return NotFound();
            }

            return tblBatch;
        }

        // PUT: api/Batches/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblBatch(int id, TblBatch tblBatch)
        {
            if (id != tblBatch.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblBatch).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblBatchExists(id))
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

        // POST: api/Batches
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblBatch>> PostTblBatch(TblBatch tblBatch)
        {
            _context.TblBatches.Add(tblBatch);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblBatch", new { id = tblBatch.Id }, tblBatch);
        }

        // DELETE: api/Batches/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblBatch(int id)
        {
            var tblBatch = await _context.TblBatches.FindAsync(id);
            if (tblBatch == null)
            {
                return NotFound();
            }

            _context.TblBatches.Remove(tblBatch);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblBatchExists(int id)
        {
            return _context.TblBatches.Any(e => e.Id == id);
        }
    }
}
