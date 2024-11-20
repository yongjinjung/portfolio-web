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

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});
scrollReveal.reveal(
  '.home__data, .about__img, .skills__subtitle, .skills__text',
);
scrollReveal.reveal('.home__img, .about__data', { delay: 400 });
scrollReveal.reveal('.skills__data, .work__link, .contact__input', {
  interval: 200,
});
