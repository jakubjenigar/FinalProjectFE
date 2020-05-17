
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';

import {AppComponent} from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SignupComponent} from './signup/signup.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign_up', component: SignupComponent },
  { path: 'cart', component: CartComponent},
  { path: '**', component: LandingPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LandingPageComponent, LoginComponent, SignupComponent, CartComponent];
