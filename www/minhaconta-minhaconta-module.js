(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["minhaconta-minhaconta-module"],{

/***/ "./src/app/pages/minhaconta/minhaconta.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/minhaconta/minhaconta.module.ts ***!
  \*******************************************************/
/*! exports provided: MinhaContaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinhaContaPageModule", function() { return MinhaContaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _minhaconta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./minhaconta.page */ "./src/app/pages/minhaconta/minhaconta.page.ts");
/* harmony import */ var ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask-ionic */ "./node_modules/ngx-mask-ionic/fesm5/ngx-mask-ionic.js");








var routes = [
    {
        path: '',
        component: _minhaconta_page__WEBPACK_IMPORTED_MODULE_6__["MinhaContaPage"]
    }
];
var MinhaContaPageModule = /** @class */ (function () {
    function MinhaContaPageModule() {
    }
    MinhaContaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_7__["NgxMaskIonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_minhaconta_page__WEBPACK_IMPORTED_MODULE_6__["MinhaContaPage"]]
        })
    ], MinhaContaPageModule);
    return MinhaContaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/minhaconta/minhaconta.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/minhaconta/minhaconta.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Minha Conta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <form #form=\"ngForm\" (ngSubmit)=\"atualizar(form);\" method=\"post\">\n    <ion-grid>\n      <ion-row>\n\n        <ion-col class=\"ion-text-center\">\n          <ion-avatar class=\"ava\">\n            <img src=\"{{imageFileBase64}}\" (click)=\"seleccionarImagen()\">\n          </ion-avatar>\n        </ion-col>\n        <input #inputcamera type=\"file\" accept=\"image/*\" capture=\"camera\" [hidden]=true />\n\n\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-label> {{ Nome }} {{ SobreNome }} </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-label position=\"floating\">Nome:</ion-label>\n    <ion-input [(ngModel)]='Nome' type=\"text\" placeholder=\"Primeiro Nome\" name=\"Nome\" required value=\"{{ Nome  }}\"> </ion-input>\n\n    <ion-label position=\"floating\">Sobrenome:</ion-label>\n    <ion-input [(ngModel)]='SobreNome' type=\"text\" placeholder=\"Informe Sobrenome \" name=\"SobreNome\" required value=\"{{ SobreNome  }}\">\n    </ion-input>\n\n\n\n    <ion-label position=\"floating\">Data De Nascimento:</ion-label>\n    <ion-datetime [(ngModel)]='DataDeNascimento' doneText='OK' cancelText='CANCELAR' type=\"text\" displayFormat=\"DD/MM/YYYY\" placeholder=\"DD/MM/YYYY \"  name=\"DataDeNascimento\" required\n      value=\"{{ DataDeNascimento  }}\"></ion-datetime>\n\n\n\n    <ion-list>\n\n      <ion-label position=\"floating\">Sexo:</ion-label>\n      <ion-select [(ngModel)]='Sexo' type=\"text\" interface=\"popover\" name=\"Sexo\" placeholder=\"Selecione o Sexo...\" value=\"{{ Sexo }}\">\n        <ion-select-option *ngFor=\"let os of sexos\">{{os.Sexo}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n    <ion-list>\n\n\n      <ion-label position=\"floating\">RH:</ion-label>\n      <ion-select [(ngModel)]='RH' type=\"text\" interface=\"popover\"  name=\"RH\" placeholder=\"Selecione o RH...\" value=\"{{ RH }}\">\n        <ion-select-option *ngFor=\"let os of RHs\">{{os.RH}}</ion-select-option>\n      </ion-select>\n\n\n    </ion-list>\n\n\n    <ion-list>\n\n      <ion-label position=\"floating\">Posição:</ion-label>\n      <ion-select [(ngModel)]='Pos' name=\"Pos\" interface=\"popover\" placeholder=\"Selecione o Posição...\" value=\"{{ Pos  }}\">\n        <ion-select-option *ngFor=\"let os of poss\">{{os.Pos}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n\n    <ion-label position=\"floating\">Email:</ion-label>\n    <ion-input #email [(ngModel)]='Email' type=\"email\" name=\"email\" pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}\"\n      required value=\"{{ Email  }}\">\n    </ion-input>\n\n    <ion-label position=\"floating\">Senha:</ion-label>\n    <ion-input [(ngModel)]='Senha' type=\"password\" placeholder=\"Digite a Senha\" name=\"Senha\" required>\n    </ion-input>\n\n    <ion-label position=\"floating\">Repita a Senha:</ion-label>\n    <ion-input [(ngModel)]='ReSenha' type=\"password\" placeholder=\"Repita a Senha\" name=\"ReSenha\" required>\n    </ion-input>\n\n\n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\"  class=\"at_but\">Atualizar</ion-button>\n    </div>\n\n\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/minhaconta/minhaconta.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/minhaconta/minhaconta.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\nion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n.ava {\n  width: 7rem;\n  height: 7rem;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWluaGFjb250YS9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXG1pbmhhY29udGFcXG1pbmhhY29udGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVk7RUFBWixhQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUVJLDhCQUF1QixFQUFBOztBQUkzQjtFQUNJLGNBQXlCLEVBQUE7O0FBSTdCO0VBQ0ksc0JBQWE7RUFFYixxQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUdkO0VBRUksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3REFBd0Q7RUFDeEQsa0JBQWtCO0VBS2xCLHFCQUFjO0VBQ2Qsd0JBQWlCO0VBQ2pCLHVCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWluaGFjb250YS9taW5oYWNvbnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbmlvbi1oZWFkZXJ7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTE7XG4gICAgXG59XG5cbmlvbi10aXRsZXtcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xuICAgIFxufVxuXG4uYXRfYnV0e1xuICAgIC0tYmFja2dyb3VuZDogICM3Q0JCQkE7XG4gICBcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgd2lkdGg6IDkwJTtcblxufVxuaW9uLWlucHV0IHtcbiAgICAvL2ZvbnQtc2l6ZToxLjJyZW07XG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBib3JkZXI6IDAuNTVweCBzb2xpZCByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuNCkgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8tLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcbiAgICAvLy0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIC8vLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgLy9vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXRvcDogMC43cmVtO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDAuN3JlbTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNnJlbTtcbiAgfVxuXG4gIC5hdmEge1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGhlaWdodDogN3JlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgXG4gICAgXG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/minhaconta/minhaconta.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/minhaconta/minhaconta.page.ts ***!
  \*****************************************************/
/*! exports provided: MinhaContaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinhaContaPage", function() { return MinhaContaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");














var STORAGE_KEY = 'my_images';
var MinhaContaPage = /** @class */ (function () {
    function MinhaContaPage(navCtrl, alertService, env, Authorizer, Eventos, modalController, platform, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath) {
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
        this.images = [];
        this.imageData = [];
        this.imageFileBase64 = "assets/imgs/user.jpg";
        this.poss = [
            {
                id_Pos: 1,
                Pos: 'Doutor'
            },
            {
                id_Pos: 2,
                Pos: 'Assistente'
            }
        ];
        this.sexos = [
            {
                id_Sexo: 1,
                Sexo: 'Masculino'
            },
            {
                id_Sexo: 2,
                Sexo: 'Feminino'
            }
        ];
        this.RHs = [
            {
                id_RH: 1,
                RH: 'O-'
            },
            {
                id_RH: 2,
                RH: 'O+'
            },
            {
                id_RH: 3,
                RH: 'B-'
            },
            {
                id_RH: 4,
                RH: 'B+'
            },
            {
                id_RH: 5,
                RH: 'A+'
            },
            {
                id_RH: 6,
                RH: 'A-'
            },
            {
                id_RH: 7,
                RH: 'AB+'
            },
            {
                id_RH: 8,
                RH: 'AB-'
            }
        ];
    }
    MinhaContaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.CodigoUsuario = JSON.parse(sessionStorage.getItem('SessionUser'))[0].CodigoUsuario;
        this.NomeUsuarioLogado = JSON.parse(sessionStorage.getItem('SessionUser'))[0].Nome;
        this.MostraDados(JSON.parse(sessionStorage.getItem('SessionUser'))[0].CodigoUsuario);
        console.log("ionViewDidEnter");
        this.platform.backButton.subscribe(function () {
            _this.goBack();
        });
    };
    MinhaContaPage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        //console.log("ionViewWillEnter");
        //this.CRUDActionAPIForm('Pesquisando', null);  
    };
    MinhaContaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.MostraDados(JSON.parse(sessionStorage.getItem('SessionUser'))[0].CodigoUsuario);
        console.log("ionViewDidEnter");
        var element = this.cameraInput.nativeElement;
        this.imageFileBase64 = "assets/imgs/user.jpg";
        this.imageFile = null;
        element.onchange = function () {
            // Depois colocar um loading aqui!!!     
            var reader = new FileReader();
            reader.onload = function (r) {
                //THIS IS THE ORIGINAL BASE64 STRING AS SNAPPED FROM THE CAMERA
                //THIS IS PROBABLY THE ONE TO UPLOAD BACK TO YOUR DB AS IT'S UNALTERED
                //UP TO YOU, NOT REALLY BOTHERED
                var base64 = r.target.result;
                //this.imageFileName = r.target.result as string; //MEU JC
                _this.imageFileBase64 = r.target.result; //MEU JC
                //FIXING ORIENTATION USING NPM PLUGIN fix-orientation
                // fixOrientation(base64, { image: true }, (fixed: string, image: any) => {
                //   //fixed IS THE NEW VERSION FOR DISPLAY PURPOSES
                //   this.Foto = fixed;
                //   //this.alertService.hideLoader(500);
                // });
            };
            //console.log('imagem: ', element.files[0]);
            reader.readAsDataURL(element.files[0]);
            _this.imageCroquiExtension = element.files[0].type;
            _this.imageFile = element.files[0];
        };
    };
    MinhaContaPage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.    
    };
    MinhaContaPage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        //console.log("ionViewDidLeave");    
    };
    MinhaContaPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    MinhaContaPage.prototype.MostraDados = function (CodigoUsuario) {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando      
        var params = {
            'StatusCRUD': 'Pesquisar',
            'formValues': '',
            'CodigoUsuarioSistema': CodigoUsuario,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        this.Authorizer.QueryStoreProc('MinhaConta', 'spMinhaConta', params).then(function (res) {
            var resultado = res[0];
            console.log("resultado", resultado);
            try {
                if (resultado.success) {
                    _this.photopath = JSON.parse(resultado.results)[0].photopath;
                    if (_this.photopath) {
                        var path = _this.env.API_HOST + '/ServiceProntoBook/';
                        _this.imageFileBase64 = path + JSON.parse(resultado.results)[0].photopath;
                    }
                    else {
                        _this.photopath = '';
                    }
                    _this.Nome = JSON.parse(resultado.results)[0].Nome;
                    _this.SobreNome = JSON.parse(resultado.results)[0].SobreNome;
                    var dat = JSON.parse(resultado.results)[0].DataDeNascimento;
                    if (typeof (dat) == 'undefined')
                        dat = '';
                    if (dat == null)
                        dat = '';
                    if (dat != '')
                        _this.DataDeNascimento = dat;
                    var R = JSON.parse(resultado.results)[0].RH;
                    if (typeof (R) == 'undefined')
                        R = '';
                    if (R == null)
                        R = '';
                    if (R != '')
                        _this.RH = R;
                    var sex = JSON.parse(resultado.results)[0].Sexo;
                    if (typeof (sex) == 'undefined')
                        sex = '';
                    if (sex == null)
                        sex = '';
                    if (R != '')
                        _this.Sexo = sex;
                    var pos = JSON.parse(resultado.results)[0].position;
                    if (typeof (pos) == 'undefined')
                        pos = '';
                    if (pos == null)
                        pos = '';
                    if (R != '')
                        _this.Pos = pos;
                    //this.alertService.showLoader(resultado.message, 1000);
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
    MinhaContaPage.prototype.atualizar = function (form) {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando  
        if (this.imageFile) {
            this.Authorizer.QueryStoreImagem('SalvarImagem', '', 'images/', this.imageFile).then(function (res) {
                var resultado = res[0];
                //resultado.results // This is the complete path. Ejemplo: "C:\web\sites\ServiceImobiliario\uploads\imagems\croqui\y35swmarzjt.jpg"
                if (res[0].success) {
                    // rutaImagem = this.envService.API_NAME + res[0].results;
                    // this.imageFileBase64 = this.envService.API_NAME + res[0].results;
                    console.log('I am the path', res[0].results);
                    form.value.path = res[0].results;
                    form.value.Senha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__["Md5"].hashStr(form.value.Senha);
                    form.value.ReSenha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__["Md5"].hashStr(form.value.ReSenha);
                    var params = {
                        'StatusCRUD': 'Gravar',
                        'formValues': form.value,
                        'CodigoUsuarioSistema': JSON.parse(sessionStorage.SessionUser)[0].CodigoUsuario,
                        'Hashkey': sessionStorage.getItem("SessionHashkey")
                    };
                    console.log("valores:", params);
                    _this.Authorizer.QueryStoreProc('MinhaConta', 'spMinhaConta', params).then(function (res) {
                        var resultado = res[0];
                        console.log("resultado", resultado);
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
                }
            });
        }
        else {
            form.value.path = this.photopath;
            form.value.Senha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__["Md5"].hashStr(form.value.Senha);
            form.value.ReSenha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__["Md5"].hashStr(form.value.ReSenha);
            var params = {
                'StatusCRUD': 'Gravar',
                'formValues': form.value,
                'CodigoUsuarioSistema': JSON.parse(sessionStorage.SessionUser)[0].CodigoUsuario,
                'Hashkey': sessionStorage.getItem("SessionHashkey")
            };
            console.log("valores:", params);
            this.Authorizer.QueryStoreProc('MinhaConta', 'spMinhaConta', params).then(function (res) {
                var resultado = res[0];
                console.log("resultado", resultado);
                try {
                    if (resultado.success) {
                        _this.alertService.showLoader(resultado.message, 1000);
                    }
                    else {
                        _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: '', pMessage: resultado.message });
                        //this.navCtrl.navigateRoot('/login');
                    }
                }
                catch (err) {
                    _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Erro', pMessage: 'Nenhum usuário!' });
                }
            });
        }
    };
    MinhaContaPage.prototype.takePicture = function () {
        var element = this.cameraInput.nativeElement;
        element.click();
    };
    MinhaContaPage.prototype.seleccionarImagen = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "SELECIONAR FONTE DA IMAGEM",
                            buttons: [{
                                    text: 'Carregar da biblioteca de Imagens',
                                    handler: function () {
                                        // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                                        _this.takePicture();
                                    }
                                },
                                {
                                    text: 'Use a Câmera',
                                    handler: function () {
                                        //this.takePicture(this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Fechar',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputcamera'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MinhaContaPage.prototype, "cameraInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Nome'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MinhaContaPage.prototype, "iNome", void 0);
    MinhaContaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-minhaconta',
            template: __webpack_require__(/*! ./minhaconta.page.html */ "./src/app/pages/minhaconta/minhaconta.page.html"),
            styles: [__webpack_require__(/*! ./minhaconta.page.scss */ "./src/app/pages/minhaconta/minhaconta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"]])
    ], MinhaContaPage);
    return MinhaContaPage;
}());



/***/ })

}]);
//# sourceMappingURL=minhaconta-minhaconta-module.js.map