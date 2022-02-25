import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-search-participant',
  templateUrl: './search-participant.component.html',
  styleUrls: ['./search-participant.component.scss'],
})
export class SearchParticipantComponent implements OnInit {
  item = [0, 0, 0, 0, 0, 0];
  currentPage = 4;
  page?: number;
  constructor() {}

  ngOnInit(): void {}
  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
  }
}
