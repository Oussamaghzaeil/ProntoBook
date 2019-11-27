(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consultrdv-consultrdv-module"],{

/***/ "./src/app/pages/consultrdv/consultrdv.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/consultrdv/consultrdv.module.ts ***!
  \*******************************************************/
/*! exports provided: ConsultrdvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultrdvPageModule", function() { return ConsultrdvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consultrdv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultrdv.page */ "./src/app/pages/consultrdv/consultrdv.page.ts");







var routes = [
    {
        path: '',
        component: _consultrdv_page__WEBPACK_IMPORTED_MODULE_6__["ConsultrdvPage"]
    }
];
var ConsultrdvPageModule = /** @class */ (function () {
    function ConsultrdvPageModule() {
    }
    ConsultrdvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_consultrdv_page__WEBPACK_IMPORTED_MODULE_6__["ConsultrdvPage"]]
        })
    ], ConsultrdvPageModule);
    return ConsultrdvPageModule;
}());



/***/ }),

/***/ "./src/app/pages/consultrdv/consultrdv.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/consultrdv/consultrdv.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Consulte as nomeações</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"atualizar(form);\" method=\"post\">\n    <ion-card>\n      <ion-card-content>\n        <ion-list>\n\n\n          <h2>\n            <ion-label position=\"floating\">Hospitais:</ion-label>\n          </h2>\n          <ion-select interface=\"popover\" ngModel name=\"hos\" placeholder=\"(Escolha  hospital)\">\n            <ion-select-option *ngFor=\"let sa of a\">{{sa.nome}}</ion-select-option>\n          </ion-select>\n\n        </ion-list>\n        \n\n        <ion-list>\n\n          <h2>\n            <ion-label position=\"floating\">Especialidades:</ion-label>\n          </h2>\n          <ion-select interface=\"popover\" ngModel name=\"es\" placeholder=\"(Escolha especialidade)\">\n            <ion-select-option *ngFor=\"let sa of b\">{{sa.nome}}</ion-select-option>\n          </ion-select>\n\n        </ion-list>\n\n\n\n        <h2>\n          <ion-label>Data de início</ion-label>\n        </h2>\n        <ion-datetime displayFormat=\"MM/DD/YYYY\" done-text='OK' cancel-text=\"Cancelar\"  placeholder=\"MM/DD/AAAA\" ngModel name=\"datei\" required value=\"{{ Datai  }}\"></ion-datetime>\n\n\n\n        <h2>\n          <ion-label>Data final</ion-label>\n        </h2>\n        <ion-datetime displayFormat=\"MM/DD/YYYY\" done-text='OK' cancel-text=\"Cancelar\"  placeholder=\"MM/DD/AAAA\" ngModel name=\"datef\" required value=\"{{ Dataf  }}\"></ion-datetime>\n\n\n\n      </ion-card-content>\n    </ion-card>\n\n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"at_but\">PESQUISAR</ion-button>\n    </div>\n\n  </form>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/consultrdv/consultrdv.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/consultrdv/consultrdv.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.pes_but {\n  --background:  rgb(111, 169, 187); }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%;\n  position: absolute;\n  bottom: 5%;\n  right: 4.5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uc3VsdHJkdi9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXGNvbnN1bHRyZHZcXGNvbnN1bHRyZHYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxpQ0FBYSxFQUFBOztBQUdqQjtFQUVJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsd0RBQXdEO0VBQ3hELGtCQUFrQjtFQUtsQixxQkFBYztFQUNkLHdCQUFpQjtFQUNqQix1QkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxzQkFBYTtFQUViLHFCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25zdWx0cmR2L2NvbnN1bHRyZHYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTE7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxuICAgIFxyXG59XHJcblxyXG4ucGVzX2J1dHtcclxuICAgIC0tYmFja2dyb3VuZDogIHJnYigxMTEsIDE2OSwgMTg3KTtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIC8vZm9udC1zaXplOjEuMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGJvcmRlcjogMC41NXB4IHNvbGlkIHJnYmEoMTIxLCAxMjEsIDEyMSwgMC40KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8tLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcclxuICAgIC8vLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAvLy0tb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLy9vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwLjdyZW07XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwLjdyZW07XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNnJlbTtcclxuICB9XHJcblxyXG4gIC5hdF9idXR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICAjN0NCQkJBO1xyXG4gICBcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgcmlnaHQ6IDQuNSU7XHJcblxyXG4gIFxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/consultrdv/consultrdv.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/consultrdv/consultrdv.page.ts ***!
  \*****************************************************/
/*! exports provided: ConsultrdvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultrdvPage", function() { return ConsultrdvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var ConsultrdvPage = /** @class */ (function () {
    function ConsultrdvPage(navCtrl, alertService, Authorizer, env, modalController, platform, navController, formBuilder, db) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.Authorizer = Authorizer;
        this.env = env;
        this.modalController = modalController;
        this.platform = platform;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.db = db;
    }
    ConsultrdvPage.prototype.ConsultaHosp = function () {
        var _this = this;
        console.log("Hospitais :");
        var params1 = null;
        this.Authorizer.QueryStoreProc1('ConsultasHosp', "", params1).then(function (res) {
            var resultado = res;
            try {
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    //this.alertService.presentAlert({ pTitle: 'Hospitais', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis encontrado!' });
                }
                else {
                    //mostro os módulos
                    console.log("Hospitais:", resultado);
                    _this.a = resultado;
                    console.log(_this.a);
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'Hospitais', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis!' });
            }
        });
    };
    ConsultrdvPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    ConsultrdvPage.prototype.goTo = function () {
        this.navCtrl.navigateRoot('/rdvs');
    };
    ConsultrdvPage.prototype.Consultaspec = function () {
        var _this = this;
        console.log("Speciality :");
        var params1 = null;
        this.Authorizer.QueryStoreProc1('ConsultasSpeciality', "", params1).then(function (res) {
            var resultado = res;
            try {
                if (resultado.length == 0) {
                    //this.alertService.presentAlert({ pTitle: 'Speciality', pSubtitle: 'Menu', pMessage: 'Nenhuma informação encontrada!' });
                }
                else {
                    //mostro os módulos
                    console.log("Speciality:", resultado);
                    _this.b = resultado;
                    console.log(_this.b);
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'Hospitais', pSubtitle: 'Menu', pMessage: 'Sem informação!' });
            }
        });
    };
    ConsultrdvPage.prototype.ngOnInit = function () {
        var _this = this;
        this.ConsultaHosp();
        this.Consultaspec();
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/agenda');
        });
    };
    ConsultrdvPage.prototype.atualizar = function (form) {
        var _this = this;
        console.log(form.form.value);
        //create form 
        var params = {
            'StatusCRUD': 'Pesquisar',
            'formValues': form.form.value,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("Pesquisar:", params);
        this.Authorizer.QueryStoreProc('Executar', "spAtendimento", params).then(function (res) {
            var resultado = res[0];
            console.log(resultado);
            try {
                if (resultado.success) {
                    // this.db.set('rdv', resultado.results); 
                    sessionStorage.setItem('rdv', resultado.results);
                    _this.goTo();
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: '', pMessage: 'Não existe atendimento!' });
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Erro', pMessage: 'Atendimento' });
            }
        });
    };
    ConsultrdvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultrdv',
            template: __webpack_require__(/*! ./consultrdv.page.html */ "./src/app/pages/consultrdv/consultrdv.page.html"),
            styles: [__webpack_require__(/*! ./consultrdv.page.scss */ "./src/app/pages/consultrdv/consultrdv.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
    ], ConsultrdvPage);
    return ConsultrdvPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-consultrdv-consultrdv-module.js.map