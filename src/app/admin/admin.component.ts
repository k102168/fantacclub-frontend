import { Component, OnInit } from '@angular/core';
import { NgForm   ,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {SigninService} from '../services/login/signin.service'
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { isNull } from 'util';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    resposnseddata;
    alertMessage;
  
    //usersignIn
    SigninUser(form){
          this.signinservice.Userlogin(form.value).subscribe(data=>{
          this.resposnseddata=data;
          console.log(this.resposnseddata,"data");
          if(this.resposnseddata!=isNull){
            this.router.navigateByUrl('/panel');
          }
        },err => this.logError(err));  
    }
    
    //log error Function
    logError(err: any) {    
          console.log('Youser Name or password is incorrect');
    }
  
    constructor(private router:Router,
  private signinservice:SigninService,
  ) { }

  ngOnInit() {}
}
