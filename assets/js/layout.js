function loadLayout() {
  // Charger le header
  fetch("navigation.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      if (typeof initHeaderScroll === "function") initHeaderScroll();
      if (typeof initBurgerMenu === "function") initBurgerMenu();
    });

  // Charger le footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

  // Désactiver clic droit
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
}

// Appel automatique quand le DOM est prêt
document.addEventListener("DOMContentLoaded", loadLayout);
