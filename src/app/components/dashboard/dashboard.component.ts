import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { UserStateService } from 'src/app/state/user-state.service';

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
              private userSer: UserStateService) { }

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

}
