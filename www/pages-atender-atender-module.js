(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-atender-atender-module"],{

/***/ "./src/app/pages/atender/atender.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/atender/atender.module.ts ***!
  \*************************************************/
/*! exports provided: AtenderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtenderPageModule", function() { return AtenderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _atender_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./atender.page */ "./src/app/pages/atender/atender.page.ts");







var routes = [
    {
        path: '',
        component: _atender_page__WEBPACK_IMPORTED_MODULE_6__["AtenderPage"]
    }
];
var AtenderPageModule = /** @class */ (function () {
    function AtenderPageModule() {
    }
    AtenderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_atender_page__WEBPACK_IMPORTED_MODULE_6__["AtenderPage"]]
        })
    ], AtenderPageModule);
    return AtenderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/atender/atender.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/atender/atender.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Atendimento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"Criacao(form);\" method=\"post\">\n\n    <div>\n      <ion-card *ngFor=\"let sa of result \" class=\"card\">\n        <ion-card-header>\n          <ion-card-title>\n            <tr>\n              Atendimento nº : {{sa.id}}\n            </tr>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"container\">\n          <div class=\"container\">\n\n            <ion-grid>\n              <ion-row>\n                <ion-col id=\"{{sa.CPF}}\">\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Paciente:</ion-label>\n                    {{sa.name}} {{sa.last_name}}\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>E-mail:</ion-label>\n                    {{sa.email}}\n                  </ion-item>\n\n                  \n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n\n    <ion-label position=\"floating\">Descrição:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Informe Descrição \" name=\"desc\" required value=\"{{ desc  }}\">\n    </ion-input>\n\n    <ion-label position=\"floating\">Sintomas:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Informe Sintomas \" name=\"Sintomas\" required value=\"{{ Sintomas  }}\">\n    </ion-input>\n\n    <ion-label position=\"floating\">Diagnósticos:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Informe Diagnósticos \" name=\"Diagnosticos\" required\n      value=\"{{ Diagnosticos  }}\"></ion-input>\n\n\n    <ion-button type=\"submit\" [disabled]=\"!form.valid\"  class=\"at_but\">Salvar</ion-button>\n  </form>\n</ion-content>\n\n\n<!--<ion-button type=\"submit\"  (click)=\"delete(sa.code)\"   expand=\"full\" class=\"at_but\">delete</ion-button>-->"

/***/ }),

/***/ "./src/app/pages/atender/atender.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/atender/atender.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.pes_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%;\n  position: absolute;\n  bottom: 5%;\n  right: 4.5%; }\n\n.card {\n  background: #d3d4d4; }\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 10px; }\n\n.roww {\n  --background:  rgb(211, 212, 212); }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%;\n  position: absolute;\n  bottom: 5%;\n  right: 4.5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXRlbmRlci9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXGF0ZW5kZXJcXGF0ZW5kZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxzQkFBYTtFQUViLHFCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBSWY7RUFDSSxtQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSxvREFBYTtFQUNiLDBDQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGlDQUFhLEVBQUE7O0FBT2pCO0VBRUksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3REFBd0Q7RUFDeEQsa0JBQWtCO0VBS2xCLHFCQUFjO0VBQ2Qsd0JBQWlCO0VBQ2pCLHVCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFhO0VBRWIscUJBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0ZW5kZXIvYXRlbmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTtcclxuICAgIFxyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5wZXNfYnV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzdDQkJCQTtcclxuICAgXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIHJpZ2h0OiA0LjUlO1xyXG5cclxufVxyXG5cclxuLmNhcmQgeyBcclxuICAgIGJhY2tncm91bmQ6ICByZ2IoMjExLCAyMTIsIDIxMik7XHJcbn1cclxuXHJcbi5zYy1pb24tY2FyZC1tZC1oIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ucm93d3tcclxuICAgIC0tYmFja2dyb3VuZDogIHJnYigyMTEsIDIxMiwgMjEyKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICAvL2ZvbnQtc2l6ZToxLjJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDAuNTVweCBzb2xpZCByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuNCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAvLy0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLy8tLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC8vb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZyZW07XHJcbiAgfVxyXG5cclxuICAuYXRfYnV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzdDQkJCQTtcclxuICAgXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIHJpZ2h0OiA0LjUlO1xyXG5cclxuICBcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/atender/atender.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/atender/atender.page.ts ***!
  \***********************************************/
/*! exports provided: AtenderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtenderPage", function() { return AtenderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var AtenderPage = /** @class */ (function () {
    function AtenderPage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder, db) {
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
    AtenderPage.prototype.ngOnInit = function () {
        this.dados = sessionStorage.getItem('atendimento');
        console.log(this.dados);
        this.atualizarr();
    };
    AtenderPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    AtenderPage.prototype.atualizarr = function () {
        var _this = this;
        var params = {
            'StatusCRUD': 'Pesquisaratender1',
            'formValues': this.dados,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("Pesquisar:", params);
        this.Authorizer.QueryStoreProc('Executar', "spAtendimento", params).then(function (res) {
            var resultado = res[0];
            console.log(resultado);
            try {
                if (resultado.success) {
                    _this.result = JSON.parse(resultado.results);
                    _this.Nome = JSON.parse(resultado.results)[0].name;
                    _this.SobreNome = JSON.parse(resultado.results)[0].last_name;
                    _this.Email = JSON.parse(resultado.results)[0].email;
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: ' Não  paciente' });
                    //this.navCtrl.navigateRoot('/login');
                    _this.Nome = '';
                    _this.SobreNome = '';
                    _this.Email = '';
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Patient', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    AtenderPage.prototype.Criacao = function (form) {
        var _this = this;
        // paramStatus: Pesquisar, Gravar, Deletar
        form.value.SobreNome = this.SobreNome;
        form.value.Nome = this.Nome;
        form.value.Email = this.Email;
        form.value.CPF = this.dados;
        console.log(form.value);
        var params = {
            'StatusCRUD': 'Addatender',
            'formValues': form.value,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("Novo Atendimento:", params);
        this.Authorizer.QueryStoreProc('Executar', 'spAtendimento', params).then(function (res) {
            var resultado = res[0];
            console.log(resultado);
            try {
                if (resultado.success) {
                    _this.alertService.presentAlert({ pTitle: 'Salvando...', pSubtitle: '', pMessage: 'Operação realizada com sucesso!' });
                    _this.alertService.showLoader(resultado.message, 1000);
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'Atenção', pSubtitle: 'Erro', pMessage: 'Verifique seus dados' });
            }
        });
        sessionStorage.removeItem('rdv');
        this.goBack();
    };
    AtenderPage.prototype.cumpridas = function (cpf) {
        var _this = this;
        console.log(cpf);
        //create form 
        var myForm;
        // ------ NEW FORM WITH EDIT DATA
        myForm = this.formBuilder.group({
            cpf: cpf
        });
        var params = {
            'StatusCRUD': 'Cumpridas',
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
                    _this.alertService.presentAlert({ pTitle: 'Salvando...', pSubtitle: '', pMessage: 'Operação realizada com sucesso!' });
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: 'você não pode excluir este paciente' });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Erro', pMessage: 'Nenhum usuário!' });
            }
        });
        this.dados = sessionStorage.setItem('rdv', "");
        this.ngOnInit();
    };
    AtenderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-atender',
            template: __webpack_require__(/*! ./atender.page.html */ "./src/app/pages/atender/atender.page.html"),
            styles: [__webpack_require__(/*! ./atender.page.scss */ "./src/app/pages/atender/atender.page.scss")]
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
    ], AtenderPage);
    return AtenderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-atender-atender-module.js.map