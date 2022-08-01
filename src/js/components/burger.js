document.addEventListener('DOMContentLoaded', function() {

    const menu = document.querySelector('.nav__burger');
    const add = document.querySelector('.burger');
    const remove = document.querySelector('.burger__remove');
   
    add.addEventListener('click', function() {
        menu.classList.add('open');
    });

    remove.addEventListener('click', function() {
        menu.classList.remove('open');
    });

});