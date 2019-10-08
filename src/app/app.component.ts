import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angularApp';
  calculating: boolean;
  DocHeight: string | number;

  ngOnInit(): void {
    this.calculating = false;
    setTimeout(() => {
      const parent: number  = document.querySelector('.parent').clientHeight;
      this.DocHeight = `${parent}px`;
      this.calculating = true;
    }, 5000);
  }
}
