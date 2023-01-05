import { generateElement } from "../utils";
import { BackgroundImg } from "../images";

const homeText = {
  heading: "The Ladybug Diner",
  paragraphOne:
    "Established in 1967, the Ladybug Diner has offered delicious foodand family fun for over 60 years.",
  paragraphTwo:
    "Check out our online menu to see what he have to offer. We also deliver!",
  ctaButtonText: "Order now",
};

export default function generateHome() {
  const wrapper = generateElement({
    name: "div",
    classList: ["home-wrapper"],
  });

  wrapper.style.backgroundImage = `url(${BackgroundImg})`;

  const heading = generateElement({
    name: "h2",
    properties: { textContent: homeText.heading },
    classList: ["home_title"],
  });
  const descriptionWrapper = generateElement({
    name: "div",
    classList: ["home_description"],
  });

  const paragraphOne = generateElement({
    name: "p",
    properties: { textContent: homeText.paragraphOne },
  });
  const paragraphTwo = generateElement({
    name: "p",
    properties: { textContent: homeText.paragraphTwo },
  });
  descriptionWrapper.appendChild(paragraphOne);
  descriptionWrapper.appendChild(paragraphTwo);

  const ctaButton = generateElement({
    name: "button",
    properties: { textContent: homeText.ctaButtonText },
    classList: ["home_cta-button"],
  });

  wrapper.appendChild(heading);
  wrapper.appendChild(descriptionWrapper);
  wrapper.appendChild(ctaButton);

  return wrapper;
}
