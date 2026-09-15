// Constante global para el número de WhatsApp (facilita futuras actualizaciones)
const WHATSAPP_NUMBER = "593963612347";

// Redirección a WhatsApp
function contactWhatsApp() {
    const message = encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
}

// Modo Oscuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Aplicar preferencia guardada al cargar la página
if (localStorage.getItem('voltec-theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle?.setAttribute('aria-label', 'Cambiar a modo claro');
}

// ELIMINAR la clase preload-dark del HTML para evitar el conflicto
document.documentElement.classList.remove('preload-dark');

themeToggle?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('voltec-theme', isDark ? 'dark' : 'light');
    themeToggle.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
});

// Envío del formulario
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const whatsappMessage = encodeURIComponent(
        `*Nueva Consulta Web*\n\n👤 *Nombre:* ${name}\n📞 *Teléfono:* ${phone}\n🛠 *Servicio:* ${service}\n💬 *Mensaje:* ${message}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
    
    // Limpiar los campos del formulario después de enviarlo
    e.target.reset();
});

// Lógica del Menú Móvil
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Bloquear/desbloquear el scroll del fondo
    document.body.classList.toggle('no-scroll');
});

// Cerrar menú al hacer clic en móvil
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        // Liberar el scroll del fondo al ir a una sección
        document.body.classList.remove('no-scroll');
    });
});

// Sombra en Navbar al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animaciones Intersection Observer
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(element => revealObserver.observe(element));