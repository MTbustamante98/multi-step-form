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

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("//Sections\nvar stepOne = document.querySelector(\".first-content\");\nvar stepTwo = document.querySelector(\".second-content\");\nvar stepThree = document.querySelector(\".third-content\");\n\n//Input's\nvar inputName = document.getElementById(\"name\");\nvar inputEmail = document.getElementById(\"email\");\nvar listLI = document.querySelectorAll(\".list li\");\nvar checkbox = document.querySelectorAll(\"input[type='checkbox']\");\n\n//Third-content elements\nvar spanValueName = document.querySelector(\"[data-value-name]\");\nvar spanValueEmail = document.querySelector(\"[data-value-email]\");\nvar dataInformation = document.querySelectorAll(\"[data-information]\");\n\n//Button\nvar buttonStepOne = document.querySelector(\".btnOne\");\nvar buttonStepTwo = document.querySelector(\".btnTwo\");\nvar btnSubmit = document.getElementById(\"last-button-submit\");\n\n//events\nvar events = [\"click\", \"touchstart\"];\nvar activeClass = \"ativo\";\nvar arraySections = [stepOne, stepTwo];\nfunction handleClick(event) {\n  if (event) event.preventDefault();\n  arraySections.forEach(function (steps) {\n    steps.classList.add(activeClass);\n  });\n  verificationValue();\n}\nfunction handleClickTwo(event) {\n  if (event) event.preventDefault();\n  arraySections[1].classList.remove(activeClass);\n  stepThree.style.display = \"block\";\n}\nfunction stepSucess() {\n  alert(\"Sucess\");\n}\nfunction verificationValue() {\n  var valueName = inputName.value;\n  var valueEmail = inputEmail.value;\n  spanValueName.innerText = valueName;\n  spanValueEmail.innerText = valueEmail;\n}\nfunction listLIchecked() {\n  listLI.addEventListener(\"click\", function () {});\n}\nif (Array.isArray(events) && events.length > 0) {\n  events.forEach(function (eventType) {\n    buttonStepOne.addEventListener(eventType, handleClick);\n    buttonStepTwo.addEventListener(eventType, handleClickTwo);\n    if (eventType === \"submit\") {\n      btnSubmit.addEventListener(\"submit\", function (event) {\n        stepSucess();\n      });\n    } else {\n      btnSubmit.addEventListener(eventType, stepSucess);\n    }\n  });\n} else {\n  console.error(\"Error: The 'events' array is either empty or not defined.\");\n}\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/script.js"]();
/******/ 	
/******/ })()
;