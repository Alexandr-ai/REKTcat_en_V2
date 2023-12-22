(function() {
    const projects = document.querySelector('.projects');
    const firstBlock = document.querySelector('.projects__first-block');
    const secondBlock = document.querySelector('.projects__second-block');
    const thirdBlock = document.querySelector('.projects__third-block');

    function changeBlockVisibility(blockId) {
        firstBlock.style.opacity = blockId === 'projects__first' ? '1' : '0';
        secondBlock.style.opacity = blockId === 'projects__second' ? '1' : '0';
        thirdBlock.style.opacity = blockId === 'projects__third' ? '1' : '0';
    }

    function handleLinkClick(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        changeBlockVisibility(targetId);
    }


    document.getElementById('link_first').addEventListener('click', handleLinkClick);
    document.getElementById('link_second').addEventListener('click', handleLinkClick);
    document.getElementById('link_third').addEventListener('click', handleLinkClick);

    function updateVisibleBlock() {
        const blockVisibility = window.innerHeight * 0.25;
        const blockVisibility2 = window.innerHeight * 0.5; 
    
        const rect = projects.getBoundingClientRect();
        const middleOfScreen = window.innerHeight / 2;
    
        if (rect.top <= middleOfScreen && rect.bottom >= middleOfScreen) {
            firstBlock.style.transition = 'opacity 1s';
            firstBlock.style.opacity = '1';
            secondBlock.style.transition = 'opacity 1s';
            secondBlock.style.opacity = '0';
            thirdBlock.style.transition = 'opacity 1s';
            thirdBlock.style.opacity = '0';
        }
    
        if (rect.top <= middleOfScreen - blockVisibility && rect.bottom >= middleOfScreen - blockVisibility) {
            firstBlock.style.transition = 'opacity 1s';
            firstBlock.style.opacity = '0';
            secondBlock.style.transition = 'opacity 1s';
            secondBlock.style.opacity = '1';
            thirdBlock.style.transition = 'opacity 1s';
            thirdBlock.style.opacity = '0';
        }
    
        if (rect.top <= middleOfScreen - blockVisibility2 && rect.bottom >= middleOfScreen - blockVisibility2) {
            firstBlock.style.transition = 'opacity 1s';
            firstBlock.style.opacity = '0';
            secondBlock.style.transition = 'opacity 1s';
            secondBlock.style.opacity = '0';
            thirdBlock.style.transition = 'opacity 1s';
            thirdBlock.style.opacity = '1';
        }
    }

    window.addEventListener('scroll', updateVisibleBlock);
    updateVisibleBlock();
})();
