let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('.slide').length;

document.getElementById('next').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % totalSlides;  // Ensure we loop around the slides
    const offset = -currentSlide * 100;  // This should be 100 times the current slide index
    slider.style.transform = `translateX(${offset}vw)`;
});
