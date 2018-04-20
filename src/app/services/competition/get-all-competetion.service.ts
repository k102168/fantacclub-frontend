import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
@Injectable()
export class GetAllCompetetionService {

  constructor(private http:Http,) { }
  GetAllCompetition(){     
    //console.log("entered in get all function")    
    return this.http.get('api/competition')  
    .map((response: Response) => response.json())    
  }
}
