(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/auth/children/authpage/authpage.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/auth/children/authpage/authpage.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n\n  <div class=\"row no-gutters\">\n    <div class=\"col-sm-12 col-md-12 col-lg-7 col-xl-7 left\">\n      <div class=\"max\">\n          <h2 class=\"name text-white\">AUTH GUARD</h2>\n          <div class=\"write-up text-white\">\n            Login to access all your saved Accounts and there credentials.\n          </div>\n      </div>\n    </div>\n    <div class=\"col-sm-1 col-md-1 col-lg-5 col-xl-5 right\"></div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/auth/children/index/index.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/auth/children/index/index.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/auth/children/signup/signup.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/auth/children/signup/signup.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>signup works!</p>\n"

/***/ }),

/***/ "./src/app/components/auth/auth.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/auth/auth.module.ts ***!
  \************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _children_authpage_authpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./children/authpage/authpage.component */ "./src/app/components/auth/children/authpage/authpage.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _children_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./children/index/index.component */ "./src/app/components/auth/children/index/index.component.ts");
/* harmony import */ var _children_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./children/signup/signup.component */ "./src/app/components/auth/children/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _children_authpage_authpage_component__WEBPACK_IMPORTED_MODULE_3__["AuthpageComponent"]
            },
            {
                path: 'signup',
                component: _children_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
            }
        ]
    }
];
let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_children_authpage_authpage_component__WEBPACK_IMPORTED_MODULE_3__["AuthpageComponent"], _children_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], _children_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/components/auth/children/authpage/authpage.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/auth/children/authpage/authpage.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent .left {\n  width: 100%;\n  height: 100vh;\n  background-image: url('registerbg2.jpg');\n  background-size: cover;\n  background-position: center;\n}\n.parent .left .max {\n  width: inherit;\n  height: inherit;\n  padding-top: 20px;\n  padding-left: 20px;\n  background-color: #7870e754;\n}\n.parent .left h2 {\n  font-family: \"Poppins\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmllbGVtbWFudWVsL0RvY3VtZW50cy9wcm9qZWN0cy9vbHVjaGkvYW5ndWxhckFwcC9zcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9jaGlsZHJlbi9hdXRocGFnZS9hdXRocGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2NoaWxkcmVuL2F1dGhwYWdlL2F1dGhwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNESjtBREdJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNETjtBRElJO0VBQ0Usa0NBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9jaGlsZHJlbi9hdXRocGFnZS9hdXRocGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnR7XG5cbiAgLmxlZnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVnaXN0ZXJiZzIuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgICAubWF4e1xuICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODcwZTc1NFxuICAgIH1cblxuICAgIGgye1xuICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZlxuICAgIH1cbiAgfVxufVxuIiwiLnBhcmVudCAubGVmdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3JlZ2lzdGVyYmcyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnBhcmVudCAubGVmdCAubWF4IHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzBlNzU0O1xufVxuLnBhcmVudCAubGVmdCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/auth/children/authpage/authpage.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/auth/children/authpage/authpage.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthpageComponent", function() { return AuthpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AuthpageComponent = class AuthpageComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.isEmail = true;
        this.loginGroup = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            OPT: ['']
        });
    }
    setEmailValidation() {
        if (this.isEmail) {
            this.loginGroup.get('email').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        else {
            this.loginGroup.get('phone').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        this.loginGroup.updateValueAndValidity();
    }
};
AuthpageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AuthpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authpage',
        template: __webpack_require__(/*! raw-loader!./authpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/auth/children/authpage/authpage.component.html"),
        styles: [__webpack_require__(/*! ./authpage.component.scss */ "./src/app/components/auth/children/authpage/authpage.component.scss")]
    })
], AuthpageComponent);



/***/ }),

/***/ "./src/app/components/auth/children/index/index.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/auth/children/index/index.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9jaGlsZHJlbi9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/auth/children/index/index.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/auth/children/index/index.component.ts ***!
  \*******************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/auth/children/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/components/auth/children/index/index.component.scss")]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/components/auth/children/signup/signup.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/auth/children/signup/signup.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9jaGlsZHJlbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/auth/children/signup/signup.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/auth/children/signup/signup.component.ts ***!
  \*********************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignupComponent = class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/auth/children/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/components/auth/children/signup/signup.component.scss")]
    })
], SignupComponent);



/***/ })

}]);
//# sourceMappingURL=components-auth-auth-module.js.map