export function generateElement({
  name = "div",
  properties = {},
  classList = [],
}) {
  const el = document.createElement(name);

  for (const name in properties) {
    el[name] = properties[name];
  }

  classList.forEach((className) => el.classList.add(className));
  return el;
}

export function removeAllChildren(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}
