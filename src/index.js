import _ from 'lodash';
import './style.css';

import { Header, createHtmlElement } from './header.js';
import { HeroSection } from './hero.js';
import { Footer } from './footer.js';
import { MenuSection } from './menu.js';
import { ContactSection } from './contact.js';

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
