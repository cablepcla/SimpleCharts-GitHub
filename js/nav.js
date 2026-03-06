const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
}