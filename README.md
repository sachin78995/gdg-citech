

## Overview

GDG on Campus — CITech is an ultra-modern, single-page website built for the Google Developer Group community at CITech. The site features cinematic scroll animations, a fully interactive 3D immersive mode, glassmorphism design language, and rich event/team detail overlays — all rendered client-side with zero backend dependencies.

---

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.2.0 | Component-based UI library |
| **Vite** | 8.0.0-beta.13 | Lightning-fast build tool & dev server |
| **@vitejs/plugin-react-swc** | 4.2.2 | SWC-powered Fast Refresh (10x faster than Babel) |

### Animation & 3D

| Technology | Version | Purpose |
|---|---|---|
| **Framer Motion** | 12.34.3 | Declarative animations, `AnimatePresence`, layout transitions |
| **Three.js** | 0.183.2 | WebGL 3D rendering engine |
| **@react-three/fiber** | 9.5.0 | React reconciler for Three.js |
| **@react-three/drei** | 10.7.7 | R3F helpers — `Stars`, `Float`, `OrbitControls`, `useTexture`, etc. |

### Styling

| Technology | Purpose |
|---|---|
| **CSS Custom Properties** | Theming, color palette, spacing tokens |
| **CSS `color-mix()`** | Dynamic color blending for glows and tints |
| **CSS `clamp()`** | Fluid responsive spacing |
| **Glassmorphism** | `backdrop-filter: blur()` with translucent borders |
| **CSS Keyframe Animations** | Particle effects, glow pulses, sweep animations |

### Typography (Google Fonts)

| Font | Style | Usage |
|---|---|---|
| **Orbitron** | 400–900 | Headings — futuristic, geometric |
| **Inter** | 300–700 | Body text — clean, readable |
| **JetBrains Mono** | 400–600 | Monospace — code, badges, metadata |

### Dev Tools

| Tool | Version | Purpose |
|---|---|---|
| **ESLint** | 9.39.1 | Code linting |
| **eslint-plugin-react-hooks** | 7.0.1 | React Hooks rules enforcement |
| **eslint-plugin-react-refresh** | 0.4.24 | Fast Refresh boundary validation |

---

## Features

### 🌐 Core Website
- **7 Sections**: Hero, About, Events, Team, Resources (DevSpace), Contact, Footer
- **Smooth scrolling** with section-based side navigation
- **Vertical scroll progress** indicator
- **Responsive** across desktop, tablet, and mobile

### 🎬 Animations & Effects
- **Framer Motion** entrance animations on every section (`whileInView`, stagger)
- **Parallax** mouse-based logo movement in Hero
- **3D card tilt** on About pillar cards (`perspective + rotateX/Y`)
- **Particle system** — 100 interactive particles with mouse repulsion & inter-particle connections (HTML5 Canvas 2D)
- **Cursor glow** — ambient radial gradient follows the mouse
- **Cycling headlines** with blur transitions in Hero
- **Card hover effects** — sweep light, ring pulse, skill tag pop, avatar glow breathing
- **Timeline animations** — staggered slot entrance for event schedules
- **Spring physics** on active section indicator

### 🎮 3D Immersive Mode
- Full **Three.js** environment via React Three Fiber
- **5 Navigation orbs** (icosahedrons) arranged in a circle
- **Wireframe-to-solid** transition on hover
- **Auto-rotating camera** with orbit controls
- **2,500 animated stars** background
- **Floor grid** helper
- **Detail panel** slides in with section info and CTA
- **Center logo** rendered as a textured 3D plane
- **Lazy-loaded** with `React.lazy` + `Suspense` for zero initial cost

### 📅 Events System
- **6 Events** with full metadata: HackFusion 2026, Cloud Study Jam, Flutter Forward, AI/ML Bootcamp, DevFest CITech, Web Dev Sprint
- **Event Detail overlay** with:
  - Animated banner with grid pattern background
  - Info strip (date, time, venue, capacity)
  - "What You'll Learn" card grid
  - Timeline schedule with speaker assignments
  - Speakers sidebar with avatar initials
  - Prerequisites list
  - Technology tags
  - Register CTA

### 👥 Team & Domains
- **7 Domains**: Web Dev, Flutter, ML/AI, Cloud, UI/UX Design, Cybersecurity, Community & Outreach
- **28 team members** (4 per domain) with bios, roles, and skill tags
- **Domain Page overlay** with animated member cards
- **Member Profile modal** with:
  - Avatar with pulsing ring animation
  - Social links (GitHub, LinkedIn, Twitter)
  - Bio, tech stack tags, highlight stats

### 📚 DevSpace (Resources)
- **16 technology bubbles** in a cloud layout
- Sized by prominence (sm/md/lg)
- Hover tooltips with descriptions
- Spring entrance + floating idle animations

### 📬 Contact Form
- Client-side validation with animated error messages
- Focus glow effect on active field
- Success state with animated checkmark

---

## Project Structure

```
gdg-citech/
├── public/
│   ├── gdsc-logo.png              # GDG community logo
│   └── vite.svg                    # Favicon
├── src/
│   ├── App.jsx                     # Root component & state management
│   ├── App.css                     # App-level styles
│   ├── main.jsx                    # React DOM entry point
│   ├── hooks/
│   │   └── useEffects.js           # 6 custom hooks
│   ├── styles/
│   │   └── global.css              # Design tokens, CSS reset, utilities
│   └── components/
│       ├── background/
│       │   ├── ParticleField.jsx    # Canvas particle system (100 particles)
│       │   └── CursorGlow.jsx      # Mouse-following radial gradient
│       ├── immersive/
│       │   ├── ImmersiveMode.jsx    # Three.js 3D environment
│       │   └── ImmersiveMode.css
│       ├── sections/
│       │   ├── Hero.jsx / .css      # Landing section
│       │   ├── About.jsx / .css     # 4 pillars (Learn/Connect/Grow/Build)
│       │   ├── Events.jsx / .css    # 6 event cards
│       │   ├── EventDetail.jsx/.css # Full event detail overlay
│       │   ├── Team.jsx / .css      # 7 domain icons grid
│       │   ├── DomainPage.jsx/.css  # Domain members + profile modal
│       │   ├── Resources.jsx / .css # DevSpace tech bubbles
│       │   ├── Contact.jsx / .css   # Contact form
│       │   └── Footer.jsx / .css    # Footer with socials
│       └── ui/
│           ├── ScrollProgress.jsx/.css  # Vertical scroll bar
│           ├── SideNav.jsx / .css       # Dot-based section nav
│           └── SectionHeading.jsx/.css  # Reusable heading component
├── index.html                      # HTML entry, font imports
├── vite.config.js                  # Vite + SWC config
├── package.json                    # Dependencies & scripts
├── eslint.config.js                # ESLint configuration
└── README.md                       # This file
```

---



## Architecture

### App State Management

The `App.jsx` root manages three pieces of state:

```
┌─────────────────────────────────────────┐
│  App.jsx                                │
│                                         │
│  immersive: boolean                     │ → toggles 3D ImmersiveMode
│  activeDomain: string | null            │ → opens DomainPage overlay
│  activeEvent: object | null             │ → opens EventDetail overlay
│                                         │
│  ┌─ Background ──────────────────────┐  │
│  │  ParticleField (Canvas)           │  │
│  │  CursorGlow (CSS)                 │  │
│  └───────────────────────────────────┘  │
│  ┌─ UI ──────────────────────────────┐  │
│  │  ScrollProgress                   │  │
│  │  SideNav (IntersectionObserver)   │  │
│  │  Immersive Mode Toggle Button     │  │
│  └───────────────────────────────────┘  │
│  ┌─ Main Content ────────────────────┐  │
│  │  Hero → About → Events → Team    │  │
│  │  → Resources → Contact → Footer  │  │
│  └───────────────────────────────────┘  │
│  ┌─ Overlays (AnimatePresence) ──────┐  │
│  │  DomainPage     (z-index: 9000)   │  │
│  │  EventDetail    (z-index: 9000)   │  │
│  │  ImmersiveMode  (z-index: 10000)  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Rendering Pipeline

1. **Background layers** render first (fixed position, lowest z-index)
2. **Main content** scrolls normally with section-based layout
3. **Overlays** mount/unmount via `AnimatePresence` with enter/exit transitions
4. **3D mode** is lazy-loaded only when activated — zero cost until then

### Data Flow

```
Events.jsx ──onEventSelect──→ App.jsx ──activeEvent──→ EventDetail.jsx
Team.jsx   ──onDomainSelect──→ App.jsx ──activeDomain──→ DomainPage.jsx
                                                           └──→ MemberProfile (modal)
```

---

## Components Breakdown

### Background Effects

| Component | Technology | Details |
|---|---|---|
| **ParticleField** | HTML5 Canvas 2D | 100 particles (40 on mobile), mouse repulsion (120px radius), inter-particle connection lines (<150px), wrap-around edges, blue/purple hue randomization |
| **CursorGlow** | CSS `radial-gradient` | 600px blue gradient (`rgba(66,133,244,0.06)`), smooth CSS transition following cursor |

### Sections

| Section | Key Features |
|---|---|
| **Hero** | GDG logo with parallax, 4 rotating headlines (blur transition), time-based greeting, animated scroll indicator |
| **About** | 4 interactive pillar cards (Learn/Connect/Grow/Build) with 3D tilt on mouse move, expandable details |
| **Events** | 6 event cards (3-column grid), hover lift animation, clickable → opens EventDetail overlay |
| **Team** | 7 domain icon circles with SVG icons, hover ring/glow effects, clickable → opens DomainPage overlay |
| **Resources** | 16 tech skill bubbles (React, TensorFlow, Flutter, etc.) in cloud layout, spring entrance, floating idle |
| **Contact** | Validated form (name/email/message), focus glow, error animations, success checkmark |
| **Footer** | GDG branding, 5 social links (GitHub/X/LinkedIn/Instagram/Discord), dynamic copyright year |

### Overlays

| Overlay | Key Features |
|---|---|
| **EventDetail** | Full-page: banner with grid pattern, info strip, "What You'll Learn" grid, timeline schedule, speakers sidebar, tech tags, register CTA |
| **DomainPage** | Full-page: domain header, member cards with sweep light + ring pulse + skill pop animations, alternating L/R slide-in entrance |
| **MemberProfile** | Modal: large avatar with pulsing rings, domain badge, social icons (GitHub/LinkedIn/Twitter), bio, tech stack tags, highlight stats |
| **ImmersiveMode** | 3D: 5 nav orbs, center logo plane, 2500 stars, floor grid, orbit controls, detail panel with section CTA |

---




## Custom Hooks

All hooks live in `src/hooks/useEffects.js`:

| Hook | Signature | Returns |
|---|---|---|
| `useMousePosition` | `()` | `{ x, y, normalizedX, normalizedY }` — absolute + 0–1 normalized coordinates |
| `useActiveSection` | `(sectionIds[])` | `activeId: string` — IntersectionObserver-based, threshold 0.3 |
| `useTimeGreeting` | `()` | `string` — "Good Morning/Afternoon/Evening/Night" based on time |
| `useScrollProgress` | `()` | `number (0–1)` — page scroll progress |
| `useInView` | `(ref)` | `boolean` — whether element is in viewport |
| `useMagneticEffect` | `(ref, strength)` | Applies CSS transform on mouse move for a magnetic pull effect |

---

## Performance

### Build Output

```
dist/index.html                    0.93 kB  (gzip: 0.50 kB)
dist/assets/ImmersiveMode.css      2.94 kB  (gzip: 1.02 kB)
dist/assets/index.css             46.29 kB  (gzip: 8.36 kB)
dist/assets/index.js             371.89 kB  (gzip: 117.43 kB)
dist/assets/ImmersiveMode.js     896.18 kB  (gzip: 239.67 kB)
```

### Optimizations

- **Code splitting**: ImmersiveMode (Three.js) is lazy-loaded — only fetched when user activates 3D mode
- **SWC compiler**: 10x faster transpilation vs Babel
- **Canvas particles**: Reduced to 40 on mobile, connection lines disabled
- **CSS-only effects**: CursorGlow uses pure CSS, zero JS overhead
- **`will-change`**: Applied to animated elements for GPU compositing
- **`viewport: once`**: Scroll animations trigger only once

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full (including `color-mix()`, `backdrop-filter`) |
| Firefox 100+ | ✅ Full |
| Safari 15.4+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome/Safari | ✅ Responsive with reduced particle count |

> **Note**: 3D Immersive Mode requires WebGL 2.0 support.

---


---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Code Style

- Use functional React components with hooks
- One component per file, co-located CSS
- Follow BEM naming for CSS classes (`block__element--modifier`)
- Use Framer Motion for JS-driven animations
- Use CSS transitions/keyframes for hover states and simple effects

---

## License

This project is open source under the [MIT License](LICENSE).


