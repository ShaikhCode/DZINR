const imgArray = [
    "img/i1.png", 
    "img/i2.png", 
    "img/i3.png", 
    "img/i4.png", 
    "img/i5.png", 
    "img/i6.png", 
    "img/i7.png", 
    "img/i8.png", 
    "img/i9.png", 
    "img/i10.png"
];
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Function to generate a random image
function getRandomImage() {
    return imgArray[Math.floor(Math.random() * imgArray.length)];
}

// Function to calculate how many images can fit based on screen width
function calculateImagesToShow() {
    const screenWidth = window.innerWidth;
    const imageWidth = 80; // Assuming each image has a height of 80px and some margin
    const margin = 20; // Total margin between images (left + right)
    const imagesPerRow = Math.floor(screenWidth / (imageWidth + margin));
    return imagesPerRow;
}

// Function to create a row of images
function populateRow(rowClass) {
    const row = document.querySelector(rowClass);
    row.innerHTML = ''; // Clear previous content

    const totalImages = 44
    // Loop to generate the images
    for (let i = 0; i < totalImages; i++) {
        const img = document.createElement("img");
        img.className = "icon"; // Apply styling
        img.src = getRandomImage(); // Randomly assign image source
        row.appendChild(img);
    }
}

// Function to animate the rows and create an endless effect
function startAnimation() {
    const leftRow = document.querySelector(".icons-left-right");
    const rightRow = document.querySelector(".icons-right-left");

    // Apply animation for continuous scroll from left to right for left row
    leftRow.style.animation = "moveLeftToRight 10s linear infinite";
    // Apply animation for continuous scroll from right to left for right row
    rightRow.style.animation = "moveRightToLeft 10s linear infinite";

    // When the left row animation completes, refresh it with new random images
    leftRow.addEventListener('animationiteration', () => {
        leftRow.innerHTML = ''; // Clear the row
        populateRow(".icons-left-right"); // Add new random images
    });

    // When the right row animation completes, refresh it with new random images
    rightRow.addEventListener('animationiteration', () => {
        rightRow.innerHTML = ''; // Clear the row
        populateRow(".icons-right-left"); // Add new random images
    });
}

// Initialize the rows with random images and start the animation
populateRow(".icons-left-right");
populateRow(".icons-right-left");
startAnimation();

let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.review-card');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');

setInterval(() => {
    changeSlide(1);
}, 5000); // Change slide every 3 seconds

}