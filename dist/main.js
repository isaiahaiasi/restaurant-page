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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-main */ \"./src/view-main.js\");\n\n\nconst CONTENT = document.querySelector('#content');\nCONTENT.appendChild(_view_main__WEBPACK_IMPORTED_MODULE_0__.makeContent());\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/tokens.js":
/*!***********************!*\
  !*** ./src/tokens.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Class\": () => (/* binding */ Class)\n/* harmony export */ });\nconst Class = {\n  btn:        'btn',\n  btnGroup:   'btn-group',\n  colCenter:  'col-center',\n  hidden:     'hidden',\n  navFixed:   'nav-fixed',\n  spaceV:     'space-v',\n  topContent: 'top-content',\n  widthFill:  'width-fill',\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/tokens.js?");

/***/ }),

/***/ "./src/view-home.js":
/*!**************************!*\
  !*** ./src/view-home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makePage\": () => (/* binding */ makePage)\n/* harmony export */ });\n/* harmony import */ var _view_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-util */ \"./src/view-util.js\");\n\n\nconst makePage = () => {\n  const pageName = 'HOME';\n  const pageContent = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('div');\n  \n  //! Placeholder\n  for (let i = 0; i < 10; i++) {\n    const p = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('p');\n    const lorem = _view_util__WEBPACK_IMPORTED_MODULE_0__.lorem(100);\n    p.textContent = lorem;\n    pageContent.appendChild(p);\n  }\n\n  return { pageName, pageContent }\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/view-home.js?");

/***/ }),

/***/ "./src/view-main.js":
/*!**************************!*\
  !*** ./src/view-main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeContent\": () => (/* binding */ makeContent)\n/* harmony export */ });\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens */ \"./src/tokens.js\");\n/* harmony import */ var _view_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-util */ \"./src/view-util.js\");\n/* harmony import */ var _view_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-nav */ \"./src/view-nav.js\");\n/* harmony import */ var _view_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-home */ \"./src/view-home.js\");\n\n\n\n\n\n// VIEW module for the shared elements (ie, the header, the nav, & the footer)\n// container for everything\nconst makeContent = () => {\n  const container = _view_util__WEBPACK_IMPORTED_MODULE_1__.el('div', [_tokens__WEBPACK_IMPORTED_MODULE_0__.Class.colCenter]);\n  container.appendChild(makeHeaderContainer());\n\n  container.appendChild(_view_home__WEBPACK_IMPORTED_MODULE_3__.makePage().pageContent);\n\n  return container;\n};\n\nconst makeHeaderContainer = () => {\n  const headerContainer = _view_util__WEBPACK_IMPORTED_MODULE_1__.el('div', [_tokens__WEBPACK_IMPORTED_MODULE_0__.Class.topContent, _tokens__WEBPACK_IMPORTED_MODULE_0__.Class.widthFill]);\n\n  // Header\n  headerContainer.appendChild(makeHeader());\n  \n  // Nav\n  headerContainer.appendChild(_view_nav__WEBPACK_IMPORTED_MODULE_2__.makeNav([\n    _view_home__WEBPACK_IMPORTED_MODULE_3__.makePage(),\n    { pageName: 'SERVICES' },\n    { pageName: 'ABOUT US' },\n    { pageName: 'CONTACT' },\n  ]));\n\n  return headerContainer;\n};\n\nconst makeHeader = () => {\n  const header = _view_util__WEBPACK_IMPORTED_MODULE_1__.el('header', [_tokens__WEBPACK_IMPORTED_MODULE_0__.Class.widthFill]);\n\n  const headerText = _view_util__WEBPACK_IMPORTED_MODULE_1__.el('p');\n  headerText.textContent = 'Bard & Scabbard';\n  header.appendChild(headerText);\n\n  const navButton = _view_util__WEBPACK_IMPORTED_MODULE_1__.el('div');\n  navButton.textContent = 'NAV';\n  header.appendChild(navButton);\n\n  return header;\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/view-main.js?");

/***/ }),

/***/ "./src/view-nav.js":
/*!*************************!*\
  !*** ./src/view-nav.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeNav\": () => (/* binding */ makeNav)\n/* harmony export */ });\n/* harmony import */ var _view_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-util */ \"./src/view-util.js\");\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens */ \"./src/tokens.js\");\n\n\n\nlet _pages;\nlet navOffsetTop;\n//! TEMP: just passing in an array of strings...\nconst makeNav = (pages) => {\n  const nav = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('nav', [_tokens__WEBPACK_IMPORTED_MODULE_1__.Class.widthFill])\n  const navList = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('ul', [_tokens__WEBPACK_IMPORTED_MODULE_1__.Class.btnGroup]);\n\n  setPages(pages, navList);\n\n  window.addEventListener('scroll', () => fixedNav(nav));\n\n  nav.appendChild(navList);\n  window.addEventListener('load', () => onPageLoad(nav));\n  return nav;\n};\n\nconst onPageLoad = (nav) => {\n  navOffsetTop = nav.offsetTop;\n  console.log(nav.offsetTop);\n};\n\nconst setPages = (pages, navList) => {\n  _pages = pages;\n  \n  pages?.forEach((page) => {\n    navList.appendChild(addNavElement(page));\n  });\n};\n\nconst addNavElement = (page) => {\n  const tab = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('li', [_tokens__WEBPACK_IMPORTED_MODULE_1__.Class.btn]);\n  tab.textContent = page.pageName;\n  //TODO: tab icon\n  tab.addEventListener('click', () => changePage(page));\n  return tab;\n};\n\nconst changePage = (page) => {\n  // remove currently active page\n  // add page\n};\n\n// change styles based on scroll (to stick to top when scrolling past)\nconst fixedNav = (nav) => {\n  if(window.scrollY >= navOffsetTop) {\n    nav.classList.add(_tokens__WEBPACK_IMPORTED_MODULE_1__.Class.navFixed);\n    nav.parentNode.style.paddingTop = nav.offsetHeight + 'px';\n  } else {\n    nav.classList.remove(_tokens__WEBPACK_IMPORTED_MODULE_1__.Class.navFixed);\n    nav.parentNode.style.paddingTop = 0;\n  }\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/view-nav.js?");

/***/ }),

/***/ "./src/view-util.js":
/*!**************************!*\
  !*** ./src/view-util.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"el\": () => (/* binding */ el),\n/* harmony export */   \"lorem\": () => (/* binding */ lorem)\n/* harmony export */ });\nfunction el(tag, classes, id) {\n  const elm = document.createElement(tag);\n\n  classes?.forEach((className) => {\n    elm.classList.add(className)\n  });\n\n  if (id) {\n    elm.id = id;\n  }\n\n  return elm;\n}\n\nfunction lorem(length) {\n  const fullLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mauris mi. Donec non risus sed ipsum ullamcorper rutrum sed a urna. Cras non convallis nisl, vel ultrices ligula. Aenean id velit eu nulla condimentum sagittis vel in felis. Phasellus auctor sollicitudin magna nec tincidunt. Etiam suscipit ultrices erat, id bibendum orci tristique ac. Donec id auctor risus. Aenean a convallis sapien, et tincidunt velit. Nullam aliquam erat leo, in sodales felis mattis sit amet. Nam eget fermentum est, nec tristique dolor. Quisque in accumsan justo, ac elementum orci. Suspendisse volutpat, justo a luctus ultrices, lacus libero eleifend dui, a laoreet mauris lacus luctus nibh. Phasellus pellentesque eros eget arcu tristique convallis. Cras maximus, massa ut hendrerit lobortis, urna velit condimentum nisl, at interdum felis lectus vel magna. Aliquam rutrum turpis lacus, a auctor nisl fermentum at. Cras nisl tortor, consectetur sed eros eget, vulputate tempor tortor. Vivamus non semper nunc, ac laoreet velit. Sed viverra velit eros, vel ultricies lacus dapibus ac. Pellentesque eget quam nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin libero mauris, auctor nec augue non, blandit dictum nisi. Vivamus interdum purus commodo libero consectetur varius. In vel libero eget eros eleifend bibendum.';\n  const splitLorem = fullLorem.split(' ');\n\n  let outLorem = '';\n  for (let i = 0; i < length; i++) {\n    outLorem += splitLorem[i % splitLorem.length] + ' ';\n  }\n \n  return outLorem;\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/view-util.js?");

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