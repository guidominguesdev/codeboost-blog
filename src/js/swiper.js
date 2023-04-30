/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const slidePodcast = new Swiper('.slide-podcast', {
  slidesPerView: 4,
  spaceBetween: 32,
  pagination: {
    el: '.s-podcast .top .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.s-podcast .top .btn-next',
    prevEl: '.s-podcast .top .btn-prev',
  },
  speed: 600,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.1,
    },
    991: {
      slidesPerView: 2.5,
    },
    1100: {
      slidesPerView: 3.5,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
})
