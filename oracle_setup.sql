-- Script tạo user và cấu hình database Oracle cho WebTour

-- Kết nối với SYSDBA
-- sqlplus / as sysdba

-- Tạo user
CREATE USER webtour_user IDENTIFIED BY webtour_password
DEFAULT TABLESPACE users
TEMPORARY TABLESPACE temp
QUOTA UNLIMITED ON users;

-- Cấp quyền
GRANT CONNECT TO webtour_user;
GRANT RESOURCE TO webtour_user;
GRANT CREATE SESSION TO webtour_user;
GRANT CREATE TABLE TO webtour_user;
GRANT CREATE SEQUENCE TO webtour_user;
GRANT CREATE TRIGGER TO webtour_user;

-- Cho development (nếu cần user riêng)
CREATE USER webtour_dev IDENTIFIED BY dev_password
DEFAULT TABLESPACE users
TEMPORARY TABLESPACE temp
QUOTA UNLIMITED ON users;

GRANT CONNECT TO webtour_dev;
GRANT RESOURCE TO webtour_dev;
GRANT CREATE SESSION TO webtour_dev;
GRANT CREATE TABLE TO webtour_dev;
GRANT CREATE SEQUENCE TO webtour_dev;
GRANT CREATE TRIGGER TO webtour_dev;

-- Kiểm tra kết nối
-- sqlplus webtour_user/webtour_password@localhost:1521/XE