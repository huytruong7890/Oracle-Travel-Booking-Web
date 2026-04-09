-- Đặt định dạng ngày giờ để hiển thị timestamp chính xác
ALTER SESSION SET NLS_TIMESTAMP_FORMAT = 'YYYY-MM-DD HH24:MI:SS.FF';

-- --- XÓA DỮ LIỆU CŨ NẾU CÓ ---
BEGIN
   EXECUTE IMMEDIATE 'DELETE FROM "BOOKINGS"';
   EXECUTE IMMEDIATE 'DELETE FROM "Tours"';
EXCEPTION
   WHEN OTHERS THEN
      NULL; -- Bỏ qua nếu bảng chưa tồn tại
END;
/

-- --- THÊM DỮ LIỆU BẢNG: Tours ---
INSERT INTO "Tours" ("Destination", "DurationDays", "DurationNights", "Attractions", "PriceIndividual", "PriceGroup") 
VALUES (N'Vịnh Hạ Long - Đảo Cát Bà', 3, 2, N'Vịnh Tuần Châu, Đảo Ti Tốp, Hang Sửng Sốt, Làng chài Cửa Vạn', 1590000, 1290000);

INSERT INTO "Tours" ("Destination", "DurationDays", "DurationNights", "Attractions", "PriceIndividual", "PriceGroup") 
VALUES (N'Đà Nẵng - Hội An - Bà Nà Hills', 4, 3, N'Bán đảo Sơn Trà, Phố cổ Hội An, Bà Nà Hills, Cầu Vàng', 2890000, 2400000);

INSERT INTO "Tours" ("Destination", "DurationDays", "DurationNights", "Attractions", "PriceIndividual", "PriceGroup") 
VALUES (N'Sapa - Fansipan - Cát Cát', 3, 2, N'Bản Cát Cát, Đỉnh Fansipan, Nhà thờ đá, Thung lũng Mường Hoa', 1850000, 1500000);

INSERT INTO "Tours" ("Destination", "DurationDays", "DurationNights", "Attractions", "PriceIndividual", "PriceGroup") 
VALUES (N'Phú Quốc - Grand World - Hòn Thơm', 4, 3, N'Grand World, VinWonders, Cáp treo Hòn Thơm, Chợ đêm Dinh Cậu', 3500000, 3100000);

INSERT INTO "Tours" ("Destination", "DurationDays", "DurationNights", "Attractions", "PriceIndividual", "PriceGroup") 
VALUES (N'Đà Lạt - Thành phố mộng mơ', 3, 2, N'Hồ Xuân Hương, Thung lũng tình yêu, Langbiang, Thác Datanla', 1600000, 1400000);

INSERT INTO "Tours" ("Destination", "DurationDays", "DurationNights", "Attractions", "PriceIndividual", "PriceGroup") 
VALUES (N'Nha Trang - Vinpearl Land', 3, 2, N'Biển Nha Trang, Tháp Bà Ponagar, VinWonders, Đảo Khỉ', 2100000, 1800000);


-- --- THÊM DỮ LIỆU BẢNG: BOOKINGS ---
INSERT INTO "BOOKINGS" ("TOUR_ID", "NUMBER_OF_PEOPLE", "IS_GROUP", "TOTAL_PRICE", "CUSTOMER_NAME", "CUSTOMER_EMAIL", "BOOKING_DATE")
VALUES (
    (SELECT "Id" FROM "Tours" WHERE "Destination" LIKE 'Vịnh Hạ Long%'), 
    2, 0, 3180000, N'Nguyễn Văn An', 'an.nguyen@email.com', CURRENT_TIMESTAMP
);

INSERT INTO "BOOKINGS" ("TOUR_ID", "NUMBER_OF_PEOPLE", "IS_GROUP", "TOTAL_PRICE", "CUSTOMER_NAME", "CUSTOMER_EMAIL", "BOOKING_DATE")
VALUES (
    (SELECT "Id" FROM "Tours" WHERE "Destination" LIKE 'Đà Nẵng%'), 
    12, 1, 28800000, N'Trần Thị Bích (Trưởng đoàn)', 'bich.tran88@email.com', CURRENT_TIMESTAMP - INTERVAL '1' DAY
);

INSERT INTO "BOOKINGS" ("TOUR_ID", "NUMBER_OF_PEOPLE", "IS_GROUP", "TOTAL_PRICE", "CUSTOMER_NAME", "CUSTOMER_EMAIL", "BOOKING_DATE")
VALUES (
    (SELECT "Id" FROM "Tours" WHERE "Destination" LIKE 'Sapa%'), 
    4, 0, 7400000, N'Lê Hoàng Nam', 'nam.le@gmail.com', CURRENT_TIMESTAMP - INTERVAL '2' HOUR
);

INSERT INTO "BOOKINGS" ("TOUR_ID", "NUMBER_OF_PEOPLE", "IS_GROUP", "TOTAL_PRICE", "CUSTOMER_NAME", "CUSTOMER_EMAIL", "BOOKING_DATE")
VALUES (
    (SELECT "Id" FROM "Tours" WHERE "Destination" LIKE 'Phú Quốc%'), 
    10, 1, 31000000, N'Công ty CP Du Lịch Việt', 'booking@dulichviet.com', CURRENT_TIMESTAMP - INTERVAL '5' MINUTE
);

-- COMMIT lưu thay đổi vào cơ sở dữ liệu
COMMIT;

-- In ra màn hình để kiểm tra
PROMPT ==== KẾT QUẢ THÊM DỮ LIỆU ====;
SELECT "Id", "Destination", "PriceIndividual" FROM "Tours";
SELECT "ID", "CUSTOMER_NAME", "TOTAL_PRICE" FROM "BOOKINGS";
PROMPT ==============================;
EXIT;
