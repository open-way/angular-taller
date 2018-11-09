import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vit-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public title = 'Este es mi dashboard!!';
  constructor() { }

  ngOnInit() {
  }

}
