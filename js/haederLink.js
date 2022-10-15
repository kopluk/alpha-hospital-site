const headerMenu = document.querySelector('.header__menu')
const headerLinks = document.querySelectorAll('.header__link')

const home = document.querySelector('#header_home');
const aboutus = document.querySelector('#header_aboutus');
const services = document.querySelector('#header_services');
const pharmacy = document.querySelector('#header_pharmacy');

const borderActiveLink = () => {
    headerMenu.addEventListener('click', (event) => {
        if (event.target.closest('.header__link')) {
            headerLinks.forEach(elem => elem.classList.remove('active__link'))
        }
        
        if (event.target.closest('#header_home')) home.classList.add('active__link');
        if (event.target.closest('#header_aboutus')) aboutus.classList.add('active__link');
        if (event.target.closest('#header_services')) services.classList.add('active__link');
        if (event.target.closest('#header_pharmacy')) pharmacy.classList.add('active__link');
    })
}

export { borderActiveLink };