webpackHotUpdate("static/development/pages/initiate.js",{

/***/ "./components/MenuAdder.jsx":
/*!**********************************!*\
  !*** ./components/MenuAdder.jsx ***!
  \**********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/Chris/trysomm/components/MenuAdder.jsx";





var MenuAdderContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "MenuAdder__MenuAdderContainer",
  componentId: "sc-11ev8x6-0"
})(["width:100%;max-width:720px;border:2px dashed #9f9f9f;padding:24px;box-sizing:border-box;border-radius:0;background:#fff;"]);
var PosedPaper = react_pose__WEBPACK_IMPORTED_MODULE_8__["default"].div({});
var StyledPaper = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PosedPaper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
}).withConfig({
  displayName: "MenuAdder__StyledPaper",
  componentId: "sc-11ev8x6-1"
})(["width:100%;height:128px;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;border-radius:8px;padding:16px;box-sizing:border-box;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;margin-bottom:24px;position:relative;overflow:hidden;&:last-of-type{margin-bottom:0;}"]);
var MenuUploadStatus = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "MenuAdder__MenuUploadStatus",
  componentId: "sc-11ev8x6-2"
})([""]);
var MenuUploadDetails = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "MenuAdder__MenuUploadDetails",
  componentId: "sc-11ev8x6-3"
})([""]);
var DropzoneContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "MenuAdder__DropzoneContainer",
  componentId: "sc-11ev8x6-4"
})([""]);
var FileDropzone = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "MenuAdder__FileDropzone",
  componentId: "sc-11ev8x6-5"
})(["width:100%;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;background:", ";display:flex;align-items:center;justify-content:center;font-size:1.125rem;font-weight:500;color:#9f9f9f;"], function (props) {
  return props.isactive ? 'green' : '#fff';
});

var MenuAdder =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuAdder, _Component);

  function MenuAdder() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuAdder);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuAdder).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuAdder, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuAdderContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      });
    }
  }]);

  return MenuAdder;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuAdder);

/***/ })

})
//# sourceMappingURL=initiate.js.4e0360415eb67a766935.hot-update.js.map