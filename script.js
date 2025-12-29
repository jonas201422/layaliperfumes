document.addEventListener("DOMContentLoaded", () => {
    
    // --- Scroll Animation Observer ---
    // Elemente erscheinen sanft, wenn sie ins Bild gescrollt werden
    const observerOptions = {
        threshold: 0.1 // 10% des Elements müssen sichtbar sein
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Observer stoppen nach einmaligem Erscheinen
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    // --- Mobile Menu Toggle ---
    window.toggleMenu = function() {
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('active');
    };
});
