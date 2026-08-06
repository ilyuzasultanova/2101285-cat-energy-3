const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation--open')) {
    navMain.classList.remove('navigation--open');
    navMain.classList.add('navigation--closed');
  } else {
    navMain.classList.add('navigation--open');
    navMain.classList.remove('navigation--closed');
  }
});
