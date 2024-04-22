let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('.slide').length;

document.getElementById('next').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop to the first slide after the last
    const offset = -currentSlide * 100; // Move -100% per slide width
    slider.style.transform = `translateX(${offset}vw)`;
});
