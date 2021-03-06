import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do'; 
@Injectable()
export class GetonecompetitionService {

  constructor(private http:Http,) { }
  GetOneCompetition(id){     
    let myParams = new URLSearchParams();
    myParams.append('_id', id);
    let options = new RequestOptions({ params: myParams }); 
    return this.http.get('http://localhost:3000/api/competition/'+id)  
    .map((response: Response) => response.json()) 
  }   
}
