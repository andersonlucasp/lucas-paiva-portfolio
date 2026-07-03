<div align="center">

<img src="https://lucas-paiva-portfolio-lemon.vercel.app/img/hero.png" width="100%" alt="Lucas Paiva" style="border-radius:16px" />

<br />
<br />

# Lucas Paiva — Portfolio

**Senior Product Designer** · Design Ops & Design Systems · Itaú Unibanco

[![Live](https://img.shields.io/badge/Live-lucas--paiva--portfolio.vercel.app-black?style=for-the-badge&logo=vercel)](https://lucas-paiva-portfolio-lemon.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## Preview

<img src="https://lucas-paiva-portfolio-lemon.vercel.app/img/itau/03.png" width="49%" alt="Itaú Design System" /> <img src="https://lucas-paiva-portfolio-lemon.vercel.app/img/elo/03.png" width="49%" alt="Elo Website Redesign" />

<img src="https://lucas-paiva-portfolio-lemon.vercel.app/img/sukinho/01.png" width="49%" alt="Sukinho Rebranding" /> <img src="https://lucas-paiva-portfolio-lemon.vercel.app/img/experiences/experience01.png" width="49%" alt="Lucas Paiva" />

---

## About

Personal portfolio built from scratch, inspired by [Xenith (Webflow)](https://xenith-design.webflow.io/). Features a dark, editorial aesthetic with fluid typography, GSAP scroll animations, and a fully responsive layout.

> Senior Product Designer with 5+ years of experience crafting scalable digital products — currently leading Design Ops and the Design System at **Itaú Unibanco**, serving 40+ business segments across Latin America.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 |
| Animations | GSAP + ScrollTrigger |
| Routing | React Router DOM v6 |
| Blog | Medium RSS via Vercel serverless |
| Contact | Google Sheets via Apps Script |
| Deploy | Vercel |
| Font | Space Grotesk (Google Fonts) |

---

## Features

- **Preloader** with GSAP entrance animation
- **Hero** fullscreen sticky with scroll-driven zoom + fade
- **Work** section with glass-panel cards and project routing
- **Specialties** horizontal scroll pinned section
- **Testimonials** infinite ticker animation
- **Blog** fetching real articles from Medium RSS
- **Contact form** integrated with Google Sheets
- **Password gate** for confidential case studies
- **Fully responsive** — mobile-first, hamburger menu
- **Dark aesthetic** · `#0b0b0b` background · Space Grotesk · tight tracking

---

## Projects

| Project | Year | Type |
|---|---|---|
| [Design System Itaú Unibanco](https://lucas-paiva-portfolio-lemon.vercel.app/project/itau-design-system) | 2025 | Design Ops / Design System |
| [Elo Website Redesign](https://lucas-paiva-portfolio-lemon.vercel.app/project/elo-website-redesign) | 2023 | UX / UI |
| [Sukinho Rebranding](https://lucas-paiva-portfolio-lemon.vercel.app/project/sukinho-rebranding) | 2023 | Brand / Visual Identity |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev       # → localhost:5173

# Build for production
npm run build

# Preview build
npm run preview
```

### Environment Variables

Create a `.env` file at the root:

```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

---

## Structure

```
src/
  components/
    Navbar.jsx        ← fixed, blur on scroll, hamburger menu
    Hero.jsx          ← fullscreen sticky + GSAP entrance
    Work.jsx          ← glass-panel project cards
    About.jsx         ← bio + stats + video
    Specialties.jsx   ← pinned horizontal scroll section
    Process.jsx       ← 6-step grid
    Testimonials.jsx  ← ticker + cards
    Contact.jsx       ← form → Google Sheets
    Footer.jsx        ← large wordmark
  pages/
    ProjectPage.jsx   ← case study with password gate
    ProjectsPage.jsx  ← all projects grid
    ExperiencesPage.jsx
    BlogPage.jsx      ← Medium RSS feed
    ArticlePage.jsx   ← full article view
  data/
    projects.js       ← project data
api/
  contact.js          ← Vercel serverless → Google Apps Script
  blog.js             ← Vercel serverless → Medium RSS proxy
public/
  img/                ← all assets
```

---

<div align="center">

**Designed in Figma · Built with React · Deployed on Vercel**

[andersonlucaspz@gmail.com](mailto:andersonlucaspz@gmail.com) · São Paulo, Brazil

</div>
