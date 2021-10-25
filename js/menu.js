var menu = document.querySelector('.menu-abrir');
menu.onclick = function() {
    document.documentElement.classList.add('menu-ativo');
};

var fechar = document.querySelector('.menu-fechar');
fechar.onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};

