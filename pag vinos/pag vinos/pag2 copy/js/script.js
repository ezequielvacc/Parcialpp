// Variable para controlar si las tarjetas se han mostrado
let cardsShown = false;

// Función para mostrar las tarjetas cuando están en el viewport
function showCardsOnScroll() {
    const cards = document.querySelectorAll('.card');
    if (!cardsShown) {
        cards.forEach((card) => {
            if (isElementInViewport(card)) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
        cardsShown = true; // Marcar las tarjetas como mostradas
    }
}

// Agrega un event listener para detectar el scroll
window.addEventListener('scroll', showCardsOnScroll);

// Llama a la función al cargar la página para verificar las tarjetas iniciales
window.addEventListener('load', showCardsOnScroll);