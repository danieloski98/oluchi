import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ICredential } from 'src/app/globals/User.interface';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  submiting: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ICredential, private ref: MatDialogRef<any>) { }

  ngOnInit() {
    this.submiting = false;
  }

  update(): void {
    this.submiting = true;
    setTimeout(() => {
      this.ref.close();
    }, 4000);
  }

}
