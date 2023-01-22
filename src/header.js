function createHtmlElement(elementType, text) {
    const element = document.createElement(elementType);
    if (text != "") {
        element.textContent = text;
    }
    return element;
}
function Header() {
    const divEl = createHtmlElement("header", "");
    const h1El = createHtmlElement("h1", "Crostata");
    const navEl = createHtmlElement("nav", "");
    const ulEl = createHtmlElement("ul", "");

    const navText = ["Home", "Menu", "Contact"];
    for (let i = 0; i < 3; i++) {
        const liEl = createHtmlElement("li", navText[i]);
        liEl.classList.add(navText[i].toLowerCase() + "nav");
        ulEl.appendChild(liEl);
    }

    // Add class
    divEl.classList.add("home", "header");

    // insert element inside to parent header element
    divEl.appendChild(h1El);
    navEl.appendChild(ulEl);
    divEl.appendChild(navEl);

    return divEl;
}
export { createHtmlElement, Header };