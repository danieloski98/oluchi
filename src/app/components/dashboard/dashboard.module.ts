import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './children/left-panel/left-panel.component';
import { SettingsComponent } from './children/settings/settings.component';
import { PasswordComponent } from './children/password/password.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AddpasswordComponent } from './children/addpassword/addpassword.component';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './children/view/view.component';
import { GeneratePasswordComponent } from './children/generate-password/generate-password.component';
import { UserStateService } from 'src/app/state/user-state.service';
import { ProfileComponent } from './children/profile/profile.component';
import { UserCheckGuard } from 'src/app/guard/user-check.guard';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: PasswordComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'add',
        component: AddpasswordComponent
      },
      {
        path: 'view/:id',
        component: ViewComponent
      },
      {
        path: 'generate',
        component: GeneratePasswordComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];



@NgModule({
  declarations: [ LeftPanelComponent,
     SettingsComponent, PasswordComponent,
      DashboardComponent, AddpasswordComponent, ViewComponent, GeneratePasswordComponent, ProfileComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbProgressbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule,
    MatProgressBarModule,
    MatTableModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserStateService,
    UserCheckGuard
  ]
})
export class DashboardModule { }
