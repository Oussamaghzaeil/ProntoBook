 
import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-novoevento',
  templateUrl: './novoevento.page.html',
  styleUrls: ['./novoevento.page.scss'],
})
export class NovoeventoPage implements OnInit {
  @ViewChild('Nome') iNome;
  
  public CodigoUsuario: any;
  public Nome : String;
  public DataDeNascimento: String;
  
  constructor(
    private navCtrl: NavController,
    private alertService: AlertService,
    private env: EnvService,
    private Authorizer: AuthService,
    public modalController: ModalController,
    public platform: Platform,
   

  ) { }

  ngOnInit() {
     
    console.log("ionViewDidEnter");
    this.platform.backButton.subscribe(()=>{
      this.navCtrl.navigateRoot('/noticias');
    })
  }

  ionViewWillEnter() {
    // Disparado quando o roteamento de componentes está prestes a se animar.    
    //console.log("ionViewWillEnter");
    //this.CRUDActionAPIForm('Pesquisando', null);  

  }

  ionViewDidEnter() {
    // Disparado quando o roteamento de componentes terminou de ser animado.        
    //this.MostraDados(JSON.parse(sessionStorage.getItem('SessionUser'))[0].CodigoUsuario);   
    console.log("ionViewDidEnter");
    /*
    setTimeout(() => {
      this.iNome.setFocus();
    },150);
    */
  }
  
  ionViewWillLeave() {
    // Disparado quando o roteamento de componentes está prestes a ser animado.    
    
  }

  ionViewDidLeave() {
    // Disparado quando o roteamento de componentes terminou de ser animado.    
    //console.log("ionViewDidLeave");    
  }
  goBack() {
    this.navCtrl.back();
  }

 
  


  atualizar( form: NgForm) {
    // paramStatus: Pesquisando, Editando, Deletando      
    let params = {
      'StatusCRUD': 'Criacao',
      'formValues': form.value,
      'CodigoUsuarioSistema': 0,
      'Hashkey': sessionStorage.getItem("SessionHashkey")
    };

    console.log("valores:", params);
    this.Authorizer.QueryStoreProc('Executar', 'spEventos', params).then(res => {
      let resultado: any = res[0];
      console.log("resultado",resultado)
      try {
        if (resultado.success) {         
         
          this.alertService.showLoader(resultado.message, 1000);
        }
        else {
          this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Novo Evento', pMessage: resultado.message });
          //this.navCtrl.navigateRoot('/login');
        }
      } catch (err) {
        this.alertService.presentAlert({ pTitle: this.env.APP_NAME, pSubtitle: 'Novo Evento', pMessage: 'Nenhum usuário!' });
      }
    });

    this.goBack();
  }



  
}



