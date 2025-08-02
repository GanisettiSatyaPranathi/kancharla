// Simple Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

// Show slide function
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));

  slides[index].classList.add('active');
  indicators[index].classList.add('active');
}

// Move slide
function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Auto-play (optional)
setInterval(() => {
  moveSlide(1);
}, 5000); // Change slide every 5 seconds

// Click indicator to go to slide
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Initialize
showSlide(currentSlide);

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}
