import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  show: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.show = true;
    setInterval(() => {
      if(this.router.url === '/login' || this.router.url === '/signup') {
        this.show =  false;
      } else {
        this.show = true;
      }
    }, 10);

  }

}
