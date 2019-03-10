webpackHotUpdate("static/development/pages/onboard.js",{

/***/ "./pages/onboard.js":
/*!**************************!*\
  !*** ./pages/onboard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/Stepper/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/Step/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/StepLabel/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_AccessForm__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/AccessForm */ "./components/AccessForm.jsx");
/* harmony import */ var _components_MenuUploader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/MenuUploader */ "./components/MenuUploader.jsx");










var _jsxFileName = "/Users/Chris/trysomm-mvp/pages/onboard.js";

















var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21___default.a).withConfig({
  displayName: "onboard__StyledButton",
  componentId: "sc-10n6sav-0"
})(["text-transform:none !important;border-radius:8px !important;background:", " !important;box-shadow:", " !important;color:", " !important;"], function (props) {
  return props.variant === "contained" ? '#54a0ff' : 'transparent';
}, function (props) {
  return props.variant === "contained" ? '0 2px 16px -2px rgba(31,31,31,0.32)' : 'none';
}, function (props) {
  return props.variant === "contained" ? '#fff' : '#1f1f1f';
});
var StyledTextField = Object(styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22___default.a).withConfig({
  displayName: "onboard__StyledTextField",
  componentId: "sc-10n6sav-1"
})(["width:100% !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;box-sizing;border-box !important;& fieldset{border:2px solid #1f1f1f !important;border-radius:8px !important;}& input{font-family:'Source Sans Pro',sans-serif !important;}"]);
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "onboard__PageWrapper",
  componentId: "sc-10n6sav-2"
})(["width:100%;height:100%;min-height:100vh;display:flex;flex-flow:row nowrap;"]);
var OnboardContent = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "onboard__OnboardContent",
  componentId: "sc-10n6sav-3"
})(["height:100%;min-height:100vh;box-sizing:border-box;padding:16px;background:#fff;display:flex;flex:.4;flex-flow:column nowrap;align-items:center;justify-content:center;overflow:hidden;position:relative;"]);
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].h1.withConfig({
  displayName: "onboard__PageTitle",
  componentId: "sc-10n6sav-4"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin:0 auto 16px;display:inline-flex;z-index:1;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);
var OnboardBackground = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "onboard__OnboardBackground",
  componentId: "sc-10n6sav-5"
})(["width:77%;height:100%;min-height:100vh;background:aliceblue;background-image:url('https://images.unsplash.com/photo-1550259114-ad7188f0a967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80');background-position:center;background-size:cover;display:flex;flex:.6;"]);
var OnboardStepper = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "onboard__OnboardStepper",
  componentId: "sc-10n6sav-6"
})(["width:100%;"]);
var PosedOnboardStepperContent = react_pose__WEBPACK_IMPORTED_MODULE_15__["default"].div({
  enter: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: function x(_ref) {
      var activeStep = _ref.activeStep,
          step = _ref.step;
      return activeStep <= step ? 300 : -300;
    },
    opacity: 0
  }
});
var OnboardStepperContent = Object(styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PosedOnboardStepperContent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }));
}).withConfig({
  displayName: "onboard__OnboardStepperContent",
  componentId: "sc-10n6sav-7"
})([""]);

var styles = function styles(theme) {
  return {
    root: {
      width: '90%'
    },
    backButton: {
      marginRight: theme.spacing.unit
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit
    }
  };
};

var StepperButtons = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "onboard__StepperButtons",
  componentId: "sc-10n6sav-8"
})(["width:100%;display:flex;flex-flow:row nowrap;justify-content:space-between;flex-direction:", ";"], function (props) {
  return props.activeStep === 0 ? 'row-reverse' : 'row';
});

var Onboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Onboard, _Component);

  function Onboard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Onboard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Onboard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleNext", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep + 1
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleBack", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep - 1
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleReset", function () {
      _this.setState({
        activeStep: 0
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleDrop", function (accepted, rejected) {
      var menus = _this.state.menus;

      lodash__WEBPACK_IMPORTED_MODULE_24___default.a.forEach(accepted, function (file) {
        var menu = {
          name: file.name,
          file: file
        };
        menus.push(menu);
      });

      _this.setState({
        menus: menus
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleRemove", function (i) {
      var menus = _this.state.menus;
      console.log('removed' + i);
      menus.splice(i, 1);

      _this.setState({
        menus: menus
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleMenuName", function (value, i) {
      var menus = _this.state.menus;
      menus[i].name = value;

      _this.setState({
        menus: menus
      });
    });

    _this.state = {
      user: {},
      restaurant: {},
      menus: [],
      activeStep: 0,
      email: "",
      name: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Onboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log(window.location.search);
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
      });
      console.log(vars);
      var email = vars.email;
      console.log(email);

      if (email) {
        _config__WEBPACK_IMPORTED_MODULE_13__["default"].get('users', {
          context: this,
          query: function query(ref) {
            return ref.where('email', '==', email);
          }
        }).then(function (data) {
          _this2.setState({
            user: data[0]
          });
        }).catch(function (err) {//handle error
        });
      }
    }
  }, {
    key: "handleAccess",
    value: function handleAccess(e) {
      var _this3 = this;

      e.preventDefault();
      var _this$state = this.state,
          email = _this$state.email,
          name = _this$state.name;

      var names = lodash__WEBPACK_IMPORTED_MODULE_24___default.a.split(name, ' ', 2);

      var firstName = names[0];
      var lastName = names[1];
      var data = {
        email: email,
        firstName: firstName,
        lastName: lastName
      };

      var formattedData = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data);

      console.log(formattedData);
      axios__WEBPACK_IMPORTED_MODULE_16___default()({
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

        _this3.setState({
          accessStatus: 'success'
        });
      }).catch(function (error) {
        console.log(error.response.data);

        _this3.setState({
          accessStatus: error.response.data.details.title
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var classes = this.props.classes;
      var steps = ['Tell us about your restaurant', 'Upload your menus', 'Customize your widget'];
      var _this$state2 = this.state,
          activeStep = _this$state2.activeStep,
          restaurant = _this$state2.restaurant,
          menus = _this$state2.menus,
          user = _this$state2.user;
      var email = restaurant.email,
          firstName = restaurant.firstName,
          lastName = restaurant.lastName,
          name = restaurant.name;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PageWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "Onboard | Somm")), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(user).length > 0 ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PageTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, "Hop onboard"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardStepper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_18___default.a, {
        activeStep: activeStep,
        alternativeLabel: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, steps.map(function (label) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_19___default.a, {
          key: label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_20___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, label));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_15__["PoseGroup"], {
        activeStep: activeStep,
        preEnterPose: "preEnter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, activeStep === 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardStepperContent, {
        key: "0",
        step: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23___default.a, {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 6,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledTextField, {
        variant: "outlined",
        label: "First name",
        value: firstName,
        onChange: function onChange(e) {
          return _this4.setState({
            email: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 6,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledTextField, {
        variant: "outlined",
        label: "Last name",
        value: lastName,
        onChange: function onChange(e) {
          return _this4.setState({
            email: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledTextField, {
        variant: "outlined",
        label: "Email",
        value: email,
        onChange: function onChange(e) {
          return _this4.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, restaurant.email, e.target.value));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledTextField, {
        variant: "outlined",
        label: "Restaurant name",
        value: name,
        onChange: function onChange(e) {
          return _this4.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, restaurant.email, e.target.value));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      })))), activeStep === 1 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardStepperContent, {
        key: "1",
        step: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_MenuUploader__WEBPACK_IMPORTED_MODULE_26__["default"], {
        files: this.state.menus,
        handleDrop: function handleDrop(accepted, rejected) {
          return _this4.handleDrop(accepted, rejected);
        },
        handleRemove: function handleRemove(i) {
          return _this4.handleRemove(i);
        },
        handleMenuName: function handleMenuName(value, i) {
          return _this4.handleMenuName(value, i);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      })), activeStep === 2 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardStepperContent, {
        key: "2",
        step: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "Widget customizer")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StepperButtons, {
        activeStep: activeStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, this.state.activeStep > 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledButton, {
        onClick: this.handleBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledButton, {
        variant: "contained",
        onClick: this.handleNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, activeStep === 2 ? "Finish" : "Next")))) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PageTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, "Whoops!"), "It doesn't look like you're part of our early access program yet.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_AccessForm__WEBPACK_IMPORTED_MODULE_25__["default"], {
        handleAccess: function handleAccess(e) {
          return _this4.handleAccess(e);
        },
        email: this.state.email,
        handleEmail: function handleEmail(email) {
          return _this4.setState({
            email: email
          });
        },
        name: this.state.name,
        handleName: function handleName(name) {
          return _this4.setState({
            name: name
          });
        },
        accessStatus: this.state.accessStatus,
        handleClear: function handleClear() {
          return _this4.setState({
            accessStatus: "",
            name: "",
            email: ""
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardBackground, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }));
    }
  }]);

  return Onboard;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Onboard);

/***/ })

})
//# sourceMappingURL=onboard.js.3b497d48134231d28dda.hot-update.js.map