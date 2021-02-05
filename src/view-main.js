import { Class } from './tokens';
import * as vUtil from './view-util';
import * as Nav from './view-nav';
import * as Home from './view-home';

// VIEW module for the shared elements (ie, the header, the nav, & the footer)
// container for everything
const makeContent = () => {
  const container = vUtil.el('div', [Class.colCenter]);
  container.appendChild(makeHeaderContainer());

  container.appendChild(Home.makePage().pageContent);

  return container;
};

const makeHeaderContainer = () => {
  const headerContainer = vUtil.el('div', [Class.topContent, Class.widthFill]);

  // Header
  headerContainer.appendChild(makeHeader());
  
  // Nav
  headerContainer.appendChild(Nav.makeNav([
    Home.makePage(),
    { pageName: 'SERVICES' },
    { pageName: 'ABOUT US' },
    { pageName: 'CONTACT' },
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

export { makeContent };