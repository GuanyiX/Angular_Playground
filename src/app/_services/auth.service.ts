import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  verifyPassword = environment.apiUrl + 'auth/verifyPassword';

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post(this.verifyPassword, { email, password})
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token
  }
}
