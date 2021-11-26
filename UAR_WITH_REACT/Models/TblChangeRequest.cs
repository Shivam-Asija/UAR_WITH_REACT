using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblChangeRequest
    {
        public TblChangeRequest()
        {
            TblCompletedRequests = new HashSet<TblCompletedRequest>();
        }

        public long UserAccessRequestId { get; set; }
        public long Id { get; set; }
        public string DestinationAccessId { get; set; }
        public string DestinationSupervisor { get; set; }
        public string RequestTypeId { get; set; }
        public string StatusId { get; set; }
        public DateTime? RequestDate { get; set; }
        public string RequestByUsername { get; set; }
        public string RequestByName { get; set; }
        public string RequestByIpAddress { get; set; }
        public bool? Enabled { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public string LastUpdatedByUsername { get; set; }
        public string LastUpdatedByName { get; set; }
        public string LastUpdatedByIpAddress { get; set; }

        public virtual TblAccess DestinationAccess { get; set; }
        public virtual TblChangeRequestType RequestType { get; set; }
        public virtual TblStatus Status { get; set; }
        public virtual TblUserAccessRequest UserAccessRequest { get; set; }
        public virtual ICollection<TblCompletedRequest> TblCompletedRequests { get; set; }
    }
}
