// 3) Script amélioré : une seule carte à la fois, delegation, ESC, scroll‑lock
document.addEventListener("DOMContentLoaded", () => {
    const section    = document.getElementById("tarifs");
    const overlay    = document.getElementById("overlay");
    let   activeCarte = null;
  
    function openCarte(carte) {
      if (activeCarte === carte) return;
      if (activeCarte) closeCarte(activeCarte);
      activeCarte = carte;
      carte.classList.add("active");
      carte.setAttribute("aria-expanded", "true");
      overlay.classList.add("active");
      document.body.classList.add("no-scroll");
      carte.focus(); // pour l’accessibilité
    }
  
    function closeCarte(carte) {
      carte.classList.remove("active");
      carte.setAttribute("aria-expanded", "false");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
      if (activeCarte === carte) activeCarte = null;
    }
  
    // Délégation : clic sur une carte
    section.addEventListener("click", e => {
      const carte = e.target.closest(".carte");
      if (!carte) return;
      openCarte(carte);
    });
  
    // Délégation : clic sur bouton fermer
    section.addEventListener("click", e => {
      if (e.target.matches(".fermer-carte")) {
        e.stopPropagation();
        const carte = e.target.closest(".carte");
        closeCarte(carte);
      }
    });
  
    // Clic sur overlay ferme la carte
    overlay.addEventListener("click", () => {
      if (activeCarte) closeCarte(activeCarte);
    });
  
    // Échap pour fermer la carte active
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && activeCarte) {
        closeCarte(activeCarte);
      }
    });
  });
  
