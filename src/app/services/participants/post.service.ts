import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
@Injectable()
export class PostService {

  constructor(private http:Http) { }
  Post(user){ 
    console.log("enter in post participant");
    console.log(user);     
    return this.http.post('http://localhost:3000/api/participant/', user)  
         .map((response: Response) =>response.json())
  }
}
