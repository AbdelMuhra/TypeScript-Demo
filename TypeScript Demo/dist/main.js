/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/internationalStudent.ts":
/*!*************************************!*\
  !*** ./src/internationalStudent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternationalStudent": () => (/* binding */ InternationalStudent)
/* harmony export */ });
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student */ "./src/student.ts");

class InternationalStudent extends _student__WEBPACK_IMPORTED_MODULE_0__.Student {
    constructor(nationality, firstname, lastname) {
        super(firstname, lastname);
        this.nationality = nationality;
    }
    GetNationality() {
        return `Nationality: ${this.nationality}`;
    }
}


/***/ }),

/***/ "./src/student.ts":
/*!************************!*\
  !*** ./src/student.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Student": () => (/* binding */ Student)
/* harmony export */ });
class Student {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getAccountStatus(studentNumber) {
        throw new Error("Method not implemented.");
    }
    GetFullName() {
        return `Student: ${this.firstname} ${this.lastname}`;
    }
}
// let student = new Student("Peter", "Parker");
// let fullname: string = student.GetFullName();
// let divText = document.querySelector('div');
// divText!.textContent = fullname;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internationalStudent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internationalStudent */ "./src/internationalStudent.ts");

let internationalStudent = new _internationalStudent__WEBPACK_IMPORTED_MODULE_0__.InternationalStudent("Brazilian", "Neymar", "Santos");
let divText = document.querySelector('div');
divText.textContent = internationalStudent.GetFullName() + " " + internationalStudent.GetNationality();
function displayAlert() {
    return alert('cool!');
}
document.querySelector('#btn-test').addEventListener('click', () => displayAlert());

})();

/******/ })()
;