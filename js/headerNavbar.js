(function(){
    const header = document.querySelector('.header');
    const headerMenu = document.querySelector('.header__menu');

    const scrollTrigger = header.offsetHeight * 0.25;

    window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > scrollTrigger) {
        headerMenu.style.background = 'linear-gradient(rgba(25, 30, 52, 0.8), rgba(7, 11, 14, 0.2))';
        headerMenu.style.backdropFilter = 'blur(2px)';
    } else {
        headerMenu.style.background = 'transparent';
        headerMenu.style.backdropFilter = 'blur(0px)';
    }
    });

})();