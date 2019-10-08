import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ISecretQuestion } from 'src/app/globals/secret.model';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.scss']
})
export class DeleteQuestionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ISecretQuestion, private ref: MatDialogRef<any>) { }

  ngOnInit() {
  }

}
