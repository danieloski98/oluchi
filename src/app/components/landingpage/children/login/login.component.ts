import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from 'src/app/globals/http.response';
import {} from '@angular/animations';
import { Router } from '@angular/router';
import { UserStateService } from 'src/app/state/user-state.service';
import { ICredential } from 'src/app/globals/User.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: []
})
export class LoginComponent implements OnInit {

  switchValue: string;
  loginForm: FormGroup;
  showToast: boolean;
  message: string;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private userService: UserStateService) { }

  ngOnInit() {
    this.switchValue = 'login';
    this.showToast = false;
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    const header = {
      headers: new HttpHeaders({
        'content-Type': 'Application/json',
      }),
    };

  }

  switch(value: string): void {
    this.switchValue = value;
  }

  login(): void {
    this.http.post('http://localhost:3000/login', this.loginForm.value)
    .subscribe(
      (data: IResponse) =>
      { console.log(data); this.showToast = true;
        this.message = data.message; setTimeout(() => {
        this.showToast = false;
        data.data['user'].forEach(element => {
         localStorage.setItem('user', element._id);
         localStorage.setItem('token', data.data['token']);
         });
         // console.log(data.data['user']);
        this.router.navigate(['/dashboard']);
                             }, 1000); },
      error => { console.log(error); this.showToast = true;
                 this.message = error.error.message;
                 setTimeout(() => {
          this.showToast = false;
        }, 1000);
       }
    );
  }

}
