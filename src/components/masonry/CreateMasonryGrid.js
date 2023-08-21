import arr from "./masonryGridData.js";
import { initScrollTriggerAnimation } from "../../scripts/animations.js";

const mountMasonryGrid = () => {
  const expandMasonryButton = document.querySelector(
    "#masonry__button--expand"
  );
  const masonrySection = document.querySelector("#masonry__section");
  const masonryExpandedContent = document.querySelector(
    "#masonry--grid__section"
  );
  const masonryOverlay = document.querySelector("#masonry__overlay");

  let page = 0;

  const createImg = (props) => {
    const { id, image } = props;

    return `
<a tabindex='0'  id='${id}' class='macy-item overflow-hidden'>
<img alt="${image}" class='object-cover group-hover:scale-110 w-full h-full '
src="https://raw.githubusercontent.com/simonkawaii/adrespect-design-site/main/src/assets/masonry/${props.image}"

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
};

export { mountMasonryGrid };
