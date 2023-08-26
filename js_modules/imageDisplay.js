import REMOVE_DOT_ID from "./removeDotId.js";
import REMOVE_IMAGE_CLASS from "./removeImageClass.js";

const IMAGE_DISPLAY = (currentIndex, IMAGES, DOTS) => {
  REMOVE_IMAGE_CLASS();
  REMOVE_DOT_ID();

  if (IMAGES[currentIndex] && DOTS[currentIndex]) {
    IMAGES[currentIndex].classList.add("displayed");
    DOTS[currentIndex].id = "focused-dot";
  }
};

export default IMAGE_DISPLAY;
