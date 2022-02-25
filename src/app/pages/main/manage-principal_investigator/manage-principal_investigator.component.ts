import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationConstantFile } from 'src/app/shared/constants/organizationConstant';
import { routerLinks } from 'src/app/shared/constants/routerLinks';
import { encryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { InvestigatorService } from 'src/app/utilities/_services/investigator.service';
import { NotificationService } from 'src/app/utilities/_services/notification.service';

@Component({
  selector: 'app-manage-principal_investigator',
  templateUrl: './manage-principal_investigator.component.html',
  styleUrls: ['./manage-principal_investigator.component.scss']
})
export class ManagePrincipal_investigatorComponent implements OnInit {
  tempItem: any;
  p: number = 1;
  collection: any[];

  constructor(private router: Router, private investigatorService: InvestigatorService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.getPIList();
  }

  getPIList() {
    this.investigatorService.GetPIList().subscribe((res:any) => {     
      if (res) {
        if (res.data && res.statusCode.toString() == HttpStatusCode.StatusCode200) {
          this.tempItem = res.data.organizations
        }
      }
    })
  }

  onSearchPI(event: any): void {
    this.investigatorService.searchPI(event.target.value).subscribe(res => {
      if (res) {
        if (res.statusCode.toString() == HttpStatusCode.StatusCode200) {
          this.tempItem = res.data.organizations
        }
      }
    })
  }

  addPIToList() {
    this.router.navigate(['user/add-PI'])
  }

  edit(item: any) {
    this.investigatorService.setPI(item);
    let EncryptedID = encryption(item.organizationID)
    this.router.navigate([routerLinks.AddPI, EncryptedID]);
  }

  delete(item: any) {  
  this.investigatorService.deletePI(item.organizationID).subscribe(res => {
    if (res) {
      this.notificationService.success(OrganizationConstantFile.PIIsDeleted);
      this.getPIList();
    }
  })
  }
}
