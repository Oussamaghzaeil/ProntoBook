(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-naocumpridasrdvs-naocumpridasrdvs-module"],{

/***/ "./src/app/pages/naocumpridasrdvs/naocumpridasrdvs.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/naocumpridasrdvs/naocumpridasrdvs.module.ts ***!
  \*******************************************************************/
/*! exports provided: NaocumpridasrdvsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaocumpridasrdvsPageModule", function() { return NaocumpridasrdvsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _naocumpridasrdvs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./naocumpridasrdvs.page */ "./src/app/pages/naocumpridasrdvs/naocumpridasrdvs.page.ts");







var routes = [
    {
        path: '',
        component: _naocumpridasrdvs_page__WEBPACK_IMPORTED_MODULE_6__["NaocumpridasrdvsPage"]
    }
];
var NaocumpridasrdvsPageModule = /** @class */ (function () {
    function NaocumpridasrdvsPageModule() {
    }
    NaocumpridasrdvsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_naocumpridasrdvs_page__WEBPACK_IMPORTED_MODULE_6__["NaocumpridasrdvsPage"]]
        })
    ], NaocumpridasrdvsPageModule);
    return NaocumpridasrdvsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/naocumpridasrdvs/naocumpridasrdvs.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/naocumpridasrdvs/naocumpridasrdvs.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"primary\">\n        <ion-button (click)=\"goBack()\">\n          <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Compromissos Não Cumpridos</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n    <form #form=\"ngForm\" method=\"post\">\n      <div *ngFor=\"let sa of a; let i =index \">\n        <ion-card class=\"card\">\n          <ion-card-header>\n            <ion-card-title>\n                <ion-grid>\n                    <ion-row>\n                      <ion-col>\n                 {{sa.Nome}} {{sa.Sobrenome}}\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content >\n            <div >\n  \n              <ion-grid>\n                <ion-row >\n                  <ion-col id=\"{{sa.code}}\">\n  \n                      <ion-item class=\"roww\" lines=\"none\">\n                        <ion-label>Espacialidade:</ion-label>\n                        {{sa.Especialidades}}\n                      </ion-item>\n  \n                      <ion-item class=\"roww\" lines=\"none\">\n                        <ion-label>Hospital:</ion-label>\n                        {{sa.Hospitais}}\n                      </ion-item>\n\n                      <ion-item class=\"roww\" lines=\"none\">\n                        <ion-label>Data:</ion-label>\n                        {{sa.DataDoAtendimento}}\n                      </ion-item>\n\n\n                      <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                        <ion-label>Sexo:</ion-label>\n                        {{sa.Sexo}}\n                      </ion-item>\n  \n                      <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                        <ion-label>CPF:</ion-label>\n                        {{sa.CPF}}\n                      </ion-item>\n  \n                      <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                          <ion-label>Doutor:</ion-label>\n                          {{sa.Doutor}}\n                      </ion-item>\n  \n                      <div class=\"expand-arrow-container\" (click)=\"expandFazenda()\">\n                        <ion-icon name=\"ios-arrow-dropdown-circle\" *ngIf=\"ishidden\"></ion-icon>\n                        <ion-icon name=\"ios-arrow-dropup-circle\" *ngIf=\"!ishidden\"></ion-icon>\n                      </div>\n \n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n  \n  \n    </form>\n  </ion-content>\n  \n  \n  <!--<ion-button type=\"submit\"  (click)=\"delete(sa.code)\"   expand=\"full\" class=\"at_but\">delete</ion-button>-->"

/***/ }),

/***/ "./src/app/pages/naocumpridasrdvs/naocumpridasrdvs.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/naocumpridasrdvs/naocumpridasrdvs.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#7CBBBA; }\n\nion-title {\n  color: #fdfdfd; }\n\nion-icon {\n  font-size: 30px; }\n\n.card {\n  background: #d3d4d4; }\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 10px; }\n\n.roww {\n  --background:  rgb(211, 212, 212); }\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container ion-icon {\n    font-size: 44px; }\n\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  height: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 30px;\n  height: 30px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmFvY3VtcHJpZGFzcmR2cy9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXG5hb2N1bXByaWRhc3JkdnNcXG5hb2N1bXByaWRhc3JkdnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0ksbUJBQStCLEVBQUE7O0FBR25DO0VBQ0ksb0RBQWE7RUFDYiwwQ0FBUTtFQUNSLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQ0FBYSxFQUFBOztBQUtqQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFIM0I7SUFLTSxlQUFlLEVBQUE7O0FBSXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uYW9jdW1wcmlkYXNyZHZzL25hb2N1bXByaWRhc3JkdnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM3Q0JCQkE7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxuICAgIFxyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7IC8vUHJlZmVycmVkIHNpemUgaGVyZVxyXG59XHJcblxyXG5cclxuLmNhcmQgeyBcclxuICAgIGJhY2tncm91bmQ6ICByZ2IoMjExLCAyMTIsIDIxMik7XHJcbn1cclxuXHJcbi5zYy1pb24tY2FyZC1tZC1oIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnJvd3d7XHJcbiAgICAtLWJhY2tncm91bmQ6ICByZ2IoMjExLCAyMTIsIDIxMik7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4cGFuZC1hcnJvdy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNjAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/naocumpridasrdvs/naocumpridasrdvs.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/naocumpridasrdvs/naocumpridasrdvs.page.ts ***!
  \*****************************************************************/
/*! exports provided: NaocumpridasrdvsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaocumpridasrdvsPage", function() { return NaocumpridasrdvsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var NaocumpridasrdvsPage = /** @class */ (function () {
    function NaocumpridasrdvsPage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder, db) {
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
    NaocumpridasrdvsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.MostraDados();
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/agenda');
        });
    };
    NaocumpridasrdvsPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    NaocumpridasrdvsPage.prototype.MostraDados = function () {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando      
        var params = {
            'StatusCRUD': 'Pesquisarnaocumpridas',
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
    NaocumpridasrdvsPage.prototype.expandFazenda = function () {
        this.ishidden = !this.ishidden;
    };
    NaocumpridasrdvsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-naocumpridasrdvs',
            template: __webpack_require__(/*! ./naocumpridasrdvs.page.html */ "./src/app/pages/naocumpridasrdvs/naocumpridasrdvs.page.html"),
            styles: [__webpack_require__(/*! ./naocumpridasrdvs.page.scss */ "./src/app/pages/naocumpridasrdvs/naocumpridasrdvs.page.scss")]
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
    ], NaocumpridasrdvsPage);
    return NaocumpridasrdvsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-naocumpridasrdvs-naocumpridasrdvs-module.js.map