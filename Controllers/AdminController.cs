using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webtour.Data;
using webtour.Models;

using Microsoft.AspNetCore.Authorization;

namespace webtour.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Dashboard()
        {
            var revenues = await _context.Database
                .SqlQueryRaw<TourRevenueViewModel>(@"
                    SELECT 
                        TOUR_ID as TourId, 
                        DESTINATION as Destination, 
                        TOTAL_BOOKINGS as TotalBookings, 
                        TOTAL_GUESTS as TotalGuests, 
                        REVENUE as Revenue, 
                        LATEST_BOOKING_DATE as LatestBookingDate 
                    FROM V_TOUR_REVENUE")
                .ToListAsync();

            var viewModel = new DashboardViewModel
            {
                TourRevenues = revenues
            };

            return View(viewModel);
        }
    }
}
