(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({
                behavior: reduceMotion ? 'auto' : 'smooth',
                block: 'start'
            });
            if (!target.hasAttribute('tabindex') && !target.matches('a, button, input, select, textarea')) {
                target.setAttribute('tabindex', '-1');
                target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
            }
            target.focus({ preventScroll: true });
        });
    });

    const nav = document.querySelector('.navbar');
    if (nav && !reduceMotion) {
        let lastStateY = window.scrollY;
        let hidden = false;
        let ticking = false;

        const update = () => {
            const y = window.scrollY;
            const delta = y - lastStateY;
            if (y < 120) {
                if (hidden) { nav.classList.remove('is-hidden'); hidden = false; }
                lastStateY = y;
            } else if (!hidden && delta > 6) {
                nav.classList.add('is-hidden');
                hidden = true;
                lastStateY = y;
            } else if (hidden && delta < -6) {
                nav.classList.remove('is-hidden');
                hidden = false;
                lastStateY = y;
            }
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        }, { passive: true });
    }

    const year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
})();
