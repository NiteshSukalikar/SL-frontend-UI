import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SidebarService } from '../side-bar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [SidebarService],
})
export class HeaderComponent implements OnInit {
  inputVisible = false;
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {}

  inputSrchHandler() {
    this.inputVisible = true;
    this.sidebarService.isVisible(!this.sidebarService.visible);
  }
}
