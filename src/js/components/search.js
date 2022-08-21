document.addEventListener('DOMContentLoaded', function() {

    const block = document.querySelector('.header__search-media-container');
    const add = document.querySelector('.header__btn-search');
    const remove = document.querySelector('.header__search-remove');
   
    add.addEventListener('click', function() {
        block.classList.add('open');
    });

    remove.addEventListener('click', function() {
        block.classList.remove('open');
    });

});