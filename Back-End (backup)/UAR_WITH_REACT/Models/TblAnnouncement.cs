using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblAnnouncement
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Message { get; set; }
        public DateTime? CreateDate { get; set; }
        public string CreatedByUsername { get; set; }
        public string CreatedByName { get; set; }
        public string CreatedByIpAddress { get; set; }
        public bool? Enabled { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public string LastUpdatedByUsername { get; set; }
        public string LastUpdatedByName { get; set; }
        public string LastUpdatedByIpAddress { get; set; }
    }
}
