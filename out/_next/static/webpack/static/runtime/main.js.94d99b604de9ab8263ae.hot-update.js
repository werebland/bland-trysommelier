webpackHotUpdate("static/runtime/main.js",{

/***/ "./node_modules/next-server/dist/lib/head-manager-context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/head-manager-context.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next-server/dist/lib/loadable.js":
/*!*******************************************************!*\
  !*** ./node_modules/next-server/dist/lib/loadable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _isArray = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _getIterator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = new _map.default();
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    (0, _keys.default)(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = _promise.default.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return react_1.default.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _a;

  var opts = (0, _assign.default)({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  } // Server only


  if (typeof window === 'undefined') {
    ALL_INITIALIZERS.push(init);
  } // Client only


  if (!initialized && typeof window !== 'undefined' && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator2.default)(moduleIds), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var moduleId = _step.value;
        READY_INITIALIZERS.set(moduleId, function () {
          return init();
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return _a =
  /*#__PURE__*/
  function (_react_1$default$Comp) {
    (0, _inherits2.default)(LoadableComponent, _react_1$default$Comp);

    function LoadableComponent(props) {
      var _this;

      (0, _classCallCheck2.default)(this, LoadableComponent);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LoadableComponent).call(this, props));

      _this.retry = function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      };

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    (0, _createClass2.default)(LoadableComponent, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this._mounted = true;

        this._loadModule();
      }
    }, {
      key: "_loadModule",
      value: function _loadModule() {
        var _this2 = this;

        if (this.context.loadable && (0, _isArray.default)(opts.modules)) {
          opts.modules.forEach(function (moduleName) {
            _this2.context.loadable.report(moduleName);
          });
        }

        if (!res.loading) {
          return;
        }

        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this.setState({
              pastDelay: true
            });
          } else {
            this._delay = setTimeout(function () {
              _this2.setState({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this2.setState({
              timedOut: true
            });
          }, opts.timeout);
        }

        var update = function update() {
          if (!_this2._mounted) {
            return;
          }

          _this2.setState({
            error: res.error,
            loaded: res.loaded,
            loading: res.loading
          });

          _this2._clearTimeouts();
        };

        res.promise.then(function () {
          update();
        }) // eslint-disable-next-line handle-callback-err
        .catch(function (err) {
          update();
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._mounted = false;

        this._clearTimeouts();
      }
    }, {
      key: "_clearTimeouts",
      value: function _clearTimeouts() {
        clearTimeout(this._delay);
        clearTimeout(this._timeout);
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.loading || this.state.error) {
          return react_1.default.createElement(opts.loading, {
            isLoading: this.state.loading,
            pastDelay: this.state.pastDelay,
            timedOut: this.state.timedOut,
            error: this.state.error,
            retry: this.retry
          });
        } else if (this.state.loaded) {
          return opts.render(this.state.loaded, this.props);
        } else {
          return null;
        }
      }
    }], [{
      key: "preload",
      value: function preload() {
        return init();
      }
    }]);
    return LoadableComponent;
  }(react_1.default.Component), _a.contextTypes = {
    loadable: prop_types_1.default.shape({
      report: prop_types_1.default.func.isRequired
    })
  }, _a;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return _promise.default.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new _promise.default(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function (webpackIds) {
  return new _promise.default(function (resolve, reject) {
    var initializers = webpackIds.reduce(function (allInitalizers, moduleId) {
      var initializer = READY_INITIALIZERS.get(moduleId);

      if (!initializer) {
        return allInitalizers;
      }

      allInitalizers.push(initializer);
      return allInitalizers;
    }, []);
    initialized = true; // Make sure the object is cleared

    READY_INITIALIZERS.clear(); // We always will resolve, errors should be handled within loading UIs.

    flushInitializers(initializers).then(resolve, resolve);
  });
};

exports.default = Loadable;

/***/ }),

/***/ "./node_modules/next/dist/client/error-boundary.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/client/error-boundary.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var ErrorBoundary =
/*#__PURE__*/
function (_react_1$default$Comp) {
  (0, _inherits2.default)(ErrorBoundary, _react_1$default$Comp);

  function ErrorBoundary() {
    (0, _classCallCheck2.default)(this, ErrorBoundary);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorBoundary).apply(this, arguments));
  }

  (0, _createClass2.default)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var onError = this.props.onError; // onError is required

      onError(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react_1.default.Children.only(children);
    }
  }]);
  return ErrorBoundary;
}(react_1.default.Component);

exports.default = ErrorBoundary;

/***/ }),

/***/ "./node_modules/next/dist/client/index.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var head_manager_1 = __importDefault(__webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js"));

var router_1 = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");

var mitt_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/mitt */ "./node_modules/next-server/dist/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");

var page_loader_1 = __importDefault(__webpack_require__(/*! ./page-loader */ "./node_modules/next/dist/client/page-loader.js"));

var envConfig = __importStar(__webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js"));

var error_boundary_1 = __importDefault(__webpack_require__(/*! ./error-boundary */ "./node_modules/next/dist/client/error-boundary.js"));

var loadable_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/loadable */ "./node_modules/next-server/dist/lib/loadable.js"));

var head_manager_context_1 = __webpack_require__(/*! next-server/dist/lib/head-manager-context */ "./node_modules/next-server/dist/lib/head-manager-context.js"); // Polyfill Promise globally
// This is needed because Webpack's dynamic loading(common chunks) code
// depends on Promise.
// So, we need to polyfill it.
// See: https://webpack.js.org/guides/code-splitting/#dynamic-imports


if (!window.Promise) {
  window.Promise = _promise.default;
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var props = data.props,
    err = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/"); //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig
});
var asPath = utils_1.getURL();
var pageLoader = new page_loader_1.default(buildId, prefix);

var register = function register(_ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.registerPage(r, f);
};

if (window.__NEXT_P) {
  window.__NEXT_P.map(register);
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var headManager = new head_manager_1.default();
var appContainer = document.getElementById('__next');
var lastAppProps;
var webpackHMR;
var Component;
var App;
exports.emitter = mitt_1.default();
exports.default =
/*#__PURE__*/
(0, _asyncToGenerator2.default)(
/*#__PURE__*/
_regenerator.default.mark(function _callee() {
  var _ref4,
      passedWebpackHMR,
      initialErr,
      _require,
      isValidElementType,
      _args = arguments;

  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref4 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, passedWebpackHMR = _ref4.webpackHMR;

          // This makes sure this specific line is removed in production
          if (true) {
            webpackHMR = passedWebpackHMR;
          }

          _context.next = 4;
          return pageLoader.loadPage('/_app');

        case 4:
          App = _context.sent;
          initialErr = err;
          _context.prev = 6;
          _context.next = 9;
          return pageLoader.loadPage(page);

        case 9:
          Component = _context.sent;

          if (false) {}

          _require = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

          if (isValidElementType(Component)) {
            _context.next = 14;
            break;
          }

          throw new Error("The default export is not a React Component in page: \"".concat(page, "\""));

        case 14:
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](6);
          // This catches errors like throwing in the top level of a module
          initialErr = _context.t0;

        case 19:
          _context.next = 21;
          return loadable_1.default.preloadReady(dynamicIds || []);

        case 21:
          exports.router = router_1.createRouter(page, query, asPath, {
            initialProps: props,
            pageLoader: pageLoader,
            App: App,
            Component: Component,
            err: initialErr
          });
          exports.router.subscribe(function (_ref5) {
            var App = _ref5.App,
                Component = _ref5.Component,
                props = _ref5.props,
                err = _ref5.err;
            render({
              App: App,
              Component: Component,
              props: props,
              err: err,
              emitter: exports.emitter
            });
          });
          render({
            App: App,
            Component: Component,
            props: props,
            err: initialErr,
            emitter: exports.emitter
          });
          return _context.abrupt("return", exports.emitter);

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[6, 16]]);
}));

function render(_x) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(props) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!props.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(props);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(props);

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);
            _context2.next = 13;
            return renderError((0, _assign.default)({}, props, {
              err: _context2.t0
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

exports.render = render; // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.

function renderError(_x2) {
  return _renderError.apply(this, arguments);
}

function _renderError() {
  _renderError = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(props) {
    var App, err, initProps;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            App = props.App, err = props.err;

            if (false) {}

            throw webpackHMR.prepareError(err);

          case 3:
            // Make sure we log the error to the console, otherwise users can't track down issues.
            console.error(err);
            _context3.next = 6;
            return pageLoader.loadPage('/_error');

          case 6:
            exports.ErrorComponent = _context3.sent;

            if (!props.props) {
              _context3.next = 11;
              break;
            }

            _context3.t0 = props.props;
            _context3.next = 14;
            break;

          case 11:
            _context3.next = 13;
            return utils_1.loadGetInitialProps(App, {
              Component: exports.ErrorComponent,
              router: exports.router,
              ctx: {
                err: err,
                pathname: page,
                query: query,
                asPath: asPath
              }
            });

          case 13:
            _context3.t0 = _context3.sent;

          case 14:
            initProps = _context3.t0;
            _context3.next = 17;
            return doRender((0, _assign.default)({}, props, {
              err: err,
              Component: exports.ErrorComponent,
              props: initProps
            }));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _renderError.apply(this, arguments);
}

exports.renderError = renderError;
var isInitialRender = true;

function renderReactElement(reactEl, domEl) {
  // The check for `.hydrate` is there to support React alternatives like preact
  if (isInitialRender && typeof react_dom_1.default.hydrate === 'function') {
    react_dom_1.default.hydrate(reactEl, domEl);
    isInitialRender = false;
  } else {
    react_dom_1.default.render(reactEl, domEl);
  }
}

function doRender(_x3) {
  return _doRender.apply(this, arguments);
}

function _doRender() {
  _doRender = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(_ref6) {
    var App, Component, props, err, _ref6$emitter, emitterProp, _exports$router, pathname, _query, _asPath, appProps, onError;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            App = _ref6.App, Component = _ref6.Component, props = _ref6.props, err = _ref6.err, _ref6$emitter = _ref6.emitter, emitterProp = _ref6$emitter === void 0 ? exports.emitter : _ref6$emitter;

            if (!(!props && Component && Component !== exports.ErrorComponent && lastAppProps.Component === exports.ErrorComponent)) {
              _context5.next = 6;
              break;
            }

            _exports$router = exports.router, pathname = _exports$router.pathname, _query = _exports$router.query, _asPath = _exports$router.asPath;
            _context5.next = 5;
            return utils_1.loadGetInitialProps(App, {
              Component: Component,
              router: exports.router,
              ctx: {
                err: err,
                pathname: pathname,
                query: _query,
                asPath: _asPath
              }
            });

          case 5:
            props = _context5.sent;

          case 6:
            Component = Component || lastAppProps.Component;
            props = props || lastAppProps.props;
            appProps = (0, _assign.default)({
              Component: Component,
              err: err,
              router: exports.router,
              headManager: headManager
            }, props); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

            lastAppProps = appProps;
            emitterProp.emit('before-reactdom-render', {
              Component: Component,
              ErrorComponent: exports.ErrorComponent,
              appProps: appProps
            }); // In development runtime errors are caught by react-error-overlay.

            if (true) {
              renderReactElement(react_1.default.createElement(head_manager_context_1.HeadManagerContext.Provider, {
                value: headManager.updateHead
              }, react_1.default.createElement(App, (0, _assign.default)({}, appProps))), appContainer);
            } else {}

            emitterProp.emit('after-reactdom-render', {
              Component: Component,
              ErrorComponent: exports.ErrorComponent,
              appProps: appProps
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _doRender.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js?f399"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/react/index.js":
false,

/***/ "./node_modules/react/index.js?f399":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5d2e8a47bb91086adeaa ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d2e8a47bb91086adeaa */ "dll-reference dll_5d2e8a47bb91086adeaa"))("./node_modules/react/index.js");

/***/ })

})
//# sourceMappingURL=main.js.94d99b604de9ab8263ae.hot-update.js.map