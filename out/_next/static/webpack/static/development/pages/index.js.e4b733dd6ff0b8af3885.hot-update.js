webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
var _jsxFileName = "/Users/Chris/trysommelier/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var StyledPaper = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "pages__StyledPaper",
  componentId: "sc-1wbo52z-0"
})(["border-radius:8px !important;padding:16px !important;box-sizing:border-box !important;background:#FFFFFF !important;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;"]);
var StyledTextField = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "pages__StyledTextField",
  componentId: "sc-1wbo52z-1"
})(["width:100% !important;margin-bottom:16px !important;"]);
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a).withConfig({
  displayName: "pages__StyledButton",
  componentId: "sc-1wbo52z-2"
})(["width:100% !important;height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:#1f1f1f !important;border-radius:8px !important;text-transform:none !important;margin-bottom:8px !important;"]);
var Hero = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].section.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1wbo52z-3"
})(["width:100%;padding:64px 16px 16px;box-sizing:border-box;@media only screen and (min-width:960px){padding:64px 120px 16px;}"]);
var HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h1.withConfig({
  displayName: "pages__HeroTitle",
  componentId: "sc-1wbo52z-4"
})(["font-family:'Montserrat',sans-serif;font-size:2.5rem;font-weight:800;color:#1f1f1f;margin:0 0 24px;text-align:center;& span{text-transform:uppercase;background:#f94343;color:#fff;font-size:4rem;padding:0 8px;box-sizing:border-box;}"]);
var HeroCopy = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "pages__HeroCopy",
  componentId: "sc-1wbo52z-5"
})(["font-family:'Source Sans Pro',sans-serif;font-weight:500;font-size:2rem;color:#1f1f1f;padding:0;margin:0 0 24px;"]);
var HeroSpan = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].span.withConfig({
  displayName: "pages__HeroSpan",
  componentId: "sc-1wbo52z-6"
})(["font-size:1rem;font-weight:500;color:#9f9f9f;width:100%;text-align:center;display:flex;justify-content:center;align-items:center;"]);
var Demo = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "pages__Demo",
  componentId: "sc-1wbo52z-7"
})(["width:100%;max-width:360px;height:600px;display:block;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;border-radius:8px;background-image:url('/static/demo.png');background-size:cover;background-position:center;"]);

var Index =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hero, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Sommelier | Your menu's personal assistant")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Your restaurants deserves", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "a better menu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroCopy, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Supercharge your business with Sommelier, a personal assistant for your menu with powerful features and valuable insights."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPaper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextField, {
        variant: "outlined",
        label: "Business email",
        placeholder: "tkeller@thefrenchlaundry.com",
        type: "email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        variant: "contained",
        size: "large",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Get started now")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroSpan, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Free forever \xB7 Cancel whenever \xB7 No credit card required"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Demo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.e4b733dd6ff0b8af3885.hot-update.js.map