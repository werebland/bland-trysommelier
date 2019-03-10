webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Features */ "./components/Features.jsx");
/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Pricing */ "./components/Pricing.jsx");
/* harmony import */ var _components_AccessForm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/AccessForm */ "./components/AccessForm.jsx");
/* harmony import */ var _components_SommWidget__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/SommWidget */ "./components/SommWidget.jsx");






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
})(["position:absolute;top:0;right:0;bottom:0;left:0;background-color:#fff;background-image:-webkit-linear-gradient(120deg,#fff 35%,#f94343 35%);min-height:400px;"]);
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
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Somm | Your menu's personal assistant")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WidgetCallout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Try out Somm now"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SommWidget__WEBPACK_IMPORTED_MODULE_22__["default"], {
        username: "xoh",
        iconColor: "#fff",
        backgroundColor: "#f94343",
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Hero, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
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
          lineNumber: 262
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
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Your restaurant deserves", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "a better menu")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroCopy, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Supercharge your business with Somm, a personal assistant for your menu with powerful features and valuable insights."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_AccessForm__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
          lineNumber: 272
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
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Demo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeroBackground, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        width: "1320px",
        height: "678px",
        viewBox: "0 0 1320 678",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Page-3",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Desktop-HD",
        transform: "translate(-120.000000, -92.000000)",
        fill: "#FFFFFF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        id: "Path-2",
        points: "1440 92 120 770 1440 770",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Pricing__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.11efd7237b72413dce0d.hot-update.js.map