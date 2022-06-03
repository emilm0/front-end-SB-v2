import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password): boolean {
    if (username === 'user1' && password === 'qwerty'){
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }
}
