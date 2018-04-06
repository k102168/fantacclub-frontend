import { Component, OnInit,Pipe, PipeTransform ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { FilterPipe} from '../filter.pipe';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import {GetAllService} from '../services/participants/get-all.service'
import{GetAllCompetetionService} from '../services/competition/get-all-competetion.service'
import {PostcompetitionService } from '../services/competition/postcompetition.service'
// import {UsereditcomponentComponent}  from '../usereditcomponent/usereditcomponent.component';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  
})
export class PanelComponent implements OnInit {
  Repdata;
  constructor(private newService :GetAllService,private router:Router,private getallcompetetion:GetAllCompetetionService,
  private postcompetetion:PostcompetitionService) { }

  ngOnInit() {
    // this.newService.GetAll().subscribe(data =>  {
    // this.Repdata = data
    // console.log(data);
    // })
  
    this.getallcompetetion.GetAllCompetition().subscribe(data =>  {
      this.Repdata = data
      console.log(this.Repdata);
      // this.Repdata[0].name="Mahh";
      // console.log(this.Repdata[0].name);
      // console.log('here');
    })
      }
    Getobject(competitionobject):void
  {
    console.log("competetionobject");
    console.log(competitionobject._id);
     //this.router.navigateByUrl('/usereditcomponent');
    //this.router.navigate(['/usereditcomponent', {p1: competitionobject }]);
  }
  AddCompetition(form){
    this.postcompetetion.saveCompetetion(form.value).subscribe(); 
    console.log("Addcomepetition form");  
    console.log(form.value);
   // location.reload();
  }
}
