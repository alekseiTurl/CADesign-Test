import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".about__swiper", {
  slidesPerView: "1",
  spaceBetween: 20,
  navigation: {
    nextEl: ".about__swiper-button-next",
    prevEl: ".about__swiper-button-prev",
  },
  pagination: {
    el: ".about__swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const breakpoint = window.matchMedia("(min-width:1025px)");

let aboutPannelSwiper;

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (aboutPannelSwiper !== undefined) aboutPannelSwiper.destroy(true, true);

    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};

const enableSwiper = function () {
  aboutPannelSwiper = new Swiper(".about__pannel-swiper", {
    slidesPerView: 2,
    initialSlide: 2,
    spaceBetween: 20,
    slidesPerGroup: 2,
    pagination: {
      el: ".about__pannel-swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
};

breakpoint.addListener(breakpointChecker);

breakpointChecker();
