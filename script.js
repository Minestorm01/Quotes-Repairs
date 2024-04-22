let currentSlide = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');

function moveSlide(direction) {
    currentSlide = (currentSlide + direction
