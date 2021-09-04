import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  login: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.checkStatus();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  checkStatus() {
    if(localStorage.getItem('userInfo')) {
      this.login = true;
      this.router.navigate(['/home']);
    } else {
      this.login = false;
    }
  }

  handleHomeClick() {
    if (this.loginForm.valid) {
      this.globalService.updateLoginStatus(true);
      localStorage.setItem('userInfo', JSON.stringify(this.loginForm.getRawValue));
      this.router.navigate(['/home']);
    }
  }
}
