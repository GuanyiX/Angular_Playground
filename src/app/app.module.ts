import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UnsavedGuard } from '../app/_guards/unsaved.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIntercepterService } from './_services/token-intercepter.service';

// hot key library
import { Hotkey, HotkeyModule } from 'angular2-hotkeys';

// ng2char
import { ChartsModule } from 'ng2-charts';

// ngx-mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';

// flex layout module
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';

// prime ng
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { FxLayoutComponent } from './components/fx-layout/fx-layout.component';
import { UserComponent } from './components/user/user.component';
import { HtmlComponent } from './components/html/html.component';

// pipe
import { BsbFormatPipe } from 'src/app/_shared/generalPipe';
import {
  BsbFormatDirective,
  BsbModelFormatDirective,
} from 'src/app/components/html/html.component';
import { WebsocketComponent } from './components/websocket/websocket.component';
import { FormComponent } from './components/form/form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { RegularExpressionComponent } from './components/regular-expression/regular-expression.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { AnimationComponent } from './components/animation/animation.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemDirective } from './_directives/carousel-item.directive';
import { FormatKingComponent } from './components/format-king/format-king.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { NgrxComponent } from './pages/ngrx/ngrx.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { _counterReducer } from './_stores/reducers/counter.reducer';
import { ScrollBarComponent } from './pages/scroll-bar/scroll-bar.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RxjsComponent,
    FxLayoutComponent,
    UserComponent,
    HtmlComponent,
    BsbFormatPipe,
    BsbFormatDirective,
    BsbModelFormatDirective,
    WebsocketComponent,
    FormComponent,
    RegularExpressionComponent,
    ParentComponent,
    ChildComponent,
    CanvasComponent,
    AnimationComponent,
    CarouselComponent,
    CarouselItemDirective,
    FormatKingComponent,
    ProgressBarComponent,
    NgrxComponent,
    ScrollBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSidenavModule,
    FormsModule,
    MatInputModule,
    ButtonModule,
    MenubarModule,
    MegaMenuModule,
    TabMenuModule,
    FlexLayoutModule,
    InputTextModule,
    CardModule,
    HttpClientModule,
    MatListModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatToolbarModule,
    NgxCurrencyModule,
    MatIconModule,
    HotkeyModule.forRoot(),
    NgxMaskModule.forRoot(maskConfig),
    StoreModule.forRoot({ count: _counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      autoPause: false,
    }),
  ],
  providers: [
    UnsavedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true,
    },
    BsbFormatPipe,
    BsbFormatDirective,
    BsbModelFormatDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
