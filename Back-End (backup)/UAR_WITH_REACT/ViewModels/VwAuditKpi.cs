using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class VwAuditKpi
    {
        public string Id { get; set; }
        public string FullName { get; set; }
        public string SystemId { get; set; }
        public int QuantityApproved { get; set; }
        public int QuantityChanged { get; set; }
        public int QuantityPending { get; set; }
    }
}
