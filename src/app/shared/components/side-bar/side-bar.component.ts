import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/utilities/_services/app.service';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  providers: [SidebarService],
})
export class SideBarComponent implements OnInit {
  visible = true;
  @Output() sidebarItem = new EventEmitter<string>();
  constructor(private SidebarService: SidebarService, private appService: AppService, private router: Router) { }
  ngOnInit(): void { }

  sidebarHandler() {
    this.SidebarService.isVisible(!this.visible);
  }

  logout() {
    this.appService.setUserLoggedIn(false);
    localStorage.removeItem('UserLoggedIn')
    localStorage.removeItem('loggedInUserEmail')
    this.router.navigate(['/superadmin/sign-in'])
  }
  
  navigation(value: string) {
    localStorage.removeItem('headerTitle');
    this.sidebarItem.emit(value);
  }
}
