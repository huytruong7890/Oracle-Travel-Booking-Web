# 🗺️ VietTour: Hệ Thống Đặt Tour Du Lịch Tích Hợp Oracle Database

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![ASP.NET Core](https://img.shields.io/badge/ASP.NET%20Core-10.0-green.svg)](https://dotnet.microsoft.com/)
[![Oracle Database](https://img.shields.io/badge/Oracle-Database%20XE-red.svg)](https://www.oracle.com/database/)

**VietTour** là một nền tảng website đặt tour du lịch cao cấp, được thiết kế đặc biệt nhằm tối ưu hóa sức mạnh của hệ quản trị cơ sở dữ liệu **Oracle**. Dự án tập trung vào việc áp dụng các kỹ thuật quản trị dữ liệu nâng cao như PL/SQL Triggers, Views và Stored Procedures.

---

## ✨ Tính Năng Nổi Bật

### 🌐 Giao Diện & Trải Nghiệm (UI/UX)
- Giao diện **Glassmorphism** hiện đại, sang trọng theo tông màu Blue-Green (Xanh lục bảo).
- Hình ảnh điểm đến được tạo bởi trí tuệ nhân tạo (AI-generated) sắc nét, photorealistic.
- Hệ thống phân trang (Pagination) mượt mà cho danh sách Tour.
- Chế độ in hóa đơn chuyên nghiệp ngay trên trình duyệt.

### 🗄️ Cấu Trúc Oracle Database (Phần Trọng Tâm)
- **Tối ưu hóa Schema:** Sử dụng kiểu dữ liệu Oracle tương thích tuyệt đối (`NUMBER`, `NVARCHAR2`, `TIMESTAMP`).
- **Audit Trail (Nhật ký):** Tự động ghi lại lịch sử thay đổi/xóa dữ liệu Booking thông qua **Database Triggers**.
- **Business Logic:** Tính toán giá tiền phức tạp (Cá nhân vs Đoàn) được xử lý trực tiếp bởi **Stored Procedures**.
- **Reporting:** View tổng hợp doanh thu thời gian thực phục vụ cho Quản trị viên (Dashboard).

---

## 🛠️ Công Nghệ Sử Dụng
- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript.
- **Backend:** C# ASP.NET Core 10, Entity Framework Core.
- **Database:** Oracle Database Express Edition (XE).

---

## 🚀 Hướng Dẫn Cài Đặt

1. **Database Setup:**
   - Đảm bảo đã cài đặt Oracle XE.
   - Chạy script `create_web_tour1.sql` (quyền SYSTEM) để tạo User.
   - Chạy `schema_setup.sql` và `oracle_seed_data.sql` để dựng bảng và nạp dữ liệu.
   
2. **Configuration:**
   - Cập nhật Connection String trong `appsettings.json` với Username và Password của bạn.

3. **Run Application:**
   ```bash
   dotnet build
   dotnet run
   ```

---

## 👨‍💻 Tác giả
- Dự án được xây dựng cho môn học: **Hệ quản trị Cơ sở dữ liệu Oracle**.
- Nhà phát triển: Antigravity AI Assistant & Pair-Programmer.

---
*Bản quyền © 2026 VietTour Project*
