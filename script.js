// Carrusel de imágenes
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg'
];

let currentIndex = 0;
const carruselImg = document.getElementById('carrusel-img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

if (carruselImg && prevBtn && nextBtn) {
    function updateImage() {
        carruselImg.src = images[currentIndex];
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    // Auto-play opcional
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 10000);
}

// Formulario de contacto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensaje enviado. Gracias por contactarnos.');
        contactForm.reset();
    });
}