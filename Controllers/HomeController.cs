using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webtour.Data;
using webtour.Models;

namespace webtour.Controllers;

public class HomeController : Controller
{
    private readonly ApplicationDbContext _context;

    public HomeController(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> Index(string? destination, int? people, int? days, int? isGroup)
    {
        var tours = _context.Tours.AsQueryable();

        // Filter by destination text
        if (!string.IsNullOrWhiteSpace(destination))
        {
            tours = tours.Where(t => t.Destination.Contains(destination) ||
                                     t.Attractions.Contains(destination));
        }

        // Filter by duration days
        if (days.HasValue && days.Value > 0)
        {
            tours = tours.Where(t => t.DurationDays == days.Value);
        }

        var destinations = await _context.Tours
            .Where(t => !string.IsNullOrEmpty(t.Destination))
            .Select(t => t.Destination)
            .Distinct()
            .OrderBy(d => d)
            .ToListAsync();

        var totalBookings = await _context.Bookings.CountAsync();

        var model = new HomeIndexViewModel
        {
            Tours = await tours.ToListAsync(),
            Destination = destination,
            NumberOfPeople = people.GetValueOrDefault(1),
            DurationDays = days.GetValueOrDefault(0),
            IsGroup = isGroup,
            Destinations = destinations,
            TotalBookings = totalBookings
        };

        return View(model);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}