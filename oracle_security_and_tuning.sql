-- ===============================================================
-- 🚀 ORACLE SECURITY, PERFORMANCE & INTEGRITY SCRIPT
-- ===============================================================
SET DEFINE OFF;
ALTER SESSION SET "_ORACLE_SCRIPT"=true;

-- ---------------------------------------------------------------
-- PHẦN 1: TỐI ƯU HIỆU NĂNG & RÀNG BUỘC (Chạy với quyền web_tour1)
-- ---------------------------------------------------------------
PROMPT ==== ĐANG THIẾT LẬP TỐI ƯU HÓA & RÀNG BUỘC CHO WEB_TOUR1 ====;

-- 1.1 Thêm Indexes nâng cao
-- Tăng tốc tìm kiếm Tour theo địa điểm (Destination)
CREATE INDEX WEB_TOUR1."IX_TOURS_DESTINATION" ON WEB_TOUR1."Tours" ("Destination");
-- Tăng tốc tra cứu khách hàng trong bảng Bookings
CREATE INDEX WEB_TOUR1."IX_BOOKINGS_CUST_NAME" ON WEB_TOUR1."BOOKINGS" ("CUSTOMER_NAME");
CREATE INDEX WEB_TOUR1."IX_BOOKINGS_CUST_EMAIL" ON WEB_TOUR1."BOOKINGS" ("CUSTOMER_EMAIL");

-- 1.2 Thêm Check Constraints (Ràng buộc kiểm tra)
-- Đảm bảo số lượng người luôn lớn hơn 0 ở mức độ bảng
ALTER TABLE WEB_TOUR1."BOOKINGS" ADD CONSTRAINT "CH_BOOKINGS_PEOPLE" CHECK ("NUMBER_OF_PEOPLE" > 0);
-- Đảm bảo giá tiền không bao giờ âm
ALTER TABLE WEB_TOUR1."BOOKINGS" ADD CONSTRAINT "CH_BOOKINGS_PRICE" CHECK ("TOTAL_PRICE" >= 0);

-- ---------------------------------------------------------------
-- PHẦN 2: PHÂN QUYỀN & BẢO MẬT (Security Roles)
-- Ghi chú: Cần quyền SYSTEM để chạy các lệnh GRANT/CREATE ROLE dưới đây
-- ---------------------------------------------------------------
PROMPT ==== ĐANG THIẾT LẬP PHÂN QUYỀN (RBAC) ====;

-- 2.1 Tạo các Role chuyên biệt
DROP ROLE TOUR_STAFF_ROLE;
DROP ROLE TOUR_ADMIN_ROLE;

CREATE ROLE TOUR_STAFF_ROLE;
CREATE ROLE TOUR_ADMIN_ROLE;

-- 2.2 Cấp quyền cho Role NHÂN VIÊN (STAFF)
-- Chỉ được SELECT bảng Tours, INSERT/UPDATE bảng Bookings. KHÔNG ĐƯỢC XÓA (DELETE).
GRANT SELECT ON WEB_TOUR1."Tours" TO TOUR_STAFF_ROLE;
GRANT SELECT, INSERT, UPDATE ON WEB_TOUR1."BOOKINGS" TO TOUR_STAFF_ROLE;
GRANT EXECUTE ON WEB_TOUR1."PKG_TOUR_LOGIC" TO TOUR_STAFF_ROLE;

-- 2.3 Cấp quyền cho Role QUẢN TRỊ (ADMIN)
-- Toàn quyền trên mọi đối tượng của schema WEB_TOUR1
GRANT ALL PRIVILEGES ON WEB_TOUR1."Tours" TO TOUR_ADMIN_ROLE;
GRANT ALL PRIVILEGES ON WEB_TOUR1."BOOKINGS" TO TOUR_ADMIN_ROLE;
GRANT ALL PRIVILEGES ON WEB_TOUR1."BOOKING_AUDIT" TO TOUR_ADMIN_ROLE;
GRANT ALL PRIVILEGES ON WEB_TOUR1."V_TOUR_REVENUE" TO TOUR_ADMIN_ROLE;
GRANT EXECUTE ON WEB_TOUR1."PKG_TOUR_LOGIC" TO TOUR_ADMIN_ROLE;

-- 2.4 Tạo User mẫu để Demo bảo mật
DROP USER staff_demo CASCADE;
CREATE USER staff_demo IDENTIFIED BY 123456;
GRANT CREATE SESSION TO staff_demo;
GRANT TOUR_STAFF_ROLE TO staff_demo;

PROMPT ==== HOÀN TẤT THIẾT LẬP BẢO MẬT VÀ TỐI ƯU ====;
EXIT;
