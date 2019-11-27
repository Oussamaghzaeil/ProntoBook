import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },  
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },  
  { path: 'recuperasenha', loadChildren: './pages/recuperasenha/recuperasenha.module#RecuperasenhaPageModule' },
  { path: 'devices', loadChildren: './pages/devices/devices.module#DevicesPageModule' },
  { path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' },  
  { path: 'noticias', loadChildren: './pages/noticias/noticias.module#NoticiasPageModule' },
  { path: 'agenda', loadChildren: './pages/agenda/agenda.module#AgendaPageModule' } ,
  { path: 'hospitais', loadChildren: './pages/hospitais/hospitais.module#HospitaisPageModule' },
  { path: 'incluirhosp', loadChildren: './pages/incluirhosp/incluirhosp.module#IncluirhospPageModule' },
  { path: 'edithosp', loadChildren: './pages/edithosp/edithosp.module#EdithospPageModule' },
  { path: 'consultrdv', loadChildren: './pages/consultrdv/consultrdv.module#ConsultrdvPageModule' },
  { path: 'prontuarios', loadChildren: './pages/prontuarios/prontuarios.module#ProntuariosPageModule' },
  { path: 'novopaciente', loadChildren: './pages/novopaciente/novopaciente.module#NovopacientePageModule' },
  { path: 'novordv', loadChildren: './pages/novordv/novordv.module#NovordvPageModule' },
  { path: 'rdvs', loadChildren: './pages/rdvs/rdvs.module#RdvsPageModule' },
  { path: 'cancelarrdvs', loadChildren: './pages/cancelarrdvs/cancelarrdvs.module#CancelarrdvsPageModule' },
  { path: 'cumpridasrdvs', loadChildren: './pages/cumpridasrdvs/cumpridasrdvs.module#CumpridasrdvsPageModule' },
  { path: 'naocumpridasrdvs', loadChildren: './pages/naocumpridasrdvs/naocumpridasrdvs.module#NaocumpridasrdvsPageModule' },
  { path: 'novoevento', loadChildren: './pages/novoevento/novoevento.module#NovoeventoPageModule' },
  { path: 'atender', loadChildren: './pages/atender/atender.module#AtenderPageModule' },
  { path: 'exames', loadChildren: './pages/exames/exames.module#ExamesPageModule' },
  { path: 'fisico', loadChildren: './pages/fisico/fisico.module#FisicoPageModule' },
  { path: 'consultfisico', loadChildren: './pages/consultfisico/consultfisico.module#ConsultfisicoPageModule' },
  { path: 'editfisico', loadChildren: './pages/editfisico/editfisico.module#EditfisicoPageModule' },
  { path: 'sangue', loadChildren: './pages/sangue/sangue.module#SanguePageModule' },
  { path: 'consultsangue', loadChildren: './pages/consultsangue/consultsangue.module#ConsultsanguePageModule' },
  { path: 'editsangue', loadChildren: './pages/editsangue/editsangue.module#EditsanguePageModule' },
  { path: 'estaticas', loadChildren: './pages/estaticas/estaticas.module#EstaticasPageModule' },
  { path: 'grupos', loadChildren: './pages/grupos/grupos.module#GruposPageModule' },





  

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }