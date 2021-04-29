import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenIntercepterService implements HttpInterceptor {
  constructor(private injector: Injector) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService);
    if(authService.getToken()) {
      let tokenrizedReq = req.clone({
        setHeaders: {
          Authorization: `Bear ${authService.getToken()}`
        }
      })
      return next.handle(tokenrizedReq);
    } else{
      return next.handle(req)
    }
    
  }
}

