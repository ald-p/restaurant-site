import { addActiveClass, removeActiveClass } from "./nav";

const menu = () => {
  const contentEl = document.getElementById('content');

  contentEl.innerHTML = `this will be the menu page`
}

const loadMenuPage = () => {
  removeActiveClass();
  addActiveClass('menu');
  menu();
}

export default loadMenuPage;