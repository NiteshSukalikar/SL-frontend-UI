import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-invite-participant',
  templateUrl: './manage-invite-participant.component.html',
  styleUrls: ['./manage-invite-participant.component.scss']
})
export class ManageInviteParticipantComponent implements OnInit {
  item = [0, 0, 0, 0, 0, 0]
  constructor() { }
  ngOnInit(): void {
  }
}