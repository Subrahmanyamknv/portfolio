# 🚀 Premium Portfolio

A world-class, cinematic developer portfolio built with cutting-edge web technologies. Designed to impress recruiters, developers, and founders alike.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)

## ✨ Features

- **Cinematic Animations** — Motion (Framer Motion), GSAP, scroll-triggered reveals
- **3D Particle Background** — React Three Fiber with rotating star field
- **Smooth Scrolling** — Lenis for premium scroll feel
- **Dark/Light Mode** — Seamless theme switching with next-themes
- **Command Palette** — ⌘K quick navigation
- **Glassmorphism UI** — Frosted glass effects throughout
- **Magnetic Buttons** — Spring physics cursor interactions
- **3D Tilt Cards** — Perspective transform on hover
- **Animated Counters** — Stats that count up on scroll
- **Responsive Design** — Mobile-first, touch-optimized
- **SEO Optimized** — Metadata, sitemap, robots.txt, structured data
- **Performance Optimized** — Lazy loading, dynamic imports, GPU-accelerated animations

## 🏗 Architecture

```
src/
├── app/              # Next.js App Router pages & layout
├── components/
│   ├── icons/        # Custom SVG social icons
│   ├── layout/       # Navbar, Footer, CommandMenu, ThemeToggle
│   ├── motion/       # Reusable animation components
│   ├── sections/     # Page sections (Hero, About, Skills, etc.)
│   ├── shared/       # Shared UI components
│   └── three/        # React Three Fiber 3D components
├── data/             # Content data files (resume, projects, skills)
├── hooks/            # Custom React hooks
├── lib/              # Utilities, fonts, constants, metadata
├── stores/           # Zustand state management
├── styles/           # Animation variants & shared styles
└── types/            # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## 📝 Customization

### Personal Data
All content is driven by TypeScript data files in `src/data/`:

| File | Content |
|------|---------|
| `resume.ts` | Personal info, name, bio, social links |
| `projects.ts` | Project showcase data |
| `skills.ts` | Technical skills & categories |
| `experience.ts` | Work experience timeline |
| `achievements.ts` | Awards, certifications, stats |
| `testimonials.ts` | Client/colleague testimonials |

Simply edit these files to customize the portfolio with your own data.

### Theme Colors
Colors are defined as CSS custom properties in `src/app/globals.css`. The design system uses HSL values for easy customization.

### Fonts
Fonts are configured in `src/lib/fonts.ts` using `next/font` for zero CLS.

## 🎨 Design System

- **Primary**: Indigo (#6366f1)
- **Accent**: Cyan (#06b6d4)
- **Typography**: Inter (UI) + JetBrains Mono (code)
- **Spacing**: 8px base grid
- **Elevation**: 4 surface levels with glass effects
- **Animations**: Consistent easing curves (`[0.16, 1, 0.3, 1]`)

## 📱 Sections

1. **Hero** — Animated intro with role switcher, particles, CTAs
2. **About** — Bio, stats, philosophy cards
3. **Skills** — Interactive filterable skill grid with proficiency rings
4. **Experience** — Cinematic alternating timeline
5. **Projects** — Filterable project cards with 3D tilt
6. **Achievements** — Stats counters + achievement cards
7. **Testimonials** — Horizontal scroll carousel
8. **Contact** — Form with animated success state

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 16 | Framework (App Router) |
| React 19 | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS 4 | Styling |
| Motion | Animations |
| React Three Fiber | 3D Graphics |
| Lenis | Smooth Scrolling |
| Zustand | State Management |
| Lucide | Icons |
| next-themes | Dark/Light Mode |

## 📦 Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

### Manual
```bash
npm run build
npm run start
```

## 📄 License

MIT © [Subrahmanyam K. N. V.](https://github.com/Subrahmanyamknv)
