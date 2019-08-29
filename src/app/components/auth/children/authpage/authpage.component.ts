import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.scss']
})
export class AuthpageComponent implements OnInit {

  loginGroup: FormGroup;
  isEmail: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.isEmail = true;
    this.loginGroup = this.fb.group({
      email: ['', [Validators.email]],
      phone: ['', [Validators.minLength(11)]],
      password: ['', [Validators.minLength(8)]],
      OPT: ['']
    });
  }

  setEmailValidation(): void {
    if (this.isEmail) {
      this.loginGroup.get('email').setValidators([Validators.required]);
    } else {
      this.loginGroup.get('phone').setValidators([Validators.required]);
    }

    this.loginGroup.updateValueAndValidity();
  }

}
