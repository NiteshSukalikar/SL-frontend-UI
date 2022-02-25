import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  headerTitle: any = 'Dashboard';

  constructor() {
  }

  ngOnInit() {
    let headerTitleStorage = localStorage.getItem('headerTitle');
    if (headerTitleStorage) {
      this.headerTitle = headerTitleStorage;
    }
  }

  sidebarNameChanged(event: any) {
    localStorage.setItem('headerTitle', event);
    this.headerTitle = event;
  }

}
