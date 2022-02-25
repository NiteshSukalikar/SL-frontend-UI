import { Component, DoCheck, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/components/side-bar/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, DoCheck {
  tempItem = [0, 0, 0, 0];
  visible: boolean;
  constructor(private sidebarService: SidebarService) {
    console.log('this.visible', this.sidebarService.visible);
  }

  ngOnInit(): void {}
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    //console.log('ngDoCheck', this.sidebarService.visible);
  }
}
