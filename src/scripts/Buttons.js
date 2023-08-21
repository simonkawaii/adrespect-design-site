const createButtonClassList = (variant) => {
  const variantBorder = variant.border
    ? `border-${variant.border} border-[1px] `
    : "";

  const { border, color, fill, hoverBg, hoverColor } = variant;

  const variantStyles = [border, color, fill, hoverBg, hoverColor];

  const classBase = `${
    variant.border ? `border-${variant.border} border-[1px] ` : ""
  } flex cursor-pointer gap-[8px] items-center duration-300 rounded-full px-[24px] py-[12px] w-fit group ${hoverBg} ${hoverColor} ${hoverBg} ${fill}`;

  const className = variantBorder + classBase;

  const validClasses = [...className.split(" ")]
    .map((className) => className)
    .filter(Boolean);

  return validClasses;
};
const createClass = (variant = "primary") => {
  const validate = (smth) => {
    const validClasses = [...smth.split(" ")]
      .map((className) => className)
      .filter(Boolean);

    return validClasses;
  };

  if (variant === "primary") {
    validate(
      `flex cursor-pointer gap-[8px] items-center duration-300 rounded-full px-[24px] py-[12px] w-fit group`
    );
  }
};

const createButtonContent = ({ text, icon }) => {
  return `
    <span>${text}</span>
    ${
      icon
        ? `<span class="material-symbols-rounded">
     ${icon} 
     </span>`
        : ""
    }
  `;
};
const createButton = ({ node, text = "dummy text", icon = "", variant }) => {
  const variantClass = createButtonClassList(variant);

  variantClass.forEach((element) => {
    node.classList.add(element);
  });
  node.innerHTML = createButtonContent({ text, icon });
};

const addClassToButton = (node, variant) => {
  const variantClass = createButtonClassList(variant);

  console.log(variant);

  variantClass.forEach((element) => {
    node.classList.add(element);
  });
};
export { createButton, addClassToButton, createClass };
