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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return readFile; });\nfunction readFile() {\n    return (\n        `MONTH,DEPARTMENT,EMPLOYEE,AMOUNT\n2018-01,Legals,Smith A.,14289.66\n2018-01,Legals,Jonson B.,7408.05\n2018-01,Legals,Lee C.,10102.98\n2018-01,Legals,Janaro R.,8127.94\n2018-01,Legals,Conor J.,10341.33\n2018-01,Legals,Conor S.,7010.52\n2018-02,Legals,Smith A.,9927.47\n2018-02,Legals,Jonson B.,7053.96\n2018-02,Legals,Lee C.,7057.36\n2018-02,Legals,Janaro R.,13043.93\n2018-02,Legals,Conor J.,12613.82\n2018-02,Legals,Conor S.,10310.33\n2018-02,Legals,Travolta J.,10857.58\n2018-03,Legals,Smith A.,11043.21\n2018-03,Legals,Jonson B.,5144.06\n2018-03,Legals,Conor J.,11022.75\n2018-03,Legals,Conor S.,11651.08\n2018-03,Legals,Clark A.,7889.03\n2018-03,Legals,Doyle C.,6490.54\n2018-01,Compliance,Smith A.,14980.55\n2018-01,Compliance,Johnson B.,8132.88\n2018-01,Compliance,Williams C.,5635.36\n2018-01,Compliance,Jones D.,12454.79\n2018-01,Compliance,Brown F.,5787.25\n2018-01,Compliance,Davis G.,8618.50\n2018-02,Compliance,Smith A.,5093.56\n2018-02,Compliance,Johnson B.,11625.41\n2018-02,Compliance,Williams C.,11875.55\n2018-02,Compliance,Jones D.,10008.70\n2018-02,Compliance,Brown F.,6291.20\n2018-02,Compliance,Davis G.,12524.68\n2018-02,Compliance,Miller H.,11630.42\n2018-03,Compliance,Johnson B.,5681.83\n2018-03,Compliance,Williams C.,10941.43\n2018-03,Compliance,Jones D.,8859.54\n2018-03,Compliance,Brown F.,6663.98\n2018-03,Compliance,Davis G.,6988.17\n2018-03,Compliance,Miller H.,14138.79\n2018-01,Marketing & Sales,Wilson A.,13200.80\n2018-01,Marketing & Sales,Moore B.,6145.94\n2018-01,Marketing & Sales,Taylor C.,8459.98\n2018-01,Marketing & Sales,Anderson D.,8639.86\n2018-01,Marketing & Sales,Thomas E.,9384.85\n2018-01,Marketing & Sales,Jackson F.,7018.11\n2018-02,Marketing & Sales,White G.,13853.19\n2018-02,Marketing & Sales,Moore B.,5292.43\n2018-02,Marketing & Sales,Taylor C.,10465.98\n2018-02,Marketing & Sales,Anderson D.,5907.43\n2018-02,Marketing & Sales,Thomas E.,8700.87\n2018-02,Marketing & Sales,Jackson F.,7444.12\n2018-02,Marketing & Sales,Miller I.,12142.15\n2018-03,Marketing & Sales,Moore B.,8600.83\n2018-03,Marketing & Sales,Taylor C.,5185.76\n2018-03,Marketing & Sales,Anderson D.,5491.73\n2018-03,Marketing & Sales,Thomas E.,11236.40\n2018-03,Marketing & Sales,Jackson F.,12056.60\n2018-03,Marketing & Sales,Miller I.,6828.36\n2018-01,Production,Harris A.,10125.18\n2018-01,Production,Martin B.,5035.75\n2018-01,Production,Thompson C.,12100.76\n2018-01,Production,Garcia D.,13739.30\n2018-01,Production,Martinez E.,9274.72\n2018-01,Production,Robinson F.,10073.36\n2018-02,Production,Clark H.,7193.33\n2018-02,Production,Martin B.,13999.01\n2018-02,Production,Thompson C.,14287.98\n2018-02,Production,Garcia D.,8285.04\n2018-02,Production,Martinez E.,14948.03\n2018-02,Production,Robinson F.,13104.71\n2018-02,Production,Driller R.,5443.28\n2018-03,Production,Martin B.,14379.60\n2018-03,Production,Thompson C.,13450.47\n2018-03,Production,Garcia D.,11364.05\n2018-03,Production,Martinez E.,5548.34\n2018-03,Production,Robinson F.,10733.07\n2018-03,Production,Driller R.,13843.69\n2018-01,Service,King A.,8617.04\n2018-01,Service,Wright B.,13078.48\n2018-01,Service,Lopez C.,5150.28\n2018-01,Service,Hill D.,14136.06\n2018-01,Service,Scott E.,6731.88\n2018-01,Service,Green F.,13076.14\n2018-02,Service,Adams G.,12432.64\n2018-02,Service,Wright B.,6735.59\n2018-02,Service,Lopez C.,12947.72\n2018-02,Service,Hill D.,14863.50\n2018-02,Service,Scott E.,12849.35\n2018-02,Service,Green F.,13825.99\n2018-02,Service,Driller R.,11326.42\n2018-03,Service,Wright B.,10512.58\n2018-03,Service,Lopez C.,9330.24\n2018-03,Service,Hill D.,5373.41\n2018-03,Service,Scott E.,5327.75\n2018-03,Service,Green F.,6972.30\n2018-03,Service,Driller R.,10481.02\n`);\n}\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/formatData.js":
/*!***************************!*\
  !*** ./src/formatData.js ***!
  \***************************/
/*! exports provided: parseData, formatNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseData\", function() { return parseData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatNumber\", function() { return formatNumber; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\nfunction parseData() {\n    const fileData = Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().trim().split('\\n');\n\n    let properties = fileData[0].toLowerCase().split(',');\n    let result = [];\n\n    for (let i = 1; i < fileData.length; i++) {\n        result.push(fileData[i].split(',').reduce(function(array, cur, i) {\n            array[properties[i]] = (properties[i] !== 'amount') ? cur : parseFloat(cur);\n            return array;\n        }, {}));\n    }\n\n    return result;\n}\n\nfunction formatNumber(number) {\n    return number.toFixed(2).replace(/(\\d)(?=(\\d\\d\\d)+([^\\d]|$))/g, '$1 ');\n\n}\n\n\n\n//# sourceURL=webpack:///./src/formatData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formatData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatData */ \"./src/formatData.js\");\n/* harmony import */ var _proccessing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proccessing */ \"./src/proccessing.js\");\n/* harmony import */ var _printResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printResults */ \"./src/printResults.js\");\n\n\n\n\n\n\n\nconst data = Object(_formatData__WEBPACK_IMPORTED_MODULE_0__[\"parseData\"])();\nconst departmentSum = Object(_proccessing__WEBPACK_IMPORTED_MODULE_1__[\"getSumByField\"])('department');\nconst monthSum = Object(_proccessing__WEBPACK_IMPORTED_MODULE_1__[\"getSumByField\"])('month');\n\ndocument.getElementById('total').innerText = Object(_formatData__WEBPACK_IMPORTED_MODULE_0__[\"formatNumber\"])(Object(_proccessing__WEBPACK_IMPORTED_MODULE_1__[\"totalSum\"])(data));\nObject(_printResults__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_proccessing__WEBPACK_IMPORTED_MODULE_1__[\"getAvr\"])(monthSum(Object(_formatData__WEBPACK_IMPORTED_MODULE_0__[\"parseData\"])())), {id: 'monthPayment', header: 'Month'});\nObject(_printResults__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_proccessing__WEBPACK_IMPORTED_MODULE_1__[\"getAvr\"])(departmentSum(Object(_formatData__WEBPACK_IMPORTED_MODULE_0__[\"parseData\"])())), {id: 'departmentPayment', header: 'Department'});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/printResults.js":
/*!*****************************!*\
  !*** ./src/printResults.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return printResults; });\n/* harmony import */ var _formatData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatData */ \"./src/formatData.js\");\n\n\nfunction printResults(data, properties) {\n    let div = document.getElementById(properties['id']);\n    let tbl  = document.createElement('table');\n    tbl.className = \"table table-striped table-bordered\";\n    tbl.style.width  = '400px';\n    let tr = tbl.insertRow();\n    let td = tr.insertCell();\n    td.innerHTML = properties['header'];\n    td.style.fontWeight = 'bold';\n    td = tr.insertCell();\n    td.innerHTML = 'Avg.Payment';\n    td.style.fontWeight = 'bold';\n    td.style.textAlign = 'right';\n\n    for(let item in data) {\n        tr = tbl.insertRow();\n        td = tr.insertCell();\n        td.innerText = item;\n        td = tr.insertCell();\n        td.style.textAlign = 'right';\n        td.innerText = Object(_formatData__WEBPACK_IMPORTED_MODULE_0__[\"formatNumber\"])(data[item]);\n    }\n\n    div.appendChild(tbl);\n}\n\n//# sourceURL=webpack:///./src/printResults.js?");

/***/ }),

/***/ "./src/proccessing.js":
/*!****************************!*\
  !*** ./src/proccessing.js ***!
  \****************************/
/*! exports provided: totalSum, getSumByField, getAvr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"totalSum\", function() { return totalSum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSumByField\", function() { return getSumByField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAvr\", function() { return getAvr; });\nconst totalSum = data => data.reduce(function(sum, cur) {\n    sum += cur.amount;\n    return sum;\n}, 0);\n\nconst getSumByField = fieldName => data => data.reduce(function(array, cur) {\n    let item = (array[cur[fieldName]]) ? array[cur[fieldName]] : {sum : 0, counts: 0};\n    item.sum += cur.amount;\n    item.counts += 1;\n    array[cur[fieldName]] = item;\n    return array;\n}, []);\n\nfunction getAvr(data) {\n    let result = [];\n\n    for(let item in data) {\n        result[item] = data[item].sum / data[item].counts;\n    }\n\n    return result;\n}\n\n\n\n//# sourceURL=webpack:///./src/proccessing.js?");

/***/ })

/******/ });