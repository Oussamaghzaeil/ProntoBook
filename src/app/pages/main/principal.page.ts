import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { rootRoute } from '@angular/router/src/router_module';
import { AuthService } from 'src/app/services/auth.service';
//import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class principalPage implements OnInit {

  public items :any ; 
  public MenuOptions : any;
  public AppName : String = 'Pronto Book';
  public AppVersion : String = '0.0.1';
  public AppGreetings : String = 'Bem-Vindos ao Pronto Book!';

  constructor(            
    public navCtrl: NavController,    
    private alertService: AlertService,
  //  private alertService: AlertService,
    private env: EnvService,
    private Authorizer: AuthService,
    ) { }

    itemSelected(item: { name: string, icon:string, details:string,route:string}){
      //if(item.name ==='Produtos'){
      //this.alertService.presentToast("Acessando...: "+item.name);
      this.navCtrl.navigateRoot(item.route);
      //}
    }
    public dados:any;
    ngOnInit() {      
      if (!sessionStorage.SessionHashkey) {       
        this.navCtrl.navigateRoot('/login');
      }


      this.dados=JSON.parse(sessionStorage.getItem('SessionUser'));
      //this.alertService.showLoader('Carregando... aguarde!!!');
      this.getModul()
     
  }


  getModul()
  {
console.log('gutykuejbdl',this.dados)
    let params = {
      'StatusCRUD': 'pesquisar',
      'formValues': this.dados[0].position,
      'CodigoUsuarioSistema': 0,
      'Hashkey': sessionStorage.getItem("SessionHashkey")
    };
    console.log('gutykuejbdl',params)
  this.Authorizer.QueryStoreProc('Executar',"spPermission", params).then(res => {
    let resultado: any = res[0];
    console.log(JSON.parse(resultado.results))
    try {
      if (resultado.success) { 
          //this.alertService.presentAlert({ pTitle: 'Atendimento', pSubtitle: 'Success', pMessage: 'Atendimento excluído com sucesso !' });
         
         
         
         if(this.dados[0].position=='Doutor'){


          this.items  =  [      
            {
              id : 1,
              name : "Notícias",
              icon : "assets/imgs/Noticias.png",
              route :JSON.parse(resultado.results)[0].module
            }
        ];
        this.items.push( {
          id : 2,
          name : "Agenda",
          icon : "assets/imgs/Agenda.png",      
          route :JSON.parse(resultado.results)[5].module
        });        
        this.items.push( {
          id : 3,
          name : "Grupos",
          icon : "assets/imgs/Grupos.png",      
          route :JSON.parse(resultado.results)[3].module
        });
        this.items.push( {
          id : 4,
          name : "Prontuários",
          icon : "assets/imgs/Prontuarios.png",      
          route :JSON.parse(resultado.results)[6].module
        });
        this.items.push( {
          id : 5,
          name : "Exames",
          icon : "assets/imgs/Exames.png",
          route :JSON.parse(resultado.results)[1].module
        });    
        this.items.push( {
          id : 6,
          name : "Hospitais",
          icon : "assets/imgs/Hospitais.png",
          route :JSON.parse(resultado.results)[2].module
        });
  
        this.items.push( {
          id : 7,
          name : "Estatísticas",
          icon : "assets/imgs/Estatisticas.png",
          route :JSON.parse(resultado.results)[4].module
        });}
        else{
        
        
          this.items  =  [      
            {
              id : 1,
              name : "Agenda",
              icon : "assets/imgs/Agenda.png",
              route :JSON.parse(resultado.results)[0].module
            }
        ];
         
          this.items.push( {
            id : 2,
            name : "Prontuários",
            icon : "assets/imgs/Prontuarios.png",      
            route :JSON.parse(resultado.results)[1].module
          });

        }
       
       
       
        }
      }
      catch (err) {
        //this.alertService.presentAlert({ pTitle: this.env.APP_NAME, pSubtitle: 'Atendimento', pMessage: 'Nenhum usuário!' });
      }
  });

  }
 
}
