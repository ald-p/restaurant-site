import '../styles/custombs.scss';
import * as bootstrap from 'bootstrap';
import '../styles/custom_styles.css';
import {loadHomePage, initializeHomePage} from "./home";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

initializeHomePage();

// event listeners
const homeLink = document.getElementById('home');
const menuLink = document.getElementById('menu');
const contactLink = document.getElementById('contact');

homeLink.addEventListener('click', loadHomePage, false);
menuLink.addEventListener('click', loadMenuPage, false);
contactLink.addEventListener('click', loadContactPage, false);



