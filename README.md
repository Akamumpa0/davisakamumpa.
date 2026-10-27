# Production-Ready Personal Portfolio & Design System

A modern, high-performance personal portfolio website built with **React 18**, **Vite**, **TypeScript**, and **Tailwind CSS**. Designed specifically for freelance full-stack developers, mobile app engineers, and UI/brand designers.

---

## ⚡ Quick Start

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build & Typecheck
```bash
npm run build
npm run preview
```

---

## 🎯 Architecture & Cardinal Design Direction

- **Cardinal Color Palette**: Royal Blue (`#1D4ED8`), Deep Blue (`#0B2A8A`), Light Blue Tint (`#E8EFFF`), Sky Blue (`#60A5FA`), and crisp White/Off-white surfaces (`#F7F9FF`).
- **Dark Mode**: Deep navy (`#060D1E`) with bright blue accents (`#3B82F6`), respecting system preferences and saving user selection to `localStorage`.
- **Typography**: Google Fonts pairing — `Plus Jakarta Sans` for characterful display headlines, and `Inter` for clean readability.
- **Decoupled Data Architecture**: All copy, profile details, projects, services, and testimonials live inside `/src/data/*.ts` and are accessed through an abstracted service layer in `/src/services/`. UI components contain **zero hardcoded copy**.

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── _redirects         # SPA fallback redirect for Netlify
│   ├── favicon.svg        # Brand icon vector favicon
│   ├── robots.txt         # Search engine crawler permissions
│   └── sitemap.xml        # Static XML sitemap for SEO
├── src/
│   ├── components/
│   │   ├── common/        # Button, Card, Tag, SectionHeading, Accordion, Lightbox, ScrollToTop
│   │   ├── layout/        # Navbar, Footer, Mobile Drawer, ThemeToggle, CTASection, PageContainer
│   │   └── seo/           # SEOHead (react-helmet-async) & StructuredData (JSON-LD)
│   ├── data/              # Typed data files with realistic placeholder content (TODOs)
│   │   ├── profile.ts
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   ├── gallery.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── certifications.ts
│   │   ├── writing.ts
│   │   ├── testimonials.ts
│   │   └── faq.ts
│   ├── hooks/             # useTheme (dark/light), useReducedMotion
│   ├── pages/             # All 10 site routes + dynamic slug case studies + 404
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── Gallery.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── Writing.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── services/          # Abstracted data access & contact form API layer
│   │   ├── portfolioService.ts
│   │   └── contactService.ts
│   ├── styles/
│   │   └── tokens.css     # CSS variable tokens for light and dark modes
│   ├── types/             # TypeScript interfaces for all data structures
│   ├── App.tsx            # Routes, code-splitting, lazy imports
│   └── main.tsx           # Application mount point
├── vercel.json            # SPA fallback rewrites for Vercel
├── .env.example           # Environment variables blueprint
└── tailwind.config.js     # Tailwind setup referencing CSS variables
```

---

## 📝 How to Edit Content

You can customize the entire website without touching any UI component:

| Data File | Purpose |
| :--- | :--- |
| `src/data/profile.ts` | Your name, bio, one-line pitch, avatar URL, social links, stats, and CV link |
| `src/data/services.ts` | The 3 core services, deliverables, pricing, and 4-step workflow |
| `src/data/projects.ts` | Project cards, live demos, repositories, case study problem/approach/results |
| `src/data/gallery.ts` | Visual design portfolio items with lightbox images and categories |
| `src/data/skills.ts` | Skill categories, proficiency percentages, and soft skills list |
| `src/data/experience.ts` | Career timeline, company bullets, and university education |
| `src/data/certifications.ts`| Official credentials, issuers, and verification URLs |
| `src/data/writing.ts` | Published articles, reading times, summaries, and external links |
| `src/data/testimonials.ts` | Quotes, client names, roles, and avatar images |
| `src/data/faq.ts` | Home and full FAQ questions on pricing, timelines, revisions, and remote terms |

---

## 🎨 How to Customize Colors & Fonts

### 1. Colors
All design tokens are defined as CSS variables in `src/styles/tokens.css`.
To adjust your primary blue or surfaces, modify the corresponding variables:

```css
:root {
  --color-primary: #1D4ED8;        /* Your primary brand blue */
  --color-primary-deep: #0B2A8A;   /* Hero & footer deep blue */
  --color-primary-tint: #E8EFFF;   /* Light tint for badges & surfaces */
  --color-primary-sky: #60A5FA;    /* Subtle highlight blue */
}

.dark {
  --color-bg-page: #060D1E;        /* Deep navy background */
  --color-bg-surface: #0C1A38;     /* Dark card surface */
  --color-primary: #3B82F6;        /* High-contrast dark mode blue */
}
```

### 2. Fonts
Fonts are loaded in `index.html` and configured in `tailwind.config.js`:
1. In `index.html`, swap or add Google Font families:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
   ```
2. In `tailwind.config.js`, update the font family definitions:
   ```javascript
   fontFamily: {
     display: ['"Plus Jakarta Sans"', 'sans-serif'],
     sans: ['"Inter"', 'sans-serif'],
   }
   ```

---

## 📬 Contact Form Configuration

The contact form is backend-ready and connects to services like **Formspree** or **Web3Forms** through environment variables:

1. Create a free form endpoint at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Create your `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```
3. Update `VITE_CONTACT_FORM_ENDPOINT` with your endpoint URL:
   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_form_id
   VITE_SITE_URL=https://yourdomain.com
   ```
4. **Spam Honeypot Protection**: The form contains a hidden `_gotcha` field that traps automated bots without affecting legitimate users.

---

## 🚀 Deployment (Netlify & Vercel)

Both deployment configurations are included out of the box:

### Deploying to Netlify
1. Connect your repository to Netlify.
2. Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Netlify automatically detects `public/_redirects` to ensure SPA routes (`/services`, `/projects/slug`, etc.) resolve properly on direct URL navigation.

### Deploying to Vercel
1. Import your project in the Vercel Dashboard.
2. Vercel automatically detects Vite.
3. The included `vercel.json` provides rewrite rules for SPA client routing.

---

## 🔌 Backend Readiness (Future Roadmap)

All client-side data access is isolated inside `src/services/portfolioService.ts` and `src/services/contactService.ts`.

When you are ready to connect a dedicated backend, what will it unlock?
- **Custom Database & CMS**: Store projects and blog posts in PostgreSQL/Supabase and edit them via an admin dashboard without git commits.
- **Direct Contact Submission**: Store client leads, track inquiries, and trigger custom webhook notifications (e.g., to Slack or Telegram).
- **Client Portal**: Allow clients to log in to view project milestones, invoice receipts, and live staging previews.
- **Analytics Dashboard**: Track lead conversion rates, popular case studies, and quote requests in realtime.

To switch to a live API, update the functions in `src/services/portfolioService.ts` to make HTTP requests to `import.meta.env.VITE_API_BASE_URL`.

---

## ✅ Launch Checklist (What to Replace Before Going Live)

Before publishing your portfolio to production:
- [ ] **Name & Title**: In `src/data/profile.ts`, replace `Alex Rivera` and the title with your details.
- [ ] **Portrait Photo**: Replace `avatarUrl` in `src/data/profile.ts` with your high-resolution headshot.
- [ ] **Contact Links**: Update your real email, WhatsApp international phone link (`wa.me`), and LinkedIn/GitHub URLs in `src/data/profile.ts`.
- [ ] **Resume**: Place your PDF resume in `public/cv.pdf`.
- [ ] **Projects**: In `src/data/projects.ts`, replace project case studies with your real client work, screenshots, and live demo links.
- [ ] **Design Gallery**: In `src/data/gallery.ts`, replace images and captions with your design artifacts.
- [ ] **Services & Pricing**: In `src/data/services.ts`, adjust your service deliverables and starting rates.
- [ ] **Testimonials**: In `src/data/testimonials.ts`, paste endorsements from real clients or colleagues.
- [ ] **SEO Share Image**: Replace `public/favicon.svg` and the default OpenGraph social card image in `src/components/seo/SEOHead.tsx`.
- [ ] **Domain**: Set `VITE_SITE_URL` in your hosting dashboard environment variables.
