import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
@Injectable()
export class GetAllCompetetionService {

  constructor(private http:Http,) { }
<<<<<<< HEAD
  GetAllCompetition(){       
    return this.http.get('http://localhost:3000/api/competition')  
=======
  GetAllCompetition(){     
    //console.log("entered in get all function")    
    return this.http.get('api/competition')  
>>>>>>> e9ed0a443e170740b010a82ab662b8dd08df5029
    .map((response: Response) => response.json())    
  }
}
