import { cssClass } from '../tokens';
import * as vUtil from './util';
import * as Nav from './nav';
import * as Home from './page/home';
import * as Services from './page/services';
import * as About from './page/about';
import * as Contact from './page/contact';

// VIEW module for the shared elements (ie, the header, the nav, & the footer)
// container for everything
const makeContent = () => {
  const container = vUtil.el('div', [cssClass.colCenter]);
  container.appendChild(makeHeaderContainer());

  container.appendChild(Home.makePage().pageContent);

  return container;
};

const makeHeaderContainer = () => {
  const headerContainer = vUtil.el('div', [cssClass.topContent, cssClass.widthFill]);

  // Header
  headerContainer.appendChild(makeHeader());
  
  // Nav
  headerContainer.appendChild(Nav.makeNav([
    Home.makePage(),
    Services.makePage(),
    About.makePage(),
    Contact.makePage(),
  ]));

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