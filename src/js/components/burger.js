document.addEventListener('DOMContentLoaded', function() {

    const menu = document.querySelector('.header__burger-container');
    const add = document.querySelector('.header__burger');
    const remove = document.querySelector('.header__burger-remove');
   
    add.addEventListener('click', function() {
        menu.classList.add('open');
    });

    remove.addEventListener('click', function() {
        menu.classList.remove('open');
    });

});