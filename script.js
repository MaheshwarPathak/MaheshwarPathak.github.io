// Small helpers
const qs = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* =========================
   NAVBAR TOGGLE (MOBILE)
   ========================= */
(function initNavToggle() {
  const navToggle = qs('#navToggle');
  const navMenu = qs('#navMenu');
  const navLinks = qsa('.navbar__link');

  if (!navToggle || !navMenu) return;

  const toggleMenu = () => {
    navMenu.classList.toggle('navbar__menu--open');
  };

  navToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking a link (better mobile UX)
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('navbar__menu--open');
    });
  });
})();

/* =========================
   SMOOTH SCROLL NAV LINKS
   ========================= */
(function initSmoothScroll() {
  const links = qsa('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = qs(`#${targetId}`);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
})();

/* =========================
   ACTIVE NAV LINK ON SCROLL
   ========================= */
(function initActiveNavOnScroll() {
  const sections = qsa('main section[id]');
  const navLinks = qsa('.navbar__link');

  if (!sections.length || !navLinks.length) return;

  let activeId = null;

  const onScroll = () => {
    const scrollPos = window.scrollY;
    const offset = 90; // navbar height + some margin
    let currentId = null;

    sections.forEach((section) => {
      const top = section.offsetTop - offset;
      if (scrollPos >= top) currentId = section.id;
    });

    if (currentId && currentId !== activeId) {
      activeId = currentId;
      navLinks.forEach((link) => {
        const hrefId = link.getAttribute('href').slice(1);
        if (hrefId === activeId) {
          link.classList.add('navbar__link--active');
        } else {
          link.classList.remove('navbar__link--active');
        }
      });
    }
  };

  window.addEventListener('scroll', onScroll);
  onScroll();
})();

/* =========================
   SCROLL-REVEAL SECTIONS
   ========================= */
(function initScrollReveal() {
  const sections = qsa('main section');

  if (!('IntersectionObserver' in window) || !sections.length) return;

  sections.forEach((sec) => {
    sec.classList.add('section--hidden');
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden');
        obs.unobserve(entry.target);
      });
    },
    {
      root: null,
      threshold: 0.15
    }
  );

  sections.forEach((sec) => observer.observe(sec));
})();

/* =========================
   CONTACT FORM VALIDATION
   ========================= */
(function initContactForm() {
  const form = qs('#contactForm');
  if (!form) return;

  const nameInput = qs('#name');
  const emailInput = qs('#email');
  const messageInput = qs('#message');

  const nameError = qs('#nameError');
  const emailError = qs('#emailError');
  const messageError = qs('#messageError');
  const successBox = qs('#formSuccess');

  const showError = (el, msg) => {
    if (!el) return;
    el.textContent = msg;
  };

  const clearErrors = () => {
    [nameError, emailError, messageError].forEach((el) => {
      if (el) el.textContent = '';
    });
  };

  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value.trim());
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    if (successBox) successBox.style.display = 'none';

    const nameVal = nameInput?.value.trim() || '';
    const emailVal = emailInput?.value.trim() || '';
    const messageVal = messageInput?.value.trim() || '';

    let isValid = true;

    if (!nameVal) {
      showError(nameError, 'Please enter your name.');
      isValid = false;
    }

    if (!emailVal) {
      showError(emailError, 'Please enter your email.');
      isValid = false;
    } else if (!validateEmail(emailVal)) {
      showError(emailError, 'Please enter a valid email address.');
      isValid = false;
    }

    if (!messageVal) {
      showError(messageError, 'Please enter a message.');
      isValid = false;
    } else if (messageVal.length < 10) {
      showError(messageError, 'Message should be at least 10 characters.');
      isValid = false;
    }

    if (!isValid) return;

    // Simulate successful submit (no backend yet)
    form.reset();
    if (successBox) {
      successBox.style.display = 'flex';
    }
  });
})();










