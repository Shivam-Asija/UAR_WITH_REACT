using System.Collections.Generic;

namespace SpectrumReach.Authentication.Windows.Models
{
    public class UserModel
    {
        public string Name { get; set; }
        public string DisplayName { get; internal set; }
        public string FirstName { get; internal set; }
        public string Surname { get; internal set; }
        public string EmailAddress { get; internal set; }
        public bool IsAuthenticated { get; set; }
        public List<string> Roles { get; set; }
    }
}
