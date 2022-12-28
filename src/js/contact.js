import { addActiveClass, removeActiveClass } from "./nav";

const contact = () => {
  const content = document.getElementById('content');

  content.innerHTML = 'this will be the contact page.'
}

const loadContactPage = () => {
  removeActiveClass();
  addActiveClass('contact');
  contact();
}

export default loadContactPage;