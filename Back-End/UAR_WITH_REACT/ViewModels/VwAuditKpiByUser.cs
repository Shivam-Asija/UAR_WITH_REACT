using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class VwAuditKpiByUser
    {
        public string Id { get; set; }
        public string FullName { get; set; }
        public int? TotalQuantityApproved { get; set; }
        public int? TotalQuantityChanged { get; set; }
        public int? TotalQuantityPending { get; set; }
    }
}
