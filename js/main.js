/* ============================================================
   Jiaqi Li Portfolio — Interactions
   ============================================================ */

(function () {
  'use strict';

  // ---------- Nav: Scroll effect ----------
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-links a');

  function handleScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    updateActiveNav();
  }

  // ---------- Active nav link on scroll ----------
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (!link) return;

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
    });
  });

  // ---------- Scroll Reveal ----------
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---------- Smooth scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---------- Stagger hero children on load ----------
  window.addEventListener('load', () => {
    const heroReveals = document.querySelectorAll('.hero .reveal');
    heroReveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 150 + i * 120);
    });
  });

  // ---------- Experience Case Expand Toggle ----------
  const expCases = document.querySelectorAll('.exp-case');
  expCases.forEach(caseEl => {
    const toggleBtn = caseEl.querySelector('.exp-case-toggle');
    const header = caseEl.querySelector('.exp-case-header');
    
    function toggleCase() {
      const isOpen = caseEl.classList.contains('open');
      // Close all others (optional - keep all openable)
      // expCases.forEach(c => c.classList.remove('open'));
      caseEl.classList.toggle('open');
    }
    
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCase();
      });
    }
    if (header) {
      header.style.cursor = 'pointer';
      header.addEventListener('click', toggleCase);
    }
  });

  // ---------- Initialize on DOM ready ----------
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

})();
