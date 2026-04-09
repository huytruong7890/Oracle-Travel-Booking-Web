# 📁 Đặc Tả Cơ Sở Dữ Liệu Oracle: VietTour System

Tài liệu này mô tả chi tiết kiến trúc, sơ đồ quan hệ và các logic nghiệp vụ được lưu trữ bên trong cơ sở dữ liệu Oracle của hệ thống VietTour.

---

## 📊 1. Sơ đồ Quan hệ Thực thể (ERD)

Dưới đây là cấu trúc liên kết giữa các bảng chính trong hệ thống:

```mermaid
erDiagram
    TOURS ||--o{ BOOKINGS : "mối quan hệ 1-N"
    BOOKINGS ||--o{ BOOKING_AUDIT : "ghi nhật ký"
    
    TOURS {
        number(10) Id PK
        nvarchar2(2000) Destination
        number(10) DurationDays
        number(10) DurationNights
        nvarchar2(2000) Attractions
        number(18,2) PriceIndividual
        number(18,2) PriceGroup
    }
    
    BOOKINGS {
        number(10) ID PK
        number(10) TOUR_ID FK
        number(10) NUMBER_OF_PEOPLE
        number(10) IS_GROUP
        number(18,2) TOTAL_PRICE
        nvarchar2(2000) CUSTOMER_NAME
        nvarchar2(2000) CUSTOMER_EMAIL
        timestamp(7) BOOKING_DATE
    }
    
    BOOKING_AUDIT {
        number(10) AUDIT_ID PK
        number(10) BOOKING_ID
        varchar2(50) ACTION
        number(18,2) OLD_PRICE
        number(18,2) NEW_PRICE
        varchar2(100) MODIFIED_BY
        timestamp(7) MODIFIED_DATE
    }
```

---

## 🛠️ 2. Chi Tiết Lập Trình Trong CSDL (PL/SQL)

### A. Trigger Kiểm Soát Tính Toàn Vẹn (`TRG_CHECK_BOOKING`)
- **Sự kiện:** `BEFORE INSERT OR UPDATE` trên bảng `BOOKINGS`.
- **Mục đích:** Đảm bảo dữ liệu gửi từ Web luôn hợp lệ trước khi được ghi vào đĩa cứng.
- **Logic:**
    - Ngăn chặn số lượng khách âm hoặc bằng 0 (`RAISE_APPLICATION_ERROR -20001`).
    - Ngăn chặn giá tiền âm (`RAISE_APPLICATION_ERROR -20002`).
    - Tự động chuẩn hóa Email khách hàng về dạng chữ thường (`LOWER`).

### B. Trigger Nhật Ký Kiểm Toán (`TRG_AUDIT_BOOKING`)
- **Sự kiện:** `AFTER UPDATE OR DELETE` trên bảng `BOOKINGS`.
- **Mục đích:** Lưu trữ vết tích thay đổi để phục vụ công tác hậu kiểm và an ninh dữ liệu.
- **Dữ liệu ghi lại:** Giá trị cũ, giá trị mới, tên người tác động (User) và thời gian chính xác.

### C. Stored Procedure Tính Giá (`PROC_CALCULATE_PRICE`)
- **Mục đích:** Tập trung hóa logic tính toán tiền tour tại một nơi duy nhất.
- **Ưu điểm:** Giảm tải xử lý cho Web Server và đảm bảo tính nhất quán (Consistency). Nếu chính sách giá thay đổi, chỉ cần cập nhật Procedure mà không cần sửa code C#.

### D. View Thống Kê Doanh Thu (`V_TOUR_REVENUE`)
- **Mục đích:** Tổng hợp dữ liệu từ nhiều bảng để phục vụ báo cáo Dashboard.
- **Các chỉ số cung cấp:** Tổng lượt đặt, tổng số khách, tổng doanh thu thực tế, ngày đặt gần nhất của từng tour.

---

## 🔐 3. Bảo Mật & Phân Quyền
- Hệ thống hoạt động dưới Schema **`web_tour1`** với mật khẩu mã hóa.
- Sử dụng **Parameterized Queries** trong C# để chống tấn công **SQL Injection**.
- Các logic ràng buộc (Check Constraints) được thực thi ở tầng thấp nhất (Database Layer) để đảm bảo dữ liệu luôn sạch, dù được truy cập từ Web hay từ các công cụ quản lý khác.

---
*Tài liệu được khởi tạo tự động phục vụ cho Đồ án Hệ quản trị CSDL Oracle.*
