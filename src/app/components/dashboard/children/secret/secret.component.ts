import { Component, OnInit } from '@angular/core';
import { UserStateService } from 'src/app/state/user-state.service';
import { ISecretQuestion } from 'src/app/globals/secret.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  activity: string;
  User: string;
  secret: ISecretQuestion;

  constructor(private userSer: UserStateService,
              private http: HttpClient) { }

  ngOnInit() {
    // this.activity = 'add';
    this.activity = 'empty';
    this.userSer.changeTitle('Secret Question');
    this.User = localStorage.getItem('user');

    this.http.get(`http://localhost:3000/secret/${this.User}`)
    .subscribe(
      (result) => {
        console.log(result);
        if (result['data'].length === 0) {
          this.activity = 'empty';
        } else {
          this.secret = result['data'];
          this.activity = 'listing';
          this.secret = result['data'];
        }
      },
      error => {
        console.log(error);
        this.activity = 'error';
      }
    );
  }

  toggleDisplay() {
    alert('Chnage');
    this.activity = 'listing';
  }

}
