import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GetonecompetitionService} from '../services/competition/getonecompetition.service'
import {UpdatecompetitionService} from '../services/competition/updatecompetition.service'
import{ PostService} from '../services/participants/post.service'
import { GetAllService} from '../services/participants/get-all.service'
import { filter } from 'rxjs/operator/filter';
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

  Resdata;
  id:any;
  getalldata;
  Name: string;
  Place:string;
  User:String;
  Fee:String;
  Pricemoney:String; 
  noofdays:number; 
  Pigeons:String;
  participantname :string;
  participantdata;
  
 
  constructor(public route:ActivatedRoute,
    private GetCompetition: GetonecompetitionService,
    private UpdateCompetition:UpdatecompetitionService,
    private postparticipants: PostService,
    private Getparticpants : GetAllService,
  ) {}

      EditCompetetion(form){
        this.UpdateCompetition.updateCompetetion(form.value).subscribe();
        location.reload();
      }
      Addparticipant(form){
        console.log('participants add form',form.value);
        this.postparticipants.Post(form.value).subscribe();
        location.reload();
      }
      ngOnInit() {
         this.id = this.route.snapshot.params['_id'];
        let compid = this.route.snapshot.params['_id'];
                //get The Competition For Edit
                this.GetCompetition.GetOneCompetition(this.id).subscribe(data=>{
                  this.Name=data.name;
                  this.Pricemoney=data.priceMoney;
                  this.Place=data.place;
                  this.Pigeons=data.pigeons;
                  this.noofdays=data.noofdays;
                  this.User=data.users;
                  this.Fee=data.fee;
                })
                
                this.Getparticpants.GetAll().subscribe(data=>{
                  let filterdParticipants=data.filter(function (singleUser) {
                      return singleUser.competitionId === compid;  
                  });
                  this.participantdata=filterdParticipants;  
                  console.log(this.participantdata); 
                })
                
}
}
