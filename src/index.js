import { footer } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import makeImage from './image.js';

import './button.css';

import imageUrl from "./icon.jpeg"

const image = makeImage(imageUrl)

const button = makeButton('hello');
button.style = makeColorStyle('orange');
document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);