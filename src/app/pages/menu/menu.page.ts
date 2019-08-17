import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';
 
  pages = [
    {
      title: 'Menu Principal',
      url: '/menu/first',
      icon : 'menu'
    },
    {
      title: 'Minha Conta',
      url: '/menu/minhaconta',
      icon : 'person'
    },   
    {
      title: 'Configurações',
      url: '/menu/menuoptions/tabs/config',
      icon : 'settings'
    }     
  ];
 
  constructor(
      private router: Router) {
      this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }

    });
  }

  ngOnInit() {
 
  }
 
}
