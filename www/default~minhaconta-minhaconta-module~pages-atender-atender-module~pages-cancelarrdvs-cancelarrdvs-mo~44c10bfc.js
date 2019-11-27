(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~minhaconta-minhaconta-module~pages-atender-atender-module~pages-cancelarrdvs-cancelarrdvs-mo~44c10bfc"],{

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./env.service */ "./src/app/services/env.service.ts");



//import { Network }      from '@ionic-native/network';



//import { Base64 } from '@ionic-native/base64/ngx';
//import { Observable, throwError } from 'rxjs';
var AuthService = /** @class */ (function () {
    function AuthService(http, platform, 
    //private network: Network,      
    env, alertService) {
        this.http = http;
        this.platform = platform;
        this.env = env;
        this.alertService = alertService;
        this.headers = new Headers();
        this.isLoggedIn = false;
        /*
        CheckConnectivity() {
          this.platform.ready().then(() => {
            // if no internet, notice is a string
            if (this.network.type == 'none' ) {
              this.alertService.presentAlert({
                pTitle:'ATENÇÃO',
                pSubtitle:'Autendicação no Sistema',
                pMessage:'Não existe conexão de dados no momento. Tente novamente'
              });
            } else {
                return false;
            }
          })
        }
        */
        // função para verificar conexão de Host Engine API
        this.EngineStatusConection = function (host) {
            var started = new Date().getTime();
            var url = host;
            fetch(url).then(function (response) {
                if (response.status === 200) {
                    return response.statusText;
                }
                else {
                    throw new Error('Algo deu errado no servidor da EngineAPI!');
                }
            }).then(function (response) {
                console.debug(response);
                sessionStorage.setItem('EngineStatusConection', "ON");
                return true;
            }).catch(function (error) {
                //console.error(error);
                sessionStorage.setItem('EngineStatusConection', 'OFF');
                return false;
            });
        };
        this.Login = function (form) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var json, ParamDataJson, strDataJson, StoreProcName, ParamHashkey, paramUrlAPI, paramsAPI, EngineAPI;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    json = JSON.stringify(form.value);
                    json = this.encripta(json);
                    ParamDataJson = btoa(json);
                    strDataJson = atob(ParamDataJson);
                    StoreProcName = "spUsuarioAuthentication";
                    ParamHashkey = sessionStorage.SessionHashkey;
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/authentication?';
                    paramsAPI = "StoreProcName=" + StoreProcName + "&DataJson=" + ParamDataJson;
                    EngineAPI = paramUrlAPI + paramsAPI;
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            _this.coletionsData = _this.http.get(EngineAPI);
                            _this.coletionsData.subscribe(function (data) {
                                if (data[0].success) {
                                    //sessionStorage.setItem('SessionUser', JSON.stringify(data[0].results));
                                    sessionStorage.setItem('SessionUser', data[0].results);
                                    sessionStorage.setItem("SessionHashkey", data[0].hashkey);
                                    sessionStorage.setItem("SessionConection", "1");
                                }
                                else {
                                    sessionStorage.setItem("SessionConection", "0");
                                    _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Autendicação no Sistema', pMessage: data[0].message });
                                }
                                resolve(data);
                            }, function (error) {
                                _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                                console.log("Error: ", error);
                            });
                        })];
                });
            });
        };
        ////////////////////////////pic function //////////////////////////////////
        this.QueryStoreImagem = function (MetodoNameAPI, nomeImagem, rutaSalvar, imagem) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var paramUrlAPI, formImagem;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/' + MetodoNameAPI;
                    formImagem = new FormData();
                    formImagem.append('nome', nomeImagem);
                    formImagem.append('ruta', rutaSalvar);
                    formImagem.append('imagem', imagem, imagem.name);
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.coletionsData = _this.http.post(paramUrlAPI, formImagem);
                            _this.coletionsData.subscribe(function (data) {
                                resolve(data);
                            }, function (error) {
                                _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor ou Método Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                                console.log("Error: ", error);
                            });
                        })];
                });
            });
        };
        //////////////////////////////////////////////////////////////////////////
        this.QueryStoreProc1 = function (opcao, variable, consultaJson) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var ParamDataJson, strDataJson, a, paramUrlAPI, go, paramsAPI, EngineAPI;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    ParamDataJson = btoa(JSON.stringify(consultaJson));
                    strDataJson = atob(ParamDataJson);
                    console.log(strDataJson);
                    a = strDataJson.substring(strDataJson.indexOf(':') + 2, strDataJson.indexOf('}') - 1);
                    console.log(a);
                    //ConsultaMenu
                    console.log(ParamDataJson);
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/' + opcao + '?';
                    go = consultaJson;
                    console.log("consultaJson", consultaJson);
                    paramsAPI = go;
                    console.log(paramsAPI);
                    EngineAPI = paramUrlAPI + variable + "=" + paramsAPI;
                    console.log(EngineAPI);
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.coletionsData = _this.http.get(EngineAPI);
                            _this.coletionsData.subscribe(function (data) {
                                resolve(data);
                                console.log(data);
                            }, function (error) {
                                _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                                //console.log("Error: ", error);
                            });
                        })];
                });
            });
        };
        this.Register = function (form) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var json, StoreProcName, ParamDataJson, paramUrlAPI, paramsAPI, EngineAPI;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    json = JSON.stringify(form.value);
                    json = this.encripta(json);
                    StoreProcName = "spRegister";
                    ParamDataJson = btoa(json);
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/register?';
                    paramsAPI = "StoreProcName=" + StoreProcName + "&DataJson=" + ParamDataJson;
                    EngineAPI = paramUrlAPI + paramsAPI;
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.coletionsData = _this.http.get(EngineAPI);
                            _this.coletionsData.subscribe(function (data) {
                                resolve(data);
                                //console.log(data);                              
                            }, function (error) {
                                _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                                console.log("Error: ", error);
                            });
                        })];
                });
            });
        };
        this.QueryStoreProcDelete1 = function (opcao, procedure, variable, consultaJson) {
            var _this = this;
            //--------------------------------------------------------------------------------------------    
            // Função Gerenerica de consulta no Service API  
            // Criação / Atualização: 29/07/2019 as 10:42          
            // Por Gilson DeLima    
            //--------------------------------------------------------------------------------------------
            // Params: opcao = ex: ConsultaGrupos, consultaJson = ex: paramsGrupo
            //--------------------------------------------------------------------------------------------
            //this.alertService.showLoader("Processando... Aguarde por favor!!!");        
            var ParamDataJson = btoa(JSON.stringify(consultaJson)); // encode string  
            var strDataJson = atob(ParamDataJson); // decode string
            console.log(strDataJson);
            var a = strDataJson.substring(strDataJson.indexOf(':') + 2, strDataJson.indexOf('}') - 1);
            console.log(a);
            //ConsultaMenu
            console.log(ParamDataJson);
            var paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/' + opcao + '?';
            var go = consultaJson;
            console.log("consultaJson", consultaJson);
            var paramsAPI = ParamDataJson;
            console.log(paramsAPI);
            var EngineAPI = paramUrlAPI + variable + "=" + paramsAPI + "&spProcedure=" + procedure;
            console.log(EngineAPI);
            return new Promise(function (resolve) {
                _this.coletionsData = _this.http.get(EngineAPI);
                _this.coletionsData.subscribe(function (data) {
                    resolve(data);
                    console.log(data);
                }, function (error) {
                    _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                    //console.log("Error: ", error);
                });
            });
        };
        /////////////////////////////////////////////////////////////////////////
        this.QueryStoreProc = function (MetodoNameAPI, StoreProcName, ParamsJson) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var json, ParamDataJson, paramUrlAPI, paramsAPI, EngineAPI;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    json = JSON.stringify(ParamsJson);
                    json = this.encripta(json);
                    ParamDataJson = btoa(json);
                    paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/' + MetodoNameAPI + '?';
                    paramsAPI = "StoreProcName=" + StoreProcName + "&DataJson=" + ParamDataJson;
                    EngineAPI = paramUrlAPI + paramsAPI;
                    console.log(EngineAPI);
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.coletionsData = _this.http.get(EngineAPI);
                            _this.coletionsData.subscribe(function (data) {
                                resolve(data);
                            }, function (error) {
                                _this.alertService.presentAlert({ pTitle: "Atenção", pSubtitle: "Servidor Indisponível. Tente mais tarde!!!", pMessage: "Status Error:" + error.status + " | " + error.statusText });
                                console.log("Error: ", error);
                            });
                        })];
                });
            });
        };
        this.headers.append('Content-Type', 'application/json');
    }
    ////////////// encriptation function ////////////////////////////////////
    AuthService.prototype.encripta = function (valor) {
        var retorno;
        var stexto;
        retorno = "";
        try {
            stexto = valor.trim();
        }
        catch (err) {
            stexto = valor;
        }
        if (stexto == null)
            stexto = "";
        if (stexto == "")
            return stexto;
        while (true) {
            var letra = void 0;
            var nnumero = void 0;
            var snumero = void 0;
            if (stexto.length > 1)
                letra = stexto.substring(0, 1);
            else
                letra = stexto;
            nnumero = letra.toString().charCodeAt(0);
            nnumero += 166;
            snumero = nnumero.toString();
            if (snumero.length < 3)
                snumero = "0" + snumero;
            if (snumero.length < 3)
                snumero = "0" + snumero;
            retorno += snumero;
            if (stexto.length > 1)
                stexto = stexto.substring(1);
            else
                stexto = "";
            if (stexto == "")
                break;
        }
        return retorno;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/env.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/env.service.ts ***!
  \*****************************************/
/*! exports provided: EnvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvService", function() { return EnvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnvService = /** @class */ (function () {
    function EnvService() {
        //API_HOST   = "http://200.196.251.212"; 
        //API_HOST   = "http://localhost"; 
        this.API_HOST = "http://200.196.251.212";
        this.API_NAME = "/ServiceProntoBook/";
        //API_HOST = "http://192.168.0.121";
        //API_HOST = "http://192.168.15.13";  
        this.API_URL = "/ServiceProntoBook/api/Geral";
        this.APP_NAME = "ProntoBook";
    }
    EnvService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EnvService);
    return EnvService;
}());



/***/ })

}]);
//# sourceMappingURL=default~minhaconta-minhaconta-module~pages-atender-atender-module~pages-cancelarrdvs-cancelarrdvs-mo~44c10bfc.js.map