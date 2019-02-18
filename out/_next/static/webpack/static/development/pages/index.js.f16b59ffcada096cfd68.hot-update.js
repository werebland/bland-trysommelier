webpackHotUpdate("static/development/pages/index.js",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var re_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-base */ "./node_modules/re-base/index.js");
/* harmony import */ var re_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");





if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
  var app = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp({
    apiKey: process.env.FIREBASE_API,
    authDomain: "bland-sommelier.firebaseapp.com",
    databaseURL: "https://bland-sommelier.firebaseio.com",
    projectId: "bland-sommelier",
    storageBucket: "bland-sommelier.appspot.com"
  });
  app.settings = {
    timestampsInSnapshots: true
  };
} else {
  var app = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a;
}

var db = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore(app);
var settings = {
  timestampsInSnapshots: true
};
db.settings(settings);
var base = re_base__WEBPACK_IMPORTED_MODULE_0___default.a.createClass(db);
/* harmony default export */ __webpack_exports__["default"] = (base);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/auth.esm.js");


/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/***/ })

})
//# sourceMappingURL=index.js.f16b59ffcada096cfd68.hot-update.js.map