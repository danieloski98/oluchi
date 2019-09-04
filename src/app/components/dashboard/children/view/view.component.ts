import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


interface ICredential extends Document {
  UserId: string;
  email: string;
  phone: string;
  password: string;
  name: string;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  data: ICredential;
  edit: boolean;
  showPassword: boolean;

  constructor(private http: HttpClient, private active: ActivatedRoute) { }

  ngOnInit() {
    this.edit = false;
    const name = 'qwerty';
    let n = name.search('[@,$,%,&]');
    alert(n);
    this.showPassword = false;
    this.active.params.subscribe(
      data => {
        console.log(data['id']);
        const id = data['id'];
        this.http.get(`http://localhost:3000/credentials/${id}`)
        .subscribe(
          (dat: ICredential) => {
            console.log(dat);
            this.data = dat;
          }
        );
      }
    );
  }

  getFirstCharacter(name: string): string {
    return name.charAt(0);
  }

}
