# Asif Ahamed — Portfolio

Personal academic and software portfolio built with Next.js 14, React 18, and Tailwind CSS. Features research publications across deep learning, bioinformatics, and environmental data analysis, alongside selected software engineering projects.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deploy](https://img.shields.io/badge/GitHub_Pages-Live-22c55e?style=flat-square&logo=github&logoColor=white)](https://asifahamed11.github.io/asif-ahamed-portfolio/)

## Live Demo

- **Production Site:** [https://asifahamed11.github.io/asif-ahamed-portfolio/](https://asifahamed11.github.io/asif-ahamed-portfolio/)

## Color Palette

The interface uses a modern, high-contrast light theme defined in `tailwind.config.ts` and `src/app/globals.css`:

| Name | Hex / Class | Usage |
|:---|:---|:---|
| **Slate 900** | `#0F172A` | Primary typography, headings, high-contrast action elements |
| **Slate 600** | `#475569` | Body text, publication summaries, secondary labels |
| **Indigo 600** | `#4F46E5` | Primary brand accent, interactive links, active pills |
| **Amber 500** | `#F59E0B` | Academic awards, honors, distinction badges |
| **Surface** | `#FFFFFF` / `#FAFAFC` | Clean white cards, frosted glass dock, dot pattern canvas |

## Overview of Sections

- **Hero & Intro:** Role animation, summary metrics (publications, award count, CGPA), and quick links.
- **About:** Education details at Varendra University, academic honors, and interactive CGPA progress gauge.
- **Research & Publications:** Filterable list of conference papers and book chapters with author lists, venues, and topics.
- **Featured Projects:** GitHub-linked repositories spanning machine learning tools, web applications, and system scripts.
- **Technical Skills:** Categorized breakdown of programming languages, machine learning frameworks, web libraries, and tools.
- **Contact:** Direct email action, clipboard copy, and academic/coding profiles (Google Scholar, LinkedIn, GitHub, Codeforces, LeetCode).

## Tech Stack

- **Framework:** Next.js 14 (App Router, Static HTML Export)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 12, HTML5 Canvas API
- **Icons:** Lucide React
- **Hosting:** GitHub Pages via GitHub Actions workflow

## Development Setup

### Prerequisites
- Node.js 18+ (Node.js 20 LTS recommended)
- npm 9+

### Commands

```bash
# Clone the repository
git clone https://github.com/asifahamed11/asif-ahamed-portfolio.git
cd asif-ahamed-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Run ESLint validation
npm run lint

# Build static production bundle (outputs to ./out)
npm run build
```

The local development server runs at `http://localhost:3000/asif-ahamed-portfolio`.

## Project Structure

```
src/
├── app/
│   ├── fonts/            # Local typography assets
│   ├── globals.css       # Design tokens, keyframes, utility classes
│   ├── layout.tsx        # Metadata, OpenGraph, JSON-LD Schema.org setup
│   └── page.tsx          # Single-page layout assembly
├── components/
│   ├── About.tsx         # Bio card, education details, CGPA gauge
│   ├── Contact.tsx       # Contact methods and social links
│   ├── Footer.tsx        # Footer and scroll-to-top button
│   ├── Hero.tsx          # Canvas particle background and intro header
│   ├── Navbar.tsx        # Section-tracking sticky header
│   ├── Projects.tsx      # Project grid with 3D hover effects
│   ├── Research.tsx      # Filterable publications catalogue
│   ├── SectionHeading.tsx# Shared section title component
│   └── Skills.tsx        # Grouped technical skill tags
└── lib/
    ├── content-provider.tsx # Context provider with localStorage sync
    └── data.ts              # Centralized data model and records
```

## License

This project is licensed under the [MIT License](LICENSE).
