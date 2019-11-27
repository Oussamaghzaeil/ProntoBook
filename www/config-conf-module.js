(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-conf-module"],{

/***/ "./src/app/pages/config/conf.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/config/conf.module.ts ***!
  \*********************************************/
/*! exports provided: confPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confPageModule", function() { return confPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _conf_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conf.page */ "./src/app/pages/config/conf.page.ts");







var routes = [
    {
        path: '',
        component: _conf_page__WEBPACK_IMPORTED_MODULE_6__["confPage"]
    }
];
var confPageModule = /** @class */ (function () {
    function confPageModule() {
    }
    confPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_conf_page__WEBPACK_IMPORTED_MODULE_6__["confPage"]]
        })
    ], confPageModule);
    return confPageModule;
}());



/***/ }),

/***/ "./src/app/pages/config/conf.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/config/conf.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Configurações</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>  \n    <ion-row justify-content-center align-items-center style='height: 100%'>      \n      Em Desenvolvimento!\n    </ion-row>  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/config/conf.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/config/conf.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ios page-splash .scroll-content, .md page-splash .scroll-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.ios page-splash #bars, .md page-splash #bars {\n  height: 80%; }\n\n.ios page-splash #bars .cls-1, .md page-splash #bars .cls-1 {\n    opacity: 0;\n    -webkit-transform: rotate3d(1, 1, 0, 50deg);\n            transform: rotate3d(1, 1, 0, 50deg);\n    -webkit-animation: 1s 0.2s ease fadeInAndSpin;\n            animation: 1s 0.2s ease fadeInAndSpin;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n\n.ios page-splash #bars .cls-2, .md page-splash #bars .cls-2 {\n    opacity: 0;\n    -webkit-transform: rotate3d(1, 1, 0, 50deg);\n            transform: rotate3d(1, 1, 0, 50deg);\n    -webkit-animation: 1s 0.4s ease fadeInAndSpin;\n            animation: 1s 0.4s ease fadeInAndSpin;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n\n.ios page-splash #bars .cls-3, .md page-splash #bars .cls-3 {\n    opacity: 0;\n    -webkit-transform: rotate3d(1, 1, 0, 50deg);\n            transform: rotate3d(1, 1, 0, 50deg);\n    -webkit-animation: 1s 0.6s ease fadeInAndSpin;\n            animation: 1s 0.6s ease fadeInAndSpin;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n\n.ios page-splash #bars .cls-4, .md page-splash #bars .cls-4 {\n    opacity: 0;\n    -webkit-transform: rotate3d(1, 1, 0, 50deg);\n            transform: rotate3d(1, 1, 0, 50deg);\n    -webkit-animation: 1s 0.8s ease fadeInAndSpin;\n            animation: 1s 0.8s ease fadeInAndSpin;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n\n.ios page-splash #bars .cls-5, .ios page-splash #bars .cls-6, .md page-splash #bars .cls-5, .md page-splash #bars .cls-6 {\n    opacity: 0;\n    -webkit-animation: 2s 1.5s linear fadeIn;\n            animation: 2s 1.5s linear fadeIn;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n\n@-webkit-keyframes fadeInAndSpin {\n  100% {\n    opacity: 1;\n    -webkit-transform: rotate3d(1, 1, 0, 0deg);\n            transform: rotate3d(1, 1, 0, 0deg); } }\n\n@keyframes fadeInAndSpin {\n  100% {\n    opacity: 1;\n    -webkit-transform: rotate3d(1, 1, 0, 0deg);\n            transform: rotate3d(1, 1, 0, 0deg); } }\n\n@-webkit-keyframes fadeIn {\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  100% {\n    opacity: 1; } }\n\n.Absolute-Center {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlnL0M6XFxVc2Vyc1xcTGV2ZWxcXERlc2t0b3BcXG91c3NhbWFcXFByb250byBCb29rL3NyY1xcYXBwXFxwYWdlc1xcY29uZmlnXFxjb25mLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtZLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQVAvQjtFQVdZLFdBQVcsRUFBQTs7QUFYdkI7SUFjZ0IsVUFBVTtJQUNWLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxxQ0FBNkI7WUFBN0IsNkJBQTZCLEVBQUE7O0FBakI3QztJQXFCZ0IsVUFBVTtJQUNWLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxxQ0FBNkI7WUFBN0IsNkJBQTZCLEVBQUE7O0FBeEI3QztJQTRCZ0IsVUFBVTtJQUNWLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxxQ0FBNkI7WUFBN0IsNkJBQTZCLEVBQUE7O0FBL0I3QztJQW1DZ0IsVUFBVTtJQUNWLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxxQ0FBNkI7WUFBN0IsNkJBQTZCLEVBQUE7O0FBdEM3QztJQTBDZ0IsVUFBVTtJQUNWLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMscUNBQTZCO1lBQTdCLDZCQUE2QixFQUFBOztBQVM3QztFQUVJO0lBQ0ksVUFBVTtJQUNWLDBDQUFrQztZQUFsQyxrQ0FBa0MsRUFBQSxFQUFBOztBQUoxQztFQUVJO0lBQ0ksVUFBVTtJQUNWLDBDQUFrQztZQUFsQyxrQ0FBa0MsRUFBQSxFQUFBOztBQUsxQztFQUVJO0lBQ0ksVUFBVSxFQUFBLEVBQUE7O0FBSGxCO0VBRUk7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFLbEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUVaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUFFLE9BQU87RUFBRSxTQUFTO0VBQUUsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uZmlnL2NvbmYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvcywgLm1kIHtcblxuICAgIHBhZ2Utc3BsYXNoIHtcblxuICAgICAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICNiYXJzIHtcbiAgICAgICAgICAgIGhlaWdodDogODAlO1xuXG4gICAgICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAxLCAwLCA1MGRlZyk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAxcyAwLjJzIGVhc2UgZmFkZUluQW5kU3BpbjtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNscy0yIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgMSwgMCwgNTBkZWcpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMXMgMC40cyBlYXNlIGZhZGVJbkFuZFNwaW47XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbHMtMyB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDEsIDEsIDAsIDUwZGVnKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IDFzIDAuNnMgZWFzZSBmYWRlSW5BbmRTcGluO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2xzLTQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAxLCAwLCA1MGRlZyk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAxcyAwLjhzIGVhc2UgZmFkZUluQW5kU3BpbjtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNscy01LCAuY2xzLTYge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyAxLjVzIGxpbmVhciBmYWRlSW47XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbkBrZXlmcmFtZXMgZmFkZUluQW5kU3BpbiB7XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAxLCAwLCAwZGVnKTtcbiAgICB9XG5cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG59XG5cbi5BYnNvbHV0ZS1DZW50ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvL292ZXJmbG93OiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwOyBsZWZ0OiAwOyBib3R0b206IDA7IHJpZ2h0OiAwO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/config/conf.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/config/conf.page.ts ***!
  \*******************************************/
/*! exports provided: confPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confPage", function() { return confPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var confPage = /** @class */ (function () {
    function confPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    confPage.prototype.ngOnInit = function () {
    };
    confPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    confPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conf',
            template: __webpack_require__(/*! ./conf.page.html */ "./src/app/pages/config/conf.page.html"),
            styles: [__webpack_require__(/*! ./conf.page.scss */ "./src/app/pages/config/conf.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], confPage);
    return confPage;
}());



/***/ })

}]);
//# sourceMappingURL=config-conf-module.js.map