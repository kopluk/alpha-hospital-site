import { borderActiveLink } from "./haederLink.js";
import { delHoveredLogo } from "./hoveredLogo.js";

const wrapper = document.querySelector('.wrapper');
const hiddenMenu = document.querySelector('.header__hidden-menu');

// октрытие закрытие скрытого меню

wrapper.addEventListener('click', (event) => {
    if (event.target.closest('.header__menu-button')) {
        hiddenMenu.classList.toggle('closed__hidden-menu');
    }
    if (!event.target.closest('.header__menu-button') && !event.target.closest('.hidden-menu__list')) {
        hiddenMenu.classList.add('closed__hidden-menu');
    }
});


// добавление полоски под меню шапки
borderActiveLink();

// удаляем зафиксированный hover
delHoveredLogo();

// swiper
new Swiper('.possibilities__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
    }
})