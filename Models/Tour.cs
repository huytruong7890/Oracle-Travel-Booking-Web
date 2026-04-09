using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webtour.Models
{
    public class Tour
    {
        public int Id { get; set; }

        public required string Destination { get; set; }

        public int DurationDays { get; set; }

        public int DurationNights { get; set; }

        public required string Attractions { get; set; }

        public decimal PriceIndividual { get; set; }

        public decimal PriceGroup { get; set; }
    }
}