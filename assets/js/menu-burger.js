function initBurgerMenu() {
  const burger = document.querySelector('.burger');
  const nav    = document.getElementById('main-nav');

  if (!burger || !nav) return;

  // ouv/ferme le menu
  burger.addEventListener('click', () => toggleMenu());

  // ferme sur link click
  nav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => closeMenu())
  );

  // ferme sur Échap
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });

  // ferme sur clic hors menu
  document.addEventListener('click', e => {
    if (
      nav.classList.contains('active') &&
      !nav.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  function toggleMenu() {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    burger.classList.toggle('open');
    nav.classList.toggle('active');
  }

  function closeMenu() {
    burger.setAttribute('aria-expanded', 'false');
    burger.classList.remove('open');
    nav.classList.remove('active');
  }
}
