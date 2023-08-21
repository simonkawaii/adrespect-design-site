import initScrollTriggerAnimation from "../../scripts/animations.js";

const expandMasonryButton = document.querySelector("#masonry__button--expand");
const masonrySection = document.querySelector("#masonry__section");
const masonryExpandedContent = document.querySelector(
  "#masonry--grid__section"
);
const masonryOverlay = document.querySelector("#masonry__overlay");

let page = 0;

export const arr = [
  [
    {
      id: 0,
      image: "Photo-8.jpg",
    },
    {
      id: 1,
      image: "Photo-7.jpg",
    },
    {
      id: 2,
      image: "Photo-6.jpg",
    },
    {
      id: 3,
      image: "Photo-4.jpg",
    },
    {
      id: 4,
      image: "Photo-3.jpg",
    },
    {
      id: 5,
      image: "Photo-5.jpg",
    },
    {
      id: 6,
      image: "Photo-1.jpg",
    },
    {
      id: 7,
      image: "Photo-2.jpg",
    },
    {
      id: 8,
      image: "Photo.jpg",
    },
  ],
  [
    {
      id: 9,
      image: "Photo-8.jpg",
    },
    {
      id: 10,
      image: "Photo-7.jpg",
    },
    {
      id: 11,
      image: "Photo-6.jpg",
    },
    {
      id: 12,
      image: "Photo-4.jpg",
    },
    {
      id: 13,
      image: "Photo-3.jpg",
    },
    {
      id: 14,
      image: "Photo-5.jpg",
    },
    {
      id: 15,
      image: "Photo-1.jpg",
    },
    {
      id: 16,
      image: "Photo-2.jpg",
    },
    {
      id: 17,
      image: "Photo.jpg",
    },
  ],
];

const createImg = (props) => {
  const { id, image } = props;

  return `
  <a tabindex='0'  id='${id}' class='macy-item overflow-hidden'>
  <img alt="${image}" class='object-cover group-hover:scale-110 w-full h-full ' src='/masonry/${image}' />
  </a>
  `;
};
initScrollTriggerAnimation(masonrySection, masonryExpandedContent);
renderMasonryGrid(page);

function renderMasonryGrid(page = 0) {
  arr[page]?.map((item) => {
    masonryExpandedContent.innerHTML += createImg(item);
  });
}
const macyInstance = Macy({
  container: "#masonry--grid__section",
  mobileFirst: true,
  columns: 2,
  trueOrder: false,
  waitForImages: false,
  breakAt: {
    768: {
      columns: 3,
      margin: {
        x: 40,
        y: 40,
      },
    },
    624: {
      columns: 2,
      margin: {
        x: 20,
        y: 20,
      },
    },
    400: {
      columns: 2,
      margin: {
        x: 8,
        y: 8,
      },
    },
  },
  margin: {
    x: 8,
    y: 8,
  },
});

expandMasonryButton.onclick = () => {
  page = page + 1;

  if (arr[page]) {
    renderMasonryGrid(page);

    macyInstance.recalculate();
    macyInstance.reInit();
  }
  if (!arr[page + 1]?.length) {
    masonryOverlay.style.display = "none";
  }
};

macyInstance.runOnImageLoad(function () {
  macyInstance.recalculate();
});
