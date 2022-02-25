import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { log } from 'console';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrganizationConstantFile } from 'src/app/shared/constants/organizationConstant';
import { encryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { OrganizationService } from 'src/app/utilities/_services/organization.service';
import { routerLinks } from "../../../shared/constants/routerLinks";
import { DatabaseModalComponent } from '../edit-participant/database-modal/database-modal.component';
import { SmtpModalComponent } from './smtp-modal/smtp-modal.component';

@Component({
  selector: 'app-manage-organization',
  templateUrl: './manage-organization.component.html',
  styleUrls: ['./manage-organization.component.scss'],
})
export class ManageOrganizationComponent implements OnInit {

  title = "Manage Organization";
  p: number = 1;
  collection: any[];
  tempItem: any;
  modalRef?: BsModalRef;

  constructor(private organizationService: OrganizationService,
    private notificationService: NotificationService,
    private serviceCodeDailog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.getOrganizationList();
  }

  getOrganizationList() {
    this.organizationService.GetOrganizationList().subscribe(res => {
      if (res) {
        if (res.data && res.statusCode.toString() == HttpStatusCode.StatusCode200) {
          this.tempItem = res.data.organizations
        }
      }
    })
  }

  onSearchOrg(event: any): void {
    this.organizationService.searchOrganization(event.target.value).subscribe(res => {
      if (res) {
        if (res.statusCode.toString() == HttpStatusCode.StatusCode200) {
          this.tempItem = res.data.organizations
        }
      }
    })
  }

  inactiveOrganization(organization: any): void {
    this.organizationService.ActiveInactiveOrganization(organization.organizationID).subscribe(res => {
      if (res) {
        this.notificationService.success(OrganizationConstantFile.organizationStatus);
        this.getOrganizationList();
      }
    })
  }

  edit(item: any): void {
    //this.organizationService.setOrg(item);
    let EncryptedID = encryption(item.organizationID)
    this.router.navigate([routerLinks.AddOrganization, EncryptedID,"Edit"]);
  }

  view(item: any) {
    let EncryptedID = encryption(item.organizationID)
    this.router.navigate([routerLinks.AddOrganization, EncryptedID,"View"]);
  }

  delete(item: any) {
    if (item.isActive == false) {
      this.organizationService.deleteOrganization(item.organizationID).subscribe(res => {
        if (res) {
          this.notificationService.success(OrganizationConstantFile.organizationIsDeleted);
          this.getOrganizationList();
        }
      })
    } else {
      this.notificationService.error(OrganizationConstantFile.emailTemplateAlreadyActive);
    }
  }

  navigateToAddOrganization() {
    this.router.navigate([routerLinks.AddOrganization]);
  }

  openDatabaseModal(item: any) {
    const id = item.organizationID
    const databaseModalPopup = this.serviceCodeDailog.open(DatabaseModalComponent, {
      hasBackdrop: true,
      data: {
        Id: id,
      },
    });
    databaseModalPopup.afterClosed().subscribe(result => {
      // if (result === 'SAVE')
    });
  }

  openSMTPModal(item: any) {
    const id = item.organizationID
    const smtpModalPopup = this.serviceCodeDailog.open(SmtpModalComponent, {
      hasBackdrop: true,
      data: {
        Id: id,
      },
    });
    smtpModalPopup.afterClosed().subscribe(result => {
      // if (result === 'SAVE')
    });
  }

}
