// Fade-in al hacer scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// Animación barras de progreso
const bars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if(rect.top < window.innerHeight){
            bar.style.width = bar.dataset.progress;
        }
    });
});


// Formulario
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formMessage').textContent = 
        "Mensaje enviado correctamente ✅";
    this.reset();
});


// Dark mode
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
