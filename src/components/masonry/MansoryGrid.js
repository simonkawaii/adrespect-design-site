import mountMasonryGallery from "./ImageGallery.js";
import { mountMasonryGrid } from "./CreateMasonryGrid.js";
import arr from "./masonryGridData.js";

export const fetchMasonry = () => {
  fetch("./src/components/masonry/masonrySection.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector("#masonry__section").innerHTML = content;
    })
    .then(() => {
      mountMasonryGrid();
    })
    .then(() => {
      mountMasonryGallery(arr);
    });
};
