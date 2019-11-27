(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n\n  </ion-toolbar>\n</ion-header> -->\n<!--\n<ion-button expand=\"block\" routerLink=\"/menu/first\">Conectar</ion-button>\n-->\n<ion-content padding>\n  <ion-row text-center>\n    <ion-col><img src=\"/assets/imgs/appicon.png\" width=\"200px\" height=\"200px\"></ion-col>\n  </ion-row>\n\n  <ion-grid>\n    <!--\n      <ion-row text-center>\n          <ion-col><img src=\"/assets/imgs/LgECupom33.png\"  width=\"100px\" height=\"100px\"></ion-col>\n      </ion-row>\n      -->\n    <h3 text-center class=\"title\" autofocus>PRONTO BOOK</h3>\n  </ion-grid>\n\n\n  <form #form=\"ngForm\" (ngSubmit)=\"AuthLogin(form)\" method=\"post\">\n\n    <ion-label position=\"floating\">Email</ion-label>\n    <ion-input #email ngModel type=\"email\" name=\"email\" pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}\"\n      required></ion-input>\n\n\n\n    <ion-label position=\"floating\">Senha</ion-label>\n    <ion-input ngModel type=\"password\" name=\"password\" required></ion-input>\n\n\n    <p text-right>\n      <a [routerLink]=\"['/recuperasenha']\" [state]=\"{param: 123}\">\n        Esqueceu a senha?\n      </a>\n    </p>\n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"at_but\">Entrar</ion-button>\n    </div>\n  </form>\n  <div class=\"ion-text-center\">\n    <ion-button [routerLink]=\"['/register']\" class=\"at_but\">Criar Conta</ion-button>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191 ; }\n\n/* ion-content {\r\n    --background: url('../../../assets/imgs/fondo.png') no-repeat 100% 100%;\r\n} */\n\n.title {\n  font-family: Comic Sans MS;\n  font-size: 42px;\n  color: #589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.ent_but {\n  --background:  #7CBBBA; }\n\n.cr_but {\n  --background: rgb(29, 107, 131); }\n\nion-input {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  border: 0.55px solid rgba(121, 121, 121, 0.4) !important;\n  border-radius: 5px;\n  --padding-top: 0.7rem;\n  --padding-bottom: 0.7rem;\n  --padding-start: 0.6rem; }\n\n.at_but {\n  --background:  #7CBBBA;\n  --border-radius: 12px;\n  width: 90%; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxMZXZlbFxcRGVza3RvcFxcb3Vzc2FtYVxcUHJvbnRvIEJvb2svc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQkFBdUIsRUFBQTs7QUFLM0I7O0dDRkc7O0FETUg7RUFDSSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUF5QixFQUFBOztBQUk3QjtFQUNJLHNCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksK0JBQWEsRUFBQTs7QUFHakI7RUFFSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdEQUF3RDtFQUN4RCxrQkFBa0I7RUFLbEIscUJBQWM7RUFDZCx3QkFBaUI7RUFDakIsdUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usc0JBQWE7RUFFYixxQkFBZ0I7RUFDaEIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTEgO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4vKiBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZm9uZG8ucG5nJykgbm8tcmVwZWF0IDEwMCUgMTAwJTtcclxufSAqL1xyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBDb21pYyBTYW5zIE1TO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgY29sb3I6ICM1ODkxOTE7XHJcbiAgICB9XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5lbnRfYnV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzdDQkJCQTtcclxufVxyXG5cclxuLmNyX2J1dHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI5LCAxMDcsIDEzMSk7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICAvL2ZvbnQtc2l6ZToxLjJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDAuNTVweCBzb2xpZCByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuNCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAvLy0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLy8tLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC8vb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjZyZW07XHJcbiAgfVxyXG5cclxuICAuYXRfYnV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzdDQkJCQTtcclxuICAgXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG5cclxufSIsImlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTEgOyB9XG5cbi8qIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9mb25kby5wbmcnKSBuby1yZXBlYXQgMTAwJSAxMDAlO1xyXG59ICovXG4udGl0bGUge1xuICBmb250LWZhbWlseTogQ29taWMgU2FucyBNUztcbiAgZm9udC1zaXplOiA0MnB4O1xuICBjb2xvcjogIzU4OTE5MTsgfVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogI2ZkZmRmZDsgfVxuXG4uZW50X2J1dCB7XG4gIC0tYmFja2dyb3VuZDogICM3Q0JCQkE7IH1cblxuLmNyX2J1dCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI5LCAxMDcsIDEzMSk7IH1cblxuaW9uLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGJvcmRlcjogMC41NXB4IHNvbGlkIHJnYmEoMTIxLCAxMjEsIDEyMSwgMC40KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tcGFkZGluZy10b3A6IDAuN3JlbTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMC43cmVtO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuNnJlbTsgfVxuXG4uYXRfYnV0IHtcbiAgLS1iYWNrZ3JvdW5kOiAgIzdDQkJCQTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogOTAlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__);






//import { SplashScreen } from '@ionic-native/splash-screen/ngx';

// for install: https://www.npmjs.com/package/ts-md5

var LoginPage = /** @class */ (function () {
    function LoginPage(platform, modalController, navCtrl, alertService, env, Authorizer, db) {
        this.platform = platform;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.db = db;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.db.set('Nome', 'Gilson DeLima');
        this.db.get('Nome').then(function (Nome) {
            console.log('Olá, ' + Nome + '! Você tem um nome muito legal.');
        });
        // Uso a instrução (fetch) para pegar o ip do roteador.
        var ipAPI = 'https://api.ipify.org?format=json';
        fetch(ipAPI).then(function (response) { return response.json(); }).then(function (data) { return sessionStorage.setItem('SessionIP', data.ip); }).catch(function () { });
        // Este método retorna ON/OFF do Serviço onde esta API.
        //this.Authorizer.EngineStatusConection(this.env.API_HOST);  
        // Teste de recuperação de dados
        // Zero a SessionConection 
        sessionStorage.setItem("SessionConection", "0");
        sessionStorage.setItem('SessionUser', '');
        sessionStorage.setItem('SessionHashkey', '');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        // Disparado quando o roteamento de componentes está prestes a se animar.    
        //console.log("ionViewWillEnter");    
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Disparado quando o roteamento de componentes terminou de ser animado.        
        // console.log("ionViewDidEnter");     
        setTimeout(function () {
            _this.iemail.setFocus();
        }, 150);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // Disparado quando o roteamento de componentes está prestes a ser animado.    
        console.log("ionViewWillLeave");
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        // Disparado quando o roteamento de componentes terminou de ser animado.    
        //console.log("ionViewDidLeave");
    };
    LoginPage.prototype.backButtonEvent = function () {
        this.platform.backButton.subscribe(function () {
            console.log('exit');
            navigator['app'].exitApp();
        });
    };
    LoginPage.prototype.AuthLogin = function (form) {
        var _this = this;
        //this.alertService.showLoader('Carregando... aguarde!!!');
        //this.alertService.presentAlert({pTitle:'e-Cupom33',pSubtitle:'Teste',pMessage:'TESTANDO DIALOG'} );
        //this.alertService.presentAlertConfirm({pTitleConfirm: 'e-Cupom33', pMessage:'Confirmar procedimento?',pTextBtnCancel:'Não',pTextOkay:'Sim' });
        //this.alertService.presentToast("Mensagem Toast: Logando...");
        //let pwd : any = Md5.hashStr(form.value.password);
        //form.value.password = Md5.hashStr(form.value.password);
        console.log(form.value);
        form.value.password = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(form.value.password);
        console.log(form.value);
        this.Authorizer.Login(form).then(function (res) {
            //console.log("Resultado Json:", res);
            var resultado = res[0];
            if (resultado.success == true) {
                _this.db.set('SessionUser', resultado.results);
                _this.db.get('SessionUser').then(function (Usuario) {
                    console.log('Usuario Logado:' + JSON.stringify(Usuario));
                });
                //this.alertService.showLoader(resultado.message);
                _this.navCtrl.navigateRoot('/menu/options');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('email'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginPage.prototype, "iemail", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map