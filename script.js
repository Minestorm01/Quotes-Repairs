let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('.slide').length;

function setInitialPosition() {
    const initialOffset = -currentSlide * 100; // This should start at 0%
    slider.style.transform = `translateX(${initialOffset}vw)`;
}

document.getElementById('next').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    const offset = -currentSlide * 100;  // Move -100% per slide width
    slider.style.transform = `translateX(${offset}vw)`;
});

// Call setInitialPosition on page load
document.addEventListener('DOMContentLoaded', setInitialPosition);
