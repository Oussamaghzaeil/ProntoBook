(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-novoevento-novoevento-module"],{

/***/ "./src/app/pages/novoevento/novoevento.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/novoevento/novoevento.module.ts ***!
  \*******************************************************/
/*! exports provided: NovoeventoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoeventoPageModule", function() { return NovoeventoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _novoevento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./novoevento.page */ "./src/app/pages/novoevento/novoevento.page.ts");







var routes = [
    {
        path: '',
        component: _novoevento_page__WEBPACK_IMPORTED_MODULE_6__["NovoeventoPage"]
    }
];
var NovoeventoPageModule = /** @class */ (function () {
    function NovoeventoPageModule() {
    }
    NovoeventoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_novoevento_page__WEBPACK_IMPORTED_MODULE_6__["NovoeventoPage"]]
        })
    ], NovoeventoPageModule);
    return NovoeventoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/novoevento/novoevento.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/novoevento/novoevento.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Criar Novo Evento</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"atualizar(form);\" method=\"post\">\n\n\n\n    <ion-label position=\"floating\">Nome:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Nome do evento\" name=\"Nome\" required value=\"{{ Nome  }}\"> </ion-input>\n\n    <ion-label position=\"floating\">Data do evento:</ion-label>\n    <ion-datetime ngModel type=\"text\" doneText='OK' cancelText='CANCELAR' displayFormat=\"DD/MM/YYYY\"\n      placeholder=\"DD/MM/AAAA \" name=\"DataDoEvento\" required value=\"{{ DataDoEvento  }}\"></ion-datetime>\n\n\n\n    <ion-label position=\"floating\">Link do evento:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Link do evento\" name=\"link\" required value=\"{{ link  }}\">\n    </ion-input>\n\n\n\n\n    <ion-label position=\"floating\">Descrição do evento:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Descrição do evento\" name=\"desc\" required value=\"{{ desc  }}\">\n    </ion-input>\n\n\n\n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"at_but\">Criar</ion-button>\n    </div>\n\n\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/novoevento/novoevento.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/novoevento/novoevento.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\nion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm92b2V2ZW50by9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXG5vdm9ldmVudG9cXG5vdm9ldmVudG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVk7RUFBWixhQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUVJLDhCQUF1QixFQUFBOztBQUkzQjtFQUNJLGNBQXlCLEVBQUE7O0FBSTdCO0VBQ0ksc0JBQWE7RUFFYixxQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQVFkO0VBRUksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3REFBd0Q7RUFDeEQsa0JBQWtCO0VBS2xCLHFCQUFjO0VBQ2Qsd0JBQWlCO0VBQ2pCLHVCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm92b2V2ZW50by9ub3ZvZXZlbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG5pb24taGVhZGVye1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTtcclxuICAgIFxyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5hdF9idXR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICAjN0NCQkJBO1xyXG4gICBcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIC8vZm9udC1zaXplOjEuMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGJvcmRlcjogMC41NXB4IHNvbGlkIHJnYmEoMTIxLCAxMjEsIDEyMSwgMC40KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8tLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcclxuICAgIC8vLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAvLy0tb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLy9vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwLjdyZW07XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwLjdyZW07XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNnJlbTtcclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/novoevento/novoevento.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/novoevento/novoevento.page.ts ***!
  \*****************************************************/
/*! exports provided: NovoeventoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoeventoPage", function() { return NovoeventoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");







var NovoeventoPage = /** @class */ (function () {
    function NovoeventoPage(navCtrl, alertService, env, Authorizer, modalController, platform) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.modalController = modalController;
        this.platform = platform;
    }
    NovoeventoPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ionViewDidEnter");
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/noticias');
        });
    };
    NovoeventoPage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        //console.log("ionViewWillEnter");
        //this.CRUDActionAPIForm('Pesquisando', null);  
    };
    NovoeventoPage.prototype.ionViewDidEnter = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.        
        //this.MostraDados(JSON.parse(sessionStorage.getItem('SessionUser'))[0].CodigoUsuario);   
        console.log("ionViewDidEnter");
        /*
        setTimeout(() => {
          this.iNome.setFocus();
        },150);
        */
    };
    NovoeventoPage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.    
    };
    NovoeventoPage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        //console.log("ionViewDidLeave");    
    };
    NovoeventoPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    NovoeventoPage.prototype.atualizar = function (form) {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando      
        var params = {
            'StatusCRUD': 'Criacao',
            'formValues': form.value,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("valores:", params);
        this.Authorizer.QueryStoreProc('Executar', 'spEventos', params).then(function (res) {
            var resultado = res[0];
            console.log("resultado", resultado);
            try {
                if (resultado.success) {
                    _this.alertService.showLoader(resultado.message, 1000);
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Novo Evento', pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Novo Evento', pMessage: 'Nenhum usuário!' });
            }
        });
        this.goBack();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Nome'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NovoeventoPage.prototype, "iNome", void 0);
    NovoeventoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-novoevento',
            template: __webpack_require__(/*! ./novoevento.page.html */ "./src/app/pages/novoevento/novoevento.page.html"),
            styles: [__webpack_require__(/*! ./novoevento.page.scss */ "./src/app/pages/novoevento/novoevento.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], NovoeventoPage);
    return NovoeventoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-novoevento-novoevento-module.js.map