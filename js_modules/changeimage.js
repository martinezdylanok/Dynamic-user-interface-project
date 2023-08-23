import DISPLAY_IMG from "./displayimage.js";

const CHANGE_IMAGE = () => {
  const CAROUSEL_BUTTON = document.querySelectorAll(
    ".image-carousel .carousel-button",
  );
  const IMAGES = document.querySelectorAll("img");
  let currentIndex = 0;

  CAROUSEL_BUTTON.forEach((BUTTON) => {
    BUTTON.addEventListener("click", () => {
      if (BUTTON.id === "next-image") {
        currentIndex = (currentIndex + 1) % IMAGES.length;
      } else {
        currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
      }

      DISPLAY_IMG(currentIndex);
    });
  });
};

export default CHANGE_IMAGE;
