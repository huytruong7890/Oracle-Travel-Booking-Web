using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webtour.Data;
using webtour.Models;

namespace webtour.Controllers
{
    public class BookingsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public BookingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Bookings
        public async Task<IActionResult> Index()
        {
            var bookings = _context.Bookings.Include(b => b.Tour);
            return View(await bookings.ToListAsync());
        }

        // GET: Bookings/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var booking = await _context.Bookings
                .Include(b => b.Tour)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (booking == null)
            {
                return NotFound();
            }

            return View(booking);
        }

        // GET: Bookings/Create
        public IActionResult Create(int? tourId)
        {
            ViewData["TourId"] = new Microsoft.AspNetCore.Mvc.Rendering.SelectList(_context.Tours, "Id", "Destination", tourId);
            ViewBag.TourData = GetTourData();
            return View();
        }

        // POST: Bookings/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,TourId,NumberOfPeople,IsGroup,CustomerName,CustomerEmail")] Booking booking)
        {
            Console.WriteLine($"=== POST Create Called ===");
            Console.WriteLine($"TourId: {booking.TourId}");
            Console.WriteLine($"NumberOfPeople: {booking.NumberOfPeople}");
            Console.WriteLine($"IsGroup: {booking.IsGroup}");
            Console.WriteLine($"CustomerName: {booking.CustomerName}");
            Console.WriteLine($"CustomerEmail: {booking.CustomerEmail}");

            var tour = await _context.Tours.FindAsync(booking.TourId);
            Console.WriteLine($"Found Tour: {(tour != null ? tour.Destination : "NULL")}");
            
            if (tour == null)
            {
                ModelState.AddModelError("TourId", "Tour không tồn tại.");
            }

            // Backend Logic: If IsGroup == 1, then NumberOfPeople must be >= 10
            if (booking.IsGroup == 1 && booking.NumberOfPeople < 10)
            {
                ModelState.AddModelError("NumberOfPeople", "Đặt tour theo đoàn yêu cầu tối thiểu 10 người.");
            }

            // Log ModelState
            if (!ModelState.IsValid)
            {
                Console.WriteLine("=== ModelState Errors ===");
                foreach (var state in ModelState)
                {
                    foreach (var error in state.Value.Errors)
                    {
                        Console.WriteLine($"{state.Key}: {error.ErrorMessage}");
                    }
                }
            }
            else
            {
                Console.WriteLine("ModelState is VALID");
            }

            if (ModelState.IsValid && tour != null)
            {
                try
                {
                    booking.BookingDate = DateTime.Now;
                    booking.TotalPrice = booking.IsGroup == 1 ? tour.PriceGroup * booking.NumberOfPeople : tour.PriceIndividual * booking.NumberOfPeople;
                    Console.WriteLine($"TotalPrice calculated: {booking.TotalPrice}");
                    
                    _context.Add(booking);
                    await _context.SaveChangesAsync();
                    
                    Console.WriteLine("✓ Booking saved successfully!");
                    return RedirectToAction(nameof(Index));
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"✗ Database Error: {ex.Message}");
                    Console.WriteLine($"Stack: {ex.StackTrace}");
                    ModelState.AddModelError("", $"Lỗi lưu dữ liệu: {ex.Message}");
                }
            }
            else
            {
                Console.WriteLine($"ModelState.IsValid: {ModelState.IsValid}, Tour != null: {tour != null}");
            }
            
            ViewData["TourId"] = new Microsoft.AspNetCore.Mvc.Rendering.SelectList(_context.Tours, "Id", "Destination", booking.TourId);
            ViewBag.TourData = GetTourData();
            return View(booking);
        }

        private List<object> GetTourData()
        {
            return _context.Tours
                .Select(t => new
                {
                    t.Id,
                    t.Destination,
                    t.PriceIndividual,
                    t.PriceGroup,
                    t.DurationDays,
                    t.DurationNights,
                    t.Attractions
                })
                .AsEnumerable()
                .Select(t => (object)new
                {
                    t.Id,
                    t.Destination,
                    t.PriceIndividual,
                    t.PriceGroup,
                    t.DurationDays,
                    t.DurationNights,
                    t.Attractions
                })
                .ToList();
        }

        // GET: Bookings/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null)
            {
                return NotFound();
            }
            ViewBag.TourId = new Microsoft.AspNetCore.Mvc.Rendering.SelectList(_context.Tours, "Id", "Destination", booking.TourId);
            return View(booking);
        }

        // POST: Bookings/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,TourId,NumberOfPeople,IsGroup,CustomerName,CustomerEmail")] Booking booking)
        {
            if (id != booking.Id)
            {
                return NotFound();
            }

            var tour = await _context.Tours.FindAsync(booking.TourId);
            if (tour == null)
            {
                ModelState.AddModelError("TourId", "Tour không tồn tại.");
            }

            if (ModelState.IsValid && tour != null)
            {
                try
                {
                    booking.TotalPrice = booking.IsGroup == 1 ? tour.PriceGroup * booking.NumberOfPeople : tour.PriceIndividual * booking.NumberOfPeople;
                    _context.Update(booking);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BookingExists(booking.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewBag.TourId = new Microsoft.AspNetCore.Mvc.Rendering.SelectList(_context.Tours, "Id", "Destination", booking.TourId);
            return View(booking);
        }

        // GET: Bookings/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var booking = await _context.Bookings
                .Include(b => b.Tour)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (booking == null)
            {
                return NotFound();
            }

            return View(booking);
        }

        // POST: Bookings/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking != null)
            {
                _context.Bookings.Remove(booking);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BookingExists(int id)
        {
            return _context.Bookings.Any(e => e.Id == id);
        }
    }
}