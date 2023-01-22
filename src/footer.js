import { createHtmlElement } from "./header.js";

function Footer() {
    const footerDiv = createHtmlElement("footer", "");
    const fText = createHtmlElement("p", "Copyright © 2022 Zahirul");

    // Add class
    footerDiv.classList.add("home", "footer");

    footerDiv.appendChild(fText);

    return footerDiv;
}

export { Footer };