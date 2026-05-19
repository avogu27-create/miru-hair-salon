// ===========================================
// MIRU — shared interactions
// ===========================================

// drawer open/close
function initNav() {
  const navBtn = document.querySelector('.nav-btn');
  const drawer = document.querySelector('.drawer');
  const closeBtn = document.querySelector('.drawer-close');
  if (!navBtn || !drawer) return;

  const open = () => { drawer.classList.add('open'); navBtn.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { drawer.classList.remove('open'); navBtn.classList.remove('open'); document.body.style.overflow = ''; };

  navBtn.addEventListener('click', () => {
    if (drawer.classList.contains('open')) close(); else open();
  });
  if (closeBtn) closeBtn.addEventListener('click', close);
}

// fade in on scroll
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
});
