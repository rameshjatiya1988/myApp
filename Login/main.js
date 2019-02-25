(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Login';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, getAuthServiceConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["SocialLoginModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiCallService"], _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["FacebookLoginProvider"]('350119262255009')
        }
    ]);
    return config;
}


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcomeContainer\">\n  <mat-card>\n    <mat-card-content>\n      <h1>\n      Welcome Home, {{user.name}}\n      </h1>\n      <p class=\"logout\" (click)=\"logout()\">Logout</p>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcomeContainer {\n  width: 100vw;\n  display: flex;\n  position: relative;\n  align-items: center;\n  height: 100vh;\n  place-content: center;\n  background: #fdfdfd; }\n\n.logout {\n  color: gray;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvTmVlbC9sb2dpbi1wYWdlLWZyb250ZW5kL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsV0FBVztFQUNYLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbn1cbi5sb2dvdXR7XG4gIGNvbG9yOiBncmF5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.user = (localStorage.getItem('_u')) ? JSON.parse(localStorage.getItem('_u')) : null;
        if (!this.user) {
            this.router.navigate(['login']);
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"login\">\n  <div class=\"container-fluid\">\n    <div class=\"loginbox w-100\">\n      <div class=\"row\">\n        <div class=\"col-md-5 col-sm-5 col-12 p-0\">\n          <div class=\"logo-left\">\n          </div>\n        </div>\n        <div class=\"col-md-7 col-sm-7 col-12 p-0\">\n          <div class=\"logo-right\">\n            <div class=\"formbox\">\n              <div class=\"pb-4\">\n                <h1>Sign in</h1>\n              </div>\n              <button type=\"button\" class=\"btn btn-primary mr-2 mb-1\" (click)=\"socialSignIn('facebook')\"><span class=\"fb-icon\"><img\n                src=\"./assets/images/fb.png\"></span>Log\n                in with Facebook</button>\n\n              <div class=\"form-box mt-5\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput type=\"email\"  [(ngModel)]=\"user.email\"  placeholder=\"User Name\">\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput type=\"password\"  [(ngModel)]=\"user.password\"  placeholder=\"Password\">\n                </mat-form-field>\n                <div >\n                  <p class=\"error authorization\" *ngIf=\"errorMessage\">{{errorMessage}}</p>\n                  <button mat-raised-button color=\"primary\" class=\"button\" (click)=\"login()\">Sign in</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  height: 100%;\n  background: #000;\n  font-family: 'Roboto', sans-serif; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n#login {\n  width: 100%;\n  height: 100%;\n  margin: 0% auto; }\n\n.logo-left {\n  height: 100vh;\n  background-color: #3f51b5;\n  position: relative; }\n\n.logo-left img {\n  width: 10rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.logo-right {\n  height: 100vh;\n  background-color: #fff;\n  position: relative; }\n\nh1 {\n  color: #0a1640;\n  font-size: 2rem;\n  font-weight: 500;\n  line-height: normal; }\n\n.fb-icon img {\n  width: 1.1rem;\n  position: relative;\n  left: -4px;\n  top: 3px; }\n\n.formbox {\n  width: 77%;\n  padding-left: 8rem;\n  padding-top: 8rem; }\n\n.btn {\n  padding: .175rem .75rem !important;\n  font-size: .9rem !important;\n  height: 50px;\n  width: 300px; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: .375rem .15rem;\n  font-size: .8rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ced4da;\n  border-top: 1px solid transparent;\n  border-left: 1px solid transparent;\n  border-right: 1px solid transparent;\n  border-radius: 0rem;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s; }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf; }\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #325192;\n  border-color: #325192; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #325192;\n  border-color: #325192; }\n\n.example-full-width {\n  width: 100%; }\n\n.btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #545b6270;\n  border-color: #4e555b1a; }\n\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #545b6270;\n  border-color: #4e555b1a; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #545b6270;\n  border-color: #4e555b1a; }\n\n.error {\n  color: red; }\n\n@media screen and (min-width: 993px) and (max-width: 1200px) {\n  .logo-left, .logo-right {\n    min-height: 35rem; } }\n\n@media screen and (min-width: 768px) and (max-width: 992px) {\n  .logo-left, .logo-right {\n    min-height: 35rem; } }\n\n@media screen and (min-width: 577px) and (max-width: 767px) {\n  .formbox {\n    width: 96%;\n    padding-left: 2rem;\n    padding-top: 2rem; }\n  .logo-left, .logo-right {\n    height: 27rem; }\n  #login {\n    margin: 0% auto; } }\n\n@media screen and (max-width: 576px) {\n  .logo-left {\n    height: 10rem; }\n  .formbox {\n    width: 96%;\n    padding-left: 2rem;\n    padding-top: 2rem; }\n  #login {\n    margin: 0% auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvTmVlbC9sb2dpbi1wYWdlLWZyb250ZW5kL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QixFQUFBOztBQUV6QixnREFBQTs7QUFDQTs7RUFFQyxjQUFjLEVBQUE7O0FBRWY7RUFDSSxjQUFjO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUNBQWlDLEVBQUE7O0FBRWxDO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0MsWUFBWSxFQUFBOztBQUViOztFQUVDLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBRWQ7RUFDQyx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBR2xCO0VBQ0MsV0FBVztFQUNSLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0MsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxZQUFZO0VBQ1Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBOztBQUdwQztFQUNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWlCLEVBQUE7O0FBR2xCO0VBQ0MsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsYUFBYTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUSxFQUFBOztBQUdaO0VBQ0MsVUFBVTtFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDQyxrQ0FBa0M7RUFDL0IsMkJBQTJCO0VBQzdCLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2Q7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIscUVBQXFFLEVBQUE7O0FBR3pFO0VBQ0Msa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUtYO0VBQ0Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBRXRCLGVBQWUsRUFBQTs7QUFHZDtFQUNELGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUV2QixlQUFlLEVBQUE7O0FBS2Qsb0JBQUE7O0FBQ0E7RUFDRCxtQkFBbUIsRUFBQTs7QUFHbEI7RUFDRCxrQkFBa0IsRUFBQTs7QUFPakI7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTs7QUFFekI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDSSxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLHVCQUF1QixFQUFBOztBQUkzQjtFQUNJLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksV0FBVztFQUNYLDJCQUEwQjtFQUMxQix1QkFBc0IsRUFBQTs7QUFFMUI7RUFDRSxVQUNGLEVBQUE7O0FBTUE7RUFDQztJQUNDLGlCQUFpQixFQUFBLEVBQ2pCOztBQUdGO0VBQ0M7SUFDQyxpQkFBaUIsRUFBQSxFQUNqQjs7QUFJRjtFQUVDO0lBQ0MsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtFQUdsQjtJQUNDLGFBQWEsRUFBQTtFQUdkO0lBQ0MsZUFBZSxFQUFBLEVBQ2Y7O0FBSUY7RUFDQztJQUNDLGFBQWEsRUFBQTtFQUVkO0lBQ0MsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtFQUdsQjtJQUNDLGVBQWUsRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogIzAwMDtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4jbG9naW57XG5cdHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAlIGF1dG87XG59XG5cbi5sb2dvLWxlZnR7XG5cdGhlaWdodDogMTAwdmg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4ubG9nby1sZWZ0IGltZ3tcblx0d2lkdGg6IDEwcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5sb2dvLXJpZ2h0e1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuaDF7XG5cdGNvbG9yOiAjMGExNjQwO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5mYi1pY29uIGltZ3tcblx0d2lkdGg6IDEuMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTRweDtcbiAgICB0b3A6IDNweDtcbn1cblxuLmZvcm1ib3h7XG5cdHdpZHRoOiA3NyU7XG4gICAgcGFkZGluZy1sZWZ0OiA4cmVtO1xuICAgIHBhZGRpbmctdG9wOiA4cmVtO1xufVxuXG4uYnRue1xuXHRwYWRkaW5nOiAuMTc1cmVtIC43NXJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogLjlyZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjE1cmVtO1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zd2l0Y2gge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDYwcHg7XG5cdGhlaWdodDogMzRweDtcbiAgfVxuICBcblxuICBcbiAgLnNsaWRlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuXHR0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIC5zbGlkZXI6YmVmb3JlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRjb250ZW50OiBcIlwiO1xuXHRoZWlnaHQ6IDI2cHg7XG5cdHdpZHRoOiAyNnB4O1xuXHRsZWZ0OiA0cHg7XG5cdGJvdHRvbTogNHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG5cdHRyYW5zaXRpb246IC40cztcbiAgfVxuICBcblxuICBcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXG4gIC5zbGlkZXIucm91bmQge1xuXHRib3JkZXItcmFkaXVzOiAzNHB4O1xuICB9XG4gIFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG5cbiAgXG5cblxuICAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MmNjO1xuICAgIGJvcmRlci1jb2xvcjogIzAwNWNiZjtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1MTkyO1xuICAgIGJvcmRlci1jb2xvcjogIzMyNTE5Mjtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1MTkyO1xuICAgIGJvcmRlci1jb2xvcjogIzMyNTE5Mjtcbn1cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG4tc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuc2hvdz4uYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDViNjI3MDtcbiAgICBib3JkZXItY29sb3I6ICM0ZTU1NWIxYTtcbn1cblxuXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWI2MjcwO1xuICAgIGJvcmRlci1jb2xvcjogIzRlNTU1YjFhO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTQ1YjYyNzA7XG4gICAgYm9yZGVyLWNvbG9yOiM0ZTU1NWIxYTtcbn1cbi5lcnJvcntcbiAgY29sb3I6IHJlZFxufVxuXG5cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkzcHgpIGFuZCAobWF4LXdpZHRoOjEyMDBweCl7XG5cdC5sb2dvLWxlZnQsIC5sb2dvLXJpZ2h0e1xuXHRcdG1pbi1oZWlnaHQ6IDM1cmVtO1xuXHR9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MnB4KXtcblx0LmxvZ28tbGVmdCwgLmxvZ28tcmlnaHR7XG5cdFx0bWluLWhlaWdodDogMzVyZW07XG5cdH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjU3N3B4KSBhbmQgKG1heC13aWR0aDo3NjdweCl7XG5cdFxuXHQuZm9ybWJveCB7XG5cdFx0d2lkdGg6IDk2JTtcblx0XHRwYWRkaW5nLWxlZnQ6IDJyZW07XG5cdFx0cGFkZGluZy10b3A6IDJyZW07XG5cdH1cblxuXHQubG9nby1sZWZ0LCAubG9nby1yaWdodHtcblx0XHRoZWlnaHQ6IDI3cmVtO1xuXHR9XG5cblx0I2xvZ2lue1xuXHRcdG1hcmdpbjogMCUgYXV0bztcblx0fVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOjU3NnB4KXtcblx0LmxvZ28tbGVmdHtcblx0XHRoZWlnaHQ6IDEwcmVtO1xuXHR9XG5cdC5mb3JtYm94IHtcblx0XHR3aWR0aDogOTYlO1xuXHRcdHBhZGRpbmctbGVmdDogMnJlbTtcblx0XHRwYWRkaW5nLXRvcDogMnJlbTtcblx0fVxuXG5cdCNsb2dpbntcblx0XHRtYXJnaW46IDAlIGF1dG87XG5cdH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, socialAuthService) {
        this.loginService = loginService;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    /**
     * login function
     * @details: used to login the user
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.userLogin(this.user).subscribe(function (response) {
            _this.userLoginHandleResponse(response);
        }, function (error) {
            _this.errorMessage = 'Please check your email/password combination';
            console.log(error);
        });
    };
    LoginComponent.prototype.socialLogin = function (data) {
        var _this = this;
        this.loginService.userSocialLogin(data).subscribe(function (response) {
            _this.userLoginHandleResponse(response);
        }, function (error) {
            _this.errorMessage = error.message;
            console.log(error);
        });
    };
    // To handle the user login response.
    LoginComponent.prototype.userLoginHandleResponse = function (response) {
        localStorage.setItem('_u', JSON.stringify(response));
        this.router.navigate(['home']);
    };
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform === 'facebook') {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + ' sign in data : ', userData);
            _this.socialLogin({
                name: userData.name,
                email: userData.email,
                password: '',
                socialID: userData.id
            });
        }).catch(function (error) {
            _this.errorMessage = error.message;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallService", function() { return ApiCallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ApiCallService = /** @class */ (function () {
    function ApiCallService(http, router) {
        this.http = http;
        this.router = router;
    }
    ApiCallService.prototype.handleResponse = function (response) {
        if (response.statusCode === 200) {
            return response;
        }
        else {
            return null;
        }
    };
    ApiCallService.prototype.handleErrorResponse = function (error) {
        if (error.statusCode === 404) {
            this.router.navigateByUrl('login');
        }
        else {
            return this.observer.error(error.error || 'Server Error');
        }
    };
    ApiCallService.prototype.callPostApi = function (apiurl, body, options) {
        var _this = this;
        return this.http.post(apiurl, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleErrorResponse(error); }));
    };
    ApiCallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApiCallService);
    return ApiCallService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils_global_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/global-urls */ "./src/app/utils/global-urls.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");





var LoginService = /** @class */ (function () {
    function LoginService(apiCall) {
        this.apiCall = apiCall;
    }
    /**
     * user login function
     * @ type: POST
     */
    LoginService.prototype.userLogin = function (data) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.apiCall.callPostApi("" + _utils_global_urls__WEBPACK_IMPORTED_MODULE_3__["GlobalUrls"].LOGIN_URL, data, {}).subscribe(function (response) {
                if (response) {
                    observer.next(response);
                }
                else {
                    observer.error('error in getting details');
                }
            }, function (error) {
                observer.error(error);
            });
        });
    };
    LoginService.prototype.userSocialLogin = function (data) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.apiCall.callPostApi("" + _utils_global_urls__WEBPACK_IMPORTED_MODULE_3__["GlobalUrls"].LOGIN_URL, data, {}).subscribe(function (response) {
                if (response) {
                    observer.next(response);
                }
                else {
                    observer.error('error in getting details');
                }
            }, function (error) {
                observer.error(error);
            });
        });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/utils/global-urls.ts":
/*!**************************************!*\
  !*** ./src/app/utils/global-urls.ts ***!
  \**************************************/
/*! exports provided: GlobalUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalUrls", function() { return GlobalUrls; });
var GlobalUrls = /** @class */ (function () {
    function GlobalUrls() {
    }
    // Login url
    GlobalUrls.LOGIN_URL = "https://rameshjatiya.com:8000/login";
    return GlobalUrls;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Library/WebServer/Documents/Neel/login-page-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map