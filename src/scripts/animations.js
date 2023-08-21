const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  gsap.fromTo(
    section.children,
    {
      y: "+=50",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,

      duration: 0.7,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
      },
    }
  );
});

function initScrollTriggerAnimation(element, affectElement) {
  TweenMax.fromTo(
    affectElement,
    {
      y: "+=1550",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: element,
        start: "top 150%",
      },
    }
  );
}

export default initScrollTriggerAnimation;
