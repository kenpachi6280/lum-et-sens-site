document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.carte').forEach(carte => {
        carte.addEventListener('click', () => {
            carte.classList.add('active');
            document.getElementById('overlay').classList.add('active');
        });

        const closeBtn = carte.querySelector('.fermer-carte');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Évite le recliquage
                carte.classList.remove('active');
                document.getElementById('overlay').classList.remove('active');
            });
        }
    });

    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            document.querySelectorAll('.carte.active').forEach(c => c.classList.remove('active'));
            overlay.classList.remove('active');
        });
    }
});
