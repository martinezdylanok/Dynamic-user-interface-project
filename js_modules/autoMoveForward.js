import IMAGE_DISPLAY from "./imageDisplay.js";
import GLOBAL_VARIABLES from "./globalVariables.js";

const AUTO_MOVE_FORWARD = () => {
  GLOBAL_VARIABLES.currentIndex =
    (GLOBAL_VARIABLES.currentIndex + 1) % GLOBAL_VARIABLES.IMAGES.length;

  IMAGE_DISPLAY(
    GLOBAL_VARIABLES.currentIndex,
    GLOBAL_VARIABLES.IMAGES,
    GLOBAL_VARIABLES.DOTS,
  );
};

export default AUTO_MOVE_FORWARD;
