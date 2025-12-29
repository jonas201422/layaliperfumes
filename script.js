// Navigation toggle and language switcher
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const langButtons = document.querySelectorAll('.lang-btn');

const toggleNav = () => {
  const isOpen = navLinks.classList.toggle('show');
  navToggle.setAttribute('aria-expanded', isOpen);
};

navToggle?.addEventListener('click', toggleNav);

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

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

  navLinks?.classList.remove('show');
  navToggle?.setAttribute('aria-expanded', 'false');
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage('ar');
