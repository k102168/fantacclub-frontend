import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do'; 
@Injectable()
export class UpdatePigeonTimingService {

  constructor(private http:Http) { }
<<<<<<< HEAD
=======
  updatePigeonTime(payload,participantId){ 
    console.log("enter in post participant");
    console.log(payload);
    let url=`api/participant/${participantId.trim()}`
    // return this.http.put(url, payload)  
    //      .map((response: Response) =>response.json())
>>>>>>> e9ed0a443e170740b010a82ab662b8dd08df5029

  
  updatePigeonTime(payload,participantId){ 
        let url=`http://localhost:3000/api/participant/${participantId.trim()}`
        return this.http.put(url, payload)  
            .map((response: Response) =>response.json())
  }
}
