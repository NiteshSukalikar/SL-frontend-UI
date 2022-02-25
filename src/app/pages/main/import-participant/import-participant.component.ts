import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-participant',
  templateUrl: './import-participant.component.html',
  styleUrls: ['./import-participant.component.scss'],
})
export class ImportParticipantComponent implements OnInit {
  item = [0, 0, 0, 0, 0, 0, 0];
  constructor() {}

  ngOnInit(): void {}
}
