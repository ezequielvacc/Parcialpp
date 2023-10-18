document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});



