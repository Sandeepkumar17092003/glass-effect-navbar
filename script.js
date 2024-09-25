const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', () => {
    navLinks.classList.add('show');
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('show');
});
