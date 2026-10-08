# Upthrust Design — Landing Page Implementation

A responsive, high-performance landing page developed for the **Upthrust Web Developer Practical Assessment**, replicating the supplied Figma design specifications, 3D asset integration, accessible interactive states, and zero-PII conversion tracking.


## Live Demo

👉 [View the Live Project](https://upthrust-iota.vercel.app/)


---

## 1. Stack Used & Why

* **React 18 + Vite:** Chosen for instant HMR, fast production builds, and minimal JS runtime footprint (targeting PageSpeed ≥ 85).
* **Tailwind CSS:** Provides an efficient design token system (custom typography, blueprint drafting grid, dark theme) with zero runtime CSS overhead.
* **Three.js / WebGL:** Powers the continuous 3D dark orange metallic ribbon canvas across the Services showcase.
* **Supabase / Structured Data Schema:** Decouples static UI code from editable content and captures newsletter submissions with dual-tier fallback to `localStorage`.
* **Google Tag Manager (`dataLayer`):** Tracks conversion events without exposing Personally Identifiable Information (Zero-PII).

---

## 2. Project Structure

```text
upthrust/
├── index.html                     # SEO metadata, Open Graph, Fonts, JSON-LD Schema, noscript
├── vite.config.js                 # Rollup code splitting & optimization
├── tailwind.config.js             # Theme tokens & responsive breakpoints
│
├── public/
│   └── assets/                    # Optimized 3D model, bento mockups & hero statue
│       ├── 3d/curve.glb
│       ├── bento/                 # Service 01 strategy assets
│       ├── service2/              # Service 02 brand assets
│       ├── service3/              # Service 03 product assets
│       ├── service4/              # Service 04 creative assets
│       └── herostatue.png         # Preloaded high-res holographic hero statue
│
└── src/
    ├── main.jsx                   # React root entry
    ├── App.jsx                    # Core page orchestrator
    ├── index.css                  # Typography, blueprint grid, focus states
    │
    ├── components/
    │   ├── Navbar.jsx             # Top bar with logo and Contact CTA
    │   ├── Hero.jsx               # H1, holographic statue, layered THAT & PERFORMS, sketch badges
    │   ├── Ribbon3D.jsx           # Three.js 3D dark orange metallic curve canvas
    │   ├── Services.jsx           # 4-slide service showcase with < > navigation and category tabs
    │   ├── ServiceCard.jsx        # High-fidelity bento board mockups and copy
    │   ├── NewsletterForm.jsx     # Validated email capture + data storage + GTM event
    │   ├── ContactModal.jsx       # Modal dialog for service inquiries
    │   └── Footer.jsx             # UPTHRUST DESIGN display brand mark & hub links
    │
    ├── lib/
    │   └── supabase.js            # Supabase client with offline/fallback guard
    ├── data/
    │   └── fallbackContent.js     # Single source of truth for all editable copy & schema
    └── utils/
        └── conversionTracker.js   # Zero-PII GTM dataLayer conversion tracker
```

---

## 3. How Content Can Be Edited & CMS Setup

All website copy, repeated sections, badges, logos, FAQs, and testimonials are decoupled from visual components:
1. **Central Structured Content Layer (`src/data/fallbackContent.js`):**
   - Non-developers or editors can update headlines (`heroContent`), repeated service items (`fallbackServices`), client logos (`clientLogos`), FAQs (`faqContent`), and testimonials (`testimonialsContent`).
2. **Headless CMS & Supabase Ready:**
   - The JSON data models match REST/GraphQL interfaces, allowing direct connection to Headless CMS solutions (Sanity, Strapi, Contentful) or a Supabase PostgreSQL backend without modifying UI components.

---

## 4. Form Handling & Conversion Tracking

* **Validation:** Strict regex email validation (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) and mandatory consent checkbox verification.
* **Storage Pipeline:** Dual-tier architecture saves to Supabase PostgreSQL table `newsletter_submissions` and automatically falls back to `localStorage` (`upthrust_submissions`) for offline demonstration.
* **GTM Conversion Event:** Upon successful submission, pushes a sanitized event to the data layer without PII:
  ```javascript
  window.dataLayer.push({
    event: "form_submit",
    form_id: "footer_newsletter",
    timestamp: "2026-10-08T..."
  });
  ```

---

## 5. APIs & Integrations Used

* **Supabase Client (`@supabase/supabase-js`):** Asynchronous lead storage with Row Level Security (RLS).
* **Google Tag Manager (`dataLayer`):** Client-side event dispatching for analytics pipelines.
* **Google Fonts API:** Preconnected and loaded with `display=swap` (`Syne`, `Anton`, `Plus Jakarta Sans`).

---

## 6. AI Tools Used During Development

* **Google Antigravity / Agentic Coding Assistant:** Used for rapid component scaffolding, Three.js geometry inspection, and structured JSON-LD schema generation.
* **Human Verification & Refinement:** Fine-tuning responsive clamp scaling across 375px/768px/1440px, verifying Zero-PII compliance, and ensuring exact alignment with the Figma design.

---

## 7. Known Limitations & Future Improvements

* **Headless CMS Studio UI:** Deploy an embedded Sanity Studio route for a full visual WYSIWYG editor for non-technical team members.
* **Service Worker Caching:** Add offline asset caching with a progressive web app (PWA) manifest for instant repeat visits.

---

## 8. Setup & Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```
