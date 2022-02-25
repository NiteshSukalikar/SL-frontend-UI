import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-monitor',
  templateUrl: './study-monitor.component.html',
  styleUrls: ['./study-monitor.component.scss'],
})
export class StudyMonitorComponent implements OnInit {
  tempItem = [0, 0, 0, 0];
  tempProfileItem = [0, 0];
  constructor() {}

  ngOnInit(): void {}
}
