<div align="center">

  # 🏋️‍♂️ The BeingStrong Fitness

  **The official modern web application for The BeingStrong Fitness — Vadodara's premier multi-floor fitness, strength, and conditioning center.**

  <p align="center">
    <a href="https://www.thebeingstrongfitness.in" target="_blank"><strong>🌐 Visit Live Website</strong></a> •
    <a href="#-key-features">✨ Key Features</a> •
    <a href="#-tech-stack">🛠️ Tech Stack</a> •
    <a href="#-getting-started">🚀 Getting Started</a> •
    <a href="#-project-structure">📂 Project Structure</a> •
    <a href="#-gym-details--contact">📍 Contact</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15.1.7-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-12.4.7-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </p>

</div>

---

## 📖 Overview

**The BeingStrong Fitness** is a multi-floor high-performance fitness center located at Ajwa Road, Vadodara, Gujarat. Engineered for serious athletes, bodybuilders, and fitness enthusiasts alike, the gym spans **4 dedicated floors (3rd, 4th, 5th, and 6th Floor)** of specialized training spaces, modern recovery amenities, and certified personal coaching.

This repository powers the official responsive web application, built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **Framer Motion** for a fast, accessible, and high-impact digital experience.

> *"Train with purpose. Build strength. Stay consistent."*

---

## ✨ Key Features

- ** Modern Dark & Gold Aesthetic**: Designed around the signature brand identity (`#050505` black and `#FFD000` energetic yellow) with smooth glassmorphism, glowing accents, and typography driven by **Bebas Neue** and **Inter**.
- ** Multi-Floor Facility Showcase**: Dynamic categorized tabs to showcase:
  - **Free Weights Zone**: Olympic bars, heavy power racks, flat/incline benches, and Olympic plates.
  - **Dumbbells Section**: Comprehensive selection of heavy-duty hex & round dumbbells.
  - **Biomechanical Strength Equipment**: Pin-selected & plate-loaded machines, cable crossover towers, and leg presses.
  - **Cardio Suite**: Commercial treadmills, spin bikes, and ellipticals.
  - **Functional Turf**: Battle ropes, kettlebells, plyometrics, and mobility zones.
- ** Diverse Training Programs**: Dedicated spotlights for Personal Training, CrossFit, High-Intensity Interval Training (HIIT), Kickboxing, Zumba, Yoga, and Abs sculpting classes.
- ** Luxury Recovery & Amenities**: Visual highlights for steam bath, ice bath cryo-therapy, secure locker rooms, luxury shower cabins, and an on-site fresh juice & protein shake bar.
- ** Coaches & Leadership Gallery**: Meet the team with custom profile cards for certified trainers, management, and gym leadership.
- ** Google Reviews & Social Proof**: Live 4.5★ Google rating integration with direct external links to authentic member testimonials on Google Maps.
- ** Integrated Maps & Quick Contact**: Embedded Google Maps location, instant 1-tap WhatsApp inquiry button, and direct phone call triggers.
- ** Performance & SEO Engineered**:
  - Full server-side rendering and static page generation via Next.js App Router.
  - Complete JSON-LD `LocalBusiness` structured data for search engine rich results.
  - Automated dynamic `sitemap.xml` and `robots.txt` generation.
  - OpenGraph & Twitter Cards preview support.
  - Integrated `@vercel/analytics` and `@vercel/speed-insights`.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) | React framework with App Router, SSR, and SSG |
| **UI Library** | [React 19](https://react.dev/) | Core UI rendering engine |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict static typing for bug-free code |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first responsive design and custom animations |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) | Smooth entrance, scroll progress, and interaction animations |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent vector icon set |
| **Fonts** | Next.js Font Optimization | `Bebas Neue` (Headings) & `Inter` (Body text) |
| **Analytics** | Vercel Analytics & Speed Insights | Real-time user metrics and Web Vitals monitoring |
| **Deployment** | [Vercel](https://vercel.com/) | Edge network global hosting with automatic CI/CD |

---

## 📂 Project Structure

```bash
The-BeingStrong-Fitness/
├── public/                     # Static assets, icons, logos, and gym photos
│   ├── favicon-*.png           # Multi-resolution favicons & PWA webmanifest
│   ├── robots.txt              # Search engine crawler instructions
│   ├── site.webmanifest        # PWA configuration
│   └── images/                 # Optimized gym facility & trainer imagery
│       ├── the_beingstrong_logo.png
│       ├── facility-*.jpg      # High-res zone photos (dumbbells, freeweights, cardio)
│       └── *.jpeg / *.jpg      # Team and management portraits
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles & Tailwind directives
│   │   ├── layout.tsx          # Root layout, metadata, fonts, & JSON-LD schema
│   │   ├── page.tsx            # Main single-page landing route
│   │   ├── sitemap.ts          # Automated sitemap generator
│   │   └── not-found.tsx       # Custom 404 page
│   ├── components/             # Modular React components
│   │   ├── Navbar.tsx          # Sticky responsive navigation with mobile drawer
│   │   ├── Hero.tsx            # High-impact hero section with quick contact bar
│   │   ├── About.tsx           # Facility introduction & gym philosophy
│   │   ├── Facilities.tsx      # Interactive categorized tabs (Zones, Classes, Recovery)
│   │   ├── Trainers.tsx        # Trainer profiles & coaching team
│   │   ├── Management.tsx      # Operations & facility management
│   │   ├── Owners.tsx          # Founders & leadership vision
│   │   ├── Reviews.tsx         # Google rating showcase & member testimonials
│   │   ├── Motivational.tsx    # High-energy athletic motivation banner
│   │   ├── Location.tsx        # Interactive Google Maps embed & address details
│   │   ├── Contact.tsx         # Direct contact channels & inquiry form
│   │   ├── Footer.tsx          # Quick links, social handles, and back-to-top button
│   │   ├── LoadingScreen.tsx   # Smooth animated pre-loader
│   │   ├── ScrollProgress.tsx  # Dynamic reading/scroll indicator bar
│   │   └── RotatingBackgroundLogos.tsx # Subtle animated branding backdrop
│   └── lib/
│       └── images.ts           # Standardized image quality presets & responsive sizes
├── tailwind.config.js          # Tailwind theme extensions & animations
├── tsconfig.json               # TypeScript compiler rules
├── next.config.js              # Next.js runtime configuration
└── package.json                # Project dependencies & scripts
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version `18.18.0` or higher recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### 1. Clone the repository

```bash
git clone https://github.com/Yug030806/The-BeingStrong-Fitness.git
cd The-BeingStrong-Fitness
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 4. Build for production

```bash
npm run build
npm run start
```

### 5. Linting

```bash
npm run lint
```

---

## 📍 Gym Details & Contact

| Detail | Information |
| :--- | :--- |
| **Gym Name** | **The BeingStrong Fitness** |
| **Address** | 3rd, 4th, 5th, & 6th Floor, RADHE A-10 Udaynagar Housing Society, Mahavir Hall, Ajwa Road, Vadodara, Gujarat, India – 390019 |
| **Phone** | [+91 97240 73707](tel:+919724073707) |
| **WhatsApp** | [Chat on WhatsApp](https://wa.me/919724073707?text=Hi%20The%20BeingStrong%20Fitness,%20I%20want%20to%20enquire%20about%20membership.) |
| **Instagram** | [@the_beingstrong_fitness](https://www.instagram.com/the_beingstrong_fitness/) |
| **Website** | [thebeingstrongfitness.in](https://www.thebeingstrongfitness.in) |
| **Google Maps** | [Find us on Google Maps](https://maps.google.com/?q=RADHE+A-10+Udaynagar+Housing+Society+Mahavir+Hall+Ajwa+Road+Vadodara) |

---

## 👨‍💻 Author & Maintainer

Developed and maintained by **[Yug Patel](https://github.com/Yug030806)**.

---

<div align="center">
  <sub>Built with passion for strength and fitness. &copy; 2026 The BeingStrong Fitness. All Rights Reserved.</sub>
</div>
