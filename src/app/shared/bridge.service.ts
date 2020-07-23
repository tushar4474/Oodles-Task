import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  constructor() { }

  private currentHeaderMessage = new BehaviorSubject(0);
  currentMessage: any = this.currentHeaderMessage.asObservable();



  public changeMessage(message: number) {
    this.currentHeaderMessage.next(message);
  }


}
