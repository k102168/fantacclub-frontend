import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';  
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';   
@Injectable()
export class PostcompetitionService {

  constructor(private http:Http,) { }
  saveCompetetion(user){    
<<<<<<< HEAD
     return this.http.post('http://localhost:3000/api/competition', user,)  
=======
    console.log("enter in post competition");    
    console.log(user);  
     return this.http.post('api/competition', user,)  
>>>>>>> e9ed0a443e170740b010a82ab662b8dd08df5029
             .map((response: Response) =>response.json())              
  }  

}
