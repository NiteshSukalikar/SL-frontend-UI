import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import { OrganizationConstantFile } from 'src/app/shared/constants/organizationConstant';
import { routerLinks } from 'src/app/shared/constants/routerLinks';
import { decryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { OrganizationService } from 'src/app/utilities/_services/organization.service';

@Component({
  selector: 'app-add-email-template',
  templateUrl: './add-email-template.component.html',
  styleUrls: ['./add-email-template.component.scss']
})

export class AddEmailTemplateComponent implements OnInit {

  EmailForm: FormGroup;
  submitted: boolean = false;
  isEdit: boolean = false;
  editedEmailID: string | null;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '8rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  
  constructor(private organizationService: OrganizationService, private notificationService: NotificationService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.init();    
    this.activatedRoute.paramMap.subscribe(params => {
      this.editedEmailID = params.get('Id');
      if (this.editedEmailID) {
        this.editedEmailID = decryption(this.editedEmailID);
      }
      if (this.editedEmailID !== null) {
        let obj: any = this.organizationService.getEmailList();        
        this.updateProfile(obj);
      }
    });
  }

  

  updateProfile(obj: any) {
    this.isEdit = true;
    this.EmailForm.patchValue({
      emailTemplateName: obj.emailTemplateName,
      emailTemplateType: obj.emailTemplateType,
      emailTemplateDescription: obj.emailTemplateDescription,
      emailTemplateBody: obj.emailTemplateBody,
      emailTemplateSubject: obj.emailTemplateSubject,
      emailTemplateSenderName: obj.emailTemplateSenderName,
      emailTemplateSenderEmailAddress: obj.emailTemplateSenderEmailAddress,
    });
  }

  init() {
    this.EmailForm = new FormGroup({
      emailTemplateName: new FormControl('', [Validators.required]),
      emailTemplateType: new FormControl('1', [Validators.required]),
      emailTemplateDescription: new FormControl('', [Validators.required]),
      emailTemplateBody: new FormControl('', [Validators.required]),
      emailTemplateSubject: new FormControl('', [Validators.required]),
      emailTemplateSenderName: new FormControl('', [Validators.required]),
      emailTemplateSenderEmailAddress: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(type: string) {
    if (type == 'save') {
      this.submitted = true;
      if (this.EmailForm.invalid) {
        return
      }
      let emailObj = {
        emailTemplateName : this.EmailForm.value.emailTemplateName,
        emailTemplateType: Number(this.EmailForm.value.emailTemplateType),
        emailTemplateDescription : this.EmailForm.value.emailTemplateDescription,
        emailTemplateSubject : this.EmailForm.value.emailTemplateSubject,
        emailTemplateSenderName : this.EmailForm.value.emailTemplateSenderName,
        emailTemplateSenderEmailAddress : this.EmailForm.value.emailTemplateSenderEmailAddress,
        emailTemplateBody : this.EmailForm.value.emailTemplateBody
      }

      this.organizationService.saveEmailTemplateList(emailObj).subscribe(response => {
        if (response) {
          if (response.statusCode.toString() == HttpStatusCode.StatusCode200) { }
          this.notificationService.success(OrganizationConstantFile.emailTemplateIsSaved);
          this.router.navigate([routerLinks.ManageEmailTemplate]);
        } else {
          this.notificationService.success(NotificationMessages.invalidError)
        }
      })
    }else{
      if (this.editedEmailID == null) {
        return
      }
      this.submitted = true;
      if (this.EmailForm.invalid) {
        return
      }
      let emailObjUpdate = {
        //Email obj for updation
        emailTemplateID: this.editedEmailID,
        emailTemplateName : this.EmailForm.value.emailTemplateName,
        emailTemplateType: Number(this.EmailForm.value.emailTemplateType),
        emailTemplateDescription : this.EmailForm.value.emailTemplateDescription,
        emailTemplateBody : this.EmailForm.value.emailTemplateBody,
        emailTemplateSubject : this.EmailForm.value.emailTemplateSubject,
        emailTemplateSenderName : this.EmailForm.value.emailTemplateSenderName,
        emailTemplateSenderEmailAddress : this.EmailForm.value.emailTemplateSenderEmailAddress,
      }
      this.organizationService.updateEmailTemplateList(emailObjUpdate).subscribe((response:any) => {
        if (response) {
          this.notificationService.success(OrganizationConstantFile.emailTemplateIsUpdated)
          this.router.navigate([routerLinks.ManageEmailTemplate]);
          this.isEdit = false;
        }
      })
    }

  }

}
