import * as vUtil from './util';
import { cssClass } from '../tokens';

let _pages;
let _activePage;
let _navOffsetTop;

//TODO: decouple logic from implementation (DOM generation)
const makeNav = (pages) => {
  const nav = vUtil.el('nav', [cssClass.widthFill])
  const navList = vUtil.el('ul', [cssClass.btnGroup]);

  setPages(pages, navList);

  window.addEventListener('scroll', () => fixedNav(nav));

  nav.appendChild(navList);
  window.addEventListener('load', () => onPageLoad(nav));

  _activePage = pages[0];
  return nav;
};

const onPageLoad = (nav) => {
  _navOffsetTop = nav.offsetTop;
  console.log(nav.offsetTop);
};

const setPages = (pages, navList) => {
  _pages = pages;
  
  pages?.forEach((page) => {
    navList.appendChild(addNavElement(page));
  });
};

const addNavElement = (page) => {
  const tab = vUtil.el('li', [cssClass.btn]);
  tab.textContent = page.pageName;
  page.tab = tab;
  //TODO: tab icon
  tab.addEventListener('click', () => changePage(page));
  return tab;
};

const changePage = (page) => {
  if (page === _activePage) {
    return;
  }

  const oldContent = document.querySelector(`#${_activePage.id}`);
  const parent = oldContent.parentElement;

  oldContent.remove();
  _activePage.tab.classList.remove(cssClass.btnSelected);

  parent.appendChild(page.pageContent)
  page.tab.classList.add(cssClass.btnSelected);

  _activePage = page;
};

// change styles based on scroll (to stick to top when scrolling past)
const fixedNav = (nav) => {
  if(window.scrollY >= _navOffsetTop) {
    nav.classList.add(cssClass.navFixed);
    nav.parentNode.style.paddingTop = nav.offsetHeight + 'px';
  } else {
    nav.classList.remove(cssClass.navFixed);
    nav.parentNode.style.paddingTop = 0;
  }
};

export { makeNav };