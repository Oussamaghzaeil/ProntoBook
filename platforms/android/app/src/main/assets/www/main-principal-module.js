(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-principal-module"],{

/***/ "./src/app/pages/main/principal.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/main/principal.module.ts ***!
  \************************************************/
/*! exports provided: principalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "principalPageModule", function() { return principalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principal.page */ "./src/app/pages/main/principal.page.ts");







var routes = [
    {
        path: '',
        component: _principal_page__WEBPACK_IMPORTED_MODULE_6__["principalPage"]
    }
];
var principalPageModule = /** @class */ (function () {
    function principalPageModule() {
    }
    principalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_6__["principalPage"]]
        })
    ], principalPageModule);
    return principalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/main/principal.page.html":
/*!************************************************!*\
  !*** ./src/app/pages/main/principal.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{AppName}} </ion-title>\n    <!-- <ion-searchbar></ion-searchbar>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-header>\n  <ion-list-header class=\"header\">Menu Principal</ion-list-header>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\" *ngFor=\"let item of items\" (click)=\"itemSelected(item)\">\n       \n\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col class=\"ion-text-center\">\n              <img class=\"imgMenu\" src=\"{{item.icon}}\">\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col class=\"ion-text-center\">\n              <ion-label>\n                <h2>{{item.name}}</h2>\n                <!--             <ion-label text-justify text-wrap>{{item.details}}</ion-label>\n -->\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n       \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/main/principal.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/main/principal.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.header {\n  background-color: #7CBBBA;\n  color: #fdfdfd;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXG1haW5cXHByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBdUIsRUFBQTs7QUFJM0I7RUFDSSxjQUF5QixFQUFBOztBQUk3QjtFQUNJLHlCQUF3QjtFQUN4QixjQUF5QjtFQUN6QixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL3ByaW5jaXBhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTtcclxuICAgIFxyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3Q0JCQkE7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/main/principal.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/principal.page.ts ***!
  \**********************************************/
/*! exports provided: principalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "principalPage", function() { return principalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");





//import { AlertService } from 'src/app/services/alert.service';

var principalPage = /** @class */ (function () {
    function principalPage(navCtrl, alertService, 
    //  private alertService: AlertService,
    env, Authorizer) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.AppName = 'Pronto Book';
        this.AppVersion = '0.0.1';
        this.AppGreetings = 'Bem-Vindos ao Pronto Book!';
    }
    principalPage.prototype.itemSelected = function (item) {
        //if(item.name ==='Produtos'){
        //this.alertService.presentToast("Acessando...: "+item.name);
        this.navCtrl.navigateRoot(item.route);
        //}
    };
    principalPage.prototype.ngOnInit = function () {
        if (!sessionStorage.SessionHashkey) {
            this.navCtrl.navigateRoot('/login');
        }
        this.dados = JSON.parse(sessionStorage.getItem('SessionUser'));
        //this.alertService.showLoader('Carregando... aguarde!!!');
        this.getModul();
    };
    principalPage.prototype.getModul = function () {
        var _this = this;
        console.log('gutykuejbdl', this.dados);
        var params = {
            'StatusCRUD': 'pesquisar',
            'formValues': this.dados[0].position,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log('gutykuejbdl', params);
        this.Authorizer.QueryStoreProc('Executar', "spPermission", params).then(function (res) {
            var resultado = res[0];
            console.log(JSON.parse(resultado.results));
            try {
                if (resultado.success) {
                    //this.alertService.presentAlert({ pTitle: 'Atendimento', pSubtitle: 'Success', pMessage: 'Atendimento excluído com sucesso !' });
                    if (_this.dados[0].position == 'Doutor') {
                        _this.items = [
                            {
                                id: 1,
                                name: "Notícias",
                                icon: "assets/imgs/Noticias.png",
                                route: JSON.parse(resultado.results)[0].module
                            }
                        ];
                        _this.items.push({
                            id: 2,
                            name: "Agenda",
                            icon: "assets/imgs/Agenda.png",
                            route: JSON.parse(resultado.results)[5].module
                        });
                        _this.items.push({
                            id: 3,
                            name: "Grupos",
                            icon: "assets/imgs/Grupos.png",
                            route: JSON.parse(resultado.results)[3].module
                        });
                        _this.items.push({
                            id: 4,
                            name: "Prontuários",
                            icon: "assets/imgs/Prontuarios.png",
                            route: JSON.parse(resultado.results)[6].module
                        });
                        _this.items.push({
                            id: 5,
                            name: "Exames",
                            icon: "assets/imgs/Exames.png",
                            route: JSON.parse(resultado.results)[1].module
                        });
                        _this.items.push({
                            id: 6,
                            name: "Hospitais",
                            icon: "assets/imgs/Hospitais.png",
                            route: JSON.parse(resultado.results)[2].module
                        });
                        _this.items.push({
                            id: 7,
                            name: "Estatísticas",
                            icon: "assets/imgs/Estatisticas.png",
                            route: JSON.parse(resultado.results)[4].module
                        });
                    }
                    else {
                        _this.items = [
                            {
                                id: 1,
                                name: "Agenda",
                                icon: "assets/imgs/Agenda.png",
                                route: JSON.parse(resultado.results)[0].module
                            }
                        ];
                        _this.items.push({
                            id: 2,
                            name: "Prontuários",
                            icon: "assets/imgs/Prontuarios.png",
                            route: JSON.parse(resultado.results)[1].module
                        });
                    }
                }
            }
            catch (err) {
                //this.alertService.presentAlert({ pTitle: this.env.APP_NAME, pSubtitle: 'Atendimento', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    principalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.page.html */ "./src/app/pages/main/principal.page.html"),
            styles: [__webpack_require__(/*! ./principal.page.scss */ "./src/app/pages/main/principal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], principalPage);
    return principalPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-principal-module.js.map