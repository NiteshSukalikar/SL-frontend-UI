import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss'],
})
export class ManageStaffComponent implements OnInit {
  tempItem = [0, 0, 0, 0];
  status = false;
  constructor() {}

  ngOnInit(): void {}
  statusHandler() {
    this.status = !this.status;
  }
}
