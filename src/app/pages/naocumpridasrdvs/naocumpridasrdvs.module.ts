import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NaocumpridasrdvsPage } from './naocumpridasrdvs.page';

const routes: Routes = [
  {
    path: '',
    component: NaocumpridasrdvsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NaocumpridasrdvsPage]
})
export class NaocumpridasrdvsPageModule {}
