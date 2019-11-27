(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recuperasenha-recuperasenha-module"],{

/***/ "./src/app/pages/recuperasenha/recuperasenha.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/recuperasenha/recuperasenha.module.ts ***!
  \*************************************************************/
/*! exports provided: RecuperasenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperasenhaPageModule", function() { return RecuperasenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recuperasenha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recuperasenha.page */ "./src/app/pages/recuperasenha/recuperasenha.page.ts");







var routes = [
    {
        path: '',
        component: _recuperasenha_page__WEBPACK_IMPORTED_MODULE_6__["RecuperasenhaPage"]
    }
];
var RecuperasenhaPageModule = /** @class */ (function () {
    function RecuperasenhaPageModule() {
    }
    RecuperasenhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recuperasenha_page__WEBPACK_IMPORTED_MODULE_6__["RecuperasenhaPage"]]
        })
    ], RecuperasenhaPageModule);
    return RecuperasenhaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/recuperasenha/recuperasenha.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/recuperasenha/recuperasenha.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Recuperar Senha</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row text-center>\n      <ion-col><img src=\"/assets/imgs/logo1.png\" width=\"100px\" height=\"100px\"></ion-col>\n    </ion-row>\n    <h3 text-center>Verificando se é você...</h3>\n  </ion-grid>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"MinhaConta(form)\" method=\"post\">\n\n    <ion-label position=\"floating\">Digite seu e-mail:</ion-label>\n    <ion-input #email ngModel type=\"email\" name=\"email\" pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}\"\n      required></ion-input>\n\n\n\n    <ion-label position=\"floating\">Token:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Digite o número do token (Opcional)\" name=\"Token\" value=\"{{ Token  }}\">\n    </ion-input>\n\n    <ion-label position=\"floating\">Senha:</ion-label>\n    <ion-input ngModel type=\"password\" [disabled]=\"true\" placeholder=\"Digite a Senha\" name=\"Senha\" required>\n    </ion-input>\n\n    <ion-label position=\"floating\">Repita a Senha:</ion-label>\n    <ion-input ngModel type=\"password\" [disabled]=\"true\" placeholder=\"Repita a Senha\" name=\"ReSenha\" required>\n    </ion-input>\n\n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\"  class=\"at_but\">Recuperar Senha</ion-button>\n    </div>\n  </form>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/recuperasenha/recuperasenha.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/recuperasenha/recuperasenha.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjdXBlcmFzZW5oYS9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXHJlY3VwZXJhc2VuaGFcXHJlY3VwZXJhc2VuaGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxzQkFBYTtFQUViLHFCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBSWQ7RUFFSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdEQUF3RDtFQUN4RCxrQkFBa0I7RUFLbEIscUJBQWM7RUFDZCx3QkFBaUI7RUFDakIsdUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWN1cGVyYXNlbmhhL3JlY3VwZXJhc2VuaGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTE7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxuICAgIFxyXG59XHJcblxyXG4uYXRfYnV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzdDQkJCQTtcclxuICAgXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG5cclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIC8vZm9udC1zaXplOjEuMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGJvcmRlcjogMC41NXB4IHNvbGlkIHJnYmEoMTIxLCAxMjEsIDEyMSwgMC40KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8tLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcclxuICAgIC8vLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAvLy0tb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLy9vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwLjdyZW07XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwLjdyZW07XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNnJlbTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/recuperasenha/recuperasenha.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/recuperasenha/recuperasenha.page.ts ***!
  \***********************************************************/
/*! exports provided: RecuperasenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperasenhaPage", function() { return RecuperasenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__);







var RecuperasenhaPage = /** @class */ (function () {
    function RecuperasenhaPage(navCtrl, alertService, env, Authorizer, Eventos, modalController, platform) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.Eventos = Eventos;
        this.modalController = modalController;
        this.platform = platform;
    }
    RecuperasenhaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.backButton.subscribe(function () {
            _this.goBack();
        });
    };
    RecuperasenhaPage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        console.log("ionViewWillEnter");
    };
    RecuperasenhaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Disparado quando o roteamento de componentes terminou de ser animado.        
        console.log("ionViewDidEnter");
        setTimeout(function () {
            _this.iemail.setFocus();
        }, 150);
    };
    RecuperasenhaPage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.    
        console.log("ionViewWillLeave");
    };
    RecuperasenhaPage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        console.log("ionViewDidLeave");
    };
    RecuperasenhaPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    RecuperasenhaPage.prototype.MinhaConta = function (form) {
        var _this = this;
        // paramStatus: Pesquisar, Gravar, Deletar, Recupera
        form.value.Senha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__["Md5"].hashStr(form.value.Senha);
        form.value.ReSenha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__["Md5"].hashStr(form.value.ReSenha);
        var params = {
            'StatusCRUD': 'Recupera',
            'formValues': form.value,
            'CodigoUsuarioSistema': 0,
            'Hashkey': ''
        };
        this.Authorizer.QueryStoreProc('MinhaConta', 'spRecuperaSenha', params).then(function (res) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('email'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecuperasenhaPage.prototype, "iemail", void 0);
    RecuperasenhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recuperasenha',
            template: __webpack_require__(/*! ./recuperasenha.page.html */ "./src/app/pages/recuperasenha/recuperasenha.page.html"),
            styles: [__webpack_require__(/*! ./recuperasenha.page.scss */ "./src/app/pages/recuperasenha/recuperasenha.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], RecuperasenhaPage);
    return RecuperasenhaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-recuperasenha-recuperasenha-module.js.map