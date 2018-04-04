import { Component, OnInit } from '@angular/core';
import { NgForm   ,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {SigninService} from '../services/login/signin.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
resposnseddata;
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
    if(this.resposnseddata!=null)
    {
      this.router.navigateByUrl('/panel');
    }
    
  });
  //console.log(this.resposnseddata.token);
}
  ngOnInit() {
  }

}
