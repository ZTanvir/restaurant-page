import { createHtmlElement } from "./header.js";
import salsicciaImg from "./images/pizza-types/salsiccia.png";
import gamberiImg from "./images/pizza-types/gamberi.png";
import pepeImg from "./images/pizza-types/pepe.png";
import disgustosoImg from "./images/pizza-types/disgustoso.png";
import coloratoImg from "./images/pizza-types/colorato.png";
import pomodoroImg from "./images/pizza-types/pomodoro.png";
import cremaImg from "./images/pizza-types/crema.png";
import carneImg from "./images/pizza-types/carne.png";


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

export { MenuSection };