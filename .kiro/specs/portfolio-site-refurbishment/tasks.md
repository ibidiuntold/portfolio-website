# Implementation Tasks

## Overview

Tasks are ordered so each one builds on the previous and produces a reviewable diff. Complete them in sequence. All work targets `index.html`, `style.css`, and two new files (`data.js`, `script.js`). An `img/` folder is created in Task 1 for the hero photo.

Reference files: `.kiro/specs/portfolio-site-refurbishment/requirements.md` and `design.md`.

---

## Task 1: Project scaffolding and CSS custom properties

- [x] 1.1 Create the `img/` directory and move (or note the location of) `hero-bg.jpg` there — the user's personal photo.
- [x] 1.2 Open `style.css`. Replace the entire file with a fresh reset + CSS custom properties block defining every design token from `design.md` (all `--color-*` and `--space-*` variables), the base reset, `html { scroll-behavior: smooth; }`, and `body` base styles (font-family, color, line-height). Do not style any components yet.
- [ ] 1.3 Confirm the page still loads without visual errors (blank white page is expected at this point).

---

## Task 2: Navigation — structure and desktop styles

- [x] 2.1 In `index.html`, add a skip link as the very first element inside `<body>`: `<a href="#main-content" class="skip-link">Skip to content</a>`.
- [ ] 2.2 Rewrite the `<header>` to contain:
  - A logo `<span class="logo">Iyango Williams</span>` (not an `<h1>` — the `<h1>` belongs in the hero).
  - A `<nav aria-label="Main navigation">` with an anchor link to each of: `#hero`, `#about`, `#projects`, `#skills`, `#contact`.
  - A hamburger `<button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">` containing three `<span class="bar"></span>` elements.
- [x] 2.3 In `style.css`, add header and nav styles: fixed positioning, 64px height, dark background, flex layout, logo color/weight, link color/weight/uppercase/letter-spacing, link hover color transition, focus outline on links.
- [x] 2.4 Add skip link CSS: visually hidden by default (`position: absolute; left: -9999px`), becomes visible with correct positioning and accent background on `:focus`.

---

## Task 3: Navigation — hamburger menu (mobile)

- [x] 3.1 In `style.css`, add mobile nav styles inside `@media (max-width: 480px)`: hide the nav links by default, show the hamburger button, style the vertical drawer (dark background, stacked links, padding).
- [x] 3.2 Create `script.js`. Add the hamburger toggle logic: select the button and nav link container, on button click toggle a class (e.g. `nav-open`) on the nav, update `aria-expanded`, and collapse the menu when any nav link is clicked.
- [x] 3.3 Add the hamburger bar CSS transitions: bars rotate and fade to form an X when `.nav-open` is active.
- [x] 3.4 Add the `<script src="script.js" defer></script>` tag to `<head>` in `index.html`.
- [ ] 3.5 Test: hamburger opens/closes on mobile viewport, all links collapse the menu, `aria-expanded` updates correctly, keyboard Tab reaches the button and links, focus ring is visible.

---

## Task 4: Hero section

- [x] 4.1 Add `<main id="main-content">` wrapping all sections below the header.
- [ ] 4.2 Replace the existing `<section id="about">` at the top with a new `<section id="hero" class="hero" aria-label="Introduction">` as the first child of `<main>`. It must contain:
  - An `<h1>Iyango Williams</h1>`
  - A `<p class="hero-sub">Full Stack Engineer &amp; EEE Graduate</p>`
  - An `<a href="#projects" class="btn btn-accent">View My Work</a>`
- [x] 4.3 In `style.css`, add hero styles: `height: 100vh`, `background-image: url('img/hero-bg.jpg')`, `background-size: cover`, `background-position: center`, dark overlay via `::before` pseudo-element (`rgba(0,0,0,0.55)`), flex centering, `h1` size/weight/color, subheadline size/color, CTA button styles (accent fill, dark text, border-radius, hover darken, focus outline).
- [ ] 4.4 Add `@media (max-width: 480px)` rule scaling `h1` from `3.5rem` to `2.2rem`.

---

## Task 5: Shared section header pattern

- [x] 5.1 In `style.css`, create reusable `.section-header` styles: centred `h2` (1.75rem, weight 600, letter-spacing 0.04em), a `.section-divider` element (4px × 48px block, `--color-primary`, centred, `margin: 12px auto 0`), and an optional `.section-sub` paragraph (1rem, muted color, max-width 560px, centred).
- [x] 5.2 Apply `.section-header` markup to the About, Projects, Skills, and Contact CTA sections (done as each section is built in Tasks 6–9).

---

## Task 6: About section

- [x] 6.1 Add `<section id="about" class="about-section">` to `<main>`, below the hero. Structure: `.section-header` (h2 "About Me" + divider + section-sub), then a bio `<p>` (existing bio text from the current `index.html`).
- [x] 6.2 In `style.css`, add about-section styles: `padding: var(--space-7) var(--space-3)`, white background, `max-width: 1100px` container centred, bio paragraph `max-width: 680px` centred.

---

## Task 7: Data-driven projects section

- [x] 7.1 Create `data.js`. Define the `PROJECTS` array with the three existing projects (Vickie's Atelier, Live Scores, Boiling Point Tutorials) using the object shape from `design.md` section 7: `{ title, description, tags[], image, imageAlt, demoUrl, repoUrl }`. Use the existing Unsplash image URLs as values for `image`.
- [ ] 7.2 Add `<script src="data.js"></script>` to `<head>` in `index.html` (before `script.js`).
- [ ] 7.3 Add `<section id="projects" class="projects-section">` to `<main>`, below about. Structure: `.section-header` (h2 "My Projects" + divider + section-sub), then `<div id="projects-grid" class="projects-grid"></div>` (empty — populated by JS).
- [ ] 7.4 In `script.js`, add the `renderProjects()` function: iterate `PROJECTS`, build each `<article class="project-card">` with all required sub-elements (thumbnail `<img>`, `<h3>`, `<p>`, `.tech-tags` with `<span class="tech-tag">` per tag, `.card-links` with Live Demo and GitHub anchors), and append to `#projects-grid`.
- [ ] 7.5 Call `renderProjects()` on `DOMContentLoaded`.
- [ ] 7.6 In `style.css`, add projects-section styles: section padding, grid layout (`repeat(3,1fr)` → `repeat(2,1fr)` → `1fr`), 24px gap.
- [ ] 7.7 In `style.css`, add project-card styles: white background, border, border-radius, box-shadow, overflow hidden, padding, hover lift (translateY + elevated shadow, 0.2s ease).
- [ ] 7.8 In `style.css`, add thumbnail styles: `width: 100%`, `aspect-ratio: 16/9`, `object-fit: cover`, `display: block`.
- [ ] 7.9 In `style.css`, add tech-tag styles: pill shape, `--color-surface-subtle` background, `--color-primary` text, small font, uppercase, letter-spacing, flex-wrap gap.
- [ ] 7.10 In `style.css`, add card-links styles: flex row, gap, margin-top; Live Demo button (accent fill); GitHub button (outlined); focus outlines on both.
- [ ] 7.11 Test: all three cards render correctly, grid reflows at tablet and mobile breakpoints, hover lifts cards, keyboard can reach and activate all links.

---

## Task 8: Skills section

- [ ] 8.1 Add `<section id="skills" class="skills-section">` to `<main>`, below projects. Structure: `.section-header` (h2 "Skills" + divider + section-sub), then `<div class="skills-grid">` containing six `.skill-item` elements.
- [ ] 8.2 For each of the six skill items, add the inline SVG icon (from the table in `design.md` section 5.6) with `aria-hidden="true" focusable="false"`, an `<h3>` heading, and a `<p>` description.

  Use these inline SVG paths (viewBox="0 0 24 24", fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"):

  - **HTML & CSS** (code brackets): `<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`
  - **JavaScript** (curly braces): `<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/>`
  - **Electrical Engineering** (zap/lightning): `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>`
  - **Problem Solving** (puzzle): `<path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-3.408 0l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 0 1 3.237 0 2.5 2.5 0 0 1 0 3.237c-.464.18-.894.527-.967 1.02z"/>`
  - **Responsive Design** (monitor + phone): `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>`
  - **Fast Learner** (rocket): `<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>`

- [ ] 8.3 In `style.css`, add skills-section styles: `--color-surface-subtle` background, section padding, grid layout (same 3/2/1 column breakpoints as projects), 32px gap.
- [ ] 8.4 In `style.css`, add skill-item styles: white background, border-radius, box-shadow, padding `var(--space-4)`, text-align center, `h3` size/weight, `p` size/color.
- [ ] 8.5 In `style.css`, add `.skill-icon svg` rule: `width: 40px; height: 40px; color: var(--color-primary); margin: 0 auto var(--space-2); display: block`.

---

## Task 9: Contact CTA strip

- [ ] 9.1 Add `<section id="contact" class="cta-section">` to `<main>`, below skills. Structure: `<div class="cta-inner">` containing h2 "Let's Work Together", a `<p>` subtext ("I'm open to freelance projects, collaborations, and full-time opportunities. Let's build something together."), and an `<a href="#footer-contact" class="btn btn-accent">Get In Touch</a>`.
- [ ] 9.2 In `style.css`, add cta-section styles: `width: 100%`, dark background, vertical padding `var(--space-7)`, centred flex column content, white `h2`, muted subtext color, button styles (inherits `.btn.btn-accent` from hero), focus outline white.

---

## Task 10: Footer

- [ ] 10.1 Add `<footer>` below `</main>`. Structure:
  - `<div class="footer-top">` containing:
    - `<div class="footer-col" id="footer-contact">` with a heading "Contact", then mailto link, LinkedIn link, GitHub link.
    - `<div class="footer-col">` with a heading "Navigate", then anchor links to `#hero`, `#about`, `#projects`, `#skills`, `#contact`.
  - `<div class="footer-bottom">` with `<p>© 2025 Iyango Williams. All Rights Reserved.</p>`
- [x] 10.2 Add `target="_blank" rel="noopener noreferrer"` to LinkedIn and GitHub footer links.
- [x] 10.3 In `style.css`, add footer styles: dark background, `footer-top` as 2-column flex (side-by-side on desktop/tablet, stacked on mobile), column heading styles (small, uppercase, muted, letter-spacing), link color/hover/focus, `footer-bottom` border-top, small centered text.

---

## Task 11: Responsiveness pass

- [x] 11.1 Review all sections at 480px viewport width. Verify: nav shows hamburger only, hero h1 is 2.2rem, projects/skills grid is 1-column, footer columns stack, no horizontal scroll.
- [x] 11.2 Review all sections at 600px (tablet). Verify: nav shows links, projects/skills grid is 2-column, footer columns are side-by-side.
- [x] 11.3 Fix any overflow, clipped text, or broken layout found in 11.1–11.2.
- [x] 11.4 Confirm all images have `max-width: 100%` applied (thumbnail `<img>` elements and any others).

---

## Task 12: Accessibility pass

- [x] 12.1 Verify heading hierarchy in DevTools or a heading outline tool: one `<h1>` (hero), `<h2>` per section, `<h3>` per project card and skill item only.
- [x] 12.2 Verify every `<img>` has a non-empty `alt` attribute. Check project card thumbnails (set in `data.js`), hero (CSS background — section already has `aria-label`), and any other images.
- [x] 12.3 Tab through the entire page with keyboard only. Confirm: skip link appears on first Tab press, focus reaches nav toggle button, all nav links, hero CTA, all project card links, skills (no focusable elements expected), CTA button, footer links. Confirm focus ring is visible at every step.
- [x] 12.4 Verify all SVG icons in skills section have `aria-hidden="true"` and `focusable="false"`.
- [x] 12.5 Verify hamburger button has `aria-expanded` updating correctly on toggle.
- [x] 12.6 Check colour contrast of body text on white (`#24292f` on `#fff` ≈ 16:1 ✓), white text on dark overlay in hero (white on `rgba(0,0,0,0.55)` over photo — verify visually), accent button text (`--color-dark` on `--color-accent` gold — verify with a contrast checker, adjust gold shade if needed).

---

## Task 13: Final review and cleanup

- [ ] 13.1 Remove `hello.html` from the project root if desired (it was only a reference file — optional).
- [x] 13.2 Remove any leftover placeholder `href="#"` values in `index.html` — replace with real URLs or mark clearly with a `<!-- TODO: add URL -->` comment.
- [x] 13.3 Update `README.md` with a brief description of the site, how to add new projects (point to `data.js`), and how to update the hero photo.
- [x] 13.4 Open the site in a browser served from the file system (`file://`) and on a local server to confirm no CORS or path errors.
- [x] 13.5 Push to GitHub and verify the live GitHub Pages deployment renders correctly.
