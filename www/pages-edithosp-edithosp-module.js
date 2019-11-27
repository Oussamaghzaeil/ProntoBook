(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edithosp-edithosp-module"],{

/***/ "./src/app/pages/edithosp/edithosp.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/edithosp/edithosp.module.ts ***!
  \***************************************************/
/*! exports provided: EdithospPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdithospPageModule", function() { return EdithospPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edithosp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edithosp.page */ "./src/app/pages/edithosp/edithosp.page.ts");







var routes = [
    {
        path: '',
        component: _edithosp_page__WEBPACK_IMPORTED_MODULE_6__["EdithospPage"]
    }
];
var EdithospPageModule = /** @class */ (function () {
    function EdithospPageModule() {
    }
    EdithospPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edithosp_page__WEBPACK_IMPORTED_MODULE_6__["EdithospPage"]]
        })
    ], EdithospPageModule);
    return EdithospPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edithosp/edithosp.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/edithosp/edithosp.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Editar hospital</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"atualizar(form);\" method=\"post\">\n\n    <ion-label position=\"floating\">Nome:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Primeiro Nome\" name=\"Nome\" required value=\"{{ Nome  }}\"> </ion-input>\n\n    <ion-label position=\"floating\">Endereço:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Informe Sobrenome \" name=\"Endereco\" required value=\"{{ Endereco  }}\">\n    </ion-input>\n\n\n    <ion-list>\n\n        <ion-label position=\"floating\">UF:</ion-label>\n        <ion-select ngModel name=\"UF\" interface=\"popover\" placeholder=\"Selecione o UF...\" value=\"{{ UF  }}\" (ionChange)=\"getCidadeCodigo(form)\">\n          <ion-select-option *ngFor=\"let uf of ufs\">{{uf.Sigla}}</ion-select-option>\n        </ion-select>\n  \n      </ion-list>\n  \n      <ion-list>\n  \n        <ion-label position=\"floating\">Nome Cidade:</ion-label>\n        <ion-select ngModel name=\"NCidade\" interface=\"popover\" placeholder=\"Selecione o Nome Cidade...\" value=\"{{ NCidade  }}\">\n          <ion-select-option *ngFor=\"let os of cidades\">{{os.Nome}}</ion-select-option>\n        </ion-select>\n  \n      </ion-list>\n\n\n    <ion-label position=\"floating\">Código da Cidade:</ion-label>\n    <ion-input ngModel type=\"number\" placeholder=\"Informe o Códido da Cidade \" name=\"CodigoCidade\" required\n      value=\"{{ Codigopostal  }}\"></ion-input>\n\n    <ion-label position=\"floating\">Telefone:</ion-label>\n    <ion-input ngModel type=\"text\" min=\"9\" maxlength=\"15\" placeholder=\"Informe a Telefone \" name=\"Telefone\" required\n      value=\"{{ Telefone  }}\"></ion-input>\n\n    <ion-label position=\"floating\">Email:</ion-label>\n    <ion-input #email ngModel type=\"email\" name=\"Email\" pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}\"\n      required value=\"{{ Email  }}\">\n    </ion-input>\n\n\n\n\n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"at_but\">Atualizar</ion-button>\n    </div>\n\n\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/edithosp/edithosp.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/edithosp/edithosp.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdGhvc3AvQzpcXFVzZXJzXFxMZXZlbFxcRGVza3RvcFxcb3Vzc2FtYVxcUHJvbnRvIEJvb2svc3JjXFxhcHBcXHBhZ2VzXFxlZGl0aG9zcFxcZWRpdGhvc3AucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxzQkFBYTtFQUViLHFCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBSWQ7RUFFSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdEQUF3RDtFQUN4RCxrQkFBa0I7RUFLbEIscUJBQWM7RUFDZCx3QkFBaUI7RUFDakIsdUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0aG9zcC9lZGl0aG9zcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmlvbi1oZWFkZXJ7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojNTg5MTkxO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbiAgICBcclxufVxyXG5cclxuLmF0X2J1dHtcclxuICAgIC0tYmFja2dyb3VuZDogICM3Q0JCQkE7XHJcbiAgIFxyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICAvL2ZvbnQtc2l6ZToxLjJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDAuNTVweCBzb2xpZCByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuNCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAvLy0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLy8tLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC8vb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZyZW07XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/edithosp/edithosp.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/edithosp/edithosp.page.ts ***!
  \*************************************************/
/*! exports provided: EdithospPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdithospPage", function() { return EdithospPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");













var EdithospPage = /** @class */ (function () {
    function EdithospPage(navCtrl, alertService, env, Authorizer, Eventos, modalController, platform, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.Eventos = Eventos;
        this.modalController = modalController;
        this.platform = platform;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
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
    EdithospPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getUfs();
        this.MostraDados();
        console.log("ionViewDidEnter");
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/hospitais');
        });
    };
    EdithospPage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        //console.log("ionViewWillEnter");
        //this.CRUDActionAPIForm('Pesquisando', null);  
    };
    EdithospPage.prototype.ionViewDidEnter = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.        
        this.MostraDados();
        console.log("ionViewDidEnter");
        /*
        setTimeout(() => {
          this.iNome.setFocus();
        },150);
        */
        this.selectedUf = sessionStorage.getItem("currentUF");
        console.log("selectedUf: ", this.selectedUf);
        this.getCidadeCodigoEdit(this.selectedUf);
    };
    EdithospPage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.    
    };
    EdithospPage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        //console.log("ionViewDidLeave");    
    };
    EdithospPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    EdithospPage.prototype.MostraDados = function () {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando     
        var i = sessionStorage.getItem('codigoH');
        //   i    =parseInt(atob(i)); 
        var params = {
            'StatusCRUD': 'Pesquisar1',
            'formValues': parseInt(atob(i)),
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log('params', params);
        this.Authorizer.QueryStoreProc('Executar', 'spHospital', params).then(function (res) {
            var resultado = res[0];
            console.log("resultado", resultado);
            try {
                if (resultado.success) {
                    _this.Nome = JSON.parse(resultado.results)[0].name;
                    _this.Endereco = JSON.parse(resultado.results)[0].address;
                    //this.NCidades  = JSON.parse(resultado.results)[0].city;
                    //this.UFs  = JSON.parse(resultado.results)[0].UF;
                    _this.Codigopostal = JSON.parse(resultado.results)[0].zip;
                    _this.Telefone = JSON.parse(resultado.results)[0].phone;
                    _this.Email = JSON.parse(resultado.results)[0].email;
                    var U = JSON.parse(resultado.results)[0].UF;
                    if (typeof (U) == 'undefined')
                        U = '';
                    if (U == null)
                        U = '';
                    if (U != '')
                        _this.UF = U;
                    var nc = JSON.parse(resultado.results)[0].city;
                    if (typeof (nc) == 'undefined')
                        nc = '';
                    if (nc == null)
                        nc = '';
                    if (nc != '')
                        _this.NCidade = nc;
                    //this.alertService.showLoader(resultado.message, 1000);
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Editar hospital', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    EdithospPage.prototype.getUfs = function () {
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
    EdithospPage.prototype.getCidadeCodigo = function (form) {
        /*     let Sig = form.value.Nome_municipio;
            form.value.Nome_municipio = ""; */
        if (this.ufs != null) {
            console.log('form', form.value);
            this.selectedUf = this.ufs.filter(function (uf) {
                return uf.Sigla == form.value.UF;
            });
            console.log('selectedUf: ', this.selectedUf);
            //console.log('selectedUf: ', this.selectedUf[0].CodigoBaseUF)
            this.cidades2 = [];
            this.getCidades();
        }
    };
    EdithospPage.prototype.getCidadeCodigoEdit = function (ufEdit) {
        /*     let Sig = form.value.Nome_municipio;
            form.value.Nome_municipio = ""; */
        console.log('form', ufEdit);
        this.selectedUf = this.ufs.filter(function (uf) {
            return uf.Sigla == ufEdit;
        });
        console.log('selectedUf: ', this.selectedUf);
        //console.log('selectedUf: ', this.selectedUf[0].CodigoBaseUF)
        this.cidades2 = [];
        this.getCidades();
    };
    // ------------------------Cidades Begins-----------------------------
    EdithospPage.prototype.getCidades = function () {
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
    // ------------------------Cidades ENDS-----------------------------
    EdithospPage.prototype.atualizar = function (form) {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando      
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
                    _this.goBack();
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Editar hospital', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Nome'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EdithospPage.prototype, "iNome", void 0);
    EdithospPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edithosp',
            template: __webpack_require__(/*! ./edithosp.page.html */ "./src/app/pages/edithosp/edithosp.page.html"),
            styles: [__webpack_require__(/*! ./edithosp.page.scss */ "./src/app/pages/edithosp/edithosp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"]])
    ], EdithospPage);
    return EdithospPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edithosp-edithosp-module.js.map