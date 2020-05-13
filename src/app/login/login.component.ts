import { CustomerService} from './../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser = null;
  message = '';
  customer = {
    username: '',
    pass: ''
  };
  userType;

  form: FormGroup = new FormGroup({
    username: new FormControl(),
    pass: new FormControl(),
  });


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit() { }

  login() {
    {
      this.customerService
        .loginCheck(this.customer.username, this.customer.pass)
        .subscribe(
          (response) => {
            console.log(response);

            if (response !== null) {
                alert('Hello user');
                // navigate to shooping catalog?
              }
          },
          (error) => {
            console.log(error);
            alert('Wrong username or password');
          }
        );
    }
  }

}
