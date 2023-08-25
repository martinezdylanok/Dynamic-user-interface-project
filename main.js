import AUTO_MOVE_FORWARD from "./js_modules/autoMoveForward.js";
import CHANGE_ELEMENT_STATE from "./js_modules/changeDropDownTitleState.js";
import CHANGE_IMAGE from "./js_modules/changeImage.js";
import CHANGE_IMAGE_CAROUSEL_BUTTON_STATE from "./js_modules/changeImageCarouselButtonState.js";
import CHANGE_NAVIGATION_DOT_STATE from "./js_modules/changeNavDotState.js";
import HAMBURGER_MENU_DISPLAY from "./js_modules/hamburgerMenuDisplay.js";

CHANGE_ELEMENT_STATE();
HAMBURGER_MENU_DISPLAY();
CHANGE_IMAGE_CAROUSEL_BUTTON_STATE();
CHANGE_IMAGE();
setInterval(AUTO_MOVE_FORWARD, 5000);
CHANGE_NAVIGATION_DOT_STATE();
