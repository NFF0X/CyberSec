 const burger = document.getElementById('burger');
        const menu = document.getElementById('menu');
        burger.addEventListener('click', () => {
            const open = menu.classList.toggle('open');
            burger.setAttribute('aria-expanded', open);
        });