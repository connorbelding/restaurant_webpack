import { generateElement } from "../utils";
import menuItems from "../menu-items";

export default function generateMenu() {
  const wrapper = generateElement({
    name: "div",
    classList: ["menu-wrapper"],
  });

  menuItems.forEach((item) => {
    const itemWrapper = generateElement({
      name: "div",
      classList: ["menu_item-wrapper"],
    });
    const itemImg = generateElement({
      name: "img",
      properties: { src: item.imgUrl },
    });
    const itemTextWrapper = generateElement({
      name: "div",
      classList: ["menu_item-text-wrapper"],
    });
    const itemHeading = generateElement({
      name: "h3",
      properties: { textContent: item.name },
      classList: ["menu_item-heading"],
    });
    const itemDescription = generateElement({
      name: "p",
      properties: { textContent: item.description },
      classList: ["menu_item-description"],
    });
    const itemPrice = generateElement({
      name: "p",
      properties: { textContent: `$${item.price}` },
      classList: ["menu_item-price"],
    });

    itemTextWrapper.appendChild(itemHeading);
    itemTextWrapper.appendChild(itemDescription);
    itemTextWrapper.appendChild(itemPrice);

    itemWrapper.appendChild(itemImg);
    itemWrapper.appendChild(itemTextWrapper);

    wrapper.appendChild(itemWrapper);
  });
  return wrapper;
}
