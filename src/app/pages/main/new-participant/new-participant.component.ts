import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import { OrganizationConstantFile } from 'src/app/shared/constants/organizationConstant';
import { routerLinks } from 'src/app/shared/constants/routerLinks';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { ParticipantsService } from 'src/app/utilities/_services/participants.service';

@Component({
  selector: 'app-new-participant',
  templateUrl: './new-participant.component.html',
  styleUrls: ['./new-participant.component.scss'],
})
export class NewParticipantComponent implements OnInit {
  currentPage = 1;
  page?: number;
  status = false;
  participants: any;
  participantSearchForm: FormGroup;

  constructor(private router: Router, private participantService: ParticipantsService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.init();
    this.getParticpantInviteList();
  }

  init(): void {
    this.participantSearchForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
  }
  statusHandler() {
    this.status = !this.status;
  }

  getParticpantInviteList() {
    let participantObj = {
      firstName: "",
      lastName: "",
      email: "",
      startDate: null,
      endDate: null
    }
    this.participantService.GetParticipantList(participantObj).subscribe(res => {
      if (res) {
        if (res.statusCode === HttpStatusCode.StatusCode200) {
          this.participants = res.data;
        }
      }
    })
  }

  navigateToAddParticipant() {
    this.router.navigate([routerLinks.AddParticipant]);
  }

  delete(participant: any) {
    let obj = {
      guid: (participant.participantGuid).toString()
    }
    if (participant.isBlocked == true) {
      this.participantService.deleteParticipants(obj).subscribe(res => {
        if (res) {
          if (res.statusCode === HttpStatusCode.StatusCode200) {
            this.notificationService.success(OrganizationConstantFile.DeleteInvite);
            this.getParticpantInviteList();
          } else {
            this.notificationService.error(NotificationMessages.invalidError);
          }
        } else {
          this.notificationService.error(NotificationMessages.invalidError);
        }
      })
    } else {
      this.notificationService.error(OrganizationConstantFile.participantChangeStatus);
    }
  }

  view(participant: any) {
    console.log(participant);
  }

  blockUnblockParticipant(item: any) {
    let obj = {
      guid: (item.participantGuid).toString()
    }
    this.participantService.changeStatus(obj).subscribe(res => {
      if (res) {
        if (res.statusCode === HttpStatusCode.StatusCode200) {
          this.notificationService.success(OrganizationConstantFile.StatusChanged);
          this.getParticpantInviteList();
        } else {
          this.notificationService.error(NotificationMessages.invalidError);
        }
      } else {
        this.notificationService.error(NotificationMessages.invalidError);
      }
    })
  }

  searchParticipant() {
    let obj = {
      firstName: this.participantSearchForm.value.firstName == "" || this.participantSearchForm.value.firstName == null ? "" : this.participantSearchForm.value.firstName,
      lastName: this.participantSearchForm.value.lastName == "" || this.participantSearchForm.value.lastName == null ? "" : this.participantSearchForm.value.lastName,
      email: this.participantSearchForm.value.email == "" || this.participantSearchForm.value.email == null ? "" : this.participantSearchForm.value.email,
      startDate: this.participantSearchForm.value.date == "" || this.participantSearchForm.value.date == null ? null : this.participantSearchForm.value.date,
      endDate: this.participantSearchForm.value.endDate == "" || this.participantSearchForm.value.endDate == null ? null : this.participantSearchForm.value.endDate,
    }
    this.participantService.GetParticipantList(obj).subscribe(res => {
      if (res) {
        if (res.statusCode === HttpStatusCode.StatusCode200) {
          this.participants = res.data;
        }
      }
    })
  }

}
