using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using webtour.Data;

namespace webtour.Controllers
{
    public class AccountController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AccountController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Login()
        {
            if (User.Identity != null && User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(string username, string password)
        {
            // Kiểm tra thông tin đăng nhập từ Oracle WEB_USER
            // Lưu ý: Trong thực tế nên dùng Password Hashing
            var user = await _context.Database
                .SqlQueryRaw<dynamic>(@"SELECT ""USERNAME"", ""ROLE"", ""FULLNAME"" 
                                       FROM ""WEB_USER"" 
                                       WHERE ""USERNAME"" = {0} AND ""PASSWORD"" = {1}", 
                                       username, password)
                .AsEnumerable()
                .FirstOrDefault();

            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, username),
                    new Claim("FullName", (string)user.FULLNAME),
                    new Claim(ClaimTypes.Role, (string)user.ROLE)
                };

                var identity = new ClaimsIdentity(claims, "CookieAuth");
                var principal = new ClaimsPrincipal(identity);

                await HttpContext.SignInAsync("CookieAuth", principal);

                return RedirectToAction("Index", "Home");
            }

            ViewBag.Error = "Tài khoản hoặc mật khẩu không chính xác!";
            return View();
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync("CookieAuth");
            return RedirectToAction("Login");
        }

        public IActionResult AccessDenied()
        {
            return View();
        }
    }
}
