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

const options = {
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      console.log(sectionId);
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add('active-link');

      document
        .querySelectorAll(`.nav__link:not([href*=${sectionId}])`)
        ?.forEach((el) => el.classList.remove('active-link'));
    }
  });
}, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => {
  observer.observe(el);
});
