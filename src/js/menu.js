import { addActiveClass, removeActiveClass } from "./nav";
import food1 from "../img/menu/1.png";
import footer from "./footer";

const menu = () => {
  const contentEl = document.getElementById('content');
  const footerEl = document.getElementById('footer');
  footerEl.innerHTML = '';
  const bodyEl = document.querySelector('body');
  bodyEl.classList.remove('home-background');
  bodyEl.classList.add('bg-secondary', 'menu-background');

  let foodList = [];
  for (let i = 0; i < 10; i++) {
    const foodItem = MenuItem('Food1', 'this will be the description of this food.', '$12', food1);
    foodList.push(foodItem);
  }

  const renderFoodList = foodList.map( food => createMenuItem(food)).join('');

  contentEl.innerHTML = `
    <div class="bg-light bg-gradient ">
      <h1 class="text-primary text-center display-4 m-5 pt-4 slide-down-slow">menu</h1>
      <div class="d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-2 g-4" >
        ${renderFoodList}
      </div>
    </div>
    
  `;
}

const loadMenuPage = () => {
  removeActiveClass();
  addActiveClass('menu');
  menu();
}

const MenuItem = (name, desc, price, img) => {
  return {name, desc, price, img};
}

const createMenuItem = ({name, desc, price, img}) => {
  return `
    <div class="card bg-primary m-5 shadow slide-up-fast" style="width: 15rem; padding: 0.75rem; --bs-bg-opacity: 0.99;">
      <img src="${img}" class="card-img-top" style="padding: 1rem">
      <div class="card-body text-dark text-center">
        <h4 class="card-title fs-5 fw-bold">${name}</h4>
        <p class="card-text fs-6">${desc}</p>
        <p class="card-text fs-6 fw-light fst-italic">${price}</p>
      </div>
    </div>`
}

export default loadMenuPage;