import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compadmin',
  templateUrl: './compadmin.component.html',
  styleUrls: ['./compadmin.component.scss']
})
export class CompadminComponent implements OnInit {

  constructor(
    private router:Router,
    
  ) { }

  ngOnInit() {
  }

  SigninUser(form){
      this.router.navigateByUrl('/competetionedit');  
    }
}
