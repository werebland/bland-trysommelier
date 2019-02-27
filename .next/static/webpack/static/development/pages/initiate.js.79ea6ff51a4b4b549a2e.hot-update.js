webpackHotUpdate("static/development/pages/initiate.js",{

/***/ "./pages/initiate.js":
/*!***************************!*\
  !*** ./pages/initiate.js ***!
  \***************************/
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
/* harmony import */ var react_step_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-step-progress-bar */ "./node_modules/react-step-progress-bar/index.js");
/* harmony import */ var react_step_progress_bar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_step_progress_bar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_MenuAdder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MenuAdder */ "./components/MenuAdder.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");






var _jsxFileName = "/Users/Chris/trysomm/pages/initiate.js";









var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "initiate__PageWrapper",
  componentId: "x6xz0w-0"
})(["padding:156px 24px 24px;box-sizing:border-box;border:10px solid #1f1f1f;min-height:100vh;@media only screen and (min-width:960px){padding:156px 16px 16px;}"]);
var PosedPageTitle = react_pose__WEBPACK_IMPORTED_MODULE_8__["default"].h1({
  closed: {
    flex: 1,
    fontSize: '20px'
  },
  open: {
    flex: 5,
    fontSize: '40px'
  }
});
var PageTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PosedPageTitle, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
}).withConfig({
  displayName: "initiate__PageTitle",
  componentId: "x6xz0w-1"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin:auto;margin-bottom:16px;display:inline-flex;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);
var GetStartedFormProgress = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "initiate__GetStartedFormProgress",
  componentId: "x6xz0w-2"
})([""]);
var GetStartedForm = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "initiate__GetStartedForm",
  componentId: "x6xz0w-3"
})([""]);

var GetStarted =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GetStarted, _Component);

  function GetStarted(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GetStarted);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GetStarted).call(this, props));
    _this.state = {
      currentStep: 1,
      menus: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GetStarted, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      firebase__WEBPACK_IMPORTED_MODULE_11___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
        } else {} // User is signed out.
        // ...
        // ...

      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(accepted, rejected) {
      console.log(accepted);
      var menus = this.state.menus;

      lodash__WEBPACK_IMPORTED_MODULE_10___default.a.forEach(accepted, function (file) {
        var menu = {
          name: file.name,
          file: file
        };
        menus.push(menu);
      });

      console.log(menus);
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "handleRemove",
    value: function handleRemove(i) {
      var menus = this.state.menus;
      menus.splice(i, 1);
      console.log(menus);
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "handleName",
    value: function handleName(i, value) {
      var menus = this.state.menus;
      var menu = menus[i];
      menu.title = value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageWrapper, {
        className: "getStarted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_8__["PoseGroup"], {
        preEnterPose: "preEnter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, this.state.currentStep == "1" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageTitle, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Add your menu"), this.state.currentStep == "2" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageTitle, {
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Choose your plan")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_MenuAdder__WEBPACK_IMPORTED_MODULE_13__["default"], {
        menus: this.state.menus,
        handleDrop: function handleDrop(accepted, rejected) {
          return _this2.handleDrop(accepted, rejected);
        },
        handleRemove: function handleRemove(i) {
          return _this2.handleRemove(i);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }));
    }
  }]);

  return GetStarted;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GetStarted);

/***/ })

})
//# sourceMappingURL=initiate.js.79ea6ff51a4b4b549a2e.hot-update.js.map