(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sangue-sangue-module"],{

/***/ "./src/app/pages/sangue/sangue.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sangue/sangue.module.ts ***!
  \***********************************************/
/*! exports provided: SanguePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanguePageModule", function() { return SanguePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sangue_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sangue.page */ "./src/app/pages/sangue/sangue.page.ts");







var routes = [
    {
        path: '',
        component: _sangue_page__WEBPACK_IMPORTED_MODULE_6__["SanguePage"]
    }
];
var SanguePageModule = /** @class */ (function () {
    function SanguePageModule() {
    }
    SanguePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sangue_page__WEBPACK_IMPORTED_MODULE_6__["SanguePage"]]
        })
    ], SanguePageModule);
    return SanguePageModule;
}());



/***/ }),

/***/ "./src/app/pages/sangue/sangue.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/sangue/sangue.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Sangue</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <!--\n        Use a documentação para construir os componestes\n        https://ionicframework.com/docs/api/action-sheet\n      -->\n  <form #form=\"ngForm\" (ngSubmit)=\"Criacao(form);\" method=\"post\">\n\n\n    <!--  <ion-avatar slot=\"start\" class=\"avatar\"> -->\n    <ion-grid>\n      <ion-row>\n\n        <ion-col class=\"ion-text-center\">\n          <img src=\"{{imageFileBase64}}\" (click)=\"seleccionarImagen()\" class=\"back\">\n\n        </ion-col>\n        <input #inputcamera type=\"file\" accept=\"image/*\" capture=\"camera\" [hidden]=true />\n\n      </ion-row>\n\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n\n        <ion-col>\n\n          Gerador do exame :\n          <ion-item lines=\"none\">\n            <ion-list>\n              <ion-radio-group>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Atendimento</ion-label>\n                  <ion-radio slot=\"start\" value=\"atend\" (ionSelect)='getAtend($event)' class=\"radio\"></ion-radio>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Paciente</ion-label>\n                  <ion-radio slot=\"start\" value=\"paciente\" (ionSelect)='getPaciente($event)' class=\"radio\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-item>\n\n        </ion-col>\n        <ion-col>\n          Tipo do exame :\n          <ion-item lines=\"none\">\n            <ion-list>\n              <ion-radio-group>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Primeira vez</ion-label>\n                  <ion-radio slot=\"start\" value=\"Primeira\" (ionSelect)='getPrimeira($event)' class=\"radio\"></ion-radio>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Controle</ion-label>\n                  <ion-radio slot=\"start\" value=\"Controle\" (ionSelect)='getControle($event)' class=\"radio\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-searchbar ngModel placeholder=\"Codigo do gerador\" name=\"Codigo\" (ionChange)='atualizarr(form)'\n      value=\"{{ Codigo  }}\"></ion-searchbar>\n\n\n\n    <ion-label position=\"floating\">Nome:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Nome do paciente\" name=\"Nome\" required value=\"{{ Nome  }}\">\n    </ion-input>\n\n\n    <ion-label position=\"floating\">Sobrenome:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Sobrenome do paciente \" name=\"SobreNome\" required\n      value=\"{{ SobreNome  }}\"></ion-input>\n\n    <ion-label position=\"floating\">CPF do paciente:</ion-label>\n    <ion-input ngModel disabled type=\"text\" placeholder=\"CPF do paciente \" name=\"CPF\" required value=\"{{ CPF  }}\"></ion-input>\n\n    <ion-list>\n      <ion-label position=\"floating\">Sexo do paciente:</ion-label>\n      <ion-select ngModel interface=\"popover\" type=\"text\" name=\"Sexo\" placeholder=\"Sexo do paciente\" value=\"{{ Sexo }}\">\n        <ion-select-option *ngFor=\"let os of sexos\">{{os.Sexo}}</ion-select-option>\n      </ion-select>\n    </ion-list>\n\n\n    <ion-row>\n      Dados analisados :\n      <ion-item lines=\"none\">\n        <ion-list>\n          <ion-radio-group [allowEmptySelection]=true>\n\n            <ion-item lines=\"none\">\n              <ion-label>Vida sexual</ion-label>\n              <ion-radio slot=\"start\" value=\"vs\" class=\"radio\" (ionSelect)='getvs($event)'></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n          <ion-radio-group [allowEmptySelection]=true>\n            <ion-item lines=\"none\">\n              <ion-label>Colesterol</ion-label>\n              <ion-radio slot=\"start\" value=\"col\" class=\"radio\" (ionSelect)='getcol($event)'></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n          <ion-radio-group [allowEmptySelection]=true>\n            <ion-item lines=\"none\">\n              <ion-label>HDL</ion-label>\n              <ion-radio slot=\"start\" value=\"hdl\" class=\"radio\" (ionSelect)='gethdl($event)'></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n          <ion-radio-group [allowEmptySelection]=true>\n            <ion-item lines=\"none\">\n              <ion-label>LDL</ion-label>\n              <ion-radio slot=\"start\" value=\"ldl\" class=\"radio\" (ionSelect)='getldl($event)'></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n          <ion-radio-group [allowEmptySelection]=true>\n            <ion-item lines=\"none\">\n              <ion-label>Triglicerídeos</ion-label>\n              <ion-radio slot=\"start\" value=\"tri\" class=\"radio\" (ionSelect)='gettri($event)'></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n\n          <ion-radio-group [allowEmptySelection]=true>\n            <ion-item lines=\"none\">\n              <ion-label>PSA</ion-label>\n              <ion-radio slot=\"start\" value=\"psa\" class=\"radio\" (ionSelect)='getpsa($event)'></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n        </ion-list>\n      </ion-item>\n    </ion-row>\n\n\n    <ion-grid>\n      <ion-label position=\"floating\">Coleta:</ion-label>\n      <ion-row>\n\n        <ion-col>\n\n          <ion-input ngModel type=\"number\" placeholder=\"CA\" name=\"ca\" required value=\"{{ ca  }}\">\n          </ion-input>\n          <ion-input ngModel type=\"number\" placeholder=\"Glicemia\" name=\"Glicemia\" required value=\"{{ Glicemia  }}\">\n          </ion-input>\n        </ion-col>\n\n        <ion-col>\n          <ion-input ngModel type=\"number\" placeholder=\"Pressão Sistólica\" name=\"ps\" required value=\"{{ ps  }}\">\n          </ion-input>\n          <ion-input ngModel type=\"number\" placeholder=\"Pressão Diastólica\" name=\"pd\" required value=\"{{ pd  }}\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n\n    <div class=\"ion-text-center\">\n\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"at_but\">Salvar</ion-button>\n    </div>\n\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/sangue/sangue.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/sangue/sangue.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\n.back {\n  border-radius: 10px; }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n.add {\n  width: 3rem;\n  height: 3rem;\n  margin-top: -2rem;\n  margin-left: 80%; }\n\n.back {\n  border-radius: 10px; }\n\n.radio {\n  padding-left: 0px;\n  margin-right: 5px;\n  margin-left: 0px; }\n\nion-radio-group ion-item {\n  --padding-start: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FuZ3VlL0M6XFxVc2Vyc1xcTGV2ZWxcXERlc2t0b3BcXG91c3NhbWFcXFByb250byBCb29rL3NyY1xcYXBwXFxwYWdlc1xcc2FuZ3VlXFxzYW5ndWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxzQkFBYTtFQUViLHFCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBTWQ7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFFSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdEQUF3RDtFQUN4RCxrQkFBa0I7RUFLbEIscUJBQWM7RUFDZCx3QkFBaUI7RUFDakIsdUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFLbEI7RUFFUSxvQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nhbmd1ZS9zYW5ndWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1oZWFkZXJ7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojNTg5MTkxO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbiAgICBcclxufVxyXG5cclxuLmF0X2J1dHtcclxuICAgIC0tYmFja2dyb3VuZDogICM3Q0JCQkE7XHJcbiAgIFxyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmJhY2t7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICAvL2ZvbnQtc2l6ZToxLjJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDAuNTVweCBzb2xpZCByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuNCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAvLy0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLy8tLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC8vb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZyZW07XHJcbiAgfVxyXG5cclxuICAuYWRke1xyXG4gICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOi0ycmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogODAlO1xyXG4gIH1cclxuXHJcbiAgLmJhY2t7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJhZGlvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgaW9uLXJhZGlvLWdyb3Vwe1xyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/sangue/sangue.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/sangue/sangue.page.ts ***!
  \*********************************************/
/*! exports provided: SanguePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanguePage", function() { return SanguePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");













var STORAGE_KEY = 'my_images';
var SanguePage = /** @class */ (function () {
    function SanguePage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.modalController = modalController;
        this.platform = platform;
        this.navController = navController;
        this.formBuilder = formBuilder;
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
    SanguePage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/consultsangue');
        });
        //console.log("ionViewDidEnter");
    };
    SanguePage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        //console.log("ionViewWillEnter");
        //this.CRUDActionAPIForm('Pesquisando', null);  
    };
    SanguePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log("ionViewDidEnter");
        var element = this.cameraInput.nativeElement;
        this.imageFileBase64 = "assets/imgs/sanguee.png";
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
    SanguePage.prototype.ionViewWillLeave = function () {
    };
    SanguePage.prototype.ionViewDidLeave = function () {
    };
    SanguePage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    SanguePage.prototype.atualizarr = function (Codigo) {
        var _this = this;
        console.log(Codigo.form.value.Codigo);
        //create form 
        var params = {
            'StatusCRUD': 'Pesquisar1',
            'formValues': Codigo.form.value.Codigo,
            'exame': this.checked,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("Pesquisar:", params);
        this.Authorizer.QueryStoreProc('Executar', "spExame", params).then(function (res) {
            var resultado = res[0];
            console.log(resultado);
            try {
                if (resultado.success) {
                    var result = JSON.parse(resultado.results);
                    console.log('est', result);
                    if (JSON.parse(resultado.results)[0].name != undefined) {
                        _this.Nome = JSON.parse(resultado.results)[0].name;
                        _this.SobreNome = JSON.parse(resultado.results)[0].last_name;
                        _this.Sexo = JSON.parse(resultado.results)[0].gender;
                        _this.CPF = JSON.parse(resultado.results)[0].cpf;
                    }
                    else {
                        _this.Nome = JSON.parse(resultado.results)[0].Nome;
                        _this.SobreNome = JSON.parse(resultado.results)[0].Sobrenome;
                        _this.Sexo = JSON.parse(resultado.results)[0].Sexo;
                        _this.CPF = JSON.parse(resultado.results)[0].CPF;
                    }
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Exame', pMessage: 'Não  paciente' });
                    //this.navCtrl.navigateRoot('/login');
                    _this.Nome = '';
                    _this.SobreNome = '';
                    _this.Sexo = '';
                    _this.CPF = '';
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Patient', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    SanguePage.prototype.getAtend = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked = 'atendimento';
        }
    };
    SanguePage.prototype.getPaciente = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked = 'paciente';
        }
    };
    SanguePage.prototype.getPrimeira = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_tipo = 'primeira vez';
        }
    };
    SanguePage.prototype.getControle = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_tipo = 'controle';
        }
    };
    SanguePage.prototype.getvs = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_vs = 'Vida sexual';
        }
    };
    SanguePage.prototype.getcol = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_col = 'Colesterol';
        }
    };
    SanguePage.prototype.gethdl = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_hdl = 'HDL';
        }
    };
    SanguePage.prototype.getldl = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_ldl = 'LDL';
        }
    };
    SanguePage.prototype.gettri = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_tri = 'Triglicerídeos';
        }
    };
    SanguePage.prototype.getpsa = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_psa = 'PSA';
        }
    };
    SanguePage.prototype.Criacao = function (form) {
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
                    form.value.CPF = _this.CPF;
                    var params = {
                        'StatusCRUD': 'Criacao_exame_sangue',
                        'formValues': form.value,
                        'exame': _this.checked,
                        'tipo': _this.checked_tipo,
                        'vidas': _this.checked_vs,
                        'col': _this.checked_col,
                        'hdl': _this.checked_hdl,
                        'ldl': _this.checked_ldl,
                        'tri': _this.checked_tri,
                        'psa': _this.checked_psa,
                        'CodigoUsuarioSistema': 0,
                        'Hashkey': sessionStorage.getItem("SessionHashkey")
                    };
                    console.log("Novo Fisico:", params);
                    _this.Authorizer.QueryStoreProc('Executar', 'spExame', params).then(function (res) {
                        var resultado = res[0];
                        console.log(resultado);
                        try {
                            if (resultado.success) {
                                _this.alertService.presentAlert({ pTitle: 'Salvando Exame...', pSubtitle: '', pMessage: 'Operação realizada com sucesso!' });
                                _this.alertService.showLoader(resultado.message, 1000);
                                _this.goBack();
                            }
                            else {
                                _this.alertService.presentAlert({ pTitle: 'Atenção', pSubtitle: 'Erro', pMessage: 'Operação não realizada!' });
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
            form.value.CPF = this.CPF;
            var params = {
                'StatusCRUD': 'Criacao_exame_sangue',
                'formValues': form.value,
                'exame': this.checked,
                'tipo': this.checked_tipo,
                'vidas': this.checked_vs,
                'col': this.checked_col,
                'hdl': this.checked_hdl,
                'ldl': this.checked_ldl,
                'tri': this.checked_tri,
                'psa': this.checked_psa,
                'CodigoUsuarioSistema': 0,
                'Hashkey': sessionStorage.getItem("SessionHashkey")
            };
            console.log("Novo Fisico:", params);
            this.Authorizer.QueryStoreProc('Executar', 'spExame', params).then(function (res) {
                var resultado = res[0];
                console.log(resultado);
                try {
                    if (resultado.success) {
                        _this.alertService.presentAlert({ pTitle: 'Salvando Exame...', pSubtitle: '', pMessage: 'Operação realizada com sucesso!' });
                        _this.alertService.showLoader(resultado.message, 1000);
                        _this.goBack();
                    }
                    else {
                        _this.alertService.presentAlert({ pTitle: 'Atenção', pSubtitle: 'Erro', pMessage: 'Operação não realizada!' });
                    }
                }
                catch (err) {
                    _this.alertService.presentAlert({ pTitle: 'Atenção', pSubtitle: 'Erro', pMessage: 'Verifique seus dados!' });
                }
            });
        }
    };
    /////////////////////////////  image insert //////////////////////////////
    SanguePage.prototype.takePicture = function () {
        var element = this.cameraInput.nativeElement;
        element.click();
    };
    SanguePage.prototype.seleccionarImagen = function () {
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
    ], SanguePage.prototype, "cameraInput", void 0);
    SanguePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sangue',
            template: __webpack_require__(/*! ./sangue.page.html */ "./src/app/pages/sangue/sangue.page.html"),
            styles: [__webpack_require__(/*! ./sangue.page.scss */ "./src/app/pages/sangue/sangue.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SanguePage);
    return SanguePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sangue-sangue-module.js.map