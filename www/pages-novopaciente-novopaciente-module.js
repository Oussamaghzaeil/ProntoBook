(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-novopaciente-novopaciente-module"],{

/***/ "./src/app/pages/novopaciente/novopaciente.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/novopaciente/novopaciente.module.ts ***!
  \***********************************************************/
/*! exports provided: NovopacientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovopacientePageModule", function() { return NovopacientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _novopaciente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./novopaciente.page */ "./src/app/pages/novopaciente/novopaciente.page.ts");








var routes = [
    {
        path: '',
        component: _novopaciente_page__WEBPACK_IMPORTED_MODULE_6__["NovopacientePage"]
    }
];
var NovopacientePageModule = /** @class */ (function () {
    function NovopacientePageModule() {
    }
    NovopacientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_novopaciente_page__WEBPACK_IMPORTED_MODULE_6__["NovopacientePage"]]
        })
    ], NovopacientePageModule);
    return NovopacientePageModule;
}());



/***/ }),

/***/ "./src/app/pages/novopaciente/novopaciente.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/novopaciente/novopaciente.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Novo Paciente</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <!--\n      Use a documentação para construir os componestes\n      https://ionicframework.com/docs/api/action-sheet\n    -->\n  <form [formGroup]=\"slideOneForm\" #form=\"ngForm\" (ngSubmit)=\"atualizar(form);\" method=\"post\">\n\n    <ion-grid>\n      <ion-row>\n\n        <ion-col class=\"ion-text-center\">\n          <ion-avatar class=\"ava\">\n            <img src=\"{{imageFileBase64}}\" (click)=\"seleccionarImagen()\">\n          </ion-avatar>\n\n        </ion-col>\n        <input #inputcamera type=\"file\" accept=\"image/*\" capture=\"camera\" [hidden]=true />\n\n      </ion-row>\n\n    </ion-grid>\n\n\n    <ion-label position=\"floating\">Nome:</ion-label>\n    <ion-input formControlName=\"nome\" type=\"text\" placeholder=\"Primeiro Nome\" name=\"Nome\" required> </ion-input>\n\n    <ion-label position=\"floating\">Sobrenome:</ion-label>\n    <ion-input formControlName=\"sobrenome\" type=\"text\" placeholder=\"Informe Sobrenome \" name=\"SobreNome\" required>\n    </ion-input>\n\n    <ion-label position=\"floating\">Data De Nascimento:</ion-label>\n    <ion-datetime formControlName=\"data\" doneText='OK' cancelText='CANCELAR' type=\"text\" displayFormat=\"DD/MM/YYYY\"\n      placeholder=\"Informe a data de nascimento \" name=\"DataDeNascimento\" required></ion-datetime>\n\n\n\n    <ion-list>\n\n      <ion-label position=\"floating\">Sexo:</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"sexo\" type=\"text\" name=\"Sexo\" placeholder=\"Selecione o Sexo...\">\n        <ion-select-option *ngFor=\"let os of sexos\">{{os.Sexo}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-label position=\"floating\">RH:</ion-label>\n      <ion-select interface=\"popover\" formControlName=\"rh\" type=\"text\" name=\"RH\" placeholder=\"Selecione o RH...\">\n        <ion-select-option *ngFor=\"let os of RHs\">{{os.RH}}</ion-select-option>\n      </ion-select>\n\n    </ion-list>\n\n\n    <ion-label position=\"floating\">CPF:</ion-label>\n    <!-- \n    <ion-input formControlName=\"cpfCont\"  type=\"text\"   placeholder=\"000.000.000-00\"\n      required> </ion-input>\n    <ion-item *ngIf=\"!slideOneForm.controls.cpfCont.valid  && (slideOneForm.controls.cpfCont.dirty || submitAttempt)\">\n      <p>por favor insira um CPF válido</p>\n    </ion-item> -->\n\n\n    <ion-input type=\"text\" placeholder=\"CPF\" name=\"cpf\" id=\"cpf\" formControlName=\"cpfCont\"\n      (ionChange)=\"format(form,'cpf')\">\n    </ion-input>\n\n\n\n    <ion-label position=\"floating\">CNS:</ion-label>\n    <ion-input formControlName=\"cns\" type=\"number\" placeholder=\"Informe CNS \" name=\"CNS\" required></ion-input>\n\n    <ion-label position=\"floating\">Perfil:</ion-label>\n    <ion-input formControlName=\"perfile\" type=\"number\" placeholder=\"Informe Perfil \" name=\"Perfile\" required>\n    </ion-input>\n\n    <ion-label position=\"floating\">Email:</ion-label>\n    <ion-input formControlName=\"email\" #email type=\"email\" placeholder=\"Informe Email\" name=\"email\"\n      pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}\" required>\n    </ion-input>\n\n\n\n    <div class=\"ion-text-center\">\n\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"at_but\">Criar</ion-button>\n    </div>\n\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/novopaciente/novopaciente.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/novopaciente/novopaciente.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\nion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\n.ava {\n  width: 7rem;\n  height: 7rem;\n  margin: auto; }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm92b3BhY2llbnRlL0M6XFxVc2Vyc1xcTGV2ZWxcXERlc2t0b3BcXG91c3NhbWFcXFByb250byBCb29rL3NyY1xcYXBwXFxwYWdlc1xcbm92b3BhY2llbnRlXFxub3ZvcGFjaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVk7RUFBWixhQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUVJLDhCQUF1QixFQUFBOztBQUkzQjtFQUNJLGNBQXlCLEVBQUE7O0FBSTdCO0VBQ0ksc0JBQWE7RUFFYixxQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQU1iO0VBQ0csV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBSWhCO0VBRUksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3REFBd0Q7RUFDeEQsa0JBQWtCO0VBS2xCLHFCQUFjO0VBQ2Qsd0JBQWlCO0VBQ2pCLHVCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm92b3BhY2llbnRlL25vdm9wYWNpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuaW9uLWhlYWRlcntcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTE7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxuICAgIFxyXG59XHJcblxyXG4uYXRfYnV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzdDQkJCQTtcclxuICAgXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4gLmF2YSB7XHJcbiAgICB3aWR0aDogN3JlbTtcclxuICAgIGhlaWdodDogN3JlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgLy9mb250LXNpemU6MS4ycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAwLjU1cHggc29saWQgcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjQpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLy0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgLy8tLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC8vLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAvL29wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy10b3A6IDAuN3JlbTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDAuN3JlbTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMC42cmVtO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/novopaciente/novopaciente.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/novopaciente/novopaciente.page.ts ***!
  \*********************************************************/
/*! exports provided: NovopacientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovopacientePage", function() { return NovopacientePage; });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");














var STORAGE_KEY = 'my_images';
var NovopacientePage = /** @class */ (function () {
    function NovopacientePage(navCtrl, alertService, env, Authorizer, Eventos, modalController, platform, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath, formBuilder) {
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
        this.formBuilder = formBuilder;
        this.DECIMAL_SEPARATOR = ".";
        this.GROUP_SEPARATOR = ",";
        this.images = [];
        this.imageData = [];
        this.SrcPhotoAvatar = "assets/imgs/user.jpg";
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
        this.slideOneForm = formBuilder.group({
            cpfCont: [''],
            cns: [''],
            nome: [''],
            sobrenome: [''],
            email: [''],
            sexo: [''],
            rh: [''],
            data: [''],
            perfile: [''],
        });
    }
    NovopacientePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ionViewDidEnter");
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/prontuarios');
        });
    };
    NovopacientePage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        //console.log("ionViewWillEnter");
        //this.CRUDActionAPIForm('Pesquisando', null);  
    };
    NovopacientePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Disparado quando o roteamento de componentes terminou de ser animado.        
        //this.MostraDados(JSON.parse(sessionStorage.getItem('SessionUser'))[0].CodigoUsuario);   
        console.log("ionViewDidEnter");
        /*
        setTimeout(() => {
          this.iNome.setFocus();
        },150);
        */
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
    NovopacientePage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.    
    };
    NovopacientePage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        //console.log("ionViewDidLeave");    
    };
    NovopacientePage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    NovopacientePage.prototype.atualizar = function (form) {
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
                    console.log('formmmmmm', form);
                    form.value.path = res[0].results;
                    var params = {
                        'StatusCRUD': 'Criacao',
                        'formValues': form.value,
                        'CodigoUsuarioSistema': 0,
                        'Hashkey': sessionStorage.getItem("SessionHashkey")
                    };
                    console.log("valores:", params);
                    _this.Authorizer.QueryStoreProc('Executar', 'spPatient', params).then(function (res) {
                        var resultado = res[0];
                        console.log("resultado", resultado);
                        try {
                            if (resultado.success) {
                                _this.alertService.presentAlert({ pTitle: 'Salvando Paciente...', pSubtitle: '', pMessage: 'Operação realizada com sucesso!' });
                                _this.alertService.showLoader(resultado.message, 1000);
                                _this.goBack();
                            }
                            else {
                                _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: 'Operação não realizada!' });
                                //this.navCtrl.navigateRoot('/login');
                            }
                        }
                        catch (err) {
                            _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: 'Verifique seus dados!' });
                        }
                    });
                }
            });
        }
        else {
            var params = {
                'StatusCRUD': 'Criacao',
                'formValues': form.value,
                'CodigoUsuarioSistema': 0,
                'Hashkey': sessionStorage.getItem("SessionHashkey")
            };
            console.log("valores:", params);
            this.Authorizer.QueryStoreProc('Executar', 'spPatient', params).then(function (res) {
                var resultado = res[0];
                console.log("resultado", resultado);
                try {
                    if (resultado.success) {
                        _this.alertService.presentAlert({ pTitle: 'Salvando Paciente...', pSubtitle: '', pMessage: 'Operação realizada com sucesso!' });
                        _this.alertService.showLoader(resultado.message, 1000);
                        _this.goBack();
                    }
                    else {
                        _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: 'Operação não realizada!' });
                        //this.navCtrl.navigateRoot('/login');
                    }
                }
                catch (err) {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: 'Verifique seus dados!' });
                }
            });
        }
    };
    NovopacientePage.prototype.takePicture = function () {
        var element = this.cameraInput.nativeElement;
        element.click();
    };
    NovopacientePage.prototype.seleccionarImagen = function () {
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
    /* ------------------------------------------- MASK CPF ----------------------------------------- */
    NovopacientePage.prototype.unFormat = function (val) {
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
    NovopacientePage.prototype.cpf_mask = function (v) {
        v = v.replace(/\D/g, ''); //Elimina todo lo que no es Digito
        v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca punto entre el trecero y cuarto digito
        v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca punto entre el trecero y cuarto digito
        //de nuevo (para el segundo bloque de números)
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca un guion entre Coloca el tercero y cuarto digito del ultimo bloque
        return v;
    };
    /* ValString: value to be validated
       idComponent: this is the id of your HTML component. For example id=""
    */
    NovopacientePage.prototype.format = function (valStringTemp, idComponent) {
        var valString = valStringTemp.form.value.cpfCont;
        var mask;
        if (!valString) {
            return '';
        }
        var val = valString.toString();
        var parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
        if (parts[0].length > 0 && parts[0].length <= 11) { // this is for CPF validation
            mask = this.cpf_mask(parts[0]);
        }
        else {
            // This is to separate string, maybe you would like to use to make validations in the future
            mask = parts[0].substring(0, 11);
        }
        //Warning: This is old code but it works, if you find a better solution 
        // just tell me. Your friend JC.
        document.getElementById(idComponent).value = mask;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Nome'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NovopacientePage.prototype, "iNome", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputcamera'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NovopacientePage.prototype, "cameraInput", void 0);
    NovopacientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-novopaciente',
            template: __webpack_require__(/*! ./novopaciente.page.html */ "./src/app/pages/novopaciente/novopaciente.page.html"),
            styles: [__webpack_require__(/*! ./novopaciente.page.scss */ "./src/app/pages/novopaciente/novopaciente.page.scss")]
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
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]])
    ], NovopacientePage);
    return NovopacientePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-novopaciente-novopaciente-module.js.map