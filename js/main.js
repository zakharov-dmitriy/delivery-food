$(function () {


});

const cartButton = document.querySelector('.cart-btn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-btn');

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal() {
   modal.classList.toggle('modal--active');
}

new WOW().init();
