import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { concat, from, of } from 'rxjs';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  value: number = 0;
  behaviorResult: number = 3;
  asyncResult: number = 0;
  replayResult: number = 0;
  subjectResult: number = 8;

  mac = 'command+g';
  win = 'ctrl+g';
  isMac = navigator.platform.includes('Mac');

  constructor(
    private router: Router,
    private dataService: DataService,
    private _hotkeysService: HotkeysService
  ) {
    this._hotkeysService.add(new Hotkey('command+g', (event: KeyboardEvent): boolean => {
      console.log('typed hotkey');
      return false;
    }))
  }

  ngOnInit(): void {
    this.dataService.getCurrentResult.subscribe((data: number) => {
      this.behaviorResult = data;
    });

    this.dataService.getCurrentResultAS.subscribe((data: number) => {
      this.asyncResult = data;
    });

    this.dataService.getCurrentResultRS.subscribe((data: number) => {
      this.replayResult = data;
    });

    this.dataService.getCurrentResultSubject.subscribe((data: number) => {
      this.subjectResult = data;
    });

    // subscribe to print every thing
    // combineLatest([
    //   this.dataService.getCurrentResult,
    //   this.dataService.getCurrentResult
    // ]).subscribe(val => console.log(val))

    // // only all observables are completed, it can print out the result
    // forkJoin([
    //   this.dataService.getCurrentResultAS
    // ]).subscribe(val => console.log(val))
  }

  handleHomeClick() {
    this.router.navigate(['/home']);
  }

  handleSaveClick() {
    this.dataService.updateCurrentResult(this.value);
  }

  handleSubscribe() {
    // trigger replaySubject
    this.dataService.getCurrentResultRS.subscribe((data: number) => {
      console.log(data);
    });
  }

  handleBehaviorSubscribe() {
    this.dataService.getCurrentResult.subscribe((data: number) => {
      console.log(data);
    });
  }

  handleSubjectSubscribe() {
    this.dataService.getCurrentResultSubject.subscribe((data: number) => {
      console.log(data);
    });
  }

  // ******** concat *********
  concatValue: number = 0;

  triggerConcat() {
    concat(of(1), of(2), of(3)).subscribe((data) => {
      this.concatValue = data;
    });
  }

  // from

  addOn(value: number) {
    return value + 1;
  }

  triggerFrom() {
    const subscription$ = from(() => this.addOn(1));
    console.log(subscription$);
  }

  // switchMap vs concatMap vs mergeMap
  triggerSwitchMap() {}
}
