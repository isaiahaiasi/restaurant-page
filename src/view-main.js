import * as vUtil from './view-util';
import { Class } from './tokens';

// VIEW module for the shared elements (ie, the header, the nav, & the footer)
// container for everything
const makeContent = () => {
  const container = vUtil.el('div', [Class.colCenter]);
  container.appendChild(makeHeaderContainer());

  return container;
};

const makeHeaderContainer = () => {
  const headerContainer = vUtil.el('div', [Class.topContent, Class.widthFill]);

  headerContainer.appendChild(makeHeader());
  headerContainer.appendChild(makeNav([
    'HOME', 
    'SERVICES', 
    'ABOUT US', 
    'CONTACT'
  ]));

  return headerContainer;
};

const makeHeader = () => {
  const header = vUtil.el('header', [Class.widthFill]);

  const headerText = vUtil.el('p');
  headerText.textContent = 'Bard & Scabbard';
  header.appendChild(headerText);

  const navButton = vUtil.el('div');
  navButton.textContent = 'NAV';
  header.appendChild(navButton);

  return header;
};

//! A "page" is the object exported by each viewPage's factory
//! It just needs an Element, and a name to set as the tab
//! TEMP: just passing in an array of strings...
const makeNav = (pages) => {
  const nav = vUtil.el('nav', [Class.widthFill])
  const navList = vUtil.el('ul', [Class.btnGroup]);

  pages?.forEach((page) => {
    navList.appendChild(addNavElement(page));
  });

  nav.appendChild(navList);
  return nav;
};

const addNavElement = (page) => {
  const tab = vUtil.el('li', [Class.btn]);
  tab.textContent = page;
  return tab;
}

export { makeContent };