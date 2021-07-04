function headerBurgerMenuToggle() {
    var headerBurgerMenuBtn = document.querySelector('.header__burger-menu');
    var headerNav = document.querySelector('.header-nav');

    headerBurgerMenuBtn.addEventListener('click', function() {
        headerBurgerMenuBtn.classList.toggle('header__burger-menu--active');
        headerNav.classList.toggle('header-nav--open');
    })
}

document.addEventListener("DOMContentLoaded", headerBurgerMenuToggle);