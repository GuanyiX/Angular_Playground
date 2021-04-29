import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UnsavedGuard } from '../app/_guards/unsaved.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIntercepterService } from './_services/token-intercepter.service';

// flex layout module
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
import { BsbFormatDirective } from 'src/app/components/html/html.component';

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
    BsbFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
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
  ],
  providers: [
    UnsavedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true,
    },
    BsbFormatPipe,
    BsbFormatDirective
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
