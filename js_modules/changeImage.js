import IMAGE_DISPLAY from "./imageDisplay.js";
import GLOBAL_VARIABLES from "./globalVariables.js";
import AUTO_MOVE_FORWARD from "./autoMoveForward.js";
import NAV_DOT_HANDLER from "./navDotHandler.js";

const CHANGE_IMAGE = () => {
  const CAROUSEL_BUTTON = document.querySelectorAll(".carousel-button");
  let interval = setInterval(AUTO_MOVE_FORWARD, 5000);

  CAROUSEL_BUTTON.forEach((BUTTON) => {
    BUTTON.addEventListener("click", () => {
      clearInterval(interval);
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

      interval = setInterval(AUTO_MOVE_FORWARD, 5000);
    });
  });

  GLOBAL_VARIABLES.DOTS.forEach((DOT, dotIndex) => {
    DOT.addEventListener("click", () => {
      NAV_DOT_HANDLER(dotIndex);
      clearInterval(interval);
      interval = setInterval(AUTO_MOVE_FORWARD, 5000);
    });
  });
};

export default CHANGE_IMAGE;
