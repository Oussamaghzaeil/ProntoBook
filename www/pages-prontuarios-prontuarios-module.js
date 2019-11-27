(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prontuarios-prontuarios-module"],{

/***/ "./src/app/pages/prontuarios/prontuarios.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/prontuarios/prontuarios.module.ts ***!
  \*********************************************************/
/*! exports provided: ProntuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProntuariosPageModule", function() { return ProntuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prontuarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prontuarios.page */ "./src/app/pages/prontuarios/prontuarios.page.ts");







var routes = [
    {
        path: '',
        component: _prontuarios_page__WEBPACK_IMPORTED_MODULE_6__["ProntuariosPage"]
    }
];
var ProntuariosPageModule = /** @class */ (function () {
    function ProntuariosPageModule() {
    }
    ProntuariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_prontuarios_page__WEBPACK_IMPORTED_MODULE_6__["ProntuariosPage"]]
        })
    ], ProntuariosPageModule);
    return ProntuariosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/prontuarios/prontuarios.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/prontuarios/prontuarios.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header\">\n  <ion-toolbar class=\"header\">\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Prontuários</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" method=\"post\">\n    <div *ngFor=\"let sa of a; let i =index \">\n      <ion-card class=\"card\">\n        <ion-card-header>\n          <ion-card-title>\n            <ion-grid>\n              <ion-row>\n                <tr>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-avatar class=\"ava\">\n                          <img src={{sa.photo}}>\n                        </ion-avatar>\n                      </ion-col>\n                      <input #inputcamera type=\"file\" accept=\"image/*\" capture=\"camera\" [hidden]=true />\n                </tr>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                   {{sa.name}} {{sa.last_name}}\n                </ion-col>\n                <ion-col>\n                  <ion-icon name=\"ios-trash\" type=\"submit\" (click)=\"cancelar(sa.id)\" class=\"trash\"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content >\n          <div >\n\n            <ion-grid>\n              <ion-row>\n                <ion-col id=\"{{sa.code}}\">\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>Data de nascimento:</ion-label>\n                    {{sa.birth_date}}\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>O email:</ion-label>\n                    {{sa.email}}\n                  </ion-item>\n\n                  <ion-item class=\"roww\" lines=\"none\">\n                    <ion-label>RH:</ion-label>\n                    {{sa.rh}}\n                  </ion-item>\n\n\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>Sexo:</ion-label>\n                    {{sa.gender}}\n                  </ion-item>\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>CPF:</ion-label>\n                    {{sa.cpf}}\n                  </ion-item>\n\n                  <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                    <ion-label>CNS:</ion-label>\n                    {{sa.cns}}\n                  </ion-item>\n\n                  <div class=\"expand-arrow-container\" (click)=\"expandFazenda()\">\n                    <ion-icon name=\"ios-arrow-dropdown-circle\" *ngIf=\"ishidden\"></ion-icon>\n                    <ion-icon name=\"ios-arrow-dropup-circle\" *ngIf=\"!ishidden\"></ion-icon>\n                  </div>\n\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n\n    <div>\n      <ion-button shape=\"round\"  (click)=\"goTo()\" class=\"circle\">\n        <ion-icon slot=\"start\" name=\"add\" class=\"icon\"></ion-icon>\n      </ion-button>\n    </div>\n  </form>\n</ion-content>\n\n\n<!--<ion-button type=\"submit\"  (click)=\"delete(sa.code)\"   expand=\"full\" class=\"at_but\">delete</ion-button>-->"

/***/ }),

/***/ "./src/app/pages/prontuarios/prontuarios.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/prontuarios/prontuarios.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ion-header{\r\n\r\n    --ion-background-color:rgb(111, 169, 187);\r\n    \r\n} */\n.header {\n  --ion-background-color:#589191;\n  background-color: #589191; }\nion-title {\n  color: #fdfdfd; }\nion-icon {\n  font-size: 30px; }\n.card {\n  background: #d3d4d4; }\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 10px; }\n.roww {\n  --background:  rgb(211, 212, 212); }\n.circle {\n  background: #7CBBBA;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  position: absolute;\n  right: 5%;\n  /* left:40%;\r\n    top: 200px;\r\n    right: 30%; */\n  margin-left: 300px;\n  margin-top: 70px;\n  margin-bottom: 20px; }\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 65%;\n  height: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 45px;\n  height: 45px;\n  display: block; }\n.trash {\n  position: absolute;\n  right: 0%; }\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.expand-arrow-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.expand-arrow-container ion-icon {\n    font-size: 44px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvbnR1YXJpb3MvQzpcXFVzZXJzXFxMZXZlbFxcRGVza3RvcFxcb3Vzc2FtYVxcUHJvbnRvIEJvb2svc3JjXFxhcHBcXHBhZ2VzXFxwcm9udHVhcmlvc1xccHJvbnR1YXJpb3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9udHVhcmlvcy9wcm9udHVhcmlvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0NJRztBRENIO0VBQ0ksOEJBQXVCO0VBQ3ZCLHlCQUF3QixFQUFBO0FBRzVCO0VBQ0ksY0FBeUIsRUFBQTtBQUk3QjtFQUNJLGVBQWUsRUFBQTtBQUluQjtFQUNJLG1CQUErQixFQUFBO0FBR25DO0VBQ0ksb0RBQWE7RUFDYiwwQ0FBUTtFQUNSLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTtBQUd2QjtFQUNJLGlDQUFhLEVBQUE7QUFJakI7RUFDSSxtQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFFWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVDs7aUJDUmE7RURXYixrQkFBa0I7RUFFbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFJbEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBO0FBR2I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7QUFHM0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQUgzQjtJQUtNLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb250dWFyaW9zL3Byb250dWFyaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGlvbi1oZWFkZXJ7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTExLCAxNjksIDE4Nyk7XHJcbiAgICBcclxufSAqL1xyXG4uaGVhZGVye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojNTg5MTkxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTg5MTkxO1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbn1cclxuXHJcblxyXG4uY2FyZCB7IFxyXG4gICAgYmFja2dyb3VuZDogIHJnYigyMTEsIDIxMiwgMjEyKTtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucm93d3tcclxuICAgIC0tYmFja2dyb3VuZDogIHJnYigyMTEsIDIxMiwgMjEyKTtcclxufVxyXG5cclxuXHJcbi5jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogICM3Q0JCQkE7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgLyogbGVmdDo0MCU7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgcmlnaHQ6IDMwJTsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgIC8vbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgXHJcbn1cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA2NSU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuXHJcbi50cmFzaHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwJTsgXHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leHBhbmQtYXJyb3ctY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG5cclxuXHJcbiIsIi8qIGlvbi1oZWFkZXJ7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTExLCAxNjksIDE4Nyk7XHJcbiAgICBcclxufSAqL1xuLmhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4OTE5MTsgfVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogI2ZkZmRmZDsgfVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDsgfVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNkM2Q0ZDQ7IH1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLnJvd3cge1xuICAtLWJhY2tncm91bmQ6ICByZ2IoMjExLCAyMTIsIDIxMik7IH1cblxuLmNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICM3Q0JCQkE7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUlO1xuICAvKiBsZWZ0OjQwJTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICByaWdodDogMzAlOyAqL1xuICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA2NSU7XG4gIGhlaWdodDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnRyYXNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMCU7IH1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5leHBhbmQtYXJyb3ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLmV4cGFuZC1hcnJvdy1jb250YWluZXIgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNDRweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/prontuarios/prontuarios.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/prontuarios/prontuarios.page.ts ***!
  \*******************************************************/
/*! exports provided: ProntuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProntuariosPage", function() { return ProntuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");















var STORAGE_KEY = 'my_images';

var ProntuariosPage = /** @class */ (function () {
    function ProntuariosPage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath, alertController) {
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
        this.filePath = filePath;
        this.alertController = alertController;
        this.images = [];
        this.imageData = [];
        this.imageFileBase64 = "assets/imgs/user.jpg";
        this.ishidden = true;
    }
    ProntuariosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.imageFileBase64 = "assets/imgs/user.jpg";
        this.MostraDados();
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/menu/options/tabs/main');
        });
    };
    ProntuariosPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    ProntuariosPage.prototype.goTo = function () {
        this.navCtrl.navigateRoot('/novopaciente');
    };
    ProntuariosPage.prototype.ionViewDidEnter = function () {
        var _this = this;
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
    //delete(form: NgForm)
    ProntuariosPage.prototype.cancelar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(id);
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Excluindo Paciente...',
                                message: 'Deseja excluir o paciente?',
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
                                                        console.log('aaa', id);
                                                        this.delete(id);
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
    ProntuariosPage.prototype.delete = function (id) {
        var _this = this;
        console.log(id);
        //create form 
        var myForm;
        // ------ NEW FORM WITH EDIT DATA
        myForm = this.formBuilder.group({
            id: id
        });
        var params = {
            'StatusCRUD': 'Delete',
            'formValues': myForm.value,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("Delete:", params);
        this.Authorizer.QueryStoreProc('Executar', "spPatient", params).then(function (res) {
            var resultado = res[0];
            console.log(resultado);
            try {
                if (resultado.success) {
                    _this.alertService.presentAlert({ pTitle: 'Excluindo Paciente..', pSubtitle: '', pMessage: 'Paciente excluído com sucesso!' });
                    _this.MostraDados();
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Erro', pMessage: 'Você não pode excluir este paciente!' });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Patient', pMessage: 'Nenhum usuário!' });
            }
        });
        this.MostraDados();
    };
    ProntuariosPage.prototype.GravarDados = function (form) {
        var _this = this;
        // paramStatus: Pesquisar, Gravar, Deletar
        form.value.Senha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(form.value.Senha);
        form.value.ReSenha = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(form.value.ReSenha);
        var params = {
            'StatusCRUD': 'Gravar',
            'formValues': form.value,
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log("gravar:", params);
        this.Authorizer.QueryStoreProc('Executar', 'spPatient', params).then(function (res) {
            var resultado = res[0];
            try {
                if (resultado.success) {
                    _this.alertService.showLoader(resultado.message, 1000);
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Paciente', pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Paciente', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    ProntuariosPage.prototype.MostraDados = function () {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando      
        var params = {
            'StatusCRUD': 'Pesquisar',
            'formValues': '',
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log('params', params);
        this.Authorizer.QueryStoreProc('Executar', 'spPatient', params).then(function (res) {
            var resultado = res[0];
            console.log("resultado", resultado);
            try {
                if (resultado.success) {
                    _this.photopath = JSON.parse(resultado.results)[0].photo;
                    var path = _this.env.API_HOST + '/ServiceProntoBook/';
                    _this.imageFileBase64 = path + JSON.parse(resultado.results)[0].photo;
                    _this.a = JSON.parse(resultado.results);
                    for (var i = 0; i <= _this.a.length; i++) {
                        var b = _this.a;
                        if (b[i].photo) {
                            b[i].photo = path + _this.a[i].photo;
                            _this.a = b;
                        }
                        else {
                            b[i].photo = "assets/imgs/user.jpg";
                            _this.a = b;
                        }
                    }
                    //this.alertService.showLoader(resultado.message, 1000);
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Paciente', pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                // this.alertService.presentAlert({ pTitle: this.env.APP_NAME, pSubtitle: 'Paciente', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    ProntuariosPage.prototype.expandFazenda = function () {
        this.ishidden = !this.ishidden;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputcamera'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProntuariosPage.prototype, "cameraInput", void 0);
    ProntuariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prontuarios',
            template: __webpack_require__(/*! ./prontuarios.page.html */ "./src/app/pages/prontuarios/prontuarios.page.html"),
            styles: [__webpack_require__(/*! ./prontuarios.page.scss */ "./src/app/pages/prontuarios/prontuarios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ProntuariosPage);
    return ProntuariosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-prontuarios-prontuarios-module.js.map