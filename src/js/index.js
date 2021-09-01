// импортировал все файлы js присутствующие в проекте.
import * as $ from 'jquery';
import VanillaTilt from 'vanilla-tilt';
import Swiper from 'swiper/swiper-bundle.min.css';

import './function/script-modal-window.js';
import './function/script-modal-html.js';
import './function/btn-order.js';
import './function/base.js';

import '../styles/scss/1-style.scss';
import '../styles/css/1-style.css';
import '../index.html';

$('pre').addClass('code').html(post.toString);

// eye-anim
$(document).querySelector('body').on('mousemove', eyeball);

function eyeball() {
  const eyeAnim = document.querySelectorAll('.content__eye__Anim');
  eyeAnim.forEach(function (eyeAnim) {
    let x = eyeAnim.getBoundingClientRect().left + eyeAnim.clientWidth / 2;
    let y = eyeAnim.getBoundingClientRect().top + eyeAnim.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = radian * (180 / Math.PI) * -1 + 270;
    eyeAnim.style.transform = 'rotate(' + rotation + 'deg)';
  });
}

// vanilla-anim
VanillaTilt.init(
  document.querySelectorAll(
    '.main__prices__wrapper__cards .main__prices__wrapper__cards__card'
  ),
  {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 1,
  }
);

// swiper-anim
swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// =======================================
// import '../index.html';
// import './babel.js';
// import Post from './Post.js';
// const post = new Post('Webpack Post Title', WebpackLogo);
// console.log('Post to String:', post.toString());
