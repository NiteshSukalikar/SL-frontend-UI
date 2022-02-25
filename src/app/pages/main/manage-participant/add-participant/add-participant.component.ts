import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import { OrganizationConstantFile } from 'src/app/shared/constants/organizationConstant';
import { routerLinks } from 'src/app/shared/constants/routerLinks';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { ParticipantsService } from 'src/app/utilities/_services/participants.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.scss']
})
export class AddParticipantComponent implements OnInit {
  participantForm: FormGroup;
  submitted: boolean = false;

  constructor(private participantService: ParticipantsService,private notificationService: NotificationService,private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.participantForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      //contact: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(type: string) {
    this.submitted = true;
    if (this.participantForm.invalid){
      return;
    }
    this.participantService.sendInviteToParticipant(this.participantForm.value).subscribe((res) => {
      if(res){
        if(res.statusCode === HttpStatusCode.StatusCode200){
          this.notificationService.success(OrganizationConstantFile.SendInvite)
          this.participantForm.reset();
          this.router.navigate([routerLinks.ManageParticipant]);
        }else{
          this.notificationService.error(NotificationMessages.invalidError)
        }
      }else{
        this.notificationService.error(NotificationMessages.invalidError)
      }
    })
  }
}
