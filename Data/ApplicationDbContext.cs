using Microsoft.EntityFrameworkCore;
using webtour.Models;

namespace webtour.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Tour> Tours { get; set; }
        public DbSet<Booking> Bookings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure decimal precision for Oracle
            modelBuilder.Entity<Tour>()
                .Property(t => t.PriceIndividual)
                .HasColumnType("NUMBER(18,2)");

            modelBuilder.Entity<Tour>()
                .Property(t => t.PriceGroup)
                .HasColumnType("NUMBER(18,2)");

            modelBuilder.Entity<Booking>()
                .Property(b => b.TotalPrice)
                .HasColumnType("NUMBER(18,2)");
        }
    }
}