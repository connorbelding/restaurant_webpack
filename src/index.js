import { activateListeners, generateNav, generateHome } from "./modules";
import { generateElement } from "./utils";

const { mobileNavBtn, nav } = generateNav();
const root = generateElement({ name: "div", properties: { id: "root" } });
root.appendChild(generateHome());
document.body.appendChild(mobileNavBtn);
document.body.appendChild(nav);
document.body.appendChild(root);

activateListeners();
