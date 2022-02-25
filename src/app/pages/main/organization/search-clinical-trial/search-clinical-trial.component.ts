import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-search-clinical-trial',
  templateUrl: './search-clinical-trial.component.html',
  styleUrls: ['./search-clinical-trial.component.scss'],
})
export class SearchClinicalTrialComponent implements OnInit {
  item = [0, 0, 0, 0, 0, 0];
  currentPage = 4;
  page?: number;
  constructor() {}

  ngOnInit(): void {}
  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
  }
}
