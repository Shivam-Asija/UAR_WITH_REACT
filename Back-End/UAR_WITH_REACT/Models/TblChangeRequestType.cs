using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblChangeRequestType
    {
        public TblChangeRequestType()
        {
            TblChangeRequests = new HashSet<TblChangeRequest>();
        }

        public string Id { get; set; }

        public virtual ICollection<TblChangeRequest> TblChangeRequests { get; set; }
    }
}
