import { AfterContentChecked, ChangeDetectorRef, Component, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrganizationService } from 'src/app/utilities/_services/organization.service';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import { OrganizationConstantFile } from 'src/app/shared/constants/organizationConstant';

@Component({
  selector: 'app-smtp-modal',
  templateUrl: './smtp-modal.component.html',
  styleUrls: ['./smtp-modal.component.css']
})
export class SmtpModalComponent implements OnInit,AfterContentChecked {
  modalRef?: BsModalRef;
  dataObject: any;
  OrganizationSmptForm: any;
  submitted: boolean;

  constructor(
    private organizationService: OrganizationService,
    private smptDialogModalRef: MatDialogRef<SmtpModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef
  ) {
    this.dataObject = data.Id;
  }

  ngOnInit(): void {
    this.formInti();
    this.organizationService.GetOrganizationSMTPById(Number(this.dataObject)).subscribe(res => {
      if (res) {
        if (res.data && res.statusCode.toString() == HttpStatusCode.StatusCode200) {
          console.log("res.data : ", res.data)
          if (res.data != null) {
            this.patchDataToModel(res.data)
          }
        }
      }
    })
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  formInti(): void {
    this.OrganizationSmptForm = new FormGroup({
      smtpID: new FormControl(0, Validators.required),
      serverIP: new FormControl('', Validators.required),
      serverName: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  patchDataToModel(obj: any) {
    this.OrganizationSmptForm.patchValue({
      smtpID: obj.smtpID,
      serverIP: obj.serverIP,
      serverName: obj.serverName,
      userName: obj.userName,
      password: obj.userPassword,
    });
  }

  closeDialog() {
    this.smptDialogModalRef.close('close');
  }

  onSubmit() {
    this.submitted = true;
    if (this.OrganizationSmptForm.invalid) {
      return;
    }

    let organizationSmtpObj = {
      smtpID: this.OrganizationSmptForm.value.smtpID,
      serverName: this.OrganizationSmptForm.value.serverName,
      userName: this.OrganizationSmptForm.value.userName,
      userPassword: this.OrganizationSmptForm.value.password,
      serverIP: this.OrganizationSmptForm.value.serverIP,
      organizationsID: Number(this.dataObject),
    }

    this.organizationService.saveUpdateOrganizationSMTP(organizationSmtpObj).subscribe((response:any) => {
      if (response) {
        if (response.statusCode === HttpStatusCode.StatusCode200) {
          this.notificationService.success(OrganizationConstantFile.SMTPAdded)
          this.closeDialog();
        } else {
          this.notificationService.error(NotificationMessages.invalidError)
        }
      } else {
        this.notificationService.error(NotificationMessages.invalidError)
      }
    })

  }

  getFormData() {
  }
}
