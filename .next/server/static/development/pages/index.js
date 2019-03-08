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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AccessForm.jsx":
/*!***********************************!*\
  !*** ./components/AccessForm.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/Chris/trysomm-mvp/components/AccessForm.jsx";






var StyledTextField = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "AccessForm__StyledTextField",
  componentId: "sc-1n3u86u-0"
})(["width:100% !important;margin-bottom:16px !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;& fieldset{border:2px solid #1f1f1f !important;border-radius:8px !important;}& input{font-family:'Source Sans Pro',sans-serif !important;}"]);
var StyledPaper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "AccessForm__StyledPaper",
  componentId: "sc-1n3u86u-1"
})(["max-width:528px;width:100%;border-radius:8px !important;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "AccessForm__StyledButton",
  componentId: "sc-1n3u86u-2"
})(["width:100% !important;height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:#1f1f1f !important;border-radius:8px !important;text-transform:none !important;margin-bottom:8px !important;box-shadow:none !important;position:relative !important;"]);
var AccessFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "AccessForm__AccessFormContainer",
  componentId: "sc-1n3u86u-3"
})(["box-sizing:border-box;padding:16px;"]);
var PosedContainer = react_pose__WEBPACK_IMPORTED_MODULE_5___default.a.div({
  enter: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0,
    opacity: 0
  }
});

var AccessForm = function AccessForm(_ref) {
  var handleAccess = _ref.handleAccess,
      email = _ref.email,
      handleEmail = _ref.handleEmail,
      name = _ref.name,
      handleName = _ref.handleName,
      accessStatus = _ref.accessStatus,
      handleClear = _ref.handleClear;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPaper, {
    elevation: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccessFormContainer, {
    onSubmit: function onSubmit(e) {
      return handleAccess(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_5__["PoseGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, accessStatus ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PosedContainer, {
    key: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, accessStatus === "success" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "You're on our list!") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Whoops! Something went wrong. Here's what we know:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, accessStatus), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    variant: "contained",
    onClick: function onClick() {
      return handleClear();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Try again"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PosedContainer, {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextField, {
    type: "name",
    name: "name",
    onChange: function onChange(e) {
      return handleName(e.target.value);
    },
    value: name,
    required: true,
    variant: "outlined",
    label: "Name",
    InputLabelProps: {
      className: 'textfield__label'
    },
    placeholder: "Thomas Keller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextField, {
    type: "email",
    name: "email",
    onChange: function onChange(e) {
      return handleEmail(e.target.value);
    },
    value: email,
    required: true,
    variant: "outlined",
    label: "Business email",
    InputLabelProps: {
      className: 'textfield__label'
    },
    placeholder: "tkeller@thefrenchlaundry.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    variant: "contained",
    size: "large",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Get early access")))));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessForm);

/***/ }),

/***/ "./components/Features.jsx":
/*!*********************************!*\
  !*** ./components/Features.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/Chris/trysomm-mvp/components/Features.jsx";



var FeaturesContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({
  displayName: "Features__FeaturesContainer",
  componentId: "sc-1m4jecs-0"
})(["width:100%;height:100%;min-height:100vh;display:flex;flex-flow:column nowrap;align-items:center;padding:136px 16px 16px;box-sizing:border-box;@media only screen and (min-width:960px){padding:136px 120px 16px;}"]);
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3.withConfig({
  displayName: "Features__SectionTitle",
  componentId: "sc-1m4jecs-1"
})(["font-family:'Montserrat',sans-serif;font-size:2.5rem;font-weight:800;color:#1f1f1f;margin:0 auto;display:inline-block;text-align:center;& span{display:block;position:relative;}& span:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);
var SectionSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3.withConfig({
  displayName: "Features__SectionSubtitle",
  componentId: "sc-1m4jecs-2"
})(["position:relative;font-family:'Montserrat',sans-serif;font-size:2.5rem;font-weight:800;color:#1f1f1f;margin:0 auto 136px;display:inline-block;text-align:center;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);
var ComparisonGrid = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "Features__ComparisonGrid",
  componentId: "sc-1m4jecs-3"
})(["width:100%;max-width:720px;padding:16px 0;margin-bottom:136px !important;"]);
var ComparisonCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.article.withConfig({
  displayName: "Features__ComparisonCard",
  componentId: "sc-1m4jecs-4"
})(["width:100%;display:flex;align-items:center;justify-content:flex-start;flex-flow:column nowrap;padding:32px 0;border-radius:8px;"]);
var ComparisonCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h5.withConfig({
  displayName: "Features__ComparisonCardTitle",
  componentId: "sc-1m4jecs-5"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin:0 0 8px;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:2px;left:4px;z-index:-1;}"]);
var ComparisonCardSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Features__ComparisonCardSubtitle",
  componentId: "sc-1m4jecs-6"
})(["font-size:1.25rem;font-weight:700;font-family:'Source Sans Pro',sans-serif;color:#9f9f9f;text-transform:uppercase;margin-bottom:16px;"]);
var ComparisonCardItems = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "Features__ComparisonCardItems",
  componentId: "sc-1m4jecs-7"
})(["padding:0;margin:0;display:flex;flex-flow:column nowrap;align-items:center;"]);
var ComparisonCardItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "Features__ComparisonCardItem",
  componentId: "sc-1m4jecs-8"
})(["list-style:none;display:inline-flex;font-size:1.25rem;font-weight:700;font-family:'Source Sans Pro',sans-serif;color:#1f1f1f;"]);
var FeatureCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.article.withConfig({
  displayName: "Features__FeatureCard",
  componentId: "sc-1m4jecs-9"
})(["width:100%;display:flex;align-items:center;justify-content:flex-start;flex-flow:column nowrap;position:relative;margin-bottom:68px;"]);
var FeatureCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h5.withConfig({
  displayName: "Features__FeatureCardTitle",
  componentId: "sc-1m4jecs-10"
})(["display:inline-flex;font-size:1.5rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;margin:0 0 4px;position:relative;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0;left:4px;z-index:-1;}"]);
var FeatureCardCopy = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "Features__FeatureCardCopy",
  componentId: "sc-1m4jecs-11"
})(["padding:0;margin:0;display:inline-flex;font-size:1.125rem;font-weight:500;font-family:'Source Sans Pro',sans-serif;color:#1f1f1f;"]);
var FeatureCardIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Features__FeatureCardIcon",
  componentId: "sc-1m4jecs-12"
})(["position:absolute;top:16px;left:16px;width:60px;height:60px;& svg{scale:2.5;opacity:.25;color:#f94343;fill:#f94343;}"]);

var Features = function Features(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeaturesContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "Your menu converts browsers to diners."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Supercharge it with Somm."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonGrid, {
    container: true,
    spacing: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    sm: 12,
    md: 6,
    lg: 6,
    xl: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Then"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "without somm"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Static PDF, JPEG, or HTML"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Buried in menus"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Not searchable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Not sortable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "Not filterable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "Not sharable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "No insights")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    sm: 12,
    md: 6,
    lg: 6,
    xl: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCard, {
    style: {
      border: '2px solid #f94343'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "Now"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "with somm"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "Dynamic JS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "Embedded in your home page"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "Searchable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "Sortable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "Filterable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "Sharable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, "Valuable insights"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    spacing: 16,
    style: {
      marginBottom: '68px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, "Simple"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "With a single line of code, you can have Somm up and running on your website. No plugins or code bases to manage, upgrading your menu with Somm is as simple as copy and paste."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "Feature-rich"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, "From instantly searchable and sortable menu items to powerful filters and thoughtful design, Sommelier has been designed from the ground up to offer your diners with the most features to find exactly what they\u2019re looking for in your menu."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, "Insightful"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "See exactly what your diners are interested in like never before. Every item click and share are stored, so you can see what is engaging your diners and what you can focus your attention on."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, "Engaging"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, "Sommelier encourages your diners to engage with your website. This helps lead to more bookings and a larger social media participation, helping you reach your business goals."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, "Dynamic"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "As your menu changes, so does Sommelier. Add specials, item options, and multiple menus, supercharging your menu to do what it does best: convert potential diners."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, "Valuable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "For less than a coffee a day, Sommelier can provide your diners with a feature-rich and engaging experience while offering your business valuable insights and time-saving simplicity.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/Chris/trysomm-mvp/components/Navbar.jsx";



var NavbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navbar__NavbarContainer",
  componentId: "sc-1kakccw-0"
})(["width:calc(100% - 20px);position:fixed;top:0px;left:10px;height:90px;background:#f94343;display:flex;align-items:center;justify-content:space-between;padding:16px;box-sizing:border-box;z-index:8;@media only screen and (min-width:960px){padding:16px 120px;}"]);
var NavbarBrand = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "Navbar__NavbarBrand",
  componentId: "sc-1kakccw-1"
})(["font-family:'Montserrat',sans-serif;font-weight:800;font-size:1.5rem;color:#fff;background:#f94343;margin:0;cursor:pointer;position:relative;"]);
var NavbarLogo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navbar__NavbarLogo",
  componentId: "sc-1kakccw-2"
})(["height:32px;width:120px;background-image:url('/static/Somm-Logo.png');background-size:cover;background-position:center;display:flex;"]);
var NavbarItems = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "Navbar__NavbarItems",
  componentId: "sc-1kakccw-3"
})(["display:flex;align-items:center;flex-flow:row nowrap;padding:0;margin:0;"]);
var NavbarItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "Navbar__NavbarItem",
  componentId: "sc-1kakccw-4"
})(["display:inline-flex;list-style:none;margin-right:16px;font-weight:700;font-size:1rem;font-family:'Source Sans Pro',sans-serif;color:#fff;&:last-of-type{margin-right:0;}"]);
var NavbarButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "Navbar__NavbarButton",
  componentId: "sc-1kakccw-5"
})(["display:inline-flex;align-items:center;justify-content:center;font-size:1rem;font-family:'Source Sans Pro',sans-serif;font-weight:700;border-radius:8px;background:#1f1f1f;color:#fff;cursor:pointer;position:relative;padding:8px 16px;"]);

var Navbar = function Navbar(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarBrand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Features"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Pricing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/get-access",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Get access")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Pricing.jsx":
/*!********************************!*\
  !*** ./components/Pricing.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/Chris/trysomm-mvp/components/Pricing.jsx";





var PricingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({
  displayName: "Pricing__PricingWrapper",
  componentId: "cp9je-0"
})(["width:100%;display:flex;flex-flow:column nowrap;align-items:center;padding:16px;box-sizing:border-box;@media only screen and (min-width:960px){padding:16px 120px;}"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "Pricing__StyledButton",
  componentId: "cp9je-1"
})(["width:100% !important;height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:#1f1f1f !important;border-radius:8px !important;text-transform:none !important;margin-bottom:8px !important;box-shadow:none !important;position:relative !important;"]);
var PricingTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3.withConfig({
  displayName: "Pricing__PricingTitle",
  componentId: "cp9je-2"
})(["font-family:'Montserrat',sans-serif;font-size:2.5rem;font-weight:800;color:#fff;background:#f94343;margin:0 auto;display:inline-block;text-align:center;padding:8px 16px;"]);
var PricingSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h5.withConfig({
  displayName: "Pricing__PricingSubtitle",
  componentId: "cp9je-3"
})(["font-family:'Montserrat',sans-serif;font-size:2rem;font-weight:800;color:#1f1f1f;margin:0 auto 68px;text-align:center;"]);
var PricingGrid = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "Pricing__PricingGrid",
  componentId: "cp9je-4"
})(["width:100%;box-sizing:border-box;margin-bottom:136px !important;"]);
var PricingCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.article.withConfig({
  displayName: "Pricing__PricingCardContainer",
  componentId: "cp9je-5"
})(["width:100%;border:2px solid ", ";border-radius:8px;padding:16px;box-sizing:border-box;text-align:center;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;background:#fff;box-shadow:", ";margin:0 0 16px;"], function (props) {
  return props.primary ? '#f94343' : '#1f1f1f';
}, function (props) {
  return props.primary ? '0 2px 16px -2px rgba(31,31,31,0.32)' : 'none';
});
var PricingCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h4.withConfig({
  displayName: "Pricing__PricingCardTitle",
  componentId: "cp9je-6"
})(["font-family:'Montserrat',sans-serif;font-size:1.5rem;font-weight:800;color:", ";margin:0 0 16px;"], function (props) {
  return props.primary ? '#f94343' : '#1f1f1f';
});
var PricingCardPrice = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Pricing__PricingCardPrice",
  componentId: "cp9je-7"
})(["font-family:'Montserrat',sans-serif;font-size:4rem;font-weight:800;color:#1f1f1f;position:relative;padding:0 16px;display:flex;align-items:flex-start;line-height:4rem;&::before{content:\"$\";position:absolute;top:0;left:0;font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:800;}"]);
var PricingCardPriceSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Pricing__PricingCardPriceSubtitle",
  componentId: "cp9je-8"
})(["font-family:'Source Sans Pro',sans-serif;font-weight:400;color:#9f9f9f;font-size:1rem;margin:0 0 16px;"]);
var PricingCardItems = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "Pricing__PricingCardItems",
  componentId: "cp9je-9"
})(["padding:0;margin:0;display:flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;"]);
var PricingCardItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "Pricing__PricingCardItem",
  componentId: "cp9je-10"
})(["list-style:none;font-family:'Source Sans Pro',sans-serif;color:", ";font-size:1.25rem;font-weight:500;margin-bottom:8px;"], function (props) {
  return props.active ? '#1f1f1f' : '#9f9f9f';
});
var PricingAlert = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Pricing__PricingAlert",
  componentId: "cp9je-11"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin-bottom:40px;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);

var Pricing = function Pricing(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Pricing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Where guac is never extra"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingAlert, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Early Access: Unlimited items, All features, No charge."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingGrid, {
    container: true,
    spacing: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Appetizer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPriceSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "monthly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Complimentary setup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Minimal code integration"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "35 dishes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Single menu")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContainer, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "Entree"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "29"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPriceSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "monthly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Complimentary setup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Minimal code integration"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "100 dishes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Multiple menus"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/get-access",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Get early access"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Dessert"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPriceSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "monthly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Complimentary setup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "Minimal code integration"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, "Unlimited dishes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "Multiple locations"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),

/***/ "./components/SommWidget.jsx":
/*!***********************************!*\
  !*** ./components/SommWidget.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vh_check__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vh-check */ "vh-check");
/* harmony import */ var vh_check__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vh_check__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/Chris/trysomm-mvp/components/SommWidget.jsx";





var WidgetContainer = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "SommWidget__WidgetContainer",
  componentId: "i7qmkt-0"
})(["position:fixed;", ":", ";bottom:16px;z-index:8;"], function (props) {
  return props.position;
}, function (props) {
  return props.position == "left" ? '64px' : '16px';
});
var WidgetToggle = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "SommWidget__WidgetToggle",
  componentId: "i7qmkt-1"
})(["width:48px;height:48px;background:", ";box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);border-radius:8px;position:absolute;bottom:0;right:0;display:flex;align-items:center;justify-content:center;cursor:pointer;"], function (props) {
  return props.background;
});
var WidgetFrame = react_pose__WEBPACK_IMPORTED_MODULE_8___default.a.div({
  enter: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0,
    opacity: 0
  },
  init: {
    scale: 0,
    opacity: 0
  }
});
var StyledWidgetFrame = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WidgetFrame, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
}).withConfig({
  displayName: "SommWidget__StyledWidgetFrame",
  componentId: "i7qmkt-2"
})(["width:calc(100vw - 32px);max-width:360px;height:", ";max-height:600px;display:block;border:0;appearance:none;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);border-radius:8px;overflow:hidden;position:absolute;bottom:64px;", ":", ";scale:1;opacity:1;transform-origin:bottom ", ";"], function (props) {
  return "calc(".concat(props.viewportHeight, "px - 32px - 64px)");
}, function (props) {
  return props.position;
}, function (props) {
  return props.position == "left" ? '-48px' : '0';
}, function (props) {
  return props.position;
});
var WidgetToggleIcon = react_pose__WEBPACK_IMPORTED_MODULE_8___default.a.div({
  enter: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0,
    opacity: 0
  },
  init: {
    scale: 0,
    opacity: 0
  }
});
var StyledWidgetToggleIcon = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WidgetToggleIcon, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
}).withConfig({
  displayName: "SommWidget__StyledWidgetToggleIcon",
  componentId: "i7qmkt-3"
})(["width:24px;height:24px;display:flex;align-items:center;justify-content:center;scale:1;opacity:1;"]);
var spinnerAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(["0%{top:28px;left:28px;width:0;height:0;opacity:1;}100%{top:-1px;left:-1px;width:58px;height:58px;opacity:0;}"]);
var SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "SommWidget__SpinnerWrapper",
  componentId: "i7qmkt-4"
})(["width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;right:0;bottom:0;left:0;-webkit-overflow-scrolling:touch;overflow-y:scroll;border-radius:8px;& iframe{border-radius:8px;}"]);
var Spinner = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "SommWidget__Spinner",
  componentId: "i7qmkt-5"
})(["display:inline-flex;position:relative;width:64px;height:64px;& div{position:absolute;border:4px solid ", ";opacity:1;border-radius:50%;animation:", " 1.5s cubic-bezier(0,0.2,0.8,1) infinite}& div:nth-child(2){animation-delay:-0.5s;}"], function (props) {
  return props.color;
}, spinnerAnimation);

var Widget =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Widget, _Component);

  function Widget(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Widget);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Widget).call(this, props));
    _this.state = {
      open: false,
      hasOpened: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Widget, [{
    key: "handleToggle",
    value: function handleToggle() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var test = vh_check__WEBPACK_IMPORTED_MODULE_10___default()();
      console.log(test);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WidgetContainer, {
        position: this.props.position,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_8__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, this.state.open && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledWidgetFrame, {
        key: "0",
        viewportHeight: test.windowHeight,
        position: this.props.position,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SpinnerWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("iframe", {
        style: {
          zIndex: 8,
          position: 'absolute',
          top: 0,
          left: 0,
          background: 'transparent',
          display: 'block'
        },
        src: "https://bland-sommelier.herokuapp.com/".concat(this.props.username),
        sandbox: "allow-same-origin allow-scripts allow-popups allow-top-navigation",
        width: "100%",
        height: "100%",
        frameBorder: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Spinner, {
        color: this.props.iconColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WidgetToggle, {
        background: this.props.backgroundColor,
        onClick: function onClick() {
          return _this2.setState({
            open: !_this2.state.open,
            hasOpened: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_8__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, this.state.open ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledWidgetToggleIcon, {
        key: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        fill: this.props.iconColor,
        width: "18px",
        height: "18px",
        viewBox: "0 0 16 16",
        version: "1.1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Page-4",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Search",
        transform: "translate(-46.000000, -45.000000)",
        fill: this.props.iconColor,
        fillRule: "nonzero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Group",
        transform: "translate(32.000000, 32.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Group-2",
        transform: "translate(14.000000, 11.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        id: "Shape",
        points: "15.5555556 3.56666667 13.9888889 2 7.77777778 8.21111111 1.56666667 2 0 3.56666667 6.21111111 9.77777778 0 15.9888889 1.56666667 17.5555556 7.77777778 11.3444444 13.9888889 17.5555556 15.5555556 15.9888889 9.34444444 9.77777778",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }))))))) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledWidgetToggleIcon, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        width: "22px",
        height: "20px",
        viewBox: "0 0 22 20",
        version: "1.1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Page-3",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Desktop-HD",
        transform: "translate(-1379.000000, -720.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Group-10",
        transform: "translate(1054.000000, 90.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Group-9",
        transform: "translate(312.000000, 616.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "round-restaurant_menu-24px",
        transform: "translate(12.000000, 12.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        id: "Shape",
        points: "0 0 24 0 24 24 0 24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M7.0394622,13.5010047 L10.2283461,10.3121208 L3.25336682,3.34840963 C2.71249606,2.80753886 1.77724035,2.95402469 1.43919612,3.65264944 C0.639158114,5.33160244 0.93212978,7.39367224 2.31811112,8.79092173 L7.0394622,13.5010047 Z M14.6792618,11.4614711 C16.4032874,12.2615092 18.8259377,11.6981021 20.6175721,9.90646768 C22.769787,7.75425276 23.1867082,4.66678213 21.5302915,3.0103654 C19.8851429,1.36521682 16.7976723,1.77086989 14.6341892,3.92308482 C12.8425548,5.71471924 12.2791478,8.13736955 13.0791858,9.86139512 L2.87025003,20.0703309 C2.43079253,20.5097884 2.43079253,21.2196812 2.87025003,21.6591387 C3.30970753,22.0985962 4.01960041,22.0985962 4.45905791,21.6591387 L11.4340372,14.7066957 L18.3977483,21.6704069 C18.8372058,22.1098644 19.5470987,22.1098644 19.9865562,21.6704069 C20.4260137,21.2309494 20.4260137,20.5210565 19.9865562,20.081599 L13.0228451,13.1178879 L14.6792618,11.4614711 Z",
        id: "Shape",
        fill: this.props.iconColor,
        fillRule: "nonzero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      })))))))))));
    }
  }]);

  return Widget;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? url_1.format(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? url_1.format(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/NoSsr */ "@material-ui/core/NoSsr");
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_hotjar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-hotjar */ "react-hotjar");
/* harmony import */ var react_hotjar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_hotjar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Features */ "./components/Features.jsx");
/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Pricing */ "./components/Pricing.jsx");
/* harmony import */ var _components_AccessForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/AccessForm */ "./components/AccessForm.jsx");
/* harmony import */ var _components_SommWidget__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/SommWidget */ "./components/SommWidget.jsx");






var _jsxFileName = "/Users/Chris/trysomm-mvp/pages/index.js";
















var IndexWrapper = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div.withConfig({
  displayName: "pages__IndexWrapper",
  componentId: "sc-1wbo52z-0"
})(["box-sizing:border-box;border:10px solid #1f1f1f;overflow-x:hidden;&:before{content:\"\";height:10px;position:absolute;top:0;left:0;right:0;background:#1f1f1f;z-index:999;}"]);
var StyledPaper = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a).withConfig({
  displayName: "pages__StyledPaper",
  componentId: "sc-1wbo52z-1"
})(["border-radius:8px !important;padding:16px !important;box-sizing:border-box !important;background:#FFFFFF !important;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;"]);
var StyledTextField = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a).withConfig({
  displayName: "pages__StyledTextField",
  componentId: "sc-1wbo52z-2"
})(["width:100% !important;margin-bottom:16px !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;& fieldset{border-radius:0 !important;border:4px solid #1f1f1f !important;}& input{border-radius:0 !important;font-family:'Source Sans Pro',sans-serif !important;}"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a).withConfig({
  displayName: "pages__StyledButton",
  componentId: "sc-1wbo52z-3"
})(["width:100% !important;height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:#1f1f1f !important;border-radius:0px !important;text-transform:none !important;margin-bottom:8px !important;box-shadow:none !important;position:relative !important;&:after{content:\"\";display:block;position:absolute;height:56px;width:100%;background:#f94343;z-index:-1;top:4px;left:4px;}"]);
var Hero = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.section.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1wbo52z-4"
})(["width:100%;height:100%;min-height:100vh;padding:96px 16px 16px;box-sizing:border-box;@media only screen and (min-width:960px){padding:96px 120px 16px;}"]);
var HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.h1.withConfig({
  displayName: "pages__HeroTitle",
  componentId: "sc-1wbo52z-5"
})(["font-family:'Montserrat',sans-serif;font-size:2.5rem;font-weight:800;color:#fff;margin:0 0 24px;text-align:center;max-width:528px;box-sizing:border-box;& span{margin-top:8px;text-transform:uppercase;background:#fff;color:#f94343;font-size:3.25rem;padding:16px 8px;box-sizing:border-box;display:block;max-width:528px;box-sizing:border-box;}"]);
var HeroCopy = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.p.withConfig({
  displayName: "pages__HeroCopy",
  componentId: "sc-1wbo52z-6"
})(["font-family:'Source Sans Pro',sans-serif;font-weight:700;font-size:1.75rem;color:#fff;padding:0;margin:0 0 24px;max-width:528px;"]);
var HeroSpan = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.span.withConfig({
  displayName: "pages__HeroSpan",
  componentId: "sc-1wbo52z-7"
})(["font-size:1rem;font-weight:500;color:#9f9f9f;width:100%;text-align:center;display:flex;justify-content:center;align-items:center;"]);
var HeroBackground = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div.withConfig({
  displayName: "pages__HeroBackground",
  componentId: "sc-1wbo52z-8"
})(["width:100vw;height:100vh;position:absolute;top:90px;left:0;right:0;z-index:-1;& svg{width:100vw;}"]);
var Demo = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div.withConfig({
  displayName: "pages__Demo",
  componentId: "sc-1wbo52z-9"
})(["width:100%;max-width:360px;height:600px;display:block;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;border-radius:8px;background-image:url('/static/demo.png');background-size:cover;background-position:center;"]);

var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));
    _this.state = {
      accessStatus: null,
      email: "",
      name: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var hjid = "1229544";
      var hjsv = "6";
      react_hotjar__WEBPACK_IMPORTED_MODULE_16__["hotjar"].initialize(hjid, hjsv);
    }
  }, {
    key: "handleAccess",
    value: function handleAccess(e) {
      var _this2 = this;

      e.preventDefault();
      var _this$state = this.state,
          email = _this$state.email,
          name = _this$state.name;

      var names = lodash__WEBPACK_IMPORTED_MODULE_14___default.a.split(name, ' ', 2);

      var firstName = names[0];
      var lastName = names[1];
      var data = {
        email: email,
        firstName: firstName,
        lastName: lastName
      };

      var formattedData = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data);

      console.log(formattedData);
      axios__WEBPACK_IMPORTED_MODULE_15___default()({
        method: 'post',
        url: 'https://wt-2c136a182f9df0f639eceee9aa700a3d-0.sandbox.auth0-extend.com/somm-mailchimp',
        data: formattedData,
        headers: {
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Expose-Headers': 'x-auth0-proxy-stats, x-auth0-stats, x-wt-response-source, location',
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log(response);

        _this2.setState({
          accessStatus: 'success'
        });
      }).catch(function (error) {
        console.log(error.response.data);

        _this2.setState({
          accessStatus: error.response.data.details.title
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IndexWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Somm | Your menu's personal assistant")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SommWidget__WEBPACK_IMPORTED_MODULE_21__["default"], {
        username: "xoh",
        iconColor: "#f94343",
        backgroundColor: "#fff",
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Hero, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        item: true,
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Your restaurant deserves", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "a better menu")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroCopy, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Supercharge your business with Somm, a personal assistant for your menu with powerful features and valuable insights."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_AccessForm__WEBPACK_IMPORTED_MODULE_20__["default"], {
        handleAccess: function handleAccess(e) {
          return _this3.handleAccess(e);
        },
        email: this.state.email,
        handleEmail: function handleEmail(email) {
          return _this3.setState({
            email: email
          });
        },
        name: this.state.name,
        handleName: function handleName(name) {
          return _this3.setState({
            name: name
          });
        },
        accessStatus: this.state.accessStatus,
        handleClear: function handleClear() {
          return _this3.setState({
            accessStatus: "",
            name: "",
            email: ""
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Demo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroBackground, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        viewBox: "0 0 1440 770",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Page-3",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Desktop-HD",
        transform: "translate(0.000000, -95.000000)",
        fill: "#F94343",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        id: "Path-2",
        points: "0 769 1440 95 0 95",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Pricing__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Chris/trysomm-mvp/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/NoSsr":
/*!******************************************!*\
  !*** external "@material-ui/core/NoSsr" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/NoSsr");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hotjar":
/*!*******************************!*\
  !*** external "react-hotjar" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hotjar");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "vh-check":
/*!***************************!*\
  !*** external "vh-check" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vh-check");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map