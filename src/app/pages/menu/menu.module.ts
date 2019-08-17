import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
 
const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'options',
        loadChildren: '../menuoptions/menuoptions.module#OptionsPageModule'
      },
      {
        path: 'minhaconta',
        loadChildren: '../minhaconta/minhaconta.module#MinhaContaPageModule'
      },
      {
        path: 'second/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      }
    ]
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }