import { Component, OnInit } from '@angular/core';
import { UserStateService } from 'src/app/state/user-state.service';
import * as RW from 'random-words';

@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.scss']
})
export class GeneratePasswordComponent implements OnInit {

  constructor(private userSer: UserStateService) { }

  ngOnInit() {
    this.userSer.changeTitle('Generate Password');
    console.log(RW.words);
  }

}
