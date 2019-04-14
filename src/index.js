import nav from "./nav";
import { footer } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';

const button = makeButton('hello');
button.style = makeColorStyle('orange');
document.body.appendChild(button);
document.body.appendChild(footer)

console.log(
  nav(),
  top,
  bottom,
  makeButton('button'),
  makeColorStyle('orange')
);