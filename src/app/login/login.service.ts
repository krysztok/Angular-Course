import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor() {
    this.isLoggedIn = true;
    this.isAdmin = true;
   }

  login(email: string, password: string) {
    // if (email === "admin@admin" && password === "admin") {
    //   this.isLoggedIn = true;
    //   this.isAdmin = true;
    // } else if (email === "user@user" && password === "user") {
    //   this.isLoggedIn = true;
    //   this.isAdmin = false;
    // }

    return this.isLoggedIn;
  }
}
