import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'e';
  password = 'c';
  invalidLogin: boolean;


  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }
    this.invalidLogin = true;
  }

}
