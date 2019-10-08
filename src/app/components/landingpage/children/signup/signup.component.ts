import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  loading: boolean = null;

  constructor(private fb: FormBuilder, private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.loading = false;
    this.signUpForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      sex: [''],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submit(): void {
    this.loading = true;
    // setTimeout(() => {
    //   this.loading = false;
    //   this.router.navigate(['/verify']);
    // }, 5000);
    this.signUpForm.value['createdAt'] = new Date().toLocaleDateString();
    this.http.post('http://localhost:3000/user', this.signUpForm.value)
    .subscribe(
      data => {
        setTimeout(() => {
        this.loading = true;
        console.log(data);
        this.router.navigate(['/verify']);
        }, 5000);
      },
      error => {
        const message = error.error.message;
        console.log(error);
        alert(message);
      }
    );
  }

}
