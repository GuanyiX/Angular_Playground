import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';
import { RxjsComponent } from '../app/components/rxjs/rxjs.component';
import { FxLayoutComponent } from '../app/components/fx-layout/fx-layout.component';
import { UserComponent } from '../app/components/user/user.component';
import { HtmlComponent } from '../app/components/html/html.component';
import { WebsocketComponent } from '../app/components/websocket/websocket.component';
import { FormComponent } from '../app/components/form/form.component';
import { RegularExpressionComponent } from '../app/components/regular-expression/regular-expression.component';
import { ParentComponent } from '../app/components/parent/parent.component';
import { CanvasComponent } from '../app/components/canvas/canvas.component';
import { AnimationComponent } from '../app/components/animation/animation.component';
import { CarouselComponent } from '../app/components/carousel/carousel.component';
import { FormatKingComponent } from '../app/components/format-king/format-king.component';

// pages
import { NgrxComponent } from '../app/pages/ngrx/ngrx.component';
import { ScrollBarComponent } from '../app/pages/scroll-bar/scroll-bar.component';
import { AgGridComponent } from '../app/pages/ag-grid/ag-grid.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'ngrx', component: NgrxComponent },
  { path: 'fxLayout', component: FxLayoutComponent },
  { path: 'user', component: UserComponent },
  { path: 'html', component: HtmlComponent },
  { path: 'websocket', component: WebsocketComponent },
  { path: 'form', component: FormComponent },
  { path: 'regularExpression', component: RegularExpressionComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'canvas', component: CanvasComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'widget/carousel', component: CarouselComponent },
  { path: 'widget/scroll-bar', component: ScrollBarComponent },
  { path: 'widget/ag-grid', component: AgGridComponent },
  { path: 'format-king', component: FormatKingComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
