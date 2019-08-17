import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { AuthService } from 'src/app/services/auth.service';
// for install: https://www.npmjs.com/package/ts-md5
import { Md5 } from 'ts-md5/dist/md5';
var LoginPage = /** @class */ (function () {
    function LoginPage(modalController, navCtrl, alertService, env, Authorizer) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
        this.Authorizer = Authorizer;
    }
    LoginPage.prototype.ngOnInit = function () {
        // Uso a instrução (fetch) para pegar o ip do roteador.
        var ipAPI = 'https://api.ipify.org?format=json';
        fetch(ipAPI).then(function (response) { return response.json(); }).then(function (data) { return sessionStorage.setItem('SessionIP', data.ip); }).catch(function () { });
        // Este método retorna ON/OFF do Serviço onde esta API.
        this.Authorizer.EngineStatusConection(this.env.API_HOST);
        // Zero a SessionConection 
        sessionStorage.setItem("SessionConection", "0");
        sessionStorage.setItem('SessionUser', '');
        sessionStorage.setItem('SessionHashkey', '');
    };
    // Dismiss Login Modal
    LoginPage.prototype.dismissLogin = function () {
        this.modalController.dismiss();
    };
    LoginPage.prototype.ionViewWillEnter = function () {
    };
    LoginPage.prototype.AuthLogin = function (form) {
        var _this = this;
        //this.alertService.showLoader('Carregando... aguarde!!!');
        //this.alertService.presentAlert({pTitle:'e-Cupom33',pSubtitle:'Teste',pMessage:'TESTANDO DIALOG'} );
        //this.alertService.presentAlertConfirm({pTitleConfirm: 'e-Cupom33', pMessage:'Confirmar procedimento?',pTextBtnCancel:'Não',pTextOkay:'Sim' });
        //this.alertService.presentToast("Mensagem Toast: Logando...");
        //let pwd : any = Md5.hashStr(form.value.password);
        form.value.password = Md5.hashStr(form.value.password);
        this.Authorizer.Login(form).then(function (res) {
            //console.log("Resultado Json:", res);
            var resultado = res[0];
            if (resultado.success == true) {
                _this.alertService.showLoader(resultado.message);
                _this.navCtrl.navigateRoot('/menu/first');
            }
        });
    };
    LoginPage.prototype.CriarConta = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                //this.alertService.presentToast("Criar Conta!");
                /*
                this.dismissLogin();
                const registerModal = await this.modalController.create({
                  component: RegisterPage
                });
                return await registerModal.present();
                */
                this.navCtrl.navigateRoot('/register');
                return [2 /*return*/];
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            NavController,
            AlertService,
            EnvService,
            AuthService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map