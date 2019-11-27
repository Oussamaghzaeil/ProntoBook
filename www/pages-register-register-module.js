(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Criar Conta</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"GravarDados(form)\" method=\"post\">\n\n    <ion-grid>\n      <ion-row>\n\n        <ion-col class=\"ion-text-center\">\n          <ion-avatar class=\"ava\">\n            <img src=\"{{imageFileBase64}}\" (click)=\"seleccionarImagen()\">\n          </ion-avatar>\n\n        </ion-col>\n        <input #inputcamera type=\"file\" accept=\"image/*\" capture=\"camera\" [hidden]=true />\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-label position=\"floating\">Nome:</ion-label>\n    <ion-input #Nome ngModel type=\"text\" placeholder=\"Primeiro Nome\" name=\"Nome\" required value=\"{{ Nome  }}\">\n    </ion-input>\n\n\n\n    <ion-label position=\"floating\">Sobrenome:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Informe Sobrenome \" name=\"SobreNome\" required value=\"{{ SobreNome  }}\">\n    </ion-input>\n\n    <ion-label position=\"floating\">Data de nascimento</ion-label>\n    <ion-datetime [(ngModel)] = \"Datadenascimento\" doneText='OK' cancelText='CANCELAR'   displayFormat=\"DD/MM/YYYY\" placeholder=\"DD/MM/AAAA \"  name=\"Datadenascimento\" required >\n    </ion-datetime>\n\n\n\n    <ion-list>\n\n      <ion-label position=\"floating\">Sexo:</ion-label>\n      <ion-select ngModel interface=\"popover\" name=\"sex\" placeholder=\"Selecione o Sexo...\" value=\"{{ Sexo  }}\">\n        <ion-select-option *ngFor=\"let os of sexos\">{{os.sexo}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n\n\n\n    <ion-list>\n\n      <ion-label position=\"floating\">RH:</ion-label>\n      <ion-select ngModel interface=\"popover\" name=\"R\" placeholder=\"Selecione o RH...\" value=\"{{ RH  }}\">\n        <ion-select-option *ngFor=\"let os of RHs\">{{os.RH}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-label position=\"floating\">Posição:</ion-label>\n      <ion-select ngModel interface=\"popover\" name=\"pos\" placeholder=\"Selecione o Posição...\" value=\"{{ pos  }}\">\n        <ion-select-option *ngFor=\"let os of poss\">{{os.pos}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n\n    <ion-label position=\"floating\">Email:</ion-label>\n    <ion-input #email ngModel type=\"email\" name=\"email\" pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}\"\n      required value=\"{{ Email  }}\"></ion-input>\n\n    <ion-label position=\"floating\">Senha:</ion-label>\n    <ion-input ngModel type=\"password\" placeholder=\"Digite a Senha\" name=\"Senha\" required>\n    </ion-input>\n\n    <ion-label position=\"floating\">Repita a Senha:</ion-label>\n    <ion-input ngModel type=\"password\" placeholder=\"Repita a Senha\" name=\"ReSenha\" required>\n    </ion-input>\n\n\n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"sol_but\">Solicitar Cadastro</ion-button>\n    </div>\n  </form>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.sol_but {\n  --background:  #7CBBBA ;\n  --border-radius: 12px;\n  width: 90%; }\n\n.ava {\n  width: 7rem;\n  height: 7rem;\n  margin: auto; }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxMZXZlbFxcRGVza3RvcFxcb3Vzc2FtYVxcUHJvbnRvIEJvb2svc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSx1QkFBYTtFQUViLHFCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFJaEI7RUFFSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdEQUF3RDtFQUN4RCxrQkFBa0I7RUFLbEIscUJBQWM7RUFDZCx3QkFBaUI7RUFDakIsdUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTtcclxuICAgIFxyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zb2xfYnV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzdDQkJCQSA7XHJcbiAgIFxyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmF2YSB7XHJcbiAgICB3aWR0aDogN3JlbTtcclxuICAgIGhlaWdodDogN3JlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgLy9mb250LXNpemU6MS4ycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAwLjU1cHggc29saWQgcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjQpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLy0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgLy8tLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC8vLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAvL29wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy10b3A6IDAuN3JlbTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDAuN3JlbTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMC42cmVtO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
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
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, alertService, env, Authorizer, Eventos, modalController, platform, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath) {
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
        this.SrcPhotoAvatar = "assets/imgs/user.jpg";
        this.DECIMAL_SEPARATOR = ".";
        this.GROUP_SEPARATOR = ",";
        this.poss = [
            {
                id: 1,
                pos: 'Doutor'
            },
            {
                id: 2,
                pos: 'Assistente'
            }
        ];
        this.sexos = [
            {
                id: 1,
                sexo: 'Masculino'
            },
            {
                id: 2,
                sexo: 'Feminino'
            }
        ];
        this.RHs = [
            {
                id: 1,
                RH: 'O-'
            },
            {
                id: 2,
                RH: 'O+'
            },
            {
                id: 3,
                RH: 'B-'
            },
            {
                id: 4,
                RH: 'B+'
            },
            {
                id: 5,
                RH: 'A+'
            },
            {
                id: 6,
                RH: 'A-'
            },
            {
                id: 7,
                RH: 'AB+'
            },
            {
                id: 8,
                RH: 'AB-'
            }
        ];
    }
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Init");
        this.CodigoUsuario = sessionStorage.getItem("SessionCodigoUsuario");
        this.NomeUsuarioLogado = sessionStorage.getItem("SessionNomeUsuario");
        this.platform.backButton.subscribe(function () {
            _this.goBack();
        });
    };
    RegisterPage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        console.log("ionViewWillEnter");
    };
    RegisterPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log("ionViewDidEnter");
        setTimeout(function () {
            _this.iNome.setFocus();
        }, 150);
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
    RegisterPage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.    
        console.log("ionViewWillLeave");
    };
    RegisterPage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        console.log("ionViewDidLeave");
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    RegisterPage.prototype.GravarDados = function (form) {
        var _this = this;
        // paramStatus: Pesquisar, Gravar, Deletar
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
                        'StatusCRUD': 'Register',
                        'formValues': form.value,
                        'CodigoUsuarioSistema': 0,
                        'Hashkey': sessionStorage.getItem("SessionHashkey")
                    };
                    console.log("Register:", params);
                    _this.Authorizer.QueryStoreProc('MinhaConta', 'spRegister', params).then(function (res) {
                        var resultado = res[0];
                        //console.log(resultado);
                        try {
                            if (resultado.success) {
                                _this.alertService.presentAlert({ pTitle: 'Salvando Conta...', pSubtitle: '', pMessage: 'Operação realizada com sucesso!' });
                                _this.alertService.showLoader(resultado.message, 1000);
                                _this.goBack();
                            }
                            else {
                                _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: 'Operação não realizada!' });
                            }
                        }
                        catch (err) {
                            _this.alertService.presentAlert({ pTitle: 'Atenção', pSubtitle: 'Erro', pMessage: 'Verifique seus dados!' });
                        }
                    });
                }
            });
        }
        else {
            form.value.Senha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__["Md5"].hashStr(form.value.Senha);
            form.value.ReSenha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_6__["Md5"].hashStr(form.value.ReSenha);
            var params = {
                'StatusCRUD': 'Register',
                'formValues': form.value,
                'CodigoUsuarioSistema': 0,
                'Hashkey': sessionStorage.getItem("SessionHashkey")
            };
            console.log("Register:", params);
            this.Authorizer.QueryStoreProc('MinhaConta', 'spRegister', params).then(function (res) {
                var resultado = res[0];
                //console.log(resultado);
                try {
                    if (resultado.success) {
                        _this.alertService.presentAlert({ pTitle: 'Salvando Conta...', pSubtitle: '', pMessage: 'Operação realizada com sucesso!' });
                        _this.alertService.showLoader(resultado.message, 1000);
                        _this.goBack();
                    }
                    else {
                        _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: 'Operação não realizada!' });
                    }
                }
                catch (err) {
                    _this.alertService.presentAlert({ pTitle: 'Atenção', pSubtitle: 'Erro', pMessage: 'Verifique seus dados!' });
                }
            });
        }
    };
    RegisterPage.prototype.unFormat = function (val) {
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
    RegisterPage.prototype.presentToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.takePicture = function () {
        var element = this.cameraInput.nativeElement;
        element.click();
    };
    RegisterPage.prototype.seleccionarImagen = function () {
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
    ], RegisterPage.prototype, "cameraInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Nome'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterPage.prototype, "iNome", void 0);
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
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
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map