/* ============================================================
   data.js — Project data for Iyango Williams' portfolio
   ------------------------------------------------------------
   To add a new project: copy one object block, paste it at
   the end of the array (before the closing ]), and fill in
   your details. The site renders cards automatically.
   ============================================================ */

const PROJECTS = [
  {
    title: "Vickie's Atelier",
    description:
      "A responsive website for a fashion boutique showcasing their collections and services. Built with clean HTML and CSS for a polished, mobile-friendly experience.",
    tags: ["HTML", "CSS"],
    image: "img/project-vickie.jpg",
    imageAlt: "Clothing rack in a fashion boutique",
    demoUrl: "https://vickies-atelier.vercel.app",
    repoUrl: "https://github.com/ibidiuntold/vickies-atelier"
  },
  {
    title: "Contact Manager",
    description:
      "A web application designed for uploading, viewing, editing and deleting contacts. This is a test project showcasing my knowledge of the MERN stack",
    tags: ["HTML", "CSS", "JavaScript, Node.js using Express, MongoDB"],
    image: "img/project-contact.jpg",
    imageAlt: "Screenshot of Contact Manager",
    demoUrl: "https://ibidiuntold.github.io/Contact-Manager/",
    repoUrl: "https://github.com/ibidiuntold/Contact-Manager"
  },
  {
    title: "INAN Feedback",
    description:
      "A multi-tenant web application for creating and distributing public feedback forms, collecting responses, and analysing results — all from a centralised dashboard.",
    tags: ["TypeScript", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Students studying together at a university library",
    demoUrl: "https://inan-awards.vercel.app", 
    repoUrl: "https://github.com/ibidiuntold/inan-feedback"  
  }
];
