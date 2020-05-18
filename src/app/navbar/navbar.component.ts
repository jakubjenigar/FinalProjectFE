import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedin = false;

  constructor() { }

  ngOnInit() {}

  isLoggedIn() {

    if (JSON.parse(sessionStorage.getItem('customerId')) === null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    } else {
      return true;
    }
  }

  logout() {
    // remove user from session storage to log user out
    sessionStorage.removeItem('customerId');
    this.isLoggedin = false;
  }

}
