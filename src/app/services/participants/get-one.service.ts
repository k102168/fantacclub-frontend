import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
@Injectable()
export class GetOneService {

  constructor(private http:Http) { }

  getOne(user){      
    return this.http.get('http://localhost:8080/api/SaveUser/', user)  
            .map((response: Response) =>response.json())              
  }  
}
