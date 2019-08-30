import { Component, OnInit } from '@angular/core';
import { UserStateService } from 'src/app/state/user-state.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICredential } from 'src/app/globals/User.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loading = true;
  user: ICredential = null;
  male = '../../../../../assets/images/avmale.svg';
  female = '../../../../../assets/images/avfemale.svg';
  imageUrl = '';

  httpOptions = {
    headers: new HttpHeaders({
      Authorization : localStorage.getItem('token')
    }),
  };


  constructor(private userSer: UserStateService,
              private http: HttpClient) { }

  ngOnInit() {
    this.userSer.changeTitle('Profile');
    const user = localStorage.getItem('user');
    this.http.get<ICredential>(`http://localhost:3000/user/${user}`, this.httpOptions)
   .subscribe(
     (data) => {
       console.log(data);
       this.user = data['data'];
       this.loading = false;
       if(this.user['sex'] === 'male') {
         this.imageUrl = this.male;
       } else {
         this.imageUrl = this.female;
       }
     },
     error => {
       console.log(`this is an error ${error}`);
     }
   );
  }

}
