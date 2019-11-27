(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cumpridasrdvs-cumpridasrdvs-module"],{

/***/ "./src/app/pages/cumpridasrdvs/cumpridasrdvs.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/cumpridasrdvs/cumpridasrdvs.module.ts ***!
  \*************************************************************/
/*! exports provided: CumpridasrdvsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CumpridasrdvsPageModule", function() { return CumpridasrdvsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cumpridasrdvs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cumpridasrdvs.page */ "./src/app/pages/cumpridasrdvs/cumpridasrdvs.page.ts");







var routes = [
    {
        path: '',
        component: _cumpridasrdvs_page__WEBPACK_IMPORTED_MODULE_6__["CumpridasrdvsPage"]
    }
];
var CumpridasrdvsPageModule = /** @class */ (function () {
    function CumpridasrdvsPageModule() {
    }
    CumpridasrdvsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cumpridasrdvs_page__WEBPACK_IMPORTED_MODULE_6__["CumpridasrdvsPage"]]
        })
    ], CumpridasrdvsPageModule);
    return CumpridasrdvsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cumpridasrdvs/cumpridasrdvs.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/cumpridasrdvs/cumpridasrdvs.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Compromissos cumpridos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" method=\"post\">\n    <div *ngFor=\"let sa of a; let i =index \">\n      <ion-card class=\"card\">\n        <ion-card-header>\n          <ion-card-title>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n\n                  {{sa.Nome}} {{sa.Sobrenome}}\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <div>\n\n            <ion-grid>\n              <ion-row >\n                <ion-col id=\"{{sa.code}}\">\n\n\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Espacialidade:</ion-label>\n                    {{sa.Especialidades}}\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Hospital:</ion-label>\n                    {{sa.Hospitais}}\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Data:</ion-label>\n                    {{sa.DataDoAtendimento}}\n                  </ion-item>\n\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>Sexo:</ion-label>\n                    {{sa.Sexo}}\n                  </ion-item>\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>CPF:</ion-label>\n                    {{sa.CPF}}\n                  </ion-item>\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>Doutor:</ion-label>\n                    {{sa.Doutor}}\n                  </ion-item>\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>Descrição:</ion-label>\n                    {{sa.desc}}\n                  </ion-item>\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>Sintomas:</ion-label>\n                    {{sa.sintomas}}\n                  </ion-item>\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>Diagnosticos:</ion-label>\n                    {{sa.diagno}}\n                  </ion-item>\n\n                  <div class=\"expand-arrow-container\" (click)=\"expandFazenda()\">\n                    <ion-icon name=\"ios-arrow-dropdown-circle\" *ngIf=\"ishidden\"></ion-icon>\n                    <ion-icon name=\"ios-arrow-dropup-circle\" *ngIf=\"!ishidden\"></ion-icon>\n                  </div>\n\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n  </form>\n</ion-content>\n\n\n<!--<ion-button type=\"submit\"  (click)=\"delete(sa.code)\"   expand=\"full\" class=\"at_but\">delete</ion-button>-->"

/***/ }),

/***/ "./src/app/pages/cumpridasrdvs/cumpridasrdvs.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/cumpridasrdvs/cumpridasrdvs.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\nion-icon {\n  font-size: 30px; }\n\n.card {\n  background: #d3d4d4; }\n\n.roww {\n  --background:  rgb(211, 212, 212); }\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 10px; }\n\n.roww {\n  --background:  rgb(211, 212, 212); }\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container ion-icon {\n    font-size: 44px; }\n\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  height: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 30px;\n  height: 30px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VtcHJpZGFzcmR2cy9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXGN1bXByaWRhc3JkdnNcXGN1bXByaWRhc3JkdnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0ksbUJBQStCLEVBQUE7O0FBR25DO0VBQ0ksaUNBQWEsRUFBQTs7QUFNakI7RUFDSSxvREFBYTtFQUNiLDBDQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlDQUFhLEVBQUE7O0FBT2pCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUgzQjtJQUtNLGVBQWUsRUFBQTs7QUFJckI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1bXByaWRhc3JkdnMvY3VtcHJpZGFzcmR2cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTtcclxuICAgIFxyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbn1cclxuXHJcblxyXG4uY2FyZCB7IFxyXG4gICAgYmFja2dyb3VuZDogIHJnYigyMTEsIDIxMiwgMjEyKTtcclxufVxyXG5cclxuLnJvd3d7XHJcbiAgICAtLWJhY2tncm91bmQ6ICByZ2IoMjExLCAyMTIsIDIxMik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zYy1pb24tY2FyZC1tZC1oIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnJvd3d7XHJcbiAgICAtLWJhY2tncm91bmQ6ICByZ2IoMjExLCAyMTIsIDIxMik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXhwYW5kLWFycm93LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/cumpridasrdvs/cumpridasrdvs.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/cumpridasrdvs/cumpridasrdvs.page.ts ***!
  \***********************************************************/
/*! exports provided: CumpridasrdvsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CumpridasrdvsPage", function() { return CumpridasrdvsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var CumpridasrdvsPage = /** @class */ (function () {
    function CumpridasrdvsPage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder, db) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.modalController = modalController;
        this.platform = platform;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.db = db;
        this.ishidden = true;
    }
    CumpridasrdvsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.MostraDados();
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/agenda');
        });
    };
    CumpridasrdvsPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    CumpridasrdvsPage.prototype.MostraDados = function () {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando      
        var params = {
            'StatusCRUD': 'Pesquisarcumpridas',
            'formValues': '',
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log('params', params);
        this.Authorizer.QueryStoreProc('Executar', 'spAtendimento', params).then(function (res) {
            var resultado = res[0];
            console.log("resultado", resultado);
            try {
                if (resultado.success) {
                    _this.a = JSON.parse(resultado.results);
                    console.log('this.a', _this.a);
                    //this.alertService.showLoader(resultado.message, 1000);
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Atendimento', pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Atendimento', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    CumpridasrdvsPage.prototype.expandFazenda = function () {
        this.ishidden = !this.ishidden;
    };
    CumpridasrdvsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cumpridasrdvs',
            template: __webpack_require__(/*! ./cumpridasrdvs.page.html */ "./src/app/pages/cumpridasrdvs/cumpridasrdvs.page.html"),
            styles: [__webpack_require__(/*! ./cumpridasrdvs.page.scss */ "./src/app/pages/cumpridasrdvs/cumpridasrdvs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
    ], CumpridasrdvsPage);
    return CumpridasrdvsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cumpridasrdvs-cumpridasrdvs-module.js.map