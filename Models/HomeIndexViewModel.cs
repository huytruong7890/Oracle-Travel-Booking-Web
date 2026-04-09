using System.Collections.Generic;

namespace webtour.Models
{
    public class HomeIndexViewModel
    {
        public List<Tour> Tours { get; set; } = new();
        public string? Destination { get; set; }
        public int NumberOfPeople { get; set; } = 1;
        public int DurationDays { get; set; } = 0;
        public int? IsGroup { get; set; }
        public List<string> Destinations { get; set; } = new();
        public int TotalBookings { get; set; } = 0;
    }
}