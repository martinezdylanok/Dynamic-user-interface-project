const CHANGE_IMAGE_CAROUSEL_STATUS = () => {
  const IMAGE_CAROUSEL_BUTTON = document.querySelector(
    ".image-carousel-button",
  );

  const BODY = document.querySelector("body");

  IMAGE_CAROUSEL_BUTTON.addEventListener("mouseover", () => {
    IMAGE_CAROUSEL_BUTTON.classList.add("hovered");
    IMAGE_CAROUSEL_BUTTON.addEventListener("mouseout", () => {
      IMAGE_CAROUSEL_BUTTON.classList.remove("hovered");
    });
  });

  IMAGE_CAROUSEL_BUTTON.addEventListener("click", () => {
    IMAGE_CAROUSEL_BUTTON.classList.add("focused");
  });

  BODY.addEventListener("click", (event) => {
    if (event.target !== IMAGE_CAROUSEL_BUTTON) {
      IMAGE_CAROUSEL_BUTTON.classList.remove("focused");
    }
  });
};

export default CHANGE_IMAGE_CAROUSEL_STATUS;