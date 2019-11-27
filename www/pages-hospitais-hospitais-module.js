(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hospitais-hospitais-module"],{

/***/ "./src/app/pages/hospitais/hospitais.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/hospitais/hospitais.module.ts ***!
  \*****************************************************/
/*! exports provided: HospitaisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitaisPageModule", function() { return HospitaisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hospitais_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hospitais.page */ "./src/app/pages/hospitais/hospitais.page.ts");







var routes = [
    {
        path: '',
        component: _hospitais_page__WEBPACK_IMPORTED_MODULE_6__["HospitaisPage"],
    }
];
var HospitaisPageModule = /** @class */ (function () {
    function HospitaisPageModule() {
    }
    HospitaisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hospitais_page__WEBPACK_IMPORTED_MODULE_6__["HospitaisPage"]]
        })
    ], HospitaisPageModule);
    return HospitaisPageModule;
}());



/***/ }),

/***/ "./src/app/pages/hospitais/hospitais.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/hospitais/hospitais.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Hospitais</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" method=\"post\">\n    <div *ngFor=\"let sa of a; let i =index \">\n      <ion-card class=\"card\">\n        <ion-card-header>\n          <ion-card-title>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-input ngModel type=\"text\" name=\"nameHospital\" value=\"{{sa.name}}\"> {{sa.name}}</ion-input>\n                </ion-col>\n                <ion-col>\n                  <ion-icon name=\"ios-trash\" type=\"submit\" (click)=\"cancelar(sa.code)\" class=\"trash\"></ion-icon>\n                  <ion-icon name=\"create\" (click)=\"goToo(sa.code,sa.UF)\" class=\"build\"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <div>\n\n            <ion-grid>\n              <ion-row >\n                <ion-col id=\"{{sa.code}}\">\n\n\n                    <ion-item class=\"roww\" lines=\"none\">\n                      <ion-label>Endereco:</ion-label>\n                      {{sa.address}}\n                    </ion-item>\n                    <ion-item class=\"roww\" lines=\"none\">\n                      <ion-label>UF:</ion-label>\n                      {{sa.UF}}\n                    </ion-item>\n                    <ion-item class=\"roww\" lines=\"none\">\n                      <ion-label>Nome Cidade:</ion-label>\n                      {{sa.city}}\n                    </ion-item>\n\n\n\n                    <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                      <ion-label>Telefone:</ion-label>\n                      {{sa.phone}}\n                    </ion-item>\n\n                    <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                      <ion-label>O email:</ion-label>\n                      {{sa.email}}\n                    </ion-item>\n\n                    <div class=\"expand-arrow-container\" (click)=\"expandFazenda()\">\n                      <ion-icon name=\"ios-arrow-dropdown-circle\" *ngIf=\"ishidden\"></ion-icon>\n                      <ion-icon name=\"ios-arrow-dropup-circle\" *ngIf=\"!ishidden\"></ion-icon>\n                    </div>\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n\n    <div class=\"ion-text-center\">\n      <ion-button shape=\"round\" class=\"addbutton\" position=\"buttom\" (click)=\"goTo()\" class=\"circle\">\n        <ion-icon slot=\"start\" name=\"add\" class=\"icon\"></ion-icon>\n      </ion-button>\n    </div>\n  </form>\n</ion-content>\n\n\n<!--<ion-button type=\"submit\"  (click)=\"delete(sa.code)\"   expand=\"full\" class=\"at_but\">delete</ion-button>-->"

/***/ }),

/***/ "./src/app/pages/hospitais/hospitais.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/hospitais/hospitais.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.card {\n  background: #d3d4d4; }\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 10px; }\n\n.roww {\n  --background:  rgb(211, 212, 212); }\n\n.trash {\n  position: absolute;\n  right: 0%; }\n\n.build {\n  position: absolute;\n  right: 25%; }\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container ion-icon {\n    font-size: 44px; }\n\n.circle {\n  background: #1d6b83;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  position: absolute;\n  right: 5%;\n  /* left:40%;\r\n    top: 200px;\r\n    right: 30%; */\n  margin-left: 300px;\n  margin-top: 70px;\n  margin-bottom: 20px; }\n\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 61%;\n  height: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 45px;\n  height: 45px;\n  display: block; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9zcGl0YWlzL0M6XFxVc2Vyc1xcTGV2ZWxcXERlc2t0b3BcXG91c3NhbWFcXFByb250byBCb29rL3NyY1xcYXBwXFxwYWdlc1xcaG9zcGl0YWlzXFxob3NwaXRhaXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob3NwaXRhaXMvaG9zcGl0YWlzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUF1QixFQUFBOztBQUkzQjtFQUNJLGNBQXlCLEVBQUE7O0FBSzdCO0VBQ0ksbUJBQStCLEVBQUE7O0FBR25DO0VBQ0ksb0RBQWE7RUFDYiwwQ0FBUTtFQUNSLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDSSxpQ0FBYSxFQUFBOztBQU9qQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTLEVBQUE7O0FBRWI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUVkO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUgzQjtJQUtNLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxtQkFBOEI7RUFDOUIsV0FBVztFQUNYLFlBQVk7RUFFWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVDs7aUJDaEJhO0VEbUJiLGtCQUFrQjtFQUVsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob3NwaXRhaXMvaG9zcGl0YWlzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojNTg5MTkxO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5jYXJkIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDIxMSwgMjEyLCAyMTIpO1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtbWQtaCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ucm93d3tcclxuICAgIC0tYmFja2dyb3VuZDogIHJnYigyMTEsIDIxMiwgMjEyKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi50cmFzaHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwJTsgXHJcbn1cclxuLmJ1aWxke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDI1JTsgXHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4cGFuZC1hcnJvdy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDI5LCAxMDcsIDEzMSk7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgLyogbGVmdDo0MCU7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgcmlnaHQ6IDMwJTsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgIC8vbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgXHJcbn1cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA2MSU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTE7IH1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZGZkZmQ7IH1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZDNkNGQ0OyB9XG5cbi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG5cbi5yb3d3IHtcbiAgLS1iYWNrZ3JvdW5kOiAgcmdiKDIxMSwgMjEyLCAyMTIpOyB9XG5cbi50cmFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAlOyB9XG5cbi5idWlsZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI1JTsgfVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cblxuLmV4cGFuZC1hcnJvdy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuZXhwYW5kLWFycm93LWNvbnRhaW5lciBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA0NHB4OyB9XG5cbi5jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjMWQ2YjgzO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1JTtcbiAgLyogbGVmdDo0MCU7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgcmlnaHQ6IDMwJTsgKi9cbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNjElO1xuICBoZWlnaHQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/hospitais/hospitais.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/hospitais/hospitais.page.ts ***!
  \***************************************************/
/*! exports provided: HospitaisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitaisPage", function() { return HospitaisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__);










var HospitaisPage = /** @class */ (function () {
    function HospitaisPage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder, alertController) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.modalController = modalController;
        this.platform = platform;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.ishidden = true;
    }
    HospitaisPage.prototype.ngOnInit = function () {
        var _this = this;
        this.MostraDados();
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/menu/options/tabs/main');
        });
    };
    HospitaisPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    HospitaisPage.prototype.goTo = function () {
        this.navCtrl.navigateRoot('/incluirhosp');
    };
    HospitaisPage.prototype.goToo = function (code, UF) {
        console.log("code", code);
        sessionStorage.setItem("currentUF", UF);
        console.log("'ÜF:'", UF);
        this.navCtrl.navigateRoot('/edithosp', code);
        sessionStorage.setItem("codigoH", btoa(code));
    };
    //delete(form: NgForm)
    HospitaisPage.prototype.cancelar = function (code) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(code);
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Excluindo...',
                                message: 'Tem certeza que deseja excluir hospital?',
                                buttons: [
                                    {
                                        text: 'NÃO',
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
                                                        console.log('aaa', code);
                                                        this.delete(code);
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
    //delete(form: NgForm)
    HospitaisPage.prototype.delete = function (code) {
        var _this = this;
        console.log(code);
        //create form 
        var myForm;
        // ------ NEW FORM WITH EDIT DATA
        myForm = this.formBuilder.group({
            code: code
        });
        var params = {
            'StatusCRUD': 'Delete',
            'formValues': myForm.value,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("Delete:", params);
        this.Authorizer.QueryStoreProc('Executar', "spHospital", params).then(function (res) {
            var resultado = res;
            _this.alertService.presentAlert({ pTitle: 'Excluindo...', pSubtitle: '', pMessage: 'Hospital excluído com sucesso !' });
        });
        this.MostraDados();
    };
    HospitaisPage.prototype.GravarDados = function (form) {
        var _this = this;
        // paramStatus: Pesquisar, Gravar, Deletar
        form.value.Senha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(form.value.Senha);
        form.value.ReSenha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(form.value.ReSenha);
        var params = {
            'StatusCRUD': 'Gravar',
            'formValues': form.value,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("gravar:", params);
        this.Authorizer.QueryStoreProc('Executar', 'spHospital', params).then(function (res) {
            var resultado = res[0];
            try {
                if (resultado.success) {
                    _this.alertService.showLoader(resultado.message, 1000);
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Minha Conta', pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Minha Conta', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    HospitaisPage.prototype.MostraDados = function () {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando      
        var params = {
            'StatusCRUD': 'Pesquisar',
            'formValues': '',
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log('params', params);
        this.Authorizer.QueryStoreProc('Executar', 'spHospital', params).then(function (res) {
            var resultado = res[0];
            console.log("resultado", resultado);
            try {
                if (resultado.success) {
                    _this.a = JSON.parse(resultado.results);
                    console.log('this.a', _this.a);
                    //this.alertService.showLoader(resultado.message, 1000);
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Hospitais', pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Hospitais', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    HospitaisPage.prototype.expandFazenda = function () {
        this.ishidden = !this.ishidden;
    };
    HospitaisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hospitais',
            template: __webpack_require__(/*! ./hospitais.page.html */ "./src/app/pages/hospitais/hospitais.page.html"),
            styles: [__webpack_require__(/*! ./hospitais.page.scss */ "./src/app/pages/hospitais/hospitais.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], HospitaisPage);
    return HospitaisPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-hospitais-hospitais-module.js.map