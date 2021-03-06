import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userApi = environment.apiUrl + 'user';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(this.userApi)
  }
}
