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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MenuAdder.jsx":
/*!**********************************!*\
  !*** ./components/MenuAdder.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Chris/trysommelier/components/MenuAdder.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var MenuAdderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MenuAdder__MenuAdderContainer",
  componentId: "sc-11ev8x6-0"
})(["width:100%;max-width:720px;border:2px dashed #dfdfdf;padding:24px;box-sizing:border-box;border-radius:8px;background:#fff;"]);
var PosedPaper = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.div({});
var StyledPaper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PosedPaper, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
}).withConfig({
  displayName: "MenuAdder__StyledPaper",
  componentId: "sc-11ev8x6-1"
})(["width:100%;height:128px;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;border-radius:8px;padding:16px;box-sizing:border-box;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;margin-bottom:24px;position:relative;overflow:hidden;&:last-of-type{margin-bottom:0;}"]);
var MenuUploadStatus = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MenuAdder__MenuUploadStatus",
  componentId: "sc-11ev8x6-2"
})([""]);
var MenuUploadDetails = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MenuAdder__MenuUploadDetails",
  componentId: "sc-11ev8x6-3"
})([""]);
var FileDropzone = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MenuAdder__FileDropzone",
  componentId: "sc-11ev8x6-4"
})(["width:100%;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;background:", ";display:flex;align-items:center;justify-content:center;font-size:1.125rem;font-weight:500;color:#9f9f9f;"], function (props) {
  return props.isactive ? 'green' : '#fff';
});

var MenuAdder =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuAdder, _Component);

  function MenuAdder() {
    _classCallCheck(this, MenuAdder);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuAdder).apply(this, arguments));
  }

  _createClass(MenuAdder, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuAdderContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_2__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.props.menus.map(function (menu, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPaper, {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
          variant: "outlined",
          label: "Menu name",
          value: menu.name,
          onChange: function onChange(e) {
            return _this.props.handleName(e.target.value);
          },
          margin: "normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onClick: function onClick() {
            return _this.props.handleRemove(i);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "x"));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPaper, {
        key: -1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onDrop: function onDrop(accepted, rejected) {
          return _this.props.handleDrop(accepted, rejected);
        },
        multiple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps,
            isDragActive = _ref.isDragActive;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FileDropzone, _extends({}, getRootProps(), {
          isactive: isDragActive,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, getInputProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        })), isDragActive ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, "Drop files here...") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, "Drop your menu(s) here"));
      }))));
    }
  }]);

  return MenuAdder;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuAdder);

/***/ }),

/***/ "./pages/initiate.js":
/*!***************************!*\
  !*** ./pages/initiate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_step_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-step-progress-bar */ "react-step-progress-bar");
/* harmony import */ var react_step_progress_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_step_progress_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MenuAdder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MenuAdder */ "./components/MenuAdder.jsx");
var _jsxFileName = "/Users/Chris/trysommelier/pages/initiate.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "initiate__PageWrapper",
  componentId: "x6xz0w-0"
})(["padding:64px 24px 24px;box-sizing:border-box;"]);
var PosedPageTitle = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.h1({
  closed: {
    flex: 1,
    fontSize: '20px'
  },
  open: {
    flex: 5,
    fontSize: '40px'
  }
});
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PosedPageTitle, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
}).withConfig({
  displayName: "initiate__PageTitle",
  componentId: "x6xz0w-1"
})(["font-size:2rem;font-weight:700;color:#1f1f1f;margin-bottom:16px;text-align:center;"]);
var GetStartedFormProgress = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "initiate__GetStartedFormProgress",
  componentId: "x6xz0w-2"
})([""]);
var GetStartedForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "initiate__GetStartedForm",
  componentId: "x6xz0w-3"
})([""]);

var GetStarted =
/*#__PURE__*/
function (_Component) {
  _inherits(GetStarted, _Component);

  function GetStarted(props) {
    var _this;

    _classCallCheck(this, GetStarted);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GetStarted).call(this, props));
    _this.state = {
      currentStep: 1,
      menus: []
    };
    return _this;
  }

  _createClass(GetStarted, [{
    key: "handleDrop",
    value: function handleDrop(accepted, rejected) {
      console.log(accepted);
      var menus = this.state.menus;

      lodash__WEBPACK_IMPORTED_MODULE_4___default.a.forEach(accepted, function (file) {
        var menu = {
          name: file.name,
          file: file
        };
        menus.push(menu);
      });

      console.log(menus);
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "handleRemove",
    value: function handleRemove(i) {
      var menus = this.state.menus;
      menus.splice(i, 1);
      console.log(menus);
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "handleName",
    value: function handleName(i, value) {
      var menus = this.state.menus;
      var menu = menus[i];
      menu.title = value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
        className: "getStarted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_2__["PoseGroup"], {
        preEnterPose: "preEnter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, this.state.currentStep == "1" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Add your menu"), this.state.currentStep == "2" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Choose your plan")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MenuAdder__WEBPACK_IMPORTED_MODULE_5__["default"], {
        menus: this.state.menus,
        handleDrop: function handleDrop(accepted, rejected) {
          return _this2.handleDrop(accepted, rejected);
        },
        handleRemove: function handleRemove(i) {
          return _this2.handleRemove(i);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }));
    }
  }]);

  return GetStarted;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GetStarted);

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/initiate.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/initiate.js */"./pages/initiate.js");


/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "react-step-progress-bar":
/*!******************************************!*\
  !*** external "react-step-progress-bar" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-step-progress-bar");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=initiate.js.map