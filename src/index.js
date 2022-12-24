import menuItems from "./menu_items";
import { generateElement } from "./utils";

const root = document.getElementById("root");

menuItems.forEach((menuItem) => {
  const title = generateElement({
    name: "h2",
    properties: { textContent: menuItem.name },
  });
  const desc = generateElement({
    name: "p",
    properties: { textContent: menuItem.desc },
  });
  const img = generateElement({
    name: "img",
    properties: {
      src: menuItem.imgUrl,
      alt: "food item",
    },
  });

  const wrapper = generateElement({ name: "div" });

  wrapper.appendChild(title);
  wrapper.appendChild(desc);
  wrapper.appendChild(img);

  root.appendChild(wrapper);
});
