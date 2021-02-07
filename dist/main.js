/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_mainView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/mainView */ \"./src/view/mainView.js\");\n\n\nconst CONTENT = document.querySelector('#content');\nCONTENT.appendChild(_view_mainView__WEBPACK_IMPORTED_MODULE_0__.makeContent());\n\nconst dynamicEl = document.createElement('div');\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/tokens.js":
/*!***********************!*\
  !*** ./src/tokens.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cssClass\": () => (/* binding */ cssClass)\n/* harmony export */ });\nconst cssClass = {\n  btn: 'btn',\n  btnGroup: 'btn-group',\n  btnSelected: 'btn-selected',\n  colCenter: 'col-center',\n  fixedDynamic: 'fixed-dynamic',\n  hero: 'hero',\n  hidden: 'hidden',\n  mainTextContent: 'main-text-content',\n  pageContent: 'page-content',\n  spaceV: 'space-v',\n  topContent: 'top-content',\n  widthFill: 'width-fill',\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/tokens.js?");

/***/ }),

/***/ "./src/view/fixedElement.js":
/*!**********************************!*\
  !*** ./src/view/fixedElement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDynamicFixedPos\": () => (/* binding */ addDynamicFixedPos)\n/* harmony export */ });\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens */ \"./src/tokens.js\");\n// store element's offsetTop\n// listen for load to set element's offsettop once it's been loaded\n// listen for scroll, & if scroll >= offset, give it the fixed height\n//  & padding to keep elements in place\n\n\nconst addDynamicFixedPos = (el) => {\n  let _baseOffsetTop = 0;\n\n  const setBaseOffsetTop = () => {\n    _baseOffsetTop = el.offsetTop;\n  };\n\n  const affixOnScroll = () => {\n    if (window.scrollY >= _baseOffsetTop) {\n      el.classList.add(_tokens__WEBPACK_IMPORTED_MODULE_0__.cssClass.fixedDynamic);\n      el.parentNode.style.paddingTop = el.offsetHeight + 'px';\n    } else {\n      el.classList.remove(_tokens__WEBPACK_IMPORTED_MODULE_0__.cssClass.fixedDynamic);\n      el.parentNode.style.paddingTop = 0;\n    }\n  };\n\n  window.addEventListener('load', setBaseOffsetTop);\n  window.addEventListener('scroll', affixOnScroll);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/fixedElement.js?");

/***/ }),

/***/ "./src/view/mainView.js":
/*!******************************!*\
  !*** ./src/view/mainView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeContent\": () => (/* binding */ makeContent)\n/* harmony export */ });\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens */ \"./src/tokens.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/view/util.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./src/view/nav.js\");\n/* harmony import */ var _page_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/home */ \"./src/view/page/home.js\");\n/* harmony import */ var _page_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/services */ \"./src/view/page/services.js\");\n/* harmony import */ var _page_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/about */ \"./src/view/page/about.js\");\n/* harmony import */ var _page_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/contact */ \"./src/view/page/contact.js\");\n\n\n\n\n\n\n\n\n// VIEW module for the shared elements (ie, the header, the nav, & the footer)\n// container for everything\n\nconst PAGES = [\n  _page_home__WEBPACK_IMPORTED_MODULE_3__.makePage(),\n  _page_services__WEBPACK_IMPORTED_MODULE_4__.makePage(),\n  _page_about__WEBPACK_IMPORTED_MODULE_5__.makePage(),\n  _page_contact__WEBPACK_IMPORTED_MODULE_6__.makePage(),\n];\n\nconst makeContent = () => {\n  const container = _util__WEBPACK_IMPORTED_MODULE_1__.el('div', [_tokens__WEBPACK_IMPORTED_MODULE_0__.cssClass.colCenter]);\n  \n  // The Nav needs to know the element that each page's content will be put in\n  // So that element needs to exist first, then be passed to the function that creates the nav\n  const mainContent = _util__WEBPACK_IMPORTED_MODULE_1__.el('main');\n  container.appendChild(makeHeaderContainer(mainContent));\n\n  container.appendChild(mainContent);\n\n  return container;\n};\n\nconst makeHeaderContainer = (mainContent) => {\n  const headerContainer = _util__WEBPACK_IMPORTED_MODULE_1__.el('div', [_tokens__WEBPACK_IMPORTED_MODULE_0__.cssClass.topContent, _tokens__WEBPACK_IMPORTED_MODULE_0__.cssClass.widthFill]);\n\n  // Header\n  headerContainer.appendChild(makeHeader());\n  \n  // Nav\n  headerContainer.appendChild(_nav__WEBPACK_IMPORTED_MODULE_2__.getNewNav(PAGES, mainContent, true));\n\n  return headerContainer;\n};\n\nconst makeHeader = () => {\n  const header = _util__WEBPACK_IMPORTED_MODULE_1__.el('header', [_tokens__WEBPACK_IMPORTED_MODULE_0__.cssClass.widthFill]);\n\n  const headerText = _util__WEBPACK_IMPORTED_MODULE_1__.el('p');\n  headerText.textContent = 'Bard & Scabbard';\n  header.appendChild(headerText);\n\n  const navButton = _util__WEBPACK_IMPORTED_MODULE_1__.el('div');\n  navButton.textContent = 'NAV';\n  header.appendChild(navButton);\n\n  return header;\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/mainView.js?");

/***/ }),

/***/ "./src/view/nav.js":
/*!*************************!*\
  !*** ./src/view/nav.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNewNav\": () => (/* binding */ getNewNav)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/view/util.js\");\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens */ \"./src/tokens.js\");\n/* harmony import */ var _fixedElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixedElement */ \"./src/view/fixedElement.js\");\n\n\n\n\nconst NAV_ID_SUFFIX = '-nav';\n\n// NAV factory\nconst getNewNav = (pages, contentParent, fixed) => {\n  let _activePage;\n  const tabs = new Map();\n\n  //TODO: allow \"fixed\" and \"non-fixed\" modes \n  // (and/or, have \"fixed' fall under other fixed nav?...)\n  const makeNav = () => {\n    const nav = _util__WEBPACK_IMPORTED_MODULE_0__.el('nav', [_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.widthFill])\n    const navList = _util__WEBPACK_IMPORTED_MODULE_0__.el('ul', [_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.btnGroup]);\n\n    setPages(pages, navList);\n    tabs.get(pages[0]).classList.add(_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.btnSelected);\n\n    nav.appendChild(navList);\n\n    if (fixed === true) {\n      (0,_fixedElement__WEBPACK_IMPORTED_MODULE_2__.addDynamicFixedPos)(nav);\n    }\n\n    changePage(pages[0]);\n    _activePage = pages[0];\n\n    return nav;\n  };\n\n  // Returns an array of the nav page *elements*\n  const setPages = (pages, navList) => {\n    pages?.forEach((page) => {\n      const tab = makeNavElement(page);\n      tabs.set(page, tab);\n      navList.appendChild(tab);\n    });\n  };\n\n  const makeNavElement = (page) => {\n    const tab = _util__WEBPACK_IMPORTED_MODULE_0__.el('li', [_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.btn], page.pageName + NAV_ID_SUFFIX);\n    tab.textContent = page.pageName;\n    page.tab = tab;\n    tab.addEventListener('click', () => changePage(page));\n    return tab;\n  };\n\n  const changePage = (page) => {\n    if (page === _activePage) {\n      return;\n    }\n\n    _util__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren(contentParent);\n    contentParent.appendChild(page.pageContent);\n\n    tabs.get(_activePage)?.classList.remove(_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.btnSelected);\n    tabs.get(page).classList.add(_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.btnSelected);\n\n    _activePage = page;\n  };\n\n  return makeNav();\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/nav.js?");

/***/ }),

/***/ "./src/view/page/about.js":
/*!********************************!*\
  !*** ./src/view/page/about.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makePage\": () => (/* binding */ makePage)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/view/util.js\");\n/* harmony import */ var _src_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/tokens */ \"./src/tokens.js\");\n\n\n\nconst ID = 'view-about';\nconst pageName = 'ABOUT';\n\nconst makePage = () => {\n  const pageContent = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.pageContent], ID);\n  const pageTextContainer = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.mainTextContent]);\n  \n  _util__WEBPACK_IMPORTED_MODULE_0__.loremPara(4, pageTextContainer);\n\n  pageContent.appendChild(pageTextContainer);\n\n  return { pageName, pageContent, id: ID }\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/page/about.js?");

/***/ }),

/***/ "./src/view/page/contact.js":
/*!**********************************!*\
  !*** ./src/view/page/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makePage\": () => (/* binding */ makePage)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/view/util.js\");\n/* harmony import */ var _src_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/tokens */ \"./src/tokens.js\");\n\n\n\nconst ID = 'view-contact';\nconst pageName = 'CONTACT';\n\nconst makePage = () => {\n  const pageContent = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.pageContent], ID);\n  const pageTextContainer = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.mainTextContent]);\n  \n  //! Placeholder\n  for (let i = 0; i < 10; i++) {\n    const p = _util__WEBPACK_IMPORTED_MODULE_0__.el('p');\n    p.textContent = 'lorem';\n    pageTextContainer.appendChild(p);\n  }\n\n  pageContent.appendChild(pageTextContainer);\n\n  return { pageName, pageContent, id: ID }\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/page/contact.js?");

/***/ }),

/***/ "./src/view/page/home.js":
/*!*******************************!*\
  !*** ./src/view/page/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makePage\": () => (/* binding */ makePage)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/view/util.js\");\n/* harmony import */ var _src_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/tokens */ \"./src/tokens.js\");\n\n\n\nconst ID = 'view-home';\n\nconst CONTENT = {\n  header: 'All your slaying needs—for a song!',\n  subHeader: 'Quick. Professional. Entertaining!',\n}\n\nconst makePage = () => {\n  const pageName = 'HOME';\n  const pageContent = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.pageContent], ID);\n  const pageTextContainer = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.mainTextContent]);\n\n  pageTextContainer.appendChild(getHero());\n  \n  pageTextContainer.appendChild(\n    _util__WEBPACK_IMPORTED_MODULE_0__.elWithContent('h1', CONTENT.header)\n  );\n\n  _util__WEBPACK_IMPORTED_MODULE_0__.loremPara(1, pageTextContainer);\n  \n  pageTextContainer.appendChild(\n    _util__WEBPACK_IMPORTED_MODULE_0__.elWithContent('h2', CONTENT.subHeader)\n  );\n  \n  _util__WEBPACK_IMPORTED_MODULE_0__.loremPara(8, pageTextContainer);\n\n  pageContent.appendChild(pageTextContainer);\n\n  return { pageName, pageContent, id: ID };\n};\n\nconst getHero = () => {\n  const hero =  _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.hero]);\n  hero.textContent = '(some cool dragon ink, kinda in the style of the typeface)';\n  return hero;\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/page/home.js?");

/***/ }),

/***/ "./src/view/page/services.js":
/*!***********************************!*\
  !*** ./src/view/page/services.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makePage\": () => (/* binding */ makePage)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/view/util.js\");\n/* harmony import */ var _src_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/tokens */ \"./src/tokens.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav */ \"./src/view/nav.js\");\n\n\n\n\n//! ADD MULTIPLE TABS\n\nconst ID = 'view-services';\nconst pageName = 'SERVICES';\n\nconst SERVICES = {\n  Monsters: [\n    {\n      title: 'Kentucky Fried Gryphon',\n      cost: '35gp',\n      description: 'Those pesky bird-brains mauling your livestock? We turn that overgrown rooster into a 32-piece meal! Our expert team uses tried-and-true methods to take these beasts out of the sky. You won\\'t even hear a squawk!',\n    },\n    {\n      title: 'Basilisk Beheading',\n      cost: '100gp',\n      description: 'When it comes to dangerous creatures like this, do NOT attempt your own extermination! Remember--\"More than 6 legs? Call a professional!\" Our Grandpappy taught us those words, and they\\'re as true today as they were then. Don\\'t think you have to live with all those poor petrified souls cluttering your front yard, either—we\\'ll find a nice statue garden for the victims at no extra charge!',\n    },\n    {\n      title: 'Skeleton Burial',\n      cost: '5gp per skull',\n      description: 'Look, you don\\'t need to tell us WHY you were down in that ancient tomb, or WHY you \"borrowed\" that precious skull-shaped ruby from the pedestal in front of the sarcophogus. That\\'s not important now. What\\'s important is dealing with the dozens of skeletons currently tearing your town apart trying to reclaim what\\'s rightfully theirs! With our help, you can keep your ill-gotten riches, and sleep easy!',\n    },\n  ],\n  Reclamation: [\n    {\n      title: 'blah',\n      cost: '5gp',\n      description: 'test test test testeaojfoeiaj foieja foijae fojae fojfaeo jfa eojf aoejf aejf aoej faeoj foaje foaejfojaefoaejf oejfo eajof jaof jaejf eafj aeofj aeojf oea',\n    },\n    {\n      title: 'blah',\n      cost: '125gp',\n      description: 'test test test testeaojfoeiaj foieja foijae fojae fojfaeo jfa eojf aoejf aejf aoej faeoj foaje foaejfojaefoaejf oejfo eajof jaof jaejf eafj aeofj aeojf oea',\n    },\n  ],\n  Murder: [\n    {\n      title: 'eajoifjae',\n      cost: '300gp',\n      description: 'Look, you don\\'t need to tell us WHY you were down in that ancient tomb, or WHY you \"borrowed\" that precious skull-shaped ruby from the pedestal in front of the sarcophogus. That\\'s not important now. What',\n    },\n    {\n      title: 'blah',\n      cost: '5gp',\n      description: 'test test test testeaojfoeiaj foieja foijae fojae fojfaeo jfa eojf aoejf aejf aoej faeoj foaje foaejfojaefoaejf oejfo eajof jaof jaejf eafj aeofj aeojf oea',\n    },\n    {\n      title: 'blah',\n      cost: '125gp',\n      description: 'test test test testeaojfoeiaj foieja foijae fojae fojfaeo jfa eojf aoejf aejf aoej faeoj foaje foaejfojaefoaejf oejfo eajof jaof jaejf eafj aeofj aeojf oea',\n    },\n  ],\n};\n\nconst CONTENT = {\n  header: 'Who Do You Need Us To Kill?',\n};\n\nconst PAGES = [\n  {\n    pageName: 'Monsters',\n    pageContent: makeServicePage(SERVICES.Monsters),\n  },\n  {\n    pageName: 'Reclamation',\n    pageContent: makeServicePage(SERVICES.Reclamation),\n  },\n  {\n    pageName: 'Murder',\n    pageContent: makeServicePage(SERVICES.Murder),\n  },\n];\n\nconst makePage = () => {\n  const pageContent = _util__WEBPACK_IMPORTED_MODULE_0__.el(\n    'div', \n    [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.pageContent, _src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.mainTextContent], \n    ID,\n  );\n\n  pageContent.appendChild(_util__WEBPACK_IMPORTED_MODULE_0__.elWithContent('h1', CONTENT.header));\n  _util__WEBPACK_IMPORTED_MODULE_0__.loremPara(1, pageContent);\n  \n  const servicePageContainer = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.mainTextContent]);\n  pageContent.appendChild(_nav__WEBPACK_IMPORTED_MODULE_2__.getNewNav(PAGES, servicePageContainer, false));\n\n  pageContent.appendChild(servicePageContainer);\n\n  return { pageName, pageContent, id: ID };\n};\n\nfunction makeServicePage(svcCategory) {\n  const svcContainer = _util__WEBPACK_IMPORTED_MODULE_0__.el('div');\n  svcCategory.forEach((item) => {\n    svcContainer.appendChild(\n      makeServiceItem(item.title, item.cost, item.description)\n    );\n  });\n  return svcContainer;\n};\n\nfunction makeServiceItem(title, cost, description) {\n  // main containers (for interior vertical line style)\n  const item = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', ['svc-item']);\n  const itemContainer = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', ['svc-item-container']);\n\n  // top elements (title, cost)\n  const top = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', ['svc-item-top']);\n  const titleElm = _util__WEBPACK_IMPORTED_MODULE_0__.elWithContent('div', title, ['svc-item-title']);\n  const costElm = _util__WEBPACK_IMPORTED_MODULE_0__.elWithContent('div', cost, ['svc-item-cost']);\n  top.appendChild(titleElm);\n  top.appendChild(costElm);\n\n  // bottom element (description)\n  const bottom = _util__WEBPACK_IMPORTED_MODULE_0__.elWithContent('div', description, ['svc-item-description']);\n\n  itemContainer.appendChild(top);\n  itemContainer.appendChild(bottom);\n\n  item.appendChild(itemContainer);\n  return item;\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/page/services.js?");

/***/ }),

/***/ "./src/view/util.js":
/*!**************************!*\
  !*** ./src/view/util.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"el\": () => (/* binding */ el),\n/* harmony export */   \"elWithContent\": () => (/* binding */ elWithContent),\n/* harmony export */   \"getLorem\": () => (/* binding */ getLorem),\n/* harmony export */   \"loremPara\": () => (/* binding */ loremPara),\n/* harmony export */   \"removeAllChildren\": () => (/* binding */ removeAllChildren)\n/* harmony export */ });\nfunction el(tag, classes, id) {\n  const elm = document.createElement(tag);\n\n  classes?.forEach((className) => {\n    elm.classList.add(className)\n  });\n\n  if (id) {\n    elm.id = id;\n  }\n\n  return elm;\n}\n\nconst elWithContent = (tag, string, classes, id) => {\n  const h = el(tag, classes, id);\n  h.textContent = string;\n  return h;\n};\n\nconst getLorem = (length) => {\n  const fullLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mauris mi. Donec non risus sed ipsum ullamcorper rutrum sed a urna. Cras non convallis nisl, vel ultrices ligula. Aenean id velit eu nulla condimentum sagittis vel in felis. Phasellus auctor sollicitudin magna nec tincidunt. Etiam suscipit ultrices erat, id bibendum orci tristique ac. Donec id auctor risus. Aenean a convallis sapien, et tincidunt velit. Nullam aliquam erat leo, in sodales felis mattis sit amet. Nam eget fermentum est, nec tristique dolor. Quisque in accumsan justo, ac elementum orci. Suspendisse volutpat, justo a luctus ultrices, lacus libero eleifend dui, a laoreet mauris lacus luctus nibh. Phasellus pellentesque eros eget arcu tristique convallis. Cras maximus, massa ut hendrerit lobortis, urna velit condimentum nisl, at interdum felis lectus vel magna. Aliquam rutrum turpis lacus, a auctor nisl fermentum at. Cras nisl tortor, consectetur sed eros eget, vulputate tempor tortor. Vivamus non semper nunc, ac laoreet velit. Sed viverra velit eros, vel ultricies lacus dapibus ac. Pellentesque eget quam nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin libero mauris, auctor nec augue non, blandit dictum nisi. Vivamus interdum purus commodo libero consectetur varius. In vel libero eget eros eleifend bibendum.';\n  const splitLorem = fullLorem.split(' ');\n\n  let outLorem = '';\n  for (let i = 0; i < length; i++) {\n    outLorem += splitLorem[i % splitLorem.length] + ' ';\n  }\n \n  return outLorem;\n};\n\nconst loremPara = (length, container) => {\n  for (let i = 0; i < length; i++) {\n    const p = el('p');\n    const loremText = getLorem( i % 2 === 0 ? 100: 200 );\n    p.textContent = loremText;\n    container.appendChild(p);\n  }\n};\n\nconst removeAllChildren = (parentNode) => {\n  while (parentNode.firstChild) {\n    parentNode.removeChild(parentNode.firstChild);\n  }\n};\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;