class GlobalVariables {
  constructor(currentIndex) {
    this.currentIndex = currentIndex;
    this.IMAGES = document.querySelectorAll("img");
  }
}

const GLOBAL_VARIABLES = new GlobalVariables("0");

export default GLOBAL_VARIABLES;
