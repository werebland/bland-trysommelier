module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(7);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(5);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(3);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(8);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(9);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Navbar.jsx
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }




var NavbarContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Navbar__NavbarContainer",
  componentId: "sc-1kakccw-0"
})(["width:100%;position:fixed;top:0;left:0;right:0;height:80px;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:16px;box-sizing:border-box;@media only screen and (min-width:960px){padding:16px 120px;}"]);
var NavbarBrand = external_styled_components_default.a.span.withConfig({
  displayName: "Navbar__NavbarBrand",
  componentId: "sc-1kakccw-1"
})(["font-family:'Montserrat',sans-serif;font-weight:800;font-size:1.5rem;color:#fff;background:#f94343;margin:0;"]);
var NavbarItems = external_styled_components_default.a.ul.withConfig({
  displayName: "Navbar__NavbarItems",
  componentId: "sc-1kakccw-2"
})(["display:flex;align-items:center;flex-flow:row nowrap;padding:0;margin:0;"]);
var NavbarItem = external_styled_components_default.a.li.withConfig({
  displayName: "Navbar__NavbarItem",
  componentId: "sc-1kakccw-3"
})(["display:inline-flex;list-style:none;margin-right:16px;&:last-of-type{margin-right:0;}"]);
var NavbarButton = external_styled_components_default.a.a.withConfig({
  displayName: "Navbar__NavbarButton",
  componentId: "sc-1kakccw-4"
})(["display:inline-flex;align-items:center;justify-content:center;font-size:1rem;font-family:'Source Sans Pro',sans-serif;border-radius:8px;background:#1f1f1f;color:#fff;cursor:pointer;position:relative;padding:8px 16px;"]);

var Navbar_Navbar = function Navbar(_ref) {
  _objectDestructuringEmpty(_ref);

  return external_react_default.a.createElement(NavbarContainer, null, external_react_default.a.createElement(NavbarBrand, null, "sommelier"), external_react_default.a.createElement(NavbarItems, null, external_react_default.a.createElement(NavbarItem, null, "Features"), external_react_default.a.createElement(NavbarItem, null, "Pricing"), external_react_default.a.createElement(NavbarItem, null, external_react_default.a.createElement(link_default.a, {
    href: "/initiate"
  }, external_react_default.a.createElement(NavbarButton, null, "Get Started")))));
};

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./pages/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var StyledPaper = external_styled_components_default()(Paper_default.a).withConfig({
  displayName: "pages__StyledPaper",
  componentId: "sc-1wbo52z-0"
})(["border-radius:8px !important;padding:16px !important;box-sizing:border-box !important;background:#FFFFFF !important;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;"]);
var StyledTextField = external_styled_components_default()(TextField_default.a).withConfig({
  displayName: "pages__StyledTextField",
  componentId: "sc-1wbo52z-1"
})(["width:100% !important;margin-bottom:16px !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;"]);
var StyledButton = external_styled_components_default()(Button_default.a).withConfig({
  displayName: "pages__StyledButton",
  componentId: "sc-1wbo52z-2"
})(["width:100% !important;height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:#1f1f1f !important;border-radius:8px !important;text-transform:none !important;margin-bottom:8px !important;box-shadow:none !important;"]);
var Hero = external_styled_components_default.a.section.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1wbo52z-3"
})(["width:100%;padding:80px 16px 16px;box-sizing:border-box;@media only screen and (min-width:960px){padding:80px 120px 16px;}"]);
var HeroTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "pages__HeroTitle",
  componentId: "sc-1wbo52z-4"
})(["font-family:'Montserrat',sans-serif;font-size:2.5rem;font-weight:800;color:#1f1f1f;margin:0 0 24px;text-align:center;& span{text-transform:uppercase;background:#f94343;color:#fff;font-size:4rem;padding:0 8px;box-sizing:border-box;display:block;}"]);
var HeroCopy = external_styled_components_default.a.p.withConfig({
  displayName: "pages__HeroCopy",
  componentId: "sc-1wbo52z-5"
})(["font-family:'Source Sans Pro',sans-serif;font-weight:500;font-size:1.75rem;color:#1f1f1f;padding:0;margin:0 0 24px;"]);
var HeroSpan = external_styled_components_default.a.span.withConfig({
  displayName: "pages__HeroSpan",
  componentId: "sc-1wbo52z-6"
})(["font-size:1rem;font-weight:500;color:#9f9f9f;width:100%;text-align:center;display:flex;justify-content:center;align-items:center;"]);
var Demo = external_styled_components_default.a.div.withConfig({
  displayName: "pages__Demo",
  componentId: "sc-1wbo52z-7"
})(["width:100%;max-width:360px;height:600px;display:block;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;border-radius:8px;background-image:url('/static/demo.png');background-size:cover;background-position:center;"]);

var pages_Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Hero, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Sommelier | Your menu's personal assistant")), external_react_default.a.createElement(components_Navbar, null), external_react_default.a.createElement(Grid_default.a, {
        container: true,
        spacing: 16
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        xl: 6
      }, external_react_default.a.createElement(HeroTitle, null, "Your restaurant deserves", external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", null, "a better menu")), external_react_default.a.createElement(HeroCopy, null, "Supercharge your business with Sommelier, a personal assistant for your menu with powerful features and valuable insights."), external_react_default.a.createElement(StyledPaper, null, external_react_default.a.createElement("form", null, external_react_default.a.createElement(StyledTextField, {
        variant: "outlined",
        label: "Business email",
        placeholder: "tkeller@thefrenchlaundry.com",
        type: "email",
        required: true
      }), external_react_default.a.createElement(StyledButton, {
        variant: "contained",
        size: "large",
        type: "submit"
      }, "Get started now")), external_react_default.a.createElement(HeroSpan, null, "Free forever \xB7 Cancel whenever \xB7 No credit card required"))), external_react_default.a.createElement(Grid_default.a, {
        item: true,
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        xl: 6,
        style: {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }
      }, external_react_default.a.createElement(Demo, null))));
    }
  }]);

  return Index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);