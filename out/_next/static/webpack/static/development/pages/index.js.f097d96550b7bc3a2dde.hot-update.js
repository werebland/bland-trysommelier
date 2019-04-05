webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Walkthrough.jsx":
/*!************************************!*\
  !*** ./components/Walkthrough.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/Chris/somm-landing/components/Walkthrough.jsx";



var WalkthroughContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "Walkthrough__WalkthroughContainer",
  componentId: "sc-1afg5w7-0"
})(["width:100%;max-width:1000px;height:100%;min-height:100vh;margin:auto;display:flex;flex-flow:column nowrap;align-items:center;padding:16px;box-sizing:border-box;.react-reveal{width:100%;}"]);
var WalkthroughTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "Walkthrough__WalkthroughTitle",
  componentId: "sc-1afg5w7-1"
})(["font-size:2.5rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;margin:0 0 24px;"]);
var WalkthroughStep = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].article.withConfig({
  displayName: "Walkthrough__WalkthroughStep",
  componentId: "sc-1afg5w7-2"
})(["width:100%;height:100%;min-height:400px;display:grid;grid-template-columns:", ";grid-gap:64px;margin-bottom:32px;& .walkthrough__stepContent{order:", ";}@media only screen and (max-width:959px){display:flex;flex-flow:column nowrap;}"], function (props) {
  return props.alternate ? '60% 40%' : '40% 60%';
}, function (props) {
  return props.alternate ? '-1' : '2';
});
var WalkthroughStepImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Walkthrough__WalkthroughStepImage",
  componentId: "sc-1afg5w7-3"
})(["min-height:360px;background-image:url(", ");background-position:center;background-size:contain;background-repeat:no-repeat;"], function (props) {
  return props.image;
});
var WalkthroughStepContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Walkthrough__WalkthroughStepContent",
  componentId: "sc-1afg5w7-4"
})(["display:flex;flex-flow:column nowrap;"]);
var WalkthroughStepContentTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "Walkthrough__WalkthroughStepContentTitle",
  componentId: "sc-1afg5w7-5"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;margin:0 0 16px;"]);
var WalkthroughStepContentCopy = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Walkthrough__WalkthroughStepContentCopy",
  componentId: "sc-1afg5w7-6"
})(["font-size:1.25rem;font-weight:400;color:#1f1f1f;font-family:'Source Sans Pro',sans-serif;margin:0 0 16px;padding:0;"]);

var Walkthrough = function Walkthrough(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughContainer, {
    className: "walkthrough",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughTitle, {
    className: "walkthrough__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "How Somm works."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStep, {
    className: "walkthrough__step walkthrough__step--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepImage, {
    className: "walkthrough__stepImage",
    image: "/static/upload.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepContent, {
    className: "walkthrough__stepContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepContentTitle, {
    className: "walkthrough__stepContentTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Upload"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepContentCopy, {
    className: "walkthrough__stepContentCopy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "We know that your menu changes frequently and that you already have enough on your plate. Leave the heavy lifting to us. We will take your menus and transform them into Somm items that can be viewed and sorted. You can upload any format or provide a link to your menus on your website and we will begin processing them."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStep, {
    alternate: true,
    className: "walkthrough__step walkthrough__step--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepImage, {
    className: "walkthrough__stepImage",
    image: "/static/customize.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepContent, {
    className: "walkthrough__stepContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepContentTitle, {
    className: "walkthrough__stepContentTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Customize"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepContentCopy, {
    className: "walkthrough__stepContentCopy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "The beauty of Somm is in its customization. So we need to know as much as possible about your restaurant in order for you to get the most out of Somm. From your location and phone number to your cuisine and any booking or ordering URLs, we want to know it all. Further customize the color, location, and icon of your Somm widget to ensure that it integrates seamlessly with your existing website."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStep, {
    className: "walkthrough__step walkthrough__step--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepImage, {
    className: "walkthrough__stepImage",
    image: "/static/embed.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepContent, {
    className: "walkthrough__stepContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepContentTitle, {
    className: "walkthrough__stepContentTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Integrate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WalkthroughStepContentCopy, {
    className: "walkthrough__stepContentCopy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Here is where the magic happens. With your menus already uploaded to our database and Somm perfectly customized to fit your needs, all it takes is copy-and-pasting three lines of code onto your website to start using Somm. Diners can start interacting with it instantly, meaning that you can start gaining valuable insights with zero transition time. Of course, we are here to walk you through every step of the process.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Walkthrough);

/***/ })

})
//# sourceMappingURL=index.js.f097d96550b7bc3a2dde.hot-update.js.map