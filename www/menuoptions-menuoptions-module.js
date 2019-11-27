(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuoptions-menuoptions-module"],{

/***/ "./src/app/pages/menuoptions/menuoptions.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/menuoptions/menuoptions.module.ts ***!
  \*********************************************************/
/*! exports provided: OptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPageModule", function() { return OptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menuoptions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuoptions.page */ "./src/app/pages/menuoptions/menuoptions.page.ts");







var routes = [
    {
        path: 'tabs',
        component: _menuoptions_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"],
        children: [
            {
                path: 'main',
                loadChildren: '../main/principal.module#principalPageModule'
            },
            {
                path: 'main/details',
                loadChildren: '../details/details.module#DetailsPageModule'
            },
            {
                path: 'config',
                loadChildren: '../config/conf.module#confPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/main',
        pathMatch: 'full'
    }
];
var OptionsPageModule = /** @class */ (function () {
    function OptionsPageModule() {
    }
    OptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menuoptions_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]]
        })
    ], OptionsPageModule);
    return OptionsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menuoptions/menuoptions.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/menuoptions/menuoptions.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n \n  <!-- <ion-tab-bar color=\"tint\" slot=\"bottom\">\n \n    <ion-tab-button tab=\"main\">\n      <ion-icon name=\"menu\"></ion-icon>\n      <ion-label>Opções</ion-label>\n    </ion-tab-button>\n \n    <ion-tab-button tab=\"config\">\n      <ion-icon name=\"settings\"></ion-icon>\n      <ion-label>Configurações</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar> -->\n \n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/menuoptions/menuoptions.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/menuoptions/menuoptions.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnVvcHRpb25zL21lbnVvcHRpb25zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/menuoptions/menuoptions.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/menuoptions/menuoptions.page.ts ***!
  \*******************************************************/
/*! exports provided: OptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPage", function() { return OptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptionsPage = /** @class */ (function () {
    function OptionsPage() {
    }
    OptionsPage.prototype.ngOnInit = function () {
    };
    OptionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menuoptions',
            template: __webpack_require__(/*! ./menuoptions.page.html */ "./src/app/pages/menuoptions/menuoptions.page.html"),
            styles: [__webpack_require__(/*! ./menuoptions.page.scss */ "./src/app/pages/menuoptions/menuoptions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptionsPage);
    return OptionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=menuoptions-menuoptions-module.js.map