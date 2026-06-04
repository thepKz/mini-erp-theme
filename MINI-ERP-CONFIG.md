# Mini-ERP Project Configuration

> **Tài liệu cấu hình và hướng dẫn cho dự án Mini-ERP**  
> Cập nhật: 04/06/2026

---

## 📋 Thông Tin Dự Án

### Tổng Quan
- **Tên dự án**: Mini-ERP (HRM Template)
- **Framework**: Next.js 15.5.19
- **React Version**: 18.3.1
- **UI Framework**: React Bootstrap 2.10.5 + Bootstrap 5.3.3
- **Package Manager**: npm
- **Node.js**: Khuyến nghị >= 18.x

### Cấu Trúc Thư Mục
```
template-hrm/
├── src/
│   ├── components/           # React components
│   │   ├── child/           # Child components (180+ components)
│   │   └── *.jsx            # Main layer components
│   ├── helper/              # Helper utilities
│   │   ├── Animation.jsx
│   │   ├── MobileMenuToggle.jsx
│   │   ├── PluginInit.js
│   │   ├── RouteScrollToTop.jsx
│   │   ├── SortableTask.js
│   │   └── ThemeToggleButton.jsx
│   └── hook/                # Custom React hooks
│       └── event-utils.js
├── public/                  # Static assets
├── package.json
├── next.config.js
└── jsconfig.json
```

---

## 🔧 Cài Đặt & Chạy Dự Án

### Cài Đặt Dependencies
```bash
cd template-hrm
npm install
```

### Chạy Development Server
```bash
npm run dev
```
- URL: http://localhost:3000

### Build Production
```bash
npm run build
npm start
```

### Lint Code
```bash
npm run lint
```

---

## 📦 Dependencies Chính

### Core Framework
- **next**: ^15.0.4 (đã cập nhật 15.5.19)
- **react**: ^18.2.0 (đã cập nhật 18.3.1)
- **react-dom**: ^18.2.0 (đã cập nhật 18.3.1)

### UI & Styling
- **bootstrap**: ^5.3.3
- **react-bootstrap**: ^2.10.5
- **animate.css**: ^4.1.1
- **wowjs**: ^1.1.3 (Animation library)

### Charts & Visualization
- **apexcharts**: ^4.1.0 (đã cập nhật 4.7.0)
- **react-apexcharts**: ^1.7.0 (đã cập nhật 1.9.0)
- **jsvectormap**: ^1.7.0 (Maps)

### Drag & Drop
- **@dnd-kit/core**: ^6.1.0
- **@dnd-kit/modifiers**: ^7.0.0
- **@dnd-kit/sortable**: ^8.0.0
- **@hello-pangea/dnd**: ^17.0.0 (đã cập nhật)
- **react-beautiful-dnd**: ^13.1.1

### Forms & Input
- **react-datepicker**: ^7.4.0 (đã cập nhật 7.6.0)
- **flatpickr**: ^4.6.13
- **react-quill**: ^2.0.0 (Rich text editor)
- **react-quill-new**: ^3.3.3

### Tables & Data
- **datatables.net**: ^2.1.8
- **datatables.net-dt**: ^2.1.8
- **jquery**: ^3.7.1

### Calendar
- **@fullcalendar/core**: ^6.1.10
- **@fullcalendar/daygrid**: ^6.1.10
- **@fullcalendar/interaction**: ^6.1.10
- **@fullcalendar/react**: ^6.1.10
- **@fullcalendar/timegrid**: ^6.1.10

### Icons & UI Components
- **@phosphor-icons/react**: ^2.1.7
- **@iconify/react**: ^5.0.2 (đã cập nhật 5.2.1)
- **@iconify-json/solar**: ^1.2.0

### Utilities
- **uuid**: ^10.0.0
- **katex**: ^0.16.11 (đã cập nhật 0.16.47) - Math rendering
- **highlight.js**: ^11.10.0 - Code highlighting
- **isotope-layout**: ^3.0.6 - Grid layout
- **react-toastify**: ^10.0.5 (đã cập nhật 10.0.6) - Notifications
- **react-scroll-to-top**: ^3.0.0
- **react-fast-marquee**: ^1.6.5
- **react-modal-video**: ^2.0.2
- **react-slick**: ^0.30.2 (đã cập nhật 0.30.3) + **slick-carousel**: ^1.8.1
- **react-slider**: ^2.0.6
- **@ramonak/react-progress-bar**: ^5.2.0

### Testing
- **@testing-library/jest-dom**: ^5.17.0
- **@testing-library/react**: ^13.4.0
- **@testing-library/user-event**: ^13.5.0

---

## ⚙️ Cấu Hình

### next.config.js
```javascript
const nextConfig = {
  reactStrictMode: false,
};
```

### jsconfig.json
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Alias Import
Sử dụng `@/` để import từ thư mục `src/`:
```javascript
import Component from '@/components/MyComponent';
```

---

## 🔒 Bảo Mật - Security Audit

### Tình Trạng Hiện Tại
**32 vulnerabilities** (10 low, 9 moderate, 13 high)

### Các Lỗ Hổng Chính

#### 1. **quill** (Moderate) - XSS Vulnerability
- **Package**: `quill`, `react-quill`, `react-quill-new`
- **Issue**: Cross-site Scripting (XSS)
- **Impact**: Có thể bị tấn công XSS qua HTML export
- **Khuyến nghị**: Cẩn thận với user input trong editor

#### 2. **postcss** (Moderate) - XSS Vulnerability
- **Package**: `postcss` trong `next` và `resolve-url-loader`
- **Issue**: XSS via unescaped `</style>` tag
- **Fix**: Yêu cầu breaking change (downgrade Next.js)
- **Khuyến nghị**: Chấp nhận risk hoặc update Next.js sau

#### 3. **uuid** (Moderate) - Buffer Bounds Check
- **Package**: `uuid`
- **Issue**: Missing buffer bounds check in v3/v5/v6
- **Current**: v10.0.0
- **Fixed**: v11.1.1+
- **Khuyến nghị**: Update lên v11+ khi có thể

#### 4. **serialize-javascript** (High) - RCE & DoS
- **Package**: `serialize-javascript`
- **Issue**: Remote Code Execution & CPU Exhaustion
- **Impact**: Trong `react-scripts`, `css-minimizer-webpack-plugin`
- **Khuyến nghị**: Update webpack config

#### 5. **underscore** (High) - DoS Attack
- **Package**: `underscore`
- **Issue**: Unlimited recursion
- **Fixed**: v1.13.8+
- **Khuyến nghị**: `npm audit fix` đã xử lý

#### 6. **nth-check** (High) - RegEx Complexity
- **Package**: `nth-check` trong `svgo`
- **Issue**: Inefficient RegEx
- **Impact**: Trong `react-scripts`
- **Khuyến nghị**: Update react-scripts (breaking change)

#### 7. **jest** & **jsdom** (Low/Moderate)
- **Issue**: Dependency chain vulnerabilities
- **Impact**: Chỉ trong dev/test environment
- **Khuyến nghị**: Chấp nhận risk (không ảnh hưởng production)

### Hành Động Đã Thực Hiện
```bash
✅ npm install - Cài đặt dependencies
✅ npm audit - Kiểm tra security
✅ npm update - Update các package an toàn
```

### Hành Động Khuyến Nghị
```bash
# Xem chi tiết vulnerabilities
npm audit

# Fix các vấn đề không breaking
npm audit fix

# Fix TẤT CẢ (có thể gây breaking changes)
# ⚠️ KHÔNG khuyến nghị ngay lúc này
npm audit fix --force
```

---

## 🚀 Roadmap Mini-ERP

### Phase 1: Setup & Foundation ✅
- [x] Cài đặt dependencies
- [x] Kiểm tra bảo mật
- [x] Tạo tài liệu config
- [ ] Thiết lập environment variables
- [ ] Thiết lập database connection

### Phase 2: Core Modules
- [ ] **Authentication & Authorization**
  - User login/logout
  - Role-based access control (RBAC)
  - Permission management
  
- [ ] **Employee Management (HRM)**
  - Employee profiles
  - Department structure
  - Position/Role management
  - Attendance tracking
  - Leave management
  
- [ ] **Inventory Management**
  - Product catalog
  - Stock tracking
  - Warehouse management
  - Purchase orders
  - Stock reports

- [ ] **Sales & CRM**
  - Customer management
  - Sales orders
  - Quotations
  - Invoice generation
  - Sales reports

- [ ] **Finance & Accounting**
  - Expense tracking
  - Revenue tracking
  - Payment management
  - Financial reports
  - Budget planning

### Phase 3: Advanced Features
- [ ] **Dashboard & Analytics**
  - Real-time charts
  - KPI tracking
  - Custom reports
  - Export to PDF/Excel

- [ ] **Notifications & Alerts**
  - Email notifications
  - In-app notifications
  - Task reminders

- [ ] **Document Management**
  - File upload/download
  - Document versioning
  - Access control

### Phase 4: Integration & Optimization
- [ ] **API Integration**
  - REST API
  - Third-party integrations
  - Webhook support

- [ ] **Performance Optimization**
  - Code splitting
  - Image optimization
  - Caching strategies

- [ ] **Testing & QA**
  - Unit tests
  - Integration tests
  - E2E tests

---

## 📊 Available Components

### Dashboard Components (180+ components)
- **Statistics**: UnitCount (1-8), Revenue, Sales, Earnings
- **Charts**: LineChart, PieChart, ApexCharts, StepLineChart
- **Tables**: DefaultTable, BorderedTables, StripedRows, DataTables
- **Cards**: Card layouts, Statistics cards, Info cards
- **Forms**: Input fields, Dropdowns, Switches, Radio, Checkboxes
- **UI Elements**: Alerts, Badges, Buttons, Tags, Tooltips, Progress bars
- **Modals & Overlays**: Task modals, Image overlays
- **Drag & Drop**: KanbanBoard, SortableTask
- **Calendar**: FullCalendar integration
- **Maps**: JSVectorMap, Distribution maps
- **Carousel**: Slick carousel, Image galleries
- **Video**: Video player, Modal video
- **Pricing**: Pricing plans, Payment history
- **Analytics**: Customer stats, Sales reports, Performance tracking

---

## 🎨 Theme & Styling

### Bootstrap Theme
- Bootstrap 5.3.3
- React Bootstrap components
- Responsive design
- Dark/Light mode support (ThemeToggleButton)

### Animation
- Animate.css
- WOW.js for scroll animations
- Custom animations in helper/Animation.jsx

---

## 🔗 Import Paths & Aliases

```javascript
// Using @ alias
import { Component } from '@/components/MyComponent';
import { helper } from '@/helper/Animation';
import { useCustomHook } from '@/hook/event-utils';
```

---

## 💡 Best Practices

### Security
1. ✅ Thường xuyên chạy `npm audit` để kiểm tra vulnerabilities
2. ✅ Update dependencies định kỳ
3. ⚠️ Validate và sanitize user input (đặc biệt với Quill editor)
4. ⚠️ Implement CSP (Content Security Policy) headers
5. ⚠️ Sử dụng HTTPS trong production

### Performance
1. ✅ Sử dụng Next.js Image component cho optimize images
2. ✅ Implement code splitting
3. ✅ Lazy load components khi cần
4. ✅ Memoize expensive computations
5. ✅ Optimize bundle size

### Code Quality
1. ✅ Sử dụng ESLint (`npm run lint`)
2. ✅ Follow React best practices
3. ✅ Component naming conventions
4. ✅ Proper error handling
5. ✅ Write tests for critical features

---

## 🐛 Known Issues

1. **react-scripts vulnerabilities**: Ảnh hưởng nhiều dependencies, cần update major version
2. **postcss trong Next.js**: Vulnerability trong Next.js internal postcss
3. **Quill XSS**: Cần careful input sanitization
4. **React StrictMode disabled**: Có thể ảnh hưởng debugging

---

## 📞 Support & Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Bootstrap Docs](https://react-bootstrap.github.io/)
- [ApexCharts Docs](https://apexcharts.com/docs/)
- [FullCalendar Docs](https://fullcalendar.io/docs)

### Community
- Next.js Discord
- React Bootstrap GitHub Issues
- Stack Overflow

---

## 📝 Notes

- Project sử dụng Next.js 15 (latest stable)
- React 18 với Concurrent features
- Đã disable React Strict Mode trong [`next.config.js`](template-hrm/next.config.js:3)
- Path alias `@/` được config trong [`jsconfig.json`](template-hrm/jsconfig.json:4)
- 180+ pre-built components sẵn sàng sử dụng
- Bootstrap 5 + React Bootstrap để styling nhanh
- ApexCharts + FullCalendar integration
- Drag & Drop với @dnd-kit và react-beautiful-dnd

---

**Prepared for**: Mini-ERP Development  
**Status**: Ready for Development 🚀  
**Last Updated**: 04/06/2026
