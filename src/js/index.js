import '../styles/custombs.scss';
import * as bootstrap from 'bootstrap';
import '../styles/custom_styles.css';
import {loadHomePage, initializeHomePage, btnListeners} from "./home";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";
import { linkEventListeners } from "./nav.js";

//initialize
initializeHomePage();

// link listeners
linkEventListeners();



