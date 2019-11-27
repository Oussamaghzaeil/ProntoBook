(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-novordv-novordv-module"],{

/***/ "./src/app/pages/novordv/novordv.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/novordv/novordv.module.ts ***!
  \*************************************************/
/*! exports provided: NovordvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovordvPageModule", function() { return NovordvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _novordv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./novordv.page */ "./src/app/pages/novordv/novordv.page.ts");







var routes = [
    {
        path: '',
        component: _novordv_page__WEBPACK_IMPORTED_MODULE_6__["NovordvPage"]
    }
];
var NovordvPageModule = /** @class */ (function () {
    function NovordvPageModule() {
    }
    NovordvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_novordv_page__WEBPACK_IMPORTED_MODULE_6__["NovordvPage"]]
        })
    ], NovordvPageModule);
    return NovordvPageModule;
}());



/***/ }),

/***/ "./src/app/pages/novordv/novordv.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/novordv/novordv.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Novo Compromisso</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <!--\n    Use a documentação para construir os componestes\n    https://ionicframework.com/docs/api/action-sheet\n  -->\n  <form #form=\"ngForm\" (ngSubmit)=\"Criacao(form);\" method=\"post\">\n\n    <ion-searchbar ngModel placeholder=\"Codigo do gerador\" name=\"Codigo\" (ionChange)='atualizarr(form)'\n      value=\"{{ Codigo  }}\"></ion-searchbar>\n\n\n    <ion-label position=\"floating\">Nome:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Nome do paciente\" name=\"Nome\" required value=\"{{ Nome  }}\"> </ion-input>\n\n    <ion-label position=\"floating\">Sobrenome:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Sobrenome do paciente \" name=\"SobreNome\" required\n      value=\"{{ SobreNome  }}\"></ion-input>\n\n    <ion-label position=\"floating\">CPF:</ion-label>\n    <ion-input ngModel type=\"text\" disabled placeholder=\"CPF do paciente \" name=\"CPF\" required value=\"{{ CPF  }}\">\n    </ion-input>\n\n\n    <ion-list>\n\n      <ion-label position=\"floating\">Sexo:</ion-label>\n      <ion-select ngModel type=\"text\" interface=\"popover\" name=\"Sexo\" placeholder=\"Sexo do paciente\" value=\"{{ Sexo }}\">\n        <ion-select-option *ngFor=\"let os of sexos\">{{os.Sexo}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n      <ion-label position=\"floating\">Hospitais:</ion-label>\n      <ion-select ngModel type=\"text\" interface=\"popover\" name=\"Hospitais\" placeholder=\"Selecione o Hospital...\"\n        value=\"{{ Hospitais }}\">\n        <ion-select-option *ngFor=\"let os of a\">{{os.nome}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n\n    <ion-list>\n\n      <ion-label position=\"floating\">Especialidades:</ion-label>\n      <ion-select ngModel type=\"text\" interface=\"popover\" name=\"Especialidades\"\n        placeholder=\"Selecione o Especialidades...\" value=\"{{ Especialidades }}\">\n        <ion-select-option *ngFor=\"let os of b\">{{os.nome}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n\n    <ion-list>\n\n      <ion-label position=\"floating\">Doutor:</ion-label>\n      <ion-select [(ngModel)]='Doutor' interface=\"popover\" type=\"text\" name=\"Doutor\" placeholder=\"Selecione o Doutor...\">\n        <ion-select-option *ngFor=\"let os of c\">{{os.Nome}} {{os.SobreNome}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n    <ion-label position=\"floating\">Data Do Atendimento:</ion-label>\n    <ion-datetime [(ngModel)]='DataDoAtendimento' displayFormat=\"DD/MM/YYYY\" doneText='OK' cancelText='CANCELAR' type=\"text\" placeholder=\"Informe a Data Do Atendimento \"\n      name=\"DataDoAtendimento\" required></ion-datetime>\n\n\n\n\n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"at_but\">Salvar</ion-button>\n    </div>\n\n\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/novordv/novordv.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/novordv/novordv.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\nion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm92b3Jkdi9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXG5vdm9yZHZcXG5vdm9yZHYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVk7RUFBWixhQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUVJLDhCQUF1QixFQUFBOztBQUkzQjtFQUNJLGNBQXlCLEVBQUE7O0FBSTdCO0VBQ0ksc0JBQWE7RUFFYixxQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQU9kO0VBRUksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3REFBd0Q7RUFDeEQsa0JBQWtCO0VBS2xCLHFCQUFjO0VBQ2Qsd0JBQWlCO0VBQ2pCLHVCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm92b3Jkdi9ub3ZvcmR2LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG5pb24taGVhZGVye1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTtcclxuICAgIFxyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5hdF9idXR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICAjN0NCQkJBO1xyXG4gICBcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgLy9mb250LXNpemU6MS4ycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAwLjU1cHggc29saWQgcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjQpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLy0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgLy8tLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC8vLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAvL29wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy10b3A6IDAuN3JlbTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDAuN3JlbTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMC42cmVtO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/novordv/novordv.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/novordv/novordv.page.ts ***!
  \***********************************************/
/*! exports provided: NovordvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovordvPage", function() { return NovordvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");








var NovordvPage = /** @class */ (function () {
    function NovordvPage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.modalController = modalController;
        this.platform = platform;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.sexos = [
            {
                id_Sexo: 1,
                Sexo: 'M'
            },
            {
                id_Sexo: 2,
                Sexo: 'F'
            }
        ];
    }
    NovordvPage.prototype.ngOnInit = function () {
        var _this = this;
        this.ConsultaHosp();
        this.Consultaspec();
        this.Consultapos();
        //console.log("ionViewDidEnter");
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/agenda');
        });
    };
    NovordvPage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        //console.log("ionViewWillEnter");
        //this.CRUDActionAPIForm('Pesquisando', null);  
    };
    NovordvPage.prototype.ionViewDidEnter = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.        
        //this.MostraDados(JSON.parse(sessionStorage.getItem('SessionUser'))[0].CodigoUsuario);   
        console.log("ionViewDidEnter");
        /*
        setTimeout(() => {
          this.iNome.setFocus();
        },150);
        */
    };
    NovordvPage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.    
    };
    NovordvPage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        //console.log("ionViewDidLeave");    
    };
    NovordvPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    NovordvPage.prototype.ConsultaHosp = function () {
        var _this = this;
        console.log("Hospitais :");
        var params1 = null;
        this.Authorizer.QueryStoreProc1('ConsultasHosp', "", params1).then(function (res) {
            var resultado = res;
            try {
                if (resultado.length == 0) {
                    //nenhum modulo encontrado
                    _this.alertService.presentAlert({ pTitle: 'Hospitais', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis encontrado!' });
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
    NovordvPage.prototype.Consultaspec = function () {
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
    NovordvPage.prototype.Consultapos = function () {
        var _this = this;
        console.log("Hospitais :");
        var params1 = null;
        this.Authorizer.QueryStoreProc('Executar', "spConsultaDoutor", '').then(function (res) {
            var resultado = res;
            _this.c = JSON.parse(resultado[0].results);
            console.log(_this.c);
            try {
                if (resultado.length == 0) {
                    var result = JSON.parse(resultado.results);
                    _this.Nome = JSON.parse(resultado.results)[0].Nome;
                    _this.SobreNome = JSON.parse(resultado.results)[0].SobreNome;
                }
                else {
                    //mostro os módulos
                    console.log("Doutors:", resultado);
                    //this.c= resultado;
                    console.log(_this.c);
                }
            }
            catch (err) {
                //this.alertService.presentAlert({ pTitle: 'Hospitais', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis!' });
            }
        });
    };
    NovordvPage.prototype.atualizarr = function (Codigo) {
        var _this = this;
        console.log('lkrgfd', Codigo);
        //create form 
        var myForm;
        // ------ NEW FORM WITH EDIT DATA
        myForm = this.formBuilder.group({
            Codigo: Codigo
        });
        var params = {
            'StatusCRUD': 'Pesquisar1',
            'formValues': Codigo.form.value.Codigo,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("Pesquisar:", params);
        this.Authorizer.QueryStoreProc('Executar', "spAtendimento", params).then(function (res) {
            var resultado = res[0];
            console.log(resultado);
            try {
                if (resultado.success) {
                    var result = JSON.parse(resultado.results);
                    _this.Nome = JSON.parse(resultado.results)[0].name;
                    _this.SobreNome = JSON.parse(resultado.results)[0].last_name;
                    _this.CPF = JSON.parse(resultado.results)[0].cpf;
                    _this.Sexo = JSON.parse(resultado.results)[0].gender;
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Atendimento', pMessage: ' não  paciente' });
                    //this.navCtrl.navigateRoot('/login');
                    _this.Nome = '';
                    _this.SobreNome = '';
                    _this.CPF = '';
                    _this.Sexo = '';
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Patient', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    NovordvPage.prototype.Criacao = function (form) {
        // paramStatus: Pesquisar, Gravar, Deletar
        var _this = this;
        form.value.CPF = this.CPF;
        var params = {
            'StatusCRUD': 'Criacao',
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
                _this.alertService.presentAlert({ pTitle: 'Atenção', pSubtitle: 'Erro', pMessage: 'verifique seus dados' });
            }
        });
        this.goBack();
    };
    NovordvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-novordv',
            template: __webpack_require__(/*! ./novordv.page.html */ "./src/app/pages/novordv/novordv.page.html"),
            styles: [__webpack_require__(/*! ./novordv.page.scss */ "./src/app/pages/novordv/novordv.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], NovordvPage);
    return NovordvPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-novordv-novordv-module.js.map