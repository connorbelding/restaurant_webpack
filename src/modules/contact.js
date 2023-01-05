import { generateElement } from "../utils";

const contactInfo = {
  phone: "(928) 241-6093",
  email: "fakerestaurant@fakeprovider.com",
};

export default function generateContact() {
  const wrapper = generateElement({
    name: "div",
    classList: ["contact-wrapper"],
  });
  const header = generateElement({
    name: "h2",
    properties: { textContent: "Contact Us" },
    classList: ["contact_header"],
  });

  const numberWrapper = generateElement({
    name: "div",
    classList: ["contact_item-wrapper"],
  });
  const numberHeading = generateElement({
    name: "h2",
    properties: { textContent: "Phone number" },
  });
  const numberBody = generateElement({
    name: "p",
    properties: { textContent: contactInfo.phone },
  });

  numberWrapper.appendChild(numberHeading);
  numberWrapper.appendChild(numberBody);

  const emailWrapper = generateElement({
    name: "div",
    classList: ["contact_item-wrapper"],
  });

  const emailHeading = generateElement({
    name: "h2",
    properties: { textContent: "Email" },
  });
  const emailBody = generateElement({
    name: "p",
    properties: { textContent: contactInfo.email },
  });

  emailWrapper.appendChild(emailHeading);
  emailWrapper.appendChild(emailBody);

  wrapper.appendChild(header);
  wrapper.appendChild(numberWrapper);
  wrapper.appendChild(emailWrapper);

  return wrapper;
}
