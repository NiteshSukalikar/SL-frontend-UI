import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tempItem = [0, 0, 0, 0];
  isCollapsed = false;
  isCollapsed2 = false;
  isCollapsed3 = false;
  constructor() {}

  ngOnInit(): void {}
}
