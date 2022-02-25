import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrganizationService } from 'src/app/utilities/_services/organization.service';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import { OrganizationConstantFile } from 'src/app/shared/constants/organizationConstant';

@Component({
  selector: 'app-database-modal',
  templateUrl: './database-modal.component.html',
  styleUrls: ['./database-modal.component.scss'],
})
export class DatabaseModalComponent implements OnInit {
  modalRef?: BsModalRef;
  dataObject: any;
  //@Output() refreshGrid: EventEmitter<any> = new EventEmitter<any>();
  databaseForm: FormGroup;
  OrganizationDatabaseForm: any;
  submitted: boolean;

  constructor(
    private organizationService: OrganizationService,
    private databaseDialogModalRef: MatDialogRef<DatabaseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService,
  ) {
    this.dataObject = data.Id;
  }
  @Input() name: string;
  ngOnInit(): void {
    this.formInti()
    //this.dataObject = 2;
    this.organizationService.GetOrganizationDatabaseById(Number(this.dataObject)).subscribe(res => {
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

  formInti(): void {
    this.OrganizationDatabaseForm = new FormGroup({
      databaseID: new FormControl(0),
      serverIP: new FormControl('', Validators.required),
      serverName: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  patchDataToModel(obj: any) {
    this.OrganizationDatabaseForm.patchValue({
      databaseID: obj.databaseID,
      serverIP: obj.serverIP,
      serverName: obj.serverName,
      userName: obj.userName,
      password: obj.password,
    });
  }

  closeDialog() {
    this.databaseDialogModalRef.close('close');
  }

  onSubmit() {
    this.submitted = true;
    if (this.OrganizationDatabaseForm.invalid) {
      return;
    }

    let organizationDatabaseObj = {
      databaseID: this.OrganizationDatabaseForm.value.databaseID,
      serverName: this.OrganizationDatabaseForm.value.serverName,
      userName: this.OrganizationDatabaseForm.value.userName,
      password: this.OrganizationDatabaseForm.value.password,
      serverIP: this.OrganizationDatabaseForm.value.serverIP,
      organizationsID: Number(this.dataObject),
    }

    this.organizationService.saveUpdateOrganizationDatabase(organizationDatabaseObj).subscribe(response => {
      if (response) {
        if (response.statusCode === HttpStatusCode.StatusCode200) {
          this.notificationService.success(OrganizationConstantFile.databaseAdded)
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
    console.log("this.OrganizationDatabaseForm", this.OrganizationDatabaseForm)
  }
}
