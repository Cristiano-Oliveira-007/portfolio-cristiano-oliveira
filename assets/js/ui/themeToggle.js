const themeBtn = document.getElementById('theme-btn');
const mobileThemeBtn = document.getElementById('mobile-theme-btn');
const dark = document.getElementById('theme-dark');
const light = document.getElementById('theme-light');

function setTheme(mode) {
    const iconDesktop = themeBtn.querySelector('i');
    const iconMobile = mobileThemeBtn?.querySelector('i');

    [iconDesktop, iconMobile].forEach(icon => {
        if (!icon) return;
        icon.classList.add('fade-out');
        setTimeout(() => {
        if (mode === 'light') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
        icon.classList.remove('fade-out');
        }, 150);
    });

    if (mode === 'light') {
        dark.disabled = true;
        light.disabled = false;
        localStorage.setItem('theme', 'light');
    } else {
        dark.disabled = false;
        light.disabled = true;
        localStorage.setItem('theme', 'dark');
    }
}

function toggleTheme() {
    const current = localStorage.getItem('theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
});

themeBtn.addEventListener('click', toggleTheme);
if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);
