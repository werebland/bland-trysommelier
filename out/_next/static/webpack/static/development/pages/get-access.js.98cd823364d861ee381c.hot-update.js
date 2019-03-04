webpackHotUpdate("static/development/pages/get-access.js",{

/***/ "./pages/get-access.js":
/*!*****************************!*\
  !*** ./pages/get-access.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AccessForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AccessForm */ "./components/AccessForm.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");





var _jsxFileName = "/Users/Chris/trysomm/pages/get-access.js";





var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "get-access__PageWrapper",
  componentId: "sc-1nj7fnu-0"
})(["padding:156px 24px 24px;box-sizing:border-box;border:10px solid #1f1f1f;min-height:100vh;display:flex;flex-flow:column nowrap;align-items:center;@media only screen and (min-width:960px){padding:156px 16px 16px;}"]);
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h1.withConfig({
  displayName: "get-access__PageTitle",
  componentId: "sc-1nj7fnu-1"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin:0 auto 16px;display:inline-flex;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);

var GetAccess =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GetAccess, _Component);

  function GetAccess(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GetAccess);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GetAccess).call(this, props));
    _this.state = {
      email: "",
      accessSuccess: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GetAccess, [{
    key: "handleAccess",
    value: function handleAccess(e) {
      e.preventDefault();
      var email = this.state.email;
      console.log(email);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(PageWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Get access | Somm | Your menu's personal assistant")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(PageTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Get access"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AccessForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        handleAccess: function handleAccess(e) {
          return _this2.handleAccess(e);
        },
        email: this.state.email,
        handleEmail: function handleEmail(email) {
          return _this2.setState({
            email: email
          });
        },
        accessSuccess: this.state.accessSuccess,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }));
    }
  }]);

  return GetAccess;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GetAccess);

/***/ })

})
//# sourceMappingURL=get-access.js.98cd823364d861ee381c.hot-update.js.map