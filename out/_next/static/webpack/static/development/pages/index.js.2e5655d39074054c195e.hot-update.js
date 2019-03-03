webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AccessForm.jsx":
/*!***********************************!*\
  !*** ./components/AccessForm.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Chris/trysomm/components/AccessForm.jsx";




var StyledTextField = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "AccessForm__StyledTextField",
  componentId: "sc-1n3u86u-0"
})(["width:100% !important;margin-bottom:16px !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;& fieldset{border-radius:0 !important;border:4px solid #1f1f1f !important;}& input{border-radius:0 !important;font-family:'Source Sans Pro',sans-serif !important;}"]);
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "AccessForm__StyledButton",
  componentId: "sc-1n3u86u-1"
})(["width:100% !important;height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:#1f1f1f !important;border-radius:0px !important;text-transform:none !important;margin-bottom:8px !important;box-shadow:none !important;position:relative !important;&:after{content:\"\";display:block;position:absolute;height:56px;width:100%;background:#f94343;z-index:-1;top:4px;left:4px;}"]);
var AccessFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "AccessForm__AccessFormContainer",
  componentId: "sc-1n3u86u-2"
})([""]);

var AccessForm = function AccessForm(_ref) {
  var handleAccess = _ref.handleAccess;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccessFormContainer, {
    onSubmit: function onSubmit(e) {
      return handleAccess(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextField, {
    type: "email",
    name: "email",
    required: true,
    variant: "outlined",
    label: "Business email",
    InputLabelProps: {
      className: 'textfield__label'
    },
    placeholder: "tkeller@thefrenchlaundry.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    variant: "contained",
    size: "large",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Get access"));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessForm);

/***/ })

})
//# sourceMappingURL=index.js.2e5655d39074054c195e.hot-update.js.map