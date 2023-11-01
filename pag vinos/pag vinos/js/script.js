document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            // Cuando el menú está activo, muestra el fondo oscurecido
            document.body.appendChild(overlay);
            setTimeout(() => {
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'auto';
            }, 10);
        } else {
            // Cuando el menú se desactiva, oculta el fondo oscurecido
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
    });

    // Cierra el menú cuando se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove('active');
            // Cuando el menú se cierra, oculta el fondo oscurecido
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
    });
});
/*volver */
// Función para mostrar u ocultar el botón basado en la posición de desplazamiento
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.opacity = "1";
        
    } else {
        document.getElementById("scrollToTopBtn").style.opacity = "0";
        
    }
};

// Función para desplazarse al principio de la página
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



