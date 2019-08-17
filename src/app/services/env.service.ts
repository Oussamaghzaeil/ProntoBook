import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {  
  API_HOST   = "http://200.196.251.212"; 
  //API_HOST = "http://192.168.0.123"
  //API_HOST = "http://192.168.15.9";  
  API_URL = "/ServiceEcupom/api/eCupom33";  
  APP_NAME  = "e-Cupom33";
    constructor() { }
}
