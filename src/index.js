import _ from 'lodash';
import './style.css';
import Img from './chef.png';

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
function hero() {
    // create html element and insert text to the element
    function createHtmlElement(elementType, text) {
        const element = document.createElement(elementType);
        if (text != "") {
            element.textContent = text;
        }
        return element;
    }
    const heroDiv = createHtmlElement("div");
    const pBestPizza = createHtmlElement("p", "Best pizza in your country");
    const pBorn = createHtmlElement("p", "Made with passion since 1908");
    const chefImg = createHtmlElement("img");
    const pVisit = createHtmlElement("p", "Order online or visit us!");

    chefImg.src = Img;

    //Inset element to div in hero section
    heroDiv.appendChild(pBestPizza);
    heroDiv.appendChild(pBorn);
    heroDiv.appendChild(chefImg);
    heroDiv.appendChild(pVisit);

    return heroDiv;
}

document.body.appendChild(nav());
document.body.appendChild(hero());

