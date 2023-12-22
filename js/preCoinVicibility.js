(function () {
    const elements = document.querySelectorAll('.coin__ctyptocurency, .coin__rektcat, .coin__instagram, .coin__usdc, .coin__trader, .coin__tiktok, .coin__youtube, .coin__btc, .coin__eth, .coin__analytic, .coin__website, .coin__telegram, .coin__bloger, .coin__usdt, .coin__nft, .coin__twitter, .coin__spaceman');
    const orbit = document.querySelector('.coin__orbit');

    function updateVisibility() {
        const scrollY = window.scrollY;
        const orbitTop = orbit.offsetTop;
        const orbitHeight = orbit.clientHeight;

        elements.forEach(element => {
            const elementTop = element.offsetTop;
            const elementHeight = element.clientHeight;

            if (scrollY + window.innerHeight < orbitTop + orbitHeight * 0.4) {
                element.style.opacity = '0';
                element.style.transition = 'transform 2s, opacity 2s';
                
            } else {
                element.style.opacity = '1';
                element.style.transition = 'transform 2s, opacity 2s';
                
            }
        });
    }

    window.addEventListener('scroll', updateVisibility);
    updateVisibility();
})();