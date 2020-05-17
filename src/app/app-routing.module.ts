import { QuizComponent } from './quiz/quiz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SignupComponent} from './signup/signup.component';

import { CartComponent } from './cart/cart.component';

import { SupportComponent } from './support/support.component';
import { LearnComponent } from './learn/learn.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign_up', component: SignupComponent },

  { path: 'quiz', component: QuizComponent },
  { path: 'cart', component: CartComponent},
  

  { path: 'support', component: SupportComponent },
  { path: 'learn', component: LearnComponent },
  { path: '**', component: LandingPageComponent },
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


export const routingComponents = [LandingPageComponent, LoginComponent, SignupComponent, SupportComponent, CartComponent, LearnComponent];

