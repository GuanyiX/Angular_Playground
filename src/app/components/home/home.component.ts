import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IDeactivateComponent } from 'src/app/_guards/unsaved.guard';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // click_count = 0;
  // pages_number = 2;
  constructor() {}

  ngOnInit() {}

  // @HostListener('window:beforeunload', ['$event'])
  // beforeUnloadHandler() {
  //   return false;
  // }

  canExit(): boolean {
    if (confirm('Do you wish to Please confirm')) {
      return true;
    } else {
      return false;
    }
  }

  // handleClickNext() {
  //   this.click_count = Math.abs((this.click_count + 1) % this.pages_number);
  //   console.log(this.click_count);
  // }

  // handleClickPrev() {
  //   this.click_count = Math.abs((this.click_count - 1) % this.pages_number);
  //   console.log(this.click_count);
  // }
}
