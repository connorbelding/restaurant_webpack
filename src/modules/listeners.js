import { clearNode } from "../utils";
import { generateHome, generateMenu, generateContact } from "./";
import { CloseIconImg, MenuIconImg } from "../images";

export default function activateListeners() {
  const nav = document.querySelector("nav");
  const mobileNavBtn = document.getElementById("mobile-nav-btn");
  const mobileNavBtnImg = document.querySelector("#mobile-nav-btn img");

  function handleResize() {
    const { innerWidth } = window;
    if (innerWidth <= 700) {
      if (!nav.getAttribute("data-mobile-show")) {
        nav.setAttribute("data-mobile-show", "false");
      }
      if (
        mobileNavBtn.getAttribute("data-mobile-show") === "false" ||
        !mobileNavBtn.getAttribute("data-mobile-show")
      ) {
        mobileNavBtn.setAttribute("data-mobile-show", "true");
      }
    } else {
      if (nav.getAttribute("data-mobile-show")) {
        nav.removeAttribute("data-mobile-show");
      }
      if (
        mobileNavBtn.getAttribute("data-mobile-show") === "true" ||
        !mobileNavBtn.getAttribute("data-mobile-show")
      ) {
        mobileNavBtn.setAttribute("data-mobile-show", "false");
      }
      document.body.style.overflowY = "visible";
      mobileNavBtnImg.src = MenuIconImg;
    }
  }

  window.addEventListener("resize", () => {
    handleResize();
  });

  mobileNavBtn.addEventListener("click", () => {
    if (nav.getAttribute("data-mobile-show") === "true") {
      nav.setAttribute("data-mobile-show", "false");
      document.body.style.overflowY = "visible";
      mobileNavBtnImg.src = MenuIconImg;
    } else {
      nav.setAttribute("data-mobile-show", "true");
      document.body.style.overflowY = "hidden";
      mobileNavBtnImg.src = CloseIconImg;
    }
  });

  handleResize();

  const root = document.getElementById("root");
  const navButtons = document.querySelectorAll("nav button");

  navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const section = e.target.getAttribute("data-section");

      clearNode(root);
      if (section === "home") {
        root.appendChild(generateHome());
      }
      if (section === "menu") {
        root.appendChild(generateMenu());
      }
      if (section === "contact") {
        root.appendChild(generateContact());
      }
      nav.setAttribute("data-mobile-show", "false");
      document.body.style.overflowY = "visible";
      mobileNavBtnImg.src = MenuIconImg;
    });
  });
}
