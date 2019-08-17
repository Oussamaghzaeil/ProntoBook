import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { rootRoute } from '@angular/router/src/router_module';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  public items :any ; 
  public MenuOptions : any;
  public AppName : String = 'e-Cupom33';
  public AppVersion : String = '0.0.1';
  public AppGreetings : String = 'Bem-Vindos ao e-Cupom33!';

  constructor(            
    public navCtrl: NavController,    
    private alertService: AlertService
    ) { }

    itemSelected(item: { name: string, icon:string, details:string,route:string}){
      //if(item.name ==='Produtos'){
      this.alertService.presentToast("Acessando...: "+item.name);
      this.navCtrl.navigateRoot(item.route);
      //}
    }
    
    ngOnInit() {      
      if (!sessionStorage.SessionHashkey) {       
        this.navCtrl.navigateRoot('/login');
      }
      //this.alertService.showLoader('Carregando... aguarde!!!');
      this.items  =  [      
          {
            id : 1,
            name : "Produtos",
            icon : "assets/imgs/Produtos.png",
            details: "Procure aqui o que você precisa encontrar.",
            route :"/login"
          }
      ];
      this.items.push( {
        id : 2,
        name : "Preços",
        icon : "assets/imgs/Consultar-Precos.png",      
        details: "Consulte os preços de forma rápido usando a camera do seu celular.",
        route :"/login"
      });        
      this.items.push( {
        id : 4,
        name : "Promoções",
        icon : "assets/imgs/Promocoes.png",      
        details: "Encontre todas as promoções e aproveite.",
        route :"/login"
      });
      this.items.push( {
        id : 5,
        name : "Favoritos",
        icon : "assets/imgs/Compras.png",      
        details: "Produtos marcados como favoritos.",
        route :"/login"
      });
      this.items.push( {
        id : 6,
        name : "Compras",
        icon : "assets/imgs/Compras.png",
        details: "Tudo que você colocou no carrinho, salvou ou comprou antes.",
        route :"/login"
      });    
      this.items.push( {
        id : 6,
        name : "Atendimento",
        icon : "assets/imgs/Consultar-Precos.png",
        details: "Atendimento no Caixa, Expedição ou OnLine.",
        route :"/login"
      });
  }
 
}
