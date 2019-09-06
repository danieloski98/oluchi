import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';


@NgModule({
  declarations: [EditDialogComponent, DeleteDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    ShowHidePasswordModule
  ],
  exports: [
    EditDialogComponent,
    DeleteDialogComponent,
  ],
  entryComponents: [
    EditDialogComponent,
    DeleteDialogComponent
  ]
})
export class DialogsModule { }
