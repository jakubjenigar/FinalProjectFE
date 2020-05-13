import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';

import {AppComponent} from './app.component';


const routes: Routes = [


  { path: 'login', component: LoginComponent },
  { path: 'sign_up', component: SignupComponent },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
