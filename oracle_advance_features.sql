-- Cấu hình code page để tránh lỗi
ALTER SESSION SET "_ORACLE_SCRIPT"=true;

-- ==== 1. TẠO VIEW THỐNG KÊ DOANH THU =================
-- Trả về tổng số lượng Bookings, Khách hàng, Doanh thu theo từng Tour
CREATE OR REPLACE VIEW V_TOUR_REVENUE AS
SELECT 
    t."Id" AS TOUR_ID,
    t."Destination" AS DESTINATION,
    COUNT(b."ID") AS TOTAL_BOOKINGS,
    SUM(b."NUMBER_OF_PEOPLE") AS TOTAL_GUESTS,
    NVL(SUM(b."TOTAL_PRICE"), 0) AS REVENUE,
    MAX(b."BOOKING_DATE") AS LATEST_BOOKING_DATE
FROM "Tours" t
LEFT JOIN "BOOKINGS" b ON t."Id" = b."TOUR_ID"
GROUP BY t."Id", t."Destination"
ORDER BY REVENUE DESC;

-- ==== 2. TẠO TRIGGER VALIDATION =====================
-- Kích hoạt trước khi INSERT hoặc UPDATE dữ liệu vào bảng BOOKINGS
CREATE OR REPLACE TRIGGER TRG_CHECK_BOOKING
BEFORE INSERT OR UPDATE ON "BOOKINGS"
FOR EACH ROW
BEGIN
    -- Kiểm tra logic 1: Số lượng người không được âm hoặc bằng 0
    IF :NEW."NUMBER_OF_PEOPLE" <= 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Lỗi: Số lượng người đi Tour phải lớn hơn 0.');
    END IF;

    -- Kiểm tra logic 2: Giá tiền tổng cộng phải luôn dương
    IF :NEW."TOTAL_PRICE" < 0 THEN
        RAISE_APPLICATION_ERROR(-20002, 'Lỗi: Mức giá Booking bị tính toán âm (Dưới 0 VNĐ).');
    END IF;
    
    -- Kiểm tra logic 3: Tự động ghi hoá email về chữ thường giúp csdl sạch
    IF :NEW."CUSTOMER_EMAIL" IS NOT NULL THEN
        :NEW."CUSTOMER_EMAIL" := LOWER(:NEW."CUSTOMER_EMAIL");
    END IF;
END;
/
SHOW ERRORS;

-- In ra màn hình để báo cáo kết quả
PROMPT ==== ĐÃ TẠO HOÀN TẤT ORACLE VIEWS VÀ TRIGGERS ====;
EXIT;
