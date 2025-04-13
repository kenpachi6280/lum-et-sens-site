function adjustNavLinks() {
    const navLinks = document.querySelectorAll('a[data-link]');
    const currentPath = window.location.pathname;
  
    // Calcul de la profondeur (combien de / dans le chemin, sauf vide)
    const depth = currentPath.split('/').filter(Boolean).length;
  
    // Construction du préfixe pour revenir à la racine
    let prefix = '';
    for (let i = 1; i < depth; i++) {
      prefix += '../';
    }
  
    navLinks.forEach(link => {
      const file = link.getAttribute('data-link');
  
      // Si le lien est "index.html", on pointe vers la racine du site
      if (file === 'index.html') {
        link.setAttribute('href', prefix + 'index.html');
      } else {
        link.setAttribute('href', prefix + 'html/pages/' + file);
      }
    });
  }
  