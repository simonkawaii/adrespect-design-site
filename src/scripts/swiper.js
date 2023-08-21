gsap.registerPlugin(ScrollTrigger);
export const mountHeroSwiper = () => {
  const swiperNavigationButtonPrev = document.querySelector(
    "#swiper--navigation--prev"
  );
  const swiperNavigationButtonNext = document.querySelector(
    "#swiper--navigation--next"
  );

  const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "none",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  swiperNavigationButtonNext.addEventListener("click", () => {
    swiper.slideNext();
  });
  swiperNavigationButtonPrev.addEventListener("click", () => {
    swiper.slidePrev();
  });
};

export const gallerySwiper = new Swiper(".gallerySwiper", {
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination-gallery",
    type: "fraction",
  },
});
