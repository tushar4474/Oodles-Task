import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../shared/bridge.service';

@Component({
  selector: 'app-name-b',
  templateUrl: './name-b.component.html',
  styleUrls: ['./name-b.component.css']
})
export class NameBComponent implements OnInit {



  ngOnInit(): void {
  } counterValue : number;
  constructor(public bridgeService : BridgeService) {
    this.bridgeService.currentMessage.subscribe(res =>{
      this.counterValue = res;
    })
   }




}
