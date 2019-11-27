(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rdvs-rdvs-module"],{

/***/ "./src/app/pages/rdvs/rdvs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/rdvs/rdvs.module.ts ***!
  \*******************************************/
/*! exports provided: RdvsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdvsPageModule", function() { return RdvsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rdvs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rdvs.page */ "./src/app/pages/rdvs/rdvs.page.ts");







var routes = [
    {
        path: '',
        component: _rdvs_page__WEBPACK_IMPORTED_MODULE_6__["RdvsPage"]
    }
];
var RdvsPageModule = /** @class */ (function () {
    function RdvsPageModule() {
    }
    RdvsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rdvs_page__WEBPACK_IMPORTED_MODULE_6__["RdvsPage"]]
        })
    ], RdvsPageModule);
    return RdvsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/rdvs/rdvs.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/rdvs/rdvs.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Lista de compromissos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" method=\"post\">\n    <div *ngFor=\"let sa of dados; let i =index \">\n      <ion-card id=\"{{sa.CPF}}\" class=\"card\">\n        <ion-card-header>\n          <ion-card-title>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  {{sa.Nome}} {{sa.Sobrenome}}\n                </ion-col>\n                <ion-col>\n                  <ion-icon name=\"md-close-circle\" type=\"submit\" (click)=\"cancelar(sa.CPF)\" class=\"trash\"></ion-icon>\n                  <ion-icon name=\"md-clock\" type=\"submit\" (click)=\"naocumpridas(sa.CPF)\" class=\"clock\"></ion-icon>\n                  <ion-icon name=\"md-checkmark-circle-outline\" type=\"submit\" (click)=\"atualizar(sa.CPF)\" class=\"check\">\n                  </ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <div >\n\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Espacialidade:</ion-label>\n                    {{sa.Especialidades}}\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Hospital:</ion-label>\n                    {{sa.Hospitais}}\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Data:</ion-label>\n                    {{sa.DataDoAtendimento}}\n                  </ion-item>\n\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>Sexo:</ion-label>\n                    {{sa.Sexo}}\n                  </ion-item>\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>CPF:</ion-label>\n                    {{sa.CPF}}\n                  </ion-item>\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>Doutor:</ion-label>\n                    {{sa.Doutor}}\n                  </ion-item>\n\n                  <div class=\"expand-arrow-container\" (click)=\"expandFazenda()\">\n                    <ion-icon name=\"ios-arrow-dropdown-circle\" *ngIf=\"ishidden\"></ion-icon>\n                    <ion-icon name=\"ios-arrow-dropup-circle\" *ngIf=\"!ishidden\"></ion-icon>\n                  </div>\n\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n  </form>\n</ion-content>\n\n\n<!--<ion-button type=\"submit\"  (click)=\"delete(sa.code)\"   expand=\"full\" class=\"at_but\">delete</ion-button>-->"

/***/ }),

/***/ "./src/app/pages/rdvs/rdvs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/rdvs/rdvs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\nion-icon {\n  font-size: 30px; }\n\n.card {\n  background: #d3d4d4; }\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 10px; }\n\n.roww {\n  --background:  rgb(211, 212, 212); }\n\n.circle {\n  background: #7CBBBA;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  position: relative;\n  /* left:40%;\r\n    top: 200px;\r\n    right: 30%; */\n  margin-left: 300px;\n  margin-top: 70px;\n  margin-bottom: 10px; }\n\n.trash {\n  position: absolute;\n  right: 0%; }\n\n.check {\n  position: absolute;\n  right: 25%; }\n\n.clock {\n  position: absolute;\n  right: 50%; }\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container ion-icon {\n    font-size: 44px; }\n\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  height: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 30px;\n  height: 30px;\n  display: block; }\n\n.fab {\n  margin: 2px;\n  width: 10%;\n  height: 90%; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmR2cy9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXHJkdnNcXHJkdnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZHZzL3JkdnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0ksbUJBQStCLEVBQUE7O0FBR25DO0VBQ0ksb0RBQWE7RUFDYiwwQ0FBUTtFQUNSLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQ0FBYSxFQUFBOztBQUtqQjtFQUNJLG1CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUVaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEI7O2lCQ1hhO0VEY2Isa0JBQWtCO0VBRWxCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBOztBQUdiO0VBQ1Esa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUVkO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUgzQjtJQUtNLGVBQWUsRUFBQTs7QUFJckI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JkdnMvcmR2cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTtcclxuICAgIFxyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbn1cclxuXHJcblxyXG4uY2FyZCB7IFxyXG4gICAgYmFja2dyb3VuZDogIHJnYigyMTEsIDIxMiwgMjEyKTtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucm93d3tcclxuICAgIC0tYmFja2dyb3VuZDogIHJnYigyMTEsIDIxMiwgMjEyKTtcclxufVxyXG5cclxuXHJcblxyXG4uY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICAjN0NCQkJBO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGxlZnQ6NDAlO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIHJpZ2h0OiAzMCU7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbiAgICAvL21hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgIFxyXG59XHJcblxyXG4udHJhc2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMCU7IFxyXG5cclxufVxyXG4uY2hlY2t7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyNSU7IFxyXG5cclxufVxyXG4uY2xvY2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTAlOyBcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXhwYW5kLWFycm93LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuXHJcbi5mYWIge1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcbiIsImlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTE7IH1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZGZkZmQ7IH1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7IH1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZDNkNGQ0OyB9XG5cbi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG5cbi5yb3d3IHtcbiAgLS1iYWNrZ3JvdW5kOiAgcmdiKDIxMSwgMjEyLCAyMTIpOyB9XG5cbi5jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjN0NCQkJBO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIGxlZnQ6NDAlO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIHJpZ2h0OiAzMCU7ICovXG4gIG1hcmdpbi1sZWZ0OiAzMDBweDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4udHJhc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwJTsgfVxuXG4uY2hlY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNSU7IH1cblxuLmNsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTAlOyB9XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4uZXhwYW5kLWFycm93LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIC5leHBhbmQtYXJyb3ctY29udGFpbmVyIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQ0cHg7IH1cblxuLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA2MCU7XG4gIGhlaWdodDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmZhYiB7XG4gIG1hcmdpbjogMnB4O1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDkwJTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/rdvs/rdvs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/rdvs/rdvs.page.ts ***!
  \*****************************************/
/*! exports provided: RdvsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdvsPage", function() { return RdvsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");










var RdvsPage = /** @class */ (function () {
    function RdvsPage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder, db, alertController) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.modalController = modalController;
        this.platform = platform;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.db = db;
        this.alertController = alertController;
        this.ishidden = true;
    }
    RdvsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dados = JSON.parse(sessionStorage.getItem('rdv'));
        console.log(this.dados);
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/consultrdv');
        });
    };
    RdvsPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    //delete(form: NgForm)
    RdvsPage.prototype.cancelar = function (cpf) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(cpf);
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Cancelando...',
                                message: 'Tem certeza que deseja cancelar a consulta?',
                                buttons: [
                                    {
                                        text: 'NAO',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'SIM',
                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        console.log('Confirm Ok');
                                                        console.log('aaa', cpf);
                                                        this.confdelete(cpf);
                                                        return [4 /*yield*/, alert.remove()];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RdvsPage.prototype.confdelete = function (cpf) {
        var _this = this;
        var myForm;
        // ------ NEW FORM WITH EDIT DATA
        myForm = this.formBuilder.group({
            cpf: cpf
        });
        var params = {
            'StatusCRUD': 'Cancelar',
            'formValues': cpf,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        this.Authorizer.QueryStoreProc('Executar', "spAtendimento", params).then(function (res) {
            var resultado = res[0];
            console.log(resultado);
            try {
                if (resultado.success) {
                    _this.alertService.presentAlert({ pTitle: 'Atendimento', pSubtitle: 'Success', pMessage: 'Atendimento excluído com sucesso !' });
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Atendimento', pMessage: 'Não há atendimento como excluir' });
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Atendimento', pMessage: 'Nenhum usuário!' });
            }
        });
        document.getElementById(cpf).remove();
    };
    /*
      cumpridas(cpf)
      {
    
        console.log(cpf)
        //create form
        let myForm: FormGroup;
              // ------ NEW FORM WITH EDIT DATA
              myForm = this.formBuilder.group({
                cpf: cpf
              });
    
    
        let params = {
          'StatusCRUD': 'Cumpridas',
          'formValues': myForm.value,
          'CodigoUsuarioSistema': 0,
          'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
    
        console.log("Delete:", params);
        this.Authorizer. QueryStoreProc('Executar',"spAtendimento", params).then(res => {
          let resultado: any = res[0];
          console.log(resultado)
          try {
            if (resultado.success) {
                this.alertService.presentAlert({ pTitle: 'Atendimento', pSubtitle: 'Success', pMessage: 'Cumpridas !' });
                
              }
            else {
              this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Atendimento', pMessage: 'você não pode excluir este paciente' });
              //this.navCtrl.navigateRoot('/login');
            }}
            catch (err) {
              this.alertService.presentAlert({ pTitle: this.env.APP_NAME, pSubtitle: 'Atendimento', pMessage: 'Nenhum usuário!' });
            }
        });
        this.dados=sessionStorage.setItem('atendimento',"");
        this.gotoo();
        
      }
    
    */
    RdvsPage.prototype.atualizar = function (form) {
        console.log("fgfhh", form);
        //create form 
        sessionStorage.setItem('atendimento', form);
        this.gotoo();
    };
    RdvsPage.prototype.gotoo = function () {
        this.navCtrl.navigateRoot('/atender');
    };
    RdvsPage.prototype.naocumpridas = function (cpf) {
        var _this = this;
        console.log(cpf);
        //create form 
        var myForm;
        // ------ NEW FORM WITH EDIT DATA
        myForm = this.formBuilder.group({
            cpf: cpf
        });
        var params = {
            'StatusCRUD': 'NaoCumpridas',
            'formValues': myForm.value,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("Delete:", params);
        this.Authorizer.QueryStoreProc('Executar', "spAtendimento", params).then(function (res) {
            var resultado = res[0];
            console.log(resultado);
            try {
                if (resultado.success) {
                    _this.alertService.presentAlert({ pTitle: 'Atendimento', pSubtitle: '', pMessage: 'Compromisso ainda não concluído!' });
                }
                else {
                    //this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Atendimento', pMessage: 'você não pode excluir este paciente' });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Atendimento', pMessage: 'Nenhum usuário!' });
            }
        });
        this.dados = sessionStorage.setItem('rdv', "");
        this.ngOnInit();
    };
    RdvsPage.prototype.expandFazenda = function () {
        this.ishidden = !this.ishidden;
    };
    RdvsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rdvs',
            template: __webpack_require__(/*! ./rdvs.page.html */ "./src/app/pages/rdvs/rdvs.page.html"),
            styles: [__webpack_require__(/*! ./rdvs.page.scss */ "./src/app/pages/rdvs/rdvs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], RdvsPage);
    return RdvsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-rdvs-rdvs-module.js.map