import { Component, OnInit, Input } from '@angular/core';
import { UserStateService } from 'src/app/state/user-state.service';
import { HttpClient } from '@angular/common/http';
import { ISecretQuestion } from 'src/app/globals/secret.model';
import { MatDialog } from '@angular/material/dialog';
import { ViewQuestionComponent } from 'src/app/components/dialogs/view-question/view-question.component';
import { DeleteQuestionComponent } from 'src/app/components/dialogs/delete-question/delete-question.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  User: string;
  @Input() public secrets: ISecretQuestion;

  constructor(private userser: UserStateService,
              private http: HttpClient,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.User = localStorage.getItem('user');
    console.log(this.secrets);
  }

  view(element: ISecretQuestion): void {
    this.dialog.open(ViewQuestionComponent, { data: { element }, hasBackdrop: true, width: '500px', position: { top: '100px'}});
  }

  delete(element: ISecretQuestion): void {
    this.dialog.open(DeleteQuestionComponent, { data: { element }, hasBackdrop: true, width: '500px', position: { top: '100px'}});
  }

}
