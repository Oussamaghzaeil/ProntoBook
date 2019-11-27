(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-grupos-grupos-module"],{

/***/ "./src/app/pages/grupos/grupos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/grupos/grupos.module.ts ***!
  \***********************************************/
/*! exports provided: GruposPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposPageModule", function() { return GruposPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grupos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grupos.page */ "./src/app/pages/grupos/grupos.page.ts");







var routes = [
    {
        path: '',
        component: _grupos_page__WEBPACK_IMPORTED_MODULE_6__["GruposPage"]
    }
];
var GruposPageModule = /** @class */ (function () {
    function GruposPageModule() {
    }
    GruposPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grupos_page__WEBPACK_IMPORTED_MODULE_6__["GruposPage"]]
        })
    ], GruposPageModule);
    return GruposPageModule;
}());



/***/ }),

/***/ "./src/app/pages/grupos/grupos.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/grupos/grupos.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Grupos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/grupos/grupos.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/grupos/grupos.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3J1cG9zL0M6XFxVc2Vyc1xcTGV2ZWxcXERlc2t0b3BcXG91c3NhbWFcXFByb250byBCb29rL3NyY1xcYXBwXFxwYWdlc1xcZ3J1cG9zXFxncnVwb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dydXBvcy9ncnVwb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTE7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/grupos/grupos.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/grupos/grupos.page.ts ***!
  \*********************************************/
/*! exports provided: GruposPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposPage", function() { return GruposPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var GruposPage = /** @class */ (function () {
    function GruposPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
    }
    GruposPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/menu/options/tabs/main');
        });
    };
    GruposPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    GruposPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grupos',
            template: __webpack_require__(/*! ./grupos.page.html */ "./src/app/pages/grupos/grupos.page.html"),
            styles: [__webpack_require__(/*! ./grupos.page.scss */ "./src/app/pages/grupos/grupos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], GruposPage);
    return GruposPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-grupos-grupos-module.js.map