const navButton = document.querySelector('.nav-mobile-button');
const navMobile = document.querySelector('.nav-mobile');
const navList = document.querySelector('.nav-mobile-list')
const body = document.body;

navButton.addEventListener('click', (event) => {
    event.stopPropagation();
    navMobile.classList.toggle('nav-mobile-active');
    navButton.classList.toggle('nav-mobile-button-close');
    body.classList.toggle('no-scroll');
});

navList.addEventListener('click', () => {
    navMobile.classList.toggle('nav-mobile-active');
    navButton.classList.toggle('nav-mobile-button-close');
})

window.addEventListener('click', () => {
    if (body.classList.contains('no-scroll')) {
        body.classList.toggle('no-scroll');
        navMobile.classList.toggle('nav-mobile-active');
        navButton.classList.toggle('nav-mobile-button-close');
    }
})
navMobile.addEventListener('click', (event) => {
    event.stopImmediatePropagation()
})

