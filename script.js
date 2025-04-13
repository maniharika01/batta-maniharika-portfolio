// Scroll reveal animation
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Dark mode toggle
const btn = document.getElementById('toggle-theme');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Typing animation for job title
const typing = document.querySelector('.typing');
const roles = ["Aspiring Cloud Engineer", "Python Developer", "ML Enthusiast"];
let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typing.textContent += roles[roleIndex][charIndex];
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typing.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});
