import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IDeactivateComponent } from 'src/app/_guards/unsaved.guard';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, IDeactivateComponent {
  constructor(private router: Router) {}

  ngOnInit() {
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler() {
    return false;
  }

  handleClick() {
    this.router.navigate(['/login']);
  }

  canExit(): boolean {
    if (confirm('Do you wish to Please confirm')) {
      return true;
    } else {
      return false;
    }
  }


}
