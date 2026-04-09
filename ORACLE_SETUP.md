# Hướng dẫn kết nối Oracle Database

## Cấu hình Connection String

Cập nhật `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "User Id=YOUR_USERNAME;Password=YOUR_PASSWORD;Data Source=YOUR_ORACLE_SERVER:1521/YOUR_SERVICE_NAME"
  }
}
```

### Ví dụ cụ thể:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "User Id=webtour_user;Password=mypassword123;Data Source=localhost:1521/XE"
  }
}
```

## Yêu cầu hệ thống

1. **Oracle Database Server** (Oracle 11g, 12c, 19c, 21c, etc.)
2. **Oracle Client** hoặc **Oracle Instant Client** trên máy phát triển
3. **TNSNAMES.ORA** được cấu hình đúng (nếu sử dụng TNS)

## Các bước cấu hình

1. **Cài đặt Oracle Instant Client:**
   - Tải từ: https://www.oracle.com/database/technologies/instant-client.html
   - Giải nén và thêm vào PATH

2. **Cập nhật appsettings.json** với thông tin kết nối thực tế

3. **Tạo database schema:**
   ```sql
   CREATE USER webtour_user IDENTIFIED BY mypassword123;
   GRANT CONNECT, RESOURCE TO webtour_user;
   ALTER USER webtour_user QUOTA UNLIMITED ON USERS;
   ```

4. **Chạy migration (nếu cần):**
   ```bash
   dotnet ef database update
   ```

## Lưu ý quan trọng

- Đảm bảo Oracle listener đang chạy trên port 1521 (hoặc port bạn cấu hình)
- Kiểm tra firewall cho phép kết nối đến Oracle server
- Với Oracle Express Edition (XE), service name thường là "XE"
- Với Oracle Enterprise Edition, service name có thể khác

## Troubleshooting

1. **ORA-12541: TNS:no listener**
   - Kiểm tra Oracle listener có chạy không
   - Kiểm tra port 1521 có bị block không

2. **ORA-12514: TNS:listener does not currently know of service requested**
   - Kiểm tra service name trong connection string
   - Kiểm tra TNSNAMES.ORA

3. **ORA-01017: invalid username/password**
   - Kiểm tra username/password
   - Đảm bảo user có quyền CONNECT

## Chạy ứng dụng

Sau khi cấu hình xong:

```bash
dotnet run
```

Ứng dụng sẽ tự động tạo database tables và seed data khi chạy lần đầu.