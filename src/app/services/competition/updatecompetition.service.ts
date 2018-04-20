import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';  
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
@Injectable()
export class UpdatecompetitionService {

  constructor(private http:Http,) { }
  updateCompetetion(user){    
    return this.http.put('http://localhost:3000/api/competition',user) 
              .map((response: Response) =>response.json())              
  }  
}
