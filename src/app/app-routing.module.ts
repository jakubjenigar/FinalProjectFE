import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {LoginComponent} from './login/login.component';
=======
import {AppComponent} from './app.component';
>>>>>>> 10a0a893d1f98e8b58d91e9b8e129978d6989747

const routes: Routes = [

<<<<<<< HEAD
  { path: 'login', component: LoginComponent },
=======
const routes: Routes = [
  { path: 'sign_up', component: SignupComponent },
>>>>>>> 10a0a893d1f98e8b58d91e9b8e129978d6989747
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
