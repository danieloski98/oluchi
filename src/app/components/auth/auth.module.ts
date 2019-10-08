import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthpageComponent } from './children/authpage/authpage.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './children/index/index.component';
import { SignupComponent } from './children/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AuthpageComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];


@NgModule({
  declarations: [AuthpageComponent, IndexComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
