const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 3000;
let slideInterval;
const head = document.querySelector('.header-container');

function eat(){
    head.style.background = 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(/images/main/gallery/car6.jpg) center no-repeat';
    head.style.backgroundSize ='cover';
    head.style.backgroundAttachment = 'fixed';
}

function main(){
    head.style.background = 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(/images/main/about.jpg) center no-repeat';
    head.style.backgroundSize ='cover';
    head.style.backgroundAttachment = 'fixed';
}

function drink(){
    head.style.background = 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(/images/main/drink.jpg) center no-repeat';
    head.style.backgroundSize ='cover';
    head.style.backgroundAttachment = 'fixed';
}

function visit(){
    head.style.background = 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(/images/main/reservation2.jpg) center no-repeat';
    head.style.backgroundSize ='cover';
    head.style.backgroundAttachment = 'fixed';
}

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
