import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpassword',
  templateUrl: './addpassword.component.html',
  styleUrls: ['./addpassword.component.scss']
})
export class AddpasswordComponent implements OnInit {

  strength: number;
  credentialForm: FormGroup;
  noError: boolean;
  submiting: boolean;

  constructor(private fb: FormBuilder,
              private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.noError = false;
    this.strength = 50;
    this.submiting = false;
    this.credentialForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email]],
      name: ['', Validators.required],
      phone: ['', [ Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      type: ['', Validators.required]
    });
  }

  inc(): void {
    this.strength += 5;
  }

  submit(): void {
    const user = localStorage.getItem('user');
    this.submiting = true;

    const clone = {
      userID: user,
      name: this.credentialForm.get('name').value,
      email: this.credentialForm.get('email').value,
      phone: this.credentialForm.get('phone').value,
      password: this.credentialForm.get('password').value,
      type: this.credentialForm.get('type').value,
    };

    this.http.post('http://localhost:3000/credentials', clone)
    .subscribe(
      data => {
        console.log(data);
        this.submiting = false;
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.log(`this is from error ${error}`);
      }
    );
  }



}
