import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, AsyncSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentResultBS = new BehaviorSubject<number>(0);
  currentResultRS = new ReplaySubject<number>(2);
  currentResultAS = new AsyncSubject<number>();
  currentResultSubject = new Subject<number>();

  constructor() {}

  updateCurrentResult(value: number) {
    this.currentResultBS.next(value);
    this.currentResultAS.next(value);
    this.currentResultRS.next(value);

    this.currentResultSubject.next(value);

    if(value > 6) this.currentResultAS.complete();
  }

  public get getCurrentResult(): Observable<number> {
    return this.currentResultBS;
  }

  public get getCurrentResultRS(): Observable<number> {
    return this.currentResultRS;
  }

  public get getCurrentResultAS(): Observable<number> {
    return this.currentResultAS;
  }

  public get getCurrentResultSubject(): Observable<number> {
    return this.currentResultSubject;
  }
}
