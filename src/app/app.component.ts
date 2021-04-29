import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { GlobalService } from './_services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
  login: boolean = false;
  path: string = '';
  items: MenuItem[] = [];

  mode: Number = 0;

  constructor(private router: Router, private globalService: GlobalService) {}

  ngOnInit() {
    this.globalService.currentMode.subscribe(value => {
      this.mode = value
    })

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.login = (event.url === '/login') ? true : false;
        this.path = event.url;

        this.items = [
          {
            label: 'Home',
            routerLink: '/home',
            styleClass: this.path === '/home' ? 'menucus' : '',
          },
          {
            label: 'FrontEnd',
            icon: 'pi pi-desktop',
            items: [
              { label: 'rxjs', routerLink: '/rxjs' },
              { label: 'ngrx' },
              { label: 'Angular Animation' },
              { label: 'fxLayout', routerLink: '/fxLayout' },
              { label: 'HTML', routerLink: '/html'}
            ],
            styleClass: (this.path === '/rxjs' || this.path ==='/fxLayout') ? 'menucus' : '',
          },
          {
            label: 'BackEnd',
            icon: 'pi pi-compass',
            items: [{ label: 'Nestjs' }],
          },
          {
            label: 'Database',
            icon: 'pi pi-book',
            items: [{ label: 'MongoDB' }, { label: 'MySQL' }],
          },
          {
            label: 'AWS',
            icon: 'pi pi-amazon',
            items: [{ label: 'EC2' }, { label: 'ECR' }],
          },
          {
            label: 'User',
            routerLink: '/user'
          }
        ];
      }
    });
  }

  handleLogOutClick() {
    this.globalService.updateCurrentMode(0);
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
  }
}
