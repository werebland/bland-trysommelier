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

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

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

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__("2mql"));

var utils_1 = __webpack_require__("p8BD");

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

/***/ "20a2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nOHt")


/***/ }),

/***/ "2mql":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__("UWCm");
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

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EfMu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/StepLabel");

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "Hwqr":
/***/ (function(module, exports) {

module.exports = require("re-base");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KK4J":
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

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

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "OvFP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Step");

/***/ }),

/***/ "R18i":
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "SA7f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/set.js
var set = __webpack_require__("ttDY");
var set_default = /*#__PURE__*/__webpack_require__.n(set);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-pose"
var external_react_pose_ = __webpack_require__("R18i");
var external_react_pose_default = /*#__PURE__*/__webpack_require__.n(external_react_pose_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// EXTERNAL MODULE: external "firebase/storage"
var storage_ = __webpack_require__("ha8t");

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: external "next-server/head"
var head_ = __webpack_require__("U7sd");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-no-ssr"
var external_react_no_ssr_ = __webpack_require__("KK4J");
var external_react_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_react_no_ssr_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/Stepper"
var Stepper_ = __webpack_require__("UpG9");
var Stepper_default = /*#__PURE__*/__webpack_require__.n(Stepper_);

// EXTERNAL MODULE: external "@material-ui/core/Step"
var Step_ = __webpack_require__("OvFP");
var Step_default = /*#__PURE__*/__webpack_require__.n(Step_);

// EXTERNAL MODULE: external "@material-ui/core/StepLabel"
var StepLabel_ = __webpack_require__("EfMu");
var StepLabel_default = /*#__PURE__*/__webpack_require__.n(StepLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__("aNEW");
var external_react_dropzone_default = /*#__PURE__*/__webpack_require__.n(external_react_dropzone_);

// CONCATENATED MODULE: ./components/MenuAdder.jsx






var MenuAdderContainer = external_styled_components_default.a.div.withConfig({
  displayName: "MenuAdder__MenuAdderContainer",
  componentId: "sc-11ev8x6-0"
})(["width:100%;max-width:720px;"]);
var StyledTextField = external_styled_components_default()(TextField_default.a).withConfig({
  displayName: "MenuAdder__StyledTextField",
  componentId: "sc-11ev8x6-1"
})(["width:100% !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;& fieldset{border-radius:0 !important;border:4px solid #1f1f1f !important;}& input{border-radius:0 !important;font-family:'Source Sans Pro',sans-serif !important;}"]);
var DropzoneContainer = external_styled_components_default.a.div.withConfig({
  displayName: "MenuAdder__DropzoneContainer",
  componentId: "sc-11ev8x6-2"
})(["width:100%;height:140px;border:2px dashed ", ";padding:24px;box-sizing:border-box;border-radius:0;background:#fff;display:flex;align-items:center;justify-content:center;margin-bottom:16px;position:relative;transition:0.2s ease-out all;& .initiate-dropzone{padding:24px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;position:absolute;width:100%:height:100%;top:0;right:0;bottom:0;left:0;}"], function (props) {
  return props.active ? '#1f1f1f' : '#9f9f9f';
});
var PosedFilesContainer = external_react_pose_default.a.div({
  enter: {
    staggerChildren: 300
  },
  exit: {
    staggerChildren: 300
  }
});
var FilesContainer = external_styled_components_default()(function (props) {
  return external_react_default.a.createElement(PosedFilesContainer, props);
}).withConfig({
  displayName: "MenuAdder__FilesContainer",
  componentId: "sc-11ev8x6-3"
})(["width:100%;display:flex;flex-flow:column nowrap;margin-bottom:16px;"]);
var PosedFile = external_react_pose_default.a.div({
  enter: {
    y: "0",
    opacity: 1
  },
  exit: {
    y: "32px",
    opacity: 0
  },
  preEnter: {
    y: "32px",
    opacity: 0
  }
});
var File = external_styled_components_default()(function (props) {
  return external_react_default.a.createElement(PosedFile, props);
}).withConfig({
  displayName: "MenuAdder__File",
  componentId: "sc-11ev8x6-4"
})(["width:100%;border:4px solid #1f1f1f;box-sizing:border-box;margin-bottom:8px;padding:16px;display:flex;flex-flow:row nowrap;align-items:center;opacity:0;transform:translate(0,32px);&:last-of-type{margin-bottom:0;}"]);
var FileRemove = external_styled_components_default.a.span.withConfig({
  displayName: "MenuAdder__FileRemove",
  componentId: "sc-11ev8x6-5"
})(["padding:16px;"]);

var MenuAdder_MenuAdder = function MenuAdder(_ref) {
  var handleDrop = _ref.handleDrop,
      files = _ref.files,
      handleName = _ref.handleName,
      handleRemove = _ref.handleRemove;
  return external_react_default.a.createElement(MenuAdderContainer, null, external_react_default.a.createElement(external_react_dropzone_default.a, {
    onDrop: function onDrop(accepted, rejected) {
      return handleDrop(accepted, rejected);
    }
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps,
        isDragActive = _ref2.isDragActive;
    return external_react_default.a.createElement(DropzoneContainer, _extends({}, getRootProps({
      refKey: 'innerRef'
    }), {
      className: "initiate-dropzone",
      active: isDragActive
    }), external_react_default.a.createElement("input", getInputProps()), isDragActive ? external_react_default.a.createElement("p", null, "Drop files here...") : external_react_default.a.createElement("p", null, "Try dropping some files here, or click to select files to upload."));
  }), external_react_default.a.createElement(FilesContainer, null, files.map(function (file, i) {
    return external_react_default.a.createElement(File, {
      key: i
    }, external_react_default.a.createElement(StyledTextField, {
      label: "Menu name",
      variant: "outlined",
      onChange: function onChange(e) {
        return handleName(e.target.value, i);
      },
      value: file.name
    }), external_react_default.a.createElement(FileRemove, {
      onClick: function onClick() {
        return handleRemove(i);
      }
    }, external_react_default.a.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }, external_react_default.a.createElement("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    }), external_react_default.a.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }))));
  })));
};

/* harmony default export */ var components_MenuAdder = (MenuAdder_MenuAdder);
// EXTERNAL MODULE: ./components/Navbar.jsx
var Navbar = __webpack_require__("Y038");

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__("OdWO");
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/OutlinedInput"
var OutlinedInput_ = __webpack_require__("ZVla");
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput_);

// CONCATENATED MODULE: ./components/RestaurantForm.jsx








var RestaurantFormContainer = external_styled_components_default.a.div.withConfig({
  displayName: "RestaurantForm__RestaurantFormContainer",
  componentId: "sc-171m2k6-0"
})(["width:100%;max-width:360px;"]);
var RestaurantForm_StyledTextField = external_styled_components_default()(TextField_default.a).withConfig({
  displayName: "RestaurantForm__StyledTextField",
  componentId: "sc-171m2k6-1"
})(["width:100% !important;max-width:360px !important;margin-bottom:16px !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;& fieldset{border-radius:0 !important;border:4px solid #1f1f1f !important;}& input{border-radius:0 !important;font-family:'Source Sans Pro',sans-serif !important;}"]);
var StyledFormControl = external_styled_components_default()(FormControl_default.a).withConfig({
  displayName: "RestaurantForm__StyledFormControl",
  componentId: "sc-171m2k6-2"
})([""]);

var RestaurantForm_RestaurantForm = function RestaurantForm(_ref) {
  var handleChange = _ref.handleChange,
      restaurant = _ref.restaurant;
  return external_react_default.a.createElement(RestaurantFormContainer, null, external_react_default.a.createElement(RestaurantForm_StyledTextField, {
    variant: "outlined",
    label: "Name",
    name: "name",
    value: restaurant.name,
    onChange: function onChange(e) {
      return handleChange(e.target);
    },
    autoFocus: true
  }), external_react_default.a.createElement(RestaurantForm_StyledTextField, {
    variant: "outlined",
    label: "Cuisine",
    name: "cuisine",
    value: restaurant.cuisine,
    onChange: function onChange(e) {
      return handleChange(e.target);
    }
  }), external_react_default.a.createElement(FormControl_default.a, {
    variant: "outlined"
  }, external_react_default.a.createElement(InputLabel_default.a, {
    htmlFor: "outlined-age-simple"
  }, "Price"), external_react_default.a.createElement(Select_default.a, {
    value: restaurant.price,
    onChange: function onChange(e) {
      return handleChange(e.target);
    },
    input: external_react_default.a.createElement(OutlinedInput_default.a, {
      name: "age",
      id: "outlined-age-simple"
    })
  }, external_react_default.a.createElement(MenuItem_default.a, {
    value: ""
  }, external_react_default.a.createElement("em", null, "None")), external_react_default.a.createElement(MenuItem_default.a, {
    value: 10
  }, "Ten"), external_react_default.a.createElement(MenuItem_default.a, {
    value: 20
  }, "Twenty"), external_react_default.a.createElement(MenuItem_default.a, {
    value: 30
  }, "Thirty"))));
};

/* harmony default export */ var components_RestaurantForm = (RestaurantForm_RestaurantForm);
// CONCATENATED MODULE: ./components/StepperContent.jsx





var StepperContentContainer = external_styled_components_default.a.div.withConfig({
  displayName: "StepperContent__StepperContentContainer",
  componentId: "sc-6qxs32-0"
})(["width:100%;"]);
var PosedStepperContent = external_react_pose_default.a.div({
  enter: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: function x(_ref) {
      var activeStep = _ref.activeStep,
          step = _ref.step;
      return step > activeStep ? 300 : -300;
    }
  }
});

var StepperContent_StepperContent = function StepperContent(_ref2) {
  var restaurant = _ref2.restaurant,
      activeStep = _ref2.activeStep,
      _handleName = _ref2.handleName,
      handleRestaurantChange = _ref2.handleRestaurantChange,
      menus = _ref2.menus,
      _handleDrop = _ref2.handleDrop,
      _handleRemove = _ref2.handleRemove;
  return external_react_default.a.createElement(StepperContentContainer, null, external_react_default.a.createElement(external_react_pose_["PoseGroup"], {
    activeStep: activeStep
  }, activeStep === 0 && external_react_default.a.createElement(PosedStepperContent, {
    key: 0,
    step: 0
  }, external_react_default.a.createElement(components_RestaurantForm, {
    restaurant: restaurant,
    handleChange: function handleChange(target) {
      return handleRestaurantChange(target);
    }
  })), activeStep === 1 && external_react_default.a.createElement(PosedStepperContent, {
    key: 1,
    step: 1
  }, external_react_default.a.createElement(components_MenuAdder, {
    files: menus,
    handleDrop: function handleDrop(accepted, rejected) {
      return _handleDrop(accepted, rejected);
    },
    handleRemove: function handleRemove(i) {
      return _handleRemove(i);
    },
    handleName: function handleName(value, i) {
      return _handleName(value, i);
    }
  }))));
};

/* harmony default export */ var components_StepperContent = (StepperContent_StepperContent);
// CONCATENATED MODULE: ./pages/initiate.js




























var storage = external_firebase_default.a.storage();
var storageRef = storage.ref();
var PageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "initiate__PageWrapper",
  componentId: "x6xz0w-0"
})(["padding:156px 24px 24px;box-sizing:border-box;border:10px solid #1f1f1f;min-height:100vh;display:flex;flex-flow:column nowrap;align-items:center;@media only screen and (min-width:960px){padding:156px 16px 16px;}"]);
var initiate_StyledTextField = external_styled_components_default()(TextField_default.a).withConfig({
  displayName: "initiate__StyledTextField",
  componentId: "x6xz0w-1"
})(["width:100% !important;max-width:360px !important;margin-bottom:16px !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;& fieldset{border-radius:0 !important;border:4px solid #1f1f1f !important;}& input{border-radius:0 !important;font-family:'Source Sans Pro',sans-serif !important;}"]);
var StyledButton = external_styled_components_default()(Button_default.a).withConfig({
  displayName: "initiate__StyledButton",
  componentId: "x6xz0w-2"
})(["height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:", "!important;border-radius:0px !important;text-transform:none !important;margin-bottom:8px !important;box-shadow:none !important;position:relative !important;border:0 !important;transition:0.2s ease-out all;padding:0 24px !important;&:after{content:\"\";display:block;position:absolute;height:56px;width:100%;background:", ";z-index:-1;top:4px;left:4px;}"], function (props) {
  return props.disabled ? '#dfdfdf' : '#1f1f1f';
}, function (props) {
  return props.disabled ? '#1f1f1f' : '#f94343';
});
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
  componentId: "x6xz0w-3"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin:0 auto 16px;display:inline-flex;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);
var StepperButtons = external_styled_components_default.a.div.withConfig({
  displayName: "initiate__StepperButtons",
  componentId: "x6xz0w-4"
})(["width:100%;display:flex;justify-content:space-between;"]);
var StepperContainer = external_styled_components_default.a.div.withConfig({
  displayName: "initiate__StepperContainer",
  componentId: "x6xz0w-5"
})(["width:100%;font-family:'Source Sans Pro',sans-serif;& .initiate__stepperStep span span svg.MuiStepIcon-active-674{color:#f94343 !important;}"]);
var StyledStep = external_styled_components_default()(Step_default.a).withConfig({
  displayName: "initiate__StyledStep",
  componentId: "x6xz0w-6"
})(["& span span svg{color:", " !important;}"], function (props) {
  return props.active ? '#1f1f1f' : props.completed ? '#1f1f1f' : '#9f9f9f';
});
var InitiateFormContainer = external_styled_components_default.a.div.withConfig({
  displayName: "initiate__InitiateFormContainer",
  componentId: "x6xz0w-7"
})(["width:100%;max-width:720px;"]);

function getSteps() {
  return ['Tell us about your restaurant', 'Add your menus', 'Select a plan'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';

    case 1:
      return 'What is an ad group anyways?';

    case 2:
      return 'This is the bit I really care about!';

    default:
      return 'Unknown step';
  }
}

var initiate_GetStarted =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(GetStarted, _Component);

  function GetStarted(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GetStarted);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(GetStarted).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "isStepOptional", function (step) {
      return false;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "handleNext", function () {
      var activeStep = _this.state.activeStep;
      var skipped = _this.state.skipped;

      if (_this.isStepSkipped(activeStep)) {
        skipped = new set_default.a(skipped.values());
        skipped.delete(activeStep);
      }

      _this.setState({
        activeStep: activeStep + 1,
        skipped: skipped
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "handleBack", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep - 1
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "handleReset", function () {
      _this.setState({
        activeStep: 0
      });
    });

    _this.state = {
      activeStep: 0,
      skipped: new set_default.a(),
      menus: [],
      status: "Upload",
      uid: ''
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
          console.log(uid);
          this.setState({
            currentStep: 1,
            uid: uid
          });
          this.fetchRestaurant(uid);
        } else {
          // User is signed out.
          // ...
          console.log('Signed out');
          this.setState({
            currentStep: 0
          });
        } // ...

      }.bind(this)).bind(this);
    }
  }, {
    key: "fetchRestaurant",
    value: function fetchRestaurant(uid) {
      var _this2 = this;

      config["a" /* default */].get('restaurants', {
        context: this,
        withIds: true,
        query: function query(ref) {
          return ref.where('owner', '==', uid);
        }
      }).then(function (data) {
        _this2.setState({
          restaurant: data[0]
        });
      }).catch(function (err) {//handle error
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
          file: file,
          progress: 0
        };
        menus.push(menu);
      });

      console.log(menus);
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "handleUpload",
    value: function handleUpload() {
      var _this$state = this.state,
          menus = _this$state.menus,
          uid = _this$state.uid;
      this.setState({
        status: "Uploading..."
      });

      external_lodash_default.a.forEach(menus, function (menu) {
        var file = menu.file;
        var metadata = {
          type: file.type
        };
        var menuRef = storageRef.child('menus/' + uid + '/' + menu.name);
        console.log(menuRef);
        console.log(metadata);
        var uploadTask = menuRef.put(file, metadata); // Listen for state changes, errors, and completion of the upload.

        uploadTask.on(external_firebase_default.a.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          console.log('Upload is ' + progress + '% done');

          switch (snapshot.state) {
            case external_firebase_default.a.storage.TaskState.PAUSED:
              // or 'paused'
              console.log('Upload is paused');
              break;

            case external_firebase_default.a.storage.TaskState.RUNNING:
              // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function (error) {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;

            case 'storage/canceled':
              // User canceled the upload
              break;

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        }, function () {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL);
          });
        }).bind(this);
      });

      this.setState({
        status: "Uploaded"
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
    value: function handleName(value, i) {
      var menus = this.state.menus;
      menus[i].name = value;
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "handleRestaurantChange",
    value: function handleRestaurantChange(target) {
      var value = target.value,
          name = target.name;
      var restaurant = this.state.restaurant;
      restaurant[name] = value;
      this.setState({
        restaurant: restaurant
      });
    }
  }, {
    key: "isStepSkipped",
    value: function isStepSkipped(step) {
      return this.state.skipped.has(step);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var classes = this.props.classes;
      var steps = getSteps();
      var activeStep = this.state.activeStep;
      return external_react_default.a.createElement(PageWrapper, {
        className: "getStarted"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Initiate | Somm | Your menu's personal assistant")), external_react_default.a.createElement(Navbar["a" /* default */], null), external_react_default.a.createElement(PageTitle, null, "Get access"), external_react_default.a.createElement(InitiateFormContainer, null, this.state.restaurant && external_react_default.a.createElement(external_react_no_ssr_default.a, null, external_react_default.a.createElement(StepperContainer, null, external_react_default.a.createElement(Stepper_default.a, {
        activeStep: activeStep
      }, steps.map(function (label, index) {
        var props = {};
        var labelProps = {};

        if (_this3.isStepOptional(index)) {
          labelProps.optional = external_react_default.a.createElement(Typography_default.a, {
            variant: "caption"
          }, "Optional");
        }

        if (_this3.isStepSkipped(index)) {
          props.completed = false;
        }

        return external_react_default.a.createElement(StyledStep, _extends({
          key: label
        }, props), external_react_default.a.createElement(StepLabel_default.a, labelProps, label));
      }))), activeStep === steps.length ? external_react_default.a.createElement("div", null, external_react_default.a.createElement(Typography_default.a, null, "All steps completed - you're finished"), external_react_default.a.createElement(Button_default.a, {
        onClick: this.handleReset
      }, "Reset")) : external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_StepperContent, {
        activeStep: this.state.activeStep,
        restaurant: this.state.restaurant,
        menus: this.state.menus,
        handleRestaurantChange: function handleRestaurantChange(target) {
          return _this3.handleRestaurantChange(target);
        },
        handleDrop: function handleDrop(accepted, rejected) {
          return _this3.handleDrop(accepted, rejected);
        },
        handleRemove: function handleRemove(i) {
          return _this3.handleRemove(i);
        },
        handleName: function handleName(value, i) {
          return _this3.handleName(value, i);
        }
      }), external_react_default.a.createElement(StepperButtons, null, external_react_default.a.createElement(StyledButton, {
        disabled: activeStep === 0,
        onClick: this.handleBack
      }, "Back"), external_react_default.a.createElement("div", null, this.isStepOptional(activeStep) && external_react_default.a.createElement(StyledButton, {
        variant: "contained",
        color: "primary",
        onClick: this.handleSkip
      }, "Skip"), external_react_default.a.createElement(StyledButton, {
        variant: "contained",
        color: "primary",
        onClick: this.handleNext
      }, activeStep === steps.length - 1 ? 'Finish' : 'Next')))))));
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

/***/ "U7sd":
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UWCm":
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UpG9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Stepper");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Y038":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("buZk");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




var NavbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Navbar__NavbarContainer",
  componentId: "sc-1kakccw-0"
})(["width:calc(100% - 20px);position:absolute;top:10px;left:10px;height:140px;background:#f94343;display:flex;align-items:center;justify-content:space-between;padding:16px;box-sizing:border-box;z-index:888;@media only screen and (min-width:960px){padding:16px 120px;}"]);
var NavbarBrand = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "Navbar__NavbarBrand",
  componentId: "sc-1kakccw-1"
})(["font-family:'Montserrat',sans-serif;font-weight:800;font-size:1.5rem;color:#fff;background:#f94343;margin:0;cursor:pointer;"]);
var NavbarItems = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "Navbar__NavbarItems",
  componentId: "sc-1kakccw-2"
})(["display:flex;align-items:center;flex-flow:row nowrap;padding:0;margin:0;"]);
var NavbarItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "Navbar__NavbarItem",
  componentId: "sc-1kakccw-3"
})(["display:inline-flex;list-style:none;margin-right:16px;font-weight:700;font-size:1rem;font-family:'Source Sans Pro',sans-serif;color:#fff;&:last-of-type{margin-right:0;}"]);
var NavbarButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "Navbar__NavbarButton",
  componentId: "sc-1kakccw-4"
})(["display:inline-flex;align-items:center;justify-content:center;font-size:1rem;font-family:'Source Sans Pro',sans-serif;font-weight:700;border-radius:0;background:#1f1f1f;color:#fff;cursor:pointer;position:relative;padding:8px 16px;&:after{content:\"\";display:block;position:absolute;height:36px;width:100%;background:#fff;z-index:-1;top:4px;left:4px;}"]);

var Navbar = function Navbar(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarBrand, null, "Somm")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItems, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItem, null, "Features"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItem, null, "Pricing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItem, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/initiate"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarButton, null, "Get access")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "ZVla":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

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

/***/ "aAV7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "b3CU":
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__("pbKT");

var setPrototypeOf = __webpack_require__("vjea");

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

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "buZk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _typeof2 = _interopRequireDefault(__webpack_require__("iZP3"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

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

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("20a2"));

var utils_1 = __webpack_require__("p8BD");

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

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

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

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _typeof2 = _interopRequireDefault(__webpack_require__("iZP3"));

var _construct2 = _interopRequireDefault(__webpack_require__("b3CU"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__("qxCs"));

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

var with_router_1 = __webpack_require__("0Bsm");

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
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);





if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
  var app = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp({
    apiKey: undefined,
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
var settings = {};
db.settings(settings);
var base = re_base__WEBPACK_IMPORTED_MODULE_0___default.a.createClass(db);
console.log(undefined);
console.log(process.env.REPOSITORY_URL);
console.log(process.env);
/* harmony default export */ __webpack_exports__["a"] = (base);

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "pbKT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aAV7");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "ttDY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zQQD");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "zQQD":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ })

/******/ });