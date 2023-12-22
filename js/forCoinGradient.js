/*скріпт який регулює видимість градієнту на орбіті монет*/

(function() {
    function updateOrbitClass() {
        const coinOrbitElement = document.getElementById('coinOrbit');
        const orbitBottom = coinOrbitElement.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        if (windowWidth <= 574) {
            const coinOrbitTop = coinOrbitElement.getBoundingClientRect().top;
            if (orbitBottom < windowHeight && coinOrbitTop < windowHeight * 0.5) {
                coinOrbitElement.classList.add('active');
            } else {
                coinOrbitElement.classList.remove('active');
            }
        } else {
            if (orbitBottom < windowHeight) {
                coinOrbitElement.classList.add('active');
            } else {
                coinOrbitElement.classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', updateOrbitClass);
    window.addEventListener('load', updateOrbitClass);
    window.addEventListener('resize', updateOrbitClass);
})();



/*(function() {
    window.addEventListener('scroll', function() {
        const coinOrbitElement = document.getElementById('coinOrbit');
        const orbitBottom = coinOrbitElement.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (orbitBottom < windowHeight) {
            coinOrbitElement.classList.add('active');
        } else {
            coinOrbitElement.classList.remove('active');
        }
    });

    window.addEventListener('load', function() {
        const coinOrbitElement = document.getElementById('coinOrbit');
        const orbitBottom = coinOrbitElement.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (orbitBottom < windowHeight) {
            coinOrbitElement.classList.add('active');
        }
    });
})();*/
