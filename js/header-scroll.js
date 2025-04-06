function initHeaderScroll() {
  let lastScrollTop = 0;
  let isHeaderHidden = false;
  const header = document.querySelector("header");

  if (!header) return;

  // Appliquer une transition si ce n’est pas déjà dans ton CSS
  header.style.transition = 'top 0.3s ease';

  // Scroll vers le haut ou le bas
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      // Scroll vers le bas → cacher le header
      header.style.top = "-250px";
      isHeaderHidden = true;
    } else {
      // Scroll vers le haut → montrer le header
      header.style.top = "0";
      isHeaderHidden = false;
    }

    lastScrollTop = scrollTop;
  });

  // Souris passe en haut de l’écran → montrer le header
  document.addEventListener("mousemove", (e) => {
    if (e.clientY <= 50 && isHeaderHidden) {
      header.style.top = "0";
      isHeaderHidden = false;
    }
  });
}
