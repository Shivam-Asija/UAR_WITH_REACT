using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblSystem
    {
        public TblSystem()
        {
            TblAccesses = new HashSet<TblAccess>();
            TblInstances = new HashSet<TblInstance>();
            TblUserAccessRequests = new HashSet<TblUserAccessRequest>();
        }

        public string Id { get; set; }

        public virtual ICollection<TblAccess> TblAccesses { get; set; }
        public virtual ICollection<TblInstance> TblInstances { get; set; }
        public virtual ICollection<TblUserAccessRequest> TblUserAccessRequests { get; set; }
    }
}
