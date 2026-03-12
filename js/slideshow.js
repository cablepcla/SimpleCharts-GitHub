const images = document.querySelectorAll('.slideshow img');
let current = 0;

images[current].style.opacity = 1;

setInterval(() => {
    images[current].style.opacity = 0;
    current = (current + 1) % images.length;
    images[current].style.opacity = 1;
}, 4000); // change image every 4s