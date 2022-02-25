import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-participant1',
  templateUrl: './import-participant1.component.html',
  styleUrls: ['./import-participant1.component.scss'],
})
export class ImportParticipant1Component implements OnInit {
  item = [0, 0, 0, 0, 0];
  item2 = [0, 0];
  constructor() {}

  ngOnInit(): void {}
}
