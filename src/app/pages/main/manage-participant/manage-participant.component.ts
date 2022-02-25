import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-participant',
  templateUrl: './manage-participant.component.html',
  styleUrls: ['./manage-participant.component.scss'],
})
export class ManageParticipantComponent implements OnInit {
  tempItem = [0, 0, 0, 0];
  status = false;
  constructor() {}

  ngOnInit(): void {}
  statusHandler() {
    this.status = !this.status;
  }
}
