import { Component, OnInit,Pipe, PipeTransform ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { FilterPipe} from '../filter.pipe';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import {GetAllService} from '../services/participants/get-all.service'
import{GetAllCompetetionService} from '../services/competition/get-all-competetion.service'
import {PostcompetitionService } from '../services/competition/postcompetition.service'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  
})
export class PanelComponent implements OnInit {
  Resdata;

    constructor(private newService :GetAllService,
                private router:Router,
                private getallcompetetion:GetAllCompetetionService,
                private postcompetetion:PostcompetitionService) { }

  //get competetionobject
   Getobject(competitionobject):void{}
  
   AddCompetition(form){
            // postcompetetion
            this.postcompetetion.saveCompetetion(form.value).subscribe(); 
            location.reload();
  }
   ngOnInit() {
          //getallcompetition
            this.getallcompetetion.GetAllCompetition().subscribe(data =>  {this.Resdata = data })
      }


   
}
