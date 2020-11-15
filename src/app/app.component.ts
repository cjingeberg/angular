import { Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { DbUser } from './shared/models/user';
import { AuthenticationService } from './helpers/authentacation.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'FitnessWebzz';
  isLoggedIn = false;
  showLogin = false;
  showRegister = false;

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
    });

    this.isLoggedIn = this.authService.isAuthenticated();
  }

  logOut() {
    this.authService.logout()
    this.isLoggedIn = false;
    this.showLogin = false;
    this.showRegister = false;
    this.router.navigateByUrl('home');
  }

  toggleLogin(): void {
    if (this.showRegister) {
      this.toggleRegister();
    }
    this.showLogin = !this.showLogin;
  }
  toggleRegister(): void {
    if (this.showLogin) {
      this.toggleLogin();
    }
    this.showRegister = !this.showRegister;
  }

  onLoginSubmit() {
    const userData = this.loginForm.value;
    
    const req = this.authService.login(userData.email, userData.password);
    req.subscribe(
      (res) => {
        this.isLoggedIn = true;
        this.showLogin = false;
        this.showRegister = false;
      },
      (err) => {
        if (err.status === 401) {
        }
      }
    );
  }

  onRegisterSubmit() {
    const userData = this.registerForm.value;
    console.log(userData);
    const req = this.authService.register(userData);
    req.subscribe(
      (res) => {
        this.isLoggedIn = true;
        this.showLogin = false;
        this.showRegister = false;
      },
      (err) => {
        if (err.status === 401) {
          this.isLoggedIn = false;
        }
      }
    );
  }
}
