import _ from 'lodash';
import './style.css';
import Img from './images/chef.png';
import locationIm from "./images/restaurant-location.png";
import salsicciaImg from "./images/pizza-types/salsiccia.png";
import gamberiImg from "./images/pizza-types/gamberi.png";
import pepeImg from "./images/pizza-types/pepe.png";
import disgustosoImg from "./images/pizza-types/disgustoso.png";
import coloratoImg from "./images/pizza-types/colorato.png";
import pomodoroImg from "./images/pizza-types/pomodoro.png";
import cremaImg from "./images/pizza-types/crema.png";
import carneImg from "./images/pizza-types/carne.png";


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

    const navText = ["Home", "Menu", "Contact"];
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
function card(img, header2, para) {
    const divEl = document.createElement("div");
    divEl.classList.add("card");
    const pizzaImg = document.createElement("img");
    pizzaImg.src = img;
    const pizzaName = createHtmlElement("h2", header2);
    const pizzaDetails = createHtmlElement("p", para);

    divEl.appendChild(pizzaImg);
    divEl.appendChild(pizzaName);
    divEl.appendChild(pizzaDetails);

    return divEl;
}
function MenuSection() {

    const salsiccia = card(salsicciaImg, "Salsiccia", "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil");
    const gamberi = card(gamberiImg, "Gamberi", "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil");
    const pepe = card(pepeImg, "Pepe", "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil");
    const disgustoso = card(disgustosoImg, "Disgustoso", "Tomato sauce, Bacon, Pineapple, Olives, Basil");
    const colorato = card(coloratoImg, "Colorato", "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil");
    const pomodoro = card(pomodoroImg, "Pomodoro", "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli");
    const crema = card(cremaImg, "Crema", "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil");
    const carne = card(carneImg, "carne", "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli");

    const menuList = document.createElement("div");
    menuList.classList.add("menu-list");
    menuList.appendChild(salsiccia);
    menuList.appendChild(gamberi);
    menuList.appendChild(pepe);
    menuList.appendChild(disgustoso);
    menuList.appendChild(colorato);
    menuList.appendChild(pomodoro);
    menuList.appendChild(crema);
    menuList.appendChild(carne);

    return menuList;
}
function ContactSection() {
    const divEl = createHtmlElement("div", "");
    divEl.classList.add("contact-section");
    const mobileNumber = createHtmlElement("p", "📞 123 456 789")
    mobileNumber.classList.add("mobile-number");
    const address = createHtmlElement("p", "🏠 Hollywood Boulevard 42, Los Angeles, USA")
    address.classList.add("address")
    const locationImg = createHtmlElement("img", "");
    locationImg.src = locationIm;
    locationImg.classList.add("location-img")

    divEl.appendChild(mobileNumber);
    divEl.appendChild(address);
    divEl.appendChild(locationImg);

    return divEl;
}

const contentEl = document.getElementById("content");
contentEl.appendChild(Header());
contentEl.appendChild(HeroSection());
contentEl.appendChild(MenuSection());
contentEl.appendChild(ContactSection());
contentEl.appendChild(Footer());



