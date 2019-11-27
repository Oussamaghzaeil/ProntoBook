(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-incluirhosp-incluirhosp-module"],{

/***/ "./src/app/pages/incluirhosp/incluirhosp.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/incluirhosp/incluirhosp.module.ts ***!
  \*********************************************************/
/*! exports provided: IncluirhospPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncluirhospPageModule", function() { return IncluirhospPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _incluirhosp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incluirhosp.page */ "./src/app/pages/incluirhosp/incluirhosp.page.ts");







var routes = [
    {
        path: '',
        component: _incluirhosp_page__WEBPACK_IMPORTED_MODULE_6__["IncluirhospPage"]
    }
];
var IncluirhospPageModule = /** @class */ (function () {
    function IncluirhospPageModule() {
    }
    IncluirhospPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_incluirhosp_page__WEBPACK_IMPORTED_MODULE_6__["IncluirhospPage"]]
        })
    ], IncluirhospPageModule);
    return IncluirhospPageModule;
}());



/***/ }),

/***/ "./src/app/pages/incluirhosp/incluirhosp.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/incluirhosp/incluirhosp.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Novo Hospital</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"GravarDados(form)\" method=\"post\">\n\n\n    <ion-label position=\"floating\">Nome:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Informe Nome \" name=\"Nome\" required value=\"{{ Nome  }}\"></ion-input>\n\n    <ion-label position=\"floating\">Endereço:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Informe Endereço \" name=\"Endereco\" required value=\"{{ endereco  }}\">\n    </ion-input>\n\n\n\n    \n\n    <ion-list>\n\n      <ion-label position=\"floating\">UF:</ion-label>\n      <ion-select ngModel name=\"UF\" interface=\"popover\" placeholder=\"Selecione o UF...\" value=\"{{ UF  }}\" (ionChange)=\"getCidadeCodigo(form)\">\n        <ion-select-option *ngFor=\"let uf of ufs\">{{uf.Sigla}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-label position=\"floating\">Nome Cidade:</ion-label>\n      <ion-select ngModel name=\"NCidade\" interface=\"popover\" placeholder=\"Selecione o Nome Cidade...\" value=\"{{ NCidade  }}\">\n        <ion-select-option *ngFor=\"let os of cidades\">{{os.Nome}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n\n\n    <ion-label position=\"floating\">Código da Cidade:</ion-label>\n    <ion-input ngModel type=\"number\" placeholder=\"Informe o Códido da Cidade\" name=\"CodigoCidade\" required\n      value=\"{{ CodigoCidade  }}\"></ion-input>\n\n    <ion-label position=\"floating\">Telefone:</ion-label>\n    <ion-input ngModel type=\"number\" placeholder=\"Informe Telefone \"  min=\"9\" maxlength=\"15\"  name=\"Telefone\" required value=\"{{ Telefone  }}\">\n    </ion-input>\n\n\n\n\n    <ion-label position=\"floating\">O email:</ion-label>\n    <ion-input #email ngModel type=\"email\" placeholder=\"Informe O email \" name=\"Email\"\n      pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}\" required value=\"{{ Email  }}\"></ion-input>\n\n\n\n\n\n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"sol_but\">Salve</ion-button>\n    </div>\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/incluirhosp/incluirhosp.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/incluirhosp/incluirhosp.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.sol_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5jbHVpcmhvc3AvQzpcXFVzZXJzXFxMZXZlbFxcRGVza3RvcFxcb3Vzc2FtYVxcUHJvbnRvIEJvb2svc3JjXFxhcHBcXHBhZ2VzXFxpbmNsdWlyaG9zcFxcaW5jbHVpcmhvc3AucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxzQkFBYTtFQUViLHFCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBS2Q7RUFFSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdEQUF3RDtFQUN4RCxrQkFBa0I7RUFLbEIscUJBQWM7RUFDZCx3QkFBaUI7RUFDakIsdUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmNsdWlyaG9zcC9pbmNsdWlyaG9zcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTtcclxuICAgIFxyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zb2xfYnV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzdDQkJCQTtcclxuICAgXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICAvL2ZvbnQtc2l6ZToxLjJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDAuNTVweCBzb2xpZCByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuNCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAvLy0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLy8tLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC8vb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZyZW07XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/incluirhosp/incluirhosp.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/incluirhosp/incluirhosp.page.ts ***!
  \*******************************************************/
/*! exports provided: IncluirhospPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncluirhospPage", function() { return IncluirhospPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");






var IncluirhospPage = /** @class */ (function () {
    function IncluirhospPage(navCtrl, alertService, env, Authorizer, Eventos, modalController, platform) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.Eventos = Eventos;
        this.modalController = modalController;
        this.platform = platform;
        this.DECIMAL_SEPARATOR = ".";
        this.GROUP_SEPARATOR = ",";
        this.UFs = [
            {
                id: 1,
                UF: 'RO'
            },
            {
                id: 2,
                UF: 'AC'
            },
            {
                id: 3,
                UF: 'AM'
            },
            {
                id: 4,
                UF: 'RR'
            },
            {
                id: 5,
                UF: 'PA'
            },
            {
                id: 6,
                UF: 'AP'
            },
            {
                id: 7,
                UF: 'TO'
            },
            {
                id: 8,
                UF: 'MA'
            },
            {
                id: 9,
                UF: 'PI'
            },
            {
                id: 10,
                UF: 'CE'
            },
            {
                id: 11,
                UF: 'RN'
            },
            {
                id: 12,
                UF: 'PB'
            },
            {
                id: 12,
                UF: 'PE'
            },
            {
                id: 13,
                UF: 'AL'
            },
            {
                id: 14,
                UF: 'SE'
            },
            {
                id: 15,
                UF: 'BA'
            },
            {
                id: 16,
                UF: 'MG'
            },
            {
                id: 17,
                UF: 'ES'
            },
            {
                id: 18,
                UF: 'RJ'
            },
            {
                id: 19,
                UF: 'SP'
            },
            {
                id: 20,
                UF: 'PR'
            },
            {
                id: 21,
                UF: 'SC'
            },
            {
                id: 22,
                UF: 'RS'
            },
            {
                id: 23,
                UF: 'MS'
            },
            {
                id: 24,
                UF: 'MT'
            },
            {
                id: 25,
                UF: 'GO'
            },
            {
                id: 26,
                UF: 'DF'
            }
        ];
        this.NCidades = [
            {
                id: 1,
                NCidade: 'Rondônia'
            },
            {
                id: 2,
                NCidade: 'Acre'
            },
            {
                id: 3,
                NCidade: 'Amazonas'
            },
            {
                id: 4,
                NCidade: 'Roraima'
            },
            {
                id: 5,
                NCidade: 'Pará'
            },
            {
                id: 6,
                NCidade: 'Amapá'
            },
            {
                id: 7,
                NCidade: 'Tocantins'
            },
            {
                id: 8,
                NCidade: 'Maranhão'
            },
            {
                id: 9,
                NCidade: 'Piauí'
            },
            {
                id: 10,
                NCidade: 'Ceará'
            },
            {
                id: 11,
                NCidade: 'Rio Grande do Norte'
            },
            {
                id: 12,
                NCidade: 'Paraíba'
            },
            {
                id: 12,
                NCidade: 'Pernambuco'
            },
            {
                id: 13,
                NCidade: 'Alagoas'
            },
            {
                id: 14,
                NCidade: 'Sergipe'
            },
            {
                id: 15,
                NCidade: 'Bahia'
            },
            {
                id: 16,
                NCidade: 'Minas Gerais'
            },
            {
                id: 17,
                NCidade: 'Espírito Santo'
            },
            {
                id: 18,
                NCidade: 'Rio de Janeiro'
            },
            {
                id: 19,
                NCidade: 'São Paulo'
            },
            {
                id: 20,
                NCidade: 'Paraná'
            },
            {
                id: 21,
                NCidade: 'Santa Catarina'
            },
            {
                id: 22,
                NCidade: 'Rio Grande do Sul'
            },
            {
                id: 23,
                NCidade: 'Mato Grosso do Sul'
            },
            {
                id: 24,
                NCidade: 'Mato Grosso'
            },
            {
                id: 25,
                NCidade: 'Goiás'
            },
            {
                id: 26,
                NCidade: 'Distrito Federal'
            }
        ];
    }
    IncluirhospPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Init");
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/hospitais');
        });
    };
    IncluirhospPage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        console.log("ionViewWillEnter");
        //this.getUfs();
    };
    IncluirhospPage.prototype.ionViewDidEnter = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.        
        console.log("ionViewDidEnter");
        this.getUfs();
    };
    IncluirhospPage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.    
        console.log("ionViewWillLeave");
    };
    IncluirhospPage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        console.log("ionViewDidLeave");
    };
    IncluirhospPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    IncluirhospPage.prototype.GravarDados = function (form) {
        // paramStatus: Pesquisar, Gravar, Deletar
        var _this = this;
        var params = {
            'StatusCRUD': 'Criacao',
            'formValues': form.value,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("Register:", params);
        this.Authorizer.QueryStoreProc('Executar', 'spHospital', params).then(function (res) {
            var resultado = res[0];
            console.log(resultado);
            try {
                if (resultado.success) {
                    _this.alertService.presentAlert({ pTitle: 'Salvando Hospital...', pSubtitle: '', pMessage: 'Operaração realizada com sucesso!' });
                    _this.alertService.showLoader(resultado.message, 1000);
                    _this.goBack();
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: 'Atenção', pSubtitle: 'Erro', pMessage: 'Verifique seus dados!' });
            }
        });
    };
    IncluirhospPage.prototype.unFormat = function (val) {
        if (!val) {
            return '';
        }
        val = val.replace(/\D/g, '');
        if (this.GROUP_SEPARATOR === ',') {
            return val.replace(/,/g, '');
        }
        else {
            return val.replace(/\./g, '');
        }
    };
    ;
    IncluirhospPage.prototype.getUfs = function () {
        var _this = this;
        var dataUfs = {
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey"),
            'StatusCRUD': 'Pesquisaruf'
        };
        this.Authorizer.QueryStoreProc('Executar', 'spHospital', dataUfs).then(function (res) {
            var resultado = res[0];
            try {
                if (resultado.success) {
                    _this.ufs = JSON.parse(resultado.results);
                    console.log("Ufs: ", _this.ufs);
                    _this.ufs2 = JSON.parse(resultado.results);
                    //console.log("Ufs2: ", this.ufs2)
                    for (var i = 0; i < _this.ufs2.length; i++) {
                        _this.ufs2[i] = _this.ufs[i].Sigla;
                    }
                    //console.log("ufs2: ", this.ufs2)
                    //console.log("Ufs: ", this.ufs)
                }
                else {
                    //this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: this.AppName, pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                //this.alertService.presentAlert({ pTitle: this.AppName, pSubtitle: this.AppName, pMessage: resultado.message });
                //this.navCtrl.navigateRoot('/login');
            }
        });
    };
    // ------------------------UFS ENDS-----------------------------
    IncluirhospPage.prototype.getCidadeCodigo = function (form) {
        /*     let Sig = form.value.Nome_municipio;
            form.value.Nome_municipio = ""; */
        console.log('form', form.value);
        this.selectedUf = this.ufs.filter(function (uf) {
            return uf.Sigla == form.value.UF;
        });
        console.log('selectedUf: ', this.selectedUf);
        //console.log('selectedUf: ', this.selectedUf[0].CodigoBaseUF)
        this.cidades2 = [];
        this.getCidades();
    };
    // ------------------------Cidades Begins-----------------------------
    IncluirhospPage.prototype.getCidades = function () {
        var _this = this;
        var dataCidades = {
            'CodigoUsuarioSistema': '',
            'Hashkey': '',
            'StatusCRUD': 'PesquisarCidades',
            'formValues': this.selectedUf[0].CodigoBaseUF
        };
        console.log("dataCidades: ", dataCidades);
        this.Authorizer.QueryStoreProc('Executar', 'spHospital', dataCidades).then(function (res) {
            var resultado = res[0];
            try {
                if (resultado.success) {
                    _this.cidades = JSON.parse(resultado.results);
                    _this.cidades2 = JSON.parse(resultado.results);
                    console.log("cidades: ", _this.cidades);
                    for (var i = 0; i < _this.cidades2.length; i++) {
                        _this.cidades2[i] = _this.cidades[i].Nome;
                    }
                }
                else {
                    //this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: this.AppName, pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                //this.alertService.presentAlert({ pTitle: this.AppName, pSubtitle: this.AppName, pMessage: resultado.message });
                //this.navCtrl.navigateRoot('/login');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Nome'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncluirhospPage.prototype, "iNome", void 0);
    IncluirhospPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incluirhosp',
            template: __webpack_require__(/*! ./incluirhosp.page.html */ "./src/app/pages/incluirhosp/incluirhosp.page.html"),
            styles: [__webpack_require__(/*! ./incluirhosp.page.scss */ "./src/app/pages/incluirhosp/incluirhosp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], IncluirhospPage);
    return IncluirhospPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-incluirhosp-incluirhosp-module.js.map