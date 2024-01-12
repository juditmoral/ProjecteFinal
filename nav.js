window.onload = function () {
    var checkbox = document.getElementById('check');
    var menuIcon = document.querySelector('.menu-icon');
    var navUl = document.querySelector('ul');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            navUl.classList.add('menu-visible');
            menuIcon.innerHTML = '<img src="imatges/creu2.png" alt="Cerrar menú">';
        } else {
            navUl.classList.remove('menu-visible');
            menuIcon.innerHTML = '<img src="imatges/56763.png" alt="Icono anterior">';
        }
    });

    
};

