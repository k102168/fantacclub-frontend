import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GetonecompetitionService} from '../services/competition/getonecompetition.service'
import {UpdatecompetitionService} from '../services/competition/updatecompetition.service'
import{ PostService} from '../services/participants/post.service'
class Range implements Iterable<number> {
  constructor(
      public readonly low: number,
      public readonly high: number,
      public readonly step: number = 1
  ) {
  }

  *[Symbol.iterator]() {
      for (let x = this.low; x <= this.high; x += this.step) {
          yield x;
      }
  }
}
function range(low: number, high: number) {
  return new Range(low, high);
}

@Component({
  selector: 'app-usereditcomponent',
  templateUrl: './usereditcomponent.component.html',
  styleUrls: ['./usereditcomponent.component.scss'] 
})


export class UsereditcomponentComponent implements OnInit {

  dashboarddata = [
    { name :'Furqan',place:'punjab' ,users :'5', fee :'5000', pricemoney:20000},
    ];
    
    NoOfPigeons=2;
   public Pigeonsnum =range(1,this.NoOfPigeons); 
 Resdata;
  id:any;
Name: string;Place:string;User:String;Fee:String;Pricemoney:String; LeaderBoard:number; Pigeons:String;
  constructor(public route:ActivatedRoute,
   private GetCompetition: GetonecompetitionService,
  private UpdateCompetition:UpdatecompetitionService,
  private postparticipants: PostService,
  ) {
  
  }
  
  ngOnInit() {
     this.id = this.route.snapshot.params['_id'];
    console.log("in user edit component");
    console.log(this.id);
    this.GetCompetition.GetOneCompetition(this.id).subscribe(data=>{
      console.log("all the data");
      console.log(data);
      this.Resdata = data;
      this.Name=this.Resdata.name;
      this.Pricemoney=this.Resdata.priceMoney;
      this.Place=this.Resdata.place;
      this.Pigeons=this.Resdata.pigeons;
      this.LeaderBoard=this.Resdata.LeaderBoard;
      this.User=this.Resdata.users;
      this.Fee=this.Resdata.fee;
      this.LeaderBoard=this.Resdata.leaderBoard; 
    })
    
  }
  // getOnecompetition()
  // {
    
  //   // this.getallcompetetion.GetAllCompetition().subscribe(data =>  {
  //   //   this.Repdata = data
  //   //   console.log(this.Repdata);
  // }
  EditCompetetion(form){
    console.log("enter in Edit competetion Function");
    console.log(form.value);
    this.UpdateCompetition.updateCompetetion(form.value).subscribe();
  }
  Addparticipant(form)
  {
    console.log("enter in Addparticipant Function");
    console.log(form.value);
    this.postparticipants.Post(form.value).subscribe();
  }
  


}
