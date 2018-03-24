import { Component, OnInit,Pipe, PipeTransform ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { FilterPipe} from '../filter.pipe';


// import {UsereditcomponentComponent}  from '../usereditcomponent/usereditcomponent.component';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  
})
export class PanelComponent implements OnInit {
  
  heroes = [
  {id: 11, name: 'Furqan'},
  { id: 12, name: 'Owais' },
  { id: 13, name: 'Safi bhai' },
  { id: 14, name: 'RAyan' },
  { id: 15, name: 'noman' },
  { id: 16, name: 'irafan' },
  { id: 17, name: 'farhan' },
  { id: 18, name: 'dukan' },
  { id: 19, name: 'khakan' },
  { id: 20, name: 'gul khan' }
  
  ];
  message:"hello";
  constructor() { }

  ngOnInit() { }
  onsubmit(hero):void
  {
    // this.selectedhero = hero;
    // console.log(this.selectedhero);
  }
}
