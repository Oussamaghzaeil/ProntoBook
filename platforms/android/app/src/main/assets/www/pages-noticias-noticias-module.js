(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-noticias-noticias-module"],{

/***/ "./src/app/pages/noticias/noticias.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/noticias/noticias.module.ts ***!
  \***************************************************/
/*! exports provided: NoticiasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasPageModule", function() { return NoticiasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _noticias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noticias.page */ "./src/app/pages/noticias/noticias.page.ts");







var routes = [
    {
        path: '',
        component: _noticias_page__WEBPACK_IMPORTED_MODULE_6__["NoticiasPage"]
    }
];
var NoticiasPageModule = /** @class */ (function () {
    function NoticiasPageModule() {
    }
    NoticiasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_noticias_page__WEBPACK_IMPORTED_MODULE_6__["NoticiasPage"]]
        })
    ], NoticiasPageModule);
    return NoticiasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/noticias/noticias.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/noticias/noticias.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Notícias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" method=\"post\">\n    <div *ngFor=\"let sa of a; let i =index \">\n      <ion-card class=\"card\">\n        <ion-card-header>\n          <ion-card-title>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  {{sa.Nome}}\n                </ion-col>\n                <ion-col>\n                  <ion-icon name=\"ios-trash\" type=\"submit\" (click)=\"cancelar(sa.Nome)\" class=\"trash\"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content >\n          <div >\n\n            <ion-grid>\n              <ion-row>\n                <ion-col id=\"{{sa.Nome}}\">\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Data do evento:</ion-label>\n                    {{sa.DataDoEvento}}\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Link do evento:</ion-label>\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <a (click)=\"openUrl(sa.link)\">{{sa.link}}</a>\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Descrição:</ion-label>\n                    {{sa.desc}}\n                  </ion-item>\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n\n    <div class=\"ion-text-center\">\n      <ion-button shape=\"round\"  (click)=\"goTo()\" class=\"circle\">\n        <ion-icon slot=\"start\" name=\"add\" class=\"icon\"></ion-icon>\n      </ion-button>\n    </div>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/noticias/noticias.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/noticias/noticias.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\nion-icon {\n  font-size: 30px; }\n\n.card {\n  background: #d3d4d4; }\n\n.roww {\n  --background:  rgb(211, 212, 212); }\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 10px; }\n\n.expand-arrow-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container ion-icon {\n    font-size: 44px; }\n\n.expand-arrow-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container ion-icon {\n    font-size: 44px; }\n\n.circle {\n  background: #7CBBBA;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  position: absolute;\n  right: 5%;\n  /* left:40%;\r\n    top: 200px;\r\n    right: 30%; */\n  margin-left: 300px;\n  margin-top: 70px;\n  margin-bottom: 20px; }\n\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 65%;\n  height: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 45px;\n  height: 45px;\n  display: block; }\n\n.trash {\n  position: absolute;\n  right: 0%; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWNpYXMvQzpcXFVzZXJzXFxMZXZlbFxcRGVza3RvcFxcb3Vzc2FtYVxcUHJvbnRvIEJvb2svc3JjXFxhcHBcXHBhZ2VzXFxub3RpY2lhc1xcbm90aWNpYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3RpY2lhcy9ub3RpY2lhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBdUIsRUFBQTs7QUFJM0I7RUFDSSxjQUF5QixFQUFBOztBQUk3QjtFQUNJLGVBQWUsRUFBQTs7QUFJbkI7RUFDSSxtQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSxpQ0FBYSxFQUFBOztBQUdqQjtFQUNJLG9EQUFhO0VBQ2IsMENBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBSDNCO0lBS00sZUFBZSxFQUFBOztBQVNyQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUgzQjtJQUtNLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxtQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFFWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVDs7aUJDbkJhO0VEc0JiLGtCQUFrQjtFQUVsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGljaWFzL25vdGljaWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojNTg5MTkxO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyAvL1ByZWZlcnJlZCBzaXplIGhlcmVcclxufVxyXG5cclxuXHJcbi5jYXJkIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDIxMSwgMjEyLCAyMTIpO1xyXG59XHJcblxyXG4ucm93d3tcclxuICAgIC0tYmFja2dyb3VuZDogIHJnYigyMTEsIDIxMiwgMjEyKTtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmV4cGFuZC1hcnJvdy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmV4cGFuZC1hcnJvdy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAgIzdDQkJCQTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICAvKiBsZWZ0OjQwJTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICByaWdodDogMzAlOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICBcclxufVxyXG4uaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDY1JTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG4udHJhc2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMCU7IFxyXG59XHJcblxyXG5cclxuXHJcbiIsImlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTE7IH1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZGZkZmQ7IH1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7IH1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZDNkNGQ0OyB9XG5cbi5yb3d3IHtcbiAgLS1iYWNrZ3JvdW5kOiAgcmdiKDIxMSwgMjEyLCAyMTIpOyB9XG5cbi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG5cbi5leHBhbmQtYXJyb3ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLmV4cGFuZC1hcnJvdy1jb250YWluZXIgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNDRweDsgfVxuXG4uZXhwYW5kLWFycm93LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIC5leHBhbmQtYXJyb3ctY29udGFpbmVyIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQ0cHg7IH1cblxuLmNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICM3Q0JCQkE7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUlO1xuICAvKiBsZWZ0OjQwJTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICByaWdodDogMzAlOyAqL1xuICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA2NSU7XG4gIGhlaWdodDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnRyYXNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMCU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/noticias/noticias.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/noticias/noticias.page.ts ***!
  \*************************************************/
/*! exports provided: NoticiasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasPage", function() { return NoticiasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var NoticiasPage = /** @class */ (function () {
    function NoticiasPage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder, alertController) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.modalController = modalController;
        this.platform = platform;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.ishidden = true;
    }
    NoticiasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.MostraDados();
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/menu/options/tabs/main');
        });
    };
    NoticiasPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    NoticiasPage.prototype.goTo = function () {
        this.navCtrl.navigateRoot('/novoevento');
    };
    NoticiasPage.prototype.cancelar = function (Nome) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(Nome);
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Excluindo...',
                                message: 'Tem certeza que deseja excluir evento?',
                                buttons: [
                                    {
                                        text: 'NÃO',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'SIM',
                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        console.log('Confirm Ok');
                                                        console.log('aaa', Nome);
                                                        this.delete(Nome);
                                                        return [4 /*yield*/, alert.remove()];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //delete(form: NgForm)
    NoticiasPage.prototype.delete = function (Nome) {
        var _this = this;
        console.log(Nome);
        //create form 
        var myForm;
        // ------ NEW FORM WITH EDIT DATA
        myForm = this.formBuilder.group({
            code: Nome
        });
        var params = {
            'StatusCRUD': 'Delete',
            'formValues': myForm.value,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("Delete:", params);
        this.Authorizer.QueryStoreProc('Executar', "spEventos", params).then(function (res) {
            var resultado = res;
            _this.alertService.presentAlert({ pTitle: 'Excluindo...', pSubtitle: '', pMessage: 'Evento excluído com sucesso !' });
        });
        this.MostraDados();
    };
    NoticiasPage.prototype.MostraDados = function () {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando      
        var params = {
            'StatusCRUD': 'Pesquisar',
            'formValues': '',
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log('params', params);
        this.Authorizer.QueryStoreProc('Executar', 'spEventos', params).then(function (res) {
            var resultado = res[0];
            console.log("resultado", resultado);
            try {
                if (resultado.success) {
                    _this.a = JSON.parse(resultado.results);
                    console.log('this.a', _this.a);
                    //this.alertService.showLoader(resultado.message, 1000);
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Paciente', pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Erro', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    NoticiasPage.prototype.openUrl = function (url) {
        window.open(url, '_system');
    };
    NoticiasPage.prototype.expandFazenda = function () {
        this.ishidden = !this.ishidden;
    };
    NoticiasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-noticias',
            template: __webpack_require__(/*! ./noticias.page.html */ "./src/app/pages/noticias/noticias.page.html"),
            styles: [__webpack_require__(/*! ./noticias.page.scss */ "./src/app/pages/noticias/noticias.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], NoticiasPage);
    return NoticiasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-noticias-noticias-module.js.map