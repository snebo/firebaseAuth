/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./functions/src/app.js":
/*!******************************!*\
  !*** ./functions/src/app.js ***!
  \******************************/
/***/ (() => {

eval("// after the document has loaded\n // store the form\n//  store the input of the form\n//  check on click of the submit button of the form\ndocument.addEventListener('DOMContentLoaded', () =>{\n\n    const form = document.querySelector('form')\n    const user_email = document.querySelector('input[type=\"email\"]')\n\n    form.addEventListener(\"submit\", (event)=>{\n        event.preventDefault()\n\n        const email = user_email.value.trim()\n\n        if( email == \"\") {\n            alert(\"Please enter an email address\")\n        }\n        else if (!check_mail(email)){\n            alert('Enter a valid email!')\n        }\n        else{\n            console.log(\"Email: \",email)\n            //....\n        }\n\n    })\n\n    function check_mail(email){\n        const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; \n        return re.test(email)\n    }\n})\n\n\n//# sourceURL=webpack://firebaseauth/./functions/src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./functions/src/app.js"]();
/******/ 	
/******/ })()
;