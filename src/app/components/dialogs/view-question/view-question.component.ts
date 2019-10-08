import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ISecretQuestion } from 'src/app/globals/secret.model';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ISecretQuestion,
              private ref: MatDialogRef<ISecretQuestion>) { }

  ngOnInit() {
    console.log(this.data)
  }

}
