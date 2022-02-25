import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss'],
})
export class ParticipantComponent implements OnInit {
  tempItem = [0, 0, 0, 0];
  constructor() {}

  ngOnInit(): void {}
}
