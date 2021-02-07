import * as viewMain from './view/main';

const CONTENT = document.querySelector('#content');
CONTENT.appendChild(viewMain.makeContent());

const dynamicEl = document.createElement('div');