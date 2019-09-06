import { Component, OnInit } from '@angular/core';
import { UserStateService } from 'src/app/state/user-state.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  activity: string;

  constructor(private userSer: UserStateService) { }

  ngOnInit() {
    this.activity = 'listing';
    this.userSer.changeTitle('Secret Question');
  }

}
