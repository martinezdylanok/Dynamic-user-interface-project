import DISPLAY_IMG from "./displayimage.js";
import GLOBAL_VARIABLES from "./globalvariables.js";

const AUTO_MOVE_FORWARD = () => {
  GLOBAL_VARIABLES.currentIndex =
    (GLOBAL_VARIABLES.currentIndex + 1) % GLOBAL_VARIABLES.IMAGES.length;

  DISPLAY_IMG(GLOBAL_VARIABLES.currentIndex, GLOBAL_VARIABLES.IMAGES);
};

export default AUTO_MOVE_FORWARD;
