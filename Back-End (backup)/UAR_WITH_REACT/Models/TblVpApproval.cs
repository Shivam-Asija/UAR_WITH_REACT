using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblVpApproval
    {
        public TblVpApproval()
        {
            TblApprovedRequests = new HashSet<TblApprovedRequest>();
        }

        public long Id { get; set; }
        public string StatusId { get; set; }
        public bool? Approved { get; set; }
        public DateTime? ApprovedDate { get; set; }
        public string ApprovedByUsername { get; set; }
        public string ApprovedByName { get; set; }
        public string ApprovedByIpAddress { get; set; }
        public DateTime? RejectedDate { get; set; }
        public string RejectedByUsername { get; set; }
        public string RejectedByName { get; set; }
        public string RejectedByIpAddress { get; set; }
        public bool? Enabled { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public string LastUpdatedByUsername { get; set; }
        public string LastUpdatedByName { get; set; }
        public string LastUpdatedByIpAddress { get; set; }

        public virtual TblStatus Status { get; set; }
        public virtual ICollection<TblApprovedRequest> TblApprovedRequests { get; set; }
    }
}
