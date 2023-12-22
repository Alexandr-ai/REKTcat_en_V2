(function(){
    document.getElementById('navbar-toggler').addEventListener('click', function() {
        if (document.getElementById('navbarNav').classList.contains('show')) {
            document.getElementById('header-title').style.display = 'block';
            document.getElementById('header-text').style.display = 'block';
        } else {
            document.getElementById('header-title').style.display = 'none';
            document.getElementById('header-text').style.display = 'none';
        }
    });
    
    document.getElementById('navbarNav').addEventListener('hidden.bs.collapse', function() {
        document.getElementById('header-title').style.display = 'block';
        document.getElementById('header-text').style.display = 'block';
    });
})();