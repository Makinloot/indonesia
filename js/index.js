// import swiperjs and initialize slider
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

// burger menu
let open = false;
window.onclick = (e) => {
  const openMenu = document.getElementById('menu-btn');
  const menuWrapper = document.getElementById('menu-wrapper');
  let burgerOuter = e.target != menuWrapper;
  
  // if closed and mouse target equals burger icon, open burger menu,
  // if opened and mouse target does not equal burger content, close burger menu.
  if(!open) {
    if(e.target == openMenu) {
      menuWrapper.style.right = '0';
      openMenu.setAttribute('src', './images/opened-menu.png');
      open = true;
    }
  } else if((open && burgerOuter)) {
    menuWrapper.style.right = '-280px';
    openMenu.setAttribute('src', './images/menu.png');
    open = false;
  }
}
