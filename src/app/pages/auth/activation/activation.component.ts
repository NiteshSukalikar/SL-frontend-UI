import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import { decryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { ValidationService } from 'src/app/shared/validators/validation.service';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { OrganizationService } from 'src/app/utilities/_services/organization.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss', '../sign-in/sign-in.component.scss',]
})
export class ActivationComponent implements OnInit {

  IsInitialPage: boolean = true;
  IsSetPasswordPage: boolean = false;
  IsThankyouPage: boolean = false;
  show: boolean = false;
  ActivationForm: FormGroup;
  adminName: any;
  adminToken: any;
  adminEmail: any;
  submitted: boolean = false;
  DecrptToken: string;

  constructor(private notificationService: NotificationService, private activatedRoute: ActivatedRoute,
    private organizationService: OrganizationService) { }

  ngOnInit() {
    this.init();
    this.activatedRoute.queryParams.subscribe(params => {
      this.adminToken = params.key == undefined ? "none" : params.key;
      this.convertToken(this.adminToken)
    });   
  }

  convertToken(token: string) {
    var re = / /gi; 
    this.adminToken = this.adminToken.replace(re, "+"); 
    this.adminToken = decryption(this.adminToken);
    this.adminToken = this.adminToken.split("$");    
    this.adminEmail = this.adminToken[1].split("=");
    this.adminEmail =  this.adminEmail == undefined ? "none" :  this.adminEmail[1];  
    this.adminName = this.adminToken[2].split("=")[1].split("|");
    this.adminName = this.adminName[0] + " " + this.adminName[1];
    this.adminToken = this.adminToken[0].split("=");
    this.adminToken =  this.adminToken == undefined ? "none" :  this.adminToken[1];  

    this.updateProfile(this.adminEmail);    
  }

  init() {
    this.ActivationForm = new FormGroup({
      emailAddress: new FormControl({ value: '', disabled: true }, Validators.required),
      username: new FormControl('', [
        Validators.required
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        ValidationService.passwordValidator,
      ]),
      password: new FormControl('', [
        Validators.required, 
        Validators.minLength(6),
        Validators.maxLength(20),
        ValidationService.passwordValidator,
      ]),
    });
  }

  updateProfile(email: string) {
    if (email) {
      this.ActivationForm.patchValue({ emailAddress: email });
    }
  }

  get formDataAccessSetPass() { return this.ActivationForm.controls }

  navigateToSetPasswordPage() {
    this.IsInitialPage = false;
    this.IsSetPasswordPage = true;
    this.IsThankyouPage = false;
  }

  password() {
    this.show = !this.show;
  }

  setPassword() {
    this.submitted = true;
    if (this.ActivationForm.invalid) {
      return;
    } else {
      if (this.formDataAccessSetPass.password.value != this.formDataAccessSetPass.confirmPassword.value) {
        this.notificationService.error(NotificationMessages.PasswordDoesnotMatch);
        return;
      }
    }
    let acceptInvitation = {
      token: this.adminToken ? this.adminToken: '',
      username: this.ActivationForm.value.username,
      password: this.ActivationForm.value.password
    }

    this.organizationService.ActivateAdmin(acceptInvitation).subscribe(res => {
      this.IsInitialPage = false;
      this.IsSetPasswordPage = false;
      this.IsThankyouPage = true;
    })

  }
}
