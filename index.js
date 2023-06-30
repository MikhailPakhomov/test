const navButton = document.querySelector('.nav-mobile-button');
const navMobile = document.querySelector('.nav-mobile');
const navItem = document.querySelector('.nav-mobile-item')
// const a = document.querySelector('.nav-mobile-active');
// console.log(a);
navButton.addEventListener('click', () => {
    navMobile.classList.toggle('nav-mobile-active');
    navButton.classList.toggle('nav-mobile-button-close');
});

navItem.addEventListener('click', () => {
    navMobile.classList.toggle('nav-mobile-active');
})


