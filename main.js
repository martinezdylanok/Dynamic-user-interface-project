import CHANGE_ELEMENT_STATE from "./js_modules/changeDropDownTitleState.js";
import CHANGE_ANOTHER_DROP_DOWN_BUTTON_STATE from "./js_modules/changeAnotherDropDownButtonState.js";
import CHANGE_IMAGE_CAROUSEL_BUTTON_STATE from "./js_modules/changeImageCarouselButtonState.js";
import CHANGE_NAVIGATION_DOT_STATE from "./js_modules/changeNavDotState.js";
import CHANGE_IMAGE from "./js_modules/changeImage.js";
import AUTO_MOVE_FORWARD from "./js_modules/autoMoveForward.js";

CHANGE_ELEMENT_STATE();
CHANGE_ANOTHER_DROP_DOWN_BUTTON_STATE();
CHANGE_IMAGE_CAROUSEL_BUTTON_STATE();
CHANGE_NAVIGATION_DOT_STATE();
CHANGE_IMAGE();
setInterval(AUTO_MOVE_FORWARD, 5000);
