const CHANGE_NAVIGATION_DOT_STATE = () => {
  const NAVIGATION_DOTS = document.querySelectorAll(".navigation-dot");

  const BODY = document.querySelector("body");

  NAVIGATION_DOTS.forEach((DOT) => {
    DOT.addEventListener("mouseover", () => {
      DOT.id = "hovered-dot";
      DOT.addEventListener("mouseout", () => {
        DOT.removeAttribute("id");
      });
    });

    DOT.addEventListener("click", () => {
      DOT.id("focused-dot");
    });

    BODY.addEventListener("click", (event) => {
      if (event.target !== DOT) {
        DOT.removeAttribute("focused-dot");
      }
    });
  });
};

export default CHANGE_NAVIGATION_DOT_STATE;
