import { mountComponents } from "./src/scripts/MountApp.js";
import { mountGsapAnimations } from "./src/scripts/animations.js";

let loading = true;

const pageloader = document.querySelector("#page--loader");

window.onload = async () => {
  const myPromise = new Promise((resolve, reject) => {
    mountComponents()
      .then(() => {
        resolve();
        mountGsapAnimations();
      })
      .catch((e) => {});
  });

  await myPromise.then(() => {
    loading = false;
  });

  if (!loading) {
    pageloader.style.opacity = "0";

    setTimeout(() => {
      pageloader.classList.add("hide--loader");
    }, 300);
  }
};
