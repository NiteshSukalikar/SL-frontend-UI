import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationConstantFile } from 'src/app/shared/constants/organizationConstant';
import { routerLinks } from 'src/app/shared/constants/routerLinks';
import { encryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { OrganizationService } from 'src/app/utilities/_services/organization.service';

@Component({
  selector: 'app-manage-email_template',
  templateUrl: './manage-email_template.component.html',
  styleUrls: ['./manage-email_template.component.scss']
})
export class ManageEmail_templateComponent implements OnInit {
  tempData: any;
  p: number = 1;
  collection: any[];
  constructor(private router: Router, private organizationService: OrganizationService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.getEmailTemplateList();
  }

  getEmailTemplateList() {
    this.organizationService.getEmailTemplateList().subscribe(response => {
      if (response) {
        this.tempData = response.data.emailTemplate
      }
    })
  }

  edit(item: any) {
    this.organizationService.setEmail(item);
    let EncryptedID = encryption(item.emailTemplateID)
    this.router.navigate([routerLinks.AddEmailTemplate, EncryptedID]);
  }

  addEmailTemplate() {
    this.router.navigate([routerLinks.AddEmailTemplate])
  }

  inactiveEmailTemplate(item: any) {
    this.organizationService.ActiveInactiveEmailTemplate(item.emailTemplateID).subscribe(response => {
      if (response) {
        this.notificationService.success(OrganizationConstantFile.emailTemplateStatusChanged);
        this.getEmailTemplateList();
      }
    })
  }

  delete(item: any) {
    if (item.isActive == false) {
      this.organizationService.deleteEmailTemplate(item.emailTemplateID).subscribe(res => {
        if (res) {
          this.notificationService.success(OrganizationConstantFile.emailTemplateIsdeleted);
          this.getEmailTemplateList();
        }
      })
    } else {
      this.notificationService.error(OrganizationConstantFile.organizationAlreadyActive);
    }
  }

}
