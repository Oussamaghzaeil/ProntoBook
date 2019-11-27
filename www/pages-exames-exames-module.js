(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-exames-exames-module"],{

/***/ "./src/app/pages/exames/exames.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/exames/exames.module.ts ***!
  \***********************************************/
/*! exports provided: ExamesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamesPageModule", function() { return ExamesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exames_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exames.page */ "./src/app/pages/exames/exames.page.ts");







var routes = [
    {
        path: '',
        component: _exames_page__WEBPACK_IMPORTED_MODULE_6__["ExamesPage"]
    }
];
var ExamesPageModule = /** @class */ (function () {
    function ExamesPageModule() {
    }
    ExamesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_exames_page__WEBPACK_IMPORTED_MODULE_6__["ExamesPage"]]
        })
    ], ExamesPageModule);
    return ExamesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/exames/exames.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/exames/exames.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"goBack()\">\n              <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n            </ion-button>\n      </ion-buttons>\n      <ion-title>Exames</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n  \n    <div class=\"ion-text-center\">\n      <ion-button  size=\"default\" (click)=\"goToFisico()\" class=\"but1\">\n          Físico\n        <ion-icon slot=\"start\" name=\"ios-body\" class=\"icon\"></ion-icon>\n      </ion-button>\n    </div>\n  \n  \n    <div class=\"ion-text-center\">\n        <ion-button  (click)=\"goToSangue()\" class=\"but2\">\n          Sangue\n          <ion-icon slot=\"start\" name=\"md-flask\" class=\"icon\"></ion-icon>\n        </ion-button>\n    </div>\n  \n  \n  </ion-content>\n  \n"

/***/ }),

/***/ "./src/app/pages/exames/exames.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/exames/exames.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.pes_but {\n  --background:  rgb(111, 169, 187); }\n\n.but1 {\n  height: 50px;\n  position: relative;\n  left: 0%;\n  top: 100px;\n  right: 50%;\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\n.but2 {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%;\n  height: 50px;\n  position: relative;\n  left: 0%;\n  top: 250px;\n  right: 50%; }\n\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 9%;\n  height: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 30px;\n  height: 30px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhhbWVzL0M6XFxVc2Vyc1xcTGV2ZWxcXERlc2t0b3BcXG91c3NhbWFcXFByb250byBCb29rL3NyY1xcYXBwXFxwYWdlc1xcZXhhbWVzXFxleGFtZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxpQ0FBYSxFQUFBOztBQUdqQjtFQUVJLFlBQVk7RUFHWixrQkFBa0I7RUFDbEIsUUFBTztFQUNQLFVBQVU7RUFDVixVQUFVO0VBRVYsc0JBQWE7RUFDYixxQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksc0JBQWE7RUFDYixxQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFFWixrQkFBa0I7RUFDbEIsUUFBTztFQUNQLFVBQVU7RUFDVixVQUFVLEVBQUE7O0FBSWQ7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUixXQUFXO0VBQ1gsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4YW1lcy9leGFtZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTE7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxuICAgIFxyXG59XHJcblxyXG4ucGVzX2J1dHtcclxuICAgIC0tYmFja2dyb3VuZDogIHJnYigxMTEsIDE2OSwgMTg3KTtcclxufVxyXG5cclxuLmJ1dDEge1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6MCU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuXHJcbiAgICAtLWJhY2tncm91bmQ6ICAjN0NCQkJBO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmJ1dDIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzdDQkJCQTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDowJTtcclxuICAgIHRvcDogMjUwcHg7XHJcbiAgICByaWdodDogNTAlO1xyXG59XHJcblxyXG5cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA5JTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/exames/exames.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/exames/exames.page.ts ***!
  \*********************************************/
/*! exports provided: ExamesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamesPage", function() { return ExamesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ExamesPage = /** @class */ (function () {
    function ExamesPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
    }
    ExamesPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    ExamesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/menu/options/tabs/main');
        });
    };
    ExamesPage.prototype.goToFisico = function () {
        this.navCtrl.navigateRoot('/consultfisico');
    };
    ExamesPage.prototype.goToSangue = function () {
        this.navCtrl.navigateRoot('/consultsangue');
    };
    ExamesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exames',
            template: __webpack_require__(/*! ./exames.page.html */ "./src/app/pages/exames/exames.page.html"),
            styles: [__webpack_require__(/*! ./exames.page.scss */ "./src/app/pages/exames/exames.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ExamesPage);
    return ExamesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-exames-exames-module.js.map