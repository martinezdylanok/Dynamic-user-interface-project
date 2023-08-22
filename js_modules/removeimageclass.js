const REMOVE_IMAGE_CLASS = () => {
  const IMAGES = document.querySelectorAll("img");

  IMAGES.forEach((IMAGE) => {
    IMAGE.classList.remove("displayed");
  });
};

export default REMOVE_IMAGE_CLASS;
