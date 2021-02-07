import * as vUtil from './util';
import { cssClass } from '../tokens';
import { addDynamicFixedPos } from './fixedElement';

const NAV_ID_SUFFIX = '-nav';
let _activePage;
let _navOffsetTop;

//TODO: decouple logic from implementation (DOM generation)
//TODO: allow "fixed" and "non-fixed" modes (and/or, have "fixed' fall under other fixed nav?...)
const makeNav = (pages) => {
  const nav = vUtil.el('nav', [cssClass.widthFill])
  const navList = vUtil.el('ul', [cssClass.btnGroup]);

  setPages(pages, navList);
  nav.appendChild(navList);

  _activePage = pages[0];
  nav.querySelector(`#${_activePage.pageName}${NAV_ID_SUFFIX}`)
    .classList.add(cssClass.btnSelected);

  addDynamicFixedPos(nav);
  
  return nav;
};

const setPages = (pages, navList) => {
  pages?.forEach((page) => {
    navList.appendChild(makeNavElement(page));
  });
};

const makeNavElement = (page) => {
  const tab = vUtil.el('li', [cssClass.btn], page.pageName + NAV_ID_SUFFIX);
  tab.textContent = page.pageName;
  page.tab = tab;
  //TODO: tab icon
  tab.addEventListener('click', () => changePage(page));
  return tab;
};

const changePage = (page, parent) => {
  if (page === _activePage) {
    return;
  }

  const oldContent = document.querySelector(`#${_activePage.id}`);

  if (!parent) {
    if (oldContent) {
      parent = oldContent.parentElement;
    } else {
      console.error('No valid parent container found for page!');
    }
  }

  if (oldContent) {
    oldContent.remove();
    document.querySelector(`#${_activePage.pageName}${NAV_ID_SUFFIX}`)
      .classList.remove(cssClass.btnSelected);
  }

  parent.appendChild(page.pageContent);
  document.querySelector(`#${page.pageName}${NAV_ID_SUFFIX}`)
    .classList.add(cssClass.btnSelected);

  _activePage = page;
};

export { makeNav, changePage };