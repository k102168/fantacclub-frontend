import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
@Injectable()
export class GetAllCompetetionService {

  constructor(private http:Http,) { }
  GetAllCompetition(){       
    return this.http.get('http://localhost:3000/api/competition')  
    .map((response: Response) => response.json())    
  }
}
