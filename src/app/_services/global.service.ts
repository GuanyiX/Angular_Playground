import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public login: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  constructor() { }

  public updateLoginStatus(isLoggedIn: boolean): void {
    this.login.next(isLoggedIn);
  }
}
