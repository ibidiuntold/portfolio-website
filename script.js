/* ============================================================
   script.js
   Handles:
   1. Hamburger nav toggle
   2. Project card rendering (Task 7)
   ============================================================ */

/* ---- 1. HAMBURGER NAV TOGGLE ---- */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.main-nav');

  if (!toggle || !nav) return;

  function openMenu() {
    nav.classList.add('nav-open');
    toggle.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    nav.classList.remove('nav-open');
    toggle.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.contains('nav-open');
    isOpen ? closeMenu() : openMenu();
  });

  /* Collapse menu when any nav link is clicked */
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* Collapse menu when clicking outside the header */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.site-header')) {
      closeMenu();
    }
  });
})();


/* ---- 2. PROJECT CARD RENDERER (Task 7) ---- */
/* Runs after DOM is ready. Depends on data.js being loaded first. */
document.addEventListener('DOMContentLoaded', function () {
  renderProjects();
});

function renderProjects() {
  const grid = document.getElementById('projects-grid');

  /* Guard: grid container and PROJECTS data must both exist */
  if (!grid || typeof PROJECTS === 'undefined') return;

  PROJECTS.forEach(function (project) {
    const article = document.createElement('article');
    article.className = 'project-card';

    /* Build tech tag pills */
    const tagHTML = project.tags
      .map(function (tag) {
        return '<span class="tech-tag">' + tag + '</span>';
      })
      .join('');

    article.innerHTML =
      '<img src="' + project.image + '" alt="' + project.imageAlt + '" class="card-thumb" />' +
      '<div class="card-body">' +
        '<h3>' + project.title + '</h3>' +
        '<p>' + project.description + '</p>' +
        '<div class="tech-tags">' + tagHTML + '</div>' +
        '<div class="card-links">' +
          '<a href="' + project.demoUrl + '" class="btn btn-accent btn-sm" target="_blank" rel="noopener noreferrer">Live Demo</a>' +
          '<a href="' + project.repoUrl + '" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">GitHub</a>' +
        '</div>' +
      '</div>';

    grid.appendChild(article);
  });
}
