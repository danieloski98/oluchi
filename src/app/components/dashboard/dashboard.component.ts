import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { UserStateService } from 'src/app/state/user-state.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../dialogs/logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading: boolean;
  title: string;

  constructor(private router: Router,
              private ar: ActivatedRoute,
              private userSer: UserStateService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loading = false;
    this.router.events.subscribe(
      data => {
        // console.log(data);
        if (data instanceof NavigationStart) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      }
    );

    this.userSer.pageTitleGetter
    .subscribe(
      data => {
        this.title = data;
      }
    );
  }

  goBack(): void {
    console.log(this.router.getCurrentNavigation());
    this.ar.url.subscribe(
      data => {
        console.log(data);
      }
    );
  }

  logout(): void {
    // delete user
    // localStorage.removeItem('user');
    // localStorage.removeItem('token');
    // this.router.navigate(['/']);
    this.dialog.open(LogoutDialogComponent,
    {position: {top: '70px', left: '1000px'}, disableClose: true,
    width: '300px', hasBackdrop: false});
  }

}
