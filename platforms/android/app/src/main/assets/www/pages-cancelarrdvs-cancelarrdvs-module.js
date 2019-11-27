(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cancelarrdvs-cancelarrdvs-module"],{

/***/ "./src/app/pages/cancelarrdvs/cancelarrdvs.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/cancelarrdvs/cancelarrdvs.module.ts ***!
  \***********************************************************/
/*! exports provided: CancelarrdvsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelarrdvsPageModule", function() { return CancelarrdvsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cancelarrdvs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancelarrdvs.page */ "./src/app/pages/cancelarrdvs/cancelarrdvs.page.ts");







var routes = [
    {
        path: '',
        component: _cancelarrdvs_page__WEBPACK_IMPORTED_MODULE_6__["CancelarrdvsPage"]
    }
];
var CancelarrdvsPageModule = /** @class */ (function () {
    function CancelarrdvsPageModule() {
    }
    CancelarrdvsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cancelarrdvs_page__WEBPACK_IMPORTED_MODULE_6__["CancelarrdvsPage"]]
        })
    ], CancelarrdvsPageModule);
    return CancelarrdvsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cancelarrdvs/cancelarrdvs.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/cancelarrdvs/cancelarrdvs.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Compromissos Cancelados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" method=\"post\">\n    <div *ngFor=\"let sa of a; let i =index \">\n      <ion-card class=\"card\">\n        <ion-card-header>\n          <ion-card-title>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  {{sa.Nome}} {{sa.Sobrenome}}\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content >\n          <div>\n\n            <ion-grid>\n              <ion-row>\n                <ion-col id=\"{{sa.code}}\">\n\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Espacialidade:</ion-label>\n                    {{sa.Especialidades}}\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Hospital:</ion-label>\n                    {{sa.Hospitais}}\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Data:</ion-label>\n                    {{sa.DataDoAtendimento}}\n                  </ion-item>\n\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>Sexo:</ion-label>\n                    {{sa.Sexo}}\n                  </ion-item>\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>CPF:</ion-label>\n                    {{sa.CPF}}\n                  </ion-item>\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>Doutor:</ion-label>\n                    {{sa.Doutor}}\n                  </ion-item>\n\n                  <div class=\"expand-arrow-container\" (click)=\"expandFazenda()\">\n                    <ion-icon name=\"ios-arrow-dropdown-circle\" *ngIf=\"ishidden\"></ion-icon>\n                    <ion-icon name=\"ios-arrow-dropup-circle\" *ngIf=\"!ishidden\"></ion-icon>\n                  </div>\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n  </form>\n</ion-content>\n\n\n<!--<ion-button type=\"submit\"  (click)=\"delete(sa.code)\"   expand=\"full\" class=\"at_but\">delete</ion-button>-->"

/***/ }),

/***/ "./src/app/pages/cancelarrdvs/cancelarrdvs.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/cancelarrdvs/cancelarrdvs.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#7CBBBA; }\n\nion-title {\n  color: #fdfdfd; }\n\nion-icon {\n  font-size: 30px; }\n\n.card {\n  background: #d3d4d4; }\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 10px; }\n\n.roww {\n  --background:  rgb(211, 212, 212); }\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container ion-icon {\n    font-size: 44px; }\n\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  height: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 30px;\n  height: 30px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FuY2VsYXJyZHZzL0M6XFxVc2Vyc1xcTGV2ZWxcXERlc2t0b3BcXG91c3NhbWFcXFByb250byBCb29rL3NyY1xcYXBwXFxwYWdlc1xcY2FuY2VsYXJyZHZzXFxjYW5jZWxhcnJkdnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0ksbUJBQStCLEVBQUE7O0FBR25DO0VBQ0ksb0RBQWE7RUFDYiwwQ0FBUTtFQUNSLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQ0FBYSxFQUFBOztBQU1qQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFIM0I7SUFLTSxlQUFlLEVBQUE7O0FBSXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYW5jZWxhcnJkdnMvY2FuY2VsYXJyZHZzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojN0NCQkJBO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyAvL1ByZWZlcnJlZCBzaXplIGhlcmVcclxufVxyXG5cclxuXHJcbi5jYXJkIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDIxMSwgMjEyLCAyMTIpO1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtbWQtaCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5yb3d3e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgcmdiKDIxMSwgMjEyLCAyMTIpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXhwYW5kLWFycm93LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/cancelarrdvs/cancelarrdvs.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cancelarrdvs/cancelarrdvs.page.ts ***!
  \*********************************************************/
/*! exports provided: CancelarrdvsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelarrdvsPage", function() { return CancelarrdvsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var CancelarrdvsPage = /** @class */ (function () {
    function CancelarrdvsPage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder, db) {
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
    CancelarrdvsPage.prototype.ngOnInit = function () {
        this.MostraDados();
    };
    CancelarrdvsPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    CancelarrdvsPage.prototype.MostraDados = function () {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando      
        var params = {
            'StatusCRUD': 'Pesquisarcancelar',
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
    CancelarrdvsPage.prototype.expandFazenda = function () {
        this.ishidden = !this.ishidden;
    };
    CancelarrdvsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cancelarrdvs',
            template: __webpack_require__(/*! ./cancelarrdvs.page.html */ "./src/app/pages/cancelarrdvs/cancelarrdvs.page.html"),
            styles: [__webpack_require__(/*! ./cancelarrdvs.page.scss */ "./src/app/pages/cancelarrdvs/cancelarrdvs.page.scss")]
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
    ], CancelarrdvsPage);
    return CancelarrdvsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cancelarrdvs-cancelarrdvs-module.js.map