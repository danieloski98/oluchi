import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ICredential } from 'src/app/globals/User.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  submiting: boolean;
  form: FormGroup;
  message: string;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization : localStorage.getItem('token')
    }),
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: ICredential,
              private ref: MatDialogRef<any>,
              private http: HttpClient,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.submiting = false;
    this.form = this.fb.group({
      email : [this.data.email, [Validators.email, Validators.required]],
      phone: [this.data.phone, [ Validators.minLength(11), Validators.maxLength(11), Validators.required]],
      password: [this.data.password, [ Validators.required, Validators.minLength(8)]]
    });
  }

  update(): void {
    this.submiting = true;

    this.http.put(`http://localhost:3000/credentials/${this.data['_id']}`, this.form.value, this.httpOptions)
    .subscribe(
      data => {
        console.log(data);
        this.submiting = false;
        // this.ref.close();
        this.message = data['message'];
      },
      error => {
        this.message = error['data'].message;
      }
    );


    setTimeout(() => {
      this.ref.close();
    }, 6000);
  }

}
