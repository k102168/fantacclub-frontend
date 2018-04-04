import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
@Injectable()
export class GetAllService {

  constructor(private http:Http) { }

  GetAll(){     
    //console.log("entered in get all function")    
    return this.http.get('http://localhost:3000/api/participant')  
    .map((response: Response) => response.json())    
  }

}
