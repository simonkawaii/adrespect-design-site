import cardsContent from "./cardsContent.js";
const cardContainer = document.querySelector("#card-container");

const createCard = (props, node) => {
  const { title, description } = props;

  const div = document.createElement("div");
  const textContainer = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const h3 = document.createElement("h3");
  const link = document.createElement("a");
  const paragraph = document.createElement("p");
  const span = document.createElement("span");

  image.src = `./src/assets/${props.image}.png`;

  h3.innerText = title;
  paragraph.innerText = description;
  link.innerText = "dowiedz sie wiecej";

  node.appendChild(div);
  div.appendChild(imageContainer);
  imageContainer.appendChild(image);
  div.appendChild(textContainer);
  span.innerText = "arrow_forward";

  textContainer.appendChild(h3);
  textContainer.appendChild(paragraph);

  div.appendChild(link);
  link.appendChild(span);
};

const card = (props) => {
  const { title, description } = props;

  return `
    <div class="flex flex-col  justify-between gap-[32px] md:gap-0 ">
    ${
      props.image
        ? `<div class='flex
   
        h-[44px] w-[44px]'>
        
        <img src="./src/assets/${props.image}.png" class="w-full h-full object-contain" alt=${props.image} />
        </div>`
        : ""
    }

    <div>
    <h3 class="text-[28px] py-4">${title}</h3>
    <p class="text-sm">${description}</p>
    </div>
    <a id='card-link' href="" class=" py-1 text-primary    flex items-center gap-2  w-fit border-b border-primary ">dowiedz sie wiecej
    <span id="arrow-offer" class=" transition-transform group-hover:translate-x-4 duration-150   material-symbols-rounded">
    arrow_forward
    </span>
    </a>
    </div>
       `;
};

const renderCards = cardsContent.map((item, index) => {
  const cardHTML = card(item);

  return `
  <div class="flex w-full group  duration-300 flex-1 h-[380px] p-[40px] bg-white rounded-[28px]">
  ${cardHTML}
  </div>
     `;
});

const renderCardsComponent = () => {
  const div = document.createElement("div");

  cardContainer.appendChild(div);

  cardsContent.forEach((e) => {
    createCard(e, div);
  });
};

const renderContent = () => {
  for (let item of renderCards) {
    cardContainer.innerHTML += item;
  }
};
renderContent();

export default renderContent;
