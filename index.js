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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; }\\n\\nbody {\\n  background: #dbdcdb; }\\n\\nli, ul {\\n  list-style: none;\\n  padding: 0.125em; }\\n\\na {\\n  text-decoration: none; }\\n\\nbutton {\\n  background-color: #4CAF50;\\n  /* Green */\\n  border: none;\\n  text-align: center;\\n  text-decoration: none;\\n  font-size: x-large; }\\n  button.active {\\n    background-color: #108d14;\\n    /* Dark Green */ }\\n\\n.flex {\\n  display: flex; }\\n  @media only screen and (max-width: 1200px) {\\n    .flex {\\n      flex-direction: row; } }\\n  @media only screen and (max-width: 540px) {\\n    .flex {\\n      flex-direction: column; } }\\n\\n.justify-content {\\n  justify-content: space-between; }\\n\\n.text-center {\\n  text-align: center; }\\n\\n.content .filters {\\n  background: #efefef;\\n  padding: 1em;\\n  margin: 0.5em; }\\n  .content .filters h2 {\\n    margin: 0; }\\n  .content .filters .year-group, .content .filters .success-launch-button-group, .content .filters .success-landing-button-group {\\n    width: 150px;\\n    flex-direction: row; }\\n    @media only screen and (max-width: 540px) {\\n      .content .filters .year-group, .content .filters .success-launch-button-group, .content .filters .success-landing-button-group {\\n        width: auto; } }\\n  @media only screen and (max-width: 540px) {\\n    .content .filters {\\n      width: auto; } }\\n\\n.content .results {\\n  margin: 0.5em;\\n  flex-wrap: wrap; }\\n  .content .results ul.missions {\\n    background: #efefef;\\n    padding: 1em;\\n    width: 15em;\\n    margin: 0.25em;\\n    flex: 0 1; }\\n    .content .results ul.missions img {\\n      width: 15em;\\n      background: #dbdcdb;\\n      margin-bottom: 0.5em; }\\n      @media only screen and (max-width: 540px) {\\n        .content .results ul.missions img {\\n          width: 100%; } }\\n    .content .results ul.missions .details {\\n      display: flex; }\\n    @media only screen and (max-width: 540px) {\\n      .content .results ul.missions {\\n        width: auto; } }\\n  @media only screen and (max-width: 540px) {\\n    .content .results {\\n      width: auto;\\n      flex-wrap: unset; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/App.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/App */ \"./src/App.tsx\");\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_5___default()();\napp.get('/', /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var app, indexFile;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            app = react_dom_server__WEBPACK_IMPORTED_MODULE_6___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_7__[\"App\"], null));\n            indexFile = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(path__WEBPACK_IMPORTED_MODULE_2___default.a.join('build', 'index.html'));\n            fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFile(indexFile, 'utf8', function (err, data) {\n              if (err) {\n                console.error('Something went wrong:', err);\n                return res.status(500).send('Oops, better luck next time!');\n              }\n\n              return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n            });\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.use(express__WEBPACK_IMPORTED_MODULE_5___default.a[\"static\"]('build'));\nvar port = process.env.PORT || 8080;\napp.listen(port, function () {\n  return console.log(\"Running on localhost:\".concat(port));\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./App.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.scss\");\n    var insertCss = __webpack_require__(/*! ../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/App.scss?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.scss */ \"./src/App.scss\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/_components */ \"./src/_components/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\n\r\n\r\nfunction App() {\r\n    var _this = this;\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(2006), year = _a[0], setYear = _a[1];\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null), successfulLaunch = _b[0], setSuccessfulLaunch = _b[1];\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null), successfulLanding = _c[0], setSuccessfulLanding = _c[1];\r\n    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]), launches = _d[0], setLaunches = _d[1];\r\n    var getData = function () { return __awaiter(_this, void 0, void 0, function () {\r\n        var successfulLaunchQueryParam, successfulLandQueryParam, apiResponse;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    successfulLaunchQueryParam = successfulLaunch != null ? (successfulLaunch == true || successfulLaunch == false) && \"&launch_success=\" + JSON.stringify(successfulLaunch) : '';\r\n                    successfulLandQueryParam = successfulLanding != null ? (successfulLanding == true || successfulLanding == false) && \"&land_success=\" + JSON.stringify(successfulLanding) : '';\r\n                    return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"https://api.spacexdata.com/v3/launches?launch_year=\" + year + successfulLaunchQueryParam + successfulLandQueryParam)];\r\n                case 1:\r\n                    apiResponse = _a.sent();\r\n                    if (apiResponse.status == 200) {\r\n                        setLaunches(apiResponse.data);\r\n                    }\r\n                    else {\r\n                        setLaunches([]);\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n    // componentDidMount\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        getData();\r\n    }, [year, successfulLaunch, successfulLanding]);\r\n    var key = 0;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"SpaceX Launch Programs\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", { className: \"content flex\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key, className: \"filters\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Filters\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++ },\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++, className: \"text-center\" }, \"Launch Year\"),\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++ },\r\n                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, [[2006, 2007], [2008, 2009], [2010, 2011], [2012, 2013], [2014, 2015], [2016, 2017], [2018, 2019], [2020]]\r\n                                    .map(function (yearGroup, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: index },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", { className: \"year-group flex justify-content\" }, yearGroup.map(function (iteratedYear, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: index },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { className: year === iteratedYear ? 'active' : '', onClick: function () { return setYear(iteratedYear); } }, iteratedYear))); })))); }))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++ },\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++, className: \"text-center\" }, \"Successful Launch\"),\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++ },\r\n                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", { className: \"success-launch-button-group flex justify-content\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++ },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { className: successfulLaunch === true ? 'active' : '', onClick: function () { return setSuccessfulLaunch(true); } }, \"True\")),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++ },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { className: successfulLaunch === false ? 'active' : '', onClick: function () { return setSuccessfulLaunch(false); } }, \"False\")))))),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++ },\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++, className: \"text-center\" }, \"Successful Landing\"),\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++ },\r\n                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", { className: \"success-landing-button-group flex justify-content\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++ },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { className: successfulLanding === true ? 'active' : '', onClick: function () { return setSuccessfulLanding(true); } }, \"True\")),\r\n                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++ },\r\n                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", { className: successfulLanding === false ? 'active' : '', onClick: function () { return setSuccessfulLanding(false); } }, \"False\")))))))),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: key++, className: \"results flex\" },\r\n                launches && launches.length > 0 && launches.map(function (launchData, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", { className: \"missions\", key: index },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[\"Launch\"], { launchData: launchData })); }),\r\n                (!launches || launches.length == 0) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"No data found for selected filters\"))),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", { className: \"text-center\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Developed by:\"),\r\n            \" Vipul Dessai\")));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/_components/Launch.tsx":
/*!************************************!*\
  !*** ./src/_components/Launch.tsx ***!
  \************************************/
/*! exports provided: Launch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Launch\", function() { return Launch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\r\nfunction Launch(_a) {\r\n    var launchData = _a.launchData;\r\n    var title = launchData.mission_name + \" # \" + launchData.flight_number;\r\n    var rocketImg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", { src: launchData.links.mission_patch_small, alt: launchData.rocket.rocket_name + \" # \" + launchData.mission_name + \" # \" + launchData.flight_number });\r\n    var rocketData = {\r\n        \"Mission Ids\": launchData.mission_id.length > 0 ? launchData.mission_id.join() : 'Not Available',\r\n        \"Launch Year\": launchData.launch_year,\r\n        \"Successful Launch\": JSON.stringify(launchData.launch_success),\r\n    };\r\n    var cores = launchData.rocket.first_stage.cores;\r\n    if (cores && cores[0] && cores[0].land_success !== null && cores[0].land_success !== undefined)\r\n        rocketData[\"Successful Landing\"] = JSON.stringify(launchData.rocket.first_stage.cores[0].land_success);\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: 0 }, rocketImg),\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: 1 },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, title)))),\r\n        Object.keys(rocketData).map(function (key, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: index + 2 },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", { className: \"details\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: 0 },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null,\r\n                        key,\r\n                        \":\\u00A0\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", { key: 1 }, rocketData[key])))); })));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/_components/Launch.tsx?");

/***/ }),

/***/ "./src/_components/index.ts":
/*!**********************************!*\
  !*** ./src/_components/index.ts ***!
  \**********************************/
/*! exports provided: Launch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Launch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Launch */ \"./src/_components/Launch.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Launch\", function() { return _Launch__WEBPACK_IMPORTED_MODULE_0__[\"Launch\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./src/_components/index.ts?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });