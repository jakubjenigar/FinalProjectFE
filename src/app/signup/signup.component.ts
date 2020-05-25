import { Customer } from './../models/customer.model';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    email: '',
    birthDate: ''
  };

  constructor(
  private customerService: CustomerService,
  private router: Router,
  private route: ActivatedRoute
  ) { }

  form: FormGroup = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),
    username: new FormControl(),
    pass: new FormControl(),
    email: new FormControl(),
    birthDate: new FormControl(),
  });

  ngOnInit() { }

  signup() {
    const data = {
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      username: this.customer.username,
      pass: this.customer.pass,
      email: this.customer.email,
      birthDate: this.customer.birthDate
    };

    console.log(data);
    if (data.firstName !== '' && data.lastName !== ''
      && data.username !== '' && data.pass !== ''
      && data.email !== '' && data.birthDate !== ''
      ) {
        this.customerService.create(data).subscribe(
          response => {
            console.log(response);
            alert('Successfully created account');
            this.router.navigate(['login']);
          },
          error => {
            console.log(error);
            alert('Invalid information. Please try again');
          }
          );
      } else {
      alert('Invalid information. Please try again');
    }
  }
}
