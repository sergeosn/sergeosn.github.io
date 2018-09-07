/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fetching.js":
/*!*************************!*\
  !*** ./src/fetching.js ***!
  \*************************/
/*! exports provided: getGitHubUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGitHubUser\", function() { return getGitHubUser; });\nconst getGitHubUser = userLogin => fetch(\n    `https://api.github.com/users/${userLogin}`\n);\n\n//# sourceURL=webpack:///./src/fetching.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetching_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetching.js */ \"./src/fetching.js\");\n/* harmony import */ var _loadProfile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadProfile.js */ \"./src/loadProfile.js\");\n\n\n\nconst getJson = response => response.json();\n\nconst print = profile => profile.forEach(element => document.body.appendChild(element));\n\nconst getUser = userLogin => {\n    return Object(_fetching_js__WEBPACK_IMPORTED_MODULE_0__[\"getGitHubUser\"])(userLogin)\n        .then(getJson)\n        .then(_loadProfile_js__WEBPACK_IMPORTED_MODULE_1__[\"loadProfile\"])\n        .then(print)\n        .catch(error => {\n            alert(error);\n            return Promise.reject(error)\n        });\n};\n\nconst userLogin = window.location.toString().split('?')[1];\ngetUser(userLogin);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadProfile.js":
/*!****************************!*\
  !*** ./src/loadProfile.js ***!
  \****************************/
/*! exports provided: loadProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadProfile\", function() { return loadProfile; });\nconst loadProfile = (profile) =>\n    new Promise(\n        (resolve, reject) => {\n            const img = document.createElement('img');\n            img.src = profile.avatar_url;\n            img.style.border = '1px solid #000';\n            const userName = document.createElement('h1');\n            userName.innerHTML = profile.name;\n            const userLogin = document.createElement('h2');\n            userLogin.innerHTML = profile.login;\n            const company = document.createElement('p');\n            company.innerHTML = profile.company;\n            const location = document.createElement('p');\n            location.innerHTML = profile.location;\n            const someText = document.createElement('p');\n            someText.innerHTML = 'Statistics:';\n            someText.style.fontWeight = 'bold';\n            const repos = document.createElement('p');\n            repos.innerHTML = 'Repositories: ' + profile.public_repos;\n            const following = document.createElement('p');\n            following.innerHTML = 'Following: ' + profile.following;\n            const followers = document.createElement('p');\n            followers.innerHTML = 'Followers: ' + profile.followers;\n\n            const resultProfile = [\n                img,\n                userName,\n                userLogin,\n                company,\n                location,\n                someText,\n                repos,\n                following,\n                followers\n            ];\n\n            img.onload = () => {\n                resolve(resultProfile);\n            };\n            img.onerror = error => {\n                reject(alert('Cannot load image'))\n            };\n        }\n    );\n\n//# sourceURL=webpack:///./src/loadProfile.js?");

/***/ })

/******/ });