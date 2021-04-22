let menu     = document.querySelector('#nav-menu'),
    menu_bar = document.querySelector('#menu-bar');

menu_bar.addEventListener('click', function(){
    menu.classList.toggle('menu-toggle');
})

