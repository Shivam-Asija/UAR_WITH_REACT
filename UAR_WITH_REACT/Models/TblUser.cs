using System;
using System.Collections.Generic;

#nullable disable

namespace UAR_WITH_REACT.Models
{
    public partial class TblUser
    {
        public TblUser()
        {
            TblUserAccessRequests = new HashSet<TblUserAccessRequest>();
            TblUserHierarchyManagers = new HashSet<TblUserHierarchy>();
            TblUserHierarchyUsers = new HashSet<TblUserHierarchy>();
        }

        public string Id { get; set; }
        public string FullName { get; set; }
        public string Title { get; set; }

        public virtual ICollection<TblUserAccessRequest> TblUserAccessRequests { get; set; }
        public virtual ICollection<TblUserHierarchy> TblUserHierarchyManagers { get; set; }
        public virtual ICollection<TblUserHierarchy> TblUserHierarchyUsers { get; set; }
    }
}
