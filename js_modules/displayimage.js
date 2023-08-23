import REMOVE_IMAGE_CLASS from "./removeimageclass.js";

const DISPLAY_IMG = (currentIndex) => {
  const IMAGES = document.querySelectorAll("img");
  REMOVE_IMAGE_CLASS();

  if (IMAGES[currentIndex]) {
    IMAGES[currentIndex].classList.add("displayed");
  }
};

export default DISPLAY_IMG;
