(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-editsangue-editsangue-module"],{

/***/ "./src/app/pages/editsangue/editsangue.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/editsangue/editsangue.module.ts ***!
  \*******************************************************/
/*! exports provided: EditsanguePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditsanguePageModule", function() { return EditsanguePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editsangue_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editsangue.page */ "./src/app/pages/editsangue/editsangue.page.ts");







var routes = [
    {
        path: '',
        component: _editsangue_page__WEBPACK_IMPORTED_MODULE_6__["EditsanguePage"]
    }
];
var EditsanguePageModule = /** @class */ (function () {
    function EditsanguePageModule() {
    }
    EditsanguePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_editsangue_page__WEBPACK_IMPORTED_MODULE_6__["EditsanguePage"]]
        })
    ], EditsanguePageModule);
    return EditsanguePageModule;
}());



/***/ }),

/***/ "./src/app/pages/editsangue/editsangue.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/editsangue/editsangue.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Editar Exame Sangue</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"atualizar(form);\" method=\"post\">\n\n    <ion-grid>\n      <ion-row>\n\n        <ion-col class=\"ion-text-center\">\n          <img src=\"{{imageFileBase64}}\" (click)=\"seleccionarImagen()\" class=\"back\">\n\n        </ion-col>\n        <input #inputcamera type=\"file\" accept=\"image/*\" capture=\"camera\" [hidden]=true />\n\n      </ion-row>\n\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n\n        <ion-col>\n\n          Gerador do exame :\n          <ion-item lines=\"none\">\n            <ion-list>\n              <ion-radio-group>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Atendimento</ion-label>\n                  <ion-radio slot=\"start\" [(ngModel)]='aten' name=\"aten\" checked='{{aten}}' class=\"radio\">\n                  </ion-radio>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Paciente</ion-label>\n                  <ion-radio slot=\"start\" [(ngModel)]='pac' name=\"pac\" checked='{{pac}}' value=\"paciente\" class=\"radio\">\n                  </ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-item>\n\n        </ion-col>\n        <ion-col>\n          Tipo do exame :\n          <ion-item lines=\"none\">\n            <ion-list>\n              <ion-radio-group>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Primeira vez</ion-label>\n                  <ion-radio slot=\"start\" [(ngModel)]='prim' name=\"prim\" checked='{{prim}}' value=\"Primeira\"\n                    class=\"radio\"></ion-radio>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label>Controle</ion-label>\n                  <ion-radio slot=\"start\" [(ngModel)]='con' name=\"con\" checked='{{con}}' value=\"Controle\" class=\"radio\">\n                  </ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-label position=\"floating\">Nome:</ion-label>\n    <ion-input [(ngModel)]='Nome' disabled type=\"text\" placeholder=\"Nome do paciente\" name=\"Nome\" required\n      value=\"{{ Nome  }}\">\n    </ion-input>\n\n\n    <ion-label position=\"floating\">Sobrenome:</ion-label>\n    <ion-input [(ngModel)]='SobreNome' disabled type=\"text\" placeholder=\"Sobrenome do paciente \" name=\"SobreNome\"\n      required value=\"{{ SobreNome  }}\"></ion-input>\n\n    <ion-label position=\"floating\">CPF do paciente:</ion-label>\n    <ion-input [(ngModel)]='CPF' disabled type=\"text\" placeholder=\"CPF do paciente \" name=\"CPF\" required\n      value=\"{{ CPF  }}\">\n    </ion-input>\n\n    <ion-list>\n      <ion-label position=\"floating\">Sexo do paciente:</ion-label>\n      <ion-select [(ngModel)]='Sexo' disabled interface=\"popover\" type=\"text\" name=\"Sexo\" placeholder=\"Sexo do paciente\"\n        value=\"{{ Sexo }}\">\n        <ion-select-option *ngFor=\"let os of sexos\">{{os.Sexo}}</ion-select-option>\n      </ion-select>\n    </ion-list>\n\n\n\n\n    <ion-row>\n      Dados analisados :\n      <ion-item lines=\"none\">\n        <ion-list>\n          <ion-radio-group [allowEmptySelection]=true (ionChange)='getVs($event)'>\n\n            <ion-item lines=\"none\">\n              <ion-label>Vida sexual</ion-label>\n              <ion-radio slot=\"start\" [(ngModel)]='vs' name=\"vs\" checked='{{vs}}' value=\"vs\" class=\"radio\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n          <ion-radio-group [allowEmptySelection]=true (ionChange)='getCol($event)'>\n            <ion-item lines=\"none\">\n              <ion-label>Colesterol</ion-label>\n              <ion-radio slot=\"start\" [(ngModel)]='col' name=\"col\" checked='{{col}}' value=\"col\" class=\"radio\">\n              </ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n          <ion-radio-group [allowEmptySelection]=true (ionChange)='getHdl($event)'>\n            <ion-item lines=\"none\">\n              <ion-label>HDL</ion-label>\n              <ion-radio slot=\"start\" [(ngModel)]='hdl' name=\"hdl\" checked='{{hdl}}' value=\"hdl\" class=\"radio\">\n              </ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n          <ion-radio-group [allowEmptySelection]=true (ionChange)='getLdl($event)'>\n            <ion-item lines=\"none\">\n              <ion-label>LDL</ion-label>\n              <ion-radio slot=\"start\" [(ngModel)]='ldl' name=\"ldl\" checked='{{ldl}}' value=\"ldl\" class=\"radio\">\n              </ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n          <ion-radio-group [allowEmptySelection]=true (ionChange)='getTri($event)'>\n            <ion-item lines=\"none\">\n              <ion-label>Triglicerídeos</ion-label>\n              <ion-radio slot=\"start\" [(ngModel)]='tri' name=\"tri\" checked='{{tri}}' value=\"tri\" class=\"radio\">\n              </ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n\n          <ion-radio-group [allowEmptySelection]=true (ionChange)='getPsa($event)'>\n            <ion-item lines=\"none\">\n              <ion-label>PSA</ion-label>\n              <ion-radio slot=\"start\" [(ngModel)]='psa' name=\"psa\" checked='{{psa}}' value=\"psa\" class=\"radio\">\n              </ion-radio>\n            </ion-item>\n          </ion-radio-group>\n\n        </ion-list>\n      </ion-item>\n    </ion-row>\n\n\n\n\n    <ion-grid>\n      <ion-label position=\"floating\">Coleta:</ion-label>\n      <ion-row>\n\n        <ion-col>\n\n          <ion-input [(ngModel)]='ca' type=\"number\" placeholder=\"CA\" name=\"ca\" required value=\"{{ ca  }}\">\n          </ion-input>\n          <ion-input [(ngModel)]='Glicemia' type=\"number\" placeholder=\"Glicemia\" name=\"Glicemia\" required\n            value=\"{{ Glicemia  }}\">\n          </ion-input>\n        </ion-col>\n\n        <ion-col>\n          <ion-input [(ngModel)]='ps' type=\"number\" placeholder=\"Pressão Sistólica\" name=\"ps\" required\n            value=\"{{ ps  }}\">\n          </ion-input>\n          <ion-input [(ngModel)]='pd' type=\"number\" placeholder=\"Pressão Diastólica\" name=\"pd\" required\n            value=\"{{ pd  }}\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n    <div class=\"ion-text-center\">\n\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"at_but\">Atualizar</ion-button>\n    </div>\n\n  </form>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/editsangue/editsangue.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/editsangue/editsangue.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\n.back {\n  border-radius: 10px; }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n.radio {\n  padding-left: 0px;\n  margin-right: 5px;\n  margin-left: 0px; }\n\nion-radio-group ion-item {\n  --padding-start: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdHNhbmd1ZS9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXGVkaXRzYW5ndWVcXGVkaXRzYW5ndWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFLN0I7RUFDSSxzQkFBYTtFQUViLHFCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBT2Q7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFFSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdEQUF3RDtFQUN4RCxrQkFBa0I7RUFLbEIscUJBQWM7RUFDZCx3QkFBaUI7RUFDakIsdUJBQWdCLEVBQUE7O0FBT2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFLbEI7RUFFUSxvQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRzYW5ndWUvZWRpdHNhbmd1ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmlvbi1oZWFkZXJ7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojNTg5MTkxO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5hdF9idXR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICAjN0NCQkJBO1xyXG4gICBcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uYmFja3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIC8vZm9udC1zaXplOjEuMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGJvcmRlcjogMC41NXB4IHNvbGlkIHJnYmEoMTIxLCAxMjEsIDEyMSwgMC40KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8tLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcclxuICAgIC8vLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAvLy0tb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLy9vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwLjdyZW07XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwLjdyZW07XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNnJlbTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBcclxuXHJcbiAgLnJhZGlvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgaW9uLXJhZGlvLWdyb3Vwe1xyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/editsangue/editsangue.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/editsangue/editsangue.page.ts ***!
  \*****************************************************/
/*! exports provided: EditsanguePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditsanguePage", function() { return EditsanguePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");







var EditsanguePage = /** @class */ (function () {
    function EditsanguePage(navCtrl, alertService, env, Authorizer, Eventos, modalController, platform, actionSheetController) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.Eventos = Eventos;
        this.modalController = modalController;
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.images = [];
        this.imageData = [];
        this.imageFileBase64 = "assets/imgs/user.jpg";
        this.pac = false;
        this.aten = false;
        this.prim = false;
        this.con = false;
        this.vs = false;
        this.hdl = false;
        this.ldl = false;
        this.tri = false;
        this.col = false;
        this.psa = false;
        this.sexos = [
            {
                id: 1,
                Sexo: 'M'
            },
            {
                id: 2,
                Sexo: 'F'
            },
        ];
        this.UPDATE_TIME = 0;
        this.UPDATE_TIME1 = 0;
        this.UPDATE_TIME2 = 0;
        this.UPDATE_TIME3 = 0;
        this.UPDATE_TIME4 = 0;
        this.UPDATE_TIME5 = 0;
    }
    EditsanguePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ionViewDidEnter");
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/consultsangue');
        });
    };
    EditsanguePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.MostraDados();
        // Disparado quando o roteamento de componentes terminou de ser animado.        
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
    EditsanguePage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        //console.log("ionViewWillEnter");
        //this.CRUDActionAPIForm('Pesquisando', null);  
    };
    EditsanguePage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.   
        console.log('hello world1');
        this.UPDATE_TIME = this.UPDATE_TIME + 1;
    };
    EditsanguePage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        //console.log("ionViewDidLeave");   
        //console.log('hello world') 
    };
    EditsanguePage.prototype.goBack = function () {
        this.navCtrl.navigateRoot('/consultsangue');
    };
    EditsanguePage.prototype.MostraDados = function () {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando    
        this.UPDATE_TIME = this.UPDATE_TIME + 1;
        this.UPDATE_TIME1 = this.UPDATE_TIME1 + 1;
        this.UPDATE_TIME2 = this.UPDATE_TIME2 + 1;
        this.UPDATE_TIME3 = this.UPDATE_TIME3 + 1;
        this.UPDATE_TIME4 = this.UPDATE_TIME4 + 1;
        this.UPDATE_TIME5 = this.UPDATE_TIME5 + 1;
        var i = sessionStorage.getItem('CPFPatient');
        console.log('vlue of i :', atob(i));
        //   i    =parseInt(atob(i)); 
        var params = {
            'StatusCRUD': 'Pesquisar_editexam_sangue',
            'formValues': atob(i),
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log('params', params);
        this.Authorizer.QueryStoreProc('Executar', 'spExame', params).then(function (res) {
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
                    _this.SobreNome = JSON.parse(resultado.results)[0].Sobrenome;
                    _this.CPF = JSON.parse(resultado.results)[0].CPF;
                    _this.Exame = JSON.parse(resultado.results)[0].exame;
                    _this.tipo = JSON.parse(resultado.results)[0].tipo;
                    _this.ca = JSON.parse(resultado.results)[0].ca;
                    _this.Glicemia = JSON.parse(resultado.results)[0].Glicemia;
                    _this.ps = JSON.parse(resultado.results)[0].ps;
                    _this.pd = JSON.parse(resultado.results)[0].pd;
                    _this.tipo = JSON.parse(resultado.results)[0].tipo;
                    _this.trii = JSON.parse(resultado.results)[0].tri;
                    _this.vidas = JSON.parse(resultado.results)[0].vs;
                    _this.coll = JSON.parse(resultado.results)[0].col;
                    _this.hdll = JSON.parse(resultado.results)[0].hdl;
                    _this.ldll = JSON.parse(resultado.results)[0].ldl;
                    _this.psaa = JSON.parse(resultado.results)[0].psa;
                    var S = JSON.parse(resultado.results)[0].Sexo;
                    if (typeof (S) == 'undefined')
                        S = '';
                    if (S == null)
                        S = '';
                    if (S != '')
                        _this.Sexo = S;
                    console.log('Exame ', _this.Exame);
                    console.log('tipo', _this.tipo);
                    if (_this.Exame == 'paciente') {
                        _this.pac = true;
                        _this.aten = false;
                    }
                    else {
                        _this.aten = true;
                        _this.pac = false;
                    }
                    if (_this.tipo == 'primeira vez') {
                        _this.prim = true;
                        _this.con = false;
                    }
                    else {
                        _this.prim = false;
                        _this.con = true;
                    }
                    if (_this.trii == 'Triglicerídeos') {
                        _this.tri = true;
                    }
                    else {
                        _this.UPDATE_TIME4 = _this.UPDATE_TIME4 + 1;
                        _this.tri = false;
                    }
                    if (_this.vidas == 'Vida sexual') {
                        _this.vs = true;
                    }
                    else {
                        _this.vs = false;
                        _this.UPDATE_TIME = _this.UPDATE_TIME + 1;
                    }
                    if (_this.ldll == 'LDL') {
                        _this.ldl = true;
                    }
                    else {
                        _this.UPDATE_TIME3 = _this.UPDATE_TIME3 + 1;
                        _this.ldl = false;
                    }
                    if (_this.hdll == 'HDL') {
                        _this.hdl = true;
                    }
                    else {
                        _this.UPDATE_TIME2 = _this.UPDATE_TIME2 + 1;
                        _this.hdl = false;
                    }
                    if (_this.psaa == 'PSA') {
                        _this.psa = true;
                    }
                    else {
                        _this.UPDATE_TIME5 = _this.UPDATE_TIME5 + 1;
                        _this.psa = false;
                    }
                    if (_this.coll == 'Colesterol') {
                        _this.col = true;
                    }
                    else {
                        _this.col = false;
                        _this.UPDATE_TIME1 = _this.UPDATE_TIME1 + 1;
                    }
                    console.log('prim', _this.prim);
                    //this.alertService.showLoader(resultado.message, 1000);
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Exame', pMessage: 'Não exame' });
            }
        });
    };
    EditsanguePage.prototype.getVs = function (event) {
        if (this.UPDATE_TIME == 1) {
            this.UPDATE_TIME = this.UPDATE_TIME + 1;
            return;
        }
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (this.vidas == 'Vida sexual') {
            this.vidas = '';
            this.checked_vs = 'vs';
        }
        else {
            this.vidas = 'Vida sexual';
            this.checked_vs = '';
        }
    };
    EditsanguePage.prototype.getCol = function (event) {
        if (this.UPDATE_TIME1 == 1) {
            this.UPDATE_TIME1 = this.UPDATE_TIME1 + 1;
            return;
        }
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (this.coll == 'Colesterol') {
            this.coll = '';
            this.checked_col = 'col';
        }
        else {
            this.coll = 'Colesterol';
            this.checked_col = '';
        }
    };
    EditsanguePage.prototype.getHdl = function (event) {
        if (this.UPDATE_TIME2 == 1) {
            this.UPDATE_TIME2 = this.UPDATE_TIME2 + 1;
            return;
        }
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (this.hdll == 'HDL') {
            this.hdll = '';
            this.checked_hdl = 'hdl';
        }
        else {
            this.hdll = 'HDL';
            this.checked_hdl = '';
        }
    };
    EditsanguePage.prototype.getLdl = function (event) {
        if (this.UPDATE_TIME3 == 1) {
            this.UPDATE_TIME3 = this.UPDATE_TIME3 + 1;
            return;
        }
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (this.ldll == 'LDL') {
            this.ldll = '';
            this.checked_ldl = 'ldl';
        }
        else {
            this.ldll = 'LDL';
            this.checked_ldl = '';
        }
    };
    EditsanguePage.prototype.getTri = function (event) {
        if (this.UPDATE_TIME4 == 1) {
            this.UPDATE_TIME4 = this.UPDATE_TIME4 + 1;
            return;
        }
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (this.trii == 'Triglicerídeos') {
            this.trii = '';
            this.checked_tri = 'tri';
        }
        else {
            this.trii = 'Triglicerídeos';
            this.checked_tri = '';
        }
    };
    EditsanguePage.prototype.getPsa = function (event) {
        if (this.UPDATE_TIME5 == 1) {
            this.UPDATE_TIME5 = this.UPDATE_TIME5 + 1;
            return;
        }
        this.UPDATE_TIME = this.UPDATE_TIME + 1;
        console.log('exemple', event);
        console.log('checked state', event.detail.checked);
        if (this.psaa == 'PSA') {
            this.psaa = '';
            this.checked_psa = 'psa';
        }
        else {
            this.psaa = 'PSA';
            this.checked_psa = '';
        }
    };
    EditsanguePage.prototype.atualizar = function (form) {
        // paramStatus: Pesquisando, Editando, Deletando   
        var _this = this;
        if (this.imageFile) {
            this.Authorizer.QueryStoreImagem('SalvarImagem', '', 'images/', this.imageFile).then(function (res) {
                var resultado = res[0];
                //resultado.results // This is the complete path. Ejemplo: "C:\web\sites\ServiceImobiliario\uploads\imagems\croqui\y35swmarzjt.jpg"
                if (res[0].success) {
                    // rutaImagem = this.envService.API_NAME + res[0].results;
                    // this.imageFileBase64 = this.envService.API_NAME + res[0].results;
                    console.log('I am the path', res[0].results);
                    form.value.path = res[0].results;
                    if (form.value.con == true) {
                        form.value.tipo = 'controle';
                    }
                    if (form.value.prim == true) {
                        form.value.tipo = 'primeira vez';
                    }
                    if (form.value.aten == true) {
                        form.value.exame = 'atendimento';
                    }
                    if (form.value.pac == true) {
                        form.value.exame = 'paciente';
                    }
                    /* if (form.value.col == true) {
                      form.value.col = 'Colesterol'
                    }
                    if (form.value.vs == true) {
                      form.value.vs = 'Vida sexual'
                    }
                    if (form.value.hdl == true) {
                      form.value.hdl = 'HDL'
                    }
                    if (form.value.ldl == true) {
                      form.value.ldl = 'LDL'
                    }
                    if (form.value.tri == true) {
                      form.value.tri = 'Triglicerídeos'
                    }
                    if (form.value.psa == true) {
                      form.value.psa = 'PSA'
                    } */
                    form.value.vs = _this.vidas;
                    form.value.col = _this.coll;
                    form.value.hdl = _this.hdll;
                    form.value.ldl = _this.ldll;
                    form.value.tri = _this.trii;
                    form.value.psa = _this.psaa;
                    form.value.CPF = _this.CPF;
                    form.value.Nome = _this.Nome;
                    form.value.SobreNome = _this.SobreNome;
                    form.value.Sexo = _this.Sexo;
                    var params = {
                        'StatusCRUD': 'Gravar_sangue',
                        'formValues': form.value,
                        'CodigoUsuarioSistema': 0,
                        'Hashkey': sessionStorage.getItem("SessionHashkey")
                    };
                    console.log('formm: ', form);
                    console.log("gravar:", params);
                    _this.Authorizer.QueryStoreProc('Executar', 'spExame', params).then(function (res) {
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
                            _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Editar Exame', pMessage: 'Nenhum usuário!' });
                        }
                    });
                }
            });
        }
        else {
            if (form.value.con == true) {
                form.value.tipo = 'controle';
            }
            if (form.value.prim == true) {
                form.value.tipo = 'primeira vez';
            }
            if (form.value.aten == true) {
                form.value.exame = 'atendimento';
            }
            if (form.value.pac == true) {
                form.value.exame = 'paciente';
            }
            /*  if (form.value.col == true) {
               form.value.col = 'Colesterol'
             }
             if (form.value.vs == true) {
               form.value.vs = 'Vida sexual'
             }
             if (form.value.hdl == true) {
               form.value.hdl = 'HDL'
             }
             if (form.value.ldl == true) {
               form.value.ldl = 'LDL'
             }
             if (form.value.tri == true) {
               form.value.tri = 'Triglicerídeos'
             }
             if (form.value.psa == true) {
               form.value.psa = 'PSA'
             } */
            form.value.vs = this.vidas;
            form.value.col = this.coll;
            form.value.hdl = this.hdll;
            form.value.ldl = this.ldll;
            form.value.tri = this.trii;
            form.value.psa = this.psaa;
            form.value.CPF = this.CPF;
            form.value.Nome = this.Nome;
            form.value.SobreNome = this.SobreNome;
            form.value.Sexo = this.Sexo;
            form.value.path = this.photopath;
            var params = {
                'StatusCRUD': 'Gravar_sangue',
                'formValues': form.value,
                'CodigoUsuarioSistema': 0,
                'Hashkey': sessionStorage.getItem("SessionHashkey")
            };
            console.log('formm: ', form);
            console.log("gravar:", params);
            this.Authorizer.QueryStoreProc('Executar', 'spExame', params).then(function (res) {
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
                    _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Editar Exame', pMessage: 'Nenhum usuário!' });
                }
            });
        }
    };
    EditsanguePage.prototype.takePicture = function () {
        var element = this.cameraInput.nativeElement;
        element.click();
    };
    EditsanguePage.prototype.seleccionarImagen = function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Nome'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditsanguePage.prototype, "iNome", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputcamera'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditsanguePage.prototype, "cameraInput", void 0);
    EditsanguePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editsangue',
            template: __webpack_require__(/*! ./editsangue.page.html */ "./src/app/pages/editsangue/editsangue.page.html"),
            styles: [__webpack_require__(/*! ./editsangue.page.scss */ "./src/app/pages/editsangue/editsangue.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], EditsanguePage);
    return EditsanguePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-editsangue-editsangue-module.js.map