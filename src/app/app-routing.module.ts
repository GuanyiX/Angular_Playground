import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../app/_guards/login.guard';
import { UnsavedGuard} from '../app/_guards/unsaved.guard';
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard], canDeactivate: [UnsavedGuard]},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

