import _ from "lodash";

function component() {
    const element = document.createElement("div");

    // Lodash, now imported by this script
    const head1 = document.getElementById("content");
    console.log(head1);
    return element;
}
function nav() {
    // create html element and insert text to the element
    function createHtmlElement(elementType, text) {
        const element = document.createElement(elementType);
        if (text != "") {
            element.textContent = text;
        }
        return element;
    }

    const divEl = createHtmlElement("div", "");
    const h1El = createHtmlElement("h1", "Crostata");
    const navEl = createHtmlElement("nav", "");
    const ulEl = createHtmlElement("ul", "");

    const navText = ["Home", "Menu", "Content"];
    for (let i = 0; i < 3; i++) {
        const liEl = createHtmlElement("li", "");
        const link = createHtmlElement("a", navText[i]);
        link.href = "#";
        liEl.appendChild(link);
        ulEl.appendChild(liEl);
    }

    divEl.appendChild(h1El);
    navEl.appendChild(ulEl);
    divEl.appendChild(navEl);

    return divEl;
}

// document.body.appendChild(component());
document.body.appendChild(nav());
