import { CustomerService} from './../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  customer: any = {
    username: '',
    pass: '',
  };

  form: FormGroup = new FormGroup({
    username: new FormControl(),
    pass: new FormControl(),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  login() {
    {
      this.customerService
        .loginCheck(this.customer.username, this.customer.pass)
        .subscribe(
          (response) =>  {
          //  console.log(response, JSON.stringify(response));
            if (response !== null) {
              sessionStorage.clear();
              sessionStorage.setItem('customerId', response['customerId']);
              this.snackBar.open('Welcome!', 'Dismiss', {
                duration: 3000,
                panelClass: ['mat-snack-bar-container', 'mat-stroked-button']});
              this.router.navigate(['']);
            } else if (response === null) {
              this.snackBar.open('Wrong username or password :/', 'Dismiss', {
                duration: 3000,
                panelClass: ['mat-snack-bar-container', 'mat-stroked-button']});
            }
          },
          (error) => {
           console.log(error);
          }
        );
    }
  }
}
