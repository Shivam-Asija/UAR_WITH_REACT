using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblUserAccessRequest
    {
        public TblUserAccessRequest()
        {
            TblApprovedRequests = new HashSet<TblApprovedRequest>();
            TblChangeRequests = new HashSet<TblChangeRequest>();
        }

        public int BatchId { get; set; }
        public string SystemId { get; set; }
        public string InstanceId { get; set; }
        public long Id { get; set; }
        public string UserId { get; set; }
        public string AccessId { get; set; }
        public bool VpApprovalRequired { get; set; }
        public bool? Enabled { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public string LastUpdatedByUsername { get; set; }
        public string LastUpdatedByName { get; set; }
        public string LastUpdatedByIpAddress { get; set; }
        public string StatusId { get; set; }

        public virtual TblBatch Batch { get; set; }
        public virtual TblInstance Instance { get; set; }
        public virtual TblStatus Status { get; set; }
        public virtual TblSystem System { get; set; }
        public virtual TblUser User { get; set; }
        public virtual ICollection<TblApprovedRequest> TblApprovedRequests { get; set; }
        public virtual ICollection<TblChangeRequest> TblChangeRequests { get; set; }
    }
}
