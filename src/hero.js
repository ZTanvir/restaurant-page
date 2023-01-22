import { createHtmlElement } from "./header.js";
import Img from './images/chef.png';


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

export { HeroSection };