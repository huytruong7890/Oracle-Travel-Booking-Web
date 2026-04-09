using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webtour.Models
{
    [Table("BOOKINGS")]
    public class Booking
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }

        [Required(ErrorMessage = "Vui lòng chọn Tour")]
        [Column("TOUR_ID")]
        public int TourId { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập số lượng người")]
        [Range(1, 100, ErrorMessage = "Số lượng người phải từ 1 đến 100")]
        [Column("NUMBER_OF_PEOPLE")]
        public int NumberOfPeople { get; set; }

        [Column("IS_GROUP")]
        public int IsGroup { get; set; }

        [Column("TOTAL_PRICE")]
        public decimal TotalPrice { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tên khách hàng")]
        [StringLength(100, ErrorMessage = "Tên khách hàng không quá 100 ký tự")]
        [Column("CUSTOMER_NAME")]
        public string? CustomerName { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập Email")]
        [EmailAddress(ErrorMessage = "Định dạng Email không hợp lệ")]
        [Column("CUSTOMER_EMAIL")]
        public string? CustomerEmail { get; set; }

    [Column("BOOKING_DATE")]
    public DateTime BookingDate { get; set; } = DateTime.Now;

    [ForeignKey("TourId")]
    public virtual Tour? Tour { get; set; }
    }
}