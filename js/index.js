import "https://unpkg.com/swiper/swiper-bundle.min.js";

const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });