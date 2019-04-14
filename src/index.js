import makeButton from './button';
import { makeColorStyle } from './button-styles';
import makeImage from './image.js';

import imageUrl from './icon.jpeg'

const loadFooter = () => import('./footer')
import './button.css';

const image = makeImage(imageUrl)

const button = makeButton('hello');

button.addEventListener('click', e => {
  loadFooter().then(m => {
    document.body.appendChild(m.footer);
  })
})
button.style = makeColorStyle('orange');
document.body.appendChild(button);
document.body.appendChild(image);