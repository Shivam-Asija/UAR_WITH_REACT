using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblApprovedRequest
    {
        public long UserAccessRequestId { get; set; }
        public long Id { get; set; }
        public DateTime ApprovedDate { get; set; }
        public string ApprovedByUsername { get; set; }
        public string ApprovedByName { get; set; }
        public string ApprovedByIpAddress { get; set; }
        public long? VpApprovalId { get; set; }
        public bool? Enabled { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public string LastUpdatedByUsername { get; set; }
        public string LastUpdatedByName { get; set; }
        public string LastUpdatedByIpAddress { get; set; }

        public virtual TblUserAccessRequest UserAccessRequest { get; set; }
        public virtual TblVpApproval VpApproval { get; set; }
    }
}
