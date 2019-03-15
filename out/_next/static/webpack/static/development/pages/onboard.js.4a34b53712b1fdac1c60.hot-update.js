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
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/Stepper/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/Step/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/StepLabel/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_StepIcon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/StepIcon */ "./node_modules/@material-ui/core/StepIcon/index.js");
/* harmony import */ var _material_ui_core_StepIcon__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_StepIcon__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "./node_modules/@material-ui/core/OutlinedInput/index.js");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _components_AccessForm__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../components/AccessForm */ "./components/AccessForm.jsx");
/* harmony import */ var _components_MenuUploader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../components/MenuUploader */ "./components/MenuUploader.jsx");










var _jsxFileName = "/Users/Chris/trysomm-mvp/pages/onboard.js";


























var storage = firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.storage();
var storageRef = storage.ref();
var menusRef = storageRef.child('menus');
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_15__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_23___default.a).withConfig({
  displayName: "onboard__StyledButton",
  componentId: "sc-10n6sav-0"
})(["text-transform:none !important;border-radius:8px !important;background:", " !important;box-shadow:", " !important;color:", " !important;"], function (props) {
  return props.variant === "contained" ? '#54a0ff' : 'transparent';
}, function (props) {
  return props.variant === "contained" ? '0 2px 16px -2px rgba(31,31,31,0.32)' : 'none';
}, function (props) {
  return props.variant === "contained" ? '#fff' : '#1f1f1f';
});
var StyledTextField = Object(styled_components__WEBPACK_IMPORTED_MODULE_15__["default"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_24___default.a).withConfig({
  displayName: "onboard__StyledTextField",
  componentId: "sc-10n6sav-1"
})(["width:100% !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;box-sizing;border-box !important;& fieldset{border:2px solid #1f1f1f !important;border-radius:8px !important;}& input{font-family:'Source Sans Pro',sans-serif !important;}"]);
var StyledFormControl = Object(styled_components__WEBPACK_IMPORTED_MODULE_15__["default"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_29___default.a).withConfig({
  displayName: "onboard__StyledFormControl",
  componentId: "sc-10n6sav-2"
})(["width:100%;"]);
var StyledOutlinedInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_15__["default"])(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_27___default.a).withConfig({
  displayName: "onboard__StyledOutlinedInput",
  componentId: "sc-10n6sav-3"
})(["& fieldset{border:2px solid #1f1f1f !important;border-radius:8px !important;}& div svg{right:4px !important;}"]);
var StyledInputLabel = Object(styled_components__WEBPACK_IMPORTED_MODULE_15__["default"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_26___default.a).withConfig({
  displayName: "onboard__StyledInputLabel",
  componentId: "sc-10n6sav-4"
})(["color:", " !important;"], function (props) {
  return props.focused ? '#1f1f1f' : '#9f9f9f';
});
var StyledStep = Object(styled_components__WEBPACK_IMPORTED_MODULE_15__["default"])(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_20___default.a).withConfig({
  displayName: "onboard__StyledStep",
  componentId: "sc-10n6sav-5"
})(["&.completed span span svg{color:#1f1f1f !important;}"]);
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "onboard__PageWrapper",
  componentId: "sc-10n6sav-6"
})(["width:100%;height:100%;min-height:100vh;display:flex;flex-flow:row nowrap;"]);
var OnboardContent = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "onboard__OnboardContent",
  componentId: "sc-10n6sav-7"
})(["height:100%;min-height:100vh;box-sizing:border-box;padding:16px;background:#fff;display:flex;flex:.4;flex-flow:column nowrap;align-items:center;justify-content:flex-start;overflow:hidden;position:relative;"]);
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].h1.withConfig({
  displayName: "onboard__PageTitle",
  componentId: "sc-10n6sav-8"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin:0 auto 16px;display:inline-flex;z-index:1;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);
var OnboardBackground = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "onboard__OnboardBackground",
  componentId: "sc-10n6sav-9"
})(["width:77%;height:100%;min-height:100vh;background:aliceblue;background-image:url('https://images.unsplash.com/photo-1550259114-ad7188f0a967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80');background-position:center;background-size:cover;display:flex;flex:.6;"]);
var OnboardStepper = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "onboard__OnboardStepper",
  componentId: "sc-10n6sav-10"
})(["width:100%;"]);
var PosedOnboardStepperContent = react_pose__WEBPACK_IMPORTED_MODULE_16__["default"].div({
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
var OnboardStepperContent = Object(styled_components__WEBPACK_IMPORTED_MODULE_15__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PosedOnboardStepperContent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }));
}).withConfig({
  displayName: "onboard__OnboardStepperContent",
  componentId: "sc-10n6sav-11"
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

var StepperButtons = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div.withConfig({
  displayName: "onboard__StepperButtons",
  componentId: "sc-10n6sav-12"
})(["width:100%;display:flex;flex-flow:row nowrap;justify-content:space-between;flex-direction:", ";position:absolute;bottom:0;right:0;left:0;padding:16px;box-sizing:border-box;"], function (props) {
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
      var activeStep = _this.state.activeStep;

      if (activeStep === 2) {
        _this.handleComplete();
      } else {
        _this.setState({
          activeStep: activeStep + 1
        });
      }
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

      lodash__WEBPACK_IMPORTED_MODULE_31___default.a.forEach(accepted, function (file) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleRestaurantName", function (value) {
      var restaurant = _this.state.restaurant;
      restaurant.name = value;

      _this.setState({
        restaurant: restaurant
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleRestaurantCuisine", function (value) {
      var restaurant = _this.state.restaurant;
      restaurant.cuisine = value;

      _this.setState({
        restaurant: restaurant
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleRestaurantPrice", function (event) {
      var value = event.target.value;
      var restaurant = _this.state.restaurant;
      restaurant.price = value;

      _this.setState({
        restaurant: restaurant
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleRestaurantUsername", function (value) {
      var restaurant = _this.state.restaurant;
      restaurant.username = value;

      _this.setState({
        restaurant: restaurant
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleChange", function (address) {
      _this.setState({
        addressTerm: address
      });

      console.log(address);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleSelect", function (address) {
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_32__["geocodeByAddress"])(address).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_32__["getLatLng"])(results[0]);
      }).then(function (latLng) {
        return console.log('Success', latLng);
      }).catch(function (error) {
        return console.error('Error', error);
      });
    });

    _this.state = {
      user: {},
      restaurant: {
        username: "",
        name: "",
        address: {
          street: "",
          city: "",
          country: ""
        },
        price: "",
        cuisine: "",
        owner: ""
      },
      menus: [],
      activeStep: 0,
      email: "",
      name: "",
      labelWidth: 0,
      isLoading: true,
      addressTerm: ''
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
      var email = vars.email;

      if (email) {
        _config__WEBPACK_IMPORTED_MODULE_14__["default"].get('users', {
          context: this,
          withIds: true,
          query: function query(ref) {
            return ref.where('email', '==', email);
          }
        }).then(function (data) {
          _this2.setState({
            user: data[0],
            isLoading: false
          });
        }).catch(function (err) {
          console.log(err);

          _this2.setState({
            user: {},
            isLoading: false
          });
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

      var names = lodash__WEBPACK_IMPORTED_MODULE_31___default.a.split(name, ' ', 2);

      var firstName = names[0];
      var lastName = names[1];
      var data = {
        email: email,
        firstName: firstName,
        lastName: lastName
      };

      var formattedData = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data);

      console.log(formattedData);
      axios__WEBPACK_IMPORTED_MODULE_17___default()({
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
    key: "handleComplete",
    value: function handleComplete() {
      this.createRestaurant();
      this.uploadMenus();
    }
  }, {
    key: "createRestaurant",
    value: function createRestaurant() {
      var _this$state2 = this.state,
          restaurant = _this$state2.restaurant,
          user = _this$state2.user,
          activeStep = _this$state2.activeStep;
      restaurant.owner = user.id;
      console.log(user);
      var data = restaurant;
      console.log(data);
      _config__WEBPACK_IMPORTED_MODULE_14__["default"].addToCollection('restaurants', data).then(function () {}).catch(function (err) {//handle error
      });
    }
  }, {
    key: "uploadMenus",
    value: function uploadMenus() {
      var files = this.state.files;

      lodash__WEBPACK_IMPORTED_MODULE_31___default.a.forEach(files, function (data) {
        var name = data.name,
            file = data.file;
        var metadata = {
          contentType: file.type
        };
        var uploadTask = storageRef.child('menus/' + file.name).put(file, metadata);
        uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          console.log('Upload is ' + progress + '% done');

          switch (snapshot.state) {
            case firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.storage.TaskState.PAUSED:
              // or 'paused'
              console.log('Upload is paused');
              break;

            case firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.storage.TaskState.RUNNING:
              // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function (error) {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;

            case 'storage/canceled':
              // User canceled the upload
              break;

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        }, function () {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL);
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var classes = this.props.classes;
      var steps = ['Tell us about your restaurant', 'Upload your menus', 'Customize your widget'];
      var _this$state3 = this.state,
          activeStep = _this$state3.activeStep,
          restaurant = _this$state3.restaurant,
          menus = _this$state3.menus,
          user = _this$state3.user,
          addressTerm = _this$state3.addressTerm;
      var email = user.email,
          firstName = user.firstName,
          lastName = user.lastName;
      var restaurantName = restaurant.restaurantName,
          location = restaurant.location,
          price = restaurant.price,
          cuisine = restaurant.cuisine,
          address = restaurant.address,
          username = restaurant.username;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PageWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, "Onboard | Somm | Your menu's personal assistant"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/apple-touch-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/site.webmanifest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "mask-icon",
        href: "/static/safari-pinned-tab.svg",
        color: "#f94343",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "msapplication-config",
        content: "/static/browserconfig.xml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "theme-color",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("script", {
        src: "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      })), this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(user).length > 0 ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PageTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, "Hop onboard"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardStepper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_19___default.a, {
        activeStep: activeStep,
        alternativeLabel: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, steps.map(function (label, i) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledStep, {
          key: label,
          classes: {
            root: 'step',
            completed: 'completed'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 487
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_21___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 488
          },
          __self: this
        }, label));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_16__["PoseGroup"], {
        activeStep: activeStep,
        preEnterPose: "preEnter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, activeStep === 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardStepperContent, {
        key: "0",
        step: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default.a, {
        container: true,
        spacing: 16,
        style: {
          position: 'relative',
          zIndex: '2',
          background: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 6,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
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
          lineNumber: 497
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 6,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
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
          lineNumber: 500
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledTextField, {
        variant: "outlined",
        label: "Email",
        value: email,
        onChange: function onChange(e) {
          return _this4.handleEmail(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 6,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledTextField, {
        variant: "outlined",
        label: "Username",
        value: username,
        onChange: function onChange(e) {
          return _this4.handleRestaurantUsername(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 6,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledTextField, {
        variant: "outlined",
        label: "Restaurant name",
        value: restaurantName,
        onChange: function onChange(e) {
          return _this4.handleRestaurantName(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_32___default.a, {
        value: addressTerm,
        onChange: this.handleChange,
        onSelect: this.handleSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            suggestions = _ref2.suggestions,
            getSuggestionItemProps = _ref2.getSuggestionItemProps,
            loading = _ref2.loading;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledFormControl, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 519
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledTextField, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({
          variant: "outlined",
          label: "Location",
          id: "places-autocomplete"
        }, getInputProps({
          placeholder: 'Search Places ...',
          className: 'location-search-input'
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 520
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "autocomplete-dropdown-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 529
          },
          __self: this
        }, loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 530
          },
          __self: this
        }, "Loading..."), suggestions.map(function (suggestion) {
          var className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item'; // inline style for demonstration purpose

          var style = suggestion.active ? {
            backgroundColor: '#fafafa',
            cursor: 'pointer'
          } : {
            backgroundColor: '#ffffff',
            cursor: 'pointer'
          };
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, getSuggestionItemProps(suggestion, {
            className: className,
            style: style
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 540
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 546
            },
            __self: this
          }, suggestion.description));
        })));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 6,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledTextField, {
        variant: "outlined",
        label: "Cuisine",
        value: cuisine,
        onChange: function onChange(e) {
          return _this4.handleRestaurantCuisine(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25___default.a, {
        item: true,
        sm: 12,
        md: 12,
        lg: 6,
        xl: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledFormControl, {
        variant: "outlined",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledInputLabel, {
        htmlFor: "outlined-age-simple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, "Price"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_30___default.a, {
        value: price,
        onChange: this.handleRestaurantPrice,
        input: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledOutlinedInput, {
          labelWidth: 38,
          name: "price",
          id: "outlined-price-simple",
          classes: {
            root: 'label',
            focused: 'focused'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 569
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28___default.a, {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, "None")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28___default.a, {
        value: '$',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, "$"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28___default.a, {
        value: '$-$$',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }, "$-$$"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28___default.a, {
        value: '$$',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, "$$"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28___default.a, {
        value: '$$-$$$',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }, "$$-$$$"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28___default.a, {
        value: '$$$',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        },
        __self: this
      }, "$$$"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28___default.a, {
        value: '$-$$$',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }, "$-$$$")))))), activeStep === 1 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardStepperContent, {
        key: "1",
        step: 1,
        style: {
          position: 'relative',
          zIndex: '3',
          background: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_MenuUploader__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
          lineNumber: 594
        },
        __self: this
      })), activeStep === 2 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardStepperContent, {
        key: "2",
        step: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        },
        __self: this
      }, "Widget customizer")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StepperButtons, {
        activeStep: activeStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        },
        __self: this
      }, this.state.activeStep > 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledButton, {
        onClick: this.handleBack,
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledButton, {
        variant: "contained",
        onClick: this.handleNext,
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        },
        __self: this
      }, activeStep === 2 ? "Finish" : "Next")))) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PageTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629
        },
        __self: this
      }, "Whoops!"), "It doesn't look like you're part of our early access program yet.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_AccessForm__WEBPACK_IMPORTED_MODULE_33__["default"], {
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
          lineNumber: 633
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OnboardBackground, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645
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
//# sourceMappingURL=onboard.js.4a34b53712b1fdac1c60.hot-update.js.map