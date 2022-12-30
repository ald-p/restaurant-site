import {loadHomePage} from "./home";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

const nav = () => {
  const navEl = document.getElementById('nav');

  navEl.innerHTML = `
    <nav class="navbar navbar-expand-md">
      <div class="container nav-load">
        <a href="#" class="navbar-brand text-primary slide-left">Fast<span class="text-success">Break</span></a>
        <button class="navbar-toggler btn btn-primary bg-primary bg-opacity-50 collapsed me-4 p-1" type="button" data-bs-toggle="collapse" data-bs-target="#pages">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="pages">
          <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item ms-3 slide-right-fast">
              <a href="#" 
                 class="btn nav-link text-primary link-success active" 
                 id="home"
                 >HOME</a>
            </li>
            <li class="nav-item ms-3 slide-right-med">
              <a href="#" 
                 class="btn nav-link text-primary link-success" 
                 id="menu" 
                 >MENU</a>
            </li>
            <li class="nav-item ms-3 slide-right-slow">
              <a href="#"
                 class="btn nav-link text-primary link-success" 
                 id="contact" 
                >CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
}

const removeActiveClass = () => {
  const links = document.querySelectorAll('.nav-link');
  links.forEach( link => link.classList.remove('active'));
}

const addActiveClass = (id) => {
  const page = document.getElementById(id);
  page.classList.add('active');
}

const linkEventListeners = () => {
  // link elements
  const homeLink = document.getElementById('home');
  const menuLink = document.getElementById('menu');
  const contactLink = document.getElementById('contact');

  // event listeners
  homeLink.addEventListener('click', loadHomePage, false);
  menuLink.addEventListener('click', loadMenuPage, false);
  contactLink.addEventListener('click', loadContactPage, false);
}

export {nav, removeActiveClass, addActiveClass, linkEventListeners};