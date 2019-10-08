import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './children/navbar/navbar.component';
import { HowComponent } from './children/how/how.component';
import { SignupComponent } from './children/signup/signup.component';
import { LoginComponent } from './children/login/login.component';
import { HomeComponent } from './children/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { UserStateService } from 'src/app/state/user-state.service';
import { VerifyComponent } from './children/verify/verify.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'how',
        component: HowComponent
      },
      {
        path: 'verify',
        component: VerifyComponent
      }
    ]
  }
];



@NgModule({
  declarations: [LandingpageComponent, NavbarComponent, HowComponent, SignupComponent, LoginComponent, HomeComponent, VerifyComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    NgbToastModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserStateService,
  ]
})
export class LandingpageModule { }
