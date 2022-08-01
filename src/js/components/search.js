document.addEventListener('DOMContentLoaded', function() {

    const block = document.querySelector('.search__media-container');
    const add = document.querySelector('.header__btn-search');
    const remove = document.querySelector('.search__remove');
   
    add.addEventListener('click', function() {
        block.classList.add('open');
    });

    remove.addEventListener('click', function() {
        block.classList.remove('open');
    });

});