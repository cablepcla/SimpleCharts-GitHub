const navHTML = `
<section class="nav">
  <div class="nav-wrapper">
    <div class="left-nav">
      <a href="/index.html" style="display:flex;">
        <img src="svg/logo.svg">
      </a>
      <div class="nav-line"></div>
      <a class="nav-link" href="#pricing">Pricing</a>
      <a class="nav-link" href="#contact">Contact</a>
      <a class="nav-link" href="#testimonials">Testimonials</a>
      <a class="nav-link" href="#faq">FAQ</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobile-menu">
    <a class="nav-link" href="#pricing" onclick="closeMenu()">Pricing</a>
    <a class="nav-link" href="#contact" onclick="closeMenu()">Contact</a>
    <a class="nav-link" href="#testimonials" onclick="closeMenu()">Testimonials</a>
    <a class="nav-link" href="#faq" onclick="closeMenu()">FAQ</a>
  </div>
</section>`;

document.body.insertAdjacentHTML('afterbegin', navHTML);

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