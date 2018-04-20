import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SigninService} from '../services/login/signin.service';
import { isNull } from 'util';
@Component({
  selector: 'app-compadmin',
  templateUrl: './compadmin.component.html',
  styleUrls: ['./compadmin.component.scss']
})
export class CompadminComponent implements OnInit {
  resposnseddata;
  alertMessage:'Your Name or password is incorrect'; 
  
    constructor(private router:Router,
                private signinservice:SigninService,
                ) { }

   //usersignIn
   SigninUser(form){
      this.signinservice.Userlogin(form.value).subscribe(data=>{
      this.resposnseddata=data;
        if(this.resposnseddata!=isNull){
            this.router.navigateByUrl('/competetionedit');
          }
        },err => this.logError(err));  
    }


    //log error Function
    logError(err: any) {   
        console.log(this.alertMessage);
       
    }

  ngOnInit() {}
}
