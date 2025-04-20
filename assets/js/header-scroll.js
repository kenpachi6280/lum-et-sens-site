function initHeaderScroll() {
  let lastScrollTop = 0;
  let isHidden      = false;
  const header     = document.querySelector('header');
  if (!header) return;

  // throttle avec RAF
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // vers le bas
          header.style.top = `-${header.offsetHeight}px`;
          isHidden = true;
        } else if (scrollTop < lastScrollTop) {
          // vers le haut
          header.style.top = '0';
          isHidden = false;
        }
        lastScrollTop = scrollTop;
        ticking = false;
      });
      ticking = true;
    }
  });

  // souris en haut => montrer
  document.addEventListener('mousemove', e => {
    if (e.clientY <= 50 && isHidden) {
      header.style.top = '0';
      isHidden = false;
    }
  });
}
