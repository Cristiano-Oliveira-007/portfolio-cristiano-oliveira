document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-btn');
    const mobileNav = document.getElementById('navbar-mobile');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('#navbar-mobile a[href]');
    const ESC_KEY = 'Escape';

    let scrollPosition = 0;
    let closingTimeout = 250;

    function disableScroll() {
    scrollPosition = window.scrollY || window.pageYOffset;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    }

    function enableScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
    }

    function openMenu() {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    disableScroll();
    }

    function closeMenu() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    enableScroll();
    }

    mobileBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);


    document.addEventListener('keydown', (e) => {
    if (e.key === ESC_KEY && mobileNav.classList.contains('active')) {
        closeMenu();
    }
    });


    mobileLinks.forEach(link => {
    link.addEventListener('click', (ev) => {
        const href = link.getAttribute('href');

        if (href && href.startsWith('#')) {
        ev.preventDefault();

        const targetId = href.slice(1);
        const targetEl = document.getElementById(targetId);


        closeMenu();


        setTimeout(() => {
            if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

            try { targetEl.focus({ preventScroll: true }); } catch (e) {}
            } else {

            window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, closingTimeout);

        } else {
        setTimeout(closeMenu, 80);
        }
    });
    });
});
