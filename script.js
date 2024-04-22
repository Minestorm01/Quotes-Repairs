let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('.slide').length;

// Function to move the slider
function moveSlider() {
    const offset = -currentSlide * 100;  // Calculate offset for current slide
    slider.style.transform = `translateX(${offset}vw)`; // Apply the transform
    slider.style.transition = 'transform 0.5s ease'; // Smooth transition
}

// Event listener for the 'Next' button
document.getElementById('next').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % totalSlides;  // Increment currentSlide, loop back to the first slide
    moveSlider();  // Call moveSlider to update position
});

// Initialize slider position on DOM content load
document.addEventListener('DOMContentLoaded', function() {
    moveSlider();  // Set initial slider position to the first slide
});
