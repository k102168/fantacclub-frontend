import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do'; 
import { tick } from '@angular/core/testing';
@Injectable()
export class SigninService {

  constructor(private http:Http,) { }
  Userlogin(user){    
    console.log("enter in  UserLoginFunction");    
    console.log(user);  
    return this.http.post('http://localhost:3000/api/account/login', user) 
             .map((response: Response) =>response.json())              
              
  }  
}
