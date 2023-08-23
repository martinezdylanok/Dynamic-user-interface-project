import AUTO_MOVE_FORWARD from "./js_modules/automoveforward.js";
import CHANGE_ELEMENT_STATE from "./js_modules/changeelementstate.js";
import CHANGE_IMAGE from "./js_modules/changeimage.js";
import CHANGE_IMAGE_CAROUSEL_STATUS from "./js_modules/changeimagecarouselstatus.js";
import HAMBURGUER_MENU_DISPLAY from "./js_modules/hamburguermenudisplay.js";

CHANGE_ELEMENT_STATE();
HAMBURGUER_MENU_DISPLAY();
CHANGE_IMAGE_CAROUSEL_STATUS();
CHANGE_IMAGE();
setInterval(AUTO_MOVE_FORWARD, 5000);
