webpackHotUpdate("static/development/pages/initiate.js",{

/***/ "./node_modules/@material-ui/core/Button/Button.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Button/Button.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");

var _ButtonBase = _interopRequireDefault(__webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/index.js"));

var _helpers = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/utils/helpers.js");

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0, _extends2.default)({
      lineHeight: 1.75
    }, theme.typography.button, {
      boxSizing: 'border-box',
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // assure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: '6px 8px'
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    flat: {},

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    flatPrimary: {},

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    flatSecondary: {},

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: '5px 16px',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat((0, _colorManipulator.fade)(theme.palette.primary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat((0, _colorManipulator.fade)(theme.palette.secondary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="[contained | fab]"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      },
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      }
    },

    /* Styles applied to the root element if `variant="[contained | fab]"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="[contained | fab]"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    raised: {},
    // legacy

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    raisedPrimary: {},
    // legacy

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    raisedSecondary: {},
    // legacy

    /* Styles applied to the root element if `variant="[fab | extendedFab]"`. */
    fab: {
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      }
    },

    /* Styles applied to the root element if `variant="extendedFab"`. */
    extendedFab: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'auto',
      minWidth: 48,
      height: 48
    },

    /* Styles applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit',
      borderColor: 'currentColor'
    },

    /* Styles applied to the root element if `mini={true}` & `variant="[fab | extendedFab]"`. */
    mini: {
      width: 40,
      height: 40
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: '4px 8px',
      minWidth: 64,
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {
      padding: '8px 24px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    }
  };
};

exports.styles = styles;

function Button(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      disabled = props.disabled,
      disableFocusRipple = props.disableFocusRipple,
      focusVisibleClassName = props.focusVisibleClassName,
      fullWidth = props.fullWidth,
      mini = props.mini,
      size = props.size,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "disabled", "disableFocusRipple", "focusVisibleClassName", "fullWidth", "mini", "size", "variant"]);
  var fab = variant === 'fab' || variant === 'extendedFab';
  var contained = variant === 'contained' || variant === 'raised';
  var text = variant === 'text' || variant === 'flat';
  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.fab, fab), (0, _defineProperty2.default)(_classNames, classes.mini, fab && mini), (0, _defineProperty2.default)(_classNames, classes.extendedFab, variant === 'extendedFab'), (0, _defineProperty2.default)(_classNames, classes.text, text), (0, _defineProperty2.default)(_classNames, classes.textPrimary, text && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.textSecondary, text && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.flat, text), (0, _defineProperty2.default)(_classNames, classes.flatPrimary, text && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.flatSecondary, text && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.contained, contained || fab), (0, _defineProperty2.default)(_classNames, classes.containedPrimary, (contained || fab) && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.containedSecondary, (contained || fab) && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.raised, contained || fab), (0, _defineProperty2.default)(_classNames, classes.raisedPrimary, (contained || fab) && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.raisedSecondary, (contained || fab) && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.outlined, variant === 'outlined'), (0, _defineProperty2.default)(_classNames, classes.outlinedPrimary, variant === 'outlined' && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.outlinedSecondary, variant === 'outlined' && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes["size".concat((0, _helpers.capitalize)(size))], size !== 'medium'), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), (0, _defineProperty2.default)(_classNames, classes.colorInherit, color === 'inherit'), _classNames), classNameProp);
  return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
    className: className,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: (0, _classnames.default)(classes.focusVisible, focusVisibleClassName)
  }, other), _react.default.createElement("span", {
    className: classes.label
  }, children));
}

 true ? Button.propTypes = {
  /**
   * The content of the button.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: _propTypes.default.string,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: _propTypes.default.string,

  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: _propTypes.default.bool,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),

  /**
   * @ignore
   */
  type: _propTypes.default.string,

  /**
   * The variant to use.
   * __WARNING__: `flat` and `raised` are deprecated.
   * Instead use `text` and `contained` respectively.
   * `fab` and `extendedFab` are deprecated.
   * Instead use `<Fab>` and `<Fab variant="extended">`
   */
  variant: (0, _utils.chainPropTypes)(_propTypes.default.oneOf(['text', 'outlined', 'contained', 'fab', 'extendedFab', 'flat', 'raised']), function (props) {
    if (props.variant === 'flat') {
      return new Error('Material-UI: the `flat` variant will be removed in the next major release. ' + '`text` is equivalent and should be used instead.');
    }

    if (props.variant === 'raised') {
      return new Error('Material-UI: the `raised` variant will be removed in the next major release. ' + '`contained` is equivalent and should be used instead.');
    }

    if (props.variant === 'fab') {
      return new Error('Material-UI: the `fab` variant will be removed in the next major release. ' + 'The `<Fab>` component is equivalent and should be used instead.');
    }

    if (props.variant === 'extendedFab') {
      return new Error('Material-UI: the `fab` variant will be removed in the next major release. ' + 'The `<Fab>` component with `variant="extended"` is equivalent ' + 'and should be used instead.');
    }

    return null;
  })
} : undefined;
Button.defaultProps = {
  color: 'default',
  component: 'button',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'text'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiButton'
})(Button);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Button/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/core/Button/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});

var _Button = _interopRequireDefault(__webpack_require__(/*! ./Button */ "./node_modules/@material-ui/core/Button/Button.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/ButtonBase/ButtonBase.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _ownerWindow = _interopRequireDefault(__webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/utils/ownerWindow.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _NoSsr = _interopRequireDefault(__webpack_require__(/*! ../NoSsr */ "./node_modules/@material-ui/core/NoSsr/index.js"));

var _focusVisible = __webpack_require__(/*! ./focusVisible */ "./node_modules/@material-ui/core/ButtonBase/focusVisible.js");

var _TouchRipple = _interopRequireDefault(__webpack_require__(/*! ./TouchRipple */ "./node_modules/@material-ui/core/ButtonBase/TouchRipple.js"));

var _createRippleHandler = _interopRequireDefault(__webpack_require__(/*! ./createRippleHandler */ "./node_modules/@material-ui/core/ButtonBase/createRippleHandler.js"));

var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    }
  },

  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the root element if keyboard focused. */
  focusVisible: {}
};
/* istanbul ignore if */

exports.styles = styles;

if ( true && !_react.default.createContext) {
  throw new Error('Material-UI: react@16.3.0 or greater is required.');
}
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */


var ButtonBase =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ButtonBase, _React$Component);

  function ButtonBase() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ButtonBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ButtonBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    _this.keyDown = false;
    _this.focusVisibleCheckTime = 50;
    _this.focusVisibleMaxCheckTimes = 5;
    _this.handleMouseDown = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'MouseDown', 'start', function () {
      clearTimeout(_this.focusVisibleTimeout);

      if (_this.state.focusVisible) {
        _this.setState({
          focusVisible: false
        });
      }
    });
    _this.handleMouseUp = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'MouseUp', 'stop');
    _this.handleMouseLeave = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'MouseLeave', 'stop', function (event) {
      if (_this.state.focusVisible) {
        event.preventDefault();
      }
    });
    _this.handleTouchStart = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'TouchStart', 'start');
    _this.handleTouchEnd = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'TouchEnd', 'stop');
    _this.handleTouchMove = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'TouchMove', 'stop');
    _this.handleContextMenu = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'ContextMenu', 'stop');
    _this.handleBlur = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'Blur', 'stop', function () {
      clearTimeout(_this.focusVisibleTimeout);

      if (_this.state.focusVisible) {
        _this.setState({
          focusVisible: false
        });
      }
    });

    _this.onRippleRef = function (node) {
      _this.ripple = node;
    };

    _this.onFocusVisibleHandler = function (event) {
      _this.keyDown = false;

      _this.setState({
        focusVisible: true
      });

      if (_this.props.onFocusVisible) {
        _this.props.onFocusVisible(event);
      }
    };

    _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          component = _this$props.component,
          focusRipple = _this$props.focusRipple,
          onKeyDown = _this$props.onKeyDown,
          onClick = _this$props.onClick; // Check if key is already down to avoid repeats being counted as multiple activations

      if (focusRipple && !_this.keyDown && _this.state.focusVisible && _this.ripple && event.key === ' ') {
        _this.keyDown = true;
        event.persist();

        _this.ripple.stop(event, function () {
          _this.ripple.start(event);
        });
      }

      if (onKeyDown) {
        onKeyDown(event);
      } // Keyboard accessibility for non interactive elements


      if (event.target === event.currentTarget && component && component !== 'button' && (event.key === ' ' || event.key === 'Enter') && !(_this.button.tagName === 'A' && _this.button.href)) {
        event.preventDefault();

        if (onClick) {
          onClick(event);
        }
      }
    };

    _this.handleKeyUp = function (event) {
      if (_this.props.focusRipple && event.key === ' ' && _this.ripple && _this.state.focusVisible) {
        _this.keyDown = false;
        event.persist();

        _this.ripple.stop(event, function () {
          _this.ripple.pulsate(event);
        });
      }

      if (_this.props.onKeyUp) {
        _this.props.onKeyUp(event);
      }
    };

    _this.handleFocus = function (event) {
      if (_this.props.disabled) {
        return;
      } // Fix for https://github.com/facebook/react/issues/7769


      if (!_this.button) {
        _this.button = event.currentTarget;
      }

      event.persist();
      (0, _focusVisible.detectFocusVisible)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), _this.button, function () {
        _this.onFocusVisibleHandler(event);
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    };

    return _this;
  }

  (0, _createClass2.default)(ButtonBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.button = _reactDom.default.findDOMNode(this);
      (0, _focusVisible.listenForFocusKeys)((0, _ownerWindow.default)(this.button));

      if (this.props.action) {
        this.props.action({
          focusVisible: function focusVisible() {
            _this2.setState({
              focusVisible: true
            });

            _this2.button.focus();
          }
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.focusRipple && !this.props.disableRipple && !prevState.focusVisible && this.state.focusVisible) {
        this.ripple.pulsate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.focusVisibleTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          action = _this$props2.action,
          buttonRef = _this$props2.buttonRef,
          centerRipple = _this$props2.centerRipple,
          children = _this$props2.children,
          classes = _this$props2.classes,
          classNameProp = _this$props2.className,
          component = _this$props2.component,
          disabled = _this$props2.disabled,
          disableRipple = _this$props2.disableRipple,
          disableTouchRipple = _this$props2.disableTouchRipple,
          focusRipple = _this$props2.focusRipple,
          focusVisibleClassName = _this$props2.focusVisibleClassName,
          onBlur = _this$props2.onBlur,
          onFocus = _this$props2.onFocus,
          onFocusVisible = _this$props2.onFocusVisible,
          onKeyDown = _this$props2.onKeyDown,
          onKeyUp = _this$props2.onKeyUp,
          onMouseDown = _this$props2.onMouseDown,
          onMouseLeave = _this$props2.onMouseLeave,
          onMouseUp = _this$props2.onMouseUp,
          onTouchEnd = _this$props2.onTouchEnd,
          onTouchMove = _this$props2.onTouchMove,
          onTouchStart = _this$props2.onTouchStart,
          tabIndex = _this$props2.tabIndex,
          TouchRippleProps = _this$props2.TouchRippleProps,
          type = _this$props2.type,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"]);
      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.focusVisible, this.state.focusVisible), (0, _defineProperty2.default)(_classNames, focusVisibleClassName, this.state.focusVisible), _classNames), classNameProp);
      var ComponentProp = component;

      if (ComponentProp === 'button' && other.href) {
        ComponentProp = 'a';
      }

      var buttonProps = {};

      if (ComponentProp === 'button') {
        buttonProps.type = type || 'button';
        buttonProps.disabled = disabled;
      } else {
        buttonProps.role = 'button';
      }

      return _react.default.createElement(ComponentProp, (0, _extends2.default)({
        className: className,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onMouseDown: this.handleMouseDown,
        onMouseLeave: this.handleMouseLeave,
        onMouseUp: this.handleMouseUp,
        onTouchEnd: this.handleTouchEnd,
        onTouchMove: this.handleTouchMove,
        onTouchStart: this.handleTouchStart,
        onContextMenu: this.handleContextMenu,
        ref: buttonRef,
        tabIndex: disabled ? '-1' : tabIndex
      }, buttonProps, other), children, !disableRipple && !disabled ? _react.default.createElement(_NoSsr.default, null, _react.default.createElement(_TouchRipple.default, (0, _extends2.default)({
        innerRef: this.onRippleRef,
        center: centerRipple
      }, TouchRippleProps))) : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (typeof prevState.focusVisible === 'undefined') {
        return {
          focusVisible: false,
          lastDisabled: nextProps.disabled
        };
      } // The blur won't fire when the disabled state is set on a focused input.
      // We need to book keep the focused state manually.


      if (!prevState.prevState && nextProps.disabled && prevState.focusVisible) {
        return {
          focusVisible: false,
          lastDisabled: nextProps.disabled
        };
      }

      return {
        lastDisabled: nextProps.disabled
      };
    }
  }]);
  return ButtonBase;
}(_react.default.Component);

 true ? ButtonBase.propTypes = {
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports `focusVisible()` action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: _propTypes.default.func,

  /**
   * Use that property to pass a ref callback to the native button component.
   */
  buttonRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: _propTypes.default.bool,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _utils.componentPropType,

  /**
   * If `true`, the base button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * If `true`, the touch ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes.default.bool,

  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * `disableRipple` must also be `false`.
   */
  focusRipple: _propTypes.default.bool,

  /**
   * This property can help a person know which element has the keyboard focus.
   * The class name will be applied when the element gain the focus through a keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyUp: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseLeave: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseUp: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchEnd: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchMove: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchStart: _propTypes.default.func,

  /**
   * @ignore
   */
  role: _propTypes.default.string,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Properties applied to the `TouchRipple` element.
   */
  TouchRippleProps: _propTypes.default.object,

  /**
   * Used to control the button's purpose.
   * This property passes the value to the `type` attribute of the native button component.
   * Valid property values include `button`, `submit`, and `reset`.
   */
  type: _propTypes.default.string
} : undefined;
ButtonBase.defaultProps = {
  centerRipple: false,
  component: 'button',
  disableRipple: false,
  disableTouchRipple: false,
  focusRipple: false,
  tabIndex: '0',
  type: 'button'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiButtonBase'
})(ButtonBase);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/Ripple.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/ButtonBase/Ripple.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/Transition.js"));

/**
 * @ignore - internal component.
 */
var Ripple =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Ripple, _React$Component);

  function Ripple() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Ripple);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Ripple)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      visible: false,
      leaving: false
    };

    _this.handleEnter = function () {
      _this.setState({
        visible: true
      });
    };

    _this.handleExit = function () {
      _this.setState({
        leaving: true
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Ripple, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props = this.props,
          classes = _this$props.classes,
          classNameProp = _this$props.className,
          pulsate = _this$props.pulsate,
          rippleX = _this$props.rippleX,
          rippleY = _this$props.rippleY,
          rippleSize = _this$props.rippleSize,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);
      var _this$state = this.state,
          visible = _this$state.visible,
          leaving = _this$state.leaving;
      var rippleClassName = (0, _classnames.default)(classes.ripple, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.rippleVisible, visible), (0, _defineProperty2.default)(_classNames, classes.ripplePulsate, pulsate), _classNames), classNameProp);
      var rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
      };
      var childClassName = (0, _classnames.default)(classes.child, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.childLeaving, leaving), (0, _defineProperty2.default)(_classNames2, classes.childPulsate, pulsate), _classNames2));
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        onEnter: this.handleEnter,
        onExit: this.handleExit
      }, other), _react.default.createElement("span", {
        className: rippleClassName,
        style: rippleStyles
      }, _react.default.createElement("span", {
        className: childClassName
      })));
    }
  }]);
  return Ripple;
}(_react.default.Component);

 true ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: _propTypes.default.bool,

  /**
   * Diameter of the ripple.
   */
  rippleSize: _propTypes.default.number,

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: _propTypes.default.number,

  /**
   * Vertical position of the ripple center.
   */
  rippleY: _propTypes.default.number
} : undefined;
Ripple.defaultProps = {
  pulsate: false
};
var _default = Ripple;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/TouchRipple.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/ButtonBase/TouchRipple.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = exports.DELAY_RIPPLE = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! react-transition-group/TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _Ripple = _interopRequireDefault(__webpack_require__(/*! ./Ripple */ "./node_modules/@material-ui/core/ButtonBase/Ripple.js"));

var DURATION = 550;
var DELAY_RIPPLE = 80;
exports.DELAY_RIPPLE = DELAY_RIPPLE;

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      position: 'absolute',
      overflow: 'hidden',
      borderRadius: 'inherit',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      pointerEvents: 'none',
      zIndex: 0
    },

    /* Styles applied to the internal `Ripple` components `ripple` class. */
    ripple: {
      width: 50,
      height: 50,
      left: 0,
      top: 0,
      opacity: 0,
      position: 'absolute'
    },

    /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
    rippleVisible: {
      opacity: 0.3,
      transform: 'scale(1)',
      animation: "mui-ripple-enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut),
      // Backward compatible logic between JSS v9 and v10.
      // To remove with the release of Material-UI v4
      animationName: '$mui-ripple-enter'
    },

    /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },

    /* Styles applied to the internal `Ripple` components `child` class. */
    child: {
      opacity: 1,
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the internal `Ripple` components `childLeaving` class. */
    childLeaving: {
      opacity: 0,
      animation: "mui-ripple-exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut),
      // Backward compatible logic between JSS v9 and v10.
      // To remove with the release of Material-UI v4
      animationName: '$mui-ripple-exit'
    },

    /* Styles applied to the internal `Ripple` components `childPulsate` class. */
    childPulsate: {
      position: 'absolute',
      left: 0,
      top: 0,
      animation: "mui-ripple-pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite"),
      // Backward compatible logic between JSS v9 and v10.
      // To remove with the release of Material-UI v4
      animationName: '$mui-ripple-pulsate'
    },
    '@keyframes mui-ripple-enter': {
      '0%': {
        transform: 'scale(0)',
        opacity: 0.1
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0.3
      }
    },
    '@keyframes mui-ripple-exit': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes mui-ripple-pulsate': {
      '0%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(0.92)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  };
};

exports.styles = styles;

var TouchRipple =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(TouchRipple, _React$PureComponent);

  function TouchRipple() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TouchRipple);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TouchRipple)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      nextKey: 0,
      ripples: []
    };

    _this.pulsate = function () {
      _this.start({}, {
        pulsate: true
      });
    };

    _this.start = function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 ? arguments[2] : undefined;
      var _options$pulsate = options.pulsate,
          pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
          _options$center = options.center,
          center = _options$center === void 0 ? _this.props.center || options.pulsate : _options$center,
          _options$fakeElement = options.fakeElement,
          fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

      if (event.type === 'mousedown' && _this.ignoringMouseDown) {
        _this.ignoringMouseDown = false;
        return;
      }

      if (event.type === 'touchstart') {
        _this.ignoringMouseDown = true;
      }

      var element = fakeElement ? null : _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
      var rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }; // Get the size of the ripple

      var rippleX;
      var rippleY;
      var rippleSize;

      if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
      } // Touche devices


      if (event.touches) {
        // Prepare the ripple effect.
        _this.startTimerCommit = function () {
          _this.startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }; // Delay the execution of the ripple effect.


        _this.startTimer = setTimeout(function () {
          if (_this.startTimerCommit) {
            _this.startTimerCommit();

            _this.startTimerCommit = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      } else {
        _this.startCommit({
          pulsate: pulsate,
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize,
          cb: cb
        });
      }
    };

    _this.startCommit = function (params) {
      var pulsate = params.pulsate,
          rippleX = params.rippleX,
          rippleY = params.rippleY,
          rippleSize = params.rippleSize,
          cb = params.cb;

      _this.setState(function (state) {
        return {
          nextKey: state.nextKey + 1,
          ripples: [].concat((0, _toConsumableArray2.default)(state.ripples), [_react.default.createElement(_Ripple.default, {
            key: state.nextKey,
            classes: _this.props.classes,
            timeout: {
              exit: DURATION,
              enter: DURATION
            },
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize
          })])
        };
      }, cb);
    };

    _this.stop = function (event, cb) {
      clearTimeout(_this.startTimer);
      var ripples = _this.state.ripples; // The touch interaction occurs too quickly.
      // We still want to show ripple effect.

      if (event.type === 'touchend' && _this.startTimerCommit) {
        event.persist();

        _this.startTimerCommit();

        _this.startTimerCommit = null;
        _this.startTimer = setTimeout(function () {
          _this.stop(event, cb);
        });
        return;
      }

      _this.startTimerCommit = null;

      if (ripples && ripples.length) {
        _this.setState({
          ripples: ripples.slice(1)
        }, cb);
      }
    };

    return _this;
  }

  (0, _createClass2.default)(TouchRipple, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.startTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          center = _this$props.center,
          classes = _this$props.classes,
          className = _this$props.className,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["center", "classes", "className"]);
      return _react.default.createElement(_TransitionGroup.default, (0, _extends2.default)({
        component: "span",
        enter: true,
        exit: true,
        className: (0, _classnames.default)(classes.root, className)
      }, other), this.state.ripples);
    }
  }]);
  return TouchRipple;
}(_react.default.PureComponent);

 true ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string
} : undefined;
TouchRipple.defaultProps = {
  center: false
};

var _default = (0, _withStyles.default)(styles, {
  flip: false,
  name: 'MuiTouchRipple'
})(TouchRipple);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/createRippleHandler.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/ButtonBase/createRippleHandler.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable import/no-mutable-exports */
var createRippleHandler = function createRippleHandler(instance, eventName, action, cb) {
  return function (event) {
    if (cb) {
      cb.call(instance, event);
    }

    var ignore = false; // Ignore events that have been `event.preventDefault()` marked.

    if (event.defaultPrevented) {
      ignore = true;
    }

    if (instance.props.disableTouchRipple && eventName !== 'Blur') {
      ignore = true;
    }

    if (!ignore && instance.ripple) {
      instance.ripple[action](event);
    }

    if (typeof instance.props["on".concat(eventName)] === 'function') {
      instance.props["on".concat(eventName)](event);
    }

    return true;
  };
};
/* istanbul ignore if */


if (typeof window === 'undefined') {
  createRippleHandler = function createRippleHandler() {
    return function () {};
  };
}

var _default = createRippleHandler;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/focusVisible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/ButtonBase/focusVisible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectFocusVisible = detectFocusVisible;
exports.listenForFocusKeys = listenForFocusKeys;

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/utils/ownerDocument.js"));

var internal = {
  focusKeyPressed: false,
  keyUpEventTimeout: -1
};

function findActiveElement(doc) {
  var activeElement = doc.activeElement;

  while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement) {
    activeElement = activeElement.shadowRoot.activeElement;
  }

  return activeElement;
}

function detectFocusVisible(instance, element, callback) {
  var attempt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
   true ? (0, _warning.default)(instance.focusVisibleCheckTime, 'Material-UI: missing instance.focusVisibleCheckTime.') : undefined;
   true ? (0, _warning.default)(instance.focusVisibleMaxCheckTimes, 'Material-UI: missing instance.focusVisibleMaxCheckTimes.') : undefined;
  instance.focusVisibleTimeout = setTimeout(function () {
    var doc = (0, _ownerDocument.default)(element);
    var activeElement = findActiveElement(doc);

    if (internal.focusKeyPressed && (activeElement === element || element.contains(activeElement))) {
      callback();
    } else if (attempt < instance.focusVisibleMaxCheckTimes) {
      detectFocusVisible(instance, element, callback, attempt + 1);
    }
  }, instance.focusVisibleCheckTime);
}

var FOCUS_KEYS = [9, // 'Tab',
13, // 'Enter',
27, // 'Escape',
32, // ' ',
37, // 'ArrowLeft',
38, // 'ArrowUp',
39, // 'ArrowRight',
40];

function isFocusKey(event) {
  // Use event.keyCode to support IE 11
  return FOCUS_KEYS.indexOf(event.keyCode) > -1;
}

var handleKeyUpEvent = function handleKeyUpEvent(event) {
  if (isFocusKey(event)) {
    internal.focusKeyPressed = true; // Let's consider that the user is using a keyboard during a window frame of 500ms.

    clearTimeout(internal.keyUpEventTimeout);
    internal.keyUpEventTimeout = setTimeout(function () {
      internal.focusKeyPressed = false;
    }, 500);
  }
};

function listenForFocusKeys(win) {
  // The event listener will only be added once per window.
  // Duplicate event listeners will be ignored by addEventListener.
  // Also, this logic is client side only, we don't need a teardown.
  win.addEventListener('keyup', handleKeyUpEvent);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/ButtonBase/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ButtonBase.default;
  }
});

var _ButtonBase = _interopRequireDefault(__webpack_require__(/*! ./ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/NoSsr/NoSsr.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/NoSsr/NoSsr.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

/**
 * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
 *
 * This component can be useful in a variety of situations:
 * - Escape hatch for broken dependencies not supporting SSR.
 * - Improve the time-to-first paint on the client by only rendering above the fold.
 * - Reduce the rendering time on the server.
 * - Under too heavy server load, you can turn on service degradation.
 */
var NoSsr =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NoSsr, _React$Component);

  function NoSsr() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, NoSsr);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NoSsr)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.mounted = false;
    _this.state = {
      mounted: false
    };
    return _this;
  }

  (0, _createClass2.default)(NoSsr, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.mounted = true;

      if (this.props.defer) {
        // Wondering why we use two RAFs? Check this video out:
        // https://www.youtube.com/watch?v=cCOL7MC4Pl0
        //
        // The componentDidMount() method is called after the DOM nodes are inserted.
        // The UI might not have rendering the changes. We request a frame.
        requestAnimationFrame(function () {
          // The browser should be about to render the DOM nodes
          // that React committed at this point.
          // We don't want to interrupt. Let's wait the next frame.
          requestAnimationFrame(function () {
            // The UI is up-to-date at this point.
            // We can continue rendering the children.
            if (_this2.mounted) {
              _this2.setState({
                mounted: true
              });
            }
          });
        });
      } else {
        this.setState({
          mounted: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          fallback = _this$props.fallback;
      return this.state.mounted ? children : fallback;
    }
  }]);
  return NoSsr;
}(_react.default.Component);

 true ? NoSsr.propTypes = {
  children: _propTypes.default.node.isRequired,

  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   */
  defer: _propTypes.default.bool,

  /**
   * The fallback content to display.
   */
  fallback: _propTypes.default.node
} : undefined;

if (true) {
   true ? NoSsr.propTypes = (0, _utils.exactProp)(NoSsr.propTypes) : undefined;
}

NoSsr.defaultProps = {
  defer: false,
  fallback: null
};
var _default = NoSsr;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/NoSsr/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/NoSsr/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _NoSsr.default;
  }
});

var _NoSsr = _interopRequireDefault(__webpack_require__(/*! ./NoSsr */ "./node_modules/@material-ui/core/NoSsr/NoSsr.js"));

/***/ }),

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
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_MenuAdder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/MenuAdder */ "./components/MenuAdder.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");






var _jsxFileName = "/Users/Chris/trysomm/pages/initiate.js";











var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "initiate__PageWrapper",
  componentId: "x6xz0w-0"
})(["padding:156px 24px 24px;box-sizing:border-box;border:10px solid #1f1f1f;min-height:100vh;@media only screen and (min-width:960px){padding:156px 16px 16px;}"]);
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a).withConfig({
  displayName: "initiate__StyledButton",
  componentId: "x6xz0w-1"
})(["width:100% !important;height:56px !important;color:#fff !important;font-family:'Source Sans Pro',sans-serif !important;font-size:1.25rem !important;font-weight:700 !important;background:#1f1f1f !important;border-radius:0px !important;text-transform:none !important;margin-bottom:8px !important;box-shadow:none !important;position:relative !important;&:after{content:\"\";display:block;position:absolute;height:56px;width:100%;background:#f94343;z-index:-1;top:4px;left:4px;}"]);
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
      lineNumber: 63
    },
    __self: this
  }));
}).withConfig({
  displayName: "initiate__PageTitle",
  componentId: "x6xz0w-2"
})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin:0 auto 16px;display:inline-flex;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]);
var GetStartedFormProgress = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "initiate__GetStartedFormProgress",
  componentId: "x6xz0w-3"
})([""]);
var InitiateForm = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "initiate__InitiateForm",
  componentId: "x6xz0w-4"
})(["display:flex;flex-flow:column nowrap;align-items:center;"]);

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
    value: function handleName(value, i) {
      var menus = this.state.menus;
      menus[i].name = value;
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageWrapper, {
        className: "getStarted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Initiate | Somm | Your menu's personal assistant")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(InitiateForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_8__["PoseGroup"], {
        preEnterPose: "preEnter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, this.state.currentStep == "1" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageTitle, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Add your menu"), this.state.currentStep == "2" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PageTitle, {
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Choose your plan")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_MenuAdder__WEBPACK_IMPORTED_MODULE_15__["default"], {
        files: this.state.menus,
        handleDrop: function handleDrop(accepted, rejected) {
          return _this2.handleDrop(accepted, rejected);
        },
        handleRemove: function handleRemove(i) {
          return _this2.handleRemove(i);
        },
        handleName: function handleName(value, i) {
          return _this2.handleName(value, i);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      })));
    }
  }]);

  return GetStarted;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GetStarted);

/***/ })

})
//# sourceMappingURL=initiate.js.d8936d4e0227628684a2.hot-update.js.map