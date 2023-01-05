import { generateElement } from "../utils";
import { MenuIconImg } from "../images";

export default function generateNav() {
  const mobileNavBtn = generateElement({
    name: "button",
    properties: { id: "mobile-nav-btn" },
  });
  const mobileNavBtnImg = generateElement({
    name: "img",
    properties: { src: MenuIconImg },
  });

  mobileNavBtn.appendChild(mobileNavBtnImg);
  const nav = generateElement({ name: "nav" });
  const homeBtn = generateElement({
    name: "button",
    properties: { textContent: "Home" },
  });
  homeBtn.setAttribute("data-section", "home");
  const menuBtn = generateElement({
    name: "button",
    properties: { textContent: "Menu" },
  });
  menuBtn.setAttribute("data-section", "menu");
  const contactBtn = generateElement({
    name: "button",
    properties: { textContent: "Contact" },
  });
  contactBtn.setAttribute("data-section", "contact");

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return { mobileNavBtn, nav };
}
