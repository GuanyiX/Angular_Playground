import { NgModule } from '@angular/core';
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../app/_guards/login.guard';
import { UnsavedGuard } from '../app/_guards/unsaved.guard';
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';
import { RxjsComponent } from '../app/components/rxjs/rxjs.component';
import { FxLayoutComponent } from '../app/components/fx-layout/fx-layout.component';
import { UserComponent } from '../app/components/user/user.component';
import { HtmlComponent } from '../app/components/html/html.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'rxjs', component: RxjsComponent, canActivate: [LoginGuard] },
  { path: 'fxLayout', component: FxLayoutComponent, canActivate: [LoginGuard] },
  { path: 'user', component: UserComponent, canActivate: [LoginGuard] },
  { path: 'html', component: HtmlComponent },
  { path: '', redirectTo: '/html', pathMatch: 'full' },
  { path: '**', redirectTo: 'html'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
