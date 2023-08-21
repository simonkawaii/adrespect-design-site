import { mountDesktopMenuDropdown } from "../components/header/MenuList";
import { mountHeaderContent } from "../components/header/mountHeader";
import { fetchMasonry } from "../components/masonry/MansoryGrid";
import { mountLogos } from "./logo";
import { mountHeroSwiper } from "./swiper";

export const mountComponents = () => {
  return Promise.all([
    fetch("./src/components/footer/footer.html")
      .then((response) => response.text())
      .then((content) => {
        document.querySelector("footer").innerHTML = content;
      })
      .catch((e) => {
        console.log(e);
      }),

    fetch("./src/components/newsletter/newsletter.html")
      .then((response) => response.text())
      .then((content) => {
        document.querySelector("#newsletter").innerHTML = content;
      })
      .catch((e) => {
        console.log(e);
      }),

    fetch("./src/components/about/aboutBrandSection.html")
      .then((response) => response.text())
      .then((content) => {
        document.querySelector("#about--brand__section").innerHTML = content;
      })
      .catch((e) => {
        console.log(e);
      }),

    fetch("./src/components/header/header.html")
      .then((response) => response.text())
      .then((content) => {
        document.querySelector("#header").innerHTML = content;
      })
      .then(() => {
        mountDesktopMenuDropdown();
        mountLogos();
        fetch("./src/components/header/menu.html")
          .then((response) => response.text())
          .then((content) => {
            document.querySelector("#mobileDropdownContainer").innerHTML =
              content;
          })
          .then(() => {
            mountHeaderContent();
          })
          .catch((e) => {
            console.log(e);
          }),
          fetch("./src/components/header/heroSection.html")
            .then((response) => response.text())
            .then((content) => {
              document.querySelector("#hero--section").innerHTML = content;
            })
            .then(() => {
              mountHeroSwiper();
            })
            .catch((e) => {
              console.log(e);
            });
      }),

    fetchMasonry(),
  ]);
};