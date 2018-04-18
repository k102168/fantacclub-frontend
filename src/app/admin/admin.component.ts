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
message;
  constructor(private router:Router,
  private signinservice:SigninService,
  ) { }
SigninUser(form){
console.log("enter in signin function");
  console.log(form.value);
  //this.router.navigateByUrl('/panel');
  
 this.signinservice.Userlogin(form.value).subscribe(data=>{
    console.log(data);
    this.resposnseddata=data;

    if(this.resposnseddata!=isNull)
    {
      console.log("enter in if condition");
      console.log(this.resposnseddata);
      this.message="";
      this.router.navigateByUrl('/competetionedit');
    }
    else{
      console.log("entered in else condition");
      this.message="you user name or id is inccorect";
      console.log(this.message)
    }
  });
  //console.log(this.resposnseddata.token);
}
  ngOnInit() {
  }

}
