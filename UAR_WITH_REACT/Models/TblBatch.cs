using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblBatch
    {
        public TblBatch()
        {
            TblUserAccessRequests = new HashSet<TblUserAccessRequest>();
            TblUserHierarchies = new HashSet<TblUserHierarchy>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public long? Size { get; set; }
        public bool? Active { get; set; }
        public DateTime? CreateDate { get; set; }
        public string CreatedByUsername { get; set; }
        public string CreatedByName { get; set; }
        public string CreatedByIpAddress { get; set; }
        public bool? Enabled { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public string LastUpdatedByUsername { get; set; }
        public string LastUpdatedByName { get; set; }
        public string LastUpdatedByIpAddress { get; set; }
        public string System { get; set; }

        public virtual ICollection<TblUserAccessRequest> TblUserAccessRequests { get; set; }
        public virtual ICollection<TblUserHierarchy> TblUserHierarchies { get; set; }
    }
}
