import IMAGE_DISPLAY from "./imageDisplay.js";
import GLOBAL_VARIABLES from "./globalVariables.js";

const CHANGE_IMAGE = () => {
  const CAROUSEL_BUTTON = document.querySelectorAll(
    ".image-carousel .carousel-button",
  );

  CAROUSEL_BUTTON.forEach((BUTTON) => {
    BUTTON.addEventListener("click", () => {
      if (BUTTON.id === "next-image") {
        GLOBAL_VARIABLES.currentIndex =
          (GLOBAL_VARIABLES.currentIndex + 1) % GLOBAL_VARIABLES.IMAGES.length;
      } else {
        GLOBAL_VARIABLES.currentIndex =
          (GLOBAL_VARIABLES.currentIndex - 1 + GLOBAL_VARIABLES.IMAGES.length) %
          GLOBAL_VARIABLES.IMAGES.length;
      }

      IMAGE_DISPLAY(
        GLOBAL_VARIABLES.currentIndex,
        GLOBAL_VARIABLES.IMAGES,
        GLOBAL_VARIABLES.DOTS,
      );
    });
  });
};

export default CHANGE_IMAGE;
