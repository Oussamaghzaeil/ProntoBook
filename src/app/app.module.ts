import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SplashPageModule} from './pages/splash/splash.module';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BrMasker4Module } from 'brmasker4';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  
  declarations: [AppComponent],  
  imports: [ TextMaskModule, ReactiveFormsModule, BrMasker4Module,FormsModule ,BrowserModule, HttpClientModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, SplashPageModule,NgxMaskIonicModule.forRoot()],  
  providers: [
    NgxMaskIonicModule,
    StatusBar,
    SplashScreen,
   
    //SplashPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    WebView,
    FilePath,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class ViewsModule {}
