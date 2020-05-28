import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  customer = {
    firstName: '',
    lastName: '',
    username: '',
    pass: '',
    email: ''
  };

  constructor(
  private customerService: CustomerService,
  private router: Router,
  private route: ActivatedRoute,
  private snackBar: MatSnackBar
  ) { }

  form: FormGroup = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),
    username: new FormControl(),
    pass: new FormControl(),
    email: new FormControl()
  });

  ngOnInit() { }

  signup() {
    const data = {
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      username: this.customer.username,
      pass: this.customer.pass,
      email: this.customer.email
    };

    console.log(data);
    if (data.firstName !== '' && data.lastName !== ''
      && data.username !== '' && data.pass !== ''
      && data.email !== ''
      ) {
        this.customerService.create(data).subscribe(
          response => {
            console.log(response);
            this.snackBar.open('Successfully created account!', 'Dismiss', {
              duration: 3000,
              panelClass: ['mat-snack-bar-container', 'mat-stroked-button']});
            this.router.navigate(['login']);
          },
          error => {
            console.log(error);
            this.snackBar.open('Invalid information. Please try again.', 'Dismiss', {
              duration: 3000,
              panelClass: ['mat-snack-bar-container', 'mat-stroked-button']});
          }
          );
      } else {
      this.snackBar.open('Invalid information. Please try again.', 'Dimiss', {
        duration: 3000,
        panelClass: ['mat-snack-bar-container', 'mat-stroked-button']});
    }
  }
}
