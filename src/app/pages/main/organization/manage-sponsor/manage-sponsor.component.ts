import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-manage-sponsor',
  templateUrl: './manage-sponsor.component.html',
  styleUrls: ['./manage-sponsor.component.scss'],
})
export class ManageSponsorComponent implements OnInit {
  tempItem = [0, 0, 0, 0];
  currentPage = 4;
  page?: number;
  constructor() {}

  ngOnInit(): void {}
  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
  }
}
