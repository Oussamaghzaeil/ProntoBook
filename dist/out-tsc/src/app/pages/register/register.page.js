import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { Md5 } from 'ts-md5/dist/md5';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(modalController, Authorizer, env, navCtrl, alertService) {
        this.modalController = modalController;
        this.Authorizer = Authorizer;
        this.env = env;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    // Dismiss Register Modal
    RegisterPage.prototype.dismissRegister = function () {
        this.modalController.dismiss();
    };
    // On Login button tap, dismiss Register modal and open login Modal
    /*
    async loginModal() {
      this.dismissRegister();
      const loginModal = await this.modalController.create({
        component: LoginPage,
      });
      return await loginModal.present();
    }
    */
    RegisterPage.prototype.LoginMain = function () {
        this.navCtrl.navigateRoot('login');
    };
    RegisterPage.prototype.Register = function (form) {
        var _this = this;
        //this.alertService.showLoader('Carregando... aguarde!!!');
        //this.alertService.presentAlert({pTitle:'e-Cupom33',pSubtitle:'Teste',pMessage:'TESTANDO DIALOG'} );
        //this.alertService.presentAlertConfirm({pTitleConfirm: 'e-Cupom33', pMessage:'Confirmar procedimento?',pTextBtnCancel:'Não',pTextOkay:'Sim' });
        //this.alertService.presentToast("Mensagem Toast: Logando...");  
        form.value.password = Md5.hashStr(form.value.password);
        this.Authorizer.Register(form, "spCadastroUsuarioSistema").then(function (res) {
            console.log("Resultado Json:", res);
            var resultado = res[0];
            if (resultado.success == true) {
                _this.navCtrl.navigateRoot('/login');
            }
            //this.alertService.showLoader(resultado.message);
            _this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Criação de Conta', pMessage: resultado.message });
        });
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            AuthService,
            EnvService,
            NavController,
            AlertService])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map