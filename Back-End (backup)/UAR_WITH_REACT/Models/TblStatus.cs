using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblStatus
    {
        public TblStatus()
        {
            TblChangeRequests = new HashSet<TblChangeRequest>();
            TblUserAccessRequests = new HashSet<TblUserAccessRequest>();
            TblVpApprovals = new HashSet<TblVpApproval>();
        }

        public string Id { get; set; }

        public virtual ICollection<TblChangeRequest> TblChangeRequests { get; set; }
        public virtual ICollection<TblUserAccessRequest> TblUserAccessRequests { get; set; }
        public virtual ICollection<TblVpApproval> TblVpApprovals { get; set; }
    }
}
