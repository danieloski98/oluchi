import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent implements OnInit {
  loggingout: boolean;

  constructor(private router: Router, private ref: MatDialogRef<any>) { }

  ngOnInit() {
    this.loggingout = false;
  }

  logout(): void {
    this.loggingout = true;
    //  delete user
    setTimeout(() => {
     localStorage.removeItem('user');
     localStorage.removeItem('token');
     this.loggingout = false;
     this.ref.close();
     this.router.navigate(['/']);
   }, 5000);
  }

}
