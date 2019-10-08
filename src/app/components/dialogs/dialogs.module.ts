import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';

@NgModule({
  declarations: [EditDialogComponent, DeleteDialogComponent, LogoutDialogComponent, ViewQuestionComponent, DeleteQuestionComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    ShowHidePasswordModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    EditDialogComponent,
    DeleteDialogComponent,
    LogoutDialogComponent,
    ViewQuestionComponent,
    DeleteQuestionComponent
  ],
  entryComponents: [
    EditDialogComponent,
    DeleteDialogComponent,
    LogoutDialogComponent,
    ViewQuestionComponent,
    DeleteQuestionComponent
  ]
})
export class DialogsModule { }
