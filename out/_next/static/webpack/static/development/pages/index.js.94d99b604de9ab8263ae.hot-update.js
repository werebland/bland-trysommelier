webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AccessForm.jsx":
/*!***********************************!*\
  !*** ./components/AccessForm.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/Chris/trysomm-mvp/components/Features.jsx";




var FeaturesContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "Features__FeaturesContainer",
  componentId: "sc-1m4jecs-0"
})(["width:100%;height:100%;min-height:100vh;display:flex;flex-flow:column nowrap;align-items:center;padding:136px 16px 16px;box-sizing:border-box;@media only screen and (min-width:960px){padding:136px 120px 16px;}"]);
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "Features__SectionTitle",
  componentId: "sc-1m4jecs-1"
})(["font-family:'Montserrat',sans-serif;font-size:2.5rem;font-weight:800;color:#1f1f1f;margin:0 auto;display:inline-block;text-align:center;& span{display:block;position:relative;}& span:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);
var SectionSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "Features__SectionSubtitle",
  componentId: "sc-1m4jecs-2"
})(["position:relative;font-family:'Montserrat',sans-serif;font-size:2.5rem;font-weight:800;color:#1f1f1f;margin:0 auto 136px;display:inline-block;text-align:center;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);
var ComparisonGrid = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "Features__ComparisonGrid",
  componentId: "sc-1m4jecs-3"
})(["width:100%;max-width:720px;padding:16px 0;margin-bottom:136px !important;"]);
var ComparisonCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].article.withConfig({
  displayName: "Features__ComparisonCard",
  componentId: "sc-1m4jecs-4"
})(["width:100%;display:flex;align-items:center;justify-content:flex-start;flex-flow:column nowrap;padding:32px 0;border-radius:8px;"]);
var ComparisonCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h5.withConfig({
  displayName: "Features__ComparisonCardTitle",
  componentId: "sc-1m4jecs-5"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin:0 0 8px;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:2px;left:4px;z-index:-1;}"]);
var ComparisonCardSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Features__ComparisonCardSubtitle",
  componentId: "sc-1m4jecs-6"
})(["font-size:1.25rem;font-weight:700;font-family:'Source Sans Pro',sans-serif;color:#9f9f9f;text-transform:uppercase;margin-bottom:16px;"]);
var ComparisonCardItems = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Features__ComparisonCardItems",
  componentId: "sc-1m4jecs-7"
})(["padding:0;margin:0;display:flex;flex-flow:column nowrap;align-items:center;"]);
var ComparisonCardItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Features__ComparisonCardItem",
  componentId: "sc-1m4jecs-8"
})(["list-style:none;display:inline-flex;font-size:1.25rem;font-weight:700;font-family:'Source Sans Pro',sans-serif;color:#1f1f1f;"]);
var FeatureCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].article.withConfig({
  displayName: "Features__FeatureCard",
  componentId: "sc-1m4jecs-9"
})(["width:100%;display:flex;align-items:center;justify-content:flex-start;flex-flow:column nowrap;position:relative;margin-bottom:68px;"]);
var FeatureCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h5.withConfig({
  displayName: "Features__FeatureCardTitle",
  componentId: "sc-1m4jecs-10"
})(["display:inline-flex;font-size:1.5rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;margin:0 0 4px;position:relative;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0;left:4px;z-index:-1;}"]);
var FeatureCardCopy = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Features__FeatureCardCopy",
  componentId: "sc-1m4jecs-11"
})(["padding:0;margin:0;display:inline-flex;font-size:1.125rem;font-weight:500;font-family:'Source Sans Pro',sans-serif;color:#1f1f1f;"]);
var FeatureCardIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Features__FeatureCardIcon",
  componentId: "sc-1m4jecs-12"
})(["position:absolute;top:16px;left:16px;width:60px;height:60px;& svg{transform:scale(2.5);opacity:.25;color:#f94343;fill:#f94343;}"]);

var Features = function Features(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Element"], {
    name: "features",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeaturesContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Your menu converts browsers to diners."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Supercharge it with Somm."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonGrid, {
    container: true,
    spacing: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
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
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Then"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "without somm"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Static PDF, JPEG, or HTML"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Buried in menus"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Not searchable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Not sortable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Not filterable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Not sharable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
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
      lineNumber: 233
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCard, {
    style: {
      border: '2px solid #f94343'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Now"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "with somm"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "Dynamic JS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "Embedded in your home page"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, "Searchable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "Sortable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, "Filterable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, "Sharable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComparisonCardItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
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
      lineNumber: 267
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
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "Simple"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
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
      lineNumber: 281
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "Feature-rich"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, "From instantly searchable and sortable menu items to powerful filters and thoughtful design, Somm has been designed from the ground up to offer your diners with the most features to find exactly what they\u2019re looking for in your menu."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "Insightful"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
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
      lineNumber: 307
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, "Engaging"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, "Somm encourages your diners to engage with your website. This helps lead to more bookings and a larger social media participation, helping you reach your business goals."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "Dynamic"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, "As your menu changes, so does Somm. Add specials, item options, and multiple menus, supercharging your menu to do what it does best: convert potential diners."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, "Valuable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeatureCardCopy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, "For less than a coffee a day, Somm can provide your diners with a feature-rich and engaging experience while offering your business valuable insights and time-saving simplicity."))))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/Chris/trysomm-mvp/components/Navbar.jsx";




var NavbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__NavbarContainer",
  componentId: "sc-1kakccw-0"
})(["width:calc(100% - 20px);position:fixed;top:0px;left:10px;height:90px;background:#f94343;display:flex;align-items:center;justify-content:space-between;padding:16px;box-sizing:border-box;z-index:8;@media only screen and (min-width:960px){padding:16px 120px;}"]);
var NavbarBrand = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "Navbar__NavbarBrand",
  componentId: "sc-1kakccw-1"
})(["font-family:'Montserrat',sans-serif;font-weight:800;font-size:1.5rem;color:#fff;background:#f94343;margin:0;cursor:pointer;position:relative;"]);
var NavbarLogo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__NavbarLogo",
  componentId: "sc-1kakccw-2"
})(["height:32px;width:120px;background-image:url('/static/Somm-Logo.png');background-size:cover;background-position:center;display:flex;"]);
var NavbarItems = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Navbar__NavbarItems",
  componentId: "sc-1kakccw-3"
})(["display:flex;align-items:center;flex-flow:row nowrap;padding:0;margin:0;"]);
var NavbarItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Navbar__NavbarItem",
  componentId: "sc-1kakccw-4"
})(["display:inline-flex;list-style:none;margin-right:16px;font-weight:700;font-size:1rem;font-family:'Source Sans Pro',sans-serif;color:#fff;&:last-of-type{margin-right:0;}"]);
var NavbarButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "Navbar__NavbarButton",
  componentId: "sc-1kakccw-5"
})(["display:inline-flex;align-items:center;justify-content:center;font-size:1rem;font-family:'Source Sans Pro',sans-serif;font-weight:700;border-radius:8px;background:#1f1f1f;color:#fff;cursor:pointer;position:relative;padding:8px 16px;"]);

var Navbar = function Navbar(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarBrand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "features",
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Features")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "pricing",
    smooth: true,
    duration: 500,
    offset: -96,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Pricing")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/get-access",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/Chris/trysomm-mvp/components/Pricing.jsx";






var PricingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "Pricing__PricingWrapper",
  componentId: "cp9je-0"
})(["width:100%;display:flex;flex-flow:column nowrap;align-items:center;padding:16px;box-sizing:border-box;@media only screen and (min-width:960px){padding:16px 120px;}"]);
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "Pricing__StyledButton",
  componentId: "cp9je-1"
})(["width:100% !important;height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:#1f1f1f !important;border-radius:8px !important;text-transform:none !important;margin-bottom:8px !important;box-shadow:none !important;position:relative !important;"]);
var PricingTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "Pricing__PricingTitle",
  componentId: "cp9je-2"
})(["font-family:'Montserrat',sans-serif;font-size:2.5rem;font-weight:800;color:#fff;background:#f94343;margin:0 auto;display:inline-block;text-align:center;padding:8px 16px;"]);
var PricingSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h5.withConfig({
  displayName: "Pricing__PricingSubtitle",
  componentId: "cp9je-3"
})(["font-family:'Montserrat',sans-serif;font-size:2rem;font-weight:800;color:#1f1f1f;margin:0 auto 68px;text-align:center;"]);
var PricingGrid = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "Pricing__PricingGrid",
  componentId: "cp9je-4"
})(["width:100%;box-sizing:border-box;margin-bottom:136px !important;"]);
var PricingCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].article.withConfig({
  displayName: "Pricing__PricingCardContainer",
  componentId: "cp9je-5"
})(["width:100%;border:2px solid ", ";border-radius:8px;padding:16px;box-sizing:border-box;text-align:center;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;background:#fff;box-shadow:", ";margin:0 0 16px;"], function (props) {
  return props.primary ? '#f94343' : '#1f1f1f';
}, function (props) {
  return props.primary ? '0 2px 16px -2px rgba(31,31,31,0.32)' : 'none';
});
var PricingCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "Pricing__PricingCardTitle",
  componentId: "cp9je-6"
})(["font-family:'Montserrat',sans-serif;font-size:1.5rem;font-weight:800;color:", ";margin:0 0 16px;"], function (props) {
  return props.primary ? '#f94343' : '#1f1f1f';
});
var PricingCardPrice = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Pricing__PricingCardPrice",
  componentId: "cp9je-7"
})(["font-family:'Montserrat',sans-serif;font-size:4rem;font-weight:800;color:#1f1f1f;position:relative;padding:0 16px;display:flex;align-items:flex-start;line-height:4rem;&::before{content:\"$\";position:absolute;top:0;left:0;font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:800;}"]);
var PricingCardPriceSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Pricing__PricingCardPriceSubtitle",
  componentId: "cp9je-8"
})(["font-family:'Source Sans Pro',sans-serif;font-weight:400;color:#9f9f9f;font-size:1rem;margin:0 0 16px;"]);
var PricingCardItems = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Pricing__PricingCardItems",
  componentId: "cp9je-9"
})(["padding:0;margin:0;display:flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;"]);
var PricingCardItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Pricing__PricingCardItem",
  componentId: "cp9je-10"
})(["list-style:none;font-family:'Source Sans Pro',sans-serif;color:", ";font-size:1.25rem;font-weight:500;margin-bottom:8px;"], function (props) {
  return props.active ? '#1f1f1f' : '#9f9f9f';
});
var PricingAlert = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Pricing__PricingAlert",
  componentId: "cp9je-11"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin-bottom:40px;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);

var Pricing = function Pricing(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Element"], {
    name: "pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Pricing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Where guac is never extra"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingAlert, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Early Access: Unlimited items, All features, No charge."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingGrid, {
    container: true,
    spacing: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
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
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Appetizer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPriceSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "monthly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Complimentary setup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Minimal code integration"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "35 dishes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
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
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContainer, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Entree"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "29"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPriceSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "monthly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Complimentary setup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Minimal code integration"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "100 dishes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Multiple menus"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/get-access",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
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
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Dessert"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPriceSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "monthly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Complimentary setup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "Minimal code integration"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "Unlimited dishes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "Multiple locations")))))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var vh_check__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vh-check */ "./node_modules/vh-check/dist/vh-check.js");
/* harmony import */ var vh_check__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vh_check__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/Chris/trysomm-mvp/components/SommWidget.jsx";





var WidgetContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SommWidget__WidgetContainer",
  componentId: "i7qmkt-0"
})(["position:fixed;", ":", ";bottom:16px;z-index:8;"], function (props) {
  return props.position;
}, function (props) {
  return props.position == "left" ? '64px' : '26px';
});
var WidgetToggle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SommWidget__WidgetToggle",
  componentId: "i7qmkt-1"
})(["width:48px;height:48px;background:", ";box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);border-radius:8px;position:absolute;bottom:0;right:0;display:flex;align-items:center;justify-content:center;cursor:pointer;"], function (props) {
  return props.background;
});
var WidgetFrame = react_pose__WEBPACK_IMPORTED_MODULE_8__["default"].div({
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
var StyledWidgetFrame = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(function (props) {
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
var WidgetToggleIcon = react_pose__WEBPACK_IMPORTED_MODULE_8__["default"].div({
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
var StyledWidgetToggleIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(function (props) {
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
var SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SommWidget__SpinnerWrapper",
  componentId: "i7qmkt-4"
})(["width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;right:0;bottom:0;left:0;-webkit-overflow-scrolling:touch;overflow-y:scroll;border-radius:8px;& iframe{border-radius:8px;}"]);
var Spinner = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
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

/***/ "./node_modules/@material-ui/core/Backdrop/Backdrop.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/Backdrop/Backdrop.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _Fade = _interopRequireDefault(__webpack_require__(/*! ../Fade */ "./node_modules/@material-ui/core/Fade/index.js"));

var styles = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    // Disable scroll capabilities.
    touchAction: 'none'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
exports.styles = styles;

function Backdrop(props) {
  var classes = props.classes,
      className = props.className,
      invisible = props.invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "invisible", "open", "transitionDuration"]);
  return _react.default.createElement(_Fade.default, (0, _extends2.default)({
    in: open,
    timeout: transitionDuration
  }, other), _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.invisible, invisible), className),
    "aria-hidden": "true"
  }));
}

 true ? Backdrop.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: _propTypes.default.bool,

  /**
   * If `true`, the backdrop is open.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : undefined;
Backdrop.defaultProps = {
  invisible: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiBackdrop'
})(Backdrop);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Button/Button.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Button/Button.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");

var _ButtonBase = _interopRequireDefault(__webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/index.js"));

var _helpers = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/utils/helpers.js");

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0, _extends2.default)({
      lineHeight: 1.75
    }, theme.typography.button, {
      boxSizing: 'border-box',
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // assure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: '6px 8px'
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    flat: {},

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    flatPrimary: {},

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    flatSecondary: {},

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: '5px 16px',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat((0, _colorManipulator.fade)(theme.palette.primary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat((0, _colorManipulator.fade)(theme.palette.secondary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="[contained | fab]"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      },
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      }
    },

    /* Styles applied to the root element if `variant="[contained | fab]"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="[contained | fab]"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    raised: {},
    // legacy

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    raisedPrimary: {},
    // legacy

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    raisedSecondary: {},
    // legacy

    /* Styles applied to the root element if `variant="[fab | extendedFab]"`. */
    fab: {
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      }
    },

    /* Styles applied to the root element if `variant="extendedFab"`. */
    extendedFab: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'auto',
      minWidth: 48,
      height: 48
    },

    /* Styles applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit',
      borderColor: 'currentColor'
    },

    /* Styles applied to the root element if `mini={true}` & `variant="[fab | extendedFab]"`. */
    mini: {
      width: 40,
      height: 40
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: '4px 8px',
      minWidth: 64,
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {
      padding: '8px 24px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    }
  };
};

exports.styles = styles;

function Button(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      disabled = props.disabled,
      disableFocusRipple = props.disableFocusRipple,
      focusVisibleClassName = props.focusVisibleClassName,
      fullWidth = props.fullWidth,
      mini = props.mini,
      size = props.size,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "disabled", "disableFocusRipple", "focusVisibleClassName", "fullWidth", "mini", "size", "variant"]);
  var fab = variant === 'fab' || variant === 'extendedFab';
  var contained = variant === 'contained' || variant === 'raised';
  var text = variant === 'text' || variant === 'flat';
  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.fab, fab), (0, _defineProperty2.default)(_classNames, classes.mini, fab && mini), (0, _defineProperty2.default)(_classNames, classes.extendedFab, variant === 'extendedFab'), (0, _defineProperty2.default)(_classNames, classes.text, text), (0, _defineProperty2.default)(_classNames, classes.textPrimary, text && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.textSecondary, text && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.flat, text), (0, _defineProperty2.default)(_classNames, classes.flatPrimary, text && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.flatSecondary, text && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.contained, contained || fab), (0, _defineProperty2.default)(_classNames, classes.containedPrimary, (contained || fab) && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.containedSecondary, (contained || fab) && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.raised, contained || fab), (0, _defineProperty2.default)(_classNames, classes.raisedPrimary, (contained || fab) && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.raisedSecondary, (contained || fab) && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.outlined, variant === 'outlined'), (0, _defineProperty2.default)(_classNames, classes.outlinedPrimary, variant === 'outlined' && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.outlinedSecondary, variant === 'outlined' && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes["size".concat((0, _helpers.capitalize)(size))], size !== 'medium'), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), (0, _defineProperty2.default)(_classNames, classes.colorInherit, color === 'inherit'), _classNames), classNameProp);
  return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
    className: className,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: (0, _classnames.default)(classes.focusVisible, focusVisibleClassName)
  }, other), _react.default.createElement("span", {
    className: classes.label
  }, children));
}

 true ? Button.propTypes = {
  /**
   * The content of the button.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: _propTypes.default.string,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: _propTypes.default.string,

  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: _propTypes.default.bool,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),

  /**
   * @ignore
   */
  type: _propTypes.default.string,

  /**
   * The variant to use.
   * __WARNING__: `flat` and `raised` are deprecated.
   * Instead use `text` and `contained` respectively.
   * `fab` and `extendedFab` are deprecated.
   * Instead use `<Fab>` and `<Fab variant="extended">`
   */
  variant: (0, _utils.chainPropTypes)(_propTypes.default.oneOf(['text', 'outlined', 'contained', 'fab', 'extendedFab', 'flat', 'raised']), function (props) {
    if (props.variant === 'flat') {
      return new Error('Material-UI: the `flat` variant will be removed in the next major release. ' + '`text` is equivalent and should be used instead.');
    }

    if (props.variant === 'raised') {
      return new Error('Material-UI: the `raised` variant will be removed in the next major release. ' + '`contained` is equivalent and should be used instead.');
    }

    if (props.variant === 'fab') {
      return new Error('Material-UI: the `fab` variant will be removed in the next major release. ' + 'The `<Fab>` component is equivalent and should be used instead.');
    }

    if (props.variant === 'extendedFab') {
      return new Error('Material-UI: the `fab` variant will be removed in the next major release. ' + 'The `<Fab>` component with `variant="extended"` is equivalent ' + 'and should be used instead.');
    }

    return null;
  })
} : undefined;
Button.defaultProps = {
  color: 'default',
  component: 'button',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'text'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiButton'
})(Button);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/ButtonBase/ButtonBase.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _ownerWindow = _interopRequireDefault(__webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/utils/ownerWindow.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _NoSsr = _interopRequireDefault(__webpack_require__(/*! ../NoSsr */ "./node_modules/@material-ui/core/NoSsr/index.js"));

var _focusVisible = __webpack_require__(/*! ./focusVisible */ "./node_modules/@material-ui/core/ButtonBase/focusVisible.js");

var _TouchRipple = _interopRequireDefault(__webpack_require__(/*! ./TouchRipple */ "./node_modules/@material-ui/core/ButtonBase/TouchRipple.js"));

var _createRippleHandler = _interopRequireDefault(__webpack_require__(/*! ./createRippleHandler */ "./node_modules/@material-ui/core/ButtonBase/createRippleHandler.js"));

var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    }
  },

  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the root element if keyboard focused. */
  focusVisible: {}
};
/* istanbul ignore if */

exports.styles = styles;

if ( true && !_react.default.createContext) {
  throw new Error('Material-UI: react@16.3.0 or greater is required.');
}
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */


var ButtonBase =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ButtonBase, _React$Component);

  function ButtonBase() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ButtonBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ButtonBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    _this.keyDown = false;
    _this.focusVisibleCheckTime = 50;
    _this.focusVisibleMaxCheckTimes = 5;
    _this.handleMouseDown = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'MouseDown', 'start', function () {
      clearTimeout(_this.focusVisibleTimeout);

      if (_this.state.focusVisible) {
        _this.setState({
          focusVisible: false
        });
      }
    });
    _this.handleMouseUp = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'MouseUp', 'stop');
    _this.handleMouseLeave = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'MouseLeave', 'stop', function (event) {
      if (_this.state.focusVisible) {
        event.preventDefault();
      }
    });
    _this.handleTouchStart = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'TouchStart', 'start');
    _this.handleTouchEnd = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'TouchEnd', 'stop');
    _this.handleTouchMove = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'TouchMove', 'stop');
    _this.handleContextMenu = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'ContextMenu', 'stop');
    _this.handleBlur = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'Blur', 'stop', function () {
      clearTimeout(_this.focusVisibleTimeout);

      if (_this.state.focusVisible) {
        _this.setState({
          focusVisible: false
        });
      }
    });

    _this.onRippleRef = function (node) {
      _this.ripple = node;
    };

    _this.onFocusVisibleHandler = function (event) {
      _this.keyDown = false;

      _this.setState({
        focusVisible: true
      });

      if (_this.props.onFocusVisible) {
        _this.props.onFocusVisible(event);
      }
    };

    _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          component = _this$props.component,
          focusRipple = _this$props.focusRipple,
          onKeyDown = _this$props.onKeyDown,
          onClick = _this$props.onClick; // Check if key is already down to avoid repeats being counted as multiple activations

      if (focusRipple && !_this.keyDown && _this.state.focusVisible && _this.ripple && event.key === ' ') {
        _this.keyDown = true;
        event.persist();

        _this.ripple.stop(event, function () {
          _this.ripple.start(event);
        });
      }

      if (onKeyDown) {
        onKeyDown(event);
      } // Keyboard accessibility for non interactive elements


      if (event.target === event.currentTarget && component && component !== 'button' && (event.key === ' ' || event.key === 'Enter') && !(_this.button.tagName === 'A' && _this.button.href)) {
        event.preventDefault();

        if (onClick) {
          onClick(event);
        }
      }
    };

    _this.handleKeyUp = function (event) {
      if (_this.props.focusRipple && event.key === ' ' && _this.ripple && _this.state.focusVisible) {
        _this.keyDown = false;
        event.persist();

        _this.ripple.stop(event, function () {
          _this.ripple.pulsate(event);
        });
      }

      if (_this.props.onKeyUp) {
        _this.props.onKeyUp(event);
      }
    };

    _this.handleFocus = function (event) {
      if (_this.props.disabled) {
        return;
      } // Fix for https://github.com/facebook/react/issues/7769


      if (!_this.button) {
        _this.button = event.currentTarget;
      }

      event.persist();
      (0, _focusVisible.detectFocusVisible)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), _this.button, function () {
        _this.onFocusVisibleHandler(event);
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    };

    return _this;
  }

  (0, _createClass2.default)(ButtonBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.button = _reactDom.default.findDOMNode(this);
      (0, _focusVisible.listenForFocusKeys)((0, _ownerWindow.default)(this.button));

      if (this.props.action) {
        this.props.action({
          focusVisible: function focusVisible() {
            _this2.setState({
              focusVisible: true
            });

            _this2.button.focus();
          }
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.focusRipple && !this.props.disableRipple && !prevState.focusVisible && this.state.focusVisible) {
        this.ripple.pulsate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.focusVisibleTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          action = _this$props2.action,
          buttonRef = _this$props2.buttonRef,
          centerRipple = _this$props2.centerRipple,
          children = _this$props2.children,
          classes = _this$props2.classes,
          classNameProp = _this$props2.className,
          component = _this$props2.component,
          disabled = _this$props2.disabled,
          disableRipple = _this$props2.disableRipple,
          disableTouchRipple = _this$props2.disableTouchRipple,
          focusRipple = _this$props2.focusRipple,
          focusVisibleClassName = _this$props2.focusVisibleClassName,
          onBlur = _this$props2.onBlur,
          onFocus = _this$props2.onFocus,
          onFocusVisible = _this$props2.onFocusVisible,
          onKeyDown = _this$props2.onKeyDown,
          onKeyUp = _this$props2.onKeyUp,
          onMouseDown = _this$props2.onMouseDown,
          onMouseLeave = _this$props2.onMouseLeave,
          onMouseUp = _this$props2.onMouseUp,
          onTouchEnd = _this$props2.onTouchEnd,
          onTouchMove = _this$props2.onTouchMove,
          onTouchStart = _this$props2.onTouchStart,
          tabIndex = _this$props2.tabIndex,
          TouchRippleProps = _this$props2.TouchRippleProps,
          type = _this$props2.type,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"]);
      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.focusVisible, this.state.focusVisible), (0, _defineProperty2.default)(_classNames, focusVisibleClassName, this.state.focusVisible), _classNames), classNameProp);
      var ComponentProp = component;

      if (ComponentProp === 'button' && other.href) {
        ComponentProp = 'a';
      }

      var buttonProps = {};

      if (ComponentProp === 'button') {
        buttonProps.type = type || 'button';
        buttonProps.disabled = disabled;
      } else {
        buttonProps.role = 'button';
      }

      return _react.default.createElement(ComponentProp, (0, _extends2.default)({
        className: className,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onMouseDown: this.handleMouseDown,
        onMouseLeave: this.handleMouseLeave,
        onMouseUp: this.handleMouseUp,
        onTouchEnd: this.handleTouchEnd,
        onTouchMove: this.handleTouchMove,
        onTouchStart: this.handleTouchStart,
        onContextMenu: this.handleContextMenu,
        ref: buttonRef,
        tabIndex: disabled ? '-1' : tabIndex
      }, buttonProps, other), children, !disableRipple && !disabled ? _react.default.createElement(_NoSsr.default, null, _react.default.createElement(_TouchRipple.default, (0, _extends2.default)({
        innerRef: this.onRippleRef,
        center: centerRipple
      }, TouchRippleProps))) : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (typeof prevState.focusVisible === 'undefined') {
        return {
          focusVisible: false,
          lastDisabled: nextProps.disabled
        };
      } // The blur won't fire when the disabled state is set on a focused input.
      // We need to book keep the focused state manually.


      if (!prevState.prevState && nextProps.disabled && prevState.focusVisible) {
        return {
          focusVisible: false,
          lastDisabled: nextProps.disabled
        };
      }

      return {
        lastDisabled: nextProps.disabled
      };
    }
  }]);
  return ButtonBase;
}(_react.default.Component);

 true ? ButtonBase.propTypes = {
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports `focusVisible()` action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: _propTypes.default.func,

  /**
   * Use that property to pass a ref callback to the native button component.
   */
  buttonRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: _propTypes.default.bool,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the base button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * If `true`, the touch ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes.default.bool,

  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * `disableRipple` must also be `false`.
   */
  focusRipple: _propTypes.default.bool,

  /**
   * This property can help a person know which element has the keyboard focus.
   * The class name will be applied when the element gain the focus through a keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyUp: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseLeave: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseUp: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchEnd: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchMove: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchStart: _propTypes.default.func,

  /**
   * @ignore
   */
  role: _propTypes.default.string,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Properties applied to the `TouchRipple` element.
   */
  TouchRippleProps: _propTypes.default.object,

  /**
   * Used to control the button's purpose.
   * This property passes the value to the `type` attribute of the native button component.
   * Valid property values include `button`, `submit`, and `reset`.
   */
  type: _propTypes.default.string
} : undefined;
ButtonBase.defaultProps = {
  centerRipple: false,
  component: 'button',
  disableRipple: false,
  disableTouchRipple: false,
  focusRipple: false,
  tabIndex: '0',
  type: 'button'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiButtonBase'
})(ButtonBase);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/Ripple.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/ButtonBase/Ripple.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/Transition.js"));

/**
 * @ignore - internal component.
 */
var Ripple =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Ripple, _React$Component);

  function Ripple() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Ripple);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Ripple)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      visible: false,
      leaving: false
    };

    _this.handleEnter = function () {
      _this.setState({
        visible: true
      });
    };

    _this.handleExit = function () {
      _this.setState({
        leaving: true
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Ripple, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props = this.props,
          classes = _this$props.classes,
          classNameProp = _this$props.className,
          pulsate = _this$props.pulsate,
          rippleX = _this$props.rippleX,
          rippleY = _this$props.rippleY,
          rippleSize = _this$props.rippleSize,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);
      var _this$state = this.state,
          visible = _this$state.visible,
          leaving = _this$state.leaving;
      var rippleClassName = (0, _classnames.default)(classes.ripple, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.rippleVisible, visible), (0, _defineProperty2.default)(_classNames, classes.ripplePulsate, pulsate), _classNames), classNameProp);
      var rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
      };
      var childClassName = (0, _classnames.default)(classes.child, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.childLeaving, leaving), (0, _defineProperty2.default)(_classNames2, classes.childPulsate, pulsate), _classNames2));
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        onEnter: this.handleEnter,
        onExit: this.handleExit
      }, other), _react.default.createElement("span", {
        className: rippleClassName,
        style: rippleStyles
      }, _react.default.createElement("span", {
        className: childClassName
      })));
    }
  }]);
  return Ripple;
}(_react.default.Component);

 true ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: _propTypes.default.bool,

  /**
   * Diameter of the ripple.
   */
  rippleSize: _propTypes.default.number,

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: _propTypes.default.number,

  /**
   * Vertical position of the ripple center.
   */
  rippleY: _propTypes.default.number
} : undefined;
Ripple.defaultProps = {
  pulsate: false
};
var _default = Ripple;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/TouchRipple.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/ButtonBase/TouchRipple.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = exports.DELAY_RIPPLE = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! react-transition-group/TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _Ripple = _interopRequireDefault(__webpack_require__(/*! ./Ripple */ "./node_modules/@material-ui/core/ButtonBase/Ripple.js"));

var DURATION = 550;
var DELAY_RIPPLE = 80;
exports.DELAY_RIPPLE = DELAY_RIPPLE;

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      position: 'absolute',
      overflow: 'hidden',
      borderRadius: 'inherit',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      pointerEvents: 'none',
      zIndex: 0
    },

    /* Styles applied to the internal `Ripple` components `ripple` class. */
    ripple: {
      width: 50,
      height: 50,
      left: 0,
      top: 0,
      opacity: 0,
      position: 'absolute'
    },

    /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
    rippleVisible: {
      opacity: 0.3,
      transform: 'scale(1)',
      animation: "mui-ripple-enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut),
      // Backward compatible logic between JSS v9 and v10.
      // To remove with the release of Material-UI v4
      animationName: '$mui-ripple-enter'
    },

    /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },

    /* Styles applied to the internal `Ripple` components `child` class. */
    child: {
      opacity: 1,
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the internal `Ripple` components `childLeaving` class. */
    childLeaving: {
      opacity: 0,
      animation: "mui-ripple-exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut),
      // Backward compatible logic between JSS v9 and v10.
      // To remove with the release of Material-UI v4
      animationName: '$mui-ripple-exit'
    },

    /* Styles applied to the internal `Ripple` components `childPulsate` class. */
    childPulsate: {
      position: 'absolute',
      left: 0,
      top: 0,
      animation: "mui-ripple-pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite"),
      // Backward compatible logic between JSS v9 and v10.
      // To remove with the release of Material-UI v4
      animationName: '$mui-ripple-pulsate'
    },
    '@keyframes mui-ripple-enter': {
      '0%': {
        transform: 'scale(0)',
        opacity: 0.1
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0.3
      }
    },
    '@keyframes mui-ripple-exit': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes mui-ripple-pulsate': {
      '0%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(0.92)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  };
};

exports.styles = styles;

var TouchRipple =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(TouchRipple, _React$PureComponent);

  function TouchRipple() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TouchRipple);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TouchRipple)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      nextKey: 0,
      ripples: []
    };

    _this.pulsate = function () {
      _this.start({}, {
        pulsate: true
      });
    };

    _this.start = function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 ? arguments[2] : undefined;
      var _options$pulsate = options.pulsate,
          pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
          _options$center = options.center,
          center = _options$center === void 0 ? _this.props.center || options.pulsate : _options$center,
          _options$fakeElement = options.fakeElement,
          fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

      if (event.type === 'mousedown' && _this.ignoringMouseDown) {
        _this.ignoringMouseDown = false;
        return;
      }

      if (event.type === 'touchstart') {
        _this.ignoringMouseDown = true;
      }

      var element = fakeElement ? null : _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
      var rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }; // Get the size of the ripple

      var rippleX;
      var rippleY;
      var rippleSize;

      if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
      } // Touche devices


      if (event.touches) {
        // Prepare the ripple effect.
        _this.startTimerCommit = function () {
          _this.startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }; // Delay the execution of the ripple effect.


        _this.startTimer = setTimeout(function () {
          if (_this.startTimerCommit) {
            _this.startTimerCommit();

            _this.startTimerCommit = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      } else {
        _this.startCommit({
          pulsate: pulsate,
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize,
          cb: cb
        });
      }
    };

    _this.startCommit = function (params) {
      var pulsate = params.pulsate,
          rippleX = params.rippleX,
          rippleY = params.rippleY,
          rippleSize = params.rippleSize,
          cb = params.cb;

      _this.setState(function (state) {
        return {
          nextKey: state.nextKey + 1,
          ripples: [].concat((0, _toConsumableArray2.default)(state.ripples), [_react.default.createElement(_Ripple.default, {
            key: state.nextKey,
            classes: _this.props.classes,
            timeout: {
              exit: DURATION,
              enter: DURATION
            },
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize
          })])
        };
      }, cb);
    };

    _this.stop = function (event, cb) {
      clearTimeout(_this.startTimer);
      var ripples = _this.state.ripples; // The touch interaction occurs too quickly.
      // We still want to show ripple effect.

      if (event.type === 'touchend' && _this.startTimerCommit) {
        event.persist();

        _this.startTimerCommit();

        _this.startTimerCommit = null;
        _this.startTimer = setTimeout(function () {
          _this.stop(event, cb);
        });
        return;
      }

      _this.startTimerCommit = null;

      if (ripples && ripples.length) {
        _this.setState({
          ripples: ripples.slice(1)
        }, cb);
      }
    };

    return _this;
  }

  (0, _createClass2.default)(TouchRipple, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.startTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          center = _this$props.center,
          classes = _this$props.classes,
          className = _this$props.className,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["center", "classes", "className"]);
      return _react.default.createElement(_TransitionGroup.default, (0, _extends2.default)({
        component: "span",
        enter: true,
        exit: true,
        className: (0, _classnames.default)(classes.root, className)
      }, other), this.state.ripples);
    }
  }]);
  return TouchRipple;
}(_react.default.PureComponent);

 true ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string
} : undefined;
TouchRipple.defaultProps = {
  center: false
};

var _default = (0, _withStyles.default)(styles, {
  flip: false,
  name: 'MuiTouchRipple'
})(TouchRipple);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Fade/Fade.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/Fade/Fade.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/Transition.js"));

var _transitions = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/styles/transitions.js");

var _withTheme = _interopRequireDefault(__webpack_require__(/*! ../styles/withTheme */ "./node_modules/@material-ui/core/styles/withTheme.js"));

var _utils = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/transitions/utils.js");

// @inheritedComponent Transition
var styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
/**
 * The Fade transition is used by the [Modal](/utils/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Fade, _React$Component);

  function Fade() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Fade);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Fade)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleEnter = function (node) {
      var theme = _this.props.theme;
      (0, _utils.reflow)(node); // So the animation always start from the start.

      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    };

    _this.handleExit = function (node) {
      var theme = _this.props.theme;
      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Fade, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onEnter = _this$props.onEnter,
          onExit = _this$props.onExit,
          styleProp = _this$props.style,
          theme = _this$props.theme,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["children", "onEnter", "onExit", "style", "theme"]);
      var style = (0, _extends2.default)({}, styleProp, _react.default.isValidElement(children) ? children.props.style : {});
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        appear: true,
        onEnter: this.handleEnter,
        onExit: this.handleExit
      }, other), function (state, childProps) {
        return _react.default.cloneElement(children, (0, _extends2.default)({
          style: (0, _extends2.default)({
            opacity: 0
          }, styles[state], style)
        }, childProps));
      });
    }
  }]);
  return Fade;
}(_react.default.Component);

 true ? Fade.propTypes = {
  /**
   * A single child content element.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : undefined;
Fade.defaultProps = {
  timeout: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

var _default = (0, _withTheme.default)()(Fade);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/FilledInput/FilledInput.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/FilledInput/FilledInput.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _InputBase = _interopRequireDefault(__webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/InputBase/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

// @inheritedComponent InputBase
var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  var backgroundColor = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      backgroundColor: backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      '&:hover': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: backgroundColor
        }
      },
      '&$focused': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
      },
      '&$disabled': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary[light ? 'dark' : 'light']),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):not($focused):not($error):before': {
        borderBottom: "1px solid ".concat(theme.palette.text.primary)
      },
      '&$disabled:before': {
        borderBottom: "1px dotted ".concat(bottomLineColor)
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 12
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 12
    },

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '27px 12px 10px',
      boxSizing: 'border-box' // Prevent padding issue with fullWidth.

    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '27px 12px 10px'
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 24,
      paddingBottom: 6
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};

exports.styles = styles;

function FilledInput(props) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      other = (0, _objectWithoutProperties2.default)(props, ["disableUnderline", "classes"]);
  return _react.default.createElement(_InputBase.default, (0, _extends2.default)({
    classes: (0, _extends2.default)({}, classes, {
      root: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.underline, !disableUnderline)),
      underline: null
    })
  }, other));
}

 true ? FilledInput.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: _propTypes.default.string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The CSS class name of the wrapper element.
   */
  className: _propTypes.default.string,

  /**
   * The default input value, useful when not controlling the component.
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object]))]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: _propTypes.default.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: _propTypes.default.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * The component used for the native input.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: _utils.componentPropType,

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: _propTypes.default.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: _propTypes.default.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: _propTypes.default.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: _propTypes.default.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: _propTypes.default.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: _propTypes.default.bool,

  /**
   * If `true`, the input will be required.
   */
  required: _propTypes.default.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: _propTypes.default.node,

  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: _propTypes.default.string,

  /**
   * The input value, required for a controlled component.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object]))])
} : undefined;
_InputBase.default.defaultProps = {
  fullWidth: false,
  inputComponent: 'input',
  multiline: false,
  type: 'text'
};
FilledInput.muiName = 'Input';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFilledInput'
})(FilledInput);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/FormControl/FormControl.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/FormControl/FormControl.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _utils2 = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/InputBase/utils.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/utils/helpers.js");

var _reactHelpers = __webpack_require__(/*! ../utils/reactHelpers */ "./node_modules/@material-ui/core/utils/reactHelpers.js");

var _FormControlContext = _interopRequireDefault(__webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/FormControl/FormControlContext.js"));

var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.

  },

  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  }
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * ⚠️ Only one input can be used within a FormControl.
 */

exports.styles = styles;

var FormControl =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FormControl, _React$Component);
  (0, _createClass2.default)(FormControl, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.disabled && state.focused) {
        return {
          focused: false
        };
      }

      return null;
    }
  }]);

  function FormControl(props) {
    var _this;

    (0, _classCallCheck2.default)(this, FormControl);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormControl).call(this));

    _this.handleFocus = function () {
      _this.setState(function (state) {
        return !state.focused ? {
          focused: true
        } : null;
      });
    };

    _this.handleBlur = function () {
      _this.setState(function (state) {
        return state.focused ? {
          focused: false
        } : null;
      });
    };

    _this.handleDirty = function () {
      if (!_this.state.filled) {
        _this.setState({
          filled: true
        });
      }
    };

    _this.handleClean = function () {
      if (_this.state.filled) {
        _this.setState({
          filled: false
        });
      }
    };

    _this.state = {
      adornedStart: false,
      filled: false,
      focused: false
    }; // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.

    var children = props.children;

    if (children) {
      _react.default.Children.forEach(children, function (child) {
        if (!(0, _reactHelpers.isMuiElement)(child, ['Input', 'Select'])) {
          return;
        }

        if ((0, _utils2.isFilled)(child.props, true)) {
          _this.state.filled = true;
        }

        var input = (0, _reactHelpers.isMuiElement)(child, ['Select']) ? child.props.input : child;

        if (input && (0, _utils2.isAdornedStart)(input.props)) {
          _this.state.adornedStart = true;
        }
      });
    }

    return _this;
  }

  (0, _createClass2.default)(FormControl, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          Component = _this$props.component,
          disabled = _this$props.disabled,
          error = _this$props.error,
          fullWidth = _this$props.fullWidth,
          margin = _this$props.margin,
          required = _this$props.required,
          variant = _this$props.variant,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["classes", "className", "component", "disabled", "error", "fullWidth", "margin", "required", "variant"]);
      var _this$state = this.state,
          adornedStart = _this$state.adornedStart,
          filled = _this$state.filled,
          focused = _this$state.focused;
      var childContext = {
        adornedStart: adornedStart,
        disabled: disabled,
        error: error,
        filled: filled,
        focused: focused,
        margin: margin,
        onBlur: this.handleBlur,
        onEmpty: this.handleClean,
        onFilled: this.handleDirty,
        onFocus: this.handleFocus,
        required: required,
        variant: variant
      };
      return _react.default.createElement(_FormControlContext.default.Provider, {
        value: childContext
      }, _react.default.createElement(Component, (0, _extends2.default)({
        className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["margin".concat((0, _helpers.capitalize)(margin))], margin !== 'none'), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), _classNames), className)
      }, other)));
    }
  }]);
  return FormControl;
}(_react.default.Component);

 true ? FormControl.propTypes = {
  /**
   * The contents of the form control.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: _propTypes.default.oneOf(['none', 'dense', 'normal']),

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: _propTypes.default.bool,

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
FormControl.defaultProps = {
  component: 'div',
  disabled: false,
  error: false,
  fullWidth: false,
  margin: 'none',
  required: false,
  variant: 'standard'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFormControl'
})(FormControl);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/FormControl/FormControlContext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/FormControl/FormControlContext.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

/**
 * @ignore - internal component.
 */
var FormControlContext = _react.default.createContext();

var _default = FormControlContext;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/FormControl/withFormControlContext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/FormControl/withFormControlContext.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withFormControlContext;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/@material-ui/core/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _FormControlContext = _interopRequireDefault(__webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/FormControl/FormControlContext.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

function withFormControlContext(Component) {
  var EnhancedComponent = function EnhancedComponent(props) {
    return _react.default.createElement(_FormControlContext.default.Consumer, null, function (context) {
      return _react.default.createElement(Component, (0, _extends2.default)({
        muiFormControl: context
      }, props));
    });
  };

  if (true) {
    EnhancedComponent.displayName = "WithFormControlContext(".concat((0, _utils.getDisplayName)(Component), ")");
  }

  (0, _hoistNonReactStatics.default)(EnhancedComponent, Component);
  return EnhancedComponent;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/FormHelperText/FormHelperText.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/FormHelperText/FormHelperText.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _formControlState = _interopRequireDefault(__webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js"));

var _withFormControlContext = _interopRequireDefault(__webpack_require__(/*! ../FormControl/withFormControlContext */ "./node_modules/@material-ui/core/FormControl/withFormControlContext.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      textAlign: 'left',
      marginTop: 8,
      lineHeight: '1em',
      minHeight: '1em',
      margin: 0,
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 4
    },

    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      margin: '8px 12px 0'
    },

    /* Styles applied to the root element if `focused={true}`. */
    focused: {},

    /* Styles applied to the root element if `filled={true}`. */
    filled: {},

    /* Styles applied to the root element if `required={true}`. */
    required: {}
  };
};

exports.styles = styles;

function FormHelperText(props) {
  var _classNames;

  var classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      margin = props.margin,
      muiFormControl = props.muiFormControl,
      required = props.required,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "muiFormControl", "required", "variant"]);
  var fcs = (0, _formControlState.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant', 'margin', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.contained, fcs.variant === 'filled' || fcs.variant === 'outlined'), (0, _defineProperty2.default)(_classNames, classes.marginDense, fcs.margin === 'dense'), (0, _defineProperty2.default)(_classNames, classes.disabled, fcs.disabled), (0, _defineProperty2.default)(_classNames, classes.error, fcs.error), (0, _defineProperty2.default)(_classNames, classes.filled, fcs.filled), (0, _defineProperty2.default)(_classNames, classes.focused, fcs.focused), (0, _defineProperty2.default)(_classNames, classes.required, fcs.required), _classNames), classNameProp)
  }, other));
}

 true ? FormHelperText.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: _propTypes.default.bool,

  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: _propTypes.default.bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: _propTypes.default.oneOf(['dense']),

  /**
   * @ignore
   */
  muiFormControl: _propTypes.default.object,

  /**
   * If `true`, the helper text should use required classes key.
   */
  required: _propTypes.default.bool,

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
FormHelperText.defaultProps = {
  component: 'p'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFormHelperText'
})((0, _withFormControlContext.default)(FormHelperText));

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/FormLabel/FormLabel.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/FormLabel/FormLabel.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _formControlState = _interopRequireDefault(__webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js"));

var _withFormControlContext = _interopRequireDefault(__webpack_require__(/*! ../FormControl/withFormControlContext */ "./node_modules/@material-ui/core/FormControl/withFormControlContext.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1,
      padding: 0,
      '&$focused': {
        color: theme.palette.primary[theme.palette.type === 'light' ? 'dark' : 'light']
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `focused={true}`. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the root element if `filled={true}`. */
    filled: {},

    /* Styles applied to the root element if `required={true}`. */
    required: {},
    asterisk: {
      '&$error': {
        color: theme.palette.error.main
      }
    }
  };
};

exports.styles = styles;

function FormLabel(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      muiFormControl = props.muiFormControl,
      required = props.required,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "muiFormControl", "required"]);
  var fcs = (0, _formControlState.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['required', 'focused', 'disabled', 'error', 'filled']
  });
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, fcs.disabled), (0, _defineProperty2.default)(_classNames, classes.error, fcs.error), (0, _defineProperty2.default)(_classNames, classes.filled, fcs.filled), (0, _defineProperty2.default)(_classNames, classes.focused, fcs.focused), (0, _defineProperty2.default)(_classNames, classes.required, fcs.required), _classNames), classNameProp)
  }, other), children, fcs.required && _react.default.createElement("span", {
    className: (0, _classnames.default)(classes.asterisk, (0, _defineProperty2.default)({}, classes.error, fcs.error))
  }, "\u2009*"));
}

 true ? FormLabel.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the label should use filled classes key.
   */
  filled: _propTypes.default.bool,

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: _propTypes.default.bool,

  /**
   * @ignore
   */
  muiFormControl: _propTypes.default.object,

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: _propTypes.default.bool
} : undefined;
FormLabel.defaultProps = {
  component: 'label'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFormLabel'
})((0, _withFormControlContext.default)(FormLabel));

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Grid/Grid.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/Grid/Grid.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _createBreakpoints = __webpack_require__(/*! ../styles/createBreakpoints */ "./node_modules/@material-ui/core/styles/createBreakpoints.js");

var _requirePropFactory = _interopRequireDefault(__webpack_require__(/*! ../utils/requirePropFactory */ "./node_modules/@material-ui/core/utils/requirePropFactory.js"));

// A grid component using the following libs as inspiration.
//
// For the implementation:
// - http://v4-alpha.getbootstrap.com/layout/flexbox-grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
var GUTTERS = [0, 8, 16, 24, 32, 40];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    (0, _extends2.default)(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  GUTTERS.forEach(function (spacing, index) {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: -spacing / 2,
      width: "calc(100% + ".concat(spacing, "px)"),
      '& > $item': {
        padding: spacing / 2
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles = function styles(theme) {
  return (0, _extends2.default)({
    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },

    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },

    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },

    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },

    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },

    /* Styles applied to the root element if `direction="rwo-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },

    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },

    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },

    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },

    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },

    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },

    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },

    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },

    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },

    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },

    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="center"`. */
    'justify-xs-center': {
      justifyContent: 'center'
    },

    /* Styles applied to the root element if `justify="flex-end"`. */
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },

    /* Styles applied to the root element if `justify="space-between"`. */
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },

    /* Styles applied to the root element if `justify="space-around"`. */
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="space-evenly"`. */
    'justify-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), _createBreakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};

exports.styles = styles;

function Grid(props) {
  var _classNames;

  var alignContent = props.alignContent,
      alignItems = props.alignItems,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      container = props.container,
      direction = props.direction,
      item = props.item,
      justify = props.justify,
      lg = props.lg,
      md = props.md,
      sm = props.sm,
      spacing = props.spacing,
      wrap = props.wrap,
      xl = props.xl,
      xs = props.xs,
      zeroMinWidth = props.zeroMinWidth,
      other = (0, _objectWithoutProperties2.default)(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);
  var className = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.container, container), (0, _defineProperty2.default)(_classNames, classes.item, item), (0, _defineProperty2.default)(_classNames, classes.zeroMinWidth, zeroMinWidth), (0, _defineProperty2.default)(_classNames, classes["spacing-xs-".concat(String(spacing))], container && spacing !== 0), (0, _defineProperty2.default)(_classNames, classes["direction-xs-".concat(String(direction))], direction !== Grid.defaultProps.direction), (0, _defineProperty2.default)(_classNames, classes["wrap-xs-".concat(String(wrap))], wrap !== Grid.defaultProps.wrap), (0, _defineProperty2.default)(_classNames, classes["align-items-xs-".concat(String(alignItems))], alignItems !== Grid.defaultProps.alignItems), (0, _defineProperty2.default)(_classNames, classes["align-content-xs-".concat(String(alignContent))], alignContent !== Grid.defaultProps.alignContent), (0, _defineProperty2.default)(_classNames, classes["justify-xs-".concat(String(justify))], justify !== Grid.defaultProps.justify), (0, _defineProperty2.default)(_classNames, classes["grid-xs-".concat(String(xs))], xs !== false), (0, _defineProperty2.default)(_classNames, classes["grid-sm-".concat(String(sm))], sm !== false), (0, _defineProperty2.default)(_classNames, classes["grid-md-".concat(String(md))], md !== false), (0, _defineProperty2.default)(_classNames, classes["grid-lg-".concat(String(lg))], lg !== false), (0, _defineProperty2.default)(_classNames, classes["grid-xl-".concat(String(xl))], xl !== false), _classNames), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

 true ? Grid.propTypes = {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: _propTypes.default.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: _propTypes.default.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: _propTypes.default.bool,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: _propTypes.default.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: _propTypes.default.bool,

  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify: _propTypes.default.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: _propTypes.default.oneOf(GUTTERS),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: _propTypes.default.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: _propTypes.default.bool
} : undefined;
Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  spacing: 0,
  wrap: 'wrap',
  xl: false,
  xs: false,
  zeroMinWidth: false
};
var StyledGrid = (0, _withStyles.default)(styles, {
  name: 'MuiGrid'
})(Grid);

if (true) {
  var requireProp = (0, _requirePropFactory.default)('Grid');
  StyledGrid.propTypes = (0, _extends2.default)({}, StyledGrid.propTypes, {
    alignContent: requireProp('container'),
    alignItems: requireProp('container'),
    direction: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('zeroMinWidth')
  });
}

var _default = StyledGrid;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Grow/Grow.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/Grow/Grow.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/Transition.js"));

var _withTheme = _interopRequireDefault(__webpack_require__(/*! ../styles/withTheme */ "./node_modules/@material-ui/core/styles/withTheme.js"));

var _utils = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/transitions/utils.js");

// @inheritedComponent Transition
function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    // Use translateZ to scrolling issue on Chrome.
    transform: "".concat(getScale(1), " translateZ(0)")
  }
};
/**
 * The Grow transition is used by the [Tooltip](/demos/tooltips/) and
 * [Popover](/utils/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Grow, _React$Component);

  function Grow() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Grow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Grow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleEnter = function (node) {
      var _this$props = _this.props,
          theme = _this$props.theme,
          timeout = _this$props.timeout;
      (0, _utils.reflow)(node); // So the animation always start from the start.

      var _getTransitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration,
          delay = _getTransitionProps.delay;

      var duration = 0;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        _this.autoTimeout = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay
      })].join(',');

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    };

    _this.handleExit = function (node) {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          timeout = _this$props2.timeout;
      var duration = 0;

      var _getTransitionProps2 = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration,
          delay = _getTransitionProps2.delay;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        _this.autoTimeout = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay || duration * 0.333
      })].join(',');
      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.addEndListener = function (_, next) {
      if (_this.props.timeout === 'auto') {
        _this.timer = setTimeout(next, _this.autoTimeout || 0);
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Grow, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          onEnter = _this$props3.onEnter,
          onExit = _this$props3.onExit,
          styleProp = _this$props3.style,
          theme = _this$props3.theme,
          timeout = _this$props3.timeout,
          other = (0, _objectWithoutProperties2.default)(_this$props3, ["children", "onEnter", "onExit", "style", "theme", "timeout"]);
      var style = (0, _extends2.default)({}, styleProp, _react.default.isValidElement(children) ? children.props.style : {});
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        appear: true,
        onEnter: this.handleEnter,
        onExit: this.handleExit,
        addEndListener: this.addEndListener,
        timeout: timeout === 'auto' ? null : timeout
      }, other), function (state, childProps) {
        return _react.default.cloneElement(children, (0, _extends2.default)({
          style: (0, _extends2.default)({
            opacity: 0,
            transform: getScale(0.75)
          }, styles[state], style)
        }, childProps));
      });
    }
  }]);
  return Grow;
}(_react.default.Component);

 true ? Grow.propTypes = {
  /**
   * A single child content element.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])])
} : undefined;
Grow.defaultProps = {
  timeout: 'auto'
};
Grow.muiSupportAuto = true;

var _default = (0, _withTheme.default)()(Grow);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Input/Input.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/Input/Input.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _InputBase = _interopRequireDefault(__webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/InputBase/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

// @inheritedComponent InputBase
var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative'
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary[light ? 'dark' : 'light']),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):not($focused):not($error):before': {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},

    /* Styles applied to the `input` element. */
    input: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},

    /* Styles applied to the `input` element if `type` is not "text"`. */
    inputType: {},

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};

exports.styles = styles;

function Input(props) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      other = (0, _objectWithoutProperties2.default)(props, ["disableUnderline", "classes"]);
  return _react.default.createElement(_InputBase.default, (0, _extends2.default)({
    classes: (0, _extends2.default)({}, classes, {
      root: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.underline, !disableUnderline)),
      underline: null
    })
  }, other));
}

 true ? Input.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: _propTypes.default.string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The CSS class name of the wrapper element.
   */
  className: _propTypes.default.string,

  /**
   * The default input value, useful when not controlling the component.
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object]))]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: _propTypes.default.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: _propTypes.default.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * The component used for the native input.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: _utils.componentPropType,

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: _propTypes.default.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: _propTypes.default.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: _propTypes.default.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: _propTypes.default.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: _propTypes.default.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: _propTypes.default.bool,

  /**
   * If `true`, the input will be required.
   */
  required: _propTypes.default.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: _propTypes.default.node,

  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: _propTypes.default.string,

  /**
   * The input value, required for a controlled component.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object]))])
} : undefined;
_InputBase.default.defaultProps = {
  fullWidth: false,
  inputComponent: 'input',
  multiline: false,
  type: 'text'
};
Input.muiName = 'Input';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiInput'
})(Input);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/InputBase/InputBase.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/InputBase/InputBase.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _formControlState = _interopRequireDefault(__webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js"));

var _FormControlContext = _interopRequireDefault(__webpack_require__(/*! ../FormControl/FormControlContext */ "./node_modules/@material-ui/core/FormControl/FormControlContext.js"));

var _withFormControlContext = _interopRequireDefault(__webpack_require__(/*! ../FormControl/withFormControlContext */ "./node_modules/@material-ui/core/FormControl/withFormControlContext.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _reactHelpers = __webpack_require__(/*! ../utils/reactHelpers */ "./node_modules/@material-ui/core/utils/reactHelpers.js");

var _Textarea = _interopRequireDefault(__webpack_require__(/*! ./Textarea */ "./node_modules/@material-ui/core/InputBase/Textarea.js"));

var _utils2 = __webpack_require__(/*! ./utils */ "./node_modules/@material-ui/core/InputBase/utils.js");

/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: 0
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    /* Styles applied to the root element. */
    root: {
      // Mimics the default input display property used by browsers for an input.
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '1.1875em',
      // Reset (19px), match the native input line-height
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px")
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      margin: 0,
      // Reset for Safari
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type` is not "text"`. */
    inputType: {
      // type="date" or type="time", etc. have specific styles we need to reset.
      height: '1.1875em' // Reset (19px), match the native input line-height

    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {}
  };
};
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */


exports.styles = styles;

var InputBase =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(InputBase, _React$Component);
  (0, _createClass2.default)(InputBase, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // The blur won't fire when the disabled state is set on a focused input.
      // We need to book keep the focused state manually.
      if (props.disabled && state.focused) {
        return {
          focused: false
        };
      }

      return null;
    }
  }]);

  function InputBase(props) {
    var _this;

    (0, _classCallCheck2.default)(this, InputBase);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InputBase).call(this, props));
    _this.state = {
      focused: false
    };

    _this.handleFocus = function (event) {
      var muiFormControl = _this.props.muiFormControl; // Fix a bug with IE 11 where the focus/blur events are triggered
      // while the input is disabled.

      if ((0, _formControlState.default)({
        props: _this.props,
        muiFormControl: muiFormControl,
        states: ['disabled']
      }).disabled) {
        event.stopPropagation();
        return;
      }

      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      }
    };

    _this.handleBlur = function (event) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      var muiFormControl = _this.props.muiFormControl;

      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      }
    };

    _this.handleChange = function () {
      if (!_this.isControlled) {
        _this.checkDirty(_this.inputRef);
      } // Perform in the willUpdate


      if (_this.props.onChange) {
        var _this$props;

        (_this$props = _this.props).onChange.apply(_this$props, arguments);
      }
    };

    _this.handleRefInput = function (ref) {
      _this.inputRef = ref;
       true ? (0, _warning.default)(!ref || ref instanceof HTMLInputElement || ref.focus, ['Material-UI: you have provided a `inputComponent` to the input component', 'that does not correctly handle the `inputRef` property.', 'Make sure the `inputRef` property is called with a HTMLInputElement.'].join('\n')) : undefined;
      var refProp;

      if (_this.props.inputRef) {
        refProp = _this.props.inputRef;
      } else if (_this.props.inputProps && _this.props.inputProps.ref) {
        refProp = _this.props.inputProps.ref;
      }

      (0, _reactHelpers.setRef)(refProp, ref);
    };

    _this.handleClick = function (event) {
      if (_this.inputRef && event.currentTarget === event.target) {
        _this.inputRef.focus();
      }

      if (_this.props.onClick) {
        _this.props.onClick(event);
      }
    };

    _this.isControlled = props.value != null;

    if (_this.isControlled) {
      _this.checkDirty(props);
    }

    return _this;
  }

  (0, _createClass2.default)(InputBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.isControlled) {
        this.checkDirty(this.inputRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Book keep the focused state.
      if (!prevProps.disabled && this.props.disabled) {
        var muiFormControl = this.props.muiFormControl;

        if (muiFormControl && muiFormControl.onBlur) {
          muiFormControl.onBlur();
        }
      }

      if (this.isControlled) {
        this.checkDirty(this.props);
      } // else performed in the onChange

    }
  }, {
    key: "checkDirty",
    value: function checkDirty(obj) {
      var muiFormControl = this.props.muiFormControl;

      if ((0, _utils2.isFilled)(obj)) {
        if (muiFormControl && muiFormControl.onFilled) {
          muiFormControl.onFilled();
        }

        if (this.props.onFilled) {
          this.props.onFilled();
        }

        return;
      }

      if (muiFormControl && muiFormControl.onEmpty) {
        muiFormControl.onEmpty();
      }

      if (this.props.onEmpty) {
        this.props.onEmpty();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props2 = this.props,
          autoComplete = _this$props2.autoComplete,
          autoFocus = _this$props2.autoFocus,
          classes = _this$props2.classes,
          classNameProp = _this$props2.className,
          defaultValue = _this$props2.defaultValue,
          disabled = _this$props2.disabled,
          endAdornment = _this$props2.endAdornment,
          error = _this$props2.error,
          fullWidth = _this$props2.fullWidth,
          id = _this$props2.id,
          inputComponent = _this$props2.inputComponent,
          _this$props2$inputPro = _this$props2.inputProps;
      _this$props2$inputPro = _this$props2$inputPro === void 0 ? {} : _this$props2$inputPro;
      var inputPropsClassName = _this$props2$inputPro.className,
          inputPropsProp = (0, _objectWithoutProperties2.default)(_this$props2$inputPro, ["className"]),
          inputRef = _this$props2.inputRef,
          margin = _this$props2.margin,
          muiFormControl = _this$props2.muiFormControl,
          multiline = _this$props2.multiline,
          name = _this$props2.name,
          onBlur = _this$props2.onBlur,
          onChange = _this$props2.onChange,
          onClick = _this$props2.onClick,
          onEmpty = _this$props2.onEmpty,
          onFilled = _this$props2.onFilled,
          onFocus = _this$props2.onFocus,
          onKeyDown = _this$props2.onKeyDown,
          onKeyUp = _this$props2.onKeyUp,
          placeholder = _this$props2.placeholder,
          readOnly = _this$props2.readOnly,
          renderPrefix = _this$props2.renderPrefix,
          rows = _this$props2.rows,
          rowsMax = _this$props2.rowsMax,
          startAdornment = _this$props2.startAdornment,
          type = _this$props2.type,
          value = _this$props2.value,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["autoComplete", "autoFocus", "classes", "className", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "muiFormControl", "multiline", "name", "onBlur", "onChange", "onClick", "onEmpty", "onFilled", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderPrefix", "rows", "rowsMax", "startAdornment", "type", "value"]);
      var ariaDescribedby = other['aria-describedby'];
      delete other['aria-describedby'];
      var fcs = (0, _formControlState.default)({
        props: this.props,
        muiFormControl: muiFormControl,
        states: ['disabled', 'error', 'margin', 'required', 'filled']
      });
      var focused = muiFormControl ? muiFormControl.focused : this.state.focused;
      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, fcs.disabled), (0, _defineProperty2.default)(_classNames, classes.error, fcs.error), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), (0, _defineProperty2.default)(_classNames, classes.focused, focused), (0, _defineProperty2.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty2.default)(_classNames, classes.marginDense, fcs.margin === 'dense'), (0, _defineProperty2.default)(_classNames, classes.multiline, multiline), (0, _defineProperty2.default)(_classNames, classes.adornedStart, startAdornment), (0, _defineProperty2.default)(_classNames, classes.adornedEnd, endAdornment), _classNames), classNameProp);
      var inputClassName = (0, _classnames.default)(classes.input, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.disabled, fcs.disabled), (0, _defineProperty2.default)(_classNames2, classes.inputType, type !== 'text'), (0, _defineProperty2.default)(_classNames2, classes.inputTypeSearch, type === 'search'), (0, _defineProperty2.default)(_classNames2, classes.inputMultiline, multiline), (0, _defineProperty2.default)(_classNames2, classes.inputMarginDense, fcs.margin === 'dense'), (0, _defineProperty2.default)(_classNames2, classes.inputAdornedStart, startAdornment), (0, _defineProperty2.default)(_classNames2, classes.inputAdornedEnd, endAdornment), _classNames2), inputPropsClassName);
      var InputComponent = inputComponent;
      var inputProps = (0, _extends2.default)({}, inputPropsProp, {
        ref: this.handleRefInput
      });

      if (typeof InputComponent !== 'string') {
        inputProps = (0, _extends2.default)({
          // Rename ref to inputRef as we don't know the
          // provided `inputComponent` structure.
          inputRef: this.handleRefInput,
          type: type
        }, inputProps, {
          ref: null
        });
      } else if (multiline) {
        if (rows && !rowsMax) {
          InputComponent = 'textarea';
        } else {
          inputProps = (0, _extends2.default)({
            rowsMax: rowsMax,
            textareaRef: this.handleRefInput
          }, inputProps, {
            ref: null
          });
          InputComponent = _Textarea.default;
        }
      } else {
        inputProps = (0, _extends2.default)({
          type: type
        }, inputProps);
      }

      return _react.default.createElement("div", (0, _extends2.default)({
        className: className,
        onClick: this.handleClick
      }, other), renderPrefix ? renderPrefix((0, _extends2.default)({}, fcs, {
        startAdornment: startAdornment,
        focused: focused
      })) : null, startAdornment, _react.default.createElement(_FormControlContext.default.Provider, {
        value: null
      }, _react.default.createElement(InputComponent, (0, _extends2.default)({
        "aria-invalid": fcs.error,
        "aria-describedby": ariaDescribedby,
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        className: inputClassName,
        defaultValue: defaultValue,
        disabled: fcs.disabled,
        id: id,
        name: name,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        placeholder: placeholder,
        readOnly: readOnly,
        required: fcs.required,
        rows: rows,
        value: value
      }, inputProps))), endAdornment);
    }
  }]);
  return InputBase;
}(_react.default.Component);

 true ? InputBase.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: _propTypes.default.string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The CSS class name of the wrapper element.
   */
  className: _propTypes.default.string,

  /**
   * The default input value, useful when not controlling the component.
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object]))]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: _propTypes.default.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * The component used for the native input.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: _utils.componentPropType,

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: _propTypes.default.oneOf(['dense', 'none']),

  /**
   * @ignore
   */
  muiFormControl: _propTypes.default.object,

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: _propTypes.default.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * @ignore
   */
  onEmpty: _propTypes.default.func,

  /**
   * @ignore
   */
  onFilled: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyUp: _propTypes.default.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: _propTypes.default.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: _propTypes.default.bool,

  /**
   * @ignore
   */
  renderPrefix: _propTypes.default.func,

  /**
   * If `true`, the input will be required.
   */
  required: _propTypes.default.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: _propTypes.default.node,

  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: _propTypes.default.string,

  /**
   * The input value, required for a controlled component.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object]))])
} : undefined;
InputBase.defaultProps = {
  fullWidth: false,
  inputComponent: 'input',
  multiline: false,
  type: 'text'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiInputBase'
})((0, _withFormControlContext.default)(InputBase));

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/InputBase/Textarea.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/InputBase/Textarea.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _debounce = _interopRequireDefault(__webpack_require__(/*! debounce */ "./node_modules/debounce/index.js"));

var _reactEventListener = _interopRequireDefault(__webpack_require__(/*! react-event-listener */ "./node_modules/react-event-listener/dist/react-event-listener.cjs.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _reactHelpers = __webpack_require__(/*! ../utils/reactHelpers */ "./node_modules/@material-ui/core/utils/reactHelpers.js");

// < 1kb payload overhead when lodash/debounce is > 3kb.
var ROWS_HEIGHT = 19;
var styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'relative',
    // because the shadow has position: 'absolute',
    width: '100%'
  },
  textarea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    font: 'inherit',
    padding: 0,
    cursor: 'inherit',
    boxSizing: 'border-box',
    lineHeight: 'inherit',
    border: 'none',
    outline: 'none',
    background: 'transparent'
  },
  shadow: {
    // Overflow also needed to here to remove the extra row
    // added to textareas in Firefox.
    overflow: 'hidden',
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    position: 'absolute',
    height: 'auto',
    whiteSpace: 'pre-wrap'
  }
};
/**
 * @ignore - internal component.
 */

exports.styles = styles;

var Textarea =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Textarea, _React$Component);

  function Textarea(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Textarea);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Textarea).call(this));

    _this.handleRefInput = function (ref) {
      _this.inputRef = ref;
      (0, _reactHelpers.setRef)(_this.props.textareaRef, ref);
    };

    _this.handleRefSinglelineShadow = function (ref) {
      _this.singlelineShadowRef = ref;
    };

    _this.handleRefShadow = function (ref) {
      _this.shadowRef = ref;
    };

    _this.handleChange = function (event) {
      _this.value = event.target.value;

      if (!_this.isControlled) {
        // The component is not controlled, we need to update the shallow value.
        _this.shadowRef.value = _this.value;

        _this.syncHeightWithShadow();
      }

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    };

    _this.isControlled = props.value != null; // <Input> expects the components it renders to respond to 'value'
    // so that it can check whether they are filled.

    _this.value = props.value || props.defaultValue || '';
    _this.state = {
      height: Number(props.rows) * ROWS_HEIGHT
    };

    if (typeof window !== 'undefined') {
      _this.handleResize = (0, _debounce.default)(function () {
        _this.syncHeightWithShadow();
      }, 166); // Corresponds to 10 frames at 60 Hz.
    }

    return _this;
  }

  (0, _createClass2.default)(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.syncHeightWithShadow();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncHeightWithShadow();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.clear();
    }
  }, {
    key: "syncHeightWithShadow",
    value: function syncHeightWithShadow() {
      var props = this.props; // Guarding for **broken** shallow rendering method that call componentDidMount
      // but doesn't handle refs correctly.
      // To remove once the shallow rendering has been fixed.

      if (!this.shadowRef) {
        return;
      }

      if (this.isControlled) {
        // The component is controlled, we need to update the shallow value.
        this.shadowRef.value = props.value == null ? '' : String(props.value);
      }

      var lineHeight = this.singlelineShadowRef.scrollHeight; // The Textarea might not be visible (p.ex: display: none).
      // In this case, the layout values read from the DOM will be 0.

      lineHeight = lineHeight === 0 ? ROWS_HEIGHT : lineHeight;
      var newHeight = this.shadowRef.scrollHeight; // Guarding for jsdom, where scrollHeight isn't present.
      // See https://github.com/tmpvar/jsdom/issues/1013

      if (newHeight === undefined) {
        return;
      }

      if (Number(props.rowsMax) >= Number(props.rows)) {
        newHeight = Math.min(Number(props.rowsMax) * lineHeight, newHeight);
      }

      newHeight = Math.max(newHeight, lineHeight); // Need a large enough different to update the height.
      // This prevents infinite rendering loop.

      if (Math.abs(this.state.height - newHeight) > 1) {
        this.setState({
          height: newHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          rows = _this$props.rows,
          rowsMax = _this$props.rowsMax,
          style = _this$props.style,
          textareaRef = _this$props.textareaRef,
          value = _this$props.value,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["classes", "className", "defaultValue", "onChange", "rows", "rowsMax", "style", "textareaRef", "value"]);
      return _react.default.createElement("div", {
        className: classes.root
      }, _react.default.createElement(_reactEventListener.default, {
        target: "window",
        onResize: this.handleResize
      }), _react.default.createElement("textarea", {
        "aria-hidden": "true",
        className: (0, _classnames.default)(classes.textarea, classes.shadow),
        readOnly: true,
        ref: this.handleRefSinglelineShadow,
        rows: "1",
        tabIndex: -1,
        value: ""
      }), _react.default.createElement("textarea", {
        "aria-hidden": "true",
        className: (0, _classnames.default)(classes.textarea, classes.shadow),
        defaultValue: defaultValue,
        readOnly: true,
        ref: this.handleRefShadow,
        rows: rows,
        tabIndex: -1,
        value: value
      }), _react.default.createElement("textarea", (0, _extends2.default)({
        rows: rows,
        className: (0, _classnames.default)(classes.textarea, className),
        defaultValue: defaultValue,
        value: value,
        onChange: this.handleChange,
        ref: this.handleRefInput,
        style: (0, _extends2.default)({
          height: this.state.height
        }, style)
      }, other)));
    }
  }]);
  return Textarea;
}(_react.default.Component);

 true ? Textarea.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * @ignore
   */
  disabled: _propTypes.default.bool,

  /**
   * @ignore
   */
  onChange: _propTypes.default.func,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native textarea element.
   */
  textareaRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * @ignore
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : undefined;
Textarea.defaultProps = {
  rows: 1
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiPrivateTextarea'
})(Textarea);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/InputLabel/InputLabel.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/InputLabel/InputLabel.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _formControlState = _interopRequireDefault(__webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js"));

var _withFormControlContext = _interopRequireDefault(__webpack_require__(/*! ../FormControl/withFormControlContext */ "./node_modules/@material-ui/core/FormControl/withFormControlContext.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _FormLabel = _interopRequireDefault(__webpack_require__(/*! ../FormLabel */ "./node_modules/@material-ui/core/FormLabel/index.js"));

// @inheritedComponent FormLabel
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      transformOrigin: 'top left'
    },

    /* Styles applied to the root element if `focused={true}`. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the root element if `required={true}`. */
    required: {},

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, 24px) scale(1)'
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: 'translate(0, 21px) scale(1)'
    },

    /* Styles applied to the `input` element if `shrink={true}`. */
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },

    /* Styles applied to the `input` element if `disableAnimation={false}`. */
    animated: {
      transition: theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(12px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(12px, 17px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(12px, 10px) scale(0.75)',
        '&$marginDense': {
          transform: 'translate(12px, 7px) scale(0.75)'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(14px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(14px, 17px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(14px, -6px) scale(0.75)'
      }
    }
  };
};

exports.styles = styles;

function InputLabel(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      disableAnimation = props.disableAnimation,
      FormLabelClasses = props.FormLabelClasses,
      margin = props.margin,
      muiFormControl = props.muiFormControl,
      shrinkProp = props.shrink,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disableAnimation", "FormLabelClasses", "margin", "muiFormControl", "shrink", "variant"]);
  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  var fcs = (0, _formControlState.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['margin', 'variant']
  });
  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty2.default)(_classNames, classes.animated, !disableAnimation), (0, _defineProperty2.default)(_classNames, classes.shrink, shrink), (0, _defineProperty2.default)(_classNames, classes.marginDense, fcs.margin === 'dense'), (0, _defineProperty2.default)(_classNames, classes.filled, fcs.variant === 'filled'), (0, _defineProperty2.default)(_classNames, classes.outlined, fcs.variant === 'outlined'), _classNames), classNameProp);
  return _react.default.createElement(_FormLabel.default, (0, _extends2.default)({
    "data-shrink": shrink,
    className: className,
    classes: (0, _extends2.default)({
      focused: classes.focused,
      disabled: classes.disabled,
      error: classes.error,
      required: classes.required
    }, FormLabelClasses)
  }, other), children);
}

 true ? InputLabel.propTypes = {
  /**
   * The contents of the `InputLabel`.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: _propTypes.default.bool,

  /**
   * If `true`, apply disabled class.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the input of this label is focused.
   */
  focused: _propTypes.default.bool,

  /**
   * `classes` property applied to the [`FormLabel`](/api/form-label/) element.
   */
  FormLabelClasses: _propTypes.default.object,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: _propTypes.default.oneOf(['dense']),

  /**
   * @ignore
   */
  muiFormControl: _propTypes.default.object,

  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: _propTypes.default.bool,

  /**
   * If `true`, the label is shrunk.
   */
  shrink: _propTypes.default.bool,

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
InputLabel.defaultProps = {
  disableAnimation: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiInputLabel'
})((0, _withFormControlContext.default)(InputLabel));

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/List/List.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/List/List.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _ListContext = _interopRequireDefault(__webpack_require__(/*! ./ListContext */ "./node_modules/@material-ui/core/List/ListContext.js"));

var styles = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if `dense={true}` & `disablePadding={false}`. */
  dense: {
    paddingTop: 4,
    paddingBottom: 4
  },

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
exports.styles = styles;

function List(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      Component = props.component,
      dense = props.dense,
      disablePadding = props.disablePadding,
      subheader = props.subheader,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.dense, dense && !disablePadding), (0, _defineProperty2.default)(_classNames, classes.padding, !disablePadding), (0, _defineProperty2.default)(_classNames, classes.subheader, subheader), _classNames), className)
  }, other), _react.default.createElement(_ListContext.default.Provider, {
    value: {
      dense: dense
    }
  }, subheader, children));
}

 true ? List.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items. The property is available to descendant components as the
   * `dense` context.
   */
  dense: _propTypes.default.bool,

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: _propTypes.default.bool,

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: _propTypes.default.node
} : undefined;
List.defaultProps = {
  component: 'ul',
  dense: false,
  disablePadding: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiList'
})(List);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/List/ListContext.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/List/ListContext.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

/**
 * @ignore - internal component.
 */
var ListContext = _react.default.createContext({});

var _default = ListContext;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Menu/Menu.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/Menu/Menu.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/scrollbarSize */ "./node_modules/dom-helpers/util/scrollbarSize.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _Popover = _interopRequireDefault(__webpack_require__(/*! ../Popover */ "./node_modules/@material-ui/core/Popover/index.js"));

var _MenuList = _interopRequireDefault(__webpack_require__(/*! ../MenuList */ "./node_modules/@material-ui/core/MenuList/index.js"));

// @inheritedComponent Popover
var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  }
};
exports.styles = styles;

var Menu =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Menu, _React$Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getContentAnchorEl = function () {
      if (_this.menuListRef.selectedItemRef) {
        return _reactDom.default.findDOMNode(_this.menuListRef.selectedItemRef);
      }

      return _reactDom.default.findDOMNode(_this.menuListRef).firstChild;
    };

    _this.focus = function () {
      if (_this.menuListRef && _this.menuListRef.selectedItemRef) {
        _reactDom.default.findDOMNode(_this.menuListRef.selectedItemRef).focus();

        return;
      }

      var menuList = _reactDom.default.findDOMNode(_this.menuListRef);

      if (menuList && menuList.firstChild) {
        menuList.firstChild.focus();
      }
    };

    _this.handleMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.handleEntering = function (element) {
      var _this$props = _this.props,
          disableAutoFocusItem = _this$props.disableAutoFocusItem,
          theme = _this$props.theme;

      var menuList = _reactDom.default.findDOMNode(_this.menuListRef); // Focus so the scroll computation of the Popover works as expected.


      if (disableAutoFocusItem !== true) {
        _this.focus();
      } // Let's ignore that piece of logic if users are already overriding the width
      // of the menu.


      if (menuList && element.clientHeight < menuList.clientHeight && !menuList.style.width) {
        var size = "".concat((0, _scrollbarSize.default)(), "px");
        menuList.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = size;
        menuList.style.width = "calc(100% + ".concat(size, ")");
      }

      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    };

    _this.handleListKeyDown = function (event) {
      if (event.key === 'Tab') {
        event.preventDefault();

        if (_this.props.onClose) {
          _this.props.onClose(event, 'tabKeyDown');
        }
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.open && this.props.disableAutoFocusItem !== true) {
        this.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          classes = _this$props2.classes,
          disableAutoFocusItem = _this$props2.disableAutoFocusItem,
          MenuListProps = _this$props2.MenuListProps,
          onEntering = _this$props2.onEntering,
          _this$props2$PaperPro = _this$props2.PaperProps,
          PaperProps = _this$props2$PaperPro === void 0 ? {} : _this$props2$PaperPro,
          PopoverClasses = _this$props2.PopoverClasses,
          theme = _this$props2.theme,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "classes", "disableAutoFocusItem", "MenuListProps", "onEntering", "PaperProps", "PopoverClasses", "theme"]);
      return _react.default.createElement(_Popover.default, (0, _extends2.default)({
        getContentAnchorEl: this.getContentAnchorEl,
        classes: PopoverClasses,
        onEntering: this.handleEntering,
        anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
        transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
        PaperProps: (0, _extends2.default)({}, PaperProps, {
          classes: (0, _extends2.default)({}, PaperProps.classes, {
            root: classes.paper
          })
        })
      }, other), _react.default.createElement(_MenuList.default, (0, _extends2.default)({
        onKeyDown: this.handleListKeyDown
      }, MenuListProps, {
        ref: this.handleMenuListRef
      }), children));
    }
  }]);
  return Menu;
}(_react.default.Component);

 true ? Menu.propTypes = {
  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * If `true`, the selected / first menu item will not be auto focused.
   */
  disableAutoFocusItem: _propTypes.default.bool,

  /**
   * Properties applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: _propTypes.default.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: _propTypes.default.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: _propTypes.default.func,

  /**
   * If `true`, the menu is visible.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: _propTypes.default.object,

  /**
   * `classes` property applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])])
} : undefined;
Menu.defaultProps = {
  disableAutoFocusItem: false,
  transitionDuration: 'auto'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiMenu',
  withTheme: true
})(Menu);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/MenuList/MenuList.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/MenuList/MenuList.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/utils/ownerDocument.js"));

var _List = _interopRequireDefault(__webpack_require__(/*! ../List */ "./node_modules/@material-ui/core/List/index.js"));

// @inheritedComponent List
var MenuList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MenuList, _React$Component);

  function MenuList() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, MenuList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MenuList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      currentTabIndex: null
    };

    _this.handleBlur = function (event) {
      _this.blurTimer = setTimeout(function () {
        if (_this.listRef) {
          var list = _this.listRef;
          var currentFocus = (0, _ownerDocument.default)(list).activeElement;

          if (!list.contains(currentFocus)) {
            _this.resetTabIndex();
          }
        }
      }, 30);

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    };

    _this.handleKeyDown = function (event) {
      var list = _this.listRef;
      var key = event.key;
      var currentFocus = (0, _ownerDocument.default)(list).activeElement;

      if ((key === 'ArrowUp' || key === 'ArrowDown') && (!currentFocus || currentFocus && !list.contains(currentFocus))) {
        if (_this.selectedItemRef) {
          _this.selectedItemRef.focus();
        } else {
          list.firstChild.focus();
        }
      } else if (key === 'ArrowDown') {
        event.preventDefault();

        if (currentFocus.nextElementSibling) {
          currentFocus.nextElementSibling.focus();
        } else if (!_this.props.disableListWrap) {
          list.firstChild.focus();
        }
      } else if (key === 'ArrowUp') {
        event.preventDefault();

        if (currentFocus.previousElementSibling) {
          currentFocus.previousElementSibling.focus();
        } else if (!_this.props.disableListWrap) {
          list.lastChild.focus();
        }
      } else if (key === 'Home') {
        event.preventDefault();
        list.firstChild.focus();
      } else if (key === 'End') {
        event.preventDefault();
        list.lastChild.focus();
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(event);
      }
    };

    _this.handleItemFocus = function (event) {
      var list = _this.listRef;

      if (list) {
        for (var i = 0; i < list.children.length; i += 1) {
          if (list.children[i] === event.currentTarget) {
            _this.setTabIndex(i);

            break;
          }
        }
      }
    };

    return _this;
  }

  (0, _createClass2.default)(MenuList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resetTabIndex();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.blurTimer);
    }
  }, {
    key: "setTabIndex",
    value: function setTabIndex(index) {
      this.setState({
        currentTabIndex: index
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      var currentTabIndex = this.state.currentTabIndex;
      var list = this.listRef;

      if (!list || !list.children || !list.firstChild) {
        return;
      }

      if (currentTabIndex && currentTabIndex >= 0) {
        list.children[currentTabIndex].focus();
      } else {
        list.firstChild.focus();
      }
    }
  }, {
    key: "resetTabIndex",
    value: function resetTabIndex() {
      var list = this.listRef;
      var currentFocus = (0, _ownerDocument.default)(list).activeElement;
      var items = [];

      for (var i = 0; i < list.children.length; i += 1) {
        items.push(list.children[i]);
      }

      var currentFocusIndex = items.indexOf(currentFocus);

      if (currentFocusIndex !== -1) {
        return this.setTabIndex(currentFocusIndex);
      }

      if (this.selectedItemRef) {
        return this.setTabIndex(items.indexOf(this.selectedItemRef));
      }

      return this.setTabIndex(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          onBlur = _this$props.onBlur,
          onKeyDown = _this$props.onKeyDown,
          disableListWrap = _this$props.disableListWrap,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "onBlur", "onKeyDown", "disableListWrap"]);
      return _react.default.createElement(_List.default, (0, _extends2.default)({
        role: "menu",
        ref: function ref(_ref) {
          _this2.listRef = _reactDom.default.findDOMNode(_ref);
        },
        className: className,
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur
      }, other), _react.default.Children.map(children, function (child, index) {
        if (!_react.default.isValidElement(child)) {
          return null;
        }

         true ? (0, _warning.default)(child.type !== _react.default.Fragment, ["Material-UI: the MenuList component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n')) : undefined;
        return _react.default.cloneElement(child, {
          tabIndex: index === _this2.state.currentTabIndex ? 0 : -1,
          ref: child.props.selected ? function (ref) {
            _this2.selectedItemRef = _reactDom.default.findDOMNode(ref);
          } : undefined,
          onFocus: _this2.handleItemFocus
        });
      }));
    }
  }]);
  return MenuList;
}(_react.default.Component);

 true ? MenuList.propTypes = {
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the menu items will not wrap focus.
   */
  disableListWrap: _propTypes.default.bool,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func
} : undefined;
MenuList.defaultProps = {
  disableListWrap: false
};
var _default = MenuList;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Modal/Modal.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/Modal/Modal.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/utils/ownerDocument.js"));

var _RootRef = _interopRequireDefault(__webpack_require__(/*! ../RootRef */ "./node_modules/@material-ui/core/RootRef/index.js"));

var _Portal = _interopRequireDefault(__webpack_require__(/*! ../Portal */ "./node_modules/@material-ui/core/Portal/index.js"));

var _helpers = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/utils/helpers.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _ModalManager = _interopRequireDefault(__webpack_require__(/*! ./ModalManager */ "./node_modules/@material-ui/core/Modal/ModalManager.js"));

var _Backdrop = _interopRequireDefault(__webpack_require__(/*! ../Backdrop */ "./node_modules/@material-ui/core/Backdrop/index.js"));

var _manageAriaHidden = __webpack_require__(/*! ./manageAriaHidden */ "./node_modules/@material-ui/core/Modal/manageAriaHidden.js");

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom.default.findDOMNode(container) || defaultContainer;
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
}

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },

    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: 'hidden'
    }
  };
};
/* istanbul ignore if */


exports.styles = styles;

if ( true && !_react.default.createContext) {
  throw new Error('Material-UI: react@16.3.0 or greater is required.');
}
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */


var Modal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Modal, _React$Component);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Modal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Modal).call(this));
    _this.mounted = false;

    _this.handleOpen = function () {
      var doc = (0, _ownerDocument.default)(_this.mountNode);
      var container = getContainer(_this.props.container, doc.body);

      _this.props.manager.add((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), container);

      doc.addEventListener('focus', _this.enforceFocus, true);

      if (_this.dialogRef) {
        _this.handleOpened();
      }
    };

    _this.handleRendered = function () {
      if (_this.props.onRendered) {
        _this.props.onRendered();
      }

      if (_this.props.open) {
        _this.handleOpened();
      } else {
        (0, _manageAriaHidden.ariaHidden)(_this.modalRef, true);
      }
    };

    _this.handleOpened = function () {
      _this.autoFocus();

      _this.props.manager.mount((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))); // Fix a bug on Chrome where the scroll isn't initially 0.


      _this.modalRef.scrollTop = 0;
    };

    _this.handleClose = function (reason) {
      var hasTransition = getHasTransition(_this.props);
      /* If the component does not have a transition or is unmounting remove the Modal
      otherwise let the transition handle removing the style, this prevents elements
      moving around when the Modal is closed. */

      if (!(hasTransition && _this.props.closeAfterTransition) || reason === 'unmount') {
        _this.props.manager.remove((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
      }

      var doc = (0, _ownerDocument.default)(_this.mountNode);
      doc.removeEventListener('focus', _this.enforceFocus, true);

      _this.restoreLastFocus();
    };

    _this.handleExited = function () {
      if (_this.props.closeAfterTransition) {
        _this.props.manager.remove((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
      }

      _this.setState({
        exited: true
      });
    };

    _this.handleBackdropClick = function (event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (_this.props.onBackdropClick) {
        _this.props.onBackdropClick(event);
      }

      if (!_this.props.disableBackdropClick && _this.props.onClose) {
        _this.props.onClose(event, 'backdropClick');
      }
    };

    _this.handleKeyDown = function (event) {
      // event.defaultPrevented:
      //
      // Ignore events that have been `event.preventDefault()` marked.
      // preventDefault() is meant to stop default behaviours like
      // clicking a checkbox to check it, hitting a button to submit a form,
      // and hitting left arrow to move the cursor in a text input etc.
      // Only special HTML elements have these default bahaviours.
      //
      // To remove in v4.
      if (event.key !== 'Escape' || !_this.isTopModal() || event.defaultPrevented) {
        return;
      } // Swallow the event, in case someone is listening for the escape key on the body.


      event.stopPropagation();

      if (_this.props.onEscapeKeyDown) {
        _this.props.onEscapeKeyDown(event);
      }

      if (!_this.props.disableEscapeKeyDown && _this.props.onClose) {
        _this.props.onClose(event, 'escapeKeyDown');
      }
    };

    _this.enforceFocus = function () {
      // The Modal might not already be mounted.
      if (!_this.isTopModal() || _this.props.disableEnforceFocus || !_this.mounted || !_this.dialogRef) {
        return;
      }

      var currentActiveElement = (0, _ownerDocument.default)(_this.mountNode).activeElement;

      if (!_this.dialogRef.contains(currentActiveElement)) {
        _this.dialogRef.focus();
      }
    };

    _this.handlePortalRef = function (ref) {
      _this.mountNode = ref ? ref.getMountNode() : ref;
    };

    _this.handleModalRef = function (ref) {
      _this.modalRef = ref;
    };

    _this.onRootRef = function (ref) {
      _this.dialogRef = ref;
    };

    _this.state = {
      exited: !props.open
    };
    return _this;
  }

  (0, _createClass2.default)(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;

      if (this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open && !this.props.open) {
        this.handleClose();
      } else if (!prevProps.open && this.props.open) {
        this.lastFocus = (0, _ownerDocument.default)(this.mountNode).activeElement;
        this.handleOpen();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.props.open || getHasTransition(this.props) && !this.state.exited) {
        this.handleClose('unmount');
      }
    }
  }, {
    key: "autoFocus",
    value: function autoFocus() {
      // We might render an empty child.
      if (this.props.disableAutoFocus || !this.dialogRef) {
        return;
      }

      var currentActiveElement = (0, _ownerDocument.default)(this.mountNode).activeElement;

      if (!this.dialogRef.contains(currentActiveElement)) {
        if (!this.dialogRef.hasAttribute('tabIndex')) {
           true ? (0, _warning.default)(false, ['Material-UI: the modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n')) : undefined;
          this.dialogRef.setAttribute('tabIndex', -1);
        }

        this.lastFocus = currentActiveElement;
        this.dialogRef.focus();
      }
    }
  }, {
    key: "restoreLastFocus",
    value: function restoreLastFocus() {
      if (this.props.disableRestoreFocus || !this.lastFocus) {
        return;
      } // Not all elements in IE 11 have a focus method.
      // Because IE 11 market share is low, we accept the restore focus being broken
      // and we silent the issue.


      if (this.lastFocus.focus) {
        this.lastFocus.focus();
      }

      this.lastFocus = null;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal() {
      return this.props.manager.isTopModal(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          BackdropComponent = _this$props.BackdropComponent,
          BackdropProps = _this$props.BackdropProps,
          children = _this$props.children,
          classes = _this$props.classes,
          className = _this$props.className,
          closeAfterTransition = _this$props.closeAfterTransition,
          container = _this$props.container,
          disableAutoFocus = _this$props.disableAutoFocus,
          disableBackdropClick = _this$props.disableBackdropClick,
          disableEnforceFocus = _this$props.disableEnforceFocus,
          disableEscapeKeyDown = _this$props.disableEscapeKeyDown,
          disablePortal = _this$props.disablePortal,
          disableRestoreFocus = _this$props.disableRestoreFocus,
          hideBackdrop = _this$props.hideBackdrop,
          keepMounted = _this$props.keepMounted,
          manager = _this$props.manager,
          onBackdropClick = _this$props.onBackdropClick,
          onClose = _this$props.onClose,
          onEscapeKeyDown = _this$props.onEscapeKeyDown,
          onRendered = _this$props.onRendered,
          open = _this$props.open,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);
      var exited = this.state.exited;
      var hasTransition = getHasTransition(this.props);

      if (!keepMounted && !open && (!hasTransition || exited)) {
        return null;
      }

      var childProps = {}; // It's a Transition like component

      if (hasTransition) {
        childProps.onExited = (0, _helpers.createChainedFunction)(this.handleExited, children.props.onExited);
      }

      if (children.props.role === undefined) {
        childProps.role = children.props.role || 'document';
      }

      if (children.props.tabIndex === undefined) {
        childProps.tabIndex = children.props.tabIndex || '-1';
      }

      return _react.default.createElement(_Portal.default, {
        ref: this.handlePortalRef,
        container: container,
        disablePortal: disablePortal,
        onRendered: this.handleRendered
      }, _react.default.createElement("div", (0, _extends2.default)({
        ref: this.handleModalRef,
        onKeyDown: this.handleKeyDown,
        role: "presentation",
        className: (0, _classnames.default)(classes.root, className, (0, _defineProperty2.default)({}, classes.hidden, exited))
      }, other), hideBackdrop ? null : _react.default.createElement(BackdropComponent, (0, _extends2.default)({
        open: open,
        onClick: this.handleBackdropClick
      }, BackdropProps)), _react.default.createElement(_RootRef.default, {
        rootRef: this.onRootRef
      }, _react.default.cloneElement(children, childProps))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.open) {
        return {
          exited: false
        };
      }

      if (!getHasTransition(nextProps)) {
        // Otherwise let handleExited take care of marking exited.
        return {
          exited: true
        };
      }

      return null;
    }
  }]);
  return Modal;
}(_react.default.Component);

 true ? Modal.propTypes = {
  /**
   * A backdrop component. This property enables custom backdrop rendering.
   */
  BackdropComponent: _utils.componentPropType,

  /**
   * Properties applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: _propTypes.default.object,

  /**
   * A single child content element.
   */
  children: _propTypes.default.element,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   */
  closeAfterTransition: _propTypes.default.bool,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: _propTypes.default.bool,

  /**
   * If `true`, clicking the backdrop will not fire any callback.
   */
  disableBackdropClick: _propTypes.default.bool,

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: _propTypes.default.bool,

  /**
   * If `true`, hitting escape will not fire any callback.
   */
  disableEscapeKeyDown: _propTypes.default.bool,

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: _propTypes.default.bool,

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: _propTypes.default.bool,

  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: _propTypes.default.bool,

  /**
   * Always keep the children in the DOM.
   * This property can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: _propTypes.default.bool,

  /**
   * @ignore
   *
   * A modal manager used to track and manage the state of open
   * Modals. This enables customizing how modals interact within a container.
   */
  manager: _propTypes.default.object,

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: _propTypes.default.func,

  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` property took effect.
   */
  onRendered: _propTypes.default.func,

  /**
   * If `true`, the modal is open.
   */
  open: _propTypes.default.bool.isRequired
} : undefined;
Modal.defaultProps = {
  BackdropComponent: _Backdrop.default,
  closeAfterTransition: false,
  disableAutoFocus: false,
  disableBackdropClick: false,
  disableEnforceFocus: false,
  disableEscapeKeyDown: false,
  disablePortal: false,
  disableRestoreFocus: false,
  hideBackdrop: false,
  keepMounted: false,
  // Modals don't open on the server so this won't conflict with concurrent requests.
  manager: new _ModalManager.default()
};

var _default = (0, _withStyles.default)(styles, {
  flip: false,
  name: 'MuiModal'
})(Modal);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/NativeSelect/NativeSelect.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/NativeSelect/NativeSelect.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _NativeSelectInput = _interopRequireDefault(__webpack_require__(/*! ./NativeSelectInput */ "./node_modules/@material-ui/core/NativeSelect/NativeSelectInput.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _formControlState = _interopRequireDefault(__webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js"));

var _withFormControlContext = _interopRequireDefault(__webpack_require__(/*! ../FormControl/withFormControlContext */ "./node_modules/@material-ui/core/FormControl/withFormControlContext.js"));

var _ArrowDropDown = _interopRequireDefault(__webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js"));

var _Input = _interopRequireDefault(__webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/Input/index.js"));

// @inheritedComponent Input
var styles = function styles(theme) {
  return {
    /* Styles applied to the `Input` component `root` class. */
    root: {
      position: 'relative',
      width: '100%'
    },

    /* Styles applied to the `Input` component `select` class. */
    select: {
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: 'none',
      paddingRight: 32,
      borderRadius: 0,
      // Reset
      height: '1.1875em',
      // Reset (19px), match the native input line-height
      width: 'calc(100% - 32px)',
      minWidth: 16,
      // So it doesn't collapse.
      cursor: 'pointer',
      '&:focus': {
        // Show that it's not an text input
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style

      },
      // Remove IE 11 arrow
      '&::-ms-expand': {
        display: 'none'
      },
      '&$disabled': {
        cursor: 'default'
      },
      '&[multiple]': {
        height: 'auto'
      },
      '&:not([multiple]) option, &:not([multiple]) optgroup': {
        backgroundColor: theme.palette.background.paper
      }
    },

    /* Styles applied to the `Input` component if `variant="filled"`. */
    filled: {
      width: 'calc(100% - 44px)'
    },

    /* Styles applied to the `Input` component if `variant="outlined"`. */
    outlined: {
      width: 'calc(100% - 46px)',
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the `Input` component `selectMenu` class. */
    selectMenu: {
      width: 'auto',
      // Fix Safari textOverflow
      height: 'auto',
      // Reset
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      minHeight: '1.1875em' // Reset (19px), match the native input line-height

    },

    /* Styles applied to the `Input` component `disabled` class. */
    disabled: {},

    /* Styles applied to the `Input` component `icon` class. */
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input.
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 12px)',
      // Center vertically
      color: theme.palette.action.active,
      'pointer-events': 'none' // Don't block pointer events on the select under the icon.

    }
  };
};
/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 */


exports.styles = styles;

function NativeSelect(props) {
  var children = props.children,
      classes = props.classes,
      IconComponent = props.IconComponent,
      input = props.input,
      inputProps = props.inputProps,
      muiFormControl = props.muiFormControl,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "IconComponent", "input", "inputProps", "muiFormControl", "variant"]);
  var fcs = (0, _formControlState.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  return _react.default.cloneElement(input, (0, _extends2.default)({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: _NativeSelectInput.default,
    inputProps: (0, _extends2.default)({
      children: children,
      classes: classes,
      IconComponent: IconComponent,
      variant: fcs.variant,
      type: undefined
    }, inputProps, input ? input.props.inputProps : {})
  }, other));
}

 true ? NativeSelect.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _utils.componentPropType,

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: _propTypes.default.element,

  /**
   * Attributes applied to the `select` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * @ignore
   */
  muiFormControl: _propTypes.default.object,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: _propTypes.default.func,

  /**
   * The input value.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]))]),

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
NativeSelect.defaultProps = {
  IconComponent: _ArrowDropDown.default,
  input: _react.default.createElement(_Input.default, null)
};
NativeSelect.muiName = 'Select';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiNativeSelect'
})((0, _withFormControlContext.default)(NativeSelect));

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/NativeSelect/NativeSelectInput.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/NativeSelect/NativeSelectInput.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

/**
 * @ignore - internal component.
 */
function NativeSelectInput(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      IconComponent = props.IconComponent,
      inputRef = props.inputRef,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disabled", "IconComponent", "inputRef", "name", "onChange", "value", "variant"]);
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement("select", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.select, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.filled, variant === 'filled'), (0, _defineProperty2.default)(_classNames, classes.outlined, variant === 'outlined'), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), _classNames), className),
    name: name,
    disabled: disabled,
    onChange: onChange,
    value: value,
    ref: inputRef
  }, other), children), _react.default.createElement(IconComponent, {
    className: classes.icon
  }));
}

 true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _utils.componentPropType,

  /**
   * Use that property to pass a ref callback to the native select element.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: _propTypes.default.string,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: _propTypes.default.func,

  /**
   * The input value.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]))]),

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
var _default = NativeSelectInput;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/NoSsr/NoSsr.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/NoSsr/NoSsr.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

/**
 * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
 *
 * This component can be useful in a variety of situations:
 * - Escape hatch for broken dependencies not supporting SSR.
 * - Improve the time-to-first paint on the client by only rendering above the fold.
 * - Reduce the rendering time on the server.
 * - Under too heavy server load, you can turn on service degradation.
 */
var NoSsr =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NoSsr, _React$Component);

  function NoSsr() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, NoSsr);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NoSsr)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.mounted = false;
    _this.state = {
      mounted: false
    };
    return _this;
  }

  (0, _createClass2.default)(NoSsr, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.mounted = true;

      if (this.props.defer) {
        // Wondering why we use two RAFs? Check this video out:
        // https://www.youtube.com/watch?v=cCOL7MC4Pl0
        //
        // The componentDidMount() method is called after the DOM nodes are inserted.
        // The UI might not have rendering the changes. We request a frame.
        requestAnimationFrame(function () {
          // The browser should be about to render the DOM nodes
          // that React committed at this point.
          // We don't want to interrupt. Let's wait the next frame.
          requestAnimationFrame(function () {
            // The UI is up-to-date at this point.
            // We can continue rendering the children.
            if (_this2.mounted) {
              _this2.setState({
                mounted: true
              });
            }
          });
        });
      } else {
        this.setState({
          mounted: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          fallback = _this$props.fallback;
      return this.state.mounted ? children : fallback;
    }
  }]);
  return NoSsr;
}(_react.default.Component);

 true ? NoSsr.propTypes = {
  children: _propTypes.default.node.isRequired,

  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   */
  defer: _propTypes.default.bool,

  /**
   * The fallback content to display.
   */
  fallback: _propTypes.default.node
} : undefined;

if (true) {
   true ? NoSsr.propTypes = (0, _utils.exactProp)(NoSsr.propTypes) : undefined;
}

NoSsr.defaultProps = {
  defer: false,
  fallback: null
};
var _default = NoSsr;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/OutlinedInput/NotchedOutline.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/OutlinedInput/NotchedOutline.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _styles = __webpack_require__(/*! ../styles */ "./node_modules/@material-ui/core/styles/index.js");

var _helpers = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/utils/helpers.js");

var styles = function styles(theme) {
  var align = theme.direction === 'rtl' ? 'right' : 'left';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: 0,
      pointerEvents: 'none',
      borderRadius: theme.shape.borderRadius,
      borderStyle: 'solid',
      borderWidth: 1,
      // Match the Input Label
      transition: theme.transitions.create(["padding-".concat(align), 'border-color', 'border-width'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the legend element. */
    legend: {
      textAlign: 'left',
      padding: 0,
      lineHeight: '11px',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    }
  };
};
/**
 * @ignore - internal component.
 */


exports.styles = styles;

function NotchedOutline(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      labelWidthProp = props.labelWidth,
      notched = props.notched,
      style = props.style,
      theme = props.theme,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "labelWidth", "notched", "style", "theme"]);
  var align = theme.direction === 'rtl' ? 'right' : 'left';
  var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0;
  return _react.default.createElement("fieldset", (0, _extends3.default)({
    "aria-hidden": true,
    style: (0, _extends3.default)((0, _defineProperty2.default)({}, "padding".concat((0, _helpers.capitalize)(align)), 8 + (notched ? 0 : labelWidth / 2)), style),
    className: (0, _classnames.default)(classes.root, className)
  }, other), _react.default.createElement("legend", {
    className: classes.legend,
    style: {
      // IE 11: fieldset with legend does not render
      // a border radius. This maintains consistency
      // by always having a legend rendered
      width: notched ? labelWidth : 0.01
    }
  }, _react.default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  })));
}

 true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The width of the legend.
   */
  labelWidth: _propTypes.default.number.isRequired,

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: _propTypes.default.bool.isRequired,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object
} : undefined;

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiPrivateNotchedOutline',
  withTheme: true
})(NotchedOutline);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/OutlinedInput/OutlinedInput.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/OutlinedInput/OutlinedInput.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _InputBase = _interopRequireDefault(__webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/InputBase/index.js"));

var _NotchedOutline = _interopRequireDefault(__webpack_require__(/*! ./NotchedOutline */ "./node_modules/@material-ui/core/OutlinedInput/NotchedOutline.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

// @inheritedComponent InputBase
var styles = function styles(theme) {
  var borderColor = theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      '& $notchedOutline': {
        borderColor: borderColor
      },
      '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
        borderColor: theme.palette.text.primary,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderColor: borderColor
        }
      },
      '&$focused $notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      '&$error $notchedOutline': {
        borderColor: theme.palette.error.main
      },
      '&$disabled $notchedOutline': {
        borderColor: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 14
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 14
    },

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '18.5px 14px',
      boxSizing: 'border-box' // Prevent padding issue with fullWidth.

    },

    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {},

    /* Styles applied to the `input` element. */
    input: {
      padding: '18.5px 14px'
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 15,
      paddingBottom: 15
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};

exports.styles = styles;

function OutlinedInput(props) {
  var classes = props.classes,
      labelWidth = props.labelWidth,
      notched = props.notched,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "labelWidth", "notched"]);
  return _react.default.createElement(_InputBase.default, (0, _extends2.default)({
    renderPrefix: function renderPrefix(state) {
      return _react.default.createElement(_NotchedOutline.default, {
        className: classes.notchedOutline,
        labelWidth: labelWidth,
        notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      });
    },
    classes: (0, _extends2.default)({}, classes, {
      root: (0, _classnames.default)(classes.root, classes.underline),
      notchedOutline: null
    })
  }, other));
}

 true ? OutlinedInput.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: _propTypes.default.string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The CSS class name of the wrapper element.
   */
  className: _propTypes.default.string,

  /**
   * The default input value, useful when not controlling the component.
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object]))]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: _propTypes.default.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * The component used for the native input.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: _utils.componentPropType,

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * The width of the legend.
   */
  labelWidth: _propTypes.default.number.isRequired,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: _propTypes.default.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: _propTypes.default.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: _propTypes.default.string,

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: _propTypes.default.bool,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: _propTypes.default.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: _propTypes.default.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: _propTypes.default.bool,

  /**
   * If `true`, the input will be required.
   */
  required: _propTypes.default.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: _propTypes.default.node,

  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: _propTypes.default.string,

  /**
   * The input value, required for a controlled component.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object]))])
} : undefined;
_InputBase.default.defaultProps = {
  fullWidth: false,
  inputComponent: 'input',
  multiline: false,
  type: 'text'
};
OutlinedInput.muiName = 'Input';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiOutlinedInput'
})(OutlinedInput);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Paper/Paper.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/Paper/Paper.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return (0, _extends2.default)({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    }
  }, elevations);
};

exports.styles = styles;

function Paper(props) {
  var classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      square = props.square,
      elevation = props.elevation,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "square", "elevation"]);
   true ? (0, _warning.default)(elevation >= 0 && elevation < 25, "Material-UI: this elevation `".concat(elevation, "` is not implemented.")) : undefined;
  var className = (0, _classnames.default)(classes.root, classes["elevation".concat(elevation)], (0, _defineProperty2.default)({}, classes.rounded, !square), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

 true ? Paper.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It's accepting values between 0 and 24 inclusive.
   */
  elevation: _propTypes.default.number,

  /**
   * If `true`, rounded corners are disabled.
   */
  square: _propTypes.default.bool
} : undefined;
Paper.defaultProps = {
  component: 'div',
  elevation: 2,
  square: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiPaper'
})(Paper);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Popover/Popover.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/Popover/Popover.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _debounce = _interopRequireDefault(__webpack_require__(/*! debounce */ "./node_modules/debounce/index.js"));

var _reactEventListener = _interopRequireDefault(__webpack_require__(/*! react-event-listener */ "./node_modules/react-event-listener/dist/react-event-listener.cjs.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/utils/ownerDocument.js"));

var _ownerWindow = _interopRequireDefault(__webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/utils/ownerWindow.js"));

var _helpers = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/utils/helpers.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _Modal = _interopRequireDefault(__webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/Modal/index.js"));

var _Grow = _interopRequireDefault(__webpack_require__(/*! ../Grow */ "./node_modules/@material-ui/core/Grow/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/Paper/index.js"));

// @inheritedComponent Modal
// < 1kb payload overhead when lodash/debounce is > 3kb.
function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentNode;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none'
  }
};
exports.styles = styles;

var Popover =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Popover, _React$Component);

  function Popover() {
    var _this;

    (0, _classCallCheck2.default)(this, Popover);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Popover).call(this));
    _this.handleGetOffsetTop = getOffsetTop;
    _this.handleGetOffsetLeft = getOffsetLeft;

    _this.componentWillUnmount = function () {
      _this.handleResize.clear();
    };

    _this.setPositioningStyles = function (element) {
      var positioning = _this.getPositioningStyle(element);

      if (positioning.top !== null) {
        element.style.top = positioning.top;
      }

      if (positioning.left !== null) {
        element.style.left = positioning.left;
      }

      element.style.transformOrigin = positioning.transformOrigin;
    };

    _this.getPositioningStyle = function (element) {
      var _this$props = _this.props,
          anchorEl = _this$props.anchorEl,
          anchorReference = _this$props.anchorReference,
          marginThreshold = _this$props.marginThreshold; // Check if the parent has requested anchoring on an inner content node

      var contentAnchorOffset = _this.getContentAnchorOffset(element);

      var elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight
      }; // Get the transform origin point on the element itself

      var transformOrigin = _this.getTransformOrigin(elemRect, contentAnchorOffset);

      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(transformOrigin)
        };
      } // Get the offset of of the anchoring element


      var anchorOffset = _this.getAnchorOffset(contentAnchorOffset); // Calculate element positioning


      var top = anchorOffset.top - transformOrigin.vertical;
      var left = anchorOffset.left - transformOrigin.horizontal;
      var bottom = top + elemRect.height;
      var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

      var containerWindow = (0, _ownerWindow.default)(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

      var heightThreshold = containerWindow.innerHeight - marginThreshold;
      var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

      if (top < marginThreshold) {
        var diff = top - marginThreshold;
        top -= diff;
        transformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        var _diff = bottom - heightThreshold;

        top -= _diff;
        transformOrigin.vertical += _diff;
      }

       true ? (0, _warning.default)(elemRect.height < heightThreshold || !elemRect.height || !heightThreshold, ['Material-UI: the popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n')) : undefined; // Check if the horizontal axis needs shifting

      if (left < marginThreshold) {
        var _diff2 = left - marginThreshold;

        left -= _diff2;
        transformOrigin.horizontal += _diff2;
      } else if (right > widthThreshold) {
        var _diff3 = right - widthThreshold;

        left -= _diff3;
        transformOrigin.horizontal += _diff3;
      }

      return {
        top: "".concat(top, "px"),
        left: "".concat(left, "px"),
        transformOrigin: getTransformOriginValue(transformOrigin)
      };
    };

    _this.handleEntering = function (element) {
      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }

      _this.setPositioningStyles(element);
    };

    if (typeof window !== 'undefined') {
      _this.handleResize = (0, _debounce.default)(function () {
        // Because we debounce the event, the open property might no longer be true
        // when the callback resolves.
        if (!_this.props.open) {
          return;
        }

        _this.setPositioningStyles(_this.paperRef);
      }, 166); // Corresponds to 10 frames at 60 Hz.
    }

    return _this;
  }

  (0, _createClass2.default)(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.action) {
        this.props.action({
          updatePosition: this.handleResize
        });
      }
    }
  }, {
    key: "getAnchorOffset",
    // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)
    value: function getAnchorOffset(contentAnchorOffset) {
      var _this$props2 = this.props,
          anchorEl = _this$props2.anchorEl,
          anchorOrigin = _this$props2.anchorOrigin,
          anchorReference = _this$props2.anchorReference,
          anchorPosition = _this$props2.anchorPosition;

      if (anchorReference === 'anchorPosition') {
         true ? (0, _warning.default)(anchorPosition, 'Material-UI: you need to provide a `anchorPosition` property when using ' + '<Popover anchorReference="anchorPosition" />.') : undefined;
        return anchorPosition;
      } // If an anchor element wasn't provided, just use the parent body element of this Popover


      var anchorElement = getAnchorEl(anchorEl) || (0, _ownerDocument.default)(this.paperRef).body;
      var anchorRect = anchorElement.getBoundingClientRect();
      var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
      return {
        top: anchorRect.top + this.handleGetOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + this.handleGetOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    } // Returns the vertical offset of inner content to anchor the transform on if provided

  }, {
    key: "getContentAnchorOffset",
    value: function getContentAnchorOffset(element) {
      var _this$props3 = this.props,
          getContentAnchorEl = _this$props3.getContentAnchorEl,
          anchorReference = _this$props3.anchorReference;
      var contentAnchorOffset = 0;

      if (getContentAnchorEl && anchorReference === 'anchorEl') {
        var contentAnchorEl = getContentAnchorEl(element);

        if (contentAnchorEl && element.contains(contentAnchorEl)) {
          var scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
        } // != the default value


         true ? (0, _warning.default)(this.props.anchorOrigin.vertical === 'top', ['Material-UI: you can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` property to the popover component.', 'Only use one of the two properties.', 'Set `getContentAnchorEl` to `null | undefined`' + ' or leave `anchorOrigin.vertical` unchanged.'].join('\n')) : undefined;
      }

      return contentAnchorOffset;
    } // Return the base transform origin using the element
    // and taking the content anchor offset into account if in use

  }, {
    key: "getTransformOrigin",
    value: function getTransformOrigin(elemRect) {
      var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var transformOrigin = this.props.transformOrigin;
      return {
        vertical: this.handleGetOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: this.handleGetOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          action = _this$props4.action,
          anchorEl = _this$props4.anchorEl,
          anchorOrigin = _this$props4.anchorOrigin,
          anchorPosition = _this$props4.anchorPosition,
          anchorReference = _this$props4.anchorReference,
          children = _this$props4.children,
          classes = _this$props4.classes,
          containerProp = _this$props4.container,
          elevation = _this$props4.elevation,
          getContentAnchorEl = _this$props4.getContentAnchorEl,
          marginThreshold = _this$props4.marginThreshold,
          ModalClasses = _this$props4.ModalClasses,
          onEnter = _this$props4.onEnter,
          onEntered = _this$props4.onEntered,
          onEntering = _this$props4.onEntering,
          onExit = _this$props4.onExit,
          onExited = _this$props4.onExited,
          onExiting = _this$props4.onExiting,
          open = _this$props4.open,
          PaperProps = _this$props4.PaperProps,
          role = _this$props4.role,
          transformOrigin = _this$props4.transformOrigin,
          TransitionComponent = _this$props4.TransitionComponent,
          transitionDurationProp = _this$props4.transitionDuration,
          _this$props4$Transiti = _this$props4.TransitionProps,
          TransitionProps = _this$props4$Transiti === void 0 ? {} : _this$props4$Transiti,
          other = (0, _objectWithoutProperties2.default)(_this$props4, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "container", "elevation", "getContentAnchorEl", "marginThreshold", "ModalClasses", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "role", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);
      var transitionDuration = transitionDurationProp;

      if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
        transitionDuration = undefined;
      } // If the container prop is provided, use that
      // If the anchorEl prop is provided, use its parent body element as the container
      // If neither are provided let the Modal take care of choosing the container


      var container = containerProp || (anchorEl ? (0, _ownerDocument.default)(getAnchorEl(anchorEl)).body : undefined);
      return _react.default.createElement(_Modal.default, (0, _extends2.default)({
        classes: ModalClasses,
        container: container,
        open: open,
        BackdropProps: {
          invisible: true
        }
      }, other), _react.default.createElement(TransitionComponent, (0, _extends2.default)({
        appear: true,
        in: open,
        onEnter: onEnter,
        onEntered: onEntered,
        onExit: onExit,
        onExited: onExited,
        onExiting: onExiting,
        role: role,
        timeout: transitionDuration
      }, TransitionProps, {
        onEntering: (0, _helpers.createChainedFunction)(this.handleEntering, TransitionProps.onEntering)
      }), _react.default.createElement(_Paper.default, (0, _extends2.default)({
        className: classes.paper,
        elevation: elevation,
        ref: function ref(_ref) {
          _this2.paperRef = _reactDom.default.findDOMNode(_ref);
        }
      }, PaperProps), _react.default.createElement(_reactEventListener.default, {
        target: "window",
        onResize: this.handleResize
      }), children)));
    }
  }]);
  return Popover;
}(_react.default.Component);

 true ? Popover.propTypes = {
  /**
   * This is callback property. It's called by the component on mount.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports updatePosition() action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: _propTypes.default.func,

  /**
   * This is the DOM element, or a function that returns the DOM element,
   * that may be used to set the position of the popover.
   */
  anchorEl: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: _propTypes.default.shape({
    horizontal: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['left', 'center', 'right'])]).isRequired,
    vertical: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['top', 'center', 'bottom'])]).isRequired
  }),

  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: _propTypes.default.shape({
    left: _propTypes.default.number.isRequired,
    top: _propTypes.default.number.isRequired
  }),

  /*
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: _propTypes.default.oneOf(['anchorEl', 'anchorPosition', 'none']),

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * The elevation of the popover.
   */
  elevation: _propTypes.default.number,

  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` property.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: _propTypes.default.func,

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: _propTypes.default.number,

  /**
   * `classes` property applied to the [`Modal`](/api/modal/) element.
   */
  ModalClasses: _propTypes.default.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired before the component is entering.
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired when the component has entered.
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired when the component is entering.
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired before the component is exiting.
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired when the component has exited.
   */
  onExited: _propTypes.default.func,

  /**
   * Callback fired when the component is exiting.
   */
  onExiting: _propTypes.default.func,

  /**
   * If `true`, the popover is visible.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * Properties applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: _propTypes.default.object,

  /**
   * @ignore
   */
  role: _propTypes.default.string,

  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: _propTypes.default.shape({
    horizontal: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['left', 'center', 'right'])]).isRequired,
    vertical: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['top', 'center', 'bottom'])]).isRequired
  }),

  /**
   * The component used for the transition.
   */
  TransitionComponent: _utils.componentPropType,

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])]),

  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: _propTypes.default.object
} : undefined;
Popover.defaultProps = {
  anchorReference: 'anchorEl',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  elevation: 8,
  marginThreshold: 16,
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  TransitionComponent: _Grow.default,
  transitionDuration: 'auto'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiPopover'
})(Popover);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Portal/Portal.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Portal/Portal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/utils/ownerDocument.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom.default.findDOMNode(container) || defaultContainer;
}

function getOwnerDocument(element) {
  return (0, _ownerDocument.default)(_reactDom.default.findDOMNode(element));
}
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */


var Portal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Portal, _React$Component);

  function Portal() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getMountNode = function () {
      return _this.mountNode;
    };

    return _this;
  }

  (0, _createClass2.default)(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setMountNode(this.props.container); // Only rerender if needed

      if (!this.props.disablePortal) {
        this.forceUpdate(this.props.onRendered);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.container !== this.props.container || prevProps.disablePortal !== this.props.disablePortal) {
        this.setMountNode(this.props.container); // Only rerender if needed

        if (!this.props.disablePortal) {
          this.forceUpdate(function () {
            if (_this2.props.onRendered) {
              // This might be triggered earlier than the componentDidUpdate of a parent element.
              // We need to account for it.
              clearTimeout(_this2.renderedTimer);
              _this2.renderedTimer = setTimeout(_this2.props.onRendered);
            }
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mountNode = null;
      clearTimeout(this.renderedTimer);
    }
  }, {
    key: "setMountNode",
    value: function setMountNode(container) {
      if (this.props.disablePortal) {
        this.mountNode = _reactDom.default.findDOMNode(this).parentElement;
        return;
      }

      this.mountNode = getContainer(container, getOwnerDocument(this).body);
    }
    /**
     * @public
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disablePortal = _this$props.disablePortal;

      if (disablePortal) {
        return children;
      }

      return this.mountNode ? _reactDom.default.createPortal(children, this.mountNode) : null;
    }
  }]);
  return Portal;
}(_react.default.Component);

 true ? Portal.propTypes = {
  /**
   * The children to render into the `container`.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: _propTypes.default.bool,

  /**
   * Callback fired once the children has been mounted into the `container`.
   */
  onRendered: _propTypes.default.func
} : undefined;
Portal.defaultProps = {
  disablePortal: false
};

if (true) {
   true ? Portal.propTypes = (0, _utils.exactProp)(Portal.propTypes) : undefined;
}

var _default = Portal;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/RootRef/RootRef.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/RootRef/RootRef.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _reactHelpers = __webpack_require__(/*! ../utils/reactHelpers */ "./node_modules/@material-ui/core/utils/reactHelpers.js");

/**
 * Helper component to allow attaching a ref to a
 * wrapped element to access the underlying DOM element.
 *
 * It's highly inspired by https://github.com/facebook/react/issues/11401#issuecomment-340543801.
 * For example:
 * ```jsx
 * import React from 'react';
 * import RootRef from '@material-ui/core/RootRef';
 *
 * class MyComponent extends React.Component {
 *   constructor() {
 *     super();
 *     this.domRef = React.createRef();
 *   }
 *
 *   componentDidMount() {
 *     console.log(this.domRef.current); // DOM node
 *   }
 *
 *   render() {
 *     return (
 *       <RootRef rootRef={this.domRef}>
 *         <SomeChildComponent />
 *       </RootRef>
 *     );
 *   }
 * }
 * ```
 */
var RootRef =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RootRef, _React$Component);

  function RootRef() {
    (0, _classCallCheck2.default)(this, RootRef);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RootRef).apply(this, arguments));
  }

  (0, _createClass2.default)(RootRef, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ref = _reactDom.default.findDOMNode(this);
      (0, _reactHelpers.setRef)(this.props.rootRef, this.ref);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var ref = _reactDom.default.findDOMNode(this);

      if (prevProps.rootRef !== this.props.rootRef || this.ref !== ref) {
        if (prevProps.rootRef !== this.props.rootRef) {
          (0, _reactHelpers.setRef)(prevProps.rootRef, null);
        }

        this.ref = ref;
        (0, _reactHelpers.setRef)(this.props.rootRef, this.ref);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.ref = null;
      (0, _reactHelpers.setRef)(this.props.rootRef, null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return RootRef;
}(_react.default.Component);

 true ? RootRef.propTypes = {
  /**
   * The wrapped element.
   */
  children: _propTypes.default.element.isRequired,

  /**
   * Provide a way to access the DOM node of the wrapped element.
   * You can provide a callback ref or a `React.createRef()` ref.
   */
  rootRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]).isRequired
} : undefined;

if (true) {
   true ? RootRef.propTypes = (0, _utils.exactProp)(RootRef.propTypes) : undefined;
}

var _default = RootRef;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Select/Select.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Select/Select.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _SelectInput = _interopRequireDefault(__webpack_require__(/*! ./SelectInput */ "./node_modules/@material-ui/core/Select/SelectInput.js"));

var _formControlState = _interopRequireDefault(__webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/FormControl/formControlState.js"));

var _withFormControlContext = _interopRequireDefault(__webpack_require__(/*! ../FormControl/withFormControlContext */ "./node_modules/@material-ui/core/FormControl/withFormControlContext.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _mergeClasses = _interopRequireDefault(__webpack_require__(/*! ../styles/mergeClasses */ "./node_modules/@material-ui/core/styles/mergeClasses.js"));

var _ArrowDropDown = _interopRequireDefault(__webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js"));

var _Input = _interopRequireDefault(__webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/Input/index.js"));

var _NativeSelect = __webpack_require__(/*! ../NativeSelect/NativeSelect */ "./node_modules/@material-ui/core/NativeSelect/NativeSelect.js");

var _NativeSelectInput = _interopRequireDefault(__webpack_require__(/*! ../NativeSelect/NativeSelectInput */ "./node_modules/@material-ui/core/NativeSelect/NativeSelectInput.js"));

// @inheritedComponent Input
// To replace with InputBase in v4
var styles = _NativeSelect.styles;
exports.styles = styles;

function Select(props) {
  var autoWidth = props.autoWidth,
      children = props.children,
      classes = props.classes,
      displayEmpty = props.displayEmpty,
      IconComponent = props.IconComponent,
      input = props.input,
      inputProps = props.inputProps,
      MenuProps = props.MenuProps,
      muiFormControl = props.muiFormControl,
      multiple = props.multiple,
      native = props.native,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      renderValue = props.renderValue,
      SelectDisplayProps = props.SelectDisplayProps,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "input", "inputProps", "MenuProps", "muiFormControl", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);
  var inputComponent = native ? _NativeSelectInput.default : _SelectInput.default;
  var fcs = (0, _formControlState.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  return _react.default.cloneElement(input, (0, _extends2.default)({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: inputComponent,
    inputProps: (0, _extends2.default)({
      children: children,
      IconComponent: IconComponent,
      variant: fcs.variant,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple: multiple
    }, native ? {} : {
      autoWidth: autoWidth,
      displayEmpty: displayEmpty,
      MenuProps: MenuProps,
      onClose: onClose,
      onOpen: onOpen,
      open: open,
      renderValue: renderValue,
      SelectDisplayProps: SelectDisplayProps
    }, inputProps, {
      classes: inputProps ? (0, _mergeClasses.default)({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select
      }) : classes
    }, input ? input.props.inputProps : {})
  }, other));
}

 true ? Select.propTypes = {
  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: _propTypes.default.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   * You can only use it when the `native` property is `false` (default).
   */
  displayEmpty: _propTypes.default.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _utils.componentPropType,

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: _propTypes.default.element,

  /**
   * Attributes applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Properties applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: _propTypes.default.object,

  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   */
  multiple: _propTypes.default.bool,

  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: _propTypes.default.bool,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes.default.func,

  /**
   * Control `select` open state.
   * You can only use it when the `native` property is `false` (default).
   */
  open: _propTypes.default.bool,

  /**
   * Render the selected value.
   * You can only use it when the `native` property is `false` (default).
   *
   * @param {*} value The `value` provided to the component.
   * @returns {ReactElement}
   */
  renderValue: _propTypes.default.func,

  /**
   * Properties applied to the clickable div element.
   */
  SelectDisplayProps: _propTypes.default.object,

  /**
   * The input value.
   * This property is required when the `native` property is `false` (default).
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object]))]),

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
Select.defaultProps = {
  autoWidth: false,
  displayEmpty: false,
  IconComponent: _ArrowDropDown.default,
  input: _react.default.createElement(_Input.default, null),
  multiple: false,
  native: false
};
Select.muiName = 'Select';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiSelect'
})((0, _withFormControlContext.default)(Select));

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Select/SelectInput.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/Select/SelectInput.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _Menu = _interopRequireDefault(__webpack_require__(/*! ../Menu/Menu */ "./node_modules/@material-ui/core/Menu/Menu.js"));

var _utils2 = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/InputBase/utils.js");

var _reactHelpers = __webpack_require__(/*! ../utils/reactHelpers */ "./node_modules/@material-ui/core/utils/reactHelpers.js");

function areEqualValues(a, b) {
  if ((0, _typeof2.default)(b) === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}
/**
 * @ignore - internal component.
 */


var SelectInput =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SelectInput, _React$Component);

  function SelectInput(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SelectInput);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectInput).call(this));
    _this.ignoreNextBlur = false;

    _this.update = function (_ref) {
      var event = _ref.event,
          open = _ref.open;

      if (_this.isOpenControlled) {
        if (open) {
          _this.props.onOpen(event);
        } else {
          _this.props.onClose(event);
        }

        return;
      }

      _this.setState({
        // Perform the layout computation outside of the render method.
        menuMinWidth: _this.props.autoWidth ? null : _this.displayRef.clientWidth,
        open: open
      });
    };

    _this.handleClick = function (event) {
      // Opening the menu is going to blur the. It will be focused back when closed.
      _this.ignoreNextBlur = true;

      _this.update({
        open: true,
        event: event
      });
    };

    _this.handleClose = function (event) {
      _this.update({
        open: false,
        event: event
      });
    };

    _this.handleItemClick = function (child) {
      return function (event) {
        if (!_this.props.multiple) {
          _this.update({
            open: false,
            event: event
          });
        }

        var _this$props = _this.props,
            onChange = _this$props.onChange,
            name = _this$props.name;

        if (onChange) {
          var value;

          if (_this.props.multiple) {
            value = Array.isArray(_this.props.value) ? (0, _toConsumableArray2.default)(_this.props.value) : [];
            var itemIndex = value.indexOf(child.props.value);

            if (itemIndex === -1) {
              value.push(child.props.value);
            } else {
              value.splice(itemIndex, 1);
            }
          } else {
            value = child.props.value;
          }

          event.persist();
          event.target = {
            value: value,
            name: name
          };
          onChange(event, child);
        }
      };
    };

    _this.handleBlur = function (event) {
      if (_this.ignoreNextBlur === true) {
        // The parent components are relying on the bubbling of the event.
        event.stopPropagation();
        _this.ignoreNextBlur = false;
        return;
      }

      if (_this.props.onBlur) {
        var _this$props2 = _this.props,
            value = _this$props2.value,
            name = _this$props2.name;
        event.persist();
        event.target = {
          value: value,
          name: name
        };

        _this.props.onBlur(event);
      }
    };

    _this.handleKeyDown = function (event) {
      if (_this.props.readOnly) {
        return;
      }

      if ([' ', 'ArrowUp', 'ArrowDown'].indexOf(event.key) !== -1) {
        event.preventDefault(); // Opening the menu is going to blur the. It will be focused back when closed.

        _this.ignoreNextBlur = true;

        _this.update({
          open: true,
          event: event
        });
      }
    };

    _this.handleDisplayRef = function (ref) {
      _this.displayRef = ref;
    };

    _this.handleInputRef = function (ref) {
      var inputRef = _this.props.inputRef;

      if (!inputRef) {
        return;
      }

      var nodeProxy = {
        node: ref,
        // By pass the native input as we expose a rich object (array).
        value: _this.props.value,
        focus: function focus() {
          _this.displayRef.focus();
        }
      };
      (0, _reactHelpers.setRef)(inputRef, nodeProxy);
    };

    _this.isOpenControlled = props.open !== undefined;
    _this.state = {
      menuMinWidth: null,
      open: false
    };
    return _this;
  }

  (0, _createClass2.default)(SelectInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isOpenControlled && this.props.open) {
        // Focus the display node so the focus is restored on this element once
        // the menu is closed.
        this.displayRef.focus(); // Rerender with the resolve `displayRef` reference.

        this.forceUpdate();
      }

      if (this.props.autoFocus) {
        this.displayRef.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _classNames;

      var _this$props3 = this.props,
          autoWidth = _this$props3.autoWidth,
          children = _this$props3.children,
          classes = _this$props3.classes,
          className = _this$props3.className,
          disabled = _this$props3.disabled,
          displayEmpty = _this$props3.displayEmpty,
          IconComponent = _this$props3.IconComponent,
          inputRef = _this$props3.inputRef,
          _this$props3$MenuProp = _this$props3.MenuProps,
          MenuProps = _this$props3$MenuProp === void 0 ? {} : _this$props3$MenuProp,
          multiple = _this$props3.multiple,
          name = _this$props3.name,
          onBlur = _this$props3.onBlur,
          onChange = _this$props3.onChange,
          onClose = _this$props3.onClose,
          onFocus = _this$props3.onFocus,
          onOpen = _this$props3.onOpen,
          openProp = _this$props3.open,
          readOnly = _this$props3.readOnly,
          renderValue = _this$props3.renderValue,
          required = _this$props3.required,
          SelectDisplayProps = _this$props3.SelectDisplayProps,
          tabIndexProp = _this$props3.tabIndex,
          _this$props3$type = _this$props3.type,
          type = _this$props3$type === void 0 ? 'hidden' : _this$props3$type,
          value = _this$props3.value,
          variant = _this$props3.variant,
          other = (0, _objectWithoutProperties2.default)(_this$props3, ["autoWidth", "children", "classes", "className", "disabled", "displayEmpty", "IconComponent", "inputRef", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "required", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);
      var open = this.isOpenControlled && this.displayRef ? openProp : this.state.open;
      delete other['aria-invalid'];
      var display;
      var displaySingle = '';
      var displayMultiple = [];
      var computeDisplay = false; // No need to display any value if the field is empty.

      if ((0, _utils2.isFilled)(this.props) || displayEmpty) {
        if (renderValue) {
          display = renderValue(value);
        } else {
          computeDisplay = true;
        }
      }

      var items = _react.default.Children.map(children, function (child) {
        if (!_react.default.isValidElement(child)) {
          return null;
        }

         true ? (0, _warning.default)(child.type !== _react.default.Fragment, ["Material-UI: the Select component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n')) : undefined;
        var selected;

        if (multiple) {
          if (!Array.isArray(value)) {
            throw new Error('Material-UI: the `value` property must be an array ' + 'when using the `Select` component with `multiple`.');
          }

          selected = value.some(function (v) {
            return areEqualValues(v, child.props.value);
          });

          if (selected && computeDisplay) {
            displayMultiple.push(child.props.children);
          }
        } else {
          selected = areEqualValues(value, child.props.value);

          if (selected && computeDisplay) {
            displaySingle = child.props.children;
          }
        }

        return _react.default.cloneElement(child, {
          onClick: _this2.handleItemClick(child),
          role: 'option',
          selected: selected,
          value: undefined,
          // The value is most likely not a valid HTML attribute.
          'data-value': child.props.value // Instead, we provide it as a data attribute.

        });
      });

      if (computeDisplay) {
        display = multiple ? displayMultiple.join(', ') : displaySingle;
      } // Avoid performing a layout computation in the render method.


      var menuMinWidth = this.state.menuMinWidth;

      if (!autoWidth && this.isOpenControlled && this.displayRef) {
        menuMinWidth = this.displayRef.clientWidth;
      }

      var tabIndex;

      if (typeof tabIndexProp !== 'undefined') {
        tabIndex = tabIndexProp;
      } else {
        tabIndex = disabled ? null : 0;
      }

      return _react.default.createElement("div", {
        className: classes.root
      }, _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(classes.select, classes.selectMenu, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.filled, variant === 'filled'), (0, _defineProperty2.default)(_classNames, classes.outlined, variant === 'outlined'), _classNames), className),
        ref: this.handleDisplayRef,
        "aria-pressed": open ? 'true' : 'false',
        tabIndex: tabIndex,
        role: "button",
        "aria-owns": open ? "menu-".concat(name || '') : undefined,
        "aria-haspopup": "true",
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur,
        onClick: disabled || readOnly ? null : this.handleClick,
        onFocus: onFocus // The id can help with end-to-end testing automation.
        ,
        id: name ? "select-".concat(name) : undefined
      }, SelectDisplayProps), display || _react.default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: '&#8203;'
        }
      })), _react.default.createElement("input", (0, _extends2.default)({
        value: Array.isArray(value) ? value.join(',') : value,
        name: name,
        ref: this.handleInputRef,
        type: type
      }, other)), _react.default.createElement(IconComponent, {
        className: classes.icon
      }), _react.default.createElement(_Menu.default, (0, _extends2.default)({
        id: "menu-".concat(name || ''),
        anchorEl: this.displayRef,
        open: open,
        onClose: this.handleClose
      }, MenuProps, {
        MenuListProps: (0, _extends2.default)({
          role: 'listbox',
          disableListWrap: true
        }, MenuProps.MenuListProps),
        PaperProps: (0, _extends2.default)({}, MenuProps.PaperProps, {
          style: (0, _extends2.default)({
            minWidth: menuMinWidth
          }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
        })
      }), items));
    }
  }]);
  return SelectInput;
}(_react.default.Component);

 true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  autoFocus: _propTypes.default.bool,

  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: _propTypes.default.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: _propTypes.default.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _utils.componentPropType,

  /**
   * Use that property to pass a ref callback to the native select element.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Properties applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: _propTypes.default.object,

  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   */
  multiple: _propTypes.default.bool,

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {object} [child] The react element that was selected.
   */
  onChange: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes.default.func,

  /**
   * Control `select` open state.
   */
  open: _propTypes.default.bool,

  /**
   * @ignore
   */
  readOnly: _propTypes.default.bool,

  /**
   * Render the selected value.
   *
   * @param {*} value The `value` provided to the component.
   * @returns {ReactElement}
   */
  renderValue: _propTypes.default.func,

  /**
   * @ignore
   */
  required: _propTypes.default.bool,

  /**
   * Properties applied to the clickable div element.
   */
  SelectDisplayProps: _propTypes.default.object,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * @ignore
   */
  type: _propTypes.default.string,

  /**
   * The input value.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.object]))]).isRequired,

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
var _default = SelectInput;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/SvgIcon/SvgIcon.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/SvgIcon/SvgIcon.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/utils/helpers.js");

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      fontSize: 24,
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
      color: theme.palette.action.active
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
      color: theme.palette.action.disabled
    },

    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
      fontSize: 'inherit'
    },

    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
      fontSize: 20
    },

    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
      fontSize: 35
    }
  };
};

exports.styles = styles;

function SvgIcon(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      Component = props.component,
      fontSize = props.fontSize,
      nativeColor = props.nativeColor,
      titleAccess = props.titleAccess,
      viewBox = props.viewBox,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "component", "fontSize", "nativeColor", "titleAccess", "viewBox"]);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'inherit'), (0, _defineProperty2.default)(_classNames, classes["fontSize".concat((0, _helpers.capitalize)(fontSize))], fontSize !== 'default'), _classNames), className),
    focusable: "false",
    viewBox: viewBox,
    color: nativeColor,
    "aria-hidden": titleAccess ? 'false' : 'true',
    role: titleAccess ? 'img' : 'presentation'
  }, other), children, titleAccess ? _react.default.createElement("title", null, titleAccess) : null);
}

 true ? SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `nativeColor` property to apply a color attribute to the SVG element.
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: _propTypes.default.oneOf(['inherit', 'default', 'small', 'large']),

  /**
   * Applies a color attribute to the SVG element.
   */
  nativeColor: _propTypes.default.string,

  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this property.
   */
  shapeRendering: _propTypes.default.string,

  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: _propTypes.default.string,

  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: _propTypes.default.string
} : undefined;
SvgIcon.defaultProps = {
  color: 'inherit',
  component: 'svg',
  fontSize: 'default',
  viewBox: '0 0 24 24'
};
SvgIcon.muiName = 'SvgIcon';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiSvgIcon'
})(SvgIcon);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/TextField/TextField.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/TextField/TextField.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Input = _interopRequireDefault(__webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/Input/index.js"));

var _FilledInput = _interopRequireDefault(__webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/FilledInput/index.js"));

var _OutlinedInput = _interopRequireDefault(__webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/OutlinedInput/index.js"));

var _InputLabel = _interopRequireDefault(__webpack_require__(/*! ../InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js"));

var _FormControl = _interopRequireDefault(__webpack_require__(/*! ../FormControl */ "./node_modules/@material-ui/core/FormControl/index.js"));

var _FormHelperText = _interopRequireDefault(__webpack_require__(/*! ../FormHelperText */ "./node_modules/@material-ui/core/FormHelperText/index.js"));

var _Select = _interopRequireDefault(__webpack_require__(/*! ../Select */ "./node_modules/@material-ui/core/Select/index.js"));

// @inheritedComponent FormControl
var variantComponent = {
  standard: _Input.default,
  filled: _FilledInput.default,
  outlined: _OutlinedInput.default
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the properties applied to the native input, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

var TextField =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TextField, _React$Component);

  function TextField(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TextField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextField).call(this, props));
    _this.labelRef = _react.default.createRef();
    return _this;
  }

  (0, _createClass2.default)(TextField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.variant === 'outlined') {
        this.labelNode = _reactDom.default.findDOMNode(this.labelRef.current);
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoComplete = _this$props.autoComplete,
          autoFocus = _this$props.autoFocus,
          children = _this$props.children,
          className = _this$props.className,
          defaultValue = _this$props.defaultValue,
          error = _this$props.error,
          FormHelperTextProps = _this$props.FormHelperTextProps,
          fullWidth = _this$props.fullWidth,
          helperText = _this$props.helperText,
          id = _this$props.id,
          InputLabelProps = _this$props.InputLabelProps,
          inputProps = _this$props.inputProps,
          InputProps = _this$props.InputProps,
          inputRef = _this$props.inputRef,
          label = _this$props.label,
          multiline = _this$props.multiline,
          name = _this$props.name,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          placeholder = _this$props.placeholder,
          required = _this$props.required,
          rows = _this$props.rows,
          rowsMax = _this$props.rowsMax,
          select = _this$props.select,
          SelectProps = _this$props.SelectProps,
          type = _this$props.type,
          value = _this$props.value,
          variant = _this$props.variant,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["autoComplete", "autoFocus", "children", "className", "defaultValue", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);
       true ? (0, _warning.default)(!select || Boolean(children), 'Material-UI: `children` must be passed when using the `TextField` component with `select`.') : undefined;
      var InputMore = {};

      if (variant === 'outlined') {
        if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
          InputMore.notched = InputLabelProps.shrink;
        }

        InputMore.labelWidth = this.labelNode && this.labelNode.offsetWidth || 0;
      }

      var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
      var InputComponent = variantComponent[variant];

      var InputElement = _react.default.createElement(InputComponent, (0, _extends2.default)({
        "aria-describedby": helperTextId,
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        defaultValue: defaultValue,
        fullWidth: fullWidth,
        multiline: multiline,
        name: name,
        rows: rows,
        rowsMax: rowsMax,
        type: type,
        value: value,
        id: id,
        inputRef: inputRef,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        placeholder: placeholder,
        inputProps: inputProps
      }, InputMore, InputProps));

      return _react.default.createElement(_FormControl.default, (0, _extends2.default)({
        className: className,
        error: error,
        fullWidth: fullWidth,
        required: required,
        variant: variant
      }, other), label && _react.default.createElement(_InputLabel.default, (0, _extends2.default)({
        htmlFor: id,
        ref: this.labelRef
      }, InputLabelProps), label), select ? _react.default.createElement(_Select.default, (0, _extends2.default)({
        "aria-describedby": helperTextId,
        value: value,
        input: InputElement
      }, SelectProps), children) : InputElement, helperText && _react.default.createElement(_FormHelperText.default, (0, _extends2.default)({
        id: helperTextId
      }, FormHelperTextProps), helperText));
    }
  }]);
  return TextField;
}(_react.default.Component);

 true ? TextField.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: _propTypes.default.string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The default value of the `Input` element.
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: _propTypes.default.bool,

  /**
   * Properties applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: _propTypes.default.object,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The helper text content.
   */
  helperText: _propTypes.default.node,

  /**
   * The id of the `input` element.
   * Use this property to make `label` and `helperText` accessible for screen readers.
   */
  id: _propTypes.default.string,

  /**
   * Properties applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps: _propTypes.default.object,

  /**
   * Properties applied to the `Input` element.
   */
  InputProps: _propTypes.default.object,

  /**
   * Attributes applied to the native `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use this property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * The label content.
   */
  label: _propTypes.default.node,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: _propTypes.default.oneOf(['none', 'dense', 'normal']),

  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: _propTypes.default.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: _propTypes.default.string,

  /**
   * If `true`, the label is displayed as required and the input will be required.
   */
  required: _propTypes.default.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: _propTypes.default.bool,

  /**
   * Properties applied to the [`Select`](/api/select/) element.
   */
  SelectProps: _propTypes.default.object,

  /**
   * Type attribute of the `Input` element. It should be a valid HTML5 input type.
   */
  type: _propTypes.default.string,

  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]))]),

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
TextField.defaultProps = {
  required: false,
  select: false,
  variant: 'standard'
};
var _default = TextField;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _pure = _interopRequireDefault(__webpack_require__(/*! recompose/pure */ "./node_modules/recompose/pure.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! ../../SvgIcon */ "./node_modules/@material-ui/core/SvgIcon/index.js"));

var _ref = _react.default.createElement("path", {
  d: "M7 10l5 5 5-5z"
});

/**
 * @ignore - internal component.
 */
var ArrowDropDown = function ArrowDropDown(props) {
  return _react.default.createElement(_SvgIcon.default, props, _ref);
};

ArrowDropDown = (0, _pure.default)(ArrowDropDown);
ArrowDropDown.muiName = 'SvgIcon';
var _default = ArrowDropDown;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/MuiThemeProvider.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/MuiThemeProvider.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MuiThemeProviderOld = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _brcast = _interopRequireDefault(__webpack_require__(/*! brcast */ "./node_modules/brcast/dist/brcast.es.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _themeListener = _interopRequireWildcard(__webpack_require__(/*! ./themeListener */ "./node_modules/@material-ui/core/styles/themeListener.js"));

/* eslint-disable no-underscore-dangle */

/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
var MuiThemeProviderOld =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MuiThemeProviderOld, _React$Component);

  // We are not using the React state in order to avoid unnecessary rerender.
  function MuiThemeProviderOld(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, MuiThemeProviderOld);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MuiThemeProviderOld).call(this)); // Get the outer theme from the context, can be null

    _this.broadcast = (0, _brcast.default)();
    _this.outerTheme = _themeListener.default.initial(context); // Propagate the theme so it can be accessed by the children

    _this.broadcast.setState(_this.mergeOuterLocalTheme(props.theme));

    return _this;
  }

  (0, _createClass2.default)(MuiThemeProviderOld, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _ref;

      var _this$props = this.props,
          disableStylesGeneration = _this$props.disableStylesGeneration,
          sheetsCache = _this$props.sheetsCache,
          sheetsManager = _this$props.sheetsManager;
      var muiThemeProviderOptions = this.context.muiThemeProviderOptions || {};

      if (disableStylesGeneration !== undefined) {
        muiThemeProviderOptions.disableStylesGeneration = disableStylesGeneration;
      }

      if (sheetsCache !== undefined) {
        muiThemeProviderOptions.sheetsCache = sheetsCache;
      }

      if (sheetsManager !== undefined) {
        muiThemeProviderOptions.sheetsManager = sheetsManager;
      }

      return _ref = {}, (0, _defineProperty2.default)(_ref, _themeListener.CHANNEL, this.broadcast), (0, _defineProperty2.default)(_ref, "muiThemeProviderOptions", muiThemeProviderOptions), _ref;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Subscribe on the outer theme, if present
      this.unsubscribeId = _themeListener.default.subscribe(this.context, function (outerTheme) {
        _this2.outerTheme = outerTheme; // Forward the parent theme update to the children

        _this2.broadcast.setState(_this2.mergeOuterLocalTheme(_this2.props.theme));
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Propagate a local theme update
      if (this.props.theme !== prevProps.theme) {
        this.broadcast.setState(this.mergeOuterLocalTheme(this.props.theme));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribeId !== null) {
        _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
      }
    } // Simple merge between the outer theme and the local theme

  }, {
    key: "mergeOuterLocalTheme",
    value: function mergeOuterLocalTheme(localTheme) {
      // To support composition of theme.
      if (typeof localTheme === 'function') {
         true ? (0, _warning.default)(this.outerTheme, ['Material-UI: you are providing a theme function property ' + 'to the MuiThemeProvider component:', '<MuiThemeProvider theme={outerTheme => outerTheme} />', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n')) : undefined;
        return localTheme(this.outerTheme);
      }

      if (!this.outerTheme) {
        return localTheme;
      }

      return (0, _extends2.default)({}, this.outerTheme, localTheme);
    }
  }, {
    key: "render",
    value: function render() {
      // TODO move the sheetsManager property to a different component.
      // warning(
      //   typeof window !== 'undefined' || this.props.sheetsManager,
      //   [
      //     'Material-UI: you need to provide a sheetsManager to the MuiThemeProvider ' +
      //       'when rendering on the server.',
      //     'If you do not, you might experience a memory leak',
      //   ].join('\n'),
      // );
      return this.props.children;
    }
  }]);
  return MuiThemeProviderOld;
}(_react.default.Component);

exports.MuiThemeProviderOld = MuiThemeProviderOld;
 true ? MuiThemeProviderOld.propTypes = {
  /**
   * You can wrap a node.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side.
   * You can significantly speed up the traversal with this property.
   */
  disableStylesGeneration: _propTypes.default.bool,

  /**
   * @ignore
   *
   * In beta.
   */
  sheetsCache: _propTypes.default.object,

  /**
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: _propTypes.default.object,

  /**
   * A theme object.
   */
  theme: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]).isRequired
} : undefined;

if (true) {
   true ? MuiThemeProviderOld.propTypes = (0, _utils.exactProp)(MuiThemeProviderOld.propTypes) : undefined;
}

MuiThemeProviderOld.childContextTypes = (0, _extends2.default)({}, _themeListener.default.contextTypes, {
  muiThemeProviderOptions: _propTypes.default.object
});
MuiThemeProviderOld.contextTypes = (0, _extends2.default)({}, _themeListener.default.contextTypes, {
  muiThemeProviderOptions: _propTypes.default.object
});
/* istanbul ignore if */

if (!_utils.ponyfillGlobal.__MUI_STYLES__) {
  _utils.ponyfillGlobal.__MUI_STYLES__ = {};
}

if (!_utils.ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider) {
  _utils.ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider = MuiThemeProviderOld;
}

var _default = _utils.ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/withStyles.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/withStyles.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sheetsManager = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/@material-ui/core/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _jss = __webpack_require__(/*! jss */ "./node_modules/jss/lib/index.js");

var _reactJssContext = _interopRequireDefault(__webpack_require__(/*! ./reactJssContext */ "./node_modules/@material-ui/core/styles/reactJssContext.js"));

var _jssPreset = _interopRequireDefault(__webpack_require__(/*! ./jssPreset */ "./node_modules/@material-ui/core/styles/jssPreset.js"));

var _mergeClasses = _interopRequireDefault(__webpack_require__(/*! ./mergeClasses */ "./node_modules/@material-ui/core/styles/mergeClasses.js"));

var _multiKeyStore = _interopRequireDefault(__webpack_require__(/*! ./multiKeyStore */ "./node_modules/@material-ui/core/styles/multiKeyStore.js"));

var _createMuiTheme = _interopRequireDefault(__webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/styles/createMuiTheme.js"));

var _themeListener = _interopRequireDefault(__webpack_require__(/*! ./themeListener */ "./node_modules/@material-ui/core/styles/themeListener.js"));

var _createGenerateClassName = _interopRequireDefault(__webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@material-ui/core/styles/createGenerateClassName.js"));

var _getStylesCreator = _interopRequireDefault(__webpack_require__(/*! ./getStylesCreator */ "./node_modules/@material-ui/core/styles/getStylesCreator.js"));

var _getThemeProps = _interopRequireDefault(__webpack_require__(/*! ./getThemeProps */ "./node_modules/@material-ui/core/styles/getThemeProps.js"));

/* eslint-disable no-underscore-dangle */
// Default JSS instance.
var jss = (0, _jss.create)((0, _jssPreset.default)()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

var generateClassName = (0, _createGenerateClassName.default)(); // Global index counter to preserve source order.
// We create the style sheet during at the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.

var indexCounter = -10e10; // Exported for test purposes

var sheetsManager = new Map(); // We use the same empty object to ref count the styles that don't need a theme object.

exports.sheetsManager = sheetsManager;
var noopTheme = {}; // In order to have self-supporting components, we rely on default theme when not provided.

var defaultTheme = (0, _createMuiTheme.default)({
  typography: {
    suppressWarning: true
  }
}); // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

var withStylesOld = function withStylesOld(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var _extends2;

    var _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        _options$flip = options.flip,
        flip = _options$flip === void 0 ? null : _options$flip,
        name = options.name,
        styleSheetOptions = (0, _objectWithoutProperties2.default)(options, ["withTheme", "flip", "name"]);
    var stylesCreator = (0, _getStylesCreator.default)(stylesOrCreator);
    var listenToTheme = stylesCreator.themingEnabled || typeof name === 'string' || withTheme;
    indexCounter += 1;
    stylesCreator.options.index = indexCounter;
     true ? (0, _warning.default)(indexCounter < 0, ['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n')) : undefined;

    var WithStyles =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithStyles, _React$Component);

      function WithStyles(props, context) {
        var _this;

        (0, _classCallCheck2.default)(this, WithStyles);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStyles).call(this, props, context));
        _this.jss = context[_reactJssContext.default.jss] || jss;
        _this.sheetsManager = sheetsManager;
        _this.unsubscribeId = null;
        var muiThemeProviderOptions = context.muiThemeProviderOptions;

        if (muiThemeProviderOptions) {
          if (muiThemeProviderOptions.sheetsManager) {
            _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
          }

          _this.sheetsCache = muiThemeProviderOptions.sheetsCache;
          _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
        } // Attach the stylesCreator to the instance of the component as in the context
        // of react-hot-loader the hooks can be executed in a different closure context:
        // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107


        _this.stylesCreatorSaved = stylesCreator;
        _this.sheetOptions = (0, _extends3.default)({
          generateClassName: generateClassName
        }, context[_reactJssContext.default.sheetOptions]); // We use || as the function call is lazy evaluated.

        _this.theme = listenToTheme ? _themeListener.default.initial(context) || defaultTheme : noopTheme;

        _this.attach(_this.theme);

        _this.cacheClasses = {
          // Cache for the finalized classes value.
          value: null,
          // Cache for the last used classes prop pointer.
          lastProp: null,
          // Cache for the last used rendered classes pointer.
          lastJSS: {}
        };
        return _this;
      }

      (0, _createClass2.default)(WithStyles, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          if (!listenToTheme) {
            return;
          }

          this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
            var oldTheme = _this2.theme;
            _this2.theme = theme;

            _this2.attach(_this2.theme); // Rerender the component so the underlying component gets the theme update.
            // By theme update we mean receiving and applying the new class names.


            _this2.setState({}, function () {
              _this2.detach(oldTheme);
            });
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          // react-hot-loader specific logic
          if (this.stylesCreatorSaved === stylesCreator || "development" === 'production') {
            return;
          }

          this.detach(this.theme);
          this.stylesCreatorSaved = stylesCreator;
          this.attach(this.theme);
          this.forceUpdate();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.detach(this.theme);

          if (this.unsubscribeId !== null) {
            _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: "getClasses",
        value: function getClasses() {
          if (this.disableStylesGeneration) {
            return this.props.classes || {};
          } // Tracks if either the rendered classes or classes prop has changed,
          // requiring the generation of a new finalized classes object.


          var generate = false;

          var sheetManager = _multiKeyStore.default.get(this.sheetsManager, this.stylesCreatorSaved, this.theme);

          if (sheetManager.sheet.classes !== this.cacheClasses.lastJSS) {
            this.cacheClasses.lastJSS = sheetManager.sheet.classes;
            generate = true;
          }

          if (this.props.classes !== this.cacheClasses.lastProp) {
            this.cacheClasses.lastProp = this.props.classes;
            generate = true;
          }

          if (generate) {
            this.cacheClasses.value = (0, _mergeClasses.default)({
              baseClasses: this.cacheClasses.lastJSS,
              newClasses: this.props.classes,
              Component: Component
            });
          }

          return this.cacheClasses.value;
        }
      }, {
        key: "attach",
        value: function attach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var stylesCreatorSaved = this.stylesCreatorSaved;

          var sheetManager = _multiKeyStore.default.get(this.sheetsManager, stylesCreatorSaved, theme);

          if (!sheetManager) {
            sheetManager = {
              refs: 0,
              sheet: null
            };

            _multiKeyStore.default.set(this.sheetsManager, stylesCreatorSaved, theme, sheetManager);
          }

          if (sheetManager.refs === 0) {
            var sheet;

            if (this.sheetsCache) {
              sheet = _multiKeyStore.default.get(this.sheetsCache, stylesCreatorSaved, theme);
            }

            if (!sheet) {
              sheet = this.createSheet(theme);
              sheet.attach();

              if (this.sheetsCache) {
                _multiKeyStore.default.set(this.sheetsCache, stylesCreatorSaved, theme, sheet);
              }
            }

            sheetManager.sheet = sheet;
            var sheetsRegistry = this.context[_reactJssContext.default.sheetsRegistry];

            if (sheetsRegistry) {
              sheetsRegistry.add(sheet);
            }
          }

          sheetManager.refs += 1;
        }
      }, {
        key: "createSheet",
        value: function createSheet(theme) {
          var styles = this.stylesCreatorSaved.create(theme, name);
          var meta = name;

          if ( true && !meta) {
            // Provide a better DX outside production.
            meta = (0, _utils.getDisplayName)(Component);
             true ? (0, _warning.default)(typeof meta === 'string', ['Material-UI: the component displayName is invalid. It needs to be a string.', "Please fix the following component: ".concat(Component, ".")].join('\n')) : undefined;
          }

          var sheet = this.jss.createStyleSheet(styles, (0, _extends3.default)({
            meta: meta,
            classNamePrefix: meta,
            flip: typeof flip === 'boolean' ? flip : theme.direction === 'rtl',
            link: false
          }, this.sheetOptions, this.stylesCreatorSaved.options, {
            name: name || Component.displayName
          }, styleSheetOptions));
          return sheet;
        }
      }, {
        key: "detach",
        value: function detach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var sheetManager = _multiKeyStore.default.get(this.sheetsManager, this.stylesCreatorSaved, theme);

          sheetManager.refs -= 1;

          if (sheetManager.refs === 0) {
            _multiKeyStore.default.delete(this.sheetsManager, this.stylesCreatorSaved, theme);

            this.jss.removeStyleSheet(sheetManager.sheet);
            var sheetsRegistry = this.context[_reactJssContext.default.sheetsRegistry];

            if (sheetsRegistry) {
              sheetsRegistry.remove(sheetManager.sheet);
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              classes = _this$props.classes,
              innerRef = _this$props.innerRef,
              other = (0, _objectWithoutProperties2.default)(_this$props, ["classes", "innerRef"]);
          var more = (0, _getThemeProps.default)({
            theme: this.theme,
            name: name,
            props: other
          }); // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order Component.

          if (withTheme && !more.theme) {
            more.theme = this.theme;
          }

          return _react.default.createElement(Component, (0, _extends3.default)({}, more, {
            classes: this.getClasses(),
            ref: innerRef
          }));
        }
      }]);
      return WithStyles;
    }(_react.default.Component);

     true ? WithStyles.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       */
      classes: _propTypes.default.object,

      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
    } : undefined;
    WithStyles.contextTypes = (0, _extends3.default)((_extends2 = {
      muiThemeProviderOptions: _propTypes.default.object
    }, (0, _defineProperty2.default)(_extends2, _reactJssContext.default.jss, _propTypes.default.object), (0, _defineProperty2.default)(_extends2, _reactJssContext.default.sheetOptions, _propTypes.default.object), (0, _defineProperty2.default)(_extends2, _reactJssContext.default.sheetsRegistry, _propTypes.default.object), _extends2), listenToTheme ? _themeListener.default.contextTypes : {});

    if (true) {
      WithStyles.displayName = "WithStyles(".concat((0, _utils.getDisplayName)(Component), ")");
    }

    (0, _hoistNonReactStatics.default)(WithStyles, Component);

    if (true) {
      // Exposed for test purposes.
      WithStyles.Naked = Component;
      WithStyles.options = options;
    }

    return WithStyles;
  };
};
/* istanbul ignore if */


if (!_utils.ponyfillGlobal.__MUI_STYLES__) {
  _utils.ponyfillGlobal.__MUI_STYLES__ = {};
}

if (!_utils.ponyfillGlobal.__MUI_STYLES__.withStyles) {
  _utils.ponyfillGlobal.__MUI_STYLES__.withStyles = withStylesOld;
}

var _default = function _default(styles, options) {
  return _utils.ponyfillGlobal.__MUI_STYLES__.withStyles(styles, (0, _extends3.default)({
    defaultTheme: defaultTheme
  }, options));
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/withTheme.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/withTheme.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/@material-ui/core/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _createMuiTheme = _interopRequireDefault(__webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/styles/createMuiTheme.js"));

var _themeListener = _interopRequireDefault(__webpack_require__(/*! ./themeListener */ "./node_modules/@material-ui/core/styles/themeListener.js"));

/* eslint-disable no-underscore-dangle */
var defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _createMuiTheme.default)({
    typography: {
      suppressWarning: true
    }
  });
  return defaultTheme;
} // Provide the theme object as a property to the input component.


var withThemeOld = function withThemeOld() {
  return function (Component) {
    var WithTheme =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithTheme, _React$Component);

      function WithTheme(props, context) {
        var _this;

        (0, _classCallCheck2.default)(this, WithTheme);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithTheme).call(this));
        _this.state = {
          // We use || as the function call is lazy evaluated.
          theme: _themeListener.default.initial(context) || getDefaultTheme()
        };
        return _this;
      }

      (0, _createClass2.default)(WithTheme, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
            _this2.setState({
              theme: theme
            });
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.unsubscribeId !== null) {
            _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              innerRef = _this$props.innerRef,
              other = (0, _objectWithoutProperties2.default)(_this$props, ["innerRef"]);
          return _react.default.createElement(Component, (0, _extends2.default)({
            theme: this.state.theme,
            ref: innerRef
          }, other));
        }
      }]);
      return WithTheme;
    }(_react.default.Component);

     true ? WithTheme.propTypes = {
      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
    } : undefined;
    WithTheme.contextTypes = _themeListener.default.contextTypes;

    if (true) {
      WithTheme.displayName = "WithTheme(".concat((0, _utils.getDisplayName)(Component), ")");
    }

    (0, _hoistNonReactStatics.default)(WithTheme, Component);

    if (true) {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };
};
/* istanbul ignore if */


if (!_utils.ponyfillGlobal.__MUI_STYLES__) {
  _utils.ponyfillGlobal.__MUI_STYLES__ = {};
}

if (!_utils.ponyfillGlobal.__MUI_STYLES__.withTheme) {
  _utils.ponyfillGlobal.__MUI_STYLES__.withTheme = withThemeOld;
}

var _default = _utils.ponyfillGlobal.__MUI_STYLES__.withTheme;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/reactHelpers.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/utils/reactHelpers.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneElementWithClassName = cloneElementWithClassName;
exports.cloneChildrenWithClassName = cloneChildrenWithClassName;
exports.isMuiElement = isMuiElement;
exports.setRef = setRef;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function cloneElementWithClassName(child, className) {
  return _react.default.cloneElement(child, {
    className: (0, _classnames.default)(child.props.className, className)
  });
}

function cloneChildrenWithClassName(children, className) {
  return _react.default.Children.map(children, function (child) {
    return _react.default.isValidElement(child) && cloneElementWithClassName(child, className);
  });
}

function isMuiElement(element, muiNames) {
  return _react.default.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ "./node_modules/next-server/dist/lib/head-manager-context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/head-manager-context.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next-server/dist/lib/head.js":
/*!***************************************************!*\
  !*** ./node_modules/next-server/dist/lib/head.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next-server/dist/lib/side-effect.js"));

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next-server/dist/lib/head-manager-context.js");

function defaultHead() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next-head';
  return [react_1.default.createElement("meta", {
    key: "charSet",
    charSet: "utf-8",
    className: className
  })];
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === "string" || typeof child === "number") {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ["name", "httpEquiv", "charSet", "itemProp"];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new _set.default();
  var tags = new _set.default();
  var metaTypes = new _set.default();
  var metaCategories = {};
  return function (h) {
    if (h.key && typeof h.key !== 'number' && h.key.indexOf(".$") === 0) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
      return true;
    }

    switch (h.type) {
      case "title":
      case "base":
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;

      case "meta":
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === "charSet") {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _set.default();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }

        break;
    }

    return true;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead('')).filter(unique()).reverse().map(function (c, i) {
    var className = (c.props && c.props.className ? c.props.className + " " : "") + "next-head";
    var key = c.key || i;
    return react_1.default.cloneElement(c, {
      key: key,
      className: className
    });
  });
}

var Effect = side_effect_1.default();

function Head(_ref) {
  var children = _ref.children;
  return react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
    return react_1.default.createElement(Effect, {
      reduceComponentsToState: reduceComponents,
      handleStateChange: updateHead
    }, children);
  });
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/side-effect.js":
/*!**********************************************************!*\
  !*** ./node_modules/next-server/dist/lib/side-effect.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");

var isServer = typeof window === 'undefined';

function withSideEffect() {
  var mountedInstances = new _set.default();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState((0, _toConsumableArray2.default)(mountedInstances));

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  var SideEffect =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(SideEffect, _react_1$Component);
    (0, _createClass2.default)(SideEffect, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function SideEffect(props) {
      var _this;

      (0, _classCallCheck2.default)(this, SideEffect);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SideEffect).call(this, props));

      if (isServer) {
        mountedInstances.add((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
        emitChange((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
      }

      return _this;
    }

    (0, _createClass2.default)(SideEffect, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances.delete(this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);
    return SideEffect;
  }(react_1.Component);

  return SideEffect;
}

exports.default = withSideEffect;

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

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");

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

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");

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

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");

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

/***/ "./node_modules/react-event-listener/dist/react-event-listener.cjs.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-event-listener/dist/react-event-listener.cjs.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _classCallCheck = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _typeof = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _objectWithoutProperties = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));
var _extends = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));
var React = _interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

function defineProperty(object, property, attr) {
  return Object.defineProperty(object, property, attr);
} // Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js


var passiveOption = function () {
  var cache = null;
  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (err) {//
    }

    cache = supportsPassiveOption;
    return supportsPassiveOption;
  }();
}();

var defaultEventOptions = {
  capture: false,
  passive: false
};

function mergeDefaultEventOptions(options) {
  return _extends({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function off(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = _objectWithoutProperties(props, ["children", "target"]);

  Object.keys(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];

    var type = _typeof(prop);

    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({
        capture: capture
      }));
    }
  });
}

function withOptions(handler, options) {
   true ? warning(options, 'react-event-listener: should be specified options in withOptions.') : undefined;
  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(EventListener, _React$PureComponent);

  function EventListener() {
    _classCallCheck(this, EventListener);

    return _possibleConstructorReturn(this, _getPrototypeOf(EventListener).apply(this, arguments));
  }

  _createClass(EventListener, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.applyListeners(on);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.applyListeners(off, prevProps);
      this.applyListeners(on);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.applyListeners(off);
    }
  }, {
    key: "applyListeners",
    value: function applyListeners(onOrOff) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
      var target = props.target;

      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children || null;
    }
  }]);

  return EventListener;
}(React.PureComponent);

EventListener.propTypes =  true ? {
  /**
   * You can provide a single child too.
   */
  children: PropTypes.node,

  /**
   * The DOM target to listen to.
   */
  target: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
} : undefined;

exports.withOptions = withOptions;
exports.default = EventListener;


/***/ }),

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/components/OutboundLink.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutboundLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?d235");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink =
/*#__PURE__*/
function (_Component) {
  _inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OutboundLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        });
      } else {
        OutboundLink.trackLink(eventMeta, function () {});
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          oldProps = _objectWithoutProperties(_this$props2, ["to"]);

      var props = _objectSpread({}, oldProps, {
        href: href,
        onClick: this.handleClick
      });

      if (this.props.target === NEWTAB) {
        props.rel = 'noopener noreferrer';
      }

      delete props.eventLabel;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('a', props);
    }
  }]);

  return OutboundLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(OutboundLink, "trackLink", function () {
  Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('ga tracking not enabled');
});

_defineProperty(OutboundLink, "propTypes", {
  eventLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

_defineProperty(OutboundLink, "defaultProps", {
  target: null,
  to: null,
  onClick: null
});



/***/ }),

/***/ "./node_modules/react-ga/dist/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/index.js ***!
  \*************************************************/
/*! exports provided: initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, OutboundLink, testModeAPI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundLink", function() { return OutboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return testModeAPI; });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/format */ "./node_modules/react-ga/dist/esm/utils/format.js");
/* harmony import */ var _utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/removeLeadingSlash */ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js");
/* harmony import */ var _utils_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/* harmony import */ var _utils_loadGA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/loadGA */ "./node_modules/react-ga/dist/esm/utils/loadGA.js");
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
/* harmony import */ var _utils_console_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/console/log */ "./node_modules/react-ga/dist/esm/utils/console/log.js");
/* harmony import */ var _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/testModeAPI */ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js");
/* harmony import */ var _components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/OutboundLink */ "./node_modules/react-ga/dist/esm/components/OutboundLink.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */








var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var internalGa = function internalGa() {
  var _window;

  if (_testMode) return _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"].ga.apply(_utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"], arguments);
  if (typeof window === 'undefined') return false;
  if (!window.ga) return Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return Object(_utils_format__WEBPACK_IMPORTED_MODULE_0__["default"])(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof internalGa === 'function') {
    if (typeof command !== 'string') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }
  }

  if (options && options.gaOptions) {
    internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (typeof window === 'undefined') {
      return false;
    }

    if (!options || options.standardImplementation !== true) Object(_utils_loadGA__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (_typeof(config) !== 'object') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    internalGa.apply(void 0, args);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'arguments\');');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`fieldsObject` is required in .set()');
    return;
  }

  if (_typeof(fieldsObject) !== 'object') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'set\', fieldsObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', fieldObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path is required in .pageview()');
    return;
  }

  var path = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawPath);

  if (path === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', _objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = Object(_utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawModalName));

  if (modalName === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = _objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   */
  require: function require(rawName, options) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` is required in .require()');
        return;
      }

      var name = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawName);

      if (name === '') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` cannot be an empty string in .require()');
        return;
      } // Optional Fields


      if (options) {
        if (_typeof(options) !== 'object') {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Empty `options` given to .require()');
        }

        ga('require', name, options);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga('require', name);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"].origTrackLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"].trackLink;
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"].trackLink = outboundLink;
var OutboundLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"];
var testModeAPI = _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: event,
  exception: exception,
  plugin: plugin,
  outboundLink: outboundLink,
  OutboundLink: OutboundLink,
  testModeAPI: _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/log.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
function log(s) {
  console.info('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/warn.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warn; });
function warn(s) {
  console.warn('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/format.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var _mightBeEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mightBeEmail */ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js");
/* harmony import */ var _toTitleCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toTitleCase */ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js");
/* harmony import */ var _console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");



var redacted = 'REDACTED (Potential Email Address)';
function format(s, titleCase) {
  if (Object(_mightBeEmail__WEBPACK_IMPORTED_MODULE_0__["default"])(s)) {
    Object(_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return Object(_toTitleCase__WEBPACK_IMPORTED_MODULE_1__["default"])(s);
  }

  return s;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/loadGA.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  } // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */


  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */

});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/mightBeEmail.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mightBeEmail; });
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return /[^@]+@[^@]+/.test(s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeLeadingSlash; });
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/testModeAPI.js ***!
  \*************************************************************/
/*! exports provided: gaCalls, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaCalls", function() { return gaCalls; });
var gaCalls = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push(args.concat());
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/toTitleCase.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toTitleCase; });
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return Object(_trim__WEBPACK_IMPORTED_MODULE_0__["default"])(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
/*!******************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/trim.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trim; });
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}

/***/ }),

/***/ "./node_modules/react-pose/dist/react-pose.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-pose/dist/react-pose.es.js ***!
  \*******************************************************/
/*! exports provided: default, Transition, PoseGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoseGroup", function() { return PoseGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-pose/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popmotion_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion-pose */ "./node_modules/popmotion-pose/dist/popmotion-pose.es.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");






var hasChanged = function (prev, next) {
    if (prev === next)
        return false;
    var prevIsArray = Array.isArray(prev);
    var nextIsArray = Array.isArray(next);
    if (prevIsArray !== nextIsArray || (!prevIsArray && !nextIsArray)) {
        return true;
    }
    else if (prevIsArray && nextIsArray) {
        var numPrev = prev.length;
        var numNext = next.length;
        if (numPrev !== numNext)
            return true;
        for (var i = 0; i < numPrev; i++) {
            if (prev[i] !== next[i])
                return true;
        }
    }
    return false;
};

var pickAssign = function (shouldPick, sources) {
    return sources.reduce(function (picked, source) {
        for (var key in source) {
            if (shouldPick(key)) {
                picked[key] = source[key];
            }
        }
        return picked;
    }, {});
};

var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({}), PoseParentConsumer = _a.Consumer, PoseParentProvider = _a.Provider;
var calcPopFromFlowStyle = function (el) {
    var offsetTop = el.offsetTop, offsetLeft = el.offsetLeft, offsetWidth = el.offsetWidth, offsetHeight = el.offsetHeight;
    return {
        position: 'absolute',
        top: offsetTop,
        left: offsetLeft,
        width: offsetWidth,
        height: offsetHeight
    };
};
var hasPose = function (pose, key) {
    return Array.isArray(pose) ? pose.indexOf(key) !== -1 : pose === key;
};
var objectToMap = function (obj) {
    return Object.keys(obj).reduce(function (map, key) {
        map.set(key, { raw: obj[key] });
        return map;
    }, new Map());
};
var testAlwaysTrue = function () { return true; };
var filterProps = function (_a) {
    var elementType = _a.elementType, poseConfig = _a.poseConfig, onValueChange = _a.onValueChange, innerRef = _a.innerRef, _pose = _a._pose, pose = _a.pose, initialPose = _a.initialPose, poseKey = _a.poseKey, onPoseComplete = _a.onPoseComplete, getParentPoseConfig = _a.getParentPoseConfig, registerChild = _a.registerChild, onUnmount = _a.onUnmount, getInitialPoseFromParent = _a.getInitialPoseFromParent, popFromFlow = _a.popFromFlow, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["elementType", "poseConfig", "onValueChange", "innerRef", "_pose", "pose", "initialPose", "poseKey", "onPoseComplete", "getParentPoseConfig", "registerChild", "onUnmount", "getInitialPoseFromParent", "popFromFlow", "values", "parentValues", "onDragStart", "onDragEnd", "onPressStart", "onPressEnd"]);
    return props;
};
var PoseElement = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PoseElement, _super);
    function PoseElement(props) {
        var _this = _super.call(this, props) || this;
        _this.children = new Set();
        _this.childrenHandlers = {
            registerChild: function (props) {
                _this.children.add(props);
                if (_this.poser)
                    _this.flushChildren();
            },
            onUnmount: function (child) { return _this.poser.removeChild(child); },
            getParentPoseConfig: function () { return _this.poseConfig; },
            getInitialPoseFromParent: function () { return _this.getInitialPose(); }
        };
        _this.setRef = function (ref) {
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(ref === null || (ref instanceof Element && _this.ref === undefined), 'ref must be provided to the same DOM component for the entire lifecycle of a posed component.');
            _this.ref = ref;
            var innerRef = _this.props.innerRef;
            if (!innerRef)
                return;
            if (typeof innerRef === 'function') {
                innerRef(ref);
            }
            else {
                innerRef.current = ref;
            }
        };
        _this.shouldForwardProp =
            typeof _this.props.elementType === 'string' ? _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_3__["default"] : testAlwaysTrue;
        var poseConfig = _this.props.poseConfig;
        _this.poseConfig =
            typeof poseConfig === 'function'
                ? poseConfig(filterProps(props))
                : poseConfig;
        return _this;
    }
    PoseElement.prototype.getInitialPose = function () {
        var _a = this.props, getInitialPoseFromParent = _a.getInitialPoseFromParent, pose = _a.pose, _pose = _a._pose, initialPose = _a.initialPose;
        if (initialPose) {
            return initialPose;
        }
        else {
            var parentPose = getInitialPoseFromParent && getInitialPoseFromParent();
            var initialPoses = (Array.isArray(parentPose)
                ? parentPose
                : [parentPose])
                .concat(pose, _pose)
                .filter(Boolean);
            return initialPoses.length > 0 ? initialPoses : undefined;
        }
    };
    PoseElement.prototype.getFirstPose = function () {
        var _a = this.props, initialPose = _a.initialPose, pose = _a.pose, _pose = _a._pose;
        if (!initialPose)
            return;
        var firstPose = (Array.isArray(pose) ? pose : [pose])
            .concat(_pose)
            .filter(Boolean);
        return firstPose.length === 1 ? firstPose[0] : firstPose;
    };
    PoseElement.prototype.getSetProps = function () {
        var props = filterProps(this.props);
        if (this.props.popFromFlow && this.ref && this.ref instanceof HTMLElement) {
            if (!this.popStyle) {
                props.style = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props.style, calcPopFromFlowStyle(this.ref));
                this.popStyle = props.style;
            }
            else {
                props.style = this.popStyle;
            }
        }
        else {
            this.popStyle = null;
        }
        return props;
    };
    PoseElement.prototype.componentDidMount = function () {
        var _this = this;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(this.ref instanceof Element, "No valid DOM ref found. If you're converting an existing component via posed(Component), you must ensure you're passing the ref to the host DOM node via the React.forwardRef function.");
        var _a = this.props, onValueChange = _a.onValueChange, registerChild = _a.registerChild, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd;
        var config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.poseConfig, { initialPose: this.getInitialPose(), values: values || this.poseConfig.values, parentValues: parentValues ? objectToMap(parentValues) : undefined, props: this.getSetProps(), onDragStart: onDragStart,
            onDragEnd: onDragEnd,
            onPressStart: onPressStart,
            onPressEnd: onPressEnd, onChange: onValueChange });
        if (!registerChild) {
            this.initPoser(Object(popmotion_pose__WEBPACK_IMPORTED_MODULE_2__["default"])(this.ref, config));
        }
        else {
            registerChild({
                element: this.ref,
                poseConfig: config,
                onRegistered: function (poser) { return _this.initPoser(poser); }
            });
        }
    };
    PoseElement.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props, pose = _a.pose, _pose = _a._pose;
        if (hasPose(pose, 'flip') || hasPose(_pose, 'flip'))
            this.poser.measure();
        return null;
    };
    PoseElement.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, pose = _a.pose, _pose = _a._pose, poseKey = _a.poseKey;
        this.poser.setProps(this.getSetProps());
        if (poseKey !== prevProps.poseKey ||
            hasChanged(prevProps.pose, pose) ||
            pose === 'flip') {
            this.setPose(pose);
        }
        if (_pose !== prevProps._pose || _pose === 'flip')
            this.setPose(_pose);
    };
    PoseElement.prototype.componentWillUnmount = function () {
        if (!this.poser)
            return;
        var onUnmount = this.props.onUnmount;
        if (onUnmount)
            onUnmount(this.poser);
        this.poser.destroy();
    };
    PoseElement.prototype.initPoser = function (poser) {
        this.poser = poser;
        this.flushChildren();
        var firstPose = this.getFirstPose();
        if (firstPose)
            this.setPose(firstPose);
    };
    PoseElement.prototype.setPose = function (pose) {
        var _this = this;
        var onPoseComplete = this.props.onPoseComplete;
        var poseList = Array.isArray(pose) ? pose : [pose];
        Promise.all(poseList.map(function (key) { return key && _this.poser.set(key); })).then(function () { return onPoseComplete && onPoseComplete(pose); });
    };
    PoseElement.prototype.flushChildren = function () {
        var _this = this;
        this.children.forEach(function (_a) {
            var element = _a.element, poseConfig = _a.poseConfig, onRegistered = _a.onRegistered;
            return onRegistered(_this.poser.addChild(element, poseConfig));
        });
        this.children.clear();
    };
    PoseElement.prototype.render = function () {
        var elementType = this.props.elementType;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseParentProvider, { value: this.childrenHandlers }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementType, pickAssign(this.shouldForwardProp, [
            this.getSetProps(),
            { ref: this.setRef }
        ]))));
    };
    return PoseElement;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));

var supportedElements = [
    'a',
    'article',
    'aside',
    'audio',
    'b',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dialog',
    'div',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'i',
    'iframe',
    'img',
    'input',
    'label',
    'legend',
    'li',
    'nav',
    'object',
    'ol',
    'option',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'section',
    'select',
    'span',
    'strong',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'ul',
    'video',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
];

var componentCache = new Map();
var createComponentFactory = function (key) {
    var componentFactory = function (poseConfig) {
        if (poseConfig === void 0) { poseConfig = {}; }
        return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (_a, ref) {
            var _b = _a.withParent, withParent = _b === void 0 ? true : _b, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["withParent"]);
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(props.innerRef === undefined, 'innerRef is deprecated. Please use ref instead.');
            return !withParent || props.parentValues ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseElement, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ poseConfig: poseConfig, innerRef: ref, elementType: key }, props))) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseParentConsumer, null, function (parentCtx) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseElement, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ poseConfig: poseConfig, elementType: key, innerRef: ref }, props, parentCtx))); }));
        });
    };
    componentCache.set(key, componentFactory);
    return componentFactory;
};
var getComponentFactory = function (key) {
    return componentCache.has(key)
        ? componentCache.get(key)
        : createComponentFactory(key);
};
var posed = (function (component) {
    return getComponentFactory(component);
});
supportedElements.reduce(function (acc, key) {
    acc[key] = createComponentFactory(key);
    return acc;
}, posed);

var getKey = function (child) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(child && child.key !== null, 'Every child of Transition must be given a unique key');
    var childKey = typeof child.key === 'number' ? child.key.toString() : child.key;
    return childKey.replace('.$', '');
};
var prependProps = function (element, props) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(element.type, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: element.key, ref: element.ref }, props, element.props));
};
var handleTransition = function (_a, _b) {
    var displayedChildren = _b.displayedChildren, finishedLeaving = _b.finishedLeaving, hasInitialized = _b.hasInitialized, indexedChildren = _b.indexedChildren, scheduleChildRemoval = _b.scheduleChildRemoval;
    var incomingChildren = _a.children, preEnterPose = _a.preEnterPose, enterPose = _a.enterPose, exitPose = _a.exitPose, animateOnMount = _a.animateOnMount, enterAfterExit = _a.enterAfterExit, flipMove = _a.flipMove, onRest = _a.onRest, propsForChildren = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["children", "preEnterPose", "enterPose", "exitPose", "animateOnMount", "enterAfterExit", "flipMove", "onRest"]);
    var targetChildren = makeChildList(incomingChildren);
    var nextState = {
        displayedChildren: []
    };
    if (true) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(!propsForChildren.onPoseComplete, "<Transition/> (or <PoseGroup/>) doesn't accept onPoseComplete prop.");
    }
    var prevKeys = displayedChildren.map(getKey);
    var nextKeys = targetChildren.map(getKey);
    var hasPropsForChildren = Object.keys(propsForChildren).length !== 0;
    var entering = new Set(nextKeys.filter(function (key) { return finishedLeaving.hasOwnProperty(key) || prevKeys.indexOf(key) === -1; }));
    entering.forEach(function (key) { return delete finishedLeaving[key]; });
    var leaving = [];
    var newlyLeaving = {};
    prevKeys.forEach(function (key) {
        if (entering.has(key)) {
            return;
        }
        var isLeaving = finishedLeaving.hasOwnProperty(key);
        if (!isLeaving && nextKeys.indexOf(key) !== -1) {
            return;
        }
        leaving.push(key);
        if (!isLeaving) {
            finishedLeaving[key] = false;
            newlyLeaving[key] = true;
        }
    });
    var moving = new Set(prevKeys.filter(function (key, i) {
        return !entering.has(key) || leaving.indexOf(key) === -1;
    }));
    targetChildren.forEach(function (child) {
        var newChildProps = {};
        if (entering.has(child.key)) {
            if (hasInitialized || animateOnMount) {
                newChildProps.initialPose = preEnterPose;
            }
            newChildProps._pose = enterPose;
        }
        else if (moving.has(child.key) && flipMove) {
            newChildProps._pose = [enterPose, 'flip'];
        }
        else {
            newChildProps._pose = enterPose;
        }
        var newChild = Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child, newChildProps);
        indexedChildren[child.key] = newChild;
        nextState.displayedChildren.push(hasPropsForChildren ? prependProps(newChild, propsForChildren) : newChild);
    });
    leaving.forEach(function (key) {
        var child = indexedChildren[key];
        var newChild = newlyLeaving[key]
            ? Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child, {
                _pose: exitPose,
                onPoseComplete: function (pose) {
                    scheduleChildRemoval(key);
                    var onPoseComplete = child.props.onPoseComplete;
                    if (onPoseComplete)
                        onPoseComplete(pose);
                },
                popFromFlow: flipMove
            })
            : child;
        var insertionIndex = prevKeys.indexOf(key);
        indexedChildren[child.key] = newChild;
        nextState.displayedChildren.splice(insertionIndex, 0, hasPropsForChildren ? prependProps(newChild, propsForChildren) : newChild);
    });
    return nextState;
};
var handleChildrenTransitions = (function (props, state) {
    var newState = handleTransition(props, state);
    newState.hasInitialized = true;
    return newState;
});
var makeChildList = function (children) {
    var list = [];
    react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(children, function (child) { return child && list.push(child); });
    return list;
};

var Transition = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Transition, _super);
    function Transition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            displayedChildren: [],
            finishedLeaving: {},
            hasInitialized: false,
            indexedChildren: {},
            scheduleChildRemoval: function (key) { return _this.removeChild(key); }
        };
        return _this;
    }
    Transition.prototype.removeChild = function (key) {
        var _a = this.state, displayedChildren = _a.displayedChildren, finishedLeaving = _a.finishedLeaving;
        var _b = this.props, enterAfterExit = _b.enterAfterExit, onRest = _b.onRest;
        if (!finishedLeaving.hasOwnProperty(key))
            return;
        finishedLeaving[key] = true;
        if (!Object.keys(finishedLeaving).every(function (leavingKey) { return finishedLeaving[leavingKey]; })) {
            return;
        }
        var targetChildren = displayedChildren.filter(function (child) { return !finishedLeaving.hasOwnProperty(child.key); });
        var newState = enterAfterExit
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ finishedLeaving: {} }, handleChildrenTransitions(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { enterAfterExit: false }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state, { displayedChildren: targetChildren }))) : {
            finishedLeaving: {},
            displayedChildren: targetChildren
        };
        this.setState(newState, onRest);
    };
    Transition.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.state !== nextState;
    };
    Transition.prototype.render = function () {
        return this.state.displayedChildren;
    };
    Transition.defaultProps = {
        flipMove: false,
        enterAfterExit: false,
        preEnterPose: 'exit',
        enterPose: 'enter',
        exitPose: 'exit'
    };
    Transition.getDerivedStateFromProps = handleChildrenTransitions;
    return Transition;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var PoseGroup = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PoseGroup, _super);
    function PoseGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PoseGroup.prototype.render = function () {
        return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Transition, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props));
    };
    PoseGroup.defaultProps = {
        flipMove: true
    };
    return PoseGroup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (posed);



/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Button.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Button.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Element.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(/*! ../mixins/scroll-element */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/react-scroll/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Link.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/Helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");
var scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");
var defaultScroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/react-scroll/node_modules/prop-types/index.js");
var scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (this.props.name !== nextProps.name) {
            this.registerElems(nextProps.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/react-scroll/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
          this.registerElems(nextProps.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-link.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/react-scroll/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (y) {

      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var to = _this2.props.to;
      var element = null;
      var elemTopBound = 0;
      var elemBottomBound = 0;
      var containerTop = 0;

      if (scrollSpyContainer.getBoundingClientRect) {
        var containerCords = scrollSpyContainer.getBoundingClientRect();
        containerTop = containerCords.top;
      }

      if (!element || _this2.props.isDynamic) {
        element = scroller.get(to);
        if (!element) {
          return;
        }

        var cords = element.getBoundingClientRect();
        elemTopBound = cords.top - containerTop + y;
        elemBottomBound = elemTopBound + cords.height;
      }

      var offsetY = y - _this2.props.offset;
      var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
      var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          _scrollHash2.default.changeHash();
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    var pt =  true ? _PropTypes.timeoutsShape : undefined;;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react/index.js":
false,

/***/ "./node_modules/react/index.js?d235":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_b27d519beaee36114eaf ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_b27d519beaee36114eaf */ "dll-reference dll_b27d519beaee36114eaf"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/react/index.js?f399":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5d2e8a47bb91086adeaa ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d2e8a47bb91086adeaa */ "dll-reference dll_5d2e8a47bb91086adeaa"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/recompose/shouldUpdate.js":
/*!************************************************!*\
  !*** ./node_modules/recompose/shouldUpdate.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");

var _setDisplayName = _interopRequireDefault(__webpack_require__(/*! ./setDisplayName */ "./node_modules/recompose/setDisplayName.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__(/*! ./wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js"));

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var ShouldUpdate =
    /*#__PURE__*/
    function (_Component) {
      (0, _inheritsLoose2.default)(ShouldUpdate, _Component);

      function ShouldUpdate() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = ShouldUpdate.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      _proto.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(_react.Component);

    if (true) {
      return (0, _setDisplayName.default)((0, _wrapDisplayName.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }

    return ShouldUpdate;
  };
};

var _default = shouldUpdate;
exports.default = _default;

/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.es.js ***!
  \*********************************************************************/
/*! exports provided: css, keyframes, injectGlobal, ThemeProvider, withTheme, ServerStyleSheet, StyleSheetManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return wrapWithTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_plain_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/stylis.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?f399");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/styled-components/node_modules/hoist-non-react-statics/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);






/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate$2(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

var hyphenate_1 = hyphenate$2;

var hyphenate = hyphenate_1;

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var hyphenateStyleName_1 = hyphenateStyleName;

//      
var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
      return ruleSet;
    }
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) {
      return [].concat(ruleSet, flatten(chunk, executionContext));
    }

    /* Handle other components */
    if (chunk.hasOwnProperty('styledComponentId')) {
      // $FlowFixMe not sure how to make this pass
      return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
    }

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    return ruleSet.concat(
    // $FlowFixMe have to add %checks somehow to isPlainObject
    is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

//      
var stylis = new stylis__WEBPACK_IMPORTED_MODULE_1___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: true
});

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  return stylis(prefix || !selector ? '' : selector, cssStr);
};

//      
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var charsLength = chars.length;

/* Some high number, usually 9-digit base-10. Map it to base-😎 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = chars[x % charsLength] + name;
  }

  return chars[x % charsLength] + name;
};

//      


var interleave = (function (strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
});

//      
var css = (function (strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return flatten(interleave(strings, interpolations));
});

//      
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s+(\S+)\s+\*\//gm;

var extractCompsFromCSS = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

//      
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
                                     return  true ? __webpack_require__.nc : undefined;
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

//      
/* eslint-disable no-underscore-dangle */
/*
 * Browser Style Sheet with Rehydration
 *
 * <style data-styled-components="x y z"
 *        data-styled-components-is-local="true">
 *   /· sc-component-id: a ·/
 *   .sc-a { ... }
 *   .x { ... }
 *   /· sc-component-id: b ·/
 *   .sc-b { ... }
 *   .y { ... }
 *   .z { ... }
 * </style>
 *
 * Note: replace · with * in the above snippet.
 * */
var COMPONENTS_PER_TAG = 40;

var BrowserTag = function () {
  function BrowserTag(el, isLocal) {
    var existingSource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    classCallCheck(this, BrowserTag);

    this.el = el;
    this.isLocal = isLocal;
    this.ready = false;

    var extractedComps = extractCompsFromCSS(existingSource);

    this.size = extractedComps.length;
    this.components = extractedComps.reduce(function (acc, obj) {
      acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
      return acc;
    }, {});
  }

  BrowserTag.prototype.isFull = function isFull() {
    return this.size >= COMPONENTS_PER_TAG;
  };

  BrowserTag.prototype.addComponent = function addComponent(componentId) {
    if (!this.ready) this.replaceElement();
    if ( true && this.components[componentId]) {
      throw new Error('Trying to add Component \'' + componentId + '\' twice!');
    }

    var comp = { componentId: componentId, textNode: document.createTextNode('') };
    this.el.appendChild(comp.textNode);

    this.size += 1;
    this.components[componentId] = comp;
  };

  BrowserTag.prototype.inject = function inject(componentId, css, name) {
    if (!this.ready) this.replaceElement();
    var comp = this.components[componentId];

    if ( true && !comp) {
      throw new Error('Must add a new component before you can inject css into it');
    }
    if (comp.textNode.data === '') {
      comp.textNode.appendData('\n/* sc-component-id: ' + componentId + ' */\n');
    }

    comp.textNode.appendData(css);
    if (name) {
      var existingNames = this.el.getAttribute(SC_ATTR);
      this.el.setAttribute(SC_ATTR, existingNames ? existingNames + ' ' + name : name);
    }

    var nonce = getNonce();

    if (nonce) {
      this.el.setAttribute('nonce', nonce);
    }
  };

  BrowserTag.prototype.toHTML = function toHTML() {
    return this.el.outerHTML;
  };

  BrowserTag.prototype.toReactElement = function toReactElement() {
    throw new Error("BrowserTag doesn't implement toReactElement!");
  };

  BrowserTag.prototype.clone = function clone() {
    throw new Error('BrowserTag cannot be cloned!');
  };

  /* Because we care about source order, before we can inject anything we need to
   * create a text node for each component and replace the existing CSS. */


  BrowserTag.prototype.replaceElement = function replaceElement() {
    var _this = this;

    this.ready = true;
    // We have nothing to inject. Use the current el.
    if (this.size === 0) return;

    // Build up our replacement style tag
    var newEl = this.el.cloneNode();
    newEl.appendChild(document.createTextNode('\n'));

    Object.keys(this.components).forEach(function (key) {
      var comp = _this.components[key];

      // eslint-disable-next-line no-param-reassign
      comp.textNode = document.createTextNode(comp.cssFromDOM);
      newEl.appendChild(comp.textNode);
    });

    if (!this.el.parentNode) {
      throw new Error("Trying to replace an element that wasn't mounted!");
    }

    // The ol' switcheroo
    this.el.parentNode.replaceChild(newEl, this.el);
    this.el = newEl;
  };

  return BrowserTag;
}();

/* Factory function to separate DOM operations from logical ones*/


var BrowserStyleSheet = {
  create: function create() {
    var tags = [];
    var names = {};

    /* Construct existing state from DOM */
    var nodes = document.querySelectorAll('[' + SC_ATTR + ']');
    var nodesLength = nodes.length;

    for (var i = 0; i < nodesLength; i += 1) {
      var el = nodes[i];

      tags.push(new BrowserTag(el, el.getAttribute(LOCAL_ATTR) === 'true', el.innerHTML));

      var attr = el.getAttribute(SC_ATTR);
      if (attr) {
        attr.trim().split(/\s+/).forEach(function (name) {
          names[name] = true;
        });
      }
    }

    /* Factory for making more tags */
    var tagConstructor = function tagConstructor(isLocal) {
      var el = document.createElement('style');
      el.type = 'text/css';
      el.setAttribute(SC_ATTR, '');
      el.setAttribute(LOCAL_ATTR, isLocal ? 'true' : 'false');
      if (!document.head) throw new Error('Missing document <head>');
      document.head.appendChild(el);
      return new BrowserTag(el, isLocal);
    };

    return new StyleSheet(tagConstructor, tags, names);
  }
};

//      
var SC_ATTR = 'data-styled-components';
var LOCAL_ATTR = 'data-styled-components-is-local';
var CONTEXT_KEY = '__styled-components-stylesheet__';

/* eslint-disable flowtype/object-type-delimiter */

/* eslint-enable flowtype/object-type-delimiter */

var instance = null;
// eslint-disable-next-line no-use-before-define
var clones = [];

var StyleSheet = function () {
  function StyleSheet(tagConstructor) {
    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var names = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, StyleSheet);
    this.hashes = {};
    this.deferredInjections = {};
    this.stylesCacheable = typeof document !== 'undefined';

    this.tagConstructor = tagConstructor;
    this.tags = tags;
    this.names = names;
    this.constructComponentTagMap();
  }

  // helper for `ComponentStyle` to know when it cache static styles.
  // staticly styled-component can not safely cache styles on the server
  // without all `ComponentStyle` instances saving a reference to the
  // the styleSheet instance they last rendered with,
  // or listening to creation / reset events. otherwise you might create
  // a component with one stylesheet and render it another api response
  // with another, losing styles on from your server-side render.


  StyleSheet.prototype.constructComponentTagMap = function constructComponentTagMap() {
    var _this = this;

    this.componentTags = {};

    this.tags.forEach(function (tag) {
      Object.keys(tag.components).forEach(function (componentId) {
        _this.componentTags[componentId] = tag;
      });
    });
  };

  /* Best level of caching—get the name from the hash straight away. */


  StyleSheet.prototype.getName = function getName(hash) {
    return this.hashes[hash.toString()];
  };

  /* Second level of caching—if the name is already in the dom, don't
   * inject anything and record the hash for getName next time. */


  StyleSheet.prototype.alreadyInjected = function alreadyInjected(hash, name) {
    if (!this.names[name]) return false;

    this.hashes[hash.toString()] = name;
    return true;
  };

  /* Third type of caching—don't inject components' componentId twice. */


  StyleSheet.prototype.hasInjectedComponent = function hasInjectedComponent(componentId) {
    return !!this.componentTags[componentId];
  };

  StyleSheet.prototype.deferredInject = function deferredInject(componentId, isLocal, css) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.deferredInject(componentId, isLocal, css);
      });
    }

    this.getOrCreateTag(componentId, isLocal);
    this.deferredInjections[componentId] = css;
  };

  StyleSheet.prototype.inject = function inject(componentId, isLocal, css, hash, name) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.inject(componentId, isLocal, css);
      });
    }

    var tag = this.getOrCreateTag(componentId, isLocal);

    var deferredInjection = this.deferredInjections[componentId];
    if (deferredInjection) {
      tag.inject(componentId, deferredInjection);
      delete this.deferredInjections[componentId];
    }

    tag.inject(componentId, css, name);

    if (hash && name) {
      this.hashes[hash.toString()] = name;
    }
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    return this.tags.map(function (tag, i) {
      return tag.toReactElement('sc-' + i);
    });
  };

  StyleSheet.prototype.getOrCreateTag = function getOrCreateTag(componentId, isLocal) {
    var existingTag = this.componentTags[componentId];
    if (existingTag) {
      return existingTag;
    }

    var lastTag = this.tags[this.tags.length - 1];
    var componentTag = !lastTag || lastTag.isFull() || lastTag.isLocal !== isLocal ? this.createNewTag(isLocal) : lastTag;
    this.componentTags[componentId] = componentTag;
    componentTag.addComponent(componentId);
    return componentTag;
  };

  StyleSheet.prototype.createNewTag = function createNewTag(isLocal) {
    var newTag = this.tagConstructor(isLocal);
    this.tags.push(newTag);
    return newTag;
  };

  StyleSheet.reset = function reset(isServer) {
    instance = StyleSheet.create(isServer);
  };

  /* We can make isServer totally implicit once Jest 20 drops and we
   * can change environment on a per-test basis. */


  StyleSheet.create = function create() {
    var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof document === 'undefined';

    return (isServer ? ServerStyleSheet : BrowserStyleSheet).create();
  };

  StyleSheet.clone = function clone(oldSheet) {
    var newSheet = new StyleSheet(oldSheet.tagConstructor, oldSheet.tags.map(function (tag) {
      return tag.clone();
    }), _extends({}, oldSheet.names));

    newSheet.hashes = _extends({}, oldSheet.hashes);
    newSheet.deferredInjections = _extends({}, oldSheet.deferredInjections);
    clones.push(newSheet);

    return newSheet;
  };

  createClass(StyleSheet, null, [{
    key: 'instance',
    get: function get$$1() {
      return instance || (instance = StyleSheet.create());
    }
  }]);
  return StyleSheet;
}();

var _StyleSheetManager$ch;

//      
var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager() {
    classCallCheck(this, StyleSheetManager);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CONTEXT_KEY] = this.props.sheet, _ref;
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(this.props.children);
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);

StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(ServerStyleSheet)]).isRequired
};

//      
/* eslint-disable no-underscore-dangle */
var ServerTag = function () {
  function ServerTag(isLocal) {
    classCallCheck(this, ServerTag);

    this.isLocal = isLocal;
    this.components = {};
    this.size = 0;
    this.names = [];
  }

  ServerTag.prototype.isFull = function isFull() {
    return false;
  };

  ServerTag.prototype.addComponent = function addComponent(componentId) {
    if ( true && this.components[componentId]) {
      throw new Error('Trying to add Component \'' + componentId + '\' twice!');
    }
    this.components[componentId] = { componentId: componentId, css: '' };
    this.size += 1;
  };

  ServerTag.prototype.concatenateCSS = function concatenateCSS() {
    var _this = this;

    return Object.keys(this.components).reduce(function (styles, k) {
      return styles + _this.components[k].css;
    }, '');
  };

  ServerTag.prototype.inject = function inject(componentId, css, name) {
    var comp = this.components[componentId];

    if ( true && !comp) {
      throw new Error('Must add a new component before you can inject css into it');
    }
    if (comp.css === '') comp.css = '/* sc-component-id: ' + componentId + ' */\n';

    comp.css += css.replace(/\n*$/, '\n');

    if (name) this.names.push(name);
  };

  ServerTag.prototype.toHTML = function toHTML() {
    var attrs = ['type="text/css"', SC_ATTR + '="' + this.names.join(' ') + '"', LOCAL_ATTR + '="' + (this.isLocal ? 'true' : 'false') + '"'];

    var nonce = getNonce();

    if (nonce) {
      attrs.push('nonce="' + nonce + '"');
    }

    return '<style ' + attrs.join(' ') + '>' + this.concatenateCSS() + '</style>';
  };

  ServerTag.prototype.toReactElement = function toReactElement(key) {
    var _attrs;

    var attrs = (_attrs = {}, _attrs[SC_ATTR] = this.names.join(' '), _attrs[LOCAL_ATTR] = this.isLocal.toString(), _attrs);

    var nonce = getNonce();

    if (nonce) {
      attrs.nonce = nonce;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({
      key: key,
      type: 'text/css'
    }, attrs, {
      dangerouslySetInnerHTML: { __html: this.concatenateCSS() }
    }));
  };

  ServerTag.prototype.clone = function clone() {
    var _this2 = this;

    var copy = new ServerTag(this.isLocal);
    copy.names = [].concat(this.names);
    copy.size = this.size;
    copy.components = Object.keys(this.components).reduce(function (acc, key) {
      acc[key] = _extends({}, _this2.components[key]); // eslint-disable-line no-param-reassign
      return acc;
    }, {});

    return copy;
  };

  return ServerTag;
}();

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    this.instance = StyleSheet.clone(StyleSheet.instance);
  }

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) {
      throw new Error("Can't collect styles once you've called getStyleTags!");
    }
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toReactElements();
  };

  ServerStyleSheet.create = function create() {
    return new StyleSheet(function (isLocal) {
      return new ServerTag(isLocal);
    });
  };

  return ServerStyleSheet;
}();

//      

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

//      
/* eslint-disable max-len */
/**
 * Trying to avoid the unknown-prop errors on styled components by filtering by
 * React's attribute whitelist.
 *
 * To regenerate this regex:
 *
 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
 * 2. Run `regexgen` with the list of space-separated words below as input
 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
 *    and no false positives from partials
 **/
/*
children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
*/
/* eslint-enable max-len */

var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|(?:attribute|glyph)Nam|playsInlin|(?:formE|e)ncTyp|(?:writing|input|edge)Mod|(?:xlinkTy|itemSco|keyTy|slo)p|(?:amplitu|mo)d|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ntrol|ord)s|o(?:lor(?:Interpolation)?|ntent)|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|o(?:ntextMenu|ls)|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|(?:rossOrigi|olSpa)n|apHeight|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|formActio|zoomAndPa|onFocusI|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:gradientT|patternT|t)ransform|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|a(?:utoCorrec|bou)|markerStar|onFocusOu|in(?:tercep|lis)|restar|forma|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|m(?:arkerMi|etho)|preloa|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:allowFullScre|hidd)en|strokeDasharray|systemLanguage|(?:strokeLineca|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|unicodeRange|(?:(?:allowReord|placehold|frameBord|paintOrd|post|ord)e|repeatDu|d(?:efe|u))r|mathematical|(?:vI|i)deographic|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|vAlphabetic|mediaGroup|spellCheck|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|(?:xmlnsXl|valueL)ink|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|(?:text|m(?:in|ax))Length|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|r(?:e(?:quired|sult|f))?|o(?:verflow|pen)|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|f(?:o(?:ntSize|rm)|il(?:ter|l))|autoPlay|unicode|p(?:attern|oints)|t(?:arget[XY]|o)|i(?:temRef|n2|s)|divisor|d(?:efault|ata|ir)?|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|(?:stri|la)ng|prefix|itemID|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|s)|t(?:arget|ype)|typeof|width|value|x(?:mlns)?|label|m(?:edia|a(?:sk|x)|in)|size|href|k(?:ey)?|end|low|x[12]|i[dn]|y[12]|g[12]|by|f[xy]|[yz])$/;

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var validAttr = (function (name) {
  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
});

//      


function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

//      


function isStyledComponent(target) /* : %checks */{
  return typeof target === 'function' && typeof target.styledComponentId === 'string';
}

//      

/* eslint-disable no-undef */
function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

//      


var determineTheme = (function (props, fallbackTheme, defaultProps) {
  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types */
  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
  /* eslint-enable */

  return theme;
});

//      
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

//      
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in listeners) {
      var listener = listeners[key];
      if (listener === undefined) {
        // eslint-disable-next-line no-continue
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
};

//      
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
});

var _ThemeProvider$childC;
var _ThemeProvider$contex;

//      
/* globals React$Element */
// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';
var CHANNEL_NEXT = CHANNEL + 'next__';

var CONTEXT_CHANNEL_SHAPE = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
  getTheme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  subscribe: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  unsubscribe: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
});

var warnChannelDeprecated = void 0;
if (true) {
  warnChannelDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
  });
}

var isFunction = function isFunction(test) {
  return typeof test === 'function';
};

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.unsubscribeToOuterId = -1;

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    var outerContext = this.context[CHANNEL_NEXT];
    if (outerContext !== undefined) {
      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
        _this2.outerTheme = theme;
      });
    }
    this.broadcast = createBroadcast(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _this3 = this,
        _babelHelpers$extends;

    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
      getTheme: this.getTheme,
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
      if (true) {
        warnChannelDeprecated();
      }

      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
      return function () {
        return _this3.broadcast.unsubscribe(unsubscribeId);
      };
    }, _babelHelpers$extends));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.broadcast.publish(this.getTheme(nextProps.theme));
    }
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;
    if (isFunction(theme)) {
      var mergedTheme = theme(this.outerTheme);
      if ( true && !is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(mergedTheme)) {
        throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
      }
      return mergedTheme;
    }
    if (!is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(theme)) {
      throw new Error('[ThemeProvider] Please make your theme prop a plain object');
    }
    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(this.props.children);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

//      

// HACK for generating all static styles without needing to allocate
// an empty execution context every single time...
var STATIC_EXECUTION_CONTEXT = {};

var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
  var identifiers = {};

  /* We depend on components having unique IDs */
  var generateId = function generateId(_displayName, parentComponentId) {
    var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

    var componentId = void 0;

    /**
     * only fall back to hashing the component injection order if
     * a proper displayName isn't provided by the babel plugin
     */
    if (!_displayName) {
      var nr = (identifiers[displayName] || 0) + 1;
      identifiers[displayName] = nr;

      componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);
    } else {
      componentId = displayName + '-' + ComponentStyle.generateName(displayName);
    }

    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
  };

  var BaseStyledComponent = function (_Component) {
    inherits(BaseStyledComponent, _Component);

    function BaseStyledComponent() {
      var _temp, _this, _ret;

      classCallCheck(this, BaseStyledComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
        theme: null,
        generatedClassName: ''
      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
      var attrs = this.constructor.attrs;

      var context = _extends({}, props, { theme: theme });
      if (attrs === undefined) {
        return context;
      }

      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
        var attr = attrs[key];
        // eslint-disable-next-line no-param-reassign
        acc[key] = typeof attr === 'function' ? attr(context) : attr;
        return acc;
      }, {});

      return _extends({}, context, this.attrs);
    };

    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
      var _constructor = this.constructor,
          attrs = _constructor.attrs,
          componentStyle = _constructor.componentStyle,
          warnTooManyClasses = _constructor.warnTooManyClasses;

      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.instance;

      // staticaly styled-components don't need to build an execution context object,
      // and shouldn't be increasing the number of class names
      if (componentStyle.isStatic && attrs === undefined) {
        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
      } else {
        var executionContext = this.buildExecutionContext(theme, props);
        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

        if ( true && warnTooManyClasses !== undefined) {
          warnTooManyClasses(className);
        }

        return className;
      }
    };

    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var componentStyle = this.constructor.componentStyle;

      var styledContext = this.context[CHANNEL_NEXT];

      // If this is a staticaly-styled component, we don't need to the theme
      // to generate or build styles.
      if (componentStyle.isStatic) {
        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
        this.setState({ generatedClassName: generatedClassName });
        // If there is a theme in the context, subscribe to the event emitter. This
        // is necessary due to pure components blocking context updates, this circumvents
        // that by updating when an event is emitted
      } else if (styledContext !== undefined) {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          // This will be called once immediately
          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
        });
      } else {
        // eslint-disable-next-line react/prop-types
        var theme = this.props.theme || {};
        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
        this.setState({ theme: theme, generatedClassName: _generatedClassName });
      }
    };

    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      // If this is a staticaly-styled component, we don't need to listen to
      // props changes to update styles
      var componentStyle = this.constructor.componentStyle;

      if (componentStyle.isStatic) {
        return;
      }

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, _this3.constructor.defaultProps);
        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

        return { theme: theme, generatedClassName: generatedClassName };
      });
    };

    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unsubscribeFromContext();
    };

    BaseStyledComponent.prototype.render = function render() {
      var _this4 = this;

      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var generatedClassName = this.state.generatedClassName;
      var _constructor2 = this.constructor,
          styledComponentId = _constructor2.styledComponentId,
          target = _constructor2.target;


      var isTargetTag = isTag(target);

      var className = [
      // eslint-disable-next-line react/prop-types
      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

      var baseProps = _extends({}, this.attrs, {
        className: className
      });

      if (isStyledComponent(target)) {
        baseProps.innerRef = innerRef;
      } else {
        baseProps.ref = innerRef;
      }

      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
        // Don't pass through non HTML tags through to HTML elements
        // always omit innerRef
        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
          // eslint-disable-next-line no-param-reassign
          acc[propName] = _this4.props[propName];
        }

        return acc;
      }, baseProps);

      return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(target, propsForElement);
    };

    return BaseStyledComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _StyledComponent$cont;

    var _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')' : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;


    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : componentId;

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties(options, ['componentId']);


        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

        var newOptions = _extends({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      createClass(StyledComponent, null, [{
        key: 'extend',
        get: function get$$1() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);


          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.target = target;


    if (true) {
      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    return StyledComponent;
  };

  return createStyledComponent;
});

// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

//      
var isStaticRules = function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled copmonent
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      var value = attrs[key];
      if (typeof value === 'function') {
        return false;
      }
    }
  }

  return true;
};

var isHRMEnabled =  true && "development" !== 'production';

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = !isHRMEnabled && isStaticRules(rules, attrs);
      this.componentId = componentId;
      if (!StyleSheet.instance.hasInjectedComponent(this.componentId)) {
        var placeholder =  true ? '.' + componentId + ' {}' : undefined;
        StyleSheet.instance.deferredInject(componentId, true, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          lastClassName = this.lastClassName;

      if (isStatic && lastClassName !== undefined) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext);
      var hash = doHash(this.componentId + flatCSS.join(''));

      var existingName = styleSheet.getName(hash);
      if (existingName !== undefined) {
        if (styleSheet.stylesCacheable) {
          this.lastClassName = existingName;
        }
        return existingName;
      }

      var name = nameGenerator(hash);
      if (styleSheet.stylesCacheable) {
        this.lastClassName = existingName;
      }
      if (styleSheet.alreadyInjected(hash, name)) {
        return name;
      }

      var css = '\n' + stringifyRules(flatCSS, '.' + name);
      // NOTE: this can only be set when we inject the class-name.
      // For some reason, presumably due to how css is stringifyRules behaves in
      // differently between client and server, styles break.
      styleSheet.inject(this.componentId, true, css, hash, name);
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return nameGenerator(doHash(str));
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
});

//      
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

//      

var _styled = (function (styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
});

//      
var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = (function (nameGenerator, stringifyRules, css) {
  return function (strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(replaceWhitespace(JSON.stringify(rules)));

    var existingName = StyleSheet.instance.getName(hash);
    if (existingName) return existingName;

    var name = nameGenerator(hash);
    if (StyleSheet.instance.alreadyInjected(hash, name)) return name;

    var generatedCSS = stringifyRules(rules, name, '@keyframes');
    StyleSheet.instance.inject('sc-keyframes-' + name, true, generatedCSS, hash, name);
    return name;
  };
});

//      
var _injectGlobal = (function (stringifyRules, css) {
  var injectGlobal = function injectGlobal(strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(JSON.stringify(rules));

    var componentId = 'sc-global-' + hash;
    if (StyleSheet.instance.hasInjectedComponent(componentId)) return;

    StyleSheet.instance.inject(componentId, false, stringifyRules(rules));
  };

  return injectGlobal;
});

//      


var _constructWithOptions = (function (css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if ( true && typeof tag !== 'string' && typeof tag !== 'function') {
      // $FlowInvalidInputTest
      throw new Error('Cannot create styled-component for component: ' + tag);
    }

    /* This is callable directly as a template function */
    var templateFunction = function templateFunction(strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return componentConstructor(tag, options, css.apply(undefined, [strings].concat(interpolations)));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: _extends({}, options.attrs || {}, attrs)
      }));
    };

    return templateFunction;
  };

  return constructWithOptions;
});

//      
/* globals ReactClass */

var wrapWithTheme = function wrapWithTheme(Component$$1) {
  var _WithTheme$contextTyp;

  var componentName = Component$$1.displayName || Component$$1.name || 'Component';

  var shouldSetInnerRef = isStyledComponent(Component$$1) ||
  // NOTE: We can't pass a ref to a stateless functional component
  typeof Component$$1 === 'function' && !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);

  var WithTheme = function (_React$Component) {
    inherits(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      classCallCheck(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var defaultProps = this.constructor.defaultProps;

      var styledContext = this.context[CHANNEL_NEXT];
      var themeProp = determineTheme(this.props, undefined, defaultProps);
      if (styledContext === undefined && themeProp === undefined && "development" !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
      } else if (styledContext === undefined && themeProp !== undefined) {
        this.setState({ theme: themeProp });
      } else {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
          _this2.setState({ theme: theme });
        });
      }
    };

    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var defaultProps = this.constructor.defaultProps;

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

        return { theme: theme };
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    WithTheme.prototype.render = function render() {
      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var theme = this.state.theme;


      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({
        theme: theme
      }, this.props, {
        innerRef: shouldSetInnerRef ? innerRef : undefined,
        ref: shouldSetInnerRef ? undefined : innerRef
      }));
    };

    return WithTheme;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  WithTheme.displayName = 'WithTheme(' + componentName + ')';
  WithTheme.styledComponentId = 'withTheme';
  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);


  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithTheme, Component$$1);
};

//      

/* Import singletons */
/* Import singleton constructors */
/* Import components */
/* Import Higher Order Components */
/* Instantiate singletons */
var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
var constructWithOptions = _constructWithOptions(css);
var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
var injectGlobal = _injectGlobal(stringifyRules, css);
var styled = _styled(StyledComponent, constructWithOptions);

/* harmony default export */ __webpack_exports__["default"] = (styled);


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?d235");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/NoSsr */ "./node_modules/@material-ui/core/NoSsr/index.js");
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_hotjar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-hotjar */ "./node_modules/react-hotjar/index.js");
/* harmony import */ var react_hotjar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_hotjar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-facebook-pixel */ "./node_modules/react-facebook-pixel/dist/fb-pixel.js");
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_facebook_pixel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Features */ "./components/Features.jsx");
/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Pricing */ "./components/Pricing.jsx");
/* harmony import */ var _components_AccessForm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/AccessForm */ "./components/AccessForm.jsx");
/* harmony import */ var _components_SommWidget__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/SommWidget */ "./components/SommWidget.jsx");






var _jsxFileName = "/Users/Chris/trysomm-mvp/pages/index.js";


















var IndexWrapper = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__IndexWrapper",
  componentId: "sc-1wbo52z-0"
})(["box-sizing:border-box;border:10px solid #1f1f1f;overflow-x:hidden;&:before{content:\"\";height:10px;position:absolute;top:0;left:0;right:0;background:#1f1f1f;z-index:999;}"]);
var StyledPaper = Object(styled_components__WEBPACK_IMPORTED_MODULE_13__["default"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a).withConfig({
  displayName: "pages__StyledPaper",
  componentId: "sc-1wbo52z-1"
})(["border-radius:8px !important;padding:16px !important;box-sizing:border-box !important;background:#FFFFFF !important;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;"]);
var StyledTextField = Object(styled_components__WEBPACK_IMPORTED_MODULE_13__["default"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a).withConfig({
  displayName: "pages__StyledTextField",
  componentId: "sc-1wbo52z-2"
})(["width:100% !important;margin-bottom:16px !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;& fieldset{border-radius:0 !important;border:4px solid #1f1f1f !important;}& input{border-radius:0 !important;font-family:'Source Sans Pro',sans-serif !important;}"]);
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_13__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a).withConfig({
  displayName: "pages__StyledButton",
  componentId: "sc-1wbo52z-3"
})(["width:100% !important;height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:#1f1f1f !important;border-radius:0px !important;text-transform:none !important;margin-bottom:8px !important;box-shadow:none !important;position:relative !important;&:after{content:\"\";display:block;position:absolute;height:56px;width:100%;background:#f94343;z-index:-1;top:4px;left:4px;}"]);
var Hero = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].section.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1wbo52z-4"
})(["width:100%;height:100%;min-height:100vh;padding:96px 16px 16px;box-sizing:border-box;background:#f94343;position:relative;@media only screen and (min-width:960px){padding:96px 120px 16px;}"]);
var HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].h1.withConfig({
  displayName: "pages__HeroTitle",
  componentId: "sc-1wbo52z-5"
})(["font-family:'Montserrat',sans-serif;font-size:2.5rem;font-weight:800;color:#fff;margin:0 0 24px;text-align:center;max-width:528px;box-sizing:border-box;& span{margin-top:8px;text-transform:uppercase;background:#fff;color:#f94343;font-size:3.25rem;padding:16px 8px;box-sizing:border-box;display:block;max-width:528px;box-sizing:border-box;}"]);
var HeroCopy = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].p.withConfig({
  displayName: "pages__HeroCopy",
  componentId: "sc-1wbo52z-6"
})(["font-family:'Source Sans Pro',sans-serif;font-weight:700;font-size:1.75rem;color:#fff;padding:0;margin:0 0 24px;max-width:528px;"]);
var HeroSpan = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].span.withConfig({
  displayName: "pages__HeroSpan",
  componentId: "sc-1wbo52z-7"
})(["font-size:1rem;font-weight:500;color:#9f9f9f;width:100%;text-align:center;display:flex;justify-content:center;align-items:center;"]);
var HeroBackground = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__HeroBackground",
  componentId: "sc-1wbo52z-8"
})(["position:absolute;top:0;right:0;bottom:0;left:0;background-color:#fff;background-image:-webkit-linear-gradient(117deg,#fff 45%,#f94343 35%);min-height:400px;"]);
var Demo = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__Demo",
  componentId: "sc-1wbo52z-9"
})(["width:100%;max-width:360px;height:600px;display:block;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;border-radius:8px;background-image:url('/static/demo.png');background-size:cover;background-position:center;"]);
var WidgetCallout = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "pages__WidgetCallout",
  componentId: "sc-1wbo52z-10"
})(["position:fixed;bottom:8px;right:16px;z-index:7;height:64px;box-sizing:border-box;background:#fff;border-radius:8px;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;padding:16px 72px 16px 8px;display:flex;align-items:center;font-family:'Montserrat',sans-serif;font-weight:700;color:#1f1f1f;font-size:1rem;"]);

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
      react_facebook_pixel__WEBPACK_IMPORTED_MODULE_17___default.a.init('263524987898901');
      react_facebook_pixel__WEBPACK_IMPORTED_MODULE_17___default.a.pageView();
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
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Somm | Your menu's personal assistant")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WidgetCallout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "Try out Somm now"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SommWidget__WEBPACK_IMPORTED_MODULE_23__["default"], {
        username: "xoh",
        iconColor: "#fff",
        backgroundColor: "#f94343",
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Hero, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
        container: true,
        spacing: 16,
        style: {
          zIndex: 5,
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
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
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "Your restaurant deserves", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "a better menu")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroCopy, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "Supercharge your business with Somm, a personal assistant for your menu with powerful features and valuable insights."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_AccessForm__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
          lineNumber: 273
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
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Demo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroBackground, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Pricing__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "dll-reference dll_b27d519beaee36114eaf":
/*!*******************************************!*\
  !*** external "dll_b27d519beaee36114eaf" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_b27d519beaee36114eaf;

/***/ })

})
//# sourceMappingURL=index.js.94d99b604de9ab8263ae.hot-update.js.map