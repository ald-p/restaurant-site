import { addActiveClass, nav, removeActiveClass } from './nav';
import footer from './footer';
import loadMenuPage from './menu';
import loadContactPage from './contact';

const home = () => {
  const contentEl = document.getElementById('content');
  const bodyEl = document.querySelector('body');
  bodyEl.classList.add('home-background');

  contentEl.innerHTML = `
    <section class="text-primary h-50 px-lg-5 mx-lg-5 mt-5 pt-5 page-load">
      <div class="container text-center h-100">
        <div class="d-flex flex-column align-items-center justify-content-center h-100">
          <h1 class="p-2 fw-bold slide-up-fast">Food to break your fast.</h1>
          <p class="p-2 px-5 fw-light slide-up-slow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div class="d-lg-flex align-items-center justify-content-center">
            <button class="btn btn-outline-success text-primary home-page-btn mx-5 my-3 slide-left">MENU</button>
            <button class="btn btn-outline-success text-primary home-page-btn mx-5 my-3 slide-right-med">RESERVATIONS</button>
          </div>
        </div>
      </div>
    </section>  
  `;

  btnListeners(loadMenuPage, loadContactPage);
}

const loadHomePage = () => {
  removeActiveClass();
  addActiveClass('home');
  home();
}

const initializeHomePage = () => {
  nav();
  home();
  footer();
}

const btnListeners = (menuFunc, contactFunc) => {
  const homeBtns = document.querySelectorAll('.home-page-btn');
  homeBtns[0].addEventListener('click', menuFunc, false);
  homeBtns[1].addEventListener('click', contactFunc, false);
}

export {loadHomePage, initializeHomePage, btnListeners};