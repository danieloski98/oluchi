import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  switchValue: string;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.switchValue = 'login';
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    const header = {
      headers: new HttpHeaders({
        'content-Type': 'Application/json',
      }),
    };

    this.http.get('/login', header)
    .subscribe(
      data => console.log(data),
    );
  }

  switch(value: string): void {
    this.switchValue = value;
  }

}
