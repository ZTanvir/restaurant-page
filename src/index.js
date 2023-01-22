import _ from 'lodash';
import './style.css';
import locationIm from "./images/restaurant-location.png";
import salsicciaImg from "./images/pizza-types/salsiccia.png";
import gamberiImg from "./images/pizza-types/gamberi.png";
import pepeImg from "./images/pizza-types/pepe.png";
import disgustosoImg from "./images/pizza-types/disgustoso.png";
import coloratoImg from "./images/pizza-types/colorato.png";
import pomodoroImg from "./images/pizza-types/pomodoro.png";
import cremaImg from "./images/pizza-types/crema.png";
import carneImg from "./images/pizza-types/carne.png";

import { Header, createHtmlElement } from './header.js';
import { HeroSection } from './hero.js';
import { Footer } from './footer.js';
import { MenuSection } from './menu.js';



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

// Render page content based on page


const contentEl = document.getElementById("content");
contentEl.appendChild(Header());
contentEl.appendChild(HeroSection());
contentEl.appendChild(Footer());

// Content Element

const footerEl = document.querySelector(".footer");

// Navigation menu element
const homeEl = document.querySelector(".homenav");
const menuEl = document.querySelector(".menunav");
const contactEl = document.querySelector(".contactnav");

// To add border bottom
homeEl.classList.add("active");

// Remove unnecessary elements
function removeChildElement() {
    const heroSectionEl = document.querySelector(".section");
    const menuSectionEl = document.querySelector(".menu-list");
    const contactSectionEl = document.querySelector(".contact-section");
    if (heroSectionEl != null) { heroSectionEl.remove() };
    if (menuSectionEl != null) { menuSectionEl.remove() };
    if (contactSectionEl != null) { contactSectionEl.remove() };
}

homeEl.addEventListener("click", () => {
    removeChildElement();
    contentEl.insertBefore(HeroSection(), footerEl);
    contentEl.style.height = "100%";
    homeEl.classList.remove("active");
    menuEl.classList.remove("active");
    contactEl.classList.remove("active");
    homeEl.classList.add("active");

})
menuEl.addEventListener("click", () => {
    removeChildElement();
    contentEl.insertBefore(MenuSection(), footerEl);
    contentEl.style.height = "200%";
    homeEl.classList.remove("active");
    menuEl.classList.add("active");
    contactEl.classList.remove("active");
})
contactEl.addEventListener("click", () => {
    removeChildElement();
    contentEl.insertBefore(ContactSection(), footerEl);
    contentEl.style.height = "100%";
    homeEl.classList.remove("active");
    menuEl.classList.remove("active");
    contactEl.classList.add("active");
})
