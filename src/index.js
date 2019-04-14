import { footer } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';

import './button.css';

const button = makeButton('hello');
button.style = makeColorStyle('orange');
document.body.appendChild(button);
document.body.appendChild(footer);