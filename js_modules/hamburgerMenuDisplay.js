const HAMBURGER_MENU_DISPLAY = () => {
  const MENU_BUTTON = document.querySelector(".another-drop-down-button");

  const BODY = document.querySelector("body");

  MENU_BUTTON.addEventListener("mouseover", () => {
    MENU_BUTTON.classList.add("hovered");
    MENU_BUTTON.addEventListener("mouseout", () => {
      MENU_BUTTON.classList.remove("hovered");
    });
  });

  MENU_BUTTON.addEventListener("click", () => {
    MENU_BUTTON.classList.add("focused");
  });

  BODY.addEventListener("click", (event) => {
    if (event.target !== MENU_BUTTON) {
      MENU_BUTTON.classList.remove("focused");
    }
  });
};

export default HAMBURGER_MENU_DISPLAY;
