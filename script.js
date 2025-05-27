// Navbar mobile toggle
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');
let idx = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = [...dotsContainer.children];
dots[0].classList.add('active');

function updateSlider() {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === idx));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
}

function goToSlide(i) {
  idx = i; updateSlider();
}

next.addEventListener('click', () => {
  idx = (idx + 1) % slides.length;
  updateSlider();
});
prev.addEventListener('click', () => {
  idx = (idx - 1 + slides.length) % slides.length;
  updateSlider();
});

// Auto-play (optional)
setInterval(() => {
  idx = (idx + 1) % slides.length;
  updateSlider();
}, 5000);
