// scrollAnimations.js

const sr = ScrollReveal({
    reset: false,
    distance: '40px',
    duration: 800,
    delay: 100,
    easing: 'ease-out'
});

// ======= PROFILE =======
sr.reveal('.profile .text', {
    origin: 'left',
    distance: '50px',
    duration: 900
});

sr.reveal('.profile .photo', {
    origin: 'right',
    distance: '50px',
    duration: 900,
    delay: 200
});

sr.reveal('.under-line', {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay: 100
});

// ======= PROJECTS =======
sr.reveal('.projects .section-header', {
    origin: 'top',
    distance: '40px',
    duration: 800
});

sr.reveal('.project-card', {
    origin: 'bottom',
    distance: '50px',
    duration: 900,
    interval: 200
});

sr.reveal('.project-image', {
    origin: 'top',
    distance: '30px',
    duration: 700
});

sr.reveal('.project-content', {
    origin: 'bottom',
    distance: '30px',
    duration: 700,
    delay: 100
});

// ======= CAREER =======
sr.reveal('.career .section-header', {
    origin: 'top',
    distance: '40px',
    duration: 800
});

sr.reveal('.accordion-item', {
    origin: 'bottom',
    distance: '50px',
    duration: 900,
    interval: 200
});

sr.reveal('.accordion-header', {
    origin: 'left',
    distance: '40px',
    duration: 700
});

sr.reveal('.accordion-content', {
    origin: 'bottom',
    distance: '40px',
    duration: 700,
    delay: 150
});

// ======= EDUCATION =======
sr.reveal('.education .section-header', {
    origin: 'top',
    distance: '40px',
    duration: 800
});

sr.reveal('.education-item', {
    origin: 'bottom',
    distance: '50px',
    duration: 900,
    interval: 200
});

sr.reveal('.education-item .icon-circle', {
    origin: 'left',
    distance: '30px',
    duration: 700
});

sr.reveal('.education-item .education-content', {
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    delay: 100
});

// ======= CONTACT =======
sr.reveal('.contact .section-header', {
    origin: 'top',
    distance: '40px',
    duration: 800
});

sr.reveal('.contact-form', {
    origin: 'left',
    distance: '50px',
    duration: 900
});

sr.reveal('.contact-info', {
    origin: 'right',
    distance: '50px',
    duration: 900,
    delay: 200
});

sr.reveal('.contact-info .info-item', {
    origin: 'bottom',
    distance: '30px',
    duration: 700,
    interval: 150
});
