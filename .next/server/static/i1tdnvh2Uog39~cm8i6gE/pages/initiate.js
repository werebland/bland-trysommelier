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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("SA7f");


/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Hwqr":
/***/ (function(module, exports) {

module.exports = require("re-base");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "R18i":
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "SA7f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-pose"
var external_react_pose_ = __webpack_require__("R18i");
var external_react_pose_default = /*#__PURE__*/__webpack_require__.n(external_react_pose_);

// EXTERNAL MODULE: external "react-step-progress-bar"
var external_react_step_progress_bar_ = __webpack_require__("rO4A");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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
// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__("aNEW");
var external_react_dropzone_default = /*#__PURE__*/__webpack_require__.n(external_react_dropzone_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// CONCATENATED MODULE: ./components/MenuAdder.jsx











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
  Object(inherits["a" /* default */])(MenuAdder, _Component);

  function MenuAdder() {
    Object(classCallCheck["a" /* default */])(this, MenuAdder);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MenuAdder).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MenuAdder, [{
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
// CONCATENATED MODULE: ./pages/initiate.js













var PageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "initiate__PageWrapper",
  componentId: "x6xz0w-0"
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
  displayName: "initiate__PageTitle",
  componentId: "x6xz0w-1"
})(["font-size:2rem;font-weight:700;color:#1f1f1f;margin-bottom:16px;text-align:center;"]);
var GetStartedFormProgress = external_styled_components_default.a.div.withConfig({
  displayName: "initiate__GetStartedFormProgress",
  componentId: "x6xz0w-2"
})([""]);
var GetStartedForm = external_styled_components_default.a.div.withConfig({
  displayName: "initiate__GetStartedForm",
  componentId: "x6xz0w-3"
})([""]);

var initiate_GetStarted =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(GetStarted, _Component);

  function GetStarted(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GetStarted);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(GetStarted).call(this, props));
    _this.state = {
      currentStep: 1,
      menus: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(GetStarted, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      external_firebase_default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
        } else {} // User is signed out.
        // ...
        // ...

      });
    }
  }, {
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

/* harmony default export */ var initiate = __webpack_exports__["default"] = (initiate_GetStarted);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var re_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Hwqr");
/* harmony import */ var re_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bnmT");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);




if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
  var app = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp({
    apiKey: process.env.FIREBASE_API,
    authDomain: "bland-sommelier.firebaseapp.com",
    databaseURL: "https://bland-sommelier.firebaseio.com",
    projectId: "bland-sommelier",
    storageBucket: "bland-sommelier.appspot.com"
  });
  app.settings = {
    timestampsInSnapshots: true
  };
} else {
  var app = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a;
}

var db = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore(app);
var settings = {
  timestampsInSnapshots: true
};
db.settings(settings);
var base = re_base__WEBPACK_IMPORTED_MODULE_0___default.a.createClass(db);
/* harmony default export */ __webpack_exports__["a"] = (base);

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "rO4A":
/***/ (function(module, exports) {

module.exports = require("react-step-progress-bar");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ })

/******/ });