using System.ComponentModel.DataAnnotations;

namespace webtour.Models
{
    public class TourRevenueViewModel
    {
        public int TourId { get; set; }
        public string? Destination { get; set; }
        public int TotalBookings { get; set; }
        public int TotalGuests { get; set; }
        public decimal Revenue { get; set; }
        public DateTime? LatestBookingDate { get; set; }
    }

    public class DashboardViewModel
    {
        public List<TourRevenueViewModel> TourRevenues { get; set; } = new();
        public decimal TotalRevenue => TourRevenues.Sum(x => x.Revenue);
        public int TotalSystemBookings => TourRevenues.Sum(x => x.TotalBookings);
    }
}
