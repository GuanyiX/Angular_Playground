import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { GlobalService } from './_services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playground';
  login: boolean = false;
  path: string = '';
  items: MenuItem[] = [];

  mode: Number = 0;

  constructor(private router: Router, private globalService: GlobalService) {}

  ngOnInit() {
    this.checkUserStatus()
  }

  checkUserStatus() {
    const userInfo = localStorage.getItem('userInfo');
    if(userInfo) {
      this.login = true;
    }
  }

  clearLocalStorage() {
    this.login = false;
    localStorage.clear();
  }

  onMenuClick(element: any) {
    if(element.target.name === 'carousel') {
      this.router.navigateByUrl('/widget/carousel')
    }
    else if(element.target.name === 'logout') {
      this.router.navigateByUrl('/login');
      this.clearLocalStorage();
    }
    else {
      this.router.navigateByUrl('/home');
    }
  }

}
