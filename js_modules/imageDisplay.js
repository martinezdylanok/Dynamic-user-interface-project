import REMOVE_IMAGE_CLASS from "./removeImageClass.js";

const IMAGE_DISPLAY = (currentIndex, IMAGES) => {
  REMOVE_IMAGE_CLASS();

  if (IMAGES[currentIndex]) {
    IMAGES[currentIndex].classList.add("displayed");
  }
};

export default IMAGE_DISPLAY;
