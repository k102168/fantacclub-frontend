import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
//import {Observable} from 'rxjs/Observable';
//import {catchError} from 'rxjs/operators';

import 'rxjs/add/operator/map';


@Injectable()
export class GetLeaderBoardService {

  constructor(private http: Http) { }

  getLeaderBoard(){

    return this.http.get('http://localhost:3000/api/leaderboard')  
    .map((response: Response) => response.json())  
  }

}




