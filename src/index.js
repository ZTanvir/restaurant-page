import _ from 'lodash';
import './style.css';
import Img from './chef.png';

// create html element and insert text to the element
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

    const navText = ["Home", "Menu", "Content"];
    for (let i = 0; i < 3; i++) {
        const liEl = createHtmlElement("li", navText[i]);
        liEl.classList.add(navText[i].toLowerCase());
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
function HeroSection() {
    const heroDiv = createHtmlElement("section");
    const pBestPizza = createHtmlElement("p", "Best pizza in your country");
    const pBorn = createHtmlElement("p", "Made with passion since 1908");
    const chefImg = createHtmlElement("img");
    const pVisit = createHtmlElement("p", "Order online or visit us!");

    chefImg.src = Img;
    // Add class
    heroDiv.classList.add("home", "section");


    //Inset element to div in hero section
    heroDiv.appendChild(pBestPizza);
    heroDiv.appendChild(pBorn);
    heroDiv.appendChild(chefImg);
    heroDiv.appendChild(pVisit);

    return heroDiv;
}
function Footer() {
    const footerDiv = createHtmlElement("footer", "");
    const fText = createHtmlElement("p", "Copyright © 2022 Zahirul");

    // Add class
    footerDiv.classList.add("home", "footer");

    footerDiv.appendChild(fText);

    return footerDiv;
}
function MenuSection() {

    const card = (img, header2, para) => {
        const divEl = document.createElement("div");
        const pizzaImg = document.createElement("img");
        pizzaImg.src = img;
        const pizzaName = document.createElement("h2");
        pizzaName.textContent = header2;
        const pizzaDetails = document.createElement("p");
        pizzaDetails.textContent = para;

        divEl.appendChild(pizzaImg);
        divEl.appendChild(pizzaName);
        divEl.appendChild(pizzaDetails);

        return divEl;
    }
    // const salsiccia = card(Img, "salsiccia", "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil")

    // const divE = document.createElement("div");
    // divE.appendChild(salsiccia);
    // return divE
}

const contentEl = document.getElementById("content");
contentEl.appendChild(Header());
contentEl.appendChild(HeroSection());
// contentEl.appendChild(MenuSection());
contentEl.appendChild(Footer());



