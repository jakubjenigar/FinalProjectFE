import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedin = false;

  constructor(
    public snackBar: MatSnackBar
  ) { }

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
    sessionStorage.clear();
    this.isLoggedin = false;
    this.snackBar.open('Successfully logged out of your account.', 'Dismiss', {
    duration: 3000,
    panelClass: ['mat-snack-bar-container', 'mat-stroked-button']});
  }

}
