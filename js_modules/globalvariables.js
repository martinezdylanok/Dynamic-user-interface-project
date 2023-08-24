class GlobalVariables {
  constructor(currentIndex) {
    this.currentIndex = currentIndex;
    this.IMAGES = document.querySelectorAll("img");
    this.DOTS = document.querySelectorAll(".navigation-dot");
  }
}

const GLOBAL_VARIABLES = new GlobalVariables("0");

export default GLOBAL_VARIABLES;
