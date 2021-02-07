import { cssClass } from '../tokens';
import * as vUtil from './util';
import * as Nav from './nav';
import * as Home from './page/home';
import * as Services from './page/services';
import * as About from './page/about';
import * as Contact from './page/contact';

// VIEW module for the shared elements (ie, the header, the nav, & the footer)
// container for everything

const PAGES = [
  Home.makePage(),
  Services.makePage(),
  About.makePage(),
  Contact.makePage(),
];

const makeContent = () => {
  const container = vUtil.el('div', [cssClass.colCenter]);
  
  // The Nav needs to know the element that each page's content will be put in
  // So that element needs to exist first, then be passed to the function that creates the nav
  const mainContent = vUtil.el('main');
  container.appendChild(makeHeaderContainer(mainContent));

  container.appendChild(mainContent);

  return container;
};

const makeHeaderContainer = (mainContent) => {
  const headerContainer = vUtil.el('div', [cssClass.topContent, cssClass.widthFill]);

  // Header
  headerContainer.appendChild(makeHeader());
  
  // Nav
  headerContainer.appendChild(Nav.getNewNav(PAGES, mainContent, true));

  return headerContainer;
};

const makeHeader = () => {
  const header = vUtil.el('header', [cssClass.widthFill]);

  const headerText = vUtil.el('p');
  headerText.textContent = 'Bard & Scabbard';
  header.appendChild(headerText);

  const navButton = vUtil.el('div');
  navButton.textContent = 'NAV';
  header.appendChild(navButton);

  return header;
};

export { makeContent };