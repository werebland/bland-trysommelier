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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(7);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(8);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-pose"
var external_react_pose_ = __webpack_require__(2);
var external_react_pose_default = /*#__PURE__*/__webpack_require__.n(external_react_pose_);

// CONCATENATED MODULE: ./components/Nav.jsx
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }



var NavWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Nav__NavWrapper",
  componentId: "sc-1t1rhnt-0"
})(["position:absolute;top:0;left:0;right:0;height:64px;background:transparent;z-index:88;"]);

var Nav_Nav = function Nav(_ref) {
  _objectDestructuringEmpty(_ref);

  return external_react_default.a.createElement(NavWrapper, null, "sommelier");
};

/* harmony default export */ var components_Nav = (Nav_Nav);
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







var PageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "pages__PageWrapper",
  componentId: "sc-1wbo52z-0"
})([""]);
var Hero = external_styled_components_default.a.section.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1wbo52z-1"
})(["width:100%;height:95vh;padding:60px 16px 240px 16px;box-sizing:border-box;position:relative;display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;background:#f94343;@media only screen and (min-width:600px){height:75vh;}"]);
var HeroTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "pages__HeroTitle",
  componentId: "sc-1wbo52z-2"
})(["width:100%;max-width:360px;font-size:2.5rem;font-weight:700;color:#fff;margin:0;margin-bottom:24px;@media only screen and (min-width:600px){font-size:2.5rem;}"]);
var HeroButton = external_styled_components_default()(Button_default.a).withConfig({
  displayName: "pages__HeroButton",
  componentId: "sc-1wbo52z-3"
})(["width:100%;max-width:360px;height:60px !important;min-height:60px;background:#fff !important;color:#1f1f1f !important;font-size:1.125rem !important;font-weight:500 !important;text-transform:none !important;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;position:relative;text-decoration:none !important;"]);
var HeroButtonLink = external_styled_components_default.a.a.withConfig({
  displayName: "pages__HeroButtonLink",
  componentId: "sc-1wbo52z-4"
})(["position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;text-decoration:none;display:flex;align-items:center;justify-content:center;"]);
var DemoContainer = external_styled_components_default.a.div.withConfig({
  displayName: "pages__DemoContainer",
  componentId: "sc-1wbo52z-5"
})(["width:100%;min-height:600px;display:flex;flex-flow:column nowrap;position:relative;margin-top:-240px;z-index:8;padding:0 16px;box-sizing:border-box;@media only screen and (min-width:600px){flex-flow:row nowrap;justify-content:center;}"]);
var Demo = external_styled_components_default.a.div.withConfig({
  displayName: "pages__Demo",
  componentId: "sc-1wbo52z-6"
})(["width:100%;max-width:360px;height:600px;display:block;background:aliceblue;border-radius:8px;order:-1;margin:auto;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32);@media only screen and (min-width:600px){margin:0 16px 0;order:0;}"]);
var PosedDemoCards = external_react_pose_default.a.div({
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -32,
    opacity: 0
  }
});
var DemoCards = external_styled_components_default()(function (props) {
  return external_react_default.a.createElement(PosedDemoCards, props);
}).withConfig({
  displayName: "pages__DemoCards",
  componentId: "sc-1wbo52z-7"
})(["display:flex;flex-flow:column nowrap;padding-top:16px;@media only screen and (min-width:600px){width:100%;max-width:360px;padding-top:0;}"]);
var PosedDemoCardContainer = external_react_pose_default.a.div({});
var DemoCardContainer = external_styled_components_default()(function (props) {
  return external_react_default.a.createElement(PosedDemoCardContainer, props);
}).withConfig({
  displayName: "pages__DemoCardContainer",
  componentId: "sc-1wbo52z-8"
})(["width:100%;border-radius:8px;padding:16px;box-sizing:border-box;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32);background:#fff;display:flex;flex-flow:row nowrap;margin-bottom:16px;&:last-of-type{margin-bottom:0;}"]);
var DemoCardIcon = external_styled_components_default.a.div.withConfig({
  displayName: "pages__DemoCardIcon",
  componentId: "sc-1wbo52z-9"
})(["width:64px;min-width:64px;margin-right:16px;display:inline-flex;align-items:center;justify-content:center;"]);
var DemoCardContent = external_styled_components_default.a.div.withConfig({
  displayName: "pages__DemoCardContent",
  componentId: "sc-1wbo52z-10"
})(["display:inline-flex;flex-flow:column nowrap;align-items:flex-start;font-size:.875rem;font-weight:500;color:#9f9f9f;"]);
var DemoCardTitle = external_styled_components_default.a.h3.withConfig({
  displayName: "pages__DemoCardTitle",
  componentId: "sc-1wbo52z-11"
})(["font-size:1rem;font-weight:700;color:#1f1f1f;margin:0 0 8px;"]);

var pages_DemoCard = function DemoCard(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      content = _ref.content;
  return external_react_default.a.createElement(DemoCardContainer, null, external_react_default.a.createElement(DemoCardIcon, null, icon), external_react_default.a.createElement(DemoCardContent, null, external_react_default.a.createElement(DemoCardTitle, null, title), content));
};

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
      return external_react_default.a.createElement(PageWrapper, null, external_react_default.a.createElement(components_Nav, null), external_react_default.a.createElement(Hero, null, external_react_default.a.createElement(HeroTitle, {
        className: "hero__title"
      }, "Meet your menu's personal assistant"), external_react_default.a.createElement(HeroButton, {
        className: "hero__button",
        alt: "Get started",
        variant: "contained"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/get-started"
      }, external_react_default.a.createElement(HeroButtonLink, null, "Add your menu")))), external_react_default.a.createElement(DemoContainer, null, external_react_default.a.createElement(DemoCards, null, external_react_default.a.createElement(pages_DemoCard, {
        icon: "code",
        title: "Simple",
        content: "With a single line of code, you can have Sommelier up and running on your website. No plugins or code bases to manage, upgrading your menu with Sommelier is as simple as copy and paste."
      }), external_react_default.a.createElement(pages_DemoCard, {
        icon: "stars",
        title: "Feature-rich",
        content: "From instantly searchable and sortable menu items to powerful filters and thoughtful design, Sommelier has been designed from the ground up to offer your diners with the most features to find exactly what they\u2019re looking for in your menu."
      }), external_react_default.a.createElement(pages_DemoCard, {
        icon: "stars",
        title: "Insightful",
        content: "See exactly what your diners are interested in like never before. Every item click and share are stored, so you can see what is engaging your diners and what you can focus your attention on."
      })), external_react_default.a.createElement(Demo, null, "Demo"), external_react_default.a.createElement(DemoCards, null, external_react_default.a.createElement(pages_DemoCard, {
        icon: "user",
        title: "Engaging",
        content: "Sommelier encourages your diners to engage with your website. This helps lead to more bookings and a larger social media participation, helping you reach your business goals."
      }), external_react_default.a.createElement(pages_DemoCard, {
        icon: "lightning bolt",
        title: "Dynamic",
        content: "As your menu changes, so does Sommelier. Add specials, item options, and multiple menus, supercharging your menu to do what it does best: convert potential diners."
      }), external_react_default.a.createElement(pages_DemoCard, {
        icon: "diamond",
        title: "Valuable",
        content: "For less than a coffee a day, Sommelier can provide your diners with a feature-rich and engaging experience while offering your business valuable insights and time-saving simplicity."
      }))));
    }
  }]);

  return Index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);