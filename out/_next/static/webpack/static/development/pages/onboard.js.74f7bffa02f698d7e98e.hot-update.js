webpackHotUpdate("static/development/pages/onboard.js",{

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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
var _jsxFileName = "/Users/Chris/trysomm-mvp/components/AccessForm.jsx";






var StyledTextField = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "AccessForm__StyledTextField",
  componentId: "sc-1n3u86u-0"
})(["width:100% !important;margin-bottom:16px !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;& fieldset{border:2px solid #1f1f1f !important;border-radius:8px !important;}& input{font-family:'Source Sans Pro',sans-serif !important;}"]);
var StyledPaper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "AccessForm__StyledPaper",
  componentId: "sc-1n3u86u-1"
})(["max-width:528px;width:100%;border-radius:8px !important;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;"]);
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "AccessForm__StyledButton",
  componentId: "sc-1n3u86u-2"
})(["width:100% !important;height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:#1f1f1f !important;border-radius:8px !important;text-transform:none !important;margin-bottom:8px !important;box-shadow:none !important;position:relative !important;"]);
var AccessFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "AccessForm__AccessFormContainer",
  componentId: "sc-1n3u86u-3"
})(["box-sizing:border-box;padding:16px;"]);
var PosedContainer = react_pose__WEBPACK_IMPORTED_MODULE_5__["default"].div({
  enter: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0,
    opacity: 0
  }
});
var AccessFormStatus = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AccessForm__AccessFormStatus",
  componentId: "sc-1n3u86u-4"
})(["display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;"]);
var AccessFormStatusEmoji = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].i.withConfig({
  displayName: "AccessForm__AccessFormStatusEmoji",
  componentId: "sc-1n3u86u-5"
})(["text-transform:none;font-size:4rem;margin:0;"]);
var AccessFormStatusTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "AccessForm__AccessFormStatusTitle",
  componentId: "sc-1n3u86u-6"
})(["font-family:'Montserrat',sans-serif;font-weight:700;color:#1f1f1f;font-size:1.5rem;margin:0 0 8px;"]);
var AccessFormStatusSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "AccessForm__AccessFormStatusSubtitle",
  componentId: "sc-1n3u86u-7"
})(["font-size:1.25rem;font-weight:400;"]);
var AccessFormReferral = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AccessForm__AccessFormReferral",
  componentId: "sc-1n3u86u-8"
})(["display:inline-flex;padding:2px;border:2px solid #1f1f1f;border-radius:8px;height:54px;"]);
var AccessFormReferralCode = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "AccessForm__AccessFormReferralCode",
  componentId: "sc-1n3u86u-9"
})(["height:100%;display:inline-flex;flex:1;align-items:center;padding:0 16px;font-size:1.25rem;font-weight:700;color:#1f1f1f;"]);
var AccessFormReferralCopy = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AccessForm__AccessFormReferralCopy",
  componentId: "sc-1n3u86u-10"
})(["width:48px;height:100%;background:#1f1f1f;cursor:pointer;border-top-right-radius:8px;border-bottom-right-radius:8px;"]);

var AccessForm = function AccessForm(_ref) {
  var handleAccess = _ref.handleAccess,
      email = _ref.email,
      handleEmail = _ref.handleEmail,
      name = _ref.name,
      handleName = _ref.handleName,
      accessStatus = _ref.accessStatus,
      firstName = _ref.firstName,
      referral = _ref.referral,
      handleClear = _ref.handleClear;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPaper, {
    elevation: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccessFormContainer, {
    onSubmit: function onSubmit(e) {
      return handleAccess(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_5__["PoseGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, accessStatus ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PosedContainer, {
    key: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, accessStatus === "success" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccessFormStatus, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccessFormStatusEmoji, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "\uD83D\uDC4B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccessFormStatusTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, firstName, ", you're on our list!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccessFormStatusSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "We'll get in touch when you get access."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccessFormReferral, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccessFormReferralCode, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, referral), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccessFormReferralCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "X"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Whoops! Something went wrong. Here's what we know:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, accessStatus), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    variant: "contained",
    onClick: function onClick() {
      return handleClear();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Try again"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PosedContainer, {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
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
      lineNumber: 150
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
      lineNumber: 161
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    variant: "contained",
    size: "large",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Get early access")))));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessForm);

/***/ })

})
//# sourceMappingURL=onboard.js.74f7bffa02f698d7e98e.hot-update.js.map