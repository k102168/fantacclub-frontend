import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';  
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';   
@Injectable()
export class PostcompetitionService {

  constructor(private http:Http,) { }
  saveCompetetion(user){    
     return this.http.post('http://localhost:3000/api/competition', user,)  
             .map((response: Response) =>response.json())              
  }  

}
