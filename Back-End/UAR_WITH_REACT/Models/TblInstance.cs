using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblInstance
    {
        public TblInstance()
        {
            TblUserAccessRequests = new HashSet<TblUserAccessRequest>();
        }

        public string SystemId { get; set; }
        public string Id { get; set; }

        public virtual TblSystem System { get; set; }
        public virtual ICollection<TblUserAccessRequest> TblUserAccessRequests { get; set; }
    }
}
