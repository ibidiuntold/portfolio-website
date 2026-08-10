# Design Document

## Overview

This document defines the visual system and component specifications for the portfolio-site-refurbishment. The design adapts structural and aesthetic patterns from the WhiteSpace HTML reference (`hello.html`) — clean whitespace, centred section headers, dark header/footer, warm accent buttons, thumbnail-first project cards — while preserving the existing GitHub-inspired blue primary colour and charcoal dark tone. The implementation uses plain HTML5, CSS3, and minimal vanilla JavaScript only. No external fonts, icon libraries, or build tools are introduced.

---

## 1. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#0366d6` | Links, h2 accent bars, focus outlines, tech tag text |
| `--color-accent` | `#e6a817` | CTA buttons, hover fills, key interactive highlights |
| `--color-accent-dark` | `#c48c0e` | CTA button hover/active state |
| `--color-dark` | `#24292f` | Header bg, footer bg, CTA strip bg, dark body text |
| `--color-text` | `#24292f` | Body copy |
| `--color-text-muted` | `#6a737d` | Subheadlines, captions, footer secondary text |
| `--color-surface` | `#ffffff` | Card backgrounds, section backgrounds |
| `--color-surface-subtle` | `#f6f8fa` | Skills grid item backgrounds, tag backgrounds |
| `--color-border` | `#e1e4e8` | Card borders, section dividers |
| `--color-overlay` | `rgba(0,0,0,0.55)` | Hero background image overlay |

All colour pairs used for text-on-background meet WCAG 2.1 Level AA contrast (4.5:1 for body text, 3:1 for large text).

---

## 2. Typography

### Font Stack
```css
font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```
System fonts only — no CDN dependency, works offline and on GitHub Pages without any network request.

### Type Scale

| Role | Element | Size | Weight | Line Height | Notes |
|---|---|---|---|---|---|
| Hero name | `h1` | `3.5rem` (desktop) / `2.2rem` (mobile) | 700 | 1.1 | White on dark overlay |
| Hero subheadline | `p.hero-sub` | `1.25rem` | 400 | 1.5 | Near-white (`#e0e0e0`) |
| Section heading | `h2` | `1.75rem` | 600 | 1.3 | Centred, letter-spacing 0.04em |
| Section subtext | `p.section-sub` | `1rem` | 400 | 1.6 | `--color-text-muted` |
| Card title | `h3` | `1.15rem` | 600 | 1.3 | `--color-primary` |
| Body copy | `p` | `1rem` | 400 | 1.65 | `--color-text` |
| Tech tag | `span.tech-tag` | `0.75rem` | 500 | 1 | Uppercase, letter-spacing 0.05em |
| Nav links | `nav a` | `0.9rem` | 600 | 1 | White, uppercase, letter-spacing 0.06em |
| Footer small | `small`, footer `p` | `0.85rem` | 400 | 1.5 | `--color-text-muted` |

---

## 3. Spacing Scale

Base unit: `8px`. All spacing values are multiples of this unit.

| Token | Value | Typical Use |
|---|---|---|
| `--space-1` | `8px` | Tag padding, tight gaps |
| `--space-2` | `16px` | Card internal padding (small) |
| `--space-3` | `24px` | Card padding, nav padding |
| `--space-4` | `32px` | Section internal padding (top/bottom) |
| `--space-5` | `48px` | Section vertical padding |
| `--space-6` | `64px` | Hero content vertical offset |
| `--space-7` | `96px` | Large section vertical padding |

Grid gap: `24px` between cards. Section max-width: `1100px`, centred with `margin: 0 auto`.

---

## 4. Breakpoints

| Name | Range | Variable |
|---|---|---|
| Mobile | ≤ 480px | `@media (max-width: 480px)` |
| Tablet | 481px – 768px | `@media (min-width: 481px) and (max-width: 768px)` |
| Desktop | ≥ 769px | `@media (min-width: 769px)` (default/base styles) |

### Column Behaviour by Breakpoint

| Component | Desktop | Tablet | Mobile |
|---|---|---|---|
| Nav links | Horizontal row | Horizontal row | Hidden → hamburger menu |
| Projects grid | 3 columns | 2 columns | 1 column |
| Skills grid | 3 columns | 2 columns | 1 column |
| Footer columns | Side-by-side (2 col) | Side-by-side (2 col) | Stacked (1 col) |

---

## 5. Component Specifications

### 5.1 Navigation

```
[Skip to content]  ← visually hidden, appears on :focus
┌──────────────────────────────────────────────────────────┐
│ Iyango Williams          Home  About  Projects  Skills  Contact │
└──────────────────────────────────────────────────────────┘
```

- **Height**: 64px (padding: 0 `--space-3`)
- **Background**: `--color-dark` (`#24292f`)
- **Logo**: `--color-accent` (`#e6a817`), `1.25rem`, weight 700
- **Links**: white, `0.9rem`, weight 600, uppercase, letter-spacing 0.06em
- **Link hover**: `--color-accent` with `transition: color 0.3s ease`
- **Link focus**: `outline: 2px solid --color-accent; outline-offset: 3px`
- **Position**: `position: fixed; top: 0; width: 100%; z-index: 1000`
- **Skip link**: `position: absolute; left: -9999px` → on `:focus`: `left: 1rem; top: 1rem; background: --color-accent; color: --color-dark; padding: 8px 16px; border-radius: 4px; z-index: 9999`

**Hamburger button (mobile only)**:
- 3 horizontal bars (`span` elements), each `24px × 2px`, `--color-surface` fill, `4px` gap
- `aria-label="Toggle navigation"`, `aria-expanded="false/true"`
- On open: top and bottom bars rotate ±45° to form an X, middle bar fades out (`opacity: 0`) — pure CSS transition `0.3s ease`
- Mobile menu: anchor links stack vertically in a drawer below the nav bar, `background: --color-dark`, `padding: --space-3`

---

### 5.2 Hero Section

```
┌──────────────────────────────────────────────────────────┐
│                  [personal photo bg]                      │
│               ░░░ dark overlay ░░░                        │
│                                                           │
│              Iyango Williams          ← h1                │
│         Web Developer & EE Graduate   ← subheadline       │
│              [ View My Work ▼ ]       ← CTA button        │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

- **Height**: `100vh`
- **Background image**: `background-image: url('img/hero-bg.jpg')` — user supplies their personal photo as `img/hero-bg.jpg`. `background-size: cover; background-position: center; background-repeat: no-repeat`
- **Overlay**: `::before` pseudo-element, `background: rgba(0,0,0,0.55)`, covers full section
- **Content**: flex column, `align-items: center; justify-content: center; text-align: center`
- **h1**: `3.5rem`, white, weight 700, `text-shadow: 0 2px 8px rgba(0,0,0,0.4)`
- **Subheadline**: `1.25rem`, `#e0e0e0`, weight 400, `margin-top: --space-2` — text: "Full Stack Engineer & EEE Graduate"
- **CTA button**: `background: --color-accent; color: --color-dark; padding: 14px 36px; border-radius: 4px; font-weight: 600; font-size: 1rem; border: none; cursor: pointer; transition: background 0.2s ease`
- **CTA hover**: `background: --color-accent-dark`
- **CTA focus**: `outline: 2px solid #ffffff; outline-offset: 3px`
- **Mobile h1**: scales to `2.2rem` at ≤ 480px

---

### 5.3 Section Header Pattern (shared)

Used by About, Projects, Skills, Contact CTA:

```
        ──────── ABOUT ME ────────
     A brief intro paragraph in muted text
```

- `h2`: centred, `1.75rem`, weight 600, `--color-dark`, letter-spacing `0.04em`
- Decorative underline: `4px` tall, `48px` wide, `--color-primary` colour, centred below `h2` using a `::after` pseudo or a `<div class="section-divider">`
- Subtext `p.section-sub`: centred, `1rem`, `--color-text-muted`, `max-width: 560px`, `margin: 0 auto --space-5`

---

### 5.4 About Section

- `<section id="about">`, `padding: --space-7 --space-3`
- White background
- Section header pattern (centred h2 + divider)
- Bio paragraph: max-width `680px`, centred, `1rem`, `--color-text`, `line-height: 1.65`

---

### 5.5 Projects Grid & Project Card

**Grid container** (`div.projects-grid`):
- `display: grid`
- Desktop: `grid-template-columns: repeat(3, 1fr)`
- Tablet: `repeat(2, 1fr)`
- Mobile: `1fr`
- `gap: 24px`

**Project Card** (`<article class="project-card">`):
```
┌─────────────────────┐
│   [thumbnail img]   │ ← 100% width, aspect-ratio: 16/9, object-fit: cover
├─────────────────────┤
│ Project Title        │ ← h3, --color-primary
│ Short description…  │ ← p, body
│                     │
│ [HTML] [CSS] [JS]   │ ← .tech-tags > span.tech-tag
│                     │
│ [Live Demo] [GitHub]│ ← .card-links
└─────────────────────┘
```

- Background: `--color-surface` (`#fff`)
- Border: `1px solid --color-border`
- Border-radius: `8px`
- Box-shadow: `0 2px 8px rgba(27,31,35,0.08)`
- Padding: `--space-3` (16–24px)
- Hover: `transform: translateY(-4px); box-shadow: 0 8px 24px rgba(27,31,35,0.16); transition: 0.2s ease`

**Tech tags** (`span.tech-tag`):
- Background: `--color-surface-subtle` (`#f6f8fa`)
- Color: `--color-primary`
- Padding: `3px 10px`
- Border-radius: `12px` (pill)
- Font-size: `0.75rem`, weight 500, uppercase, letter-spacing `0.05em`
- Gap between tags: `6px`, flex-wrap

**Card links** (`.card-links`):
- Flex row, `gap: --space-1`, `margin-top: --space-2`
- "Live Demo": filled button — `background: --color-accent; color: --color-dark; padding: 8px 18px; border-radius: 4px; font-weight: 600; font-size: 0.85rem`
- "GitHub": outlined button — `border: 1.5px solid --color-border; color: --color-text; padding: 8px 18px; border-radius: 4px; font-size: 0.85rem`
- Both: `target="_blank" rel="noopener noreferrer"`
- Focus: `outline: 2px solid --color-primary; outline-offset: 2px`

---

### 5.6 Skills Grid

- Same grid column behaviour as projects grid (3/2/1)
- `gap: 32px`
- Section background: `--color-surface-subtle` (`#f6f8fa`) to visually separate from adjacent white sections

**Skill item** (`div.skill-item`):
- Background: `--color-surface` (`#fff`)
- Border-radius: `8px`
- Padding: `--space-4`
- Box-shadow: `0 1px 4px rgba(27,31,35,0.06)`
- Text-align: centre

**Skill icon**: inline SVG, `width: 40px; height: 40px`, `fill: --color-primary` (or `stroke` where appropriate), `aria-hidden="true"`, decorative only. SVGs are inlined directly in the HTML — no external sprite or icon font required, no network request.

**Planned skill items** (mix of technical + personal, drawn from CV):

| Heading | Description | SVG icon description |
|---|---|---|
| HTML, CSS & JavaScript | Building semantic, accessible, responsive web interfaces and data-driven UI | Code brackets icon |
| Full Stack Engineering (MERN & Next.js) | Designing and maintaining scalable APIs, microservices, and backend systems using MongoDB, Express, React, Node.js, and Next.js | Server/layers stack icon |
| Electrical & Electronic Engineering | Circuit analysis, systems thinking, and fiber optic splicing with fusion machines | Lightning bolt / zap icon |
| Automation & CI/CD | Installing, configuring, and troubleshooting automation software and Docker deployments | Gear/settings icon |
| Health, Safety & Environment | Certified HSE professional with HSEP, OSHP, and EIAP qualifications | Shield icon |
| Communication & Leadership | Teaching, team leadership, report writing, and cross-functional collaboration | People/users icon |
| Problem Solving | Decomposing complex technical challenges into workable solutions | Puzzle piece icon |
| Responsive Design | Crafting interfaces that adapt seamlessly across mobile, tablet, and desktop | Device screen stack icon |

**SVG sizing and style rules:**
```css
.skill-icon {
  width: 40px;
  height: 40px;
  fill: var(--color-primary);   /* #0366d6 */
  margin-bottom: var(--space-2);
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

Each inline `<svg>` carries `aria-hidden="true"` and `focusable="false"` so screen readers and keyboard navigation skip it entirely. The heading and description text carry the full meaning.

---

### 5.7 Contact CTA Strip

```
┌──────────────────────────────────────────────────────────┐  ← full viewport width
│                                                          │
│            Let's Work Together                           │
│   I'm open to freelance projects and collaborations.    │
│              [ Get In Touch ↓ ]                          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

- `<section id="contact">`, `width: 100%`, no max-width
- Background: `--color-dark` (`#24292f`)
- Padding: `--space-7` vertical
- h2: white, centred, `2rem`, weight 700
- Sub-paragraph: `--color-text-muted` lightened (`#adb5bd`), centred
- Button: `--color-accent` fill, `--color-dark` text, same spec as Hero CTA — scrolls to `#footer-contact` anchor in the footer
- Focus: `outline: 2px solid #ffffff; outline-offset: 3px`

---

### 5.8 Footer

```
┌──────────────────────────────────────────────────────────┐
│  Contact                     │  Navigate                 │
│  williamsahupa@gmail.com     │  Home                     │
│  LinkedIn → Iyango Williams  │  About                    │
│  GitHub → ibidiuntold        │  Projects                 │
│                              │  Skills                   │
│                              │  Contact                  │
├──────────────────────────────────────────────────────────┤
│          © 2025 Iyango Williams. All Rights Reserved.    │
└──────────────────────────────────────────────────────────┘
```

- Background: `--color-dark`
- Top section padding: `--space-7 --space-3`
- Column headings: `0.7rem`, uppercase, letter-spacing `0.1em`, `--color-text-muted`
- Links: `--color-text-muted` → hover `--color-accent`, `transition: color 0.2s ease`
- External links: `target="_blank" rel="noopener noreferrer"`
- Bottom bar: `border-top: 1px solid rgba(255,255,255,0.1)`, padding `--space-2 --space-3`, `0.85rem`, `--color-text-muted`, centred
- Focus: `outline: 2px solid --color-accent; outline-offset: 2px`

---

## 6. Animation & Interaction

| Interaction | Property | Duration | Easing |
|---|---|---|---|
| Nav link colour change on hover | `color` | `0.3s` | `ease` |
| Card lift on hover | `transform: translateY`, `box-shadow` | `0.2s` | `ease` |
| CTA button background on hover | `background` | `0.2s` | `ease` |
| Hamburger bars → X | `transform`, `opacity` | `0.3s` | `ease` |
| Smooth scroll | `scroll-behavior: smooth` on `html` | native | — |
| Footer/nav link colour on hover | `color` | `0.2s` | `ease` |

No JavaScript animations — all transitions are CSS only except hamburger toggle (one `classList.toggle` call).

---

## 7. Data-Driven Projects: `data.js` Structure

```js
// data.js — add a new object to this array to add a project
const PROJECTS = [
  {
    title: "Vickie's Atelier",
    description: "A responsive website for a fashion boutique showcasing their collections and services.",
    tags: ["HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Clothing rack in a fashion boutique",
    demoUrl: "#",          // replace with live URL
    repoUrl: "https://github.com/ibidiuntold/vickies-atelier"
  },
  {
    title: "Live Scores",
    description: "A web application that provides real-time updates on sports scores and statistics.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Athlete running on a track",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Boiling Point Tutorials",
    description: "An educational platform offering tutorials and resources for university students in their 100L and 200L.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Students studying at a university library",
    demoUrl: "#",
    repoUrl: "#"
  }
];
```

`script.js` reads `PROJECTS`, builds each `<article class="project-card">` element, and appends it to `<div id="projects-grid">`. The `<script src="data.js">` tag appears before `<script src="script.js">` in `index.html`.

---

## 8. File Structure After Implementation

```
portfolio-website/
├── index.html        ← restructured (hero, about, projects, skills, contact, footer)
├── style.css         ← full rewrite using CSS custom properties defined above
├── script.js         ← NEW: reads PROJECTS array, renders project cards into #projects-grid
├── data.js           ← NEW: PROJECTS array — edit this to add/update projects
├── img/
│   └── hero-bg.jpg   ← PLACEHOLDER: user supplies a personal photo here
├── hello.html        ← reference file, unchanged
└── README.md         ← unchanged
```

`img/` directory is new. Until the user provides a personal photo, `hero-bg.jpg` can be any landscape image or an Unsplash URL set in CSS directly.
