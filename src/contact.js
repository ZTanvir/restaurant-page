import locationIm from "./images/restaurant-location.png";
import { createHtmlElement } from "./header.js";


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

export { ContactSection };