import GLOBAL_VARIABLES from "./globalVariables.js";
import IMAGE_DISPLAY from "./imageDisplay.js";

const NAV_DOT_HANDLER = (dotIndex) => {
  GLOBAL_VARIABLES.currentIndex = dotIndex;
  IMAGE_DISPLAY(
    GLOBAL_VARIABLES.currentIndex,
    GLOBAL_VARIABLES.IMAGES,
    GLOBAL_VARIABLES.DOTS,
  );
};

export default NAV_DOT_HANDLER;
