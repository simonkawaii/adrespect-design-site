export const animateEachChild = ({
  node,
  container,
  duration = 0.5,
  modifier = 0.1,
  position = "top 50%",
}) => {
  node.forEach((section) => {
    let delayIterator = 0.0;

    [...section.children].forEach((element) => {
      delayIterator += modifier;
      gsap.fromTo(
        element,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          duration: duration,
          delay: 0 + delayIterator,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: container ? container : section,
            start: position,
          },
        }
      );
    });
  });
};

const animateImg = (node) => {
  gsap.fromTo(
    node,
    {
      x: "-100%",
      opacity: 0,
    },
    {
      x: "0",
      opacity: 1,
      duration: 0.5,
      ease: "easeOut",
      scrollTrigger: {
        trigger: node,
        start: "top 100%",
      },
    }
  );
};

const animateAll = (nodeContainer, animationFunc) => {
  for (let item of nodeContainer) {
    animationFunc(item);
  }
};

const mountGsapAnimations = async () => {
  const textSections = document.querySelectorAll(".g-text-section");
  const footerSection = document.querySelectorAll(".g-footer-section");
  const cardSection = document.querySelectorAll(".cards-section");
  const cardContainer = document.querySelector("#card-container");
  const images = document.querySelectorAll(".square-img img");

  animateAll(images, animateImg);
  animateEachChild({ node: textSections });

  animateEachChild({
    node: footerSection,
    modifier: 0.2,
    duration: 1,
    position: `top`,
  });

  animateEachChild({
    node: cardSection,
    container: cardContainer,
    duration: 0.1,
    modifier: 0.15,
    position: "top 100%",
  });
};

export { mountGsapAnimations };
