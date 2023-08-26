const REMOVE_DOT_ID = () => {
  const DOTS = document.querySelectorAll(".navigation-dot");

  DOTS.forEach((DOT) => {
    DOT.removeAttribute("id");
  });
};

export default REMOVE_DOT_ID;
