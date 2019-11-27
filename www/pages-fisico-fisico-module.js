(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fisico-fisico-module"],{

/***/ "./node_modules/text-mask-addons/dist/createNumberMask.js":
/*!****************************************************************!*\
  !*** ./node_modules/text-mask-addons/dist/createNumberMask.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(g.split(l));if(e===k&&M)return y.split(l).concat(["0",k,v]).concat(g.split(l));var o=e[0]===s&&q;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(k),u=c!==-1,a=void 0,b=void 0,h=void 0;if(e.slice(T*-1)===g&&(e=e.slice(0,T*-1)),u&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,c),b=e.slice(c+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,h=n(a),(u&&M||$===!0)&&(e[c-1]!==k&&h.push(m),h.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),h=h.concat(b)),$===!0&&e[c-1]===k&&h.push(v)),R>0&&(h=y.split(l).concat(h)),o&&(h.length===R&&h.push(v),h=[d].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=g&&g.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});

/***/ }),

/***/ "./src/app/pages/fisico/fisico.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/fisico/fisico.module.ts ***!
  \***********************************************/
/*! exports provided: FisicoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisicoPageModule", function() { return FisicoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fisico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fisico.page */ "./src/app/pages/fisico/fisico.page.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);








var routes = [
    {
        path: '',
        component: _fisico_page__WEBPACK_IMPORTED_MODULE_6__["FisicoPage"]
    }
];
var FisicoPageModule = /** @class */ (function () {
    function FisicoPageModule() {
    }
    FisicoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fisico_page__WEBPACK_IMPORTED_MODULE_6__["FisicoPage"]]
        })
    ], FisicoPageModule);
    return FisicoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/fisico/fisico.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/fisico/fisico.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Físico</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <!--\n      Use a documentação para construir os componestes\n      https://ionicframework.com/docs/api/action-sheet\n    -->\n  <form #form=\"ngForm\" (ngSubmit)=\"Criacao(form);\" method=\"post\">\n\n    <ion-grid>\n      <ion-row>\n\n        <ion-col class=\"ion-text-center\">\n          <img src=\"{{imageFileBase64}}\" (click)=\"seleccionarImagen()\" class=\"back\">\n\n        </ion-col>\n        <input #inputcamera type=\"file\" accept=\"image/*\" capture=\"camera\" [hidden]=true />\n\n      </ion-row>\n\n    </ion-grid>\n\n    <!--  </ion-avatar> -->\n    <ion-grid>\n      <ion-row>\n\n        <ion-col>\n\n          Gerador do exame :\n          <ion-item lines=\"none\">\n            <ion-list>\n              <ion-radio-group>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Atendimento</ion-label>\n                  <ion-radio slot=\"start\" value=\"atend\" (ionSelect)='getAtend($event)' class=\"radio\"></ion-radio>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Paciente</ion-label>\n                  <ion-radio slot=\"start\" value=\"paciente\" (ionSelect)='getPaciente($event)' class=\"radio\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-item>\n\n        </ion-col>\n        <ion-col>\n          Tipo do exame :\n          <ion-item lines=\"none\">\n            <ion-list>\n              <ion-radio-group>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Primeira vez</ion-label>\n                  <ion-radio slot=\"start\" value=\"Primeira\" (ionSelect)='getPrimeira($event)' class=\"radio\"></ion-radio>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Controle</ion-label>\n                  <ion-radio slot=\"start\" value=\"Controle\" (ionSelect)='getControle($event)' class=\"radio\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-searchbar ngModel placeholder=\"Codigo do gerador\" name=\"Codigo\" (ionChange)='atualizarr(form)'\n      value=\"{{ Codigo  }}\"></ion-searchbar>\n\n\n\n    <ion-label position=\"floating\">Nome:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Nome do paciente\" name=\"Nome\" required value=\"{{ Nome  }}\">\n    </ion-input>\n\n\n    <ion-label position=\"floating\">Sobrenome:</ion-label>\n    <ion-input ngModel type=\"text\" placeholder=\"Sobrenome do paciente \" name=\"SobreNome\" required\n      value=\"{{ SobreNome  }}\"></ion-input>\n\n    <ion-label position=\"floating\">CPF do paciente:</ion-label>\n    <ion-input ngModel type=\"text\" disabled placeholder=\"CPF do paciente \" name=\"CPF\" required value=\"{{ CPF  }}\">\n    </ion-input>\n\n    <ion-list>\n      <ion-label position=\"floating\">Sexo do paciente:</ion-label>\n      <ion-select ngModel type=\"text\" interface=\"popover\" name=\"Sexo\" placeholder=\"Sexo do paciente\" value=\"{{ Sexo }}\">\n        <ion-select-option *ngFor=\"let os of sexos\">{{os.Sexo}}</ion-select-option>\n      </ion-select>\n    </ion-list>\n\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label position=\"floating\">Peso:</ion-label>\n \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n          <ion-input ngModel type=\"number\" placeholder=\"(Kg)\" name=\"pesokg\" required value=\"{{ pesokg  }}\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-input ngModel type=\"number\" placeholder=\"(Gr)\" name=\"pesogr\" required value=\"{{ pesogr  }}\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label position=\"floating\">Altura:</ion-label>\n          <ion-input ngModel type=\"number\" placeholder=\"Altura(cm)\" name=\"altura\" required value=\"{{ altura  }}\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-row>\n      Fumante :\n      <ion-item lines=\"none\">\n        <ion-list>\n          <ion-radio-group>\n\n            <ion-item lines=\"none\">\n              <ion-label>Sim</ion-label>\n              <ion-radio slot=\"start\" value=\"sim\" class=\"radio\" (ionSelect)='getSim($event)'></ion-radio>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n              <ion-label>Não</ion-label>\n              <ion-radio slot=\"start\" value=\"nao\" class=\"radio\" (ionSelect)='getNao($event)'></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n      </ion-item>\n    </ion-row>\n\n\n    <div class=\"ion-text-center\">\n\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"at_but\">Salvar</ion-button>\n    </div>\n\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/fisico/fisico.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/fisico/fisico.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\n.avatar {\n  margin: auto; }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n.add {\n  width: 3rem;\n  height: 3rem;\n  margin-top: -2rem;\n  margin-left: 80%; }\n\n.back {\n  border-radius: 10px; }\n\n.radio {\n  padding-left: 0px;\n  margin-right: 5px;\n  margin-left: 0px; }\n\nion-radio-group ion-item {\n  --padding-start: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlzaWNvL0M6XFxVc2Vyc1xcTGV2ZWxcXERlc2t0b3BcXG91c3NhbWFcXFByb250byBCb29rL3NyY1xcYXBwXFxwYWdlc1xcZmlzaWNvXFxmaXNpY28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFJN0I7RUFDSSxzQkFBYTtFQUViLHFCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBTWI7RUFDRyxZQUFZLEVBQUE7O0FBSWhCO0VBRUksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3REFBd0Q7RUFDeEQsa0JBQWtCO0VBS2xCLHFCQUFjO0VBQ2Qsd0JBQWlCO0VBQ2pCLHVCQUFnQixFQUFBOztBQUdsQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBS2xCO0VBRVEsb0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maXNpY28vZmlzaWNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24taGVhZGVye1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTtcclxuICAgIFxyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5hdF9idXR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICAjN0NCQkJBO1xyXG4gICBcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAuYXZhdGFyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgLy9mb250LXNpemU6MS4ycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAwLjU1cHggc29saWQgcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjQpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLy0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgLy8tLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC8vLS1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAvL29wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy10b3A6IDAuN3JlbTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDAuN3JlbTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMC42cmVtO1xyXG4gIH1cclxuXHJcbiAgLmFkZHtcclxuICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgbWFyZ2luLXRvcDotMnJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDgwJTtcclxuICB9XHJcblxyXG4gIC5iYWNre1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5yYWRpbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gXHJcblxyXG4gIGlvbi1yYWRpby1ncm91cHtcclxuICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/fisico/fisico.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/fisico/fisico.page.ts ***!
  \*********************************************/
/*! exports provided: FisicoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisicoPage", function() { return FisicoPage; });
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
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_12__);














var STORAGE_KEY = 'my_images';
var FisicoPage = /** @class */ (function () {
    function FisicoPage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref) {
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
        this.masks = {
            valorInicialMask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
            numberMask: text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_12___default()({ prefix: 'Kg ', includeThousandsSeparator: false, requireDecimal: true, allowDecimal: true, decimalSymbol: ',' }),
            numberMask2: text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_12___default()({ prefix: 'Cm ', thousandsSeparatorSymbol: '.', allowDecimal: true, decimalSymbol: ',' })
        };
    }
    FisicoPage.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("ionViewDidEnter");
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/consultfisico');
        });
    };
    FisicoPage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        //console.log("ionViewWillEnter");
        //this.CRUDActionAPIForm('Pesquisando', null);  
        var _this = this;
        var element = this.cameraInput.nativeElement;
        this.imageFileBase64 = "assets/imgs/checkupp.png";
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
    FisicoPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter");
    };
    FisicoPage.prototype.ionViewWillLeave = function () {
    };
    FisicoPage.prototype.ionViewDidLeave = function () {
    };
    FisicoPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    FisicoPage.prototype.atualizarr = function (Codigo) {
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
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: ' Não  paciente' });
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
    FisicoPage.prototype.getAtend = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked = 'atendimento';
        }
    };
    FisicoPage.prototype.getPaciente = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked = 'paciente';
        }
    };
    FisicoPage.prototype.getPrimeira = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_tipo = 'primeira vez';
        }
    };
    FisicoPage.prototype.getControle = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_tipo = 'controle';
        }
    };
    FisicoPage.prototype.getSim = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_fumar = 'sim';
        }
    };
    FisicoPage.prototype.getNao = function (event) {
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (event.detail.checked == true) {
            this.checked_fumar = 'nao';
        }
    };
    FisicoPage.prototype.Criacao = function (form) {
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
                        'StatusCRUD': 'Criacao',
                        'formValues': form.value,
                        'exame': _this.checked,
                        'tipo': _this.checked_tipo,
                        'fumar': _this.checked_fumar,
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
                'StatusCRUD': 'Criacao',
                'formValues': form.value,
                'exame': this.checked,
                'tipo': this.checked_tipo,
                'fumar': this.checked_fumar,
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
    FisicoPage.prototype.takePicture = function () {
        var element = this.cameraInput.nativeElement;
        element.click();
    };
    FisicoPage.prototype.seleccionarImagen = function () {
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
    ], FisicoPage.prototype, "cameraInput", void 0);
    FisicoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fisico',
            template: __webpack_require__(/*! ./fisico.page.html */ "./src/app/pages/fisico/fisico.page.html"),
            styles: [__webpack_require__(/*! ./fisico.page.scss */ "./src/app/pages/fisico/fisico.page.scss")]
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
    ], FisicoPage);
    return FisicoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fisico-fisico-module.js.map