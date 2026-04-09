-- SCRIPT KHỞI TẠO USER MỚI web_tour1
ALTER SESSION SET "_ORACLE_SCRIPT"=true;

-- Xóa user nếu lỡ đã tồn tại để làm mới hoàn toàn
BEGIN
   EXECUTE IMMEDIATE 'DROP USER web_tour1 CASCADE';
EXCEPTION
   WHEN OTHERS THEN IF SQLCODE != -1918 THEN RAISE; END IF;
END;
/

-- Tạo User mới
CREATE USER web_tour1 IDENTIFIED BY 123456;

-- Cấp quyền bảng và quản trị
GRANT CONNECT, RESOURCE, DBA TO web_tour1;
ALTER USER web_tour1 QUOTA UNLIMITED ON USERS;

PROMPT ==== ĐÃ TẠO THÀNH CÔNG USER: web_tour1 / PASS: 123456 ====;
EXIT;
