var header = document.querySelector('.page-header');
var navMain = header.querySelector('.main-nav');
var navToggle = header.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    header.classList.add('page-header--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    header.classList.remove('page-header--open');
  }
});
