// JavaScript to add 'visible' class for scroll animations
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.8;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop) {
            section.classList.add('visible');
        }
    });
});
