import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weather';

  ngOnInit() {
    console.log(`Appcomponent works`);
  }
}
