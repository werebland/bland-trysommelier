webpackHotUpdate("static/development/pages/initiate.js",{

/***/ "./pages/initiate.js":
/*!***************************!*\
  !*** ./pages/initiate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/Stepper/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/Step/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/StepLabel/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_MenuAdder__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/MenuAdder */ "./components/MenuAdder.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");
/* harmony import */ var _components_RestaurantForm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/RestaurantForm */ "./components/RestaurantForm.jsx");
/* harmony import */ var _components_StepperContent__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/StepperContent */ "./components/StepperContent.jsx");









var _jsxFileName = "/Users/Chris/trysomm/pages/initiate.js";



















var storage = firebase__WEBPACK_IMPORTED_MODULE_13___default.a.storage();
var storageRef = storage.ref();
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "initiate__PageWrapper",
  componentId: "x6xz0w-0"
})(["padding:156px 24px 24px;box-sizing:border-box;border:10px solid #1f1f1f;min-height:100vh;display:flex;flex-flow:column nowrap;align-items:center;@media only screen and (min-width:960px){padding:156px 16px 16px;}"]);
var StyledTextField = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_19___default.a).withConfig({
  displayName: "initiate__StyledTextField",
  componentId: "x6xz0w-1"
})(["width:100% !important;max-width:360px !important;margin-bottom:16px !important;border-radius:8px !important;font-family:'Source Sans Pro',sans-serif !important;& fieldset{border-radius:0 !important;border:4px solid #1f1f1f !important;}& input{border-radius:0 !important;font-family:'Source Sans Pro',sans-serif !important;}"]);
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18___default.a).withConfig({
  displayName: "initiate__StyledButton",
  componentId: "x6xz0w-2"
})(["height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:", "!important;border-radius:0px !important;text-transform:none !important;margin-bottom:8px !important;box-shadow:none !important;position:relative !important;border:0 !important;transition:0.2s ease-out all;padding:0 24px !important;&:after{content:\"\";display:block;position:absolute;height:56px;width:100%;background:", ";z-index:-1;top:4px;left:4px;}"], function (props) {
  return props.disabled ? '#dfdfdf' : '#1f1f1f';
}, function (props) {
  return props.disabled ? '#1f1f1f' : '#f94343';
});
var PosedPageTitle = react_pose__WEBPACK_IMPORTED_MODULE_11__["default"].h1({
  closed: {
    flex: 1,
    fontSize: '20px'
  },
  open: {
    flex: 5,
    fontSize: '40px'
  }
});
var PageTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(PosedPageTitle, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }));
}).withConfig({
  displayName: "initiate__PageTitle",
  componentId: "x6xz0w-3"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin:0 auto 16px;display:inline-flex;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);
var StepperButtons = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "initiate__StepperButtons",
  componentId: "x6xz0w-4"
})(["width:100%;display:flex;justify-content:space-between;"]);
var StepperContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "initiate__StepperContainer",
  componentId: "x6xz0w-5"
})(["width:100%;font-family:'Source Sans Pro',sans-serif;& .initiate__stepperStep span span svg.MuiStepIcon-active-674{color:#f94343 !important;}"]);
var StyledStep = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_21___default.a).withConfig({
  displayName: "initiate__StyledStep",
  componentId: "x6xz0w-6"
})(["background:", ";"], function (props) {
  return props.active ? 'red' : 'black';
});
var InitiateFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "initiate__InitiateFormContainer",
  componentId: "x6xz0w-7"
})(["width:100%;max-width:720px;"]);

function getSteps() {
  return ['Tell us about your restaurant', 'Add your menus', 'Select a plan'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';

    case 1:
      return 'What is an ad group anyways?';

    case 2:
      return 'This is the bit I really care about!';

    default:
      return 'Unknown step';
  }
}

var GetStarted =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GetStarted, _Component);

  function GetStarted(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GetStarted);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(GetStarted).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), "isStepOptional", function (step) {
      return false;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), "handleNext", function () {
      var activeStep = _this.state.activeStep;
      var skipped = _this.state.skipped;

      if (_this.isStepSkipped(activeStep)) {
        skipped = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(skipped.values());
        skipped.delete(activeStep);
      }

      _this.setState({
        activeStep: activeStep + 1,
        skipped: skipped
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), "handleBack", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep - 1
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), "handleReset", function () {
      _this.setState({
        activeStep: 0
      });
    });

    _this.state = {
      activeStep: 0,
      skipped: new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(),
      menus: [],
      status: "Upload",
      uid: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GetStarted, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      firebase__WEBPACK_IMPORTED_MODULE_13___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          console.log(uid);
          this.setState({
            currentStep: 1,
            uid: uid
          });
          this.fetchRestaurant(uid);
        } else {
          // User is signed out.
          // ...
          console.log('Signed out');
          this.setState({
            currentStep: 0
          });
        } // ...

      }.bind(this)).bind(this);
    }
  }, {
    key: "fetchRestaurant",
    value: function fetchRestaurant(uid) {
      var _this2 = this;

      _config__WEBPACK_IMPORTED_MODULE_15__["default"].get('restaurants', {
        context: this,
        withIds: true,
        query: function query(ref) {
          return ref.where('owner', '==', uid);
        }
      }).then(function (data) {
        _this2.setState({
          restaurant: data[0]
        });
      }).catch(function (err) {//handle error
      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(accepted, rejected) {
      console.log(accepted);
      var menus = this.state.menus;

      lodash__WEBPACK_IMPORTED_MODULE_12___default.a.forEach(accepted, function (file) {
        var menu = {
          name: file.name,
          file: file,
          progress: 0
        };
        menus.push(menu);
      });

      console.log(menus);
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "handleUpload",
    value: function handleUpload() {
      var _this$state = this.state,
          menus = _this$state.menus,
          uid = _this$state.uid;
      this.setState({
        status: "Uploading..."
      });

      lodash__WEBPACK_IMPORTED_MODULE_12___default.a.forEach(menus, function (menu) {
        var file = menu.file;
        var metadata = {
          type: file.type
        };
        var menuRef = storageRef.child('menus/' + uid + '/' + menu.name);
        console.log(menuRef);
        console.log(metadata);
        var uploadTask = menuRef.put(file, metadata); // Listen for state changes, errors, and completion of the upload.

        uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_13___default.a.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          console.log('Upload is ' + progress + '% done');

          switch (snapshot.state) {
            case firebase__WEBPACK_IMPORTED_MODULE_13___default.a.storage.TaskState.PAUSED:
              // or 'paused'
              console.log('Upload is paused');
              break;

            case firebase__WEBPACK_IMPORTED_MODULE_13___default.a.storage.TaskState.RUNNING:
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
        }).bind(this);
      });

      this.setState({
        status: "Uploaded"
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
    value: function handleName(value, i) {
      var menus = this.state.menus;
      menus[i].name = value;
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "handleRestaurantChange",
    value: function handleRestaurantChange(target) {
      var value = target.value,
          name = target.name;
      var restaurant = this.state.restaurant;
      restaurant[name] = value;
      this.setState({
        restaurant: restaurant
      });
    }
  }, {
    key: "isStepSkipped",
    value: function isStepSkipped(step) {
      return this.state.skipped.has(step);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var classes = this.props.classes;
      var steps = getSteps();
      var activeStep = this.state.activeStep;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(PageWrapper, {
        className: "getStarted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "Initiate | Somm | Your menu's personal assistant")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_25__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(PageTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "Get access"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(InitiateFormContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, this.state.restaurant && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(StepperContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_20___default.a, {
        activeStep: activeStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, steps.map(function (label, index) {
        var props = {};
        var labelProps = {};

        if (_this3.isStepOptional(index)) {
          labelProps.optional = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23___default.a, {
            variant: "caption",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 380
            },
            __self: this
          }, "Optional");
        }

        if (_this3.isStepSkipped(index)) {
          props.completed = false;
        }

        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(StyledStep, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
          key: label
        }, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 386
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_22___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, labelProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 387
          },
          __self: this
        }), label));
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, activeStep === steps.length ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, "All steps completed - you're finished"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18___default.a, {
        onClick: this.handleReset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, "Reset")) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_StepperContent__WEBPACK_IMPORTED_MODULE_27__["default"], {
        activeStep: this.state.activeStep,
        restaurant: this.state.restaurant,
        menus: this.state.menus,
        handleRestaurantChange: function handleRestaurantChange(target) {
          return _this3.handleRestaurantChange(target);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(StepperButtons, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(StyledButton, {
        disabled: activeStep === 0,
        onClick: this.handleBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, this.isStepOptional(activeStep) && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(StyledButton, {
        variant: "contained",
        color: "primary",
        onClick: this.handleSkip,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, "Skip"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(StyledButton, {
        variant: "contained",
        color: "primary",
        onClick: this.handleNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, activeStep === steps.length - 1 ? 'Finish' : 'Next'))))))));
    }
  }]);

  return GetStarted;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GetStarted);

/***/ })

})
//# sourceMappingURL=initiate.js.c0c004153b77b367558f.hot-update.js.map