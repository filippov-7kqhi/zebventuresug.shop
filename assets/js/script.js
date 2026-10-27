document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const yearEl = document.getElementById('year');
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const closeNav = () => {
    nav.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Menü öffnen');
    document.body.style.overflow = '';
  };

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('active');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      hamburger.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('active')) closeNav();
    });
  }

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const name = form.elements.namedItem('fullname').value.trim();
      const email = form.elements.namedItem('email').value.trim();
      const topic = form.elements.namedItem('topic').value;
      const message = form.elements.namedItem('message').value.trim();
      const subject = `${topic} – ${name}`;
      const body = `${message}\n\n${name}\n${email}`;
      window.location.href = `mailto:info@zebventuresug.shop?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      formNote.textContent = 'Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die vorbereitete Nachricht dort ab.';
    });
  }
});
