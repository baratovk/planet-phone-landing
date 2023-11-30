document.addEventListener('DOMContentLoaded', () => {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  var closeBurger = document.querySelector('.burger-close');

  burger.addEventListener('click', function() {
    menu.classList.add('active');
  });
  closeBurger.addEventListener('click', function() {
    menu.classList.remove('active');
  });
})