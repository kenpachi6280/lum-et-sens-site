function loadLayout() {
    // Header
    fetch("../../navigation.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
        if (typeof initHeaderScroll === "function") initHeaderScroll();
        if (typeof initBurgerMenu === "function") initBurgerMenu();
        adjustNavLinks();
      });
  
    // Footer
    fetch("../../footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      });
  
    // Désactiver clic droit
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }
  
  // Appel automatique
  document.addEventListener("DOMContentLoaded", loadLayout);
  