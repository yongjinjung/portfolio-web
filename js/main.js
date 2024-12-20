function toggleMenu() {
  const $navMenu = document.getElementById('nav-menu');
  $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floatingButton');
  $floatingButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  });
}

function init() {
  const $navToggle = document.querySelector('#nav-toggle');
  $navToggle.addEventListener('click', toggleMenu);

  const $navLinkList = document.querySelectorAll('.nav__link');
  $navLinkList.forEach((el) => {
    el.addEventListener('click', toggleMenu);
  });

  handleFloatingButton();
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

//ScrollReveal
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

//TypeIt
const typeit = new TypeIt('#typeit', {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true,
});

typeit
  .type('안녕하세요! <br />')
  .type('<strong class="home__title-color">코딩 교육 크리에이터</strong><br />')
  .type('YONGJINJUNG')
  .delete(11, { delay: 400 })
  .type('<strong class="home__title-color">짐코딩</strong>입니다!')
  .go();

//이메일 클라이언트 열기
const $form = document.querySelector('#contactForm');
// console.log($form);

$form.addEventListener('submit', function (e) {
  e.preventDefault();

  // 폼 하위 정보를 갖고!
  const name = $form.name.value;
  const subject = $form.subject.value;
  const message = $form.message.value;
  const to = 'jyj1641@gmail.com';

  console.log('name : ', name);
  console.log('subject : ', subject);
  console.log('message : ', message);
  console.log('to : ', to);

  //이메일 클라이언트 열기
  const emailMsg = ``;
  location.href =
    'mailto:' +
    encodeURIComponent(to) +
    '?subject=' +
    encodeURIComponent(`[${name}님의 문의] ${subject}`) +
    '&body=' +
    encodeURIComponent(message);
});
