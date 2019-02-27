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
})(["width:100%;max-width:720px;"]);
var StyledTextField = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a).withConfig({
  displayName: "MenuAdder__StyledTextField",
  componentId: "sc-11ev8x6-1"
})(["width:100% !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;& fieldset{border-radius:0 !important;border:4px solid #1f1f1f !important;}& input{border-radius:0 !important;font-family:'Source Sans Pro',sans-serif !important;}"]);
var DropzoneContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "MenuAdder__DropzoneContainer",
  componentId: "sc-11ev8x6-2"
})(["width:100%;height:140px;border:2px dashed ", ";padding:24px;box-sizing:border-box;border-radius:0;background:#fff;display:flex;align-items:center;justify-content:center;margin-bottom:16px;position:relative;transition:0.2s ease-out all;& .initiate-dropzone{padding:24px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;position:absolute;width:100%:height:100%;top:0;right:0;bottom:0;left:0;}"], function (props) {
  return props.active ? '#1f1f1f' : '#9f9f9f';
});
var FilesContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "MenuAdder__FilesContainer",
  componentId: "sc-11ev8x6-3"
})(["width:100%;display:flex;flex-flow:column nowrap;"]);
var PosedFile = react_pose__WEBPACK_IMPORTED_MODULE_8__["default"].div({
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: 32,
    opacity: 0
  },
  preEnter: {
    y: 32,
    opacity: 0
  }
});
var File = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PosedFile, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }));
}).withConfig({
  displayName: "MenuAdder__File",
  componentId: "sc-11ev8x6-4"
})(["width:100%;border:4px solid #1f1f1f;box-sizing:border-box;margin-bottom:8px;padding:16px;display:flex;flex-flow:row nowrap;"]);

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
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuAdderContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onDrop: function onDrop(accepted, rejected) {
          return _this.props.handleDrop(accepted, rejected);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps,
            isDragActive = _ref.isDragActive;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DropzoneContainer, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, getRootProps(), {
          className: "initiate-dropzone",
          active: isDragActive,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, getInputProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        })), isDragActive ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, "Drop files here...") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, "Try dropping some files here, or click to select files to upload."));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FilesContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_8__["PoseGroup"], {
        preEnterPose: "preEnter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, this.props.files.map(function (file, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(File, {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledTextField, {
          label: "Menu name",
          variant: "outlined",
          onChange: function onChange(e) {
            return _this.props.handleName(e.target.value, i);
          },
          value: file.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          onClick: function onClick() {
            return _this.props.handleRemove(i);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, "X"));
      }))));
    }
  }]);

  return MenuAdder;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuAdder);

/***/ })

})
//# sourceMappingURL=initiate.js.cf5ec49212791c9c640f.hot-update.js.map