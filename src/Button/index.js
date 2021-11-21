import htmlToElement from '../utils/htmlToElement';
import ButtonHtml from './index.html';
import './index.scss';

const Button = ({ onClick, title, className }) => {
  const buttonElement = htmlToElement(ButtonHtml);
  buttonElement.innerHTML = title;
  buttonElement.classList.add(className);
  buttonElement.addEventListener('click', onClick);
  return buttonElement;
};

export default Button;
