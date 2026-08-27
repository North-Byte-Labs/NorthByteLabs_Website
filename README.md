# NorthByte Labs — Premium 3D Digital Agency Website

A premium, immersive dark-themed 3D digital agency website for **NorthByte Labs**, rebuilt as a modern single-page experience.

Built with **React + Tailwind CSS + shadcn/ui**, an interactive **React Three Fiber** 3D hero, **GSAP + ScrollTrigger**, **Lenis** smooth scrolling, **Framer Motion**, and **Recharts**.

---

## Tech stack

- React 19 (Create React App + CRACO)
- Tailwind CSS + shadcn/ui components
- react-three-fiber / drei / three (WebGL 3D hero)
- GSAP + ScrollTrigger (scroll animations, horizontal process timeline)
- Lenis (smooth scrolling)
- Framer Motion (reveals & micro-interactions)
- Recharts (SEO / analytics charts)
- lucide-react (icons)

---

## Getting started (local)

```bash
cd frontend
yarn install        # install dependencies (use --ignore-engines if drei/camera-controls complains about Node version)
yarn start          # dev server at http://localhost:3000
```

## Production build

```bash
cd frontend
yarn build          # outputs to frontend/build
```

---

## Deploy to Netlify

This project ships with `netlify.toml` and `public/_redirects`.

- **Base directory:** `frontend`
- **Build command:** `yarn build`
- **Publish directory:** `frontend/build` (or `build` if base is set to `frontend`)
- **Environment variables:** none required (frontend-only prototype)

Drag-and-drop option: run `yarn build` and drop the `frontend/build` folder onto Netlify.

---

## Project structure

```
frontend/
  public/
    index.html                 # SEO meta, Open Graph, JSON-LD, fonts
    robots.txt, sitemap.xml
    _redirects                 # SPA fallback for Netlify
    assets/northbyte-labs-logo.png   # brand logo + dark-bg variant + favicon
  src/
    index.css                  # design tokens (HSL) + utilities
    App.js                     # page composition
    data/site.js               # ALL business content (services, testimonials, etc.)
    hooks/                     # useSmoothScroll, useReducedMotion, useMediaQuery
    components/
      common/                  # Reveal, SectionHeading, TiltCard, AnimatedCounter
      three/                   # HeroScene (R3F), Particles
      sections/                # Navbar, Hero, Services, Portfolio, Contact, Footer, ...
      ui/                      # shadcn/ui primitives
  tailwind.config.js
  netlify.toml
```

---

## Notes

- **Frontend prototype:** the contact form validates input and then opens WhatsApp with a pre-filled message (no backend email is sent). All interactions are client-side.
- **Accessibility & performance:** respects `prefers-reduced-motion` (a static hero visual replaces WebGL, animations are reduced), lazy-loads the 3D scene, reduces particle count / pixel ratio on mobile, and uses semantic HTML with ARIA labels.
- **Illustrative figures:** SEO/analytics numbers are clearly labelled as illustrative examples and are not tied to a specific client account.
- **Testimonials** are the genuine ones from the original NorthByte Labs site.

## Business info

- Email: hello@northbytelabs.in
- Phone / WhatsApp: +91 96438 76061
- Tagline: Building better digital experiences.
- Websites starting at just ₹3,999.
