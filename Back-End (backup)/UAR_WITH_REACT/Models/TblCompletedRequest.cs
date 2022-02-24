using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblCompletedRequest
    {
        public long ChangeRequestId { get; set; }
        public long Id { get; set; }
        public string Url { get; set; }
        public string Evidence { get; set; }
        public DateTime CorrectionDate { get; set; }
        public DateTime CompletedDate { get; set; }
        public string CompletedByUsername { get; set; }
        public string CompletedByName { get; set; }
        public string CompletedByIpAddress { get; set; }
        public bool? Enabled { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public string LastUpdatedByUsername { get; set; }
        public string LastUpdatedByName { get; set; }
        public string LastUpdatedByIpAddress { get; set; }

        public virtual TblChangeRequest ChangeRequest { get; set; }
    }
}
