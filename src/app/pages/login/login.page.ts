import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { AuthService } from 'src/app/services/auth.service';

// for install: https://www.npmjs.com/package/ts-md5
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,    
    private navCtrl: NavController,
    private alertService: AlertService,
    private env: EnvService,    
    private Authorizer: AuthService
    
        
  ) { }
    
  ngOnInit() {
    // Uso a instrução (fetch) para pegar o ip do roteador.
    let ipAPI : any = 'https://api.ipify.org?format=json'
    fetch(ipAPI).then(response=>response.json()).then(data=>sessionStorage.setItem('SessionIP', data.ip)).catch(()=>{}
    )
    // Este método retorna ON/OFF do Serviço onde esta API.
    //this.Authorizer.EngineStatusConection(this.env.API_HOST);  

    // Zero a SessionConection 
    sessionStorage.setItem("SessionConection", "0");      
    sessionStorage.setItem('SessionUser', ''); 
    sessionStorage.setItem('SessionHashkey', '');     
  }
  

  
  AuthLogin(form: NgForm) {        

    //this.alertService.showLoader('Carregando... aguarde!!!');
    //this.alertService.presentAlert({pTitle:'e-Cupom33',pSubtitle:'Teste',pMessage:'TESTANDO DIALOG'} );
    //this.alertService.presentAlertConfirm({pTitleConfirm: 'e-Cupom33', pMessage:'Confirmar procedimento?',pTextBtnCancel:'Não',pTextOkay:'Sim' });
    //this.alertService.presentToast("Mensagem Toast: Logando...");
    //let pwd : any = Md5.hashStr(form.value.password);
    form.value.password = Md5.hashStr(form.value.password);

    this.Authorizer.Login(form).then( res => {        
      //console.log("Resultado Json:", res);
      let resultado: any = res[0];
      if (resultado.success == true) {        
        this.alertService.showLoader(resultado.message);
        this.navCtrl.navigateRoot('/menu/options');                 
      }      
    });
  }

}