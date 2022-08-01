document.addEventListener('DOMContentLoaded', function() {
    const map = document.querySelector('.contacts__map');
    const add = document.querySelector('#map');
    const remove = document.querySelector('.contacts__btn-close');
   
    add.addEventListener('click', function() {
        map.classList.add('open');
    });

    remove.addEventListener('click', function() {
        map.classList.remove('open');
    });
})