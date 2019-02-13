webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");
var _jsxFileName = "/Users/Chris/sommelier-landing/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__PageWrapper",
  componentId: "sc-1wbo52z-0"
})([""]);
var Hero = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1wbo52z-1"
})(["width:100%;height:95vh;padding:60px 16px 240px 16px;box-sizing:border-box;position:relative;display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;background:#f94343;"]);
var HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "pages__HeroTitle",
  componentId: "sc-1wbo52z-2"
})(["width:100%;max-width:360px;font-size:2.5rem;font-weight:700;color:#fff;margin:0;margin-bottom:24px;"]);
var HeroButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "pages__HeroButton",
  componentId: "sc-1wbo52z-3"
})(["width:100%;max-width:360px;height:60px !important;min-height:60px;background:#fff !important;color:#1f1f1f !important;font-size:1.125rem !important;font-weight:500 !important;text-transform:none !important;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32) !important;position:relative;text-decoration:none !important;"]);
var HeroButtonLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "pages__HeroButtonLink",
  componentId: "sc-1wbo52z-4"
})(["position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;text-decoration:none;display:flex;align-items:center;justify-content:center;"]);
var DemoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__DemoContainer",
  componentId: "sc-1wbo52z-5"
})(["width:100%;min-height:600px;display:flex;flex-flow:column nowrap;position:relative;margin-top:-240px;z-index:8;padding:0 16px;box-sizing:border-box;@media only screen and (min-width:600px){flex-flow:row nowrap;}"]);
var Demo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Demo",
  componentId: "sc-1wbo52z-6"
})(["width:100%;max-width:360px;height:600px;display:block;background:aliceblue;border-radius:8px;order:-1;margin:auto;@media only screen and (min-width:600px){margin:0 16px 0;order:0;}"]);
var PosedDemoCards = react_pose__WEBPACK_IMPORTED_MODULE_4__["default"].div({
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -32,
    opacity: 0
  }
});
var DemoCards = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PosedDemoCards, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }));
}).withConfig({
  displayName: "pages__DemoCards",
  componentId: "sc-1wbo52z-7"
})(["display:flex;flex-flow:column nowrap;padding-top:16px;@media only screen and (min-width:600px){width:100%;max-width:240px;padding-top:0;}"]);
var PosedDemoCardContainer = react_pose__WEBPACK_IMPORTED_MODULE_4__["default"].div({});
var DemoCardContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PosedDemoCardContainer, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }));
}).withConfig({
  displayName: "pages__DemoCardContainer",
  componentId: "sc-1wbo52z-8"
})(["width:100%;border-radius:8px;padding:16px;box-sizing:border-box;box-shadow:0 2px 16px -2px rgba(31,31,31,0.32);background:#fff;display:flex;flex-flow:row nowrap;margin-bottom:16px;&:last-of-type{margin-bottom:0;}"]);
var DemoCardIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__DemoCardIcon",
  componentId: "sc-1wbo52z-9"
})(["display:inline-flex;align-items:center;justify-content:center;"]);
var DemoCardContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__DemoCardContent",
  componentId: "sc-1wbo52z-10"
})(["display:inline-flex;flex-flow:column nowrap;align-items:flex-start;font-size:.875rem;font-weight:500;color:#9f9f9f;"]);
var DemoCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "pages__DemoCardTitle",
  componentId: "sc-1wbo52z-11"
})(["font-size:1rem;font-weight:700;color:#1f1f1f;margin-bottom:8px;"]);

var DemoCard = function DemoCard(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCardContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCardIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, icon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCardContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, title), content));
};

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hero, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroTitle, {
        className: "hero__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Meet your menu's personal assistant"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroButton, {
        className: "hero__button",
        alt: "Get started",
        variant: "contained",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/get-started",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroButtonLink, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Add your menu")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCards, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCard, {
        icon: "code",
        title: "Simple",
        content: "With a single line of code, you can have Sommelier up and running on your website. No plugins or code bases to manage, upgrading your menu with Sommelier is as simple as copy and paste.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCard, {
        icon: "stars",
        title: "Feature-rich",
        content: "From instantly searchable and sortable menu items to powerful filters and thoughtful design, Sommelier has been designed from the ground up to offer your diners with the most features to find exactly what they\u2019re looking for in your menu.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCard, {
        icon: "stars",
        title: "Insightful",
        content: "See exactly what your diners are interested in like never before. Every item click and share are stored, so you can see what is engaging your diners and what you can focus your attention on.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Demo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "Demo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCards, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCard, {
        icon: "user",
        title: "Engaging",
        content: "Sommelier encourages your diners to engage with your website. This helps lead to more bookings and a larger social media participation, helping you reach your business goals.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCard, {
        icon: "lightning bolt",
        title: "Dynamic",
        content: "As your menu changes, so does Sommelier. Add specials, item options, and multiple menus, supercharging your menu to do what it does best: convert potential diners.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoCard, {
        icon: "diamond",
        title: "Valuable",
        content: "For less than a coffee a day, Sommelier can provide your diners with a feature-rich and engaging experience while offering your business valuable insights and time-saving simplicity.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.7e6eacb71dd7666aa5e3.hot-update.js.map