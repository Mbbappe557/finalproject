// SOL Store — interactions

// Header scroll state
const header = document.querySelector('.site-header');
const onScroll = () => {
  if (window.scrollY > 30) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
}

// Reveal-on-scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach((el) => io.observe(el));

// Contact form (demo)
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sent ✦';
    form.reset();
  });
}

// Mark active nav link
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a, .mobile-nav a').forEach((a) => {
  const href = a.getAttribute('href');
  if (href === path) a.classList.add('active');
});
