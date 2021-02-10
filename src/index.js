import * as viewMain from './view/mainView';
import '/src/styles/reset.css';
import '/src/styles/style.css';

const CONTENT = document.querySelector('#content');
CONTENT.appendChild(viewMain.makeContent());