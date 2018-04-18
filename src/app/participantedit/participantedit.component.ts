import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//get all participants 
import { GetAllService} from '../services/participants/get-all.service'
//get one competitions
import {GetonecompetitionService} from '../services/competition/getonecompetition.service'
//update pigeons timing service
import {UpdatePigeonTimingService} from '../services/update-pigeon-timing.service';
//range function
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
  selector: 'app-participantedit',
  templateUrl: './participantedit.component.html',
  styleUrls: ['./participantedit.component.scss']
})
export class ParticipanteditComponent implements OnInit {
  public NoOfPigeons=7;
    public Pigeonsnum =range(1,this.NoOfPigeons);
  //dummy data
    dashboarddata = [
    { name :'Furqan',pigeon1:"25:20" , pigeon2:"30:30",totaltime:"55:50"},];
    //feilds for get one competetion
    Name: string;
    Place:string;
    User:String;
    Fee:String;
    Pricemoney:String; 
    noofdays:number; 
    Pigeons:String;

    constructor(
    public route:ActivatedRoute,
    private Getparticpants : GetAllService,
    private GetCompetition: GetonecompetitionService,
  ) { }


  pigeonTiming(event,pigeonNumber){
    let payload = {
      pigeonNumber:pigeonNumber,
      landingTime:event
    }
    console.log(payload);
    
  }
  ngOnInit() {
    //getcompetetionid 
    let compid = this.route.snapshot.params['_id'];
    //get all participants
    this.Getparticpants.GetAll().subscribe(data=>{
      let newUser=data.filter(function (singleUser) {
        return singleUser.competitionId === compid;   
      });

      this.GetCompetition.GetOneCompetition(compid).subscribe(data=>{
        console.log("all the data");
        console.log(data);
        // this.Resdata = data;
        this.Name=data.name;
        this.Pricemoney=data.priceMoney;
        this.Place=data.place;
        this.Pigeons=data.pigeons;
        this.noofdays=data.noofdays;
        this.User=data.users;
        this.Fee=data.fee;
        // this.NoOfPigeons =data.pigeons
        // this.LeaderBoard=this.Resdata.leaderBoard;
      })

      console.log('new user',newUser);
    })

  }

}
