import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../shared/bridge.service';

@Component({
  selector: 'app-name-a',
  templateUrl: './name-a.component.html',
  styleUrls: ['./name-a.component.css']
})
export class NameAComponent implements OnInit {

  counter : number = 0;
  constructor( public bridgeService : BridgeService) { }


  clickMe(){
    this.counter++
    this.bridgeService.changeMessage(this.counter);
  }


  ngOnInit(): void {
  }

}
