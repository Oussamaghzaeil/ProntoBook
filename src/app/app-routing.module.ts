import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },  
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },  
  //{ path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },  
  { path: 'recuperasenha', loadChildren: './pages/recuperasenha/recuperasenha.module#RecuperasenhaPageModule' },
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }