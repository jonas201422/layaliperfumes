// Navigation toggle and language switcher
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const langButtons = document.querySelectorAll('.lang-btn');

const toggleNav = () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
};

if (navToggle && navLinks) {
  navToggle.addEventListener('click', toggleNav);
}

// Close nav on link click (mobile)
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Language switching
function setLanguage(lang) {
  const isArabic = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

  document.querySelectorAll('.lang-ar').forEach(el => {
    el.style.display = isArabic ? '' : 'none';
  });
  document.querySelectorAll('.lang-de').forEach(el => {
    el.style.display = isArabic ? 'none' : '';
  });

  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  navLinks?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Initial language
setLanguage('ar');

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-scroll, .animate-zoom').forEach(el => observer.observe(el));
