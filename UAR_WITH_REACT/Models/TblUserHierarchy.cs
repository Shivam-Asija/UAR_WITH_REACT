using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblUserHierarchy
    {
        public int BatchId { get; set; }
        public string UserId { get; set; }
        public string ManagerId { get; set; }

        public virtual TblBatch Batch { get; set; }
        public virtual TblUser Manager { get; set; }
        public virtual TblUser User { get; set; }
    }
}
