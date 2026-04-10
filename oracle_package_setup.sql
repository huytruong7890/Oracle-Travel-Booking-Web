-- SCRIPT CÀI ĐẶT ORACLE PACKAGE: PKG_TOUR_LOGIC
ALTER SESSION SET "_ORACLE_SCRIPT"=true;

-- 1. KHAI BÁO (SPECIFICATION)
-- Giống như bản thiết kế (Menu), công khai tên các hàm/thủ tục
CREATE OR REPLACE PACKAGE PKG_TOUR_LOGIC AS
    PROCEDURE calc_price(
        p_tour_id IN NUMBER,
        p_people IN NUMBER,
        p_is_group IN NUMBER,
        p_total_price OUT NUMBER
    );
END PKG_TOUR_LOGIC;
/

-- 2. THỰC THI (BODY)
-- Chứa logic thực tế, được giấu kín (Bếp nấu)
CREATE OR REPLACE PACKAGE BODY PKG_TOUR_LOGIC AS
    PROCEDURE calc_price(
        p_tour_id IN NUMBER,
        p_people IN NUMBER,
        p_is_group IN NUMBER,
        p_total_price OUT NUMBER
    ) AS
        v_unit_price NUMBER;
    BEGIN
        -- Tìm đơn giá từ bảng gốc
        SELECT CASE WHEN p_is_group = 1 THEN "PriceGroup" ELSE "PriceIndividual" END
        INTO v_unit_price
        FROM "Tours"
        WHERE "Id" = p_tour_id;

        -- Thực hiện phép tính
        p_total_price := v_unit_price * p_people;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            p_total_price := 0;
    END calc_price;
END PKG_TOUR_LOGIC;
/

SHOW ERRORS;
PROMPT ==== ĐÃ CÀI ĐẶT THÀNH CÔNG ORACLE PACKAGE: PKG_TOUR_LOGIC ====;
EXIT;
