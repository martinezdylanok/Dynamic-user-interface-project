import REMOVE_IMAGE_CLASS from "./removeimageclass.js";

const DISPLAY_IMG = () => {
  const IMAGES = document.querySelectorAll("img");

  if (IMAGES[0]) {
    const IMAGE01 = document.getElementById("image-1");
    REMOVE_IMAGE_CLASS();
    IMAGE01.classList.add("displayed");
  } else if (IMAGES[1]) {
    const IMAGE02 = document.getElementById("image-02");
    REMOVE_IMAGE_CLASS();
    IMAGE02.classList.add("displayed");
  } else if (IMAGES[2]) {
    const IMAGE03 = document.getElementById("image-03");
    REMOVE_IMAGE_CLASS();
    IMAGE03.classList.add("displayed");
  } else {
    const IMAGE04 = document.getElementById("image-04");
    REMOVE_IMAGE_CLASS();
    IMAGE04.classList.add("displayed");
  }
};

export default DISPLAY_IMG;
