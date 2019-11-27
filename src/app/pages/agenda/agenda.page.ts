import { Component, OnInit } from '@angular/core';
import { NavController,Platform } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {


  constructor(
    private navCtrl: NavController,
    public platform :Platform,
   
    ) { }

  

  goBack() {
    this.navCtrl.back();
  }



  ngOnInit() {
    this.platform.backButton.subscribe(()=>{
      this.navCtrl.navigateRoot('/menu/options/tabs/main');
    })
    
  }

  goToconsult(){
    this.navCtrl.navigateRoot('/consultrdv');
    }

  goTonovo(){
    this.navCtrl.navigateRoot('/novordv');
  }

  goTocancelar(){
      this.navCtrl.navigateRoot('/cancelarrdvs');
      }
  goTonao(){
        this.navCtrl.navigateRoot('/naocumpridasrdvs');
        }

  goTocumpridas(){
        this.navCtrl.navigateRoot('/cumpridasrdvs');
        }

  

}
