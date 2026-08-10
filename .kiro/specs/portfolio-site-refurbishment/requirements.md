# Requirements Document

## Introduction

This document specifies the requirements for refurbishing the existing portfolio website for Iyango Williams. The site is a single-page static portfolio currently hosted on GitHub Pages. The refurbishment upgrades the visual design, restructures content into distinct sections (Hero, About, Projects Grid, Skills, Contact CTA, Footer), adds a fully detailed project card format, introduces a mobile hamburger navigation, and ensures the result meets accessibility and responsiveness standards — all without introducing any build tools, frameworks, or server-side code.

The reference design patterns are adapted from a WhiteSpace WordPress theme demo (`hello.html`) but are re-implemented using plain HTML, CSS, and minimal vanilla JavaScript only.

---

## Glossary

- **Site**: The single-page portfolio website served from `index.html` on GitHub Pages.
- **Nav**: The sticky navigation bar rendered at the top of every viewport position.
- **Hamburger_Menu**: The collapsible mobile navigation triggered by a toggle button on small screens.
- **Hero**: The full-viewport introductory section at the top of the page, below the Nav.
- **About**: The section describing Iyango Williams' background and personal statement.
- **Projects_Grid**: The section displaying all project cards in a responsive grid layout.
- **Project_Card**: A self-contained `<article>` element representing one portfolio project.
- **Tech_Tag**: A pill-shaped `<span>` element inside a Project_Card labelling one technology used.
- **Skills_Section**: The section presenting highlighted skills or personal strengths in an icon + heading + text grid.
- **CTA_Strip**: A full-width dark banner section with a headline and a button linking to the contact section.
- **Footer**: The bottom section of the page containing contact links and navigation links.
- **Skip_Link**: A visually hidden anchor that becomes visible on keyboard focus, allowing users to skip directly to the main content.
- **Breakpoint_Mobile**: Viewport width ≤ 480px.
- **Breakpoint_Tablet**: Viewport width between 481px and 768px (inclusive).
- **Breakpoint_Desktop**: Viewport width ≥ 769px.
- **GitHub_Pages**: The static hosting service used to serve the Site from a GitHub repository.
- **HTML_Block_Approach**: The method of adding a new project by copying and editing a raw `<article class="project-card">` block directly in `index.html`.
- **Data_Driven_Approach**: The method of adding a new project by editing a JavaScript data file (`data.js`) that contains all project objects as an inline JS array; a `script.js` file reads this array and renders Project_Cards into the DOM.

---

## Requirements

---

### Requirement 1: Tech Stack Constraints

**User Story:** As the site owner, I want the site to be built with plain HTML, CSS, and JavaScript only, so that it remains deployable on GitHub Pages without any build step or server dependency.

#### Acceptance Criteria

1. THE Site SHALL be implemented using only HTML5, CSS3, and vanilla JavaScript — no frameworks (React, Vue, Angular, etc.), no preprocessors (Sass, Less), and no build tools (Webpack, Vite, Parcel).
2. THE Site SHALL be fully functional when loaded directly from the filesystem as a static file and when served by GitHub Pages.
3. IF a JavaScript data file is used for the Data_Driven_Approach, THEN THE Site SHALL define project data as an inline JavaScript array or object literal in a `.js` file (not fetched via `fetch()` from a local JSON file), so that CORS restrictions on GitHub Pages do not prevent the data from loading.
4. THE Site SHALL keep `index.html` and `style.css` as the primary entry-point files.

---

### Requirement 2: Navigation

**User Story:** As a visitor, I want a clear, sticky navigation bar that lets me jump to any section from anywhere on the page, so that I can orient myself quickly and move around without scrolling.

#### Acceptance Criteria

1. THE Nav SHALL remain fixed at the top of the viewport as the user scrolls through the page.
2. THE Nav SHALL contain the site owner's name ("Iyango Williams") as a logo/wordmark on the left and anchor links on the right pointing to: `#hero`, `#about`, `#projects`, `#skills`, `#contact`.
3. WHEN a Nav anchor link is activated, THE Site SHALL smoothly scroll to the corresponding section.
4. WHILE the viewport width is at Breakpoint_Desktop or Breakpoint_Tablet, THE Nav SHALL display all anchor links in a horizontal row.
5. WHILE the viewport width is at Breakpoint_Mobile, THE Nav SHALL hide the anchor links and display a Hamburger_Menu toggle button.
6. WHEN the Hamburger_Menu toggle button is activated, THE Nav SHALL expand to display the anchor links in a vertical list below the logo row.
7. WHEN any anchor link inside the expanded Hamburger_Menu is activated, THE Hamburger_Menu SHALL collapse.
8. THE Nav SHALL include a Skip_Link as the first focusable element in the DOM.
9. WHEN the Skip_Link receives keyboard focus, THE Skip_Link SHALL become visible on screen.
10. WHEN the Skip_Link is activated, THE Site SHALL move focus to the main content landmark (`<main>`).
11. THE Hamburger_Menu toggle button SHALL have an `aria-expanded` attribute that reflects the current open/closed state.
12. THE Hamburger_Menu toggle button SHALL have an accessible label (via `aria-label` or visible text) identifying it as a navigation menu toggle.
13. WHEN a Nav anchor link has keyboard focus, THE Nav SHALL display a visible focus indicator around that link.

---

### Requirement 3: Hero Section

**User Story:** As a visitor arriving at the site, I want to see an immediate, visually striking introduction to who Iyango Williams is, so that I understand the purpose of the site within seconds.

#### Acceptance Criteria

1. THE Hero SHALL occupy 100% of the initial viewport height (`100vh`) on first load.
2. THE Hero SHALL display a full-bleed background image with a dark semi-transparent overlay to ensure text contrast.
3. THE Hero SHALL contain an `<h1>` element with the site owner's name.
4. THE Hero SHALL contain a subheadline describing the site owner's role (e.g., "Web Developer & EE Graduate").
5. THE Hero SHALL contain a call-to-action button that scrolls the page to the Projects_Grid section when activated.
6. THE Hero SHALL centre its content horizontally and vertically within the viewport.
7. THE background image in the Hero SHALL have a non-empty `alt` attribute on any `<img>` element used, or if applied via CSS `background-image`, the Hero container SHALL carry an `aria-label` describing the visual.
8. WHILE the viewport width is at Breakpoint_Mobile, THE Hero SHALL scale the `<h1>` font size to remain fully readable without horizontal overflow.

---

### Requirement 4: About Section

**User Story:** As a visitor, I want to read a concise bio for Iyango Williams, so that I understand his background, skills, and motivations.

#### Acceptance Criteria

1. THE About SHALL contain an `<h2>` heading with the text "About Me".
2. THE About SHALL contain a paragraph describing Iyango Williams' educational background (Electrical/Electronic Engineering) and current focus (web development with HTML, CSS, JavaScript).
3. THE About SHALL use a `<section>` element with `id="about"` as its landmark.
4. THE About section heading SHALL appear as a centered `<h2>` above its content, following the visual pattern of a section label + subtext paragraph.

---

### Requirement 5: Projects Grid Section

**User Story:** As a visitor, I want to browse Iyango Williams' projects in a clear visual grid, so that I can quickly assess his work and click through to live demos or source code.

#### Acceptance Criteria

1. THE Projects_Grid SHALL contain an `<h2>` heading with the text "My Projects".
2. THE Projects_Grid SHALL display Project_Cards in a CSS grid layout.
3. WHILE the viewport width is at Breakpoint_Desktop, THE Projects_Grid SHALL display Project_Cards in a 3-column grid.
4. WHILE the viewport width is at Breakpoint_Tablet, THE Projects_Grid SHALL display Project_Cards in a 2-column grid.
5. WHILE the viewport width is at Breakpoint_Mobile, THE Projects_Grid SHALL display Project_Cards in a 1-column grid.
6. THE Projects_Grid SHALL use a `<section>` element with `id="projects"` as its landmark.

---

### Requirement 6: Project Card Anatomy

**User Story:** As a visitor, I want each project card to show me the thumbnail, title, description, technologies used, and links to both the live demo and the source code, so that I can evaluate and access each project independently.

#### Acceptance Criteria

1. THE Project_Card SHALL be implemented as an `<article>` element with `class="project-card"`.
2. THE Project_Card SHALL contain a thumbnail `<img>` element with a non-empty `alt` attribute describing the project visually.
3. THE Project_Card SHALL contain an `<h3>` element for the project title.
4. THE Project_Card SHALL contain a `<p>` element for a short description of 2–3 sentences.
5. THE Project_Card SHALL contain a list of Tech_Tags, each rendered as a `<span class="tech-tag">` inside a wrapping `<div class="tech-tags">`.
6. THE Project_Card SHALL contain a "Live Demo" anchor link that opens the live project URL in a new browser tab.
7. THE Project_Card SHALL contain a "GitHub" anchor link that opens the project's repository URL in a new browser tab.
8. THE "Live Demo" and "GitHub" anchor links SHALL each have `target="_blank"` and `rel="noopener noreferrer"` attributes.
9. WHEN a Project_Card receives hover focus via pointer, THE Project_Card SHALL display a visible elevation change (e.g., box-shadow increase or translateY lift).
10. WHEN a link inside a Project_Card receives keyboard focus, THE link SHALL display a visible focus indicator.

---

### Requirement 7: Adding New Projects — Approach Options

**User Story:** As the site owner, I want a clear, low-friction method for adding new projects to the site over time, so that I can keep the portfolio up to date without specialist knowledge.

#### Acceptance Criteria

1. THE Site SHALL support the HTML_Block_Approach as a method for adding new projects, where the site owner copies one `<article class="project-card">` block in `index.html` and edits the content fields (image src, alt text, title, description, Tech_Tags, demo URL, repo URL).
2. THE Site SHALL support the Data_Driven_Approach as a method for adding new projects, where the site owner adds one JavaScript object to the array in `data.js` and the script renders the new Project_Card automatically.
3. WHERE the Data_Driven_Approach is used, THE `script.js` SHALL read the project array from `data.js` (included as a `<script>` tag before `script.js`) and render all Project_Cards into the Projects_Grid container using DOM manipulation.
4. WHERE the Data_Driven_Approach is used, THE Site SHALL not use `fetch()` to load a local `.json` file, so that the site functions correctly on GitHub Pages without CORS errors.
5. THE requirements document SHALL record the following tradeoff summary for the two approaches:
   - **HTML_Block_Approach**: Zero JavaScript dependency; works with no script loading; simple copy-paste workflow. Tradeoff: project data is embedded in markup, so adding a project requires editing HTML directly.
   - **Data_Driven_Approach**: All project data lives in one place (`data.js`); adding a project requires only editing a JavaScript object in that file; the rendering logic stays separate from the data. Tradeoff: requires two additional files (`data.js`, `script.js`) and a basic understanding that the `<script>` load order matters; not suitable if JavaScript is disabled.

---

### Requirement 8: Skills Section

**User Story:** As a visitor, I want to see an overview of Iyango Williams' core skills and strengths, so that I can quickly gauge his technical and personal capabilities.

#### Acceptance Criteria

1. THE Skills_Section SHALL contain an `<h2>` heading with the text "Skills".
2. THE Skills_Section SHALL display skill items in a grid of icon + heading + descriptive text, adapted from the features grid pattern in the reference design.
3. WHILE the viewport width is at Breakpoint_Desktop, THE Skills_Section SHALL display skill items in a 3-column grid.
4. WHILE the viewport width is at Breakpoint_Tablet, THE Skills_Section SHALL display skill items in a 2-column grid.
5. WHILE the viewport width is at Breakpoint_Mobile, THE Skills_Section SHALL display skill items in a 1-column grid.
6. THE Skills_Section SHALL use a `<section>` element with `id="skills"` as its landmark.
7. THE icon within each skill item SHALL be decorative (not conveying unique information not present in the heading/text) and SHALL be hidden from assistive technology via `aria-hidden="true"`.

---

### Requirement 9: Contact CTA Strip

**User Story:** As a visitor who has reviewed the portfolio, I want a clear prompt inviting me to make contact, so that reaching out feels like an obvious next step.

#### Acceptance Criteria

1. THE CTA_Strip SHALL be a full-width section spanning the entire viewport width with a dark background color.
2. THE CTA_Strip SHALL contain an `<h2>` heading with a hire/collaboration invitation (e.g., "Let's Work Together").
3. THE CTA_Strip SHALL contain a supporting paragraph with one or two sentences of context.
4. THE CTA_Strip SHALL contain a button or anchor link that scrolls to or navigates to the Footer contact details when activated.
5. THE CTA_Strip SHALL use a `<section>` element with `id="contact"` as its landmark.
6. WHEN the CTA_Strip button receives keyboard focus, THE button SHALL display a visible focus indicator.

---

### Requirement 10: Footer

**User Story:** As a visitor, I want a footer with quick access to contact information and site navigation, so that I can find links without scrolling back to the top.

#### Acceptance Criteria

1. THE Footer SHALL be implemented as a `<footer>` element.
2. THE Footer SHALL contain a left column with the site owner's contact details: email address (as a `mailto:` link), LinkedIn profile link, and GitHub profile link.
3. THE Footer SHALL contain a right column with anchor links to each page section: Hero, About, Projects, Skills, Contact.
4. THE Footer SHALL contain a bottom copyright bar with the text "© [year] Iyango Williams. All Rights Reserved."
5. WHILE the viewport width is at Breakpoint_Desktop or Breakpoint_Tablet, THE Footer SHALL display its contact column and navigation column side-by-side.
6. WHILE the viewport width is at Breakpoint_Mobile, THE Footer SHALL stack its contact column above its navigation column.
7. ALL external links in the Footer (LinkedIn, GitHub) SHALL have `target="_blank"` and `rel="noopener noreferrer"` attributes.
8. WHEN a Footer link receives keyboard focus, THE Footer link SHALL display a visible focus indicator.

---

### Requirement 11: Responsiveness

**User Story:** As a visitor using any device, I want the site to display and function correctly on mobile, tablet, and desktop screen sizes, so that I have a good experience regardless of how I access the site.

#### Acceptance Criteria

1. THE Site SHALL include a `<meta name="viewport" content="width=device-width, initial-scale=1.0">` tag.
2. THE Site SHALL define layout behaviour at three breakpoints: Breakpoint_Mobile (≤ 480px), Breakpoint_Tablet (481px–768px), and Breakpoint_Desktop (≥ 769px).
3. WHILE the viewport width is at Breakpoint_Mobile, THE Site SHALL display all multi-column grid sections as single-column stacked layouts.
4. THE Site SHALL use relative units (rem, em, %, vw, vh) for typography and spacing wherever fixed pixel values would cause overflow or illegibility at smaller viewports.
5. IF any image in the Site is wider than its container, THEN THE Site SHALL constrain it with `max-width: 100%` so that horizontal scrollbars do not appear.
6. THE Site SHALL not introduce horizontal scroll at any of the three defined breakpoints.

---

### Requirement 12: Accessibility

**User Story:** As a visitor using assistive technology or keyboard navigation, I want the site to be navigable and understandable without relying on a mouse or visual presentation, so that I can access all content and functionality.

#### Acceptance Criteria

1. THE Site SHALL use semantic HTML5 landmark elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
2. THE Site SHALL maintain a strict heading hierarchy: one `<h1>` in the Hero, `<h2>` headings for each section, and `<h3>` headings for Project_Card titles.
3. ALL `<img>` elements in the Site SHALL carry a non-empty `alt` attribute describing the image content; purely decorative images SHALL use `alt=""`.
4. THE Site SHALL achieve a colour contrast ratio of at least 4.5:1 between body text and its background, and at least 3:1 between large text (≥ 18pt or ≥ 14pt bold) and its background, in conformance with WCAG 2.1 Level AA contrast requirements.
5. THE Site SHALL make all interactive elements (links, buttons) reachable and operable via keyboard Tab and Enter/Space keys alone.
6. WHEN any interactive element receives keyboard focus, THE Site SHALL display a clearly visible focus indicator (outline or equivalent) on that element.
7. THE Site SHALL not remove the browser default focus outline without providing a visible CSS replacement.
8. THE Nav, Projects_Grid, Skills_Section, and Footer SHALL be fully navigable in a logical DOM order matching their visual order, so that screen reader announcement order matches the visual layout.

---

### Requirement 13: GitHub Pages Compatibility

**User Story:** As the site owner, I want to continue hosting the site on GitHub Pages with no additional configuration, so that deployment remains free and automatic on every push to the main branch.

#### Acceptance Criteria

1. THE Site SHALL consist only of static assets (HTML, CSS, JS, and image files) that GitHub Pages can serve without any server-side processing.
2. THE Site SHALL load all resources using relative paths, so that the site functions correctly whether served from the repository root or a subdirectory on GitHub Pages.
3. IF the Data_Driven_Approach is used, THEN THE `data.js` file SHALL be included via a `<script src="data.js">` tag in `index.html` before the `<script src="script.js">` tag, so that the data variable is defined before the rendering script executes.
4. THE Site SHALL not depend on any npm packages, server-side APIs, or build artefacts at runtime.
