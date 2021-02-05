import * as vUtil from './view-util';
import { Class } from './tokens';

let _pages;
let navOffsetTop;
//! TEMP: just passing in an array of strings...
const makeNav = (pages) => {
  const nav = vUtil.el('nav', [Class.widthFill])
  const navList = vUtil.el('ul', [Class.btnGroup]);

  setPages(pages, navList);

  window.addEventListener('scroll', () => fixedNav(nav));

  nav.appendChild(navList);
  window.addEventListener('load', () => onPageLoad(nav));
  return nav;
};

const onPageLoad = (nav) => {
  navOffsetTop = nav.offsetTop;
  console.log(nav.offsetTop);
};

const setPages = (pages, navList) => {
  _pages = pages;
  
  pages?.forEach((page) => {
    navList.appendChild(addNavElement(page));
  });
};

const addNavElement = (page) => {
  const tab = vUtil.el('li', [Class.btn]);
  tab.textContent = page.pageName;
  //TODO: tab icon
  tab.addEventListener('click', () => changePage(page));
  return tab;
};

const changePage = (page) => {
  // remove currently active page
  // add page
};

// change styles based on scroll (to stick to top when scrolling past)
const fixedNav = (nav) => {
  if(window.scrollY >= navOffsetTop) {
    nav.classList.add(Class.navFixed);
  } else {
    nav.classList.remove(Class.navFixed);
  }
};

export { makeNav };