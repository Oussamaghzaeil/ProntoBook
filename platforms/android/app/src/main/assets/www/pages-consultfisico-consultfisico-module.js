(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consultfisico-consultfisico-module"],{

/***/ "./src/app/pages/consultfisico/consultfisico.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/consultfisico/consultfisico.module.ts ***!
  \*************************************************************/
/*! exports provided: ConsultfisicoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultfisicoPageModule", function() { return ConsultfisicoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consultfisico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultfisico.page */ "./src/app/pages/consultfisico/consultfisico.page.ts");







var routes = [
    {
        path: '',
        component: _consultfisico_page__WEBPACK_IMPORTED_MODULE_6__["ConsultfisicoPage"]
    }
];
var ConsultfisicoPageModule = /** @class */ (function () {
    function ConsultfisicoPageModule() {
    }
    ConsultfisicoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_consultfisico_page__WEBPACK_IMPORTED_MODULE_6__["ConsultfisicoPage"]]
        })
    ], ConsultfisicoPageModule);
    return ConsultfisicoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/consultfisico/consultfisico.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/consultfisico/consultfisico.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-undo\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Consultar exames físicos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" method=\"post\">\n    <div *ngFor=\"let sa of a; let i =index \">\n      <ion-card class=\"card\">\n        <ion-card-header>\n          <ion-card-title>\n              <ion-grid>\n                  <ion-row >\n                    <ion-col >\n                        <ion-input  name=\"namepatient\" value=\"{{sa.name}}\"> {{sa.Nome}} {{sa.Sobrenome}}</ion-input>\n                    </ion-col>\n                    <ion-col>\n                        <ion-icon name=\"create\" (click)=\"goToo(sa.CPF)\" class=\"build\"></ion-icon>\n                    </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <div >\n\n            <ion-grid>\n              <ion-row >\n                <ion-col id=\"{{sa.CPF}}\">\n\n                  \n\n                    <ion-item class=\"roww\" lines=\"none\">\n                      <ion-label>Exame:</ion-label>\n                      {{sa.exame}}\n                    </ion-item>\n\n                    <ion-item class=\"roww\" lines=\"none\">\n                      <ion-label>Tipo de exame:</ion-label>\n                      {{sa.tipo}}\n                    </ion-item>\n                    <ion-item class=\"roww\" lines=\"none\">\n                      <ion-label>Peso(Kg):</ion-label>\n                      {{sa.pesokg}}\n                    </ion-item>\n                    <ion-item class=\"roww\" lines=\"none\">\n                        <ion-label>Peso(Gr):</ion-label>\n                        {{sa.pesogr}}\n                      </ion-item>\n                    <ion-item class=\"roww\" lines=\"none\">\n                      <ion-label>Altura:</ion-label>\n                      {{sa.altura}}\n                    </ion-item>\n\n                    <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                      <ion-label>Fumante:</ion-label>\n                      {{sa.fumar}}\n                    </ion-item>\n\n                    <ion-item [hidden]=\"ishidden\" class=\"roww\" lines=\"none\">\n                      <ion-label>Sexo:</ion-label>\n                      {{sa.Sexo}}\n                    </ion-item>\n\n\n\n                    <div class=\"expand-arrow-container\" (click)=\"expandFazenda()\">\n                      <ion-icon name=\"ios-arrow-dropdown-circle\" *ngIf=\"ishidden\"></ion-icon>\n                      <ion-icon name=\"ios-arrow-dropup-circle\" *ngIf=\"!ishidden\"></ion-icon>\n                    </div>\n\n                  \n\n\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n\n    <div class=\"ion-text-center\">\n      <ion-button shape=\"round\" class=\"addbutton\" position=\"buttom\" (click)=\"goTo()\" class=\"circle\">\n        <ion-icon slot=\"start\" name=\"add\" class=\"icon\"></ion-icon>\n      </ion-button>\n    </div>\n  </form>\n</ion-content>\n\n\n<!--<ion-button type=\"submit\"  (click)=\"delete(sa.code)\"   expand=\"full\" class=\"at_but\">delete</ion-button>-->"

/***/ }),

/***/ "./src/app/pages/consultfisico/consultfisico.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/consultfisico/consultfisico.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color:#589191; }\n\nion-title {\n  color: #fdfdfd; }\n\n.card {\n  background: #d3d4d4; }\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 10px; }\n\n.roww {\n  --background:  rgb(211, 212, 212); }\n\n.trash {\n  position: absolute;\n  right: 0%; }\n\n.build {\n  position: absolute;\n  right: 10%; }\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.expand-arrow-container ion-icon {\n    font-size: 44px; }\n\n.circle {\n  background: #1d6b83;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  position: absolute;\n  right: 5%;\n  /* left:40%;\r\n    top: 200px;\r\n    right: 30%; */\n  margin-left: 300px;\n  margin-top: 70px;\n  margin-bottom: 20px; }\n\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 61%;\n  height: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 45px;\n  height: 45px;\n  display: block; }\n\n/* .trTable th\r\n{   \r\n    background: rgb(131, 193, 221);\r\n    font-size: 0.8rem;\r\n    border: thin solid #f5f5f2;\r\n    width: 180px;\r\n \r\n}\r\n\r\n.trTable td\r\n{\r\n\r\n    font-size: 0.8rem;\r\n    border: thin solid #f5f5f2;\r\n    width: 80%;\r\n}\r\n\r\n.table\r\n{    right: 5%;\r\n    left: 0.5%;\r\n    position:relative;\r\n    top: 100px;\r\n    width: 100%;\r\n}\r\n\r\n.table td{\r\n    background: rgb(204, 206, 193);\r\n    font-size: 0.8rem;\r\n    border: thin solid #f5f5f2;\r\n    width: 180px;\r\n    height:3cm;\r\n} */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uc3VsdGZpc2ljby9DOlxcVXNlcnNcXExldmVsXFxEZXNrdG9wXFxvdXNzYW1hXFxQcm9udG8gQm9vay9zcmNcXGFwcFxccGFnZXNcXGNvbnN1bHRmaXNpY29cXGNvbnN1bHRmaXNpY28ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25zdWx0ZmlzaWNvL2NvbnN1bHRmaXNpY28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBeUIsRUFBQTs7QUFLN0I7RUFDSSxtQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSxvREFBYTtFQUNiLDBDQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlDQUFhLEVBQUE7O0FBT2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBSDNCO0lBS00sZUFBZSxFQUFBOztBQUluQjtFQUNFLG1CQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtFQUVaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNUOztpQkNmYTtFRGtCYixrQkFBa0I7RUFFbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQU9sQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQ09HIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uc3VsdGZpc2ljby9jb25zdWx0ZmlzaWNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojNTg5MTkxO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5jYXJkIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDIxMSwgMjEyLCAyMTIpO1xyXG5cclxufVxyXG4uc2MtaW9uLWNhcmQtbWQtaCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5yb3d3e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgcmdiKDIxMSwgMjEyLCAyMTIpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLnRyYXNoe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAlOyBcclxufVxyXG4uYnVpbGR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTAlOyBcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXhwYW5kLWFycm93LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICByZ2IoMjksIDEwNywgMTMxKTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICAvKiBsZWZ0OjQwJTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICByaWdodDogMzAlOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICBcclxufVxyXG4uaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDYxJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogLnRyVGFibGUgdGhcclxueyAgIFxyXG4gICAgYmFja2dyb3VuZDogcmdiKDEzMSwgMTkzLCAyMjEpO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2Y1ZjVmMjtcclxuICAgIHdpZHRoOiAxODBweDtcclxuIFxyXG59XHJcblxyXG4udHJUYWJsZSB0ZFxyXG57XHJcblxyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2Y1ZjVmMjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi50YWJsZVxyXG57ICAgIHJpZ2h0OiA1JTtcclxuICAgIGxlZnQ6IDAuNSU7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxlIHRke1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjA2LCAxOTMpO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2Y1ZjVmMjtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDozY207XHJcbn0gKi9cclxuIiwiaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU4OTE5MTsgfVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogI2ZkZmRmZDsgfVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNkM2Q0ZDQ7IH1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLnJvd3cge1xuICAtLWJhY2tncm91bmQ6ICByZ2IoMjExLCAyMTIsIDIxMik7IH1cblxuLnRyYXNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMCU7IH1cblxuLmJ1aWxkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAlOyB9XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4uZXhwYW5kLWFycm93LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIC5leHBhbmQtYXJyb3ctY29udGFpbmVyIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQ0cHg7IH1cblxuLmNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICMxZDZiODM7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUlO1xuICAvKiBsZWZ0OjQwJTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICByaWdodDogMzAlOyAqL1xuICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA2MSU7XG4gIGhlaWdodDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLyogLnRyVGFibGUgdGhcclxueyAgIFxyXG4gICAgYmFja2dyb3VuZDogcmdiKDEzMSwgMTkzLCAyMjEpO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2Y1ZjVmMjtcclxuICAgIHdpZHRoOiAxODBweDtcclxuIFxyXG59XHJcblxyXG4udHJUYWJsZSB0ZFxyXG57XHJcblxyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2Y1ZjVmMjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi50YWJsZVxyXG57ICAgIHJpZ2h0OiA1JTtcclxuICAgIGxlZnQ6IDAuNSU7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxlIHRke1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjA2LCAxOTMpO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgI2Y1ZjVmMjtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDozY207XHJcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/consultfisico/consultfisico.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/consultfisico/consultfisico.page.ts ***!
  \***********************************************************/
/*! exports provided: ConsultfisicoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultfisicoPage", function() { return ConsultfisicoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__);









var ConsultfisicoPage = /** @class */ (function () {
    function ConsultfisicoPage(navCtrl, alertService, env, Authorizer, modalController, platform, navController, formBuilder) {
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
    ConsultfisicoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.MostraDados();
        this.platform.backButton.subscribe(function () {
            _this.navCtrl.navigateRoot('/exames');
        });
    };
    ConsultfisicoPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    ConsultfisicoPage.prototype.goTo = function () {
        this.navCtrl.navigateRoot('/fisico');
    };
    ConsultfisicoPage.prototype.goToo = function (CPF) {
        console.log("CPF", CPF);
        this.navCtrl.navigateRoot('/editfisico', CPF);
        sessionStorage.setItem("CPFPatient", btoa(CPF));
    };
    //delete(form: NgForm)
    ConsultfisicoPage.prototype.GravarDados = function (form) {
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
    ConsultfisicoPage.prototype.MostraDados = function () {
        var _this = this;
        // paramStatus: Pesquisando, Editando, Deletando      
        var params = {
            'StatusCRUD': 'Pesquisar',
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
                _this.alertService.presentAlert({ pTitle: _this.env.APP_NAME, pSubtitle: 'Exame', pMessage: 'Não exame' });
            }
        });
    };
    ConsultfisicoPage.prototype.expandFazenda = function () {
        this.ishidden = !this.ishidden;
    };
    ConsultfisicoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultfisico',
            template: __webpack_require__(/*! ./consultfisico.page.html */ "./src/app/pages/consultfisico/consultfisico.page.html"),
            styles: [__webpack_require__(/*! ./consultfisico.page.scss */ "./src/app/pages/consultfisico/consultfisico.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], ConsultfisicoPage);
    return ConsultfisicoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-consultfisico-consultfisico-module.js.map