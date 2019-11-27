import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {  
  //API_HOST   = "http://200.196.251.212"; 
  //API_HOST   = "http://localhost"; 
  API_HOST   = "http://200.196.251.212"; 
  API_NAME   ="/ServiceProntoBook/"

  //API_HOST = "http://192.168.0.121";
  //API_HOST = "http://192.168.15.13";  
  API_URL = "/ServiceProntoBook/api/Geral";  
  APP_NAME  = "ProntoBook";
    constructor() { }
}
