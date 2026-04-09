/* =====================================================
   VietTour Oracle System – app.js
   Hệ thống đặt tour du lịch Việt Nam
   ===================================================== */

'use strict';

/* ===== DỮ LIỆU TOUR ===== */
const TOUR_DATA = [
  {
    id: 'TRB001', tag: 'hot', tagName: 'HOT', dest: 'halong',
    destName: 'Hạ Long Bay', name: 'Vịnh Hạ Long Huyền Thoại',
    img: 'assets/halong_bay.png',
    duration: '3N2D', days: 3, nights: 2,
    rating: 4.9, reviews: 2847,
    attractions: ['Hang Sửng Sốt', 'Đảo Titop', 'Làng Chài Cửa Vạn', 'Hang Thiên Cung', 'Đảo Ngọc Vừng'],
    inclusions: ['Tàu nghỉ đêm 5★', 'Ăn sáng + trưa + tối', 'Hướng dẫn viên', 'Bảo hiểm du lịch', 'Kayak & snorkeling', 'Transfer từ Hà Nội'],
    priceIndividual: 4200000,
    priceGroup: 3500000,
    groupMinPax: 10,
    departure: 'Hà Nội',
    itinerary: [
      { day: 'Ngày 1', title: 'Hà Nội → Hạ Long Bay', desc: 'Đón tại Hà Nội, di chuyển đến cảng Tuần Châu. Lên tàu, nhận phòng cabin. Thăm Hang Sửng Sốt, Hang Luồn. Ăn tối + ngắm sunset trên boong tàu.' },
      { day: 'Ngày 2', title: 'Kayak & Làng Chài', desc: 'Sáng tập Tai Chi trên boong. Chèo kayak khám phá làng chài Cửa Vạn và Hang Tối. Chiều tham quan Đảo Titop, leo núi ngắm toàn cảnh vịnh. Tiệc BBQ trên boong.' },
      { day: 'Ngày 3', title: 'Đảo Ngọc Vừng → Hà Nội', desc: 'Sáng thăm Đảo Ngọc Vừng, bãi biển nguyên sơ. Ăn sáng trên tàu, trả phòng cabin. Di chuyển về Hà Nội, kết thúc hành trình.' }
    ]
  },
  {
    id: 'TRB002', tag: 'new', tagName: 'NEW', dest: 'danang',
    destName: 'Đà Nẵng', name: 'Đà Nẵng – Hội An – Bà Nà Hills',
    img: 'assets/danang_beach.png',
    duration: '4N3D', days: 4, nights: 3,
    rating: 4.8, reviews: 1932,
    attractions: ['Cầu Rồng', 'Bà Nà Hills', 'Phố Cổ Hội An', 'Bãi Biển Mỹ Khê', 'Ngũ Hành Sơn', 'Cầu Vàng'],
    inclusions: ['Khách sạn 4★', 'Ăn sáng hàng ngày', 'Cáp treo Bà Nà Hills', 'Hướng dẫn viên', 'Bảo hiểm', 'Xe đưa đón sân bay'],
    priceIndividual: 3200000,
    priceGroup: 2700000,
    groupMinPax: 8,
    departure: 'Đà Nẵng (bay)',
    itinerary: [
      { day: 'Ngày 1', title: 'Bay Đà Nẵng – Tham quan thành phố', desc: 'Đón sân bay, nhận phòng khách sạn. Tham quan Cầu Rồng, Cầu Tình Yêu, chợ Hàn. Tối xem biểu diễn phun lửa Cầu Rồng.' },
      { day: 'Ngày 2', title: 'Bà Nà Hills – Cầu Vàng', desc: 'Sáng cáp treo Bà Nà Hills – tham quan làng Pháp, Cầu Vàng huyền thoại. Trưa ăn buffet trên đỉnh núi. Chiều tắm biển Mỹ Khê.' },
      { day: 'Ngày 3', title: 'Phố Cổ Hội An', desc: 'Tham quan Hội An ban ngày & ban đêm. Thăm Chùa Cầu, Hội quán, làng gốm Thanh Hà. Thả đèn hoa đăng sông Hoài. Ăn tối đặc sản Cao Lầu, Mì Quảng.' },
      { day: 'Ngày 4', title: 'Ngũ Hành Sơn – Bay về', desc: 'Sáng tham quan Ngũ Hành Sơn, động Huyền Không. Mua quà đặc sản. Trưa tự do, chiều ra sân bay.' }
    ]
  },
  {
    id: 'TRB003', tag: 'vip', tagName: 'VIP', dest: 'phuquoc',
    destName: 'Phú Quốc', name: 'Phú Quốc – Đảo Ngọc Thiên Đường',
    img: 'assets/halong_bay.png',
    duration: '5N4D', days: 5, nights: 4,
    rating: 4.9, reviews: 3104,
    attractions: ['Bãi Sao', 'Vinpearl Safari', 'Hòn Thơm Nature Park', 'Làng Chài Hàm Ninh', 'Sunset Sanato Beach', 'Grand World'],
    inclusions: ['Resort 5★ Vinpearl', '3 bữa/ngày', 'Cáp treo Hòn Thơm', 'Vinpearl Safari', 'Spa 60 phút', 'Speedboat tour', 'Bảo hiểm VIP'],
    priceIndividual: 8500000,
    priceGroup: 7200000,
    groupMinPax: 6,
    departure: 'TP. Hồ Chí Minh (bay)',
    itinerary: [
      { day: 'Ngày 1', title: 'Bay Phú Quốc – Resort 5★', desc: 'Đón sân bay, transfer về resort Vinpearl Grand. Nhận phòng ocean view. Buổi chiều tự do tắm biển Kem – bãi biển đẹp nhất châu Á. Tối ăn hải sản tươi sống dọc phố đêm Dinh Cậu.' },
      { day: 'Ngày 2', title: 'Vinpearl Safari & Vui Chơi', desc: 'Sáng tham quan Vinpearl Safari – sở thú hoang dã lớn nhất Đông Nam Á. Chiều thư giãn bể bơi resort, Spa đẳng cấp 60 phút. Tối thưởng thức buffet hải sản cao cấp.' },
      { day: 'Ngày 3', title: 'Tour Cáp Treo Hòn Thơm', desc: 'Cáp treo dài nhất thế giới qua biển đến Hòn Thơm. Tắm biển, lặn ngắm san hô. Khám phá Aquatopia Water Park. Hoàng hôn tại Sanato Beach Club.' },
      { day: 'Ngày 4', title: 'Làng Chài & Grand World', desc: 'Sáng tham quan làng chài Hàm Ninh – chợ nhum tươi ngon nhất. Chiều tự do mua sắm. Tối khám phá Grand World – khu giải trí đêm hoành tráng, biểu diễn nghệ thuật ánh sáng.' },
      { day: 'Ngày 5', title: 'Bãi Sao – Bay về HCM', desc: 'Sáng tắm biển Bãi Sao – bãi biển nguyên sơ nhất Phú Quốc. Mua đặc sản nước mắm, hồ tiêu Phú Quốc. Trưa ăn nhẹ, ra sân bay bay về TP.HCM.' }
    ]
  },
  {
    id: 'TRB004', tag: 'eco', tagName: 'ECO', dest: 'sapa',
    destName: 'Sa Pa', name: 'Sa Pa – Fansipan – Bản Làng Dân Tộc',
    img: 'assets/sapa_terraces.png',
    duration: '3N2D', days: 3, nights: 2,
    rating: 4.7, reviews: 1567,
    attractions: ['Đỉnh Fansipan', 'Bản Cát Cát', 'Ruộng Bậc Thang Mù Cang Chải', 'Thác Bạc', 'Chợ Bắc Hà', 'Làng H\'Mông Tả Van'],
    inclusions: ['Nhà gỗ bản làng', 'Cáp treo Fansipan', 'Ăn 3 bữa đặc sản vùng cao', 'Trekking guide', 'Bảo hiểm', 'Xe Limousine Hà Nội–Sa Pa'],
    priceIndividual: 3800000,
    priceGroup: 3100000,
    groupMinPax: 8,
    departure: 'Hà Nội',
    itinerary: [
      { day: 'Ngày 1', title: 'Hà Nội → Sa Pa – Bản Cát Cát', desc: 'Xe Limousine 5★ từ Hà Nội lên Sa Pa. Nhận phòng nhà gỗ truyền thống. Chiều tham quan Bản Cát Cát – ngôi làng H\'Mông cổ nhất. Thăm thác nước, xưởng dệt thổ cẩm. Tối ăn lợn cắp nách nướng, uống rượu ngô.' },
      { day: 'Ngày 2', title: 'Chinh phục Fansipan 3143m', desc: 'Sáng sớm cáp treo Fansipan – nóc nhà Đông Dương. Tham quan khu văn hóa tâm linh trên đỉnh. Chiều trekking làng Tả Van – ngắm ruộng bậc thang vàng óng. Tối thưởng thức thắng cố đặc sản.' },
      { day: 'Ngày 3', title: 'Thác Bạc – Về Hà Nội', desc: 'Sáng tham quan Thác Bạc hùng vĩ. Chụp ảnh đồng lúa chín mùa thu. Mua đặc sản: thổ cẩm, rượu táo mèo, mận Sa Pa. Xe Limousine về lại Hà Nội.' }
    ]
  },
  {
    id: 'TRB005', tag: 'hot', tagName: 'HOT', dest: 'hoian',
    destName: 'Hội An', name: 'Hội An – Mỹ Sơn – Trải Nghiệm Cổ Phong',
    img: 'assets/hoian_lantern.png',
    duration: '2N1D', days: 2, nights: 1,
    rating: 4.9, reviews: 4213,
    attractions: ['Phố Cổ Hội An', 'Chùa Cầu Nhật Bản', 'Thánh Địa Mỹ Sơn', 'Làng Rau Trà Quế', 'Làng Gốm Thanh Hà', 'Biển An Bàng'],
    inclusions: ['Homestay phố cổ', 'Ăn sáng + tối đặc sản', 'Hướng dẫn viên', 'Vé tham quan phố cổ', 'Lớp học nấu ăn', 'Xe đạp tham quan'],
    priceIndividual: 1800000,
    priceGroup: 1500000,
    groupMinPax: 12,
    departure: 'Đà Nẵng',
    itinerary: [
      { day: 'Ngày 1', title: 'Hội An Cổ Phố & Mỹ Sơn', desc: 'Đón tại Đà Nẵng, di chuyển Hội An. Sáng tham quan Thánh địa Mỹ Sơn – di sản thế giới Chăm Pa. Chiều Phố Cổ Hội An: Chùa Cầu, Bảo tàng, Hội quán Phúc Kiến. Tối đèn lồng lung linh và thả đèn sông Hoài. Ăn tối Cao Lầu, bánh mì Phượng.' },
      { day: 'Ngày 2', title: 'Làng Nghề & Biển An Bàng', desc: 'Sáng học nấu ăn: tự làm Cao Lầu và Bánh Mì Hội An. Tham quan làng rau Trà Quế, làng gốm Thanh Hà đi xe đạp. Chiều tắm biển An Bàng – top 25 bãi biển đẹp nhất châu Á. Về Đà Nẵng.' }
    ]
  },
  {
    id: 'TRB006', tag: 'new', tagName: 'NEW', dest: 'nhatrang',
    destName: 'Nha Trang', name: 'Nha Trang – 4 Đảo Thiên Đường',
    img: 'assets/danang_beach.png',
    duration: '4N3D', days: 4, nights: 3,
    rating: 4.6, reviews: 2108,
    attractions: ['Đảo Hòn Mun', 'Vinpearl Nha Trang', 'Tháp Bà Ponagar', 'Chợ Đầm Nha Trang', 'Đảo Hòn Tằm', 'Suối Hoa Lan'],
    inclusions: ['Khách sạn 4★ biển Nha Trang', 'Tour 4 đảo', 'Cáp treo Vinpearl', 'Ăn sáng', 'Lặn ngắm san hô', 'Xe đưa đón sân bay'],
    priceIndividual: 3600000,
    priceGroup: 3000000,
    groupMinPax: 10,
    departure: 'Nha Trang (bay)',
    itinerary: [
      { day: 'Ngày 1', title: 'Đến Nha Trang – Tắm biển', desc: 'Đón sân bay Cam Ranh, nhận phòng khách sạn 4★ trực tiếp bãi biển. Chiều tự do tắm biển Nha Trang xanh biếc. Tối ăn hải sản tươi ngon nhất – tôm hùm, ghẹ, ốc.' },
      { day: 'Ngày 2', title: 'Tour 4 Đảo Huyền Thoại', desc: 'Tàu đưa ra 4 đảo: Hòn Mun lặn ngắm san hô tuyệt đẹp, Hòn Tằm tắm biển nguyên sơ, Hòn Một câu cá, Hòn Miễu tham quan. Tiệc hải sản trên biển.' },
      { day: 'Ngày 3', title: 'Vinpearl – Tháp Bà Ponagar', desc: 'Sáng cáp treo Vinpearl – công viên nước và giải trí. Chiều tham quan Tháp Bà Ponagar 2000 tuổi, Chùa Long Sơn với tượng Phật trắng khổng lồ. Tối phố biển sôi động.' },
      { day: 'Ngày 4', title: 'Suối Hoa Lan – Bay về', desc: 'Sáng tham quan Suối Hoa Lan, tắm suối mát lạnh giữa rừng nhiệt đới. Mua đặc sản yến sào, nem nướng Ninh Hòa. Chiều bay về.' }
    ]
  }
];

/* ===== CẤU HÌNH GIÁ ===== */
const DURATION_MULTIPLIER = { '2N1D': 1.0, '3N2D': 1.4, '4N3D': 1.8, '5N4D': 2.3, '7N6D': 3.2 };
const GROUP_DISCOUNT_BY_PAX = [
  { min: 1, max: 4, discount: 0, label: 'Cá nhân' },
  { min: 5, max: 9, discount: 5, label: 'Nhóm nhỏ (5–9 người)' },
  { min: 10, max: 19, discount: 10, label: 'Đoàn (10–19 người)' },
  { min: 20, max: 49, discount: 15, label: 'Đoàn lớn (20–49 người)' },
  { min: 50, max: 999, discount: 20, label: 'Đoàn đặc biệt (50+ người)' }
];

/* ===== DỮ LIỆU ĐIỂM THAM QUAN THEO ĐIỂM ĐẾN ===== */
const ATTRACTIONS_BY_DEST = {
  halong: [
    '🏔️ Hang Sửng Sốt', '🏝️ Đảo Titop', '🎣 Làng Chài Cửa Vạn',
    '💎 Hang Thiên Cung', '🌊 Đảo Ngọc Vừng', '🚣 Kayak Hang Tối',
    '🌅 Đảo Soi Sim', '⛵ Đảo Cát Bà'
  ],
  danang: [
    '🐉 Cầu Rồng', '🏔️ Bà Nà Hills', '🌉 Cầu Vàng',
    '🏖️ Bãi Biển Mỹ Khê', '⛰️ Ngũ Hành Sơn', '🏛️ Bảo Tàng Điêu Khắc Chăm',
    '🎡 Asia Park', '🌿 Rừng Nhiệt Đới Bán Đảo Sơn Trà'
  ],
  hoian: [
    '🏮 Phố Cổ Hội An', '⛩️ Chùa Cầu Nhật Bản', '🏛️ Thánh Địa Mỹ Sơn',
    '🥬 Làng Rau Trà Quế', '🏺 Làng Gốm Thanh Hà', '🌊 Biển An Bàng',
    '🎭 Lớp Học Nấu Ăn', '🚲 Xe Đạp Phố Cổ'
  ],
  sapa: [
    '🏔️ Đỉnh Fansipan 3143m', '🏘️ Bản Cát Cát', '🌾 Ruộng Bậc Thang',
    '💧 Thác Bạc', '🛖 Làng H\'Mông Tả Van', '🐄 Chợ Phiên Bắc Hà',
    '🧵 Xưởng Dệt Thổ Cẩm', '🌺 Vườn Hoa Sa Pa'
  ],
  phuquoc: [
    '🏖️ Bãi Sao', '🦁 Vinpearl Safari', '🚡 Cáp Treo Hòn Thơm',
    '🐟 Làng Chài Hàm Ninh', '🌅 Sunset Sanato Beach', '🎢 Grand World',
    '🤿 Lặn Ngắm San Hô', '🌿 VinWonders Phú Quốc'
  ],
  nhatrang: [
    '🐠 Đảo Hòn Mun', '🎢 Vinpearl Nha Trang', '🏛️ Tháp Bà Ponagar',
    '🛍️ Chợ Đầm', '🏝️ Đảo Hòn Tằm', '🌊 Suối Hoa Lan',
    '🌺 Chùa Long Sơn', '🎣 Tour 4 Đảo'
  ],
  hanoi: [
    '🛖 Hồ Hoàn Kiếm', '📿 Văn Miếu Quốc Tử Giám', '🏛️ Lăng Bác Hồ',
    '🎭 Nhà Hát Múa Rối Nước', '🛍️ Phố Cổ 36 Phố Phường', '🌸 Làng Hoa Nhật Tân',
    '🍜 Phố Ẩm Thực Tống Duy Tân', '⛵ Hồ Tây'
  ],
  hcm: [
    '🏛️ Dinh Độc Lập', '⛪ Nhà Thờ Đức Bà', '📮 Bưu Điện Thành Phố',
    '🛍️ Chợ Bến Thành', '🏖️ Cần Giờ Biển', '🌿 Địa Đạo Củ Chi',
    '🎡 Đầm Sen', '🌊 Vũng Tàu'
  ]
};

/* ===== STATE ===== */
let currentStep = 1;
let selectedPayment = 'bank';
let oracleConnected = false;
let bookings = JSON.parse(localStorage.getItem('vt_bookings') || '[]');
let currentTourDetail = null;
let selectedAttractions = [];

/* ===== KHỞI TẠO ===== */
document.addEventListener('DOMContentLoaded', () => {
  initOracle();
  renderTourCards();
  initParticles();
  animateStats();
  initNavScroll();
  setDefaultDates();
  simulateOracleLog();
  initDestinationFilter();
  syncAttractionsFromSearch();
});

/* ===== ORACLE CONNECTION SIMULATION ===== */
function initOracle() {
  const stages = [
    { delay: 600, color: '#f59e0b', text: 'Đang kết nối Oracle Database...', dot: 'pulse' },
    { delay: 1400, color: '#f59e0b', text: 'Xác thực Oracle: ora_viettour_web...', dot: 'pulse' },
    { delay: 2400, color: '#10b981', text: '✓ Oracle 21c XE – Kết nối thành công', dot: 'pulse' }
  ];
  stages.forEach(s => {
    setTimeout(() => {
      const txt = document.getElementById('oracleStatusText');
      const dot = document.getElementById('oracleDot');
      if (txt) { txt.textContent = s.text; txt.style.color = s.color; }
      if (dot) dot.style.background = s.color;
      if (s.color === '#10b981') {
        oracleConnected = true;
        const conn = document.getElementById('dbConnText');
        if (conn) conn.textContent = 'CONNECTED – ora_viettour_web';
        setTimeout(() => { loadTable('bookings'); updateBookingCounts(); }, 300);
        showToast('✓ Oracle Database kết nối thành công!', 'success');
      }
    }, s.delay);
  });
}

function updateBookingCounts() {
  const el = document.getElementById('bookingsCount');
  if (el) el.textContent = bookings.length;
  const pmEl = document.getElementById('paymentsCount');
  if (pmEl) pmEl.textContent = bookings.filter(b => b.status === 'CONFIRMED').length;
}

/* ===== RENDER TOUR CARDS ===== */
function renderTourCards(filter = null) {
  const grid = document.getElementById('toursGrid');
  if (!grid) return;
  const data = filter ? TOUR_DATA.filter(t => t.dest === filter) : TOUR_DATA;
  if (data.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px;">
      <div style="font-size:48px;margin-bottom:16px;">🔍</div>
      <p>Không tìm thấy tour cho điểm đến này. Vui lòng thử điểm đến khác.</p></div>`;
    return;
  }
  grid.innerHTML = data.map(tour => buildTourCard(tour)).join('');
  // Animate cards in
  grid.querySelectorAll('.tour-card').forEach((card, i) => {
    card.style.opacity = '0'; card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1'; card.style.transform = 'translateY(0)';
    }, i * 80);
  });
}

function buildTourCard(tour) {
  const discountInfo = getDiscountInfo(2); // default 2 pax
  const indivPrice = formatPrice(tour.priceIndividual);
  const groupPrice = formatPrice(tour.priceGroup);
  const stars = '★'.repeat(Math.floor(tour.rating)) + (tour.rating % 1 >= 0.5 ? '½' : '') ;
  const tagClass = `tag-${tour.tag}`;
  const attrTags = tour.attractions.slice(0, 4).map(a => `<span class="attraction-tag">${a}</span>`).join('');
  return `
  <div class="tour-card" id="card-${tour.id}">
    <div class="tour-card-img">
      <img src="${tour.img}" alt="${tour.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'200\\'><rect fill=\\'%230a1628\\' width=\\'400\\' height=\\'200\\'/><text fill=\\'%2322d3ee\\' x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' font-size=\\'32\\'>🌏</text></svg>'"/>
      <div class="tour-img-overlay"></div>
      <span class="tour-tag ${tagClass}">${tour.tagName}</span>
      <span class="tour-duration">🗓️ ${tour.days}N${tour.nights}Đ</span>
    </div>
    <div class="tour-card-body">
      <div class="tour-dest">📍 ${tour.destName}</div>
      <div class="tour-name">${tour.name}</div>
      <div class="tour-rating">${stars} <span>${tour.rating} (${tour.reviews.toLocaleString('vi')} đánh giá)</span></div>
      <div class="tour-attractions">${attrTags}${tour.attractions.length > 4 ? `<span class="attraction-tag">+${tour.attractions.length - 4} nữa</span>` : ''}</div>
      <div class="tour-meta">
        <div class="tour-meta-item">⏱️ ${tour.duration}</div>
        <div class="tour-meta-item">🚌 Xuất phát: ${tour.departure}</div>
        <div class="tour-meta-item">👥 Đoàn từ ${tour.groupMinPax} người</div>
      </div>
      <div class="tour-pricing">
        <div class="pricing-grid">
          <div class="price-box">
            <div class="price-type">👤 Cá nhân</div>
            <div class="price-amount">${indivPrice}</div>
            <div class="price-unit">đ / người</div>
          </div>
          <div class="price-box group">
            <div class="price-type">👥 Đoàn (≥${tour.groupMinPax})</div>
            <div class="price-amount">${groupPrice}</div>
            <div class="price-unit">đ / người</div>
          </div>
        </div>
        <div class="price-note">💡 Đoàn từ ${tour.groupMinPax} người tiết kiệm ${formatPrice(tour.priceIndividual - tour.priceGroup)}đ/người</div>
        <div class="tour-actions">
          <button class="btn-book-tour" id="book-${tour.id}" onclick="openBookingModal('${tour.dest}', '${tour.id}')">🎒 Đặt Tour Ngay</button>
          <button class="btn-detail-tour" onclick="openTourDetail('${tour.id}')">📋 Chi tiết</button>
        </div>
      </div>
    </div>
  </div>`;
}

/* ===== DESTINATION FILTER ===== */
function initDestinationFilter() {
  // Create filter tabs above tours grid
  const toursSection = document.getElementById('tours');
  if (!toursSection) return;
  const header = toursSection.querySelector('.section-header');
  if (!header) return;
  const filterDiv = document.createElement('div');
  filterDiv.className = 'dest-filter-tabs';
  filterDiv.id = 'destFilterTabs';
  filterDiv.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:32px;';
  const filters = [
    { val: null, label: '🌏 Tất cả' },
    { val: 'halong', label: '⛰️ Hạ Long' },
    { val: 'danang', label: '🌊 Đà Nẵng' },
    { val: 'hoian', label: '🏮 Hội An' },
    { val: 'sapa', label: '🌿 Sa Pa' },
    { val: 'phuquoc', label: '🏝️ Phú Quốc' },
    { val: 'nhatrang', label: '🌺 Nha Trang' }
  ];
  filterDiv.innerHTML = filters.map((f, i) => `
    <button class="search-tab${i === 0 ? ' active' : ''}" id="filter-${f.val || 'all'}"
      onclick="filterTours(${f.val ? `'${f.val}'` : 'null'}, this)"
      style="padding:8px 16px;font-size:13px;">${f.label}</button>
  `).join('');
  header.after(filterDiv);
}

function filterTours(dest, btn) {
  document.querySelectorAll('#destFilterTabs .search-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderTourCards(dest);
}

/* ===== TOUR DETAIL MODAL ===== */
function openTourDetail(tourId) {
  const tour = TOUR_DATA.find(t => t.id === tourId);
  if (!tour) return;
  currentTourDetail = tour;

  // Build pricing table with group tiers
  const pricingRows = GROUP_DISCOUNT_BY_PAX.map(tier => {
    const price = tier.min === 1 ? tour.priceIndividual : Math.round(tour.priceGroup * (1 - (tier.discount - (tier.min >= 10 ? 0 : 5)) / 100));
    const isGroupBase = tier.min >= tour.groupMinPax;
    const actualPrice = tier.min < tour.groupMinPax ? tour.priceIndividual : tour.priceGroup * (1 - Math.max(0, tier.discount - 10) / 100);
    return `<tr class="${isGroupBase ? 'highlight' : ''}">
      <td>${tier.label}</td>
      <td>${tier.discount > 0 ? `Giảm ${tier.discount}%` : 'Giá chuẩn'}</td>
      <td><strong>${formatPrice(tier.min < tour.groupMinPax ? tour.priceIndividual : tour.priceGroup)}đ</strong>/người</td>
    </tr>`;
  }).join('');

  const inclTags = tour.inclusions.map(i => `<span class="inclusion-tag">✓ ${i}</span>`).join('');
  const itineraryHtml = tour.itinerary.map(d => `
    <div class="itinerary-day">
      <div class="day-title">📅 ${d.day}: ${d.title}</div>
      <div class="day-desc">${d.desc}</div>
    </div>`).join('');
  const attrList = tour.attractions.map(a => `<span class="attraction-tag" style="font-size:13px;padding:5px 10px;">${a}</span>`).join('');

  const modal = document.getElementById('tourDetailModal');
  if (!modal) {
    // Create modal on the fly
    createTourDetailModal();
  }
  const detailModal = document.getElementById('tourDetailModal');
  detailModal.querySelector('#tourDetailContent').innerHTML = `
    <div class="tour-detail-header">
      <img src="${tour.img}" alt="${tour.name}" class="tour-detail-img" onerror="this.style.display='none'"/>
      <div class="tour-detail-info">
        <div class="tour-detail-dest">📍 ${tour.destName} · ${tour.duration}</div>
        <div class="tour-detail-name">${tour.name}</div>
        <div class="tour-detail-meta">
          <span>⭐ ${tour.rating} (${tour.reviews.toLocaleString('vi')} đánh giá)</span>
          <span>🚌 Xuất phát: ${tour.departure}</span>
          <span>📋 Mã tour: ${tour.id}</span>
        </div>
      </div>
    </div>
    <div class="detail-section">
      <h4>🗺️ Địa điểm tham quan (${tour.attractions.length} điểm)</h4>
      <div class="inclusions-list" style="gap:8px;">${attrList}</div>
    </div>
    <div class="detail-section">
      <h4>✅ Dịch vụ bao gồm</h4>
      <div class="inclusions-list">${inclTags}</div>
    </div>
    <div class="detail-section">
      <h4>📅 Lịch trình chi tiết (${tour.days} ngày ${tour.nights} đêm)</h4>
      ${itineraryHtml}
    </div>
    <div class="detail-section">
      <h4>💰 Bảng giá theo số lượng người</h4>
      <div class="group-discount-badge" style="margin-bottom:12px;">🎉 Đoàn từ ${tour.groupMinPax}+ người được giảm giá đặc biệt!</div>
      <table class="pricing-table">
        <thead><tr><th>Loại khách</th><th>Ưu đãi</th><th>Giá/người</th></tr></thead>
        <tbody>${pricingRows}</tbody>
      </table>
    </div>
    <div style="display:flex;gap:12px;margin-top:24px;">
      <button class="btn-primary" style="flex:1;" onclick="openBookingModal('${tour.dest}', '${tour.id}');closeTourDetail()">🎒 Đặt Tour Này Ngay</button>
      <button class="btn-outline" onclick="closeTourDetail()">Đóng</button>
    </div>
  `;
  detailModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function createTourDetailModal() {
  const div = document.createElement('div');
  div.className = 'modal-overlay'; div.id = 'tourDetailModal';
  div.onclick = (e) => { if (e.target === div) closeTourDetail(); };
  div.innerHTML = `
    <div class="modal modal-wide">
      <button class="modal-close" onclick="closeTourDetail()">✕</button>
      <div class="modal-header"><div class="modal-icon">🗺️</div><h2 class="modal-title">Chi Tiết Tour</h2></div>
      <div id="tourDetailContent"></div>
    </div>`;
  document.body.appendChild(div);
}

function closeTourDetail() {
  const modal = document.getElementById('tourDetailModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ===== BOOKING MODAL ===== */
function openBookingModal(dest = null, tourId = null) {
  const modal = document.getElementById('bookingModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  currentStep = 1;
  showStep(1);

  if (dest) {
    const destEl = document.getElementById('bookDest');
    if (destEl) destEl.value = dest;
    updateAttractionsForDest(dest);
  }
  if (tourId) {
    const tour = TOUR_DATA.find(t => t.id === tourId);
    if (tour) {
      const pkgEl = document.getElementById('bookPackage');
      if (pkgEl) pkgEl.value = tour.duration;
    }
  }
  updatePriceEstimate();
  setDefaultDates();
}

function closeBookingModal() {
  document.getElementById('bookingModal').classList.remove('active');
  document.body.style.overflow = '';
  resetForm();
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('bookingModal')) closeBookingModal();
}

function resetForm() {
  currentStep = 1;
  showStep(1);
  ['bookName','bookPhone','bookEmail','bookIdNum','bookNote'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const guests = document.getElementById('bookGuests'); if (guests) guests.value = 2;
  const dest = document.getElementById('bookDest'); if (dest) dest.value = 'halong';
  selectedAttractions = [];
  updateAttractionsForDest('halong');
  updatePriceEstimate();
}

/* ===== ATTRACTIONS DYNAMIC ===== */
function updateAttractionsForDest(dest) {
  const container = document.getElementById('attractionsContainer');
  if (!container) return;
  const list = ATTRACTIONS_BY_DEST[dest] || ATTRACTIONS_BY_DEST['halong'];
  container.innerHTML = list.map((attr, i) => `
    <div class="attraction-check">
      <input type="checkbox" id="attr-${i}" value="${attr}" onchange="toggleAttraction('${attr}', this.checked)"/>
      <label for="attr-${i}">${attr}</label>
    </div>`).join('');
  selectedAttractions = [];
}

function toggleAttraction(name, checked) {
  if (checked) { if (!selectedAttractions.includes(name)) selectedAttractions.push(name); }
  else { selectedAttractions = selectedAttractions.filter(a => a !== name); }
}

function syncAttractionsFromSearch() {
  const destEl = document.getElementById('bookDest');
  if (destEl) {
    destEl.addEventListener('change', function() {
      updateAttractionsForDest(this.value);
      updatePriceEstimate();
    });
  }
}

/* ===== PRICING ENGINE ===== */
function getPriceForDest(dest) {
  const prices = {
    halong: 4200000, danang: 3200000, hoian: 1800000,
    sapa: 3800000, phuquoc: 8500000, nhatrang: 3600000,
    hanoi: 2100000, hcm: 2400000
  };
  return prices[dest] || 3000000;
}

function getDiscountInfo(pax) {
  return GROUP_DISCOUNT_BY_PAX.find(t => pax >= t.min && pax <= t.max) || GROUP_DISCOUNT_BY_PAX[0];
}

function calcPrice(dest, duration, pax) {
  const base = getPriceForDest(dest);
  const mult = DURATION_MULTIPLIER[duration] || 1.0;
  const info = getDiscountInfo(pax);
  const pricePerPax = Math.round(base * mult * (1 - info.discount / 100));
  const total = pricePerPax * pax;
  return { base, mult, info, pricePerPax, total };
}

function updatePriceEstimate() {
  const dest = document.getElementById('bookDest')?.value || 'halong';
  const duration = document.getElementById('bookPackage')?.value || '3N2D';
  const pax = parseInt(document.getElementById('bookGuests')?.value || '2');
  if (!dest || !duration || !pax) return;

  const { pricePerPax, total, info, mult } = calcPrice(dest, duration, pax);
  const valEl = document.getElementById('priceVal');
  if (valEl) valEl.textContent = formatPrice(total) + ' đ';

  // Show breakdown
  const noteEl = document.querySelector('.price-note');
  if (noteEl) {
    noteEl.textContent = `${pax} người × ${formatPrice(pricePerPax)}đ/người${info.discount > 0 ? ` (Giảm ${info.discount}% – ${info.label})` : ''}`;
  }
  // Update pricing type label
  const labelEl = document.querySelector('.price-label');
  if (labelEl) {
    if (info.discount > 0) {
      labelEl.innerHTML = `💰 Ước tính <span style="color:var(--secondary-light);font-size:12px;margin-left:6px;background:rgba(5,150,105,0.15);padding:2px 8px;border-radius:6px;">🎉 ${info.label}</span>`;
    } else {
      labelEl.textContent = '💰 Ước tính chi phí';
    }
  }
}

/* ===== STEPS ===== */
function showStep(n) {
  [1,2,3].forEach(i => {
    const el = document.getElementById(`modalStep${i}`);
    if (el) el.classList.toggle('hidden', i !== n);
    const ind = document.getElementById(`step${i}Ind`);
    if (ind) {
      ind.classList.remove('active','done');
      if (i < n) ind.classList.add('done');
      else if (i === n) ind.classList.add('active');
    }
  });
}

function nextStep(n) {
  if (n === 2 && !validateStep1()) return;
  if (n === 3) {
    submitBooking(); return;
  }
  currentStep = n;
  showStep(n);
  if (n === 2) {
    buildBookingSummary();
    const dest = document.getElementById('bookDest')?.value || 'halong';
    const pkg = document.getElementById('bookPackage')?.value || '3N2D';
    const name = document.getElementById('bookName')?.value || '';
    const tc = document.getElementById('transferContent');
    if (tc) tc.textContent = `VT-${dest.toUpperCase()}-${name.split(' ').pop().toUpperCase()}-${pkg}`;
  }
}

function validateStep1() {
  const name = document.getElementById('bookName')?.value?.trim();
  const phone = document.getElementById('bookPhone')?.value?.trim();
  const email = document.getElementById('bookEmail')?.value?.trim();
  const date = document.getElementById('bookDate')?.value;
  if (!name) { showToast('⚠️ Vui lòng nhập họ tên', 'error'); document.getElementById('bookName')?.focus(); return false; }
  if (!phone || !/^[0-9]{9,11}$/.test(phone.replace(/\s/g,''))) { showToast('⚠️ Số điện thoại không hợp lệ', 'error'); return false; }
  if (!email || !/\S+@\S+\.\S+/.test(email)) { showToast('⚠️ Email không hợp lệ', 'error'); return false; }
  if (!date) { showToast('⚠️ Vui lòng chọn ngày khởi hành', 'error'); return false; }
  return true;
}

function buildBookingSummary() {
  const dest = document.getElementById('bookDest')?.value || 'halong';
  const pkg = document.getElementById('bookPackage')?.value || '3N2D';
  const pax = parseInt(document.getElementById('bookGuests')?.value || '2');
  const name = document.getElementById('bookName')?.value || '';
  const phone = document.getElementById('bookPhone')?.value || '';
  const email = document.getElementById('bookEmail')?.value || '';
  const date = document.getElementById('bookDate')?.value || '';
  const note = document.getElementById('bookNote')?.value || '';
  const { pricePerPax, total, info } = calcPrice(dest, pkg, pax);
  const destNames = { halong:'Vịnh Hạ Long', danang:'Đà Nẵng', hoian:'Hội An', sapa:'Sa Pa', phuquoc:'Phú Quốc', nhatrang:'Nha Trang', hanoi:'Hà Nội', hcm:'TP. Hồ Chí Minh' };
  const pkgNames = { '2N1D':'2 Ngày 1 Đêm', '3N2D':'3 Ngày 2 Đêm', '4N3D':'4 Ngày 3 Đêm', '5N4D':'5 Ngày 4 Đêm', '7N6D':'7 Ngày 6 Đêm' };
  const attrText = selectedAttractions.length > 0 ? selectedAttractions.map(a => a.split(' ').slice(1).join(' ')).join(', ') : 'Theo lịch trình chuẩn';
  const html = `
    <div class="price-breakdown">
      <div><span>👤 Khách hàng</span><span>${name}</span></div>
      <div><span>📱 Điện thoại</span><span>${phone}</span></div>
      <div><span>✉️ Email</span><span>${email}</span></div>
      <div><span>📍 Điểm đến</span><span>${destNames[dest] || dest}</span></div>
      <div><span>🗓️ Gói tour</span><span>${pkgNames[pkg] || pkg}</span></div>
      <div><span>📅 Ngày khởi hành</span><span>${formatDate(date)}</span></div>
      <div><span>👥 Số khách</span><span>${pax} người (${info.label})</span></div>
      <div><span>🗺️ Địa điểm tham quan</span><span style="max-width:180px">${attrText}</span></div>
      ${note ? `<div><span>📝 Ghi chú</span><span>${note}</span></div>` : ''}
      <div><span>💰 Giá/người</span><span>${formatPrice(pricePerPax)}đ${info.discount > 0 ? ` (giảm ${info.discount}%)` : ''}</span></div>
      <div class="total-row"><span>💳 TỔNG THANH TOÁN</span><span>${formatPrice(total)}đ</span></div>
    </div>`;
  const el = document.getElementById('bookingSummaryContent');
  if (el) el.innerHTML = html;
}

function submitBooking() {
  const dest = document.getElementById('bookDest')?.value || 'halong';
  const pkg = document.getElementById('bookPackage')?.value || '3N2D';
  const pax = parseInt(document.getElementById('bookGuests')?.value || '2');
  const name = document.getElementById('bookName')?.value || '';
  const phone = document.getElementById('bookPhone')?.value || '';
  const email = document.getElementById('bookEmail')?.value || '';
  const date = document.getElementById('bookDate')?.value || '';
  const note = document.getElementById('bookNote')?.value || '';
  const { pricePerPax, total, info } = calcPrice(dest, pkg, pax);
  const bookingId = generateBookingId();

  // Save to localStorage (mock Oracle INSERT)
  const booking = {
    id: bookingId, name, phone, email, dest, package: pkg,
    departDate: date, guests: pax, totalPrice: total, pricePerPax,
    discountLabel: info.label, discountPct: info.discount,
    attractions: selectedAttractions, note, payment: selectedPayment,
    status: 'CONFIRMED', createdDate: new Date().toISOString()
  };
  bookings.unshift(booking);
  localStorage.setItem('vt_bookings', JSON.stringify(bookings));
  updateBookingCounts();

  // Show step 3
  currentStep = 3; showStep(3);
  const codeEl = document.getElementById('bookingCode');
  if (codeEl) codeEl.textContent = bookingId;

  // Simulate Oracle INSERT log
  const insertMsg = document.getElementById('oracleInsertMsg');
  if (insertMsg) {
    insertMsg.textContent = 'Đang lưu vào Oracle...';
    setTimeout(() => {
      insertMsg.textContent = `✓ INSERT INTO BOOKINGS (${bookingId}) – COMMIT OK`;
      addOracleLog(`INSERT – BOOKINGS (ID: ${bookingId}) – ${pax} pax – ${formatPrice(total)}đ`, 'success');
    }, 1200);
  }
  showToast(`🎉 Đặt tour thành công! Mã: ${bookingId}`, 'success');
}

function viewInDB() {
  closeBookingModal();
  setTimeout(() => {
    document.getElementById('db-panel')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => loadTable('bookings'), 600);
  }, 300);
}

/* ===== SEARCH ===== */
function switchTab(type, btn) {
  document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  // For now only tour search is implemented
  if (type !== 'tour') showToast('🚧 Tính năng này đang phát triển. Vui lòng dùng tìm tour!', 'info');
}

function searchTours() {
  const dest = document.getElementById('destination')?.value;
  const date = document.getElementById('departDate')?.value;
  const duration = document.getElementById('duration')?.value;
  const guests = parseInt(document.getElementById('guests')?.value || '2');
  if (!dest && !duration) { showToast('⚠️ Vui lòng chọn ít nhất Điểm đến hoặc Thời gian tour', 'error'); return; }

  // Filter tours
  let results = TOUR_DATA;
  if (dest) results = results.filter(t => t.dest === dest);
  if (duration) results = results.filter(t => t.duration === duration);

  const { pricePerPax, total, info } = dest || duration ? calcPrice(dest || 'halong', duration || '3N2D', guests) : { pricePerPax: 0, total: 0, info: GROUP_DISCOUNT_BY_PAX[0] };

  const queryInfo = `SELECT * FROM TOURS WHERE ${dest ? `DESTINATION='${dest.toUpperCase()}'` : '1=1'}${duration ? ` AND DURATION='${duration}'` : ''} ORDER BY RATING DESC -- ${results.length} row(s) found`;
  const modal = document.getElementById('searchModal');
  const qinfo = document.getElementById('searchQueryInfo');
  const sresults = document.getElementById('searchResults');

  if (qinfo) qinfo.textContent = queryInfo;
  if (sresults) {
    if (results.length === 0) {
      sresults.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted)"><div style="font-size:48px">🔍</div><p>Không tìm thấy tour phù hợp. Hãy thử thay đổi tiêu chí tìm kiếm.</p></div>`;
    } else {
      const { info } = calcPrice(dest || 'halong', duration || '3N2D', guests);
      sresults.innerHTML = results.map(t => {
        const price = guests >= t.groupMinPax ? t.priceGroup : t.priceIndividual;
        const mult = DURATION_MULTIPLIER[duration || t.duration] || 1.0;
        const finalPrice = Math.round(price * mult);
        const isGroup = guests >= t.groupMinPax;
        return `<div class="search-result-card">
          <div class="src-info">
            <div class="src-name">${t.name}</div>
            <div class="src-meta">
              <span>📍 ${t.destName}</span>
              <span>🗓️ ${duration || t.duration}</span>
              <span>⭐ ${t.rating} (${t.reviews.toLocaleString('vi')})</span>
              <span>👥 ${isGroup ? `Giá đoàn (${guests} người, giảm đặc biệt)` : `Giá cá nhân (${guests} người)`}</span>
            </div>
          </div>
          <div class="src-price">
            <div class="src-price-val">${formatPrice(finalPrice * guests)}đ</div>
            <div class="src-price-type">${formatPrice(finalPrice)}đ/người${isGroup ? ' 🎉 Giá đoàn' : ''}</div>
            <button class="btn-book-tour" style="margin-top:8px;padding:8px 16px;font-size:13px;" onclick="openBookingModal('${t.dest}','${t.id}');closeSearchModal()">Đặt ngay</button>
          </div>
        </div>`;
      }).join('');
    }
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  addOracleLog(`SELECT * FROM TOURS WHERE dest='${dest||'ALL'}' – ${results.length} rows`);
}

function closeSearchModal() {
  document.getElementById('searchModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

function closeSearchOutside(e) {
  if (e.target === document.getElementById('searchModal')) closeSearchModal();
}

/* ===== GUEST COUNTER ===== */
function changeGuests(delta) {
  const el = document.getElementById('guests');
  if (!el) return;
  const val = Math.max(1, Math.min(100, parseInt(el.value || '2') + delta));
  el.value = val;
}

/* ===== PAYMENT ===== */
function selectPayment(type, btn) {
  document.querySelectorAll('.payment-method').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  selectedPayment = type;
  const detail = document.getElementById('paymentDetail');
  if (!detail) return;
  if (type === 'bank') {
    detail.innerHTML = `<div class="bank-transfer">
      <div class="bank-info">
        <div class="bank-logo">🏦</div>
        <div><div class="bank-name">Vietcombank</div><div class="bank-acc">STK: <strong>1234 5678 9012</strong></div><div class="bank-owner">Chủ TK: CONG TY TNHH VIETTOUR</div></div>
      </div>
      <div class="bank-content">Nội dung CK: <strong id="transferContent">VT-BOOKING</strong></div>
      <div class="bank-qr"><div class="qr-placeholder"><div class="qr-pattern"></div><span>QR Code Thanh toán</span></div></div>
    </div>`;
  } else if (type === 'card') {
    detail.innerHTML = `<div style="padding:20px;background:rgba(255,255,255,0.04);border-radius:12px;border:1px solid var(--glass-border)">
      <div class="form-row"><div class="form-group"><label>Số thẻ</label><input class="form-input" placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCardNum(this)"/></div><div class="form-group"><label>Tên trên thẻ</label><input class="form-input" placeholder="NGUYEN VAN A"/></div></div>
      <div class="form-row"><div class="form-group"><label>Ngày hết hạn</label><input class="form-input" placeholder="MM/YY" maxlength="5"/></div><div class="form-group"><label>CVV</label><input class="form-input" placeholder="123" maxlength="3" type="password"/></div></div>
    </div>`;
  } else if (type === 'momo') {
    detail.innerHTML = `<div style="text-align:center;padding:24px;background:rgba(192,11,99,0.08);border:1px solid rgba(192,11,99,0.3);border-radius:12px;">
      <div style="font-size:48px;margin-bottom:12px;">📱</div>
      <div style="font-size:18px;font-weight:700;color:#e11d7b;margin-bottom:8px;">Thanh toán qua MoMo</div>
      <p style="color:var(--text-muted);font-size:14px;">Mở app MoMo → Quét QR hoặc chuyển tiền đến số: <strong style="color:white">0901 234 567</strong></p>
      <p style="color:var(--text-muted);font-size:13px;margin-top:8px;">Nội dung: <strong id="transferContent" style="color:#e11d7b">VT-BOOKING</strong></p>
      <div class="qr-placeholder" style="margin:16px auto;display:inline-flex;"><div class="qr-pattern"></div><span>QR MoMo</span></div>
    </div>`;
  }
  buildBookingSummary();
}

function formatCardNum(el) {
  let v = el.value.replace(/\D/g,'').substring(0,16);
  el.value = v.replace(/(.{4})/g,'$1 ').trim();
}

/* ===== ORACLE DB PANEL ===== */
function loadTable(tableName) {
  document.querySelectorAll('.db-tree-item').forEach(i => i.classList.remove('active'));
  const item = document.querySelector(`.db-tree-item[onclick*="${tableName}"]`);
  if (item) item.classList.add('active');

  const sqlInput = document.getElementById('sqlInput');
  if (sqlInput) sqlInput.value = `SELECT * FROM ${tableName.toUpperCase()} ORDER BY CREATED_DATE DESC FETCH FIRST 10 ROWS ONLY`;

  const output = document.getElementById('dbOutput');
  if (output) {
    output.innerHTML = `<div class="db-loading"><div class="db-spinner"></div><span>Truy vấn Oracle Database...</span></div>`;
  }
  const start = Date.now();
  setTimeout(() => {
    const elapsed = Date.now() - start;
    const rows = buildTableData(tableName);
    if (output) output.innerHTML = rows;
    const rc = document.getElementById('dbRowCount');
    const et = document.getElementById('dbExecTime');
    if (rc) rc.textContent = `${tableName === 'bookings' ? bookings.length : (tableName === 'customers' ? 847 : tableName === 'tours' ? 56 : bookings.filter(b=>b.status==='CONFIRMED').length)} rows`;
    if (et) et.textContent = `${elapsed + Math.round(Math.random()*8)}ms`;
    addOracleLog(`SELECT * FROM ${tableName.toUpperCase()} – ${tableName === 'bookings' ? bookings.length : 56} rows returned`);
  }, 600 + Math.random() * 300);
}

function buildTableData(table) {
  if (table === 'bookings') {
    if (bookings.length === 0) return `<div style="text-align:center;padding:30px;color:var(--text-muted)">📭 Chưa có đặt chỗ nào. <a href="#" onclick="openBookingModal()" style="color:var(--primary-light)">Đặt tour ngay!</a></div>`;
    return `<table class="db-table"><thead><tr><th>ID</th><th>Khách hàng</th><th>Điểm đến</th><th>Ngày đi</th><th>Số khách</th><th>Tổng tiền</th><th>Trạng thái</th></tr></thead><tbody>
      ${bookings.slice(0,10).map(b => `<tr>
        <td style="color:var(--primary-light);font-weight:700;">${b.id}</td>
        <td>${b.name}</td>
        <td>${b.dest?.toUpperCase()}</td>
        <td>${b.departDate || '–'}</td>
        <td>${b.guests} người</td>
        <td style="color:var(--secondary-light);font-weight:600;">${formatPrice(b.totalPrice)}đ</td>
        <td><span style="color:var(--green);font-weight:600;">✓ ${b.status}</span></td>
      </tr>`).join('')}
    </tbody></table>`;
  }
  if (table === 'tours') {
    return `<table class="db-table"><thead><tr><th>Tour ID</th><th>Tên Tour</th><th>Điểm đến</th><th>Thời gian</th><th>Giá cá nhân</th><th>Giá đoàn</th><th>Rating</th></tr></thead><tbody>
      ${TOUR_DATA.map(t => `<tr>
        <td style="color:var(--primary-light);font-weight:700;">${t.id}</td>
        <td>${t.name}</td>
        <td>${t.destName}</td>
        <td>${t.duration}</td>
        <td>${formatPrice(t.priceIndividual)}đ</td>
        <td style="color:var(--secondary-light)">${formatPrice(t.priceGroup)}đ</td>
        <td>⭐ ${t.rating}</td>
      </tr>`).join('')}
    </tbody></table>`;
  }
  if (table === 'customers') {
    const sample = [
      {id:'C001',name:'Nguyễn Văn An',phone:'0901234567',email:'an@email.com',bookings:3},
      {id:'C002',name:'Trần Thị Bình',phone:'0912345678',email:'binh@email.com',bookings:1},
      {id:'C003',name:'Lê Văn Cường',phone:'0923456789',email:'cuong@email.com',bookings:5},
      {id:'C004',name:'Phạm Thị Dung',phone:'0934567890',email:'dung@email.com',bookings:2},
    ];
    return `<table class="db-table"><thead><tr><th>ID</th><th>Khách hàng</th><th>Điện thoại</th><th>Email</th><th>Số lần đặt</th></tr></thead><tbody>
      ${sample.map(c=>`<tr><td style="color:var(--primary-light)">${c.id}</td><td>${c.name}</td><td>${c.phone}</td><td>${c.email}</td><td>${c.bookings}</td></tr>`).join('')}
      <tr><td colspan="5" style="text-align:center;color:var(--text-dim);padding:10px;">... và 843 khách hàng khác trong Oracle DB</td></tr>
    </tbody></table>`;
  }
  if (table === 'payments') {
    if (bookings.length === 0) return `<div style="text-align:center;padding:30px;color:var(--text-muted)">📭 Chưa có thanh toán nào.</div>`;
    return `<table class="db-table"><thead><tr><th>Payment ID</th><th>Booking ID</th><th>Phương thức</th><th>Số tiền</th><th>Trạng thái</th><th>Thời gian</th></tr></thead><tbody>
      ${bookings.slice(0,10).map((b,i)=>`<tr>
        <td style="color:var(--primary-light)">PAY${String(i+1).padStart(4,'0')}</td>
        <td>${b.id}</td>
        <td>${b.payment === 'bank' ? '🏦 Chuyển khoản' : b.payment === 'card' ? '💳 Thẻ' : '📱 MoMo'}</td>
        <td style="color:var(--secondary-light);font-weight:600;">${formatPrice(b.totalPrice)}đ</td>
        <td><span style="color:var(--green)">✓ PAID</span></td>
        <td>${new Date(b.createdDate).toLocaleString('vi-VN')}</td>
      </tr>`).join('')}
    </tbody></table>`;
  }
}

function executeSQL() {
  const sql = document.getElementById('sqlInput')?.value?.trim();
  if (!sql) return;
  const output = document.getElementById('dbOutput');
  if (output) output.innerHTML = `<div class="db-loading"><div class="db-spinner"></div><span>Executing Oracle SQL...</span></div>`;
  const start = Date.now();
  setTimeout(() => {
    const elapsed = Date.now() - start + Math.round(Math.random()*20);
    let result;
    const s = sql.toLowerCase();
    if (s.includes('bookings')) result = buildTableData('bookings');
    else if (s.includes('tours')) result = buildTableData('tours');
    else if (s.includes('customers')) result = buildTableData('customers');
    else if (s.includes('payments')) result = buildTableData('payments');
    else if (s.includes('count') || s.includes('sum')) {
      result = `<table class="db-table"><thead><tr><th>COUNT(*)</th><th>SUM(TOTAL_PRICE)</th></tr></thead><tbody>
        <tr><td style="color:var(--primary-light);font-weight:700">${bookings.length}</td><td style="color:var(--secondary-light);font-weight:700">${formatPrice(bookings.reduce((s,b)=>s+b.totalPrice,0))}đ</td></tr>
      </tbody></table>`;
    } else {
      result = `<div style="color:var(--primary-light);font-family:monospace;padding:16px;background:rgba(8,145,178,0.05);border-radius:8px;">
        <div style="color:var(--text-dim);margin-bottom:8px;">-- Oracle SQL Result --</div>
        <div style="color:var(--green)">✓ Query executed successfully in ${elapsed}ms</div>
        <div style="color:var(--text-muted);margin-top:8px;">Câu lệnh SQL được xử lý bởi Oracle 21c XE engine.</div>
      </div>`;
    }
    if (output) output.innerHTML = result;
    const et = document.getElementById('dbExecTime');
    if (et) et.textContent = `${elapsed}ms`;
    addOracleLog(`SQL EXEC – "${sql.substring(0,50)}..." – ${elapsed}ms`);
  }, 500 + Math.random()*400);
}

function runQuery(sql) {
  const input = document.getElementById('sqlInput');
  if (input) input.value = sql;
  executeSQL();
}

/* ===== ORACLE LOG ===== */
function addOracleLog(msg, type = '') {
  const log = document.getElementById('oracleLog');
  if (!log) return;
  const time = new Date().toLocaleTimeString('vi-VN');
  const line = document.createElement('div');
  line.className = `log-line${type === 'success' ? ' success' : ''}`;
  line.innerHTML = `<span class="log-time">${time}</span> ${msg}`;
  log.prepend(line);
  // Keep max 10 lines
  while (log.children.length > 10) log.removeChild(log.lastChild);
}

function simulateOracleLog() {
  const msgs = [
    'INFO – Connection pool: 18/100 active',
    'SELECT – TOURS (56 rows fetched)',
    'INFO – Buffer cache hit ratio: 94.2%',
    'CHECKPOINT – Redo log archived',
    'INFO – Auto optimizer stats collection running'
  ];
  let i = 0;
  setInterval(() => {
    addOracleLog(msgs[i % msgs.length]);
    i++;
  }, 8000);
}

/* ===== NAV SCROLL ===== */
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    // Update active nav link
    const sections = ['home','destinations','tours','db-panel'];
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

/* ===== PARTICLES ===== */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      position:absolute; border-radius:50%;
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      background:rgba(${Math.random()>0.5?'34,211,238':'52,211,153'},${Math.random()*0.5+0.1});
      animation: float ${Math.random()*10+8}s infinite ease-in-out ${Math.random()*5}s;
    `;
    container.appendChild(p);
  }
  if (!document.getElementById('particleStyle')) {
    const style = document.createElement('style');
    style.id = 'particleStyle';
    style.textContent = `@keyframes float { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-${20+Math.random()*30}px) scale(1.1)} }`;
    document.head.appendChild(style);
  }
}

/* ===== STAT COUNTER ===== */
function animateStats() {
  const nums = document.querySelectorAll('[data-target]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = target / 70;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current).toLocaleString('vi');
          if (current >= target) clearInterval(timer);
        }, 20);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });
  nums.forEach(n => observer.observe(n));
}

/* ===== DEFAULT DATES ===== */
function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today); tomorrow.setDate(tomorrow.getDate() + 7);
  const fmt = d => d.toISOString().split('T')[0];
  const dd = document.getElementById('departDate'); if (dd) { dd.min = fmt(tomorrow); dd.value = fmt(tomorrow); }
  const bd = document.getElementById('bookDate'); if (bd) { bd.min = fmt(tomorrow); bd.value = fmt(tomorrow); }
}

/* ===== TOAST ===== */
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span style="font-size:18px">${icons[type]||'ℹ️'}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}

/* ===== UTILITIES ===== */
function formatPrice(n) { return Math.round(n).toLocaleString('vi-VN'); }
function formatDate(d) {
  if (!d) return '–';
  const dt = new Date(d);
  return dt.toLocaleDateString('vi-VN', { weekday:'long', day:'2-digit', month:'2-digit', year:'numeric' });
}
function generateBookingId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const rand = Array.from({length:6}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
  return `VT${new Date().getFullYear()}${rand}`;
}

// Price update listeners
['bookDest','bookPackage','bookGuests'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('change', updatePriceEstimate);
  if (el && el.type === 'number') el.addEventListener('input', updatePriceEstimate);
});
