import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private currentModeSource = new BehaviorSubject<Number>(0);
  currentMode = this.currentModeSource.asObservable()

  constructor() { }

  public get getCurrentMode(): Number{
    return this.currentModeSource.value;
  }

  updateCurrentMode(status: Number) {
    this.currentModeSource.next(status)
  }
}
