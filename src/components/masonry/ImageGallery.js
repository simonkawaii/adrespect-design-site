import { gallerySwiper } from "../../scripts/swiper.js";

const mountMasonryGallery = (arr) => {
  const masonryExpandedContent = document.querySelector(
    "#masonry--grid__section"
  );
  const galleryPrevButton = document.querySelector(".nav-prev");
  const galleryNextButton = document.querySelector(".nav-next");
  const galleryExitButton = document.querySelector(".exit-popup");
  const swiperPaginationContainer = document.querySelector(".current-img");
  const imageSwiperWrapper = document.querySelector(
    ".image--container .swiper-wrapper"
  );
  const galleryArray = arr.flat();
  let currentImageId;

  const galleryContainer = document.querySelector("#gallery--popup");

  //initialize mutation observer instance and config
  const config = { childList: true, subtree: true };
  const observer = new MutationObserver(callback);

  function togglePopup(node) {
    const currentAriaExpanded = node.getAttribute("aria-hidden");
    const imageContainers = document.querySelectorAll(".macy-item");

    imageContainers.forEach((e) => {
      e.setAttribute("tabindex", currentAriaExpanded === "true" ? "-1" : "0");
    });

    currentAriaExpanded === "true"
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    currentAriaExpanded === "true"
      ? node.setAttribute("aria-hidden", "false")
      : node.setAttribute("aria-hidden", "true");
  }

  function closePopup(node) {
    const currentAriaExpanded = node.getAttribute("aria-hidden");

    currentAriaExpanded === "false" && node.setAttribute("aria-hidden", "true");

    const imageContainers = document.querySelectorAll(".macy-item");

    imageContainers.forEach((e) => {
      e.setAttribute("tabindex", currentAriaExpanded === "true" ? "-1" : "0");
    });

    currentAriaExpanded === "true"
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
  gallerySwiper.on("slideChange", function () {
    let owo = arr.flat()[gallerySwiper.activeIndex].image;

    swiperPaginationContainer.innerText = owo;
  });
  galleryPrevButton.addEventListener("click", () => {
    gallerySwiper.slidePrev();
  });
  galleryNextButton.addEventListener("click", () => {
    gallerySwiper.slideNext();
  });
  galleryExitButton.addEventListener("click", () => {
    closePopup(galleryContainer);
  });

  gallerySwiper.on("slideChange", function () {
    gallerySwiper.isBeginning
      ? galleryPrevButton.classList.add("hidden")
      : galleryPrevButton.classList.remove("hidden");

    gallerySwiper.isEnd
      ? galleryNextButton.classList.add("hidden")
      : galleryNextButton.classList.remove("hidden");
  });
  const createImg = (props) => {
    return `
  <div class="swiper-slide w-full h-full m-auto cursor-grab z-[9999] active:cursor-grabbing">
    <img alt="${props.image}" class='object-contain
    aspect-[9 / 16]
     w-full h-full ' src='./src/assets/masonry/${props.image}' />
     </div> 
     `;
  };

  for (let item of galleryArray) {
    imageSwiperWrapper.innerHTML += createImg(item);
  }
  function mountEventListeners() {
    const imageContainers = document.querySelectorAll(".macy-item");

    for (let item of imageContainers) {
      item.addEventListener("click", (e) => {
        togglePopup(galleryContainer);

        currentImageId = item.id;
        gallerySwiper.activeIndex = currentImageId;
      });

      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          togglePopup(galleryContainer);
        }
      });
    }
  }
  const overlay = galleryContainer.querySelector(".overlay");
  galleryContainer.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closePopup(galleryContainer);
    }
  });

  function callback() {
    mountEventListeners();
  }

  // initial mount
  mountEventListeners();

  //mount observer
  observer.observe(masonryExpandedContent, config);
};

export default mountMasonryGallery;
