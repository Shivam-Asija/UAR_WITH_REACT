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
    public class AnnouncementsController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public AnnouncementsController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/Announcements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblAnnouncement>>> GetTblAnnouncements()
        {
            return await _context.TblAnnouncements.ToListAsync();
        }

        // GET: api/Announcements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblAnnouncement>> GetTblAnnouncement(int id)
        {
            var tblAnnouncement = await _context.TblAnnouncements.FindAsync(id);

            if (tblAnnouncement == null)
            {
                return NotFound();
            }

            return tblAnnouncement;
        }

        // PUT: api/Announcements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblAnnouncement(int id, TblAnnouncement tblAnnouncement)
        {
            if (id != tblAnnouncement.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblAnnouncement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblAnnouncementExists(id))
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

        // POST: api/Announcements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblAnnouncement>> PostTblAnnouncement(TblAnnouncement tblAnnouncement)
        {
            _context.TblAnnouncements.Add(tblAnnouncement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblAnnouncement", new { id = tblAnnouncement.Id }, tblAnnouncement);
        }

        // DELETE: api/Announcements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblAnnouncement(int id)
        {
            var tblAnnouncement = await _context.TblAnnouncements.FindAsync(id);
            if (tblAnnouncement == null)
            {
                return NotFound();
            }

            _context.TblAnnouncements.Remove(tblAnnouncement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblAnnouncementExists(int id)
        {
            return _context.TblAnnouncements.Any(e => e.Id == id);
        }
    }
}
