<div align="center">

# ✨ Asif Ahamed — Portfolio

**Software Engineer & AI Researcher**

A premium, aurora-themed personal portfolio built with Next.js, featuring dynamic content management and a built-in admin panel.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deploy](https://img.shields.io/badge/GitHub_Pages-Live-22c55e?style=for-the-badge&logo=github&logoColor=white)](https://asifahamed11.github.io/asif-ahamed-portfolio/)

</div>

---

## 🌐 Live Demo

🔗 **[asifahamed11.github.io/asif-ahamed-portfolio](https://asifahamed11.github.io/asif-ahamed-portfolio/)**

---

## 🎨 Features

| Feature | Description |
|---------|-------------|
| 🌌 **Aurora Design** | Cyan-Violet-Rose gradient theme with glass morphism, glow effects, and animated backgrounds |
| ⌨️ **Typing Animation** | Dynamic hero with rotating role titles and particle canvas |
| 📊 **Animated CGPA Ring** | SVG-based circular progress indicator with smooth scroll-triggered animation |
| 🔬 **Research Filters** | Filter publications by status — All, Awarded, Published, Accepted |
| 🃏 **3D Project Cards** | CSS perspective tilt on hover with gradient accent bars |
| 🧭 **Smart Navbar** | Active section tracking on scroll with animated gradient underline |
| 🔐 **Admin Panel** | Built-in content management system with password protection |
| 📱 **Fully Responsive** | Optimized for all screen sizes with mobile-first approach |
| 🚀 **Static Export** | Deployed via GitHub Pages with zero server dependencies |

---

## 🏗️ Tech Stack

```
Frontend       → Next.js 14 (App Router) + React 18 + TypeScript
Styling        → TailwindCSS 3.4 + Custom CSS Utilities
Animations     → Framer Motion 12 + CSS Keyframes + Canvas API
Icons          → Lucide React
Content        → localStorage-based CMS with JSON import/export
Deployment     → GitHub Pages (Static Export)
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/asifahamed11/asif-ahamed-portfolio.git
cd asif-ahamed-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000/asif-ahamed-portfolio](http://localhost:3000/asif-ahamed-portfolio) in your browser.

### Build for Production

```bash
npm run build
```

The static output will be in the `out/` directory, ready for deployment.

---

## 🔐 Admin Panel

Manage all portfolio content without touching code.

| | |
|---|---|
| **URL** | `/asif-ahamed-portfolio/admin` |
| **Password** | `asif2026` |

### What you can edit:
- ✏️ Personal information (name, tagline, social links)
- 🎓 Education details (degree, CGPA, institution)
- 📄 Publications (add, edit, delete, reorder)
- 💼 Projects (title, description, tech stack, links)
- 🛠️ Skill categories and technologies

### Content Management:
- **Save** → Persists changes to `localStorage`
- **Export** → Download all content as `portfolio-content.json`
- **Import** → Upload a JSON file to restore content
- **Reset** → Revert all changes to defaults
- **Preview** → Open portfolio in new tab to see changes

> **Note**: Changes are stored in the browser's localStorage. To make changes visible to all visitors, export the JSON, update `src/lib/data.ts`, and redeploy.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── admin/
│   │   └── page.tsx          # Admin panel (password-protected CMS)
│   ├── fonts/                # Local font files (Geist)
│   ├── globals.css           # Design system & utility classes
│   ├── layout.tsx            # Root layout with ContentProvider
│   └── page.tsx              # Main portfolio page
├── components/
│   ├── About.tsx             # Bento grid with CGPA ring
│   ├── AnimatedSection.tsx   # Scroll animation wrapper
│   ├── Contact.tsx           # Contact info & social links
│   ├── Footer.tsx            # Footer with gradient border
│   ├── Hero.tsx              # Aurora hero with typing animation
│   ├── Navbar.tsx            # Smart navbar with scroll tracking
│   ├── Projects.tsx          # 3D tilt project cards
│   ├── Research.tsx          # Filterable publication cards
│   ├── SectionHeading.tsx    # Reusable section header
│   └── Skills.tsx            # Color-coded skill categories
└── lib/
    ├── content-provider.tsx  # React Context for dynamic content
    └── data.ts               # Default portfolio data & types
```

---

## 🎨 Design System

### Color Palette

| Token | Color | Usage |
|-------|-------|-------|
| `cyan` | `#06b6d4` | Primary accent, links, active states |
| `violet` | `#8b5cf6` | Secondary accent, gradients |
| `rose` | `#f43f5e` | Tertiary accent, alerts |
| `amber` | `#f59e0b` | Awards, achievements |
| `emerald` | `#10b981` | Success, accepted status |

### Utility Classes

| Class | Effect |
|-------|--------|
| `.glass` | Frosted glass morphism with backdrop blur |
| `.text-aurora` | Cyan → Violet → Rose gradient text |
| `.gradient-border` | Animated gradient border (aurora shift) |
| `.shimmer` | Subtle shine sweep animation |
| `.tilt-card` | CSS 3D perspective tilt on hover |
| `.section-glow` | Top border glow divider between sections |

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🤝 Customization Guide

Want to use this template for your own portfolio? Here's how:

1. **Fork & Clone** this repository
2. **Update `src/lib/data.ts`** with your personal information
3. **Replace** the profile image in `public/` directory
4. **Update `next.config.mjs`** — change `basePath` to your repo name
5. **Update CV link** in Navbar and About components
6. **Customize colors** in `tailwind.config.ts` to match your brand
7. **Change admin password** in `src/app/admin/page.tsx`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ by **[Asif Ahamed](https://github.com/asifahamed11)**

⭐ Star this repo if you found it helpful!

</div>
