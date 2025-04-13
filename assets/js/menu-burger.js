function initBurgerMenu() {
    const burger = document.querySelector('.burger');
    const nav = document.getElementById('main-nav');
  
    if (!burger || !nav) return;
  
    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', !expanded);
      burger.classList.toggle('open');
      nav.classList.toggle('active');
    });
  }
  
  
  