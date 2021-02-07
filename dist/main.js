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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/main */ \"./src/view/main.js\");\n\n\nconst CONTENT = document.querySelector('#content');\nCONTENT.appendChild(_view_main__WEBPACK_IMPORTED_MODULE_0__.makeContent());\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/tokens.js":
/*!***********************!*\
  !*** ./src/tokens.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cssClass\": () => (/* binding */ cssClass)\n/* harmony export */ });\nconst cssClass = {\n  btn: 'btn',\n  btnGroup: 'btn-group',\n  btnSelected: 'btn-selected',\n  colCenter: 'col-center',\n  hidden: 'hidden',\n  mainTextContent: 'main-text-content',\n  navFixed: 'nav-fixed',\n  spaceV: 'space-v',\n  topContent: 'top-content',\n  widthFill: 'width-fill',\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/tokens.js?");

/***/ }),

/***/ "./src/view/main.js":
/*!**************************!*\
  !*** ./src/view/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeContent\": () => (/* binding */ makeContent)\n/* harmony export */ });\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens */ \"./src/tokens.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/view/util.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./src/view/nav.js\");\n/* harmony import */ var _page_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/home */ \"./src/view/page/home.js\");\n/* harmony import */ var _page_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/services */ \"./src/view/page/services.js\");\n/* harmony import */ var _page_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/about */ \"./src/view/page/about.js\");\n/* harmony import */ var _page_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/contact */ \"./src/view/page/contact.js\");\n\n\n\n\n\n\n\n\n// VIEW module for the shared elements (ie, the header, the nav, & the footer)\n// container for everything\n\nconst PAGES = [\n  _page_home__WEBPACK_IMPORTED_MODULE_3__.makePage(),\n  _page_services__WEBPACK_IMPORTED_MODULE_4__.makePage(),\n  _page_about__WEBPACK_IMPORTED_MODULE_5__.makePage(),\n  _page_contact__WEBPACK_IMPORTED_MODULE_6__.makePage(),\n];\n\nconst makeContent = () => {\n  const container = _util__WEBPACK_IMPORTED_MODULE_1__.el('div', [_tokens__WEBPACK_IMPORTED_MODULE_0__.cssClass.colCenter]);\n  container.appendChild(makeHeaderContainer());\n\n  container.appendChild(_page_home__WEBPACK_IMPORTED_MODULE_3__.makePage().pageContent);\n\n  return container;\n};\n\nconst makeHeaderContainer = () => {\n  const headerContainer = _util__WEBPACK_IMPORTED_MODULE_1__.el('div', [_tokens__WEBPACK_IMPORTED_MODULE_0__.cssClass.topContent, _tokens__WEBPACK_IMPORTED_MODULE_0__.cssClass.widthFill]);\n\n  // Header\n  headerContainer.appendChild(makeHeader());\n  \n  // Nav\n  headerContainer.appendChild(_nav__WEBPACK_IMPORTED_MODULE_2__.makeNav(PAGES));\n\n  return headerContainer;\n};\n\nconst makeHeader = () => {\n  const header = _util__WEBPACK_IMPORTED_MODULE_1__.el('header', [_tokens__WEBPACK_IMPORTED_MODULE_0__.cssClass.widthFill]);\n\n  const headerText = _util__WEBPACK_IMPORTED_MODULE_1__.el('p');\n  headerText.textContent = 'Bard & Scabbard';\n  header.appendChild(headerText);\n\n  const navButton = _util__WEBPACK_IMPORTED_MODULE_1__.el('div');\n  navButton.textContent = 'NAV';\n  header.appendChild(navButton);\n\n  return header;\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/main.js?");

/***/ }),

/***/ "./src/view/nav.js":
/*!*************************!*\
  !*** ./src/view/nav.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeNav\": () => (/* binding */ makeNav),\n/* harmony export */   \"changePage\": () => (/* binding */ changePage)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/view/util.js\");\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens */ \"./src/tokens.js\");\n\n\n\nconst NAV_ID_SUFFIX = '-nav';\nlet _pages;\nlet _activePage;\nlet _navOffsetTop;\n\n//TODO: decouple logic from implementation (DOM generation)\nconst makeNav = (pages) => {\n  const nav = _util__WEBPACK_IMPORTED_MODULE_0__.el('nav', [_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.widthFill])\n  const navList = _util__WEBPACK_IMPORTED_MODULE_0__.el('ul', [_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.btnGroup]);\n\n  setPages(pages, navList);\n\n  window.addEventListener('scroll', () => fixedNav(nav));\n\n  nav.appendChild(navList);\n  window.addEventListener('load', () => onPageLoad(nav));\n\n  _activePage = pages[0];\n  nav.querySelector(`#${_activePage.pageName}${NAV_ID_SUFFIX}`)\n    .classList.add(_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.btnSelected);\n  return nav;\n};\n\nconst onPageLoad = (nav) => {\n  _navOffsetTop = nav.offsetTop;\n};\n\nconst setPages = (pages, navList) => {\n  _pages = pages;\n  \n  pages?.forEach((page) => {\n    navList.appendChild(makeNavElement(page));\n  });\n};\n\nconst makeNavElement = (page) => {\n  const tab = _util__WEBPACK_IMPORTED_MODULE_0__.el('li', [_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.btn], page.pageName + NAV_ID_SUFFIX);\n  tab.textContent = page.pageName;\n  page.tab = tab;\n  //TODO: tab icon\n  tab.addEventListener('click', () => changePage(page));\n  return tab;\n};\n\nconst changePage = (page, parent) => {\n  if (page === _activePage) {\n    //return;\n  }\n\n  const oldContent = document.querySelector(`#${_activePage.id}`);\n\n  if (!parent) {\n    if (oldContent) {\n      parent = oldContent.parentElement;\n    } else {\n      console.error('No valid parent container found for page!');\n    }\n  }\n\n  if (oldContent) {\n    oldContent.remove();\n    document.querySelector(`#${_activePage.pageName}${NAV_ID_SUFFIX}`)\n      .classList.remove(_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.btnSelected);\n  }\n\n  parent.appendChild(page.pageContent);\n  document.querySelector(`#${page.pageName}${NAV_ID_SUFFIX}`)\n    .classList.add(_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.btnSelected);\n\n  _activePage = page;\n};\n\n// change styles based on scroll (to stick to top when scrolling past)\nconst fixedNav = (nav) => {\n  if(window.scrollY >= _navOffsetTop) {\n    nav.classList.add(_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.navFixed);\n    nav.parentNode.style.paddingTop = nav.offsetHeight + 'px';\n  } else {\n    nav.classList.remove(_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.navFixed);\n    nav.parentNode.style.paddingTop = 0;\n  }\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/nav.js?");

/***/ }),

/***/ "./src/view/page/about.js":
/*!********************************!*\
  !*** ./src/view/page/about.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makePage\": () => (/* binding */ makePage)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/view/util.js\");\n/* harmony import */ var _src_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/tokens */ \"./src/tokens.js\");\n\n\n\nconst ID = 'view-about';\nconst pageName = 'ABOUT';\n\nconst makePage = () => {\n  const pageContent = _util__WEBPACK_IMPORTED_MODULE_0__.el('main', [], ID);\n  const pageTextContainer = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.mainTextContent]);\n  \n  _util__WEBPACK_IMPORTED_MODULE_0__.loremPara(4, pageTextContainer);\n\n  pageContent.appendChild(pageTextContainer);\n\n  return { pageName, pageContent, id: ID }\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/page/about.js?");

/***/ }),

/***/ "./src/view/page/contact.js":
/*!**********************************!*\
  !*** ./src/view/page/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makePage\": () => (/* binding */ makePage)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/view/util.js\");\n/* harmony import */ var _src_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/tokens */ \"./src/tokens.js\");\n\n\n\nconst ID = 'view-contact';\nconst pageName = 'CONTACT';\n\nconst makePage = () => {\n  const pageContent = _util__WEBPACK_IMPORTED_MODULE_0__.el('main', [], ID);\n  const pageTextContainer = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.mainTextContent]);\n  \n  //! Placeholder\n  for (let i = 0; i < 10; i++) {\n    const p = _util__WEBPACK_IMPORTED_MODULE_0__.el('p');\n    p.textContent = 'lorem';\n    pageTextContainer.appendChild(p);\n  }\n\n  pageContent.appendChild(pageTextContainer);\n\n  return { pageName, pageContent, id: ID }\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/page/contact.js?");

/***/ }),

/***/ "./src/view/page/home.js":
/*!*******************************!*\
  !*** ./src/view/page/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makePage\": () => (/* binding */ makePage)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/view/util.js\");\n/* harmony import */ var _src_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/tokens */ \"./src/tokens.js\");\n\n\n\nconst ID = 'view-home';\n\nconst makePage = () => {\n  const pageName = 'HOME';\n  const pageContent = _util__WEBPACK_IMPORTED_MODULE_0__.el('main', [], ID);\n  const pageTextContainer = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.mainTextContent]);\n\n  _util__WEBPACK_IMPORTED_MODULE_0__.loremPara(10, pageTextContainer);\n\n  pageContent.appendChild(pageTextContainer);\n\n  return { pageName, pageContent, id: ID }\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/page/home.js?");

/***/ }),

/***/ "./src/view/page/services.js":
/*!***********************************!*\
  !*** ./src/view/page/services.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makePage\": () => (/* binding */ makePage)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/view/util.js\");\n/* harmony import */ var _src_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/tokens */ \"./src/tokens.js\");\n\n\n\nconst ID = 'view-services';\nconst pageName = 'SERVICES';\n\nconst makePage = () => {\n  const pageContent = _util__WEBPACK_IMPORTED_MODULE_0__.el('main', [], ID);\n  const pageTextContainer = _util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_src_tokens__WEBPACK_IMPORTED_MODULE_1__.cssClass.mainTextContent]);\n  \n  _util__WEBPACK_IMPORTED_MODULE_0__.loremPara(1, pageTextContainer);\n\n  pageContent.appendChild(pageTextContainer);\n\n  return { pageName, pageContent, id: ID };\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/page/services.js?");

/***/ }),

/***/ "./src/view/util.js":
/*!**************************!*\
  !*** ./src/view/util.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"el\": () => (/* binding */ el),\n/* harmony export */   \"getLorem\": () => (/* binding */ getLorem),\n/* harmony export */   \"loremPara\": () => (/* binding */ loremPara)\n/* harmony export */ });\nfunction el(tag, classes, id) {\n  const elm = document.createElement(tag);\n\n  classes?.forEach((className) => {\n    elm.classList.add(className)\n  });\n\n  if (id) {\n    elm.id = id;\n  }\n\n  return elm;\n}\n\nconst getLorem = (length) => {\n  const fullLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mauris mi. Donec non risus sed ipsum ullamcorper rutrum sed a urna. Cras non convallis nisl, vel ultrices ligula. Aenean id velit eu nulla condimentum sagittis vel in felis. Phasellus auctor sollicitudin magna nec tincidunt. Etiam suscipit ultrices erat, id bibendum orci tristique ac. Donec id auctor risus. Aenean a convallis sapien, et tincidunt velit. Nullam aliquam erat leo, in sodales felis mattis sit amet. Nam eget fermentum est, nec tristique dolor. Quisque in accumsan justo, ac elementum orci. Suspendisse volutpat, justo a luctus ultrices, lacus libero eleifend dui, a laoreet mauris lacus luctus nibh. Phasellus pellentesque eros eget arcu tristique convallis. Cras maximus, massa ut hendrerit lobortis, urna velit condimentum nisl, at interdum felis lectus vel magna. Aliquam rutrum turpis lacus, a auctor nisl fermentum at. Cras nisl tortor, consectetur sed eros eget, vulputate tempor tortor. Vivamus non semper nunc, ac laoreet velit. Sed viverra velit eros, vel ultricies lacus dapibus ac. Pellentesque eget quam nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin libero mauris, auctor nec augue non, blandit dictum nisi. Vivamus interdum purus commodo libero consectetur varius. In vel libero eget eros eleifend bibendum.';\n  const splitLorem = fullLorem.split(' ');\n\n  let outLorem = '';\n  for (let i = 0; i < length; i++) {\n    outLorem += splitLorem[i % splitLorem.length] + ' ';\n  }\n \n  return outLorem;\n};\n\nconst loremPara = (length, container) => {\n  for (let i = 0; i < length; i++) {\n    const p = el('p');\n    const loremText = getLorem( i % 2 === 0 ? 100: 200 );\n    p.textContent = loremText;\n    container.appendChild(p);\n  }\n};\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/view/util.js?");

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