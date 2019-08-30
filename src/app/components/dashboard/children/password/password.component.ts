import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ICredential } from '../../../../globals/User.interface';
import { UserStateService } from 'src/app/state/user-state.service';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  password: Array<ICredential>;

  constructor(private http: HttpClient,
              private router: Router,
              private userServ: UserStateService) { }

  ngOnInit() {
    this.password = [];
    this.http.get('http://localhost:3000/credentials')
    .subscribe(
      (data: ICredential[]) => {
        console.log(data);
        this.password = data;
      },
      error => {
        console.log(`this is an error ${error}`);
      }
    );

    this.userServ.changeTitle('Dashboard');
  }

  getFirstCharacter(name: string): string {
    return name.charAt(0);
  }

  delete(index: number): void {
    this.password.splice(index, 1);
  }

  navigate(id, name): void {
    this.userServ.changeTitle(name);
    this.router.navigate([`/dashboard/view/${id}`]);
  }

}
