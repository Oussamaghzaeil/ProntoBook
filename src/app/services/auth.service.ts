import { Injectable }   from '@angular/core';
import { Platform }     from '@ionic/angular'
//import { Network }      from '@ionic-native/network';
import { HttpClient, HttpHeaders,  HttpErrorResponse  }  from '@angular/common/http';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService }   from './env.service';
//import { tap }          from 'rxjs/operators';
//import { User }         from '../models/user';
import { NgForm } from '@angular/forms';
//import { Base64 } from '@ionic-native/base64/ngx';
//import { Observable, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private headers = new Headers();
  isLoggedIn = false;  
  coletionsData:any;
  constructor(  
    private http: HttpClient, 
    private platform : Platform,       
    //private network: Network,      
    private env: EnvService,
    private alertService: AlertService,    
    //private base64: Base64         
  ) { 
    this.headers.append('Content-Type', 'application/json');    
  }

  /*
  CheckConnectivity() {
    this.platform.ready().then(() => {
      // if no internet, notice is a string
      if (this.network.type == 'none' ) {         
        this.alertService.presentAlert({
          pTitle:'ATENÇÃO',
          pSubtitle:'Autendicação no Sistema',
          pMessage:'Não existe conexão de dados no momento. Tente novamente'
        });
      } else {
          return false;
      }
    })
  }
  */
  // função para verificar conexão de Host Engine API
  EngineStatusConection = function(host:string) {
    var started = new Date().getTime();
    var url = host
    fetch(url).then(response=>{
        if (response.status === 200) {
            return response.statusText;
        } else {
            throw new Error('Algo deu errado no servidor da EngineAPI!');
        }
    }
    ).then(response=>{
        console.debug(response);        
        sessionStorage.setItem('EngineStatusConection', "ON");
        return true;       
    }
    ).catch(error=>{
        //console.error(error);
        sessionStorage.setItem('EngineStatusConection', 'OFF');
        return false;
    }
    );
  }  

  /*
  private handleError(error: HttpErrorResponse) {
    console.log("Passa aqui!!!")
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  */

  Login = async function(form : NgForm) {    
    //--------------------------------------------------------------------------------------------    
    // Função Login 
    // Criação / Atualização: 24/07/2019 as 15:35          
    // Por Gilson DeLima    
    //--------------------------------------------------------------------------------------------
    //this.alertService.showLoader("Processando... Aguarde por favor!!!");    

    let ParamDataJson = btoa(JSON.stringify(form.value)); // encode string  
    let strDataJson = atob(ParamDataJson);                // decode string
    //console.log(strDataJson); 
    let ParamHashkey = sessionStorage.SessionHashkey;          

    const paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/authentication?';
    const paramsAPI = "DataJson=" + ParamDataJson; //+ "&Hashkey="+ParamHashkey;
    
    const EngineAPI = paramUrlAPI + paramsAPI       
    return new Promise((resolve, reject) => {      
        this.coletionsData = this.http.get(EngineAPI);
        this.coletionsData.subscribe(          
        data =>  {
            if (data[0].success) {            
              //sessionStorage.setItem('SessionUser', JSON.stringify(data[0].results));
              sessionStorage.setItem('SessionUser', data[0].results);
              sessionStorage.setItem("SessionHashkey", data[0].hashkey);  
              sessionStorage.setItem("SessionConection", "1");                      
            } else {            
              sessionStorage.setItem("SessionConection", "0");              
              this.alertService.presentAlert({pTitle:'ATENÇÃO',pSubtitle:'Autendicação no Sistema',pMessage:data[0].message} );              
            }
            resolve(data);
            },
        (error: any) => 
          { 
            this.alertService.presentAlert({pTitle:"Atenção",pSubtitle:"Servidor Indisponível. Tente mais tarde!!!",pMessage:"Status Error:"+error.status +" | "+error.statusText} );
            console.log("Error: ", error);
          }
        ); 
    });
    
  }  
  
  Register = async function(form : NgForm, pParamEntidadeDB : string ) {      
    //--------------------------------------------------------------------------------------------    
    // Função Login 
    // Criação / Atualização: 29/07/2019 as 10:42          
    // Por Gilson DeLima    
    //--------------------------------------------------------------------------------------------
    //this.alertService.showLoader("Processando... Aguarde por favor!!!");        
    let ParamDataJson = btoa(JSON.stringify(form.value)); // encode string  
    let strDataJson = atob(ParamDataJson);                // decode string
    //console.log(strDataJson);              
    
    const paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/register?';
    const paramsAPI = "EntidadeDB="+pParamEntidadeDB +"&DataJson=" + ParamDataJson;
    
    const EngineAPI = paramUrlAPI + paramsAPI
    return new Promise(resolve => {
      this.coletionsData = this.http.get(EngineAPI);
      this.coletionsData.subscribe(data => {                                    
        resolve(data);      
        //console.log(data);                              
      },
      (error: any) => 
          { 
            this.alertService.presentAlert({pTitle:"Atenção",pSubtitle:"Servidor Indisponível. Tente mais tarde!!!",pMessage:"Status Error:"+error.status +" | "+error.statusText} );
            console.log("Error: ", error);
          }
      );   
    })  
    
  }
  EngineQueryStoreProc = async function(form : NgForm, pParamEntidadeDB : string, pHashkey : string ) {    
    //--------------------------------------------------------------------------------------------    
    // Função Login 
    // Criação / Atualização: 29/07/2019 as 10:42          
    // Por Gilson DeLima    
    //--------------------------------------------------------------------------------------------
    //this.alertService.showLoader("Processando... Aguarde por favor!!!");        
    let ParamDataJson = btoa(JSON.stringify(form.value)); // encode string  
    //let strDataJson = atob(ParamDataJson);                // decode string
    //console.log(strDataJson);              

    const paramUrlAPI = this.env.API_HOST + this.env.API_URL + '/StoreProcExec?';
    const paramsAPI = "EntidadeDB="+pParamEntidadeDB +"&DataJson=" + ParamDataJson + "&Hashkey="+pHashkey;
    
    const EngineAPI = paramUrlAPI + paramsAPI
    return new Promise(resolve => {
      this.coletionsData = this.http.get(EngineAPI);
      this.coletionsData.subscribe(data => {                                    
        resolve(data);      
        console.log(data);                              
      },
      (error: any) => 
          { 
            this.alertService.presentAlert({pTitle:"Atenção",pSubtitle:"Servidor Indisponível. Tente mais tarde!!!",pMessage:"Status Error:"+error.status +" | "+error.statusText} );
            console.log("Error: ", error);
          }
      );   
    })  
  }
  
}