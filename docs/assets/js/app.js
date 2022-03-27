/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\nfunction moveTable() {\n    let upperTablePart = document.querySelector('[data-moving-part]')\n    let upButton = document.querySelector('.table__button_up')\n    let downButton = document.querySelector('.table__button_down')\n    if (upperTablePart) {\n        upButton.addEventListener('click', () => {\n            upperTablePart.classList.add('table_active')\n        })\n        downButton.addEventListener('click', () => {\n            upperTablePart.classList.remove('table_active')\n        })\n    }\n}\nmoveTable()\n\n\nfunction girlAppearance() {\n    let levitateSection = document.querySelector('.control__levitate')\n    let blackHole = levitateSection.querySelector('.black-hole')\n    let effectShadow = levitateSection.querySelector('.effect__shadow')\n    let flyingGirl = levitateSection.querySelector('img')\n    if (levitateSection) {\n        setTimeout(()=> {\n            blackHole.style.width = \"270px\";\n            blackHole.style.height = \"193px\";\n            blackHole.style.marginBottom = \"-27px\";\n        }, 1000)\n        setTimeout(()=> {\n            effectShadow.style.opacity = \"1\"; \n            flyingGirl.style.bottom = '30px';\n        },1400)\n        setTimeout(() => {\n            flyingGirl.style.transform = \"translateY(-30px)\"\n            effectShadow.style.opacity = '0';\n            blackHole.style.width = \"193px\";\n            blackHole.style.height = '186px';\n        }, 3000)\n        setInterval(()=> {\n            flyingGirl.style.transform = \"translateY(0px)\"\n            setTimeout(()=> {\n                flyingGirl.style.transform = \"translateY(-30px)\"\n            }, 2000)\n        }, 4000)\n    }\n}\n\ngirlAppearance()\n\n//# sourceURL=webpack://yamaguchi-test/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;