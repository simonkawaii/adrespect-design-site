import menuDropdownArray from "./menuDropdownData.js";

const mobileHamburgerMenu = document.querySelector("#mobile--ham__menu ul");
const menuDropdown = document.querySelector("#menu-dropdown");

menuDropdown.innerHTML = `
  <ul
  class="absolute group/drop group-hover/dropdown:grid animate-wiggle origin-top top-[100%] [&>li>a]:px-small [&>li>a]:py-2 [&>li>a]:block min-w-[200px] bg-white left-[-50px] duration-300 hidden" id='menuDropdown-wrapper'></ul>
  `;

const menuDropdownContainer = document.querySelector("#menuDropdown-wrapper");

const renderSubmenu = (submenuItems) => {
  if (!submenuItems) return;

  return submenuItems
    .map((item, index) => {
      return `
        <li key=${index} class=' w-full relative '>
          <a class='block w-full' href="#">${item}</a>
        </li>
      `;
    })
    .join("");
};

const renderList = menuDropdownArray.map(({ title, submenu, id }, index) => {
  const submenuHTML = renderSubmenu(submenu);

  return `
      <li  key=${id} class="group p-small top-0 relative">
        <a >${title}</a>
        ${
          submenu
            ? `<ul class="p-small gap-2  animate-wiggle [&>li>a]:px-small  [&>li>a]:py-2 absolute left-[100%] bg-white top-0 hidden group-hover:grid">
          ${submenuHTML}
        </ul>`
            : ""
        }
      </li>
    `;
});

const renderDropdownList = (node) => {
  for (let item of renderList) {
    node.innerHTML += item;
  }
};

renderDropdownList(menuDropdownContainer);
export default renderDropdownList;
