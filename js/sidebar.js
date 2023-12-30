// Sidebar toggle
const nav_toggle = document.querySelector('.nav-toggle');
const sizebar = document.querySelector('.sidebar');
nav_toggle.addEventListener('click', () => {
    nav_toggle.classList.toggle('nav-active');
    sizebar.classList.toggle('open');
});