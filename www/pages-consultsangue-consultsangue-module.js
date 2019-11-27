(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consultsangue-consultsangue-module"],{

/***/ "./src/app/pages/consultsangue/consultsangue.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/consultsangue/consultsangue.module.ts ***!
  \*************************************************************/
/*! exports provided: ConsultsanguePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultsanguePageModule", function() { return ConsultsanguePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consultsangue_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultsangue.page */ "./src/app/pages/consultsangue/consultsangue.page.ts");







var routes = [
    {
        path: '',
        component: _consultsangue_page__WEBPACK_IMPORTED_MODULE_6__["ConsultsanguePage"]
    }
];
var ConsultsanguePageModule = /** @class */ (function () {
    function ConsultsanguePageModule() {
    }
    ConsultsanguePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_consultsangue_page__WEBPACK_IMPORTED_MODULE_6__["ConsultsanguePage"]]
        })
    ], ConsultsanguePageModule);
    return ConsultsanguePageModule;
}());



/***/ }),

/***/ "./src/app/pages/consultsangue/consultsangue.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/consultsangue/consultsangue.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"primary\">\n        <ion-button (click)=\"goBack()\">\n          <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Consultar exames de sangue</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n    <form #form=\"ngForm\" method=\"post\">\n      <div *ngFor=\"let sa of a; let i =index \">\n        <ion-card class=\"card\">\n          <ion-card-header>\n            <ion-card-title>\n                <ion-grid>\n                    <ion-row >\n                      <ion-col >\n                          <ion-input ngModel name=\"namepatient\" value=\"{{sa.name}}\"> {{sa.Nome}} {{sa.Sobrenome}}</ion-input>\n                      </ion-col>\n                      <ion-col>\n                          <ion-icon name=\"create\" (click)=\"goToo(sa.CPF)\" class=\"build\"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <div >\n  \n              <ion-grid>\n                <ion-row >\n                  <ion-col id=\"{{sa.CPF}}\">\n  \n                    \n  \n                      <ion-item class=\"roww\" lines=\"none\">\n                        <ion-label>Exame:</ion-label>\n                        {{sa.exame}}\n                      </ion-item>\n  \n                      <ion-item class=\"roww\" lines=\"none\">\n                        <ion-label>Tipo de exame:</ion-label>\n                        {{sa.tipo}}\n                      </ion-item>\n                      <ion-item class=\"roww\" lines=\"none\">\n                        <ion-label>CA:</ion-label>\n                        {{sa.ca}}\n                      </ion-item>\n                      <ion-item class=\"roww\" lines=\"none\">\n                        <ion-label>Glicemia:</ion-label>\n                        {{sa.Glicemia}}\n                      </ion-item>\n\n                      <ion-item class=\"roww\" lines=\"none\">\n                          <ion-label>Pressão Sistólica:</ion-label>\n                          {{sa.ps}}\n                      </ion-item>\n\n                      <ion-item class=\"roww\" lines=\"none\">\n                          <ion-label>Pressão Diastólica:</ion-label>\n                          {{sa.pd}}\n                      </ion-item>\n\n                      <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                          <ion-label>Sexo:</ion-label>\n                          {{sa.Sexo}}\n                      </ion-item>\n  \n                      <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                        <ion-label>CPF:</ion-label>\n                        {{sa.CPF}}\n                      </ion-item>\n  \n                      \n  \n  \n  \n                      <div class=\"expand-arrow-container\" (click)=\"expandFazenda()\">\n                        <ion-icon name=\"ios-arrow-dropdown-circle\" *ngIf=\"ishidden\"></ion-icon>\n                        <ion-icon name=\"ios-arrow-dropup-circle\" *ngIf=\"!ishidden\"></ion-icon>\n                      </div>\n  \n                    \n  \n  \n  \n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n  \n  \n  \n      <div class=\"ion-text-center\">\n        <ion-button shape=\"round\" class=\"addbutton\" position=\"buttom\" (click)=\"goTo()\" class=\"circle\">\n          <ion-icon slot=\"start\" name=\"add\" class=\"icon\"></ion-icon>\n        </ion-button>\n      </div>\n    </form>\n  </ion-content>\n  \n  \n  <!--<ion-button type=\"submit\"  (click)=\"delete(sa.code)\"   expand=\"full\" class=\"at_but\">delete</ion-button>-->"

/***/ }),

/***/ "./src/app/pages/consultsangue/consultsangue.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/consultsangue/consultsangue.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.card {\n  background: #d3d4d4; }\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 10px; }\n\n.roww {\n  --background:  rgb(211, 212, 212); }\n\n.circle {\n  background: #1d6b83;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  position: relative;\n  /* left:40%;\r\n    top: 200px;\r\n    right: 30%; */\n  margin-left: 300px;\n  margin-top: 70px;\n  margin-bottom: 10px; }\n\n.trash {\n  position: absolute;\n  right: 0%; }\n\n.build {\n  position: absolute;\n  right: 10%; }\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container ion-icon {\n    font-size: 44px; }\n\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  height: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 30px;\n  height: 30px;\n  display: block; }\n\n/* .trTable th\r\n{   \r\n    background: rgb(131, 193, 221);\r\n    font-size: 0.8rem;\r\n    border: thin solid #f5f5f2;\r\n    width: 180px;\r\n \r\n}\r\n\r\n.trTable td\r\n{\r\n\r\n    font-size: 0.8rem;\r\n    border: thin solid #f5f5f2;\r\n    width: 80%;\r\n}\r\n\r\n.table\r\n{    right: 5%;\r\n    left: 0.5%;\r\n    position:relative;\r\n    top: 100px;\r\n    width: 100%;\r\n}\r\n\r\n.table td{\r\n    background: rgb(204, 206, 193);\r\n    font-size: 0.8rem;\r\n    border: thin solid #f5f5f2;\r\n    width: 180px;\r\n    height:3cm;\r\n} */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uc3VsdHNhbmd1ZS9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXGNvbnN1bHRzYW5ndWVcXGNvbnN1bHRzYW5ndWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25zdWx0c2FuZ3VlL2NvbnN1bHRzYW5ndWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFLN0I7RUFDSSxtQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSxvREFBYTtFQUNiLDBDQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlDQUFhLEVBQUE7O0FBS2pCO0VBQ0ksbUJBQThCO0VBQzlCLFdBQVc7RUFDWCxZQUFZO0VBRVosbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQjs7aUJDVmE7RURhYixrQkFBa0I7RUFFbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUl2QjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTLEVBQUE7O0FBRWI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUVkO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUgzQjtJQUtNLGVBQWUsRUFBQTs7QUFJckI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFPbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0NRRyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnN1bHRzYW5ndWUvY29uc3VsdHNhbmd1ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTtcclxuICAgIFxyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uY2FyZCB7IFxyXG4gICAgYmFja2dyb3VuZDogIHJnYigyMTEsIDIxMiwgMjEyKTtcclxuXHJcbn1cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucm93d3tcclxuICAgIC0tYmFja2dyb3VuZDogIHJnYigyMTEsIDIxMiwgMjEyKTtcclxufVxyXG5cclxuXHJcblxyXG4uY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICByZ2IoMjksIDEwNywgMTMxKTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBsZWZ0OjQwJTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICByaWdodDogMzAlOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICBcclxufVxyXG5cclxuLnRyYXNoe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAlOyBcclxufVxyXG4uYnVpbGR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTAlOyBcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXhwYW5kLWFycm93LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIC50clRhYmxlIHRoXHJcbnsgICBcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMzEsIDE5MywgMjIxKTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICNmNWY1ZjI7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiBcclxufVxyXG5cclxuLnRyVGFibGUgdGRcclxue1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICNmNWY1ZjI7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4udGFibGVcclxueyAgICByaWdodDogNSU7XHJcbiAgICBsZWZ0OiAwLjUlO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZSB0ZHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNiwgMTkzKTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICNmNWY1ZjI7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6M2NtO1xyXG59ICovXHJcbiIsImlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1ODkxOTE7IH1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZGZkZmQ7IH1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZDNkNGQ0OyB9XG5cbi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG5cbi5yb3d3IHtcbiAgLS1iYWNrZ3JvdW5kOiAgcmdiKDIxMSwgMjEyLCAyMTIpOyB9XG5cbi5jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjMWQ2YjgzO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIGxlZnQ6NDAlO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIHJpZ2h0OiAzMCU7ICovXG4gIG1hcmdpbi1sZWZ0OiAzMDBweDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4udHJhc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwJTsgfVxuXG4uYnVpbGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMCU7IH1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5leHBhbmQtYXJyb3ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLmV4cGFuZC1hcnJvdy1jb250YWluZXIgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNDRweDsgfVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDYwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4vKiAudHJUYWJsZSB0aFxyXG57ICAgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTMxLCAxOTMsIDIyMSk7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjZjVmNWYyO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gXHJcbn1cclxuXHJcbi50clRhYmxlIHRkXHJcbntcclxuXHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjZjVmNWYyO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnRhYmxlXHJcbnsgICAgcmlnaHQ6IDUlO1xyXG4gICAgbGVmdDogMC41JTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGFibGUgdGR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCAyMDYsIDE5Myk7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjZjVmNWYyO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OjNjbTtcclxufSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/pages/consultsangue/consultsangue.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/consultsangue/consultsangue.page.ts ***!
  \***********************************************************/
/*! exports provided: ConsultsanguePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultsanguePage", function() { return ConsultsanguePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__);









var ConsultsanguePage = /** @class */ (function () {
    function ConsultsanguePage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
        this.modalController = modalController;
        this.platform = platform;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.ishidden = true;
    }
    ConsultsanguePage.prototype.ngOnInit = function () {
        var _this = this;
        this.MostraDados();
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/exames');
        });
    };
    ConsultsanguePage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    ConsultsanguePage.prototype.goTo = function () {
        this.navCtrl.navigateRoot('/sangue');
    };
    ConsultsanguePage.prototype.goToo = function (CPF) {
        console.log("CPF", CPF);
        this.navCtrl.navigateRoot('/editsangue', CPF);
        sessionStorage.setItem("CPFPatient", btoa(CPF));
    };
    //delete(form: NgForm)
    ConsultsanguePage.prototype.GravarDados = function (form) {
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
        this.Authorizer.QueryStoreProc('Executar', 'spHospital', params).then(function (res) {
            var resultado = res[0];
            try {
                if (resultado.success) {
                    _this.alertService.showLoader(resultado.message, 1000);
                }
                else {
                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Exame', pMessage: resultado.message });
                    //this.navCtrl.navigateRoot('/login');
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Exame', pMessage: 'Nenhum usuário!' });
            }
        });
    };
    ConsultsanguePage.prototype.MostraDados = function () {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando      
        var params = {
            'StatusCRUD': 'Pesquisar_sangue',
            'formValues': '',
            'CodigoUsuarioSistema': 0,
            'Hashkey': sessionStorage.getItem("SessionHashkey")
        };
        console.log('params', params);
        this.Authorizer.QueryStoreProc('Executar', 'spExame', params).then(function (res) {
            var resultado = res[0];
            console.log("resultado", resultado);
            try {
                if (resultado.success) {
                    _this.a = JSON.parse(resultado.results);
                    console.log('this.a', _this.a);
                    //this.alertService.showLoader(resultado.message, 1000);
                }
            }
            catch (err) {
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Exame', pMessage: 'Nao exame' });
            }
        });
    };
    ConsultsanguePage.prototype.expandFazenda = function () {
        this.ishidden = !this.ishidden;
    };
    ConsultsanguePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultsangue',
            template: __webpack_require__(/*! ./consultsangue.page.html */ "./src/app/pages/consultsangue/consultsangue.page.html"),
            styles: [__webpack_require__(/*! ./consultsangue.page.scss */ "./src/app/pages/consultsangue/consultsangue.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], ConsultsanguePage);
    return ConsultsanguePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-consultsangue-consultsangue-module.js.map