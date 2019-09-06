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
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import {MatFormFieldModule, MatFormFieldAppearance } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogsModule } from '../dialogs/dialogs.module';
import {MatDialogModule} from '@angular/material/dialog';
import { SecretComponent } from './children/secret/secret.component';
import { QuestionsComponent } from './secret/questions/questions.component';
import { AddComponent } from './secret/add/add.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'password',
        pathMatch: 'full'
      },
      {
        path: 'password',
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
      },
      {
        path: 'secret',
        component: SecretComponent
      }
    ]
  }
];



@NgModule({
  declarations: [ LeftPanelComponent,
     SettingsComponent, PasswordComponent,
      DashboardComponent, AddpasswordComponent, ViewComponent, GeneratePasswordComponent, ProfileComponent, SecretComponent, QuestionsComponent, AddComponent,
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
    ShowHidePasswordModule,
    MatFormFieldModule,
    MatInputModule,
    DialogsModule,
    MatDialogModule
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
