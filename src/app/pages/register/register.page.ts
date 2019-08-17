import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
//import { LoginPage } from '../login/login.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private modalController: ModalController,
    private Authorizer: AuthService,
    private env: EnvService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }
  ngOnInit() {
    
  }
  
 LoginMain() {
  this.navCtrl.navigateRoot('login'); 
 }

 Register(form: NgForm) {    
  //this.alertService.showLoader('Carregando... aguarde!!!');
  //this.alertService.presentAlert({pTitle:'e-Cupom33',pSubtitle:'Teste',pMessage:'TESTANDO DIALOG'} );
  //this.alertService.presentAlertConfirm({pTitleConfirm: 'e-Cupom33', pMessage:'Confirmar procedimento?',pTextBtnCancel:'Não',pTextOkay:'Sim' });
  //this.alertService.presentToast("Mensagem Toast: Logando...");  
  form.value.password = Md5.hashStr(form.value.password);  

  this.Authorizer.Register(form, "spCadastroUsuarioSistema").then( res => {        
    //console.log("Resultado Json:", res);
    let resultado: any = res[0];
    if (resultado.success == true) {
      this.navCtrl.navigateRoot('/login');       
    } 
    //this.alertService.showLoader(resultado.message);
    this.alertService.presentAlert({pTitle:'ATENÇÃO',pSubtitle:'Criação de Conta',pMessage:resultado.message} );
    
  });
}

  
}