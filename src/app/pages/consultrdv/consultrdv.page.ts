
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { NavController, Events, ModalController } from '@ionic/angular';
import { NgForm ,FormGroup, FormBuilder  } from '@angular/forms';
import { EnvService } from 'src/app/services/env.service';
import {Md5} from 'ts-md5/dist/md5';
import {  Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-consultrdv',
  templateUrl: './consultrdv.page.html',
  styleUrls: ['./consultrdv.page.scss'],
})
export class ConsultrdvPage implements OnInit {

  public Datai    : Date;
  public Dataf    : Date;

  
  

  constructor(
    private navCtrl: NavController,
   
    private alertService: AlertService,
    private Authorizer: AuthService,
    private env: EnvService,
    public modalController: ModalController,
    public platform: Platform,
    public navController: NavController,
    public formBuilder : FormBuilder,
    private db : Storage
    ) { }

  

  public a: any ;
  ConsultaHosp() 
  {
    console.log("Hospitais :")
   let params1=null;

    this.Authorizer.QueryStoreProc1('ConsultasHosp',"", params1).then(res => {
      let resultado: any = res;
      try {
        if (resultado.length == 0) {
          //nenhum modulo encontrado
          //this.alertService.presentAlert({ pTitle: 'Hospitais', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis encontrado!' });
        } else {
          //mostro os módulos
          console.log("Hospitais:", resultado);
          this.a = resultado;
          console.log(this.a)
        }
      } catch (err) {
        this.alertService.presentAlert({ pTitle: 'Hospitais', pSubtitle: 'Menu', pMessage: 'Nenhum Perfis!' });
      }
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  goTo(){
    this.navCtrl.navigateRoot('/rdvs');
    }


  public b: any ;
  Consultaspec() 
  {
    console.log("Speciality :")
   let params1=null;

    this.Authorizer.QueryStoreProc1('ConsultasSpeciality',"", params1).then(res => {
      let resultado: any = res;
      try {
        if (resultado.length == 0) {
        
          //this.alertService.presentAlert({ pTitle: 'Speciality', pSubtitle: 'Menu', pMessage: 'Nenhuma informação encontrada!' });
        } else {
          //mostro os módulos
          console.log("Speciality:", resultado);
          this.b = resultado;
          console.log(this.b)
        }
      } catch (err) {
        this.alertService.presentAlert({ pTitle: 'Hospitais', pSubtitle: 'Menu', pMessage: 'Sem informação!' });
      }
    });
  }

 
  
  

  ngOnInit() {
    this.ConsultaHosp();
    this.Consultaspec();
    this.platform.backButton.subscribe(()=>{
      this.navCtrl.navigateRoot('/agenda');
    })
  }


  atualizar(form)
  {

    console.log(form.form.value)
    //create form 
    

    let params = {
      'StatusCRUD': 'Pesquisar',
      'formValues': form.form.value,
      'CodigoUsuarioSistema': 0,
      'Hashkey': sessionStorage.getItem("SessionHashkey")
    };
    console.log("Pesquisar:", params);
    this.Authorizer. QueryStoreProc('Executar',"spAtendimento", params).then(res => {
      let resultado: any = res[0];

      console.log(resultado)
      try {
        if (resultado.success) { 
         // this.db.set('rdv', resultado.results); 
          sessionStorage.setItem('rdv', resultado.results);  
          this.goTo();

           
          }
        else {
          this.alertService.presentAlert({ pTitle: 'ATENÇÃO', pSubtitle: '', pMessage: 'Não existe atendimento!' });

        }}
        catch (err) {
          this.alertService.presentAlert({ pTitle: this.env.APP_NAME, pSubtitle: 'Erro', pMessage: 'Atendimento' });
        }
    });
    
    
  }

  

}
