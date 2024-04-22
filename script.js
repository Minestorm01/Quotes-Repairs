let currentSlide = 0;
document.getElementById('next').addEventListener('click', function() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide
    const newX = -currentSlide * 100; // Move -100% per slide
    document.getElementById('slider').style.transform = `translateX(${newX}vw)`;
});
