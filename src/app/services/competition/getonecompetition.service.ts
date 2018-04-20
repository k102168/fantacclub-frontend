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
<<<<<<< HEAD
    let options = new RequestOptions({ params: myParams }); 
    return this.http.get('http://localhost:3000/api/competition/'+id)  
=======
    let options = new RequestOptions({ params: myParams });
    console.log("entered in get One service")    
    return this.http.get('api/competition/'+id)  
>>>>>>> e9ed0a443e170740b010a82ab662b8dd08df5029
    .map((response: Response) => response.json()) 
  }   
}
