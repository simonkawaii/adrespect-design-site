import { renderBrandLogo, renderProviderLogo } from "./src/scripts/logo";

const searchSubmit = document.querySelectorAll(".submit--search");
const searchInput = document.querySelectorAll(".search--input");
const mobileHamburgerMenu = document.querySelector("#mobile--ham__menu");
const mobileMenuButton = document.querySelector("#menu--mobile__button");
const mobilemenuCheckboxes = document.querySelectorAll(
  "#mobileDropdownContainer li input[type=checkbox]"
);

mobileMenuButton.addEventListener("click", () => {
  const currentAriaExpanded = mobileHamburgerMenu.getAttribute("aria-expanded");

  currentAriaExpanded === "false" &&
    mobilemenuCheckboxes.forEach((e) => (e.checked = false));

  currentAriaExpanded === "true"
    ? mobileHamburgerMenu.setAttribute("aria-expanded", "false")
    : mobileHamburgerMenu.setAttribute("aria-expanded", "true");
});

for (let item of searchSubmit) {
  item.addEventListener("click", () => {
    //made for presentation purposes only
    //in actual website should have been sanitized etc
    console.log("searching... ");
  });
}

for (let item of searchInput) {
  ["keyup", "change"].forEach((evt) => {
    item.addEventListener(evt, (e) => {
      const inputValue = e.target.value;
      if (!inputValue) {
        item.classList.add("blank");
      } else {
        item.classList.remove("blank");
      }
    });
  });
}

renderBrandLogo();
renderProviderLogo();
