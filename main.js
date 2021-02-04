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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Class\": () => (/* binding */ Class)\n/* harmony export */ });\nconst Class = (() => {\n  const colCenter = (() => 'col-center')();\n  const widthFill = (() => 'widthFill')();\n  const spaceV = (() => 'spaceV')();\n  const hidden = (() => 'hidden')();\n\n  const topContent = (() => 'top-content')();\n  const btnGroup = (() => 'btn-group')();\n  const btn = (() => 'btn')();\n  \n  return { colCenter, widthFill, spaceV, hidden, topContent, btnGroup, btn };\n})();\n\n\n\n//# sourceURL=webpack://restaurant/./src/tokens.js?");

/***/ }),

/***/ "./src/view-main.js":
/*!**************************!*\
  !*** ./src/view-main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeContent\": () => (/* binding */ makeContent)\n/* harmony export */ });\n/* harmony import */ var _view_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-util */ \"./src/view-util.js\");\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens */ \"./src/tokens.js\");\n\n\n\n// VIEW module for the shared elements (ie, the header, the nav, & the footer)\n// container for everything\nconst makeContent = () => {\n  const container = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_tokens__WEBPACK_IMPORTED_MODULE_1__.Class.colCenter]);\n  container.appendChild(makeHeaderContainer());\n\n  return container;\n};\n\nconst makeHeaderContainer = () => {\n  const headerContainer = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('div', [_tokens__WEBPACK_IMPORTED_MODULE_1__.Class.topContent, _tokens__WEBPACK_IMPORTED_MODULE_1__.Class.widthFill]);\n\n  headerContainer.appendChild(makeHeader());\n  headerContainer.appendChild(makeNav([\n    'HOME', \n    'SERVICES', \n    'ABOUT US', \n    'CONTACT'\n  ]));\n\n  return headerContainer;\n};\n\nconst makeHeader = () => {\n  const header = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('header', [_tokens__WEBPACK_IMPORTED_MODULE_1__.Class.widthFill]);\n\n  const headerText = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('p');\n  headerText.textContent = 'Bard & Scabbard';\n  header.appendChild(headerText);\n\n  const navButton = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('div');\n  navButton.textContent = 'NAV';\n  header.appendChild(navButton);\n\n  return header;\n};\n\n//! A \"page\" is the object exported by each viewPage's factory\n//! It just needs an Element, and a name to set as the tab\n//! TEMP: just passing in an array of strings...\nconst makeNav = (pages) => {\n  const nav = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('nav', [_tokens__WEBPACK_IMPORTED_MODULE_1__.Class.widthFill])\n  const navList = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('ul', [_tokens__WEBPACK_IMPORTED_MODULE_1__.Class.btnGroup]);\n\n  pages?.forEach((page) => {\n    navList.appendChild(addNavElement(page));\n  });\n\n  nav.appendChild(navList);\n  return nav;\n};\n\nconst addNavElement = (page) => {\n  const tab = _view_util__WEBPACK_IMPORTED_MODULE_0__.el('li', [_tokens__WEBPACK_IMPORTED_MODULE_1__.Class.btn]);\n  tab.textContent = page;\n  return tab;\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/view-main.js?");

/***/ }),

/***/ "./src/view-util.js":
/*!**************************!*\
  !*** ./src/view-util.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"el\": () => (/* binding */ el)\n/* harmony export */ });\nfunction el(tag, classes, id) {\n  const elm = document.createElement(tag);\n\n  classes?.forEach((className) => {\n    elm.classList.add(className)\n  });\n\n  if (id) {\n    elm.id = id;\n  }\n\n  return elm;\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/view-util.js?");

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