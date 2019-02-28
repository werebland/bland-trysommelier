webpackHotUpdate("static/development/pages/initiate.js",{

/***/ "./components/MenuAdder.jsx":
/*!**********************************!*\
  !*** ./components/MenuAdder.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/Chris/trysomm/components/MenuAdder.jsx";





var MenuAdderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MenuAdder__MenuAdderContainer",
  componentId: "sc-11ev8x6-0"
})(["width:100%;max-width:720px;"]);
var StyledTextField = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a).withConfig({
  displayName: "MenuAdder__StyledTextField",
  componentId: "sc-11ev8x6-1"
})(["width:100% !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;& fieldset{border-radius:0 !important;border:4px solid #1f1f1f !important;}& input{border-radius:0 !important;font-family:'Source Sans Pro',sans-serif !important;}"]);
var DropzoneContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MenuAdder__DropzoneContainer",
  componentId: "sc-11ev8x6-2"
})(["width:100%;height:140px;border:2px dashed ", ";padding:24px;box-sizing:border-box;border-radius:0;background:#fff;display:flex;align-items:center;justify-content:center;margin-bottom:16px;position:relative;transition:0.2s ease-out all;& .initiate-dropzone{padding:24px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;position:absolute;width:100%:height:100%;top:0;right:0;bottom:0;left:0;}"], function (props) {
  return props.active ? '#1f1f1f' : '#9f9f9f';
});
var PosedFilesContainer = react_pose__WEBPACK_IMPORTED_MODULE_3__["default"].div({
  enter: {
    staggerChildren: 300
  },
  exit: {
    staggerChildren: 300
  }
});
var FilesContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PosedFilesContainer, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }));
}).withConfig({
  displayName: "MenuAdder__FilesContainer",
  componentId: "sc-11ev8x6-3"
})(["width:100%;display:flex;flex-flow:column nowrap;margin-bottom:16px;"]);
var PosedFile = react_pose__WEBPACK_IMPORTED_MODULE_3__["default"].div({
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
var File = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PosedFile, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }));
}).withConfig({
  displayName: "MenuAdder__File",
  componentId: "sc-11ev8x6-4"
})(["width:100%;border:4px solid #1f1f1f;box-sizing:border-box;margin-bottom:8px;padding:16px;display:flex;flex-flow:row nowrap;align-items:center;opacity:0;transform:translate(0,32px);&:last-of-type{margin-bottom:0;}"]);
var FileRemove = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "MenuAdder__FileRemove",
  componentId: "sc-11ev8x6-5"
})(["padding:16px;"]);

var MenuAdder = function MenuAdder(_ref) {
  var handleDrop = _ref.handleDrop,
      files = _ref.files,
      handleName = _ref.handleName,
      handleRemove = _ref.handleRemove;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuAdderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onDrop: function onDrop(accepted, rejected) {
      return handleDrop(accepted, rejected);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps,
        isDragActive = _ref2.isDragActive;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropzoneContainer, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps({
      refKey: 'innerRef'
    }), {
      className: "initiate-dropzone",
      active: isDragActive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    })), isDragActive ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Drop files here...") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Try dropping some files here, or click to select files to upload."));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilesContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_3__["PoseGroup"], {
    preEnterPose: "preEnter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, files.map(function (file, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(File, {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTextField, {
      label: "Menu name",
      variant: "outlined",
      onChange: function onChange(e) {
        return handleName(e.target.value, i);
      },
      value: file.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FileRemove, {
      onClick: function onClick() {
        return handleRemove(i);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuAdder);

/***/ })

})
//# sourceMappingURL=initiate.js.622bc96558f0726b2a6a.hot-update.js.map