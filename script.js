const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

let slideIndex = 0;
const slides = document.querySelectorAll('.review-card');

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    updateSlides();
}

function updateSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}

// Auto change slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000); // Change slide every 5 seconds

// Initialize the first slide
updateSlides();