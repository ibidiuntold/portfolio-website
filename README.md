# Iyango Williams: Portfolio Website

A personal portfolio site for Iyango Williams, Full Stack Engineer and EEE Graduate. Built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step. Deploys directly to GitHub Pages.

## Live Site

[https://ibidiuntold.github.io/portfolio-website/](https://ibidiuntold.github.io/portfolio-website/)

---

## File Structure

```
portfolio-website/
├── index.html       Main page (hero, about, projects, skills, contact, footer)
├── style.css        All styles using CSS custom properties
├── script.js        Hamburger nav toggle + project card renderer
├── data.js          Project data array (edit this to add/update projects)
├── img/
│   └── hero-bg.jpg  Your personal hero background photo (see below)
└── hello.html       Reference design file (not part of the live site)
```

---

## How to Add a New Project

Open `data.js` and append a new object to the `PROJECTS` array:

```js
{
  title: "Your Project Name",
  description: "Two or three sentences describing what the project does.",
  tags: ["React", "Node.js", "MongoDB"],       // tech stack pill labels
  image: "img/your-screenshot.jpg",            // relative path or full URL
  imageAlt: "Screenshot of Your Project Name",
  demoUrl: "https://your-live-demo.com",
  repoUrl: "https://github.com/ibidiuntold/your-repo"
}
```

Save the file. The card renders automatically. No HTML edits needed.

---

## How to Update the Hero Photo

1. Prepare your photo. Landscape orientation works best (minimum 1400px wide recommended).
2. Save it as `hero-bg.jpg` inside the `img/` folder, replacing the existing file.
3. The hero section picks it up automatically. No code changes needed.

To use a different filename, update this line in `style.css`:

```css
.hero {
  background-image: url('img/hero-bg.jpg'); /* change filename here */
}
```

---

## How to Update Your Details

| What | Where |
|---|---|
| Name, title, bio | `index.html` (hero and about sections) |
| Skills | `index.html` (`.skills-grid` section) |
| Contact links (email, LinkedIn, GitHub) | `index.html` (footer `#footer-contact`) |
| Project data | `data.js` |
| Colours and spacing | `style.css` (`:root` custom properties block) |

---

## Deployment

Push to the `main` branch of your GitHub repository. GitHub Pages serves `index.html` from the repository root automatically.

No build step, no npm install, no configuration required.
