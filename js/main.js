function toggleMenu() {
  const $navMenu = document.getElementById('nav-menu');
  $navMenu.classList.toggle('show');
}

function init() {
  const $navToggle = document.querySelector('#nav-toggle');
  $navToggle.addEventListener('click', toggleMenu);

  const $navLinkList = document.querySelectorAll('.nav__link');
  $navLinkList.forEach((el) => {
    el.addEventListener('click', toggleMenu);
  });
}

init();
