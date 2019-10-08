import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  OTP: FormControl;
  verifying: boolean;
  state: string;

  constructor() { }

  ngOnInit() {
    this.state = 'verify';
    this.verifying = false;
    this.OTP = new FormControl('',
    [Validators.required, Validators.maxLength(6), Validators.minLength(6)]);
  }

}
