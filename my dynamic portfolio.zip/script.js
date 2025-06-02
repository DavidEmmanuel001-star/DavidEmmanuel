// script.js

// ====================
// 1. DYNAMIC YEAR UPDATE
// ====================
const currentYearSpan = document.getElementById('current-year');
currentYearSpan.textContent = new Date().getFullYear();

// ====================
// 2. SKILL DESCRIPTION INTERACTION
// ====================
const skillButtons = document.querySelectorAll('.skill-btn');
const skillDescription = document.getElementById('skill-description');

const skillInfo = {
    "HTML": "HTML (HyperText Markup Language) is the backbone of all web pages, defining their structure and content.",
    "CSS": "CSS (Cascading Style Sheets) brings websites to life with beautiful designs, layouts, and animations.",
    "JavaScript": "JavaScript adds interactivity to websites, allowing dynamic content updates and user interactions."
};

skillButtons.forEach(button => {
    button.addEventListener('click', () => {
        const skill = button.dataset.skill;
        skillDescription.textContent = skillInfo[skill];
        skillDescription.style.color = '#0056b3';
    });
});

// ====================
// 3. DARK MODE TOGGLE
// ====================
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Set initial theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = 'Toggle Light Mode';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update button text and save preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = 'Toggle Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = 'Toggle Dark Mode';
    }
});
    // Load Projects from JSON
const projectsContainer = document.getElementById('projects-container');
const loadMoreBtn = document.getElementById('load-more');

const projects = [
    {
        title: "Personal Portfolio",
        description: "A responsive portfolio website showcasing my projects and skills.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        image: "images/portfolio-project.jpg",
        link: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Interactive weather application using API integration with geolocation.",
        technologies: ["API", "JavaScript", "CSS"],
        link: "#",
        image: "images/weather-app.jpg"
    },
    {
        title: "E-commerce Mockup",
        description: "Front-end design for an online store with product filtering.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        link: "#",
        image: "images/ecommerce-project.jpg"
    },
    {
        title: "Task Manager",
        description: "CRUD application for managing daily tasks with local storage.",
        tags: ["JavaScript", "Local Storage"],
        link: "#",
        image: "images/task-manager.jpg"
    }
];

function renderProjects(projectsToRender) {
    projectsToRender.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card bg-white dark:bg-gray-700 p-6 rounded-lg';
        projectCard.innerHTML = `
            <h3 class="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full">${tag}</span>).join('')}
            </div>
            <a href="{project.link}" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">
                View Project <i class="fas fa-arrow-right ml-1"></i>
            </a>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Initial load
renderProjects(projects.slice(0, 3));

// Load more functionality
let visibleProjects = 3;
loadMoreBtn.addEventListener('click', () => {
    const nextProjects = projects.slice(visibleProjects, visibleProjects + 3);
    renderProjects(nextProjects);
    visibleProjects += nextProjects.length;
    
    if (visibleProjects >= projects.length) {
        [
  {
    "title": "My Portfolio Website",
    "description": "A personal portfolio website showcasing my skills, projects, and contact info. Built with HTML, CSS (Tailwind), and vanilla JavaScript for interactivity and dynamic content loading.",
    "link": "https://yourname.github.io/portfolio"
},
{
    "title": "Weather App",
    "description": "Fetch live weather information from OpenWeatherMap API and display it dynamically using fetch API and async/await.",
    "link": "https://yourname.github.io/js-weather-app"
},
{
  "title": "Responsive Blog Layout",
  "description": "A clean, fully responsive blog homepage built with HTML, CSS Grid/Flexbox, and JavaScript. Features dynamic loading of posts, smooth scrolling, and interactive navigation.",
  "link": "https://yourname.github.io/responsive-blog"
}, 
 {
  "title": "JavaScript Quiz App",
  "description": "An interactive quiz with multiple-choice questions, timer, and scoring implemented in vanilla JavaScript.",
  "link": "https://yourname.github.io/js-quiz-app"
},
{
  "title": "E-Commerce Storefront",
  "description": "An online store frontend built using JavaScript and Tailwind CSS. Includes product listing, filtering, a shopping cart with add/remove items, and localStorage to save the cart.",
  "link": "https://yourname.github.io/ecommerce-store"
},
{
  "title": "Responsive Blog Layout",
  "description": "A clean, fully responsive blog homepage built with HTML, CSS Grid/Flexbox, and JavaScript. Features dynamic loading of posts, smooth scrolling, and interactive navigation.",
  "link": "https://yourname.github.io/responsive-blog"
}
]
Btn.style.display = 'none';
    }
});

// Load projects when DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadProjects);