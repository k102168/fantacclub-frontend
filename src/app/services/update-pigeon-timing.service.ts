import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do'; 
@Injectable()
export class UpdatePigeonTimingService {

  constructor(private http:Http) { }
  updatePigeonTime(payload,participantId){ 
    console.log("enter in post participant");
    console.log(payload);
    let url=`http://localhost:3000/api/participant/${participantId.trim()}`
    // return this.http.put(url, payload)  
    //      .map((response: Response) =>response.json())

  }
}
