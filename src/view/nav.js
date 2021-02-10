import * as vUtil from './util';
import { cssClass } from '../tokens';
import { addDynamicFixedPos } from './fixedElement';

const NAV_ID_SUFFIX = '-nav';

// NAV factory
const getNewNav = (pages, contentParent, isFixed) => {
  let _activePage;
  const tabs = new Map();

  //TODO: allow "fixed" and "non-fixed" modes 
  // (and/or, have "fixed' fall under other fixed nav?...)
  const makeNav = () => {
    const nav = vUtil.el('nav', [cssClass.widthFill])
    const navList = vUtil.el('ul', [cssClass.btnGroup]);

    setPages(pages, navList);
    tabs.get(pages[0]).classList.add(cssClass.btnSelected);

    nav.appendChild(navList);

    if (isFixed === true) {
      addDynamicFixedPos(nav);
      nav.classList.add(cssClass.top);
    }

    changePage(pages[0]);
    _activePage = pages[0];

    return nav;
  };

  // Returns an array of the nav page *elements*
  const setPages = (pages, navList) => {
    pages?.forEach((page) => {
      const tab = makeNavElement(page);
      tabs.set(page, tab);
      navList.appendChild(tab);
    });
  };

  const makeNavElement = (page) => {
    const tab = vUtil.el('li', [cssClass.btn], page.pageName + NAV_ID_SUFFIX);
    tab.textContent = page.pageName;
    page.tab = tab;
    tab.addEventListener('click', () => changePage(page));
    return tab;
  };

  const changePage = (page) => {
    if (page === _activePage) {
      return;
    }

    vUtil.removeAllChildren(contentParent);
    contentParent.appendChild(page.pageContent);

    tabs.get(_activePage)?.classList.remove(cssClass.btnSelected);
    tabs.get(page).classList.add(cssClass.btnSelected);

    _activePage = page;
  };

  return makeNav();
};

export { getNewNav };
