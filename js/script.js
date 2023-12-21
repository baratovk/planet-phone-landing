document.addEventListener('DOMContentLoaded', () => {
  var burger = document.querySelector('.menu__burger-open');
  var menu = document.querySelector('.menu');
  var closeBurger = document.querySelector('.menu__burger-close');

  burger.addEventListener('click', function() {
    menu.classList.add('menu__burger--is-active');
  });
  closeBurger.addEventListener('click', function() {
    menu.classList.remove('menu__burger--is-active');
  });
})