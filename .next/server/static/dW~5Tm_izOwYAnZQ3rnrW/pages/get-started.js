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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-step-progress-bar");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-pose"
var external_react_pose_ = __webpack_require__(2);
var external_react_pose_default = /*#__PURE__*/__webpack_require__.n(external_react_pose_);

// EXTERNAL MODULE: external "react-step-progress-bar"
var external_react_step_progress_bar_ = __webpack_require__(12);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(4);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__(5);
var external_react_dropzone_default = /*#__PURE__*/__webpack_require__.n(external_react_dropzone_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(6);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// CONCATENATED MODULE: ./components/MenuAdder.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MenuAdderContainer = external_styled_components_default.a.div.withConfig({
  displayName: "MenuAdder__MenuAdderContainer",
  componentId: "sc-11ev8x6-0"
})(["width:100%;max-width:720px;border:2px dashed #dfdfdf;padding:24px;box-sizing:border-box;border-radius:8px;background:#fff;"]);
var PosedPaper = external_react_pose_default.a.div({});
var StyledPaper = external_styled_components_default()(function (props) {
  return external_react_default.a.createElement(PosedPaper, props);
}).withConfig({
  displayName: "MenuAdder__StyledPaper",
  componentId: "sc-11ev8x6-1"
})(["width:100%;height:128px;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;border-radius:8px;padding:16px;box-sizing:border-box;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;margin-bottom:24px;position:relative;overflow:hidden;&:last-of-type{margin-bottom:0;}"]);
var MenuUploadStatus = external_styled_components_default.a.div.withConfig({
  displayName: "MenuAdder__MenuUploadStatus",
  componentId: "sc-11ev8x6-2"
})([""]);
var MenuUploadDetails = external_styled_components_default.a.div.withConfig({
  displayName: "MenuAdder__MenuUploadDetails",
  componentId: "sc-11ev8x6-3"
})([""]);
var FileDropzone = external_styled_components_default.a.div.withConfig({
  displayName: "MenuAdder__FileDropzone",
  componentId: "sc-11ev8x6-4"
})(["width:100%;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;background:", ";display:flex;align-items:center;justify-content:center;font-size:1.125rem;font-weight:500;color:#9f9f9f;"], function (props) {
  return props.isactive ? 'green' : '#fff';
});

var MenuAdder_MenuAdder =
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

      return external_react_default.a.createElement(MenuAdderContainer, null, external_react_default.a.createElement(external_react_pose_["PoseGroup"], null, this.props.menus.map(function (menu, i) {
        return external_react_default.a.createElement(StyledPaper, {
          key: i
        }, external_react_default.a.createElement(TextField_default.a, {
          variant: "outlined",
          label: "Menu name",
          value: menu.name,
          onChange: function onChange(e) {
            return _this.props.handleName(e.target.value);
          },
          margin: "normal"
        }), external_react_default.a.createElement("div", {
          onClick: function onClick() {
            return _this.props.handleRemove(i);
          }
        }, "x"));
      }), external_react_default.a.createElement(StyledPaper, {
        key: -1
      }, external_react_default.a.createElement(external_react_dropzone_default.a, {
        onDrop: function onDrop(accepted, rejected) {
          return _this.props.handleDrop(accepted, rejected);
        },
        multiple: true
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps,
            isDragActive = _ref.isDragActive;
        return external_react_default.a.createElement(FileDropzone, _extends({}, getRootProps(), {
          isactive: isDragActive
        }), external_react_default.a.createElement("input", getInputProps()), isDragActive ? external_react_default.a.createElement("p", null, "Drop files here...") : external_react_default.a.createElement("p", null, "Drop your menu(s) here"));
      }))));
    }
  }]);

  return MenuAdder;
}(external_react_["Component"]);

/* harmony default export */ var components_MenuAdder = (MenuAdder_MenuAdder);
// CONCATENATED MODULE: ./pages/get-started.js
function get_started_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { get_started_typeof = function _typeof(obj) { return typeof obj; }; } else { get_started_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return get_started_typeof(obj); }

function get_started_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function get_started_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function get_started_createClass(Constructor, protoProps, staticProps) { if (protoProps) get_started_defineProperties(Constructor.prototype, protoProps); if (staticProps) get_started_defineProperties(Constructor, staticProps); return Constructor; }

function get_started_possibleConstructorReturn(self, call) { if (call && (get_started_typeof(call) === "object" || typeof call === "function")) { return call; } return get_started_assertThisInitialized(self); }

function get_started_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function get_started_getPrototypeOf(o) { get_started_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return get_started_getPrototypeOf(o); }

function get_started_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) get_started_setPrototypeOf(subClass, superClass); }

function get_started_setPrototypeOf(o, p) { get_started_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return get_started_setPrototypeOf(o, p); }







var PageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "get-started__PageWrapper",
  componentId: "sc-1et02gn-0"
})(["padding:64px 24px 24px;box-sizing:border-box;"]);
var PosedPageTitle = external_react_pose_default.a.h1({
  closed: {
    flex: 1,
    fontSize: '20px'
  },
  open: {
    flex: 5,
    fontSize: '40px'
  }
});
var PageTitle = external_styled_components_default()(function (props) {
  return external_react_default.a.createElement(PosedPageTitle, props);
}).withConfig({
  displayName: "get-started__PageTitle",
  componentId: "sc-1et02gn-1"
})(["font-size:2rem;font-weight:700;color:#1f1f1f;margin-bottom:16px;text-align:center;"]);
var GetStartedFormProgress = external_styled_components_default.a.div.withConfig({
  displayName: "get-started__GetStartedFormProgress",
  componentId: "sc-1et02gn-2"
})([""]);
var GetStartedForm = external_styled_components_default.a.div.withConfig({
  displayName: "get-started__GetStartedForm",
  componentId: "sc-1et02gn-3"
})([""]);

var get_started_GetStarted =
/*#__PURE__*/
function (_Component) {
  get_started_inherits(GetStarted, _Component);

  function GetStarted(props) {
    var _this;

    get_started_classCallCheck(this, GetStarted);

    _this = get_started_possibleConstructorReturn(this, get_started_getPrototypeOf(GetStarted).call(this, props));
    _this.state = {
      currentStep: 1,
      menus: []
    };
    return _this;
  }

  get_started_createClass(GetStarted, [{
    key: "handleDrop",
    value: function handleDrop(accepted, rejected) {
      console.log(accepted);
      var menus = this.state.menus;

      external_lodash_default.a.forEach(accepted, function (file) {
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

      return external_react_default.a.createElement(PageWrapper, {
        className: "getStarted"
      }, external_react_default.a.createElement(external_react_pose_["PoseGroup"], {
        preEnterPose: "preEnter"
      }, this.state.currentStep == "1" && external_react_default.a.createElement(PageTitle, {
        key: "1"
      }, "Add your menu"), this.state.currentStep == "2" && external_react_default.a.createElement(PageTitle, {
        key: "2"
      }, "Choose your plan")), external_react_default.a.createElement(components_MenuAdder, {
        menus: this.state.menus,
        handleDrop: function handleDrop(accepted, rejected) {
          return _this2.handleDrop(accepted, rejected);
        },
        handleRemove: function handleRemove(i) {
          return _this2.handleRemove(i);
        }
      }));
    }
  }]);

  return GetStarted;
}(external_react_["Component"]);

/* harmony default export */ var get_started = __webpack_exports__["default"] = (get_started_GetStarted);

/***/ })
/******/ ]);