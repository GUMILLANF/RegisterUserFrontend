import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = { login: '', passw: '' }

  constructor(private loginService: LoginServiceService, private router: Router) { }

  public login() {
    this.loginService.login(this.user);
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null &&
      localStorage.getItem('token').toString().trim() != null) {
      this.router.navigate(['home']);
    }
  }

}
