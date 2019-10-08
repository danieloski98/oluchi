import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ICredential } from 'src/app/globals/User.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  message: string;
  submiting: boolean;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization : localStorage.getItem('token')
    }),
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: ICredential,
              private ref: MatDialogRef<any>,
              private http: HttpClient,
              ) { }

  ngOnInit() {
    this.submiting = false;
  }

  delete(): void {
    this.submiting = true;
    this.http.delete(`http://localhost:3000/credentials/${this.data['_id']}`, this.httpOptions)
    .subscribe(
      data => {
        alert(JSON.stringify(data));
        this.submiting = false;
        this.ref.close();
      },
      error => {
        this.submiting = false;
        console.log(error);
        this.ref.close();
      }
    );
  }

}
