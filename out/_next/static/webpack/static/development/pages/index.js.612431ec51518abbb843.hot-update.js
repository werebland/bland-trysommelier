webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Pricing.jsx":
/*!********************************!*\
  !*** ./components/Pricing.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/Chris/trysomm-mvp/components/Pricing.jsx";



var PricingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "Pricing__PricingWrapper",
  componentId: "cp9je-0"
})(["width:100%;display:flex;flex-flow:column nowrap;align-items:center;padding:16px;box-sizing:border-box;@media only screen and (min-width:960px){padding:16px 120px;}"]);
var PricingTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "Pricing__PricingTitle",
  componentId: "cp9je-1"
})(["font-family:'Montserrat',sans-serif;font-size:2.5rem;font-weight:800;color:#fff;background:#f94343;margin:0 auto;display:inline-block;text-align:center;padding:8px 16px;"]);
var PricingSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h5.withConfig({
  displayName: "Pricing__PricingSubtitle",
  componentId: "cp9je-2"
})(["font-family:'Montserrat',sans-serif;font-size:2rem;font-weight:800;color:#1f1f1f;margin:0 auto 68px;text-align:center;"]);
var PricingGrid = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "Pricing__PricingGrid",
  componentId: "cp9je-3"
})(["width:100%;box-sizing:border-box;"]);
var PricingCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].article.withConfig({
  displayName: "Pricing__PricingCardContainer",
  componentId: "cp9je-4"
})(["width:100%;border:2px solid ", ";border-radius:8px;padding:16px;box-sizing:border-box;text-align:center;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;background:#fff;box-shadow:", ";"], function (props) {
  return props.primary ? '#f94343' : '#1f1f1f';
}, function (props) {
  return props.primary ? '0 2px 16px -2px rgba(31,31,31,0.32)' : 'none';
});
var PricingCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "Pricing__PricingCardTitle",
  componentId: "cp9je-5"
})(["font-family:'Montserrat',sans-serif;font-size:1.5rem;font-weight:800;color:", ";margin:0 0 16px;"], function (props) {
  return props.primary ? '#f94343' : '#1f1f1f';
});
var PricingCardPrice = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Pricing__PricingCardPrice",
  componentId: "cp9je-6"
})(["font-family:'Montserrat',sans-serif;font-size:4rem;font-weight:800;color:#1f1f1f;position:relative;padding:0 16px;display:flex;align-items:flex-start;line-height:4rem;&::before{content:\"$\";position:absolute;top:0;left:0;font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:800;}"]);
var PricingCardPriceSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Pricing__PricingCardPriceSubtitle",
  componentId: "cp9je-7"
})(["font-family:'Source Sans Pro',sans-serif;font-weight:400;color:#9f9f9f;font-size:1rem;"]);
var PricingCardItems = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Pricing__PricingCardItems",
  componentId: "cp9je-8"
})(["padding:0;margin:0;display:flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;"]);
var PricingCardItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Pricing__PricingCardItem",
  componentId: "cp9je-9"
})(["list-style:none;font-family:'Source Sans Pro',sans-serif;color:", ";font-size:1.25rem;font-weight:500;margin-bottom:8px;"], function (props) {
  return props.active ? '#1f1f1f' : '#9f9f9f';
});
var PricingAlert = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Pricing__PricingAlert",
  componentId: "cp9je-10"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin-bottom:40px;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);

var Pricing = function Pricing(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Pricing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Where guac is never extra"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingAlert, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Early Access: Unlimited items, All features, No charge."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingGrid, {
    container: true,
    spacing: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
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
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Appetizer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPriceSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "monthly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Complimentary setup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Minimal code integration"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "35 dishes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
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
      lineNumber: 171
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContainer, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Entree"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "29"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPriceSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "monthly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Complimentary setup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Minimal code integration"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "100 dishes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "Multiple menus")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Dessert"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardPriceSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "monthly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Complimentary setup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Minimal code integration"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Unlimited dishes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PricingCardItem, {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "Multiple locations"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ })

})
//# sourceMappingURL=index.js.612431ec51518abbb843.hot-update.js.map