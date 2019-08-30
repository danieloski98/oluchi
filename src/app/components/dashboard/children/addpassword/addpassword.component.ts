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
      email: [''],
      name: [''],
      phone: [''],
      password: [''],
    });
  }

  inc(): void {
    this.strength += 5;
  }

  submit(): void {
    this.submiting = true;
    const clone = {
      userID: '5d681ff7745dcb29c942484d',
      name: this.credentialForm.get('name').value,
      email: this.credentialForm.get('email').value,
      phone: this.credentialForm.get('phone').value,
      password: this.credentialForm.get('password').value,
      type: 'App',
    }
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
