
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';








@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {




  public ishidden: boolean = true;

  constructor(
    private navCtrl: NavController,
    private alertService: AlertService,
    private env: EnvService,
    private Authorizer: AuthService,
    public modalController: ModalController,
    public platform: Platform,
    public navController: NavController,
    public formBuilder: FormBuilder,
    public alertController: AlertController



  ) {

  }

  ngOnInit() {
    this.MostraDados();
    this.platform.backButton.subscribe(()=>{
      this.navCtrl.navigateRoot('/menu/options/tabs/main');
    })
  }
  goBack() {
    this.navCtrl.back();
  }

  goTo() {
    this.navCtrl.navigateRoot('/novoevento');
  }




  async cancelar(Nome) {

    console.log(Nome)
    //create form 

    //console.log("Delete:", params);


    const alert = await this.alertController.create({
      header: 'Excluindo...',
      message: 'Tem certeza que deseja excluir evento?',
      buttons: [
        {
          text: 'NÃO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'SIM',
          handler: async () => {
            console.log('Confirm Ok');
            console.log('aaa', Nome)
            this.delete(Nome);
            await alert.remove();
          }
        }
      ]
    });

    await alert.present();


  }
  //delete(form: NgForm)
  delete(Nome) {

    console.log(Nome)
    //create form 
    let myForm: FormGroup;
    // ------ NEW FORM WITH EDIT DATA
    myForm = this.formBuilder.group({
      code: Nome
    });


    let params = {
      'StatusCRUD': 'Delete',
      'formValues': myForm.value,
      'CodigoUsuarioSistema': 0,
      'Hashkey': sessionStorage.getItem("SessionHashkey")
    };

    console.log("Delete:", params);
    this.Authorizer.QueryStoreProc('Executar', "spEventos", params).then(res => {
      let resultado: any = res;
      this.alertService.presentAlert({ pTitle: 'Excluindo...', pSubtitle: '', pMessage: 'Evento excluído com sucesso !' });

    });
    this.MostraDados();
  }






  public a: any;
  MostraDados() {
    // paramStatus: Pesquisando, Editando, Deletando      
    let params = {
      'StatusCRUD': 'Pesquisar',
      'formValues': '',
      'CodigoUsuarioSistema': 0,
      'Hashkey': sessionStorage.getItem("SessionHashkey")
    };
    console.log('params', params)
    this.Authorizer.QueryStoreProc('Executar', 'spEventos', params).then(res => {
      let resultado: any = res[0];
      console.log("resultado", resultado)
      try {
        if (resultado.success) {
          this.a = JSON.parse(resultado.results);
          console.log('this.a', this.a)

          //this.alertService.showLoader(resultado.message, 1000);
        }
        else {
          this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: 'Paciente', pMessage: resultado.message });
          //this.navCtrl.navigateRoot('/login');
        }
      } catch (err) {
        this.alertService.presentAlert({ pTitle: this.env.APP_NAME, pSubtitle: 'Erro', pMessage: 'Nenhum usuário!' });
      }
    });

  }

  openUrl(url) {
    window.open(url, '_system');
  }


  expandFazenda() {
    this.ishidden = !this.ishidden;
  }

}

