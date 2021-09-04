import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './_services/global.service';

enum Menu {
  STYLE = 'style',
  DATA = 'data',
  COMMUNICATION = 'communication',
  WIDGET = 'widgets',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Playground';
  login: boolean = false;
  selectedMenu: string = Menu.STYLE;
  loading: boolean = false;

  constructor(private router: Router, private globalService: GlobalService) {}

  ngOnInit() {
    this.selectedMenu = '';
    this.checkUserStatus();
  }

  checkUserStatus() {
    this.globalService.login.subscribe((loggedIn) => {
      if (loggedIn) {
        this.login = true;
      } else {
        if (localStorage.getItem('userInfo')) {
          this.login = true;
        } else {
          this.login = false;
        }
      }
    });
  }

  clearLocalStorage() {
    this.login = false;
    localStorage.clear();
  }

  loadData(urlPath: string) {
    setTimeout(() => {
      this.router.navigateByUrl(urlPath);
      this.loading = false;
    }, 1000);
  }

  onMenuClick(element: any) {
    this.loading = true;

    switch (element.target.name) {
      case 'animation': {
        this.selectedMenu = Menu.STYLE;
        this.loadData('/animation');
        break;
      }
      case 'fxLayout': {
        this.selectedMenu = Menu.STYLE;
        this.loadData('/fxLayout');
        break;
      }
      case 'rxjs': {
        this.selectedMenu = Menu.DATA;
        this.router.navigateByUrl('/rxjs');
        this.loadData('/rxjs');
        break;
      }
      case 'ngrx': {
        this.selectedMenu = Menu.DATA;
        this.router.navigateByUrl('/ngrx');
        this.loadData('/ngrx');
        break;
      }
      case 'socket': {
        this.selectedMenu = Menu.COMMUNICATION;
        this.router.navigateByUrl('/websocket');
        this.loadData('/websocket');
        break;
      }
      case 'carousel': {
        this.selectedMenu = Menu.WIDGET;
        this.router.navigateByUrl('/widget/carousel');
        this.loadData('/widget/carousel');
        break;
      }
      case 'scroll-bar': {
        this.selectedMenu = Menu.WIDGET;
        this.loadData('/widget/scroll-bar');
        break;
      }
      case 'logout': {
        this.selectedMenu = Menu.WIDGET;
        this.clearLocalStorage();
        this.router.navigateByUrl('/login');
        this.loadData('/login');
        break;
      }
      default: {
        this.selectedMenu = Menu.STYLE;
        this.router.navigateByUrl('/home');
        this.loadData('/home');
      }
    }
  }
}
