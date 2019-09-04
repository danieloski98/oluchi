import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStateService } from 'src/app/state/user-state.service';
import { ICredential } from 'src/app/globals/User.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  user: ICredential = null;
  male = '../../../../../assets/images/avmale.svg';
  female = '../../../../../assets/images/avfemale.svg';
  imageUrl = '';
  userFound: boolean;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization : localStorage.getItem('token')
    }),
  };

  constructor(private router: Router,
              private userService: UserStateService,
              private http: HttpClient) { }

  ngOnInit() {
   this.userFound = true;
   const user = localStorage.getItem('user');
   console.log(localStorage.getItem('token'));
   console.log(this.router.url);
   this.http.get<ICredential>(`http://localhost:3000/user/${user}`, this.httpOptions)
   .subscribe(
     (data) => {
       console.log(data);
       this.user = data['data'];

       if(this.user['sex'] === 'male') {
         this.imageUrl = this.male;
       } else {
         this.imageUrl = this.female;
       }
      //  this.userFound = true;
     },
     error => {
       console.log(`this is an error ${error}`);
     }
   );
  }

  navigate(path): void {
    this.router.navigate([`/dashboard/${path}`]);
  }

}
