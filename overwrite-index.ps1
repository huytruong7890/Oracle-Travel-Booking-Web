$content = @'
@model webtour.Models.HomeIndexViewModel

@{
    ViewData["Title"] = "Trang chủ";
}

<section class="py-5">
    <div class="container">
        <div class="row align-items-center gy-4">
            <div class="col-md-6">
                <span class="badge bg-primary mb-3">Khám phá tour</span>
                <h1 class="display-5 fw-bold">Đặt tour du lịch nhanh chóng và linh hoạt</h1>
                <p class="lead text-muted">Tìm tour phù hợp với điểm đến, số người và số ngày. Giá tour sẽ tự động áp dụng giá đoàn khi bạn đặt từ 10 người trở lên.</p>
            </div>
            <div class="col-md-6">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Tìm Tour</h5>
                        <form asp-action="Index" method="get">
                            <div class="mb-3">
                                <label class="form-label">Điểm đến</label>
                                <select name="destination" class="form-select">
                                    <option value="">Tất cả điểm đến</option>
                                    @foreach (var item in Model.Destinations)
                                    {
                                        <option value="@item" selected="@(item == Model.Destination ? "selected" : null)">@item</option>
                                    }
                                </select>
                            </div>
                            <div class="row g-3">
                                <div class="col-6">
                                    <label class="form-label">Số người</label>
                                    <input type="number" name="people" min="1" value="@Model.NumberOfPeople" class="form-control" />
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Số ngày</label>
                                    <input type="number" name="days" min="1" value="@Model.DurationDays" class="form-control" />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-4">Tìm Tour</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="card shadow-sm mb-5">
            <img src="/images/halong.jpg" class="card-img-top" alt="Khám phá Vịnh Hạ Long" style="height: 200px; object-fit: cover;" />
            <div class="card-body">
                <h5 class="card-title">Khám phá Vịnh Hạ Long</h5>
                <p class="card-text text-muted">Vịnh Hạ Long, Hang Sửng Sốt, Ti Tốp</p>
                <div class="row gy-2">
                    <div class="col-sm-6">
                        <div class="text-muted small">Giá cá nhân</div>
                        <div class="fw-bold">400.000đ</div>
                    </div>
                    <div class="col-sm-6">
                        <div class="text-muted small">Giá đoàn</div>
                        <div class="fw-bold">100.000đ</div>
                    </div>
                </div>
                <a href="#" class="btn btn-primary mt-3">Xem chi tiết</a>
            </div>
        </div>

        <div class="row gy-4">
            <div class="col-lg-8">
                <div class="d-flex align-items-center justify-content-between mb-4 flex-column flex-md-row">
                    <div>
                        <h2 class="h4 mb-1">Danh sách Tour</h2>
                        <p class="text-muted mb-0">@Model.Tours.Count tour phù hợp với tiêu chí của bạn</p>
                    </div>
                    <div class="badge bg-primary text-white py-2 px-3">@Model.NumberOfPeople người • @Model.DurationDays ngày</div>
                </div>

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    @if (!Model.Tours.Any())
                    {
                        <div class="col">
                            <div class="alert alert-info">Hiện chưa có tour phù hợp. Vui lòng thử lại với tiêu chí khác.</div>
                        </div>
                    }
                    else
                    {
                        foreach (var tour in Model.Tours)
                        {
                            <div class="col">
                                <div class="card h-100 shadow-sm">
                                    <img src="/images/halong.jpg" class="card-img-top" alt="@tour.Destination" style="height: 200px; object-fit: cover;" />
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title">@tour.Destination</h5>
                                        <p class="card-text text-muted">@tour.Attractions</p>
                                        <div class="mt-auto">
                                            <div class="d-flex justify-content-between mb-3">
                                                <div>
                                                    <div class="text-muted small">Giá cá nhân</div>
                                                    <div class="fw-bold">@tour.PriceIndividual.ToString("N0") đ</div>
                                                </div>
                                                <div>
                                                    <div class="text-muted small">Giá đoàn</div>
                                                    <div class="fw-bold">@tour.PriceGroup.ToString("N0") đ</div>
                                                </div>
                                            </div>
                                            <a asp-controller="Tours" asp-action="Details" asp-route-id="@tour.Id" class="btn btn-outline-primary w-100">Xem chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    }
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">Tóm tắt tìm kiếm</h5>
                        <ul class="list-group list-group-flush mb-3">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Điểm đến
                                <span>@(string.IsNullOrWhiteSpace(Model.Destination) ? "Tất cả" : Model.Destination)</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Số người
                                <span>@Model.NumberOfPeople</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Số ngày
                                <span>@Model.DurationDays</span>
                            </li>
                        </ul>
                        <p class="text-muted small">Lưu ý: Giá đoàn sẽ áp dụng khi số người >= 10.</p>
                        <a asp-controller="Bookings" asp-action="Create" class="btn btn-primary w-100">Đặt tour ngay</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
'@
Set-Content -LiteralPath 'f:\webtour\Views\Home\Index.cshtml' -Value $content -Encoding UTF8
