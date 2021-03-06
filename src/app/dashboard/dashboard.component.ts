import { Component, OnInit } from '@angular/core';
// import * as Chartist from 'chartist';
import { GetAllService} from '../services/participants/get-all.service';
import { GetLeaderBoardService} from '../services/get-leader-board.service';
import { GetAllCompetetionService} from '../services/competition/get-all-competetion.service';
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  dashboarddata = [
    { name :'Furqan',place:'punjab' ,users :'5', fee :'5000', pricemoney:20000},
    ];
    
    NoOfPigeons=2;
   public Pigeons =range(1,this.NoOfPigeons); 


    leaderBoard: any={};
  constructor( 
    private Getparticpants : GetAllService,
    private getLeaderBoardService : GetLeaderBoardService,
    private getAllCompetetionService : GetAllCompetetionService,
  ) { 
    this.getLeaderBoard();
    this.getCompetition();
  }
  // startAnimationForLineChart(chart){
  //     let seq: any, delays: any, durations: any;
  //     seq = 0;
  //     delays = 80;
  //     durations = 500;

  //     chart.on('draw', function(data) {
  //       if(data.type === 'line' || data.type === 'area') {
  //         data.element.animate({
  //           d: {
  //             begin: 600,
  //             dur: 700,
  //             from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
  //             to: data.path.clone().stringify(),
  //             easing: Chartist.Svg.Easing.easeOutQuint
  //           }
  //         });
  //       } else if(data.type === 'point') {
  //             seq++;
  //             data.element.animate({
  //               opacity: {
  //                 begin: seq * delays,
  //                 dur: durations,
  //                 from: 0,
  //                 to: 1,
  //                 easing: 'ease'
  //               }
  //             });
  //         }
  //     });

  //     seq = 0;
  // };
  // startAnimationForBarChart(chart){
  //     let seq2: any, delays2: any, durations2: any;

  //     seq2 = 0;
  //     delays2 = 80;
  //     durations2 = 500;
  //     chart.on('draw', function(data) {
  //       if(data.type === 'bar'){
  //           seq2++;
  //           data.element.animate({
  //             opacity: {
  //               begin: seq2 * delays2,
  //               dur: durations2,
  //               from: 0,
  //               to: 1,
  //               easing: 'ease'
  //             }
  //           });
  //       }
  //     });

  //     seq2 = 0;
  // };

  getLeaderBoard(){
    this.getLeaderBoardService.getLeaderBoard().subscribe(res=>{
      this.leaderBoard = {
        activeCompetitionName: res[0].activeCompetitionName,
        data:res,
        pigeonLand:res[0].pigeonLand
      }
      console.log('getLeaderBoardService: ',this.leaderBoard)
    })
  }

  getCompetition(){
    this.getAllCompetetionService.GetAllCompetition().subscribe(res=>{
      console.log("compe",res)
      this.leaderBoard.flyTime = '06:00:00'
    })
  }

  ngOnInit() {
    console.log(this.leaderBoard)
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    // this.Getparticpants.GetAll().subscribe(data=>{
    //   console.log(data);  
    // })
      // const dataDailySalesChart: any = {
      //     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      //     series: [
      //         [12, 17, 7, 17, 23, 18, 38]
      //     ]
      // };

    //  const optionsDailySalesChart: any = {
    //       lineSmooth: Chartist.Interpolation.cardinal({
    //           tension: 0
    //       }),
    //       low: 0,
    //       high: 50, 
    //       chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
    //   }

      //var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      //this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      // const dataCompletedTasksChart: any = {
      //     labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
      //     series: [
      //         [230, 750, 450, 300, 280, 240, 200, 190]
      //     ]
      // };

    //  const optionsCompletedTasksChart: any = {
    //       lineSmooth: Chartist.Interpolation.cardinal({
    //           tension: 0
    //       }),
    //       low: 0,
    //       high: 1000, 
    //       chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
    //   }

     // var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
     // this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      // var dataEmailsSubscriptionChart = {
      //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      //   series: [
      //     [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

      //   ]
      // };
      // var optionsEmailsSubscriptionChart = {
      //     axisX: {
      //         showGrid: false
      //     },
      //     low: 0,
      //     high: 1000,
      //     chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      // };
      // var responsiveOptions: any[] = [
      //   ['screen and (max-width: 640px)', {
      //     seriesBarDistance: 5,
      //     axisX: {
      //       labelInterpolationFnc: function (value) {
      //         return value[0];
      //       }
      //     }
      //   }]
      // ];
      //var emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
     // this.startAnimationForBarChart(emailsSubscriptionChart);
     

  }

}
