import _ from 'lodash';
import './style.css';
// import { createHtmlElement, Header } from './index.js';

// console.log(Header());
function component() {
    console.log("menu");
    const div = document.createElement("div");
    div.textContent = "sdsd";
    return div;
}
document.body.appendChild(component())
// document.body.appendChild(Header())