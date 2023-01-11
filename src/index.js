import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  const head1 = document.getElementById("content");
  console.log(head1);
  return element;
}
function nav() {
  function createHtmlElement(elementType, text) {
    const element = document.createElement(elementType);
    if (text != "") {
      element.textContent = text;
    }
    return element;
  }
  const divEl = createHtmlElement("div", " ");
  const navEl = document.createElement("nav");
  const ulEl = document.createElement("ul");

  const h1El = createHtmlElement("h2", "Header 1");
  divEl.appendChild(h1El);

  const navText = ["Home", "Menu", "Content"];
  for (let i = 0; i < 3; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = navText[i];
    ulEl.appendChild(liEl);
  }
  console.log(ulEl);
  return divEl;
}

document.body.appendChild(component());
document.body.appendChild(nav());
