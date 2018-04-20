import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{GetAllCompetetionService} from '../services/competition/get-all-competetion.service'
@Component({
  selector: 'app-competitionedit',
  templateUrl: './competitionedit.component.html',
  styleUrls: ['./competitionedit.component.scss']
})
export class CompetitioneditComponent implements OnInit {
  Repdata;
  constructor(
    private getallcompetetion:GetAllCompetetionService,
    private router:Router,
  ) { }

  ngOnInit() {
    //Get all competetion
    this.getallcompetetion.GetAllCompetition().subscribe(data =>  {
      console.log(data);
      this.Repdata=data;
    })
  }

  Getobject(competitionobject):void
  {
    console.log("competetionobject");
    console.log(competitionobject._id);
     //this.router.navigateByUrl('/usereditcomponent');
    //this.router.navigate(['/usereditcomponent', {p1: competitionobject }]);
  }
}
