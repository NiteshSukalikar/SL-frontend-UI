import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import { routerLinks } from 'src/app/shared/constants/routerLinks';
import { decryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { ValidationService } from 'src/app/shared/validators/validation.service';
import { AuthenticationService } from 'src/app/utilities/_services/authentication.service';
import { NotificationService } from 'src/app/utilities/_services/notification.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss', '../sign-in/sign-in.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {

  ConfirmPasswordForm: FormGroup;
  submitted: boolean = false;
  PasswordTokenData: any;
  show: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private router: Router, private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.init();
    let PasswordToken: any = localStorage.getItem("NewPasswordShadow");
    PasswordToken = PasswordToken ? PasswordToken : sessionStorage.getItem('NewPasswordShadow');
    if (PasswordToken) {
      let decrypted: any = decryption(PasswordToken);
      this.PasswordTokenData = JSON.parse(decrypted);
      this.checkExpirationPasswordToken();
    } else {
      this.notificationService.error(NotificationMessages.PermissionDenied);
      this.router.navigate([routerLinks.superadminSignIn])
    }
  }

  checkExpirationPasswordToken() {
    //let CurrentUTCdata = new Date().toISOString();
    let currentDate = new Date();
    let dateSent = new Date(this.PasswordTokenData.forgotPasswordRequestExpiration);

    let diff = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
    console.log(diff);
    if (diff == -1) {
      this.notificationService.error(NotificationMessages.linkIsExpired);
    }


    // if (this.PasswordTokenData.forgotPasswordRequestExpiration > CurrentUTCdata) {
    //   this.notificationService.error("No Access to this Page");
    // } else {
    //   this.notificationService.success("Access to this Page");
    // }
  }

  init() {
    this.ConfirmPasswordForm = new FormGroup({
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        ValidationService.passwordValidator,
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(6),
        Validators.maxLength(20),
        ValidationService.passwordValidator,
      ]),
    });
  }

  password() {
    this.show = !this.show;
  }

  get formDataAccessresetPass() { return this.ConfirmPasswordForm.controls }

  onSubmit() {
    this.submitted = true;
    if (this.ConfirmPasswordForm.invalid) {
      return;
    }
    if (this.formDataAccessresetPass.password.value != this.formDataAccessresetPass.confirmPassword.value) {
      this.notificationService.error(NotificationMessages.PasswordDoesnotMatch);
      return;
    }
    let resetObj = {
      userID: 2,
      password: this.ConfirmPasswordForm.value.password
    }
    this.authenticationService.resetPassword(resetObj).subscribe(res => {
      if (res) {
        if (res.code.toString() == HttpStatusCode.StatusCode200) {
          this.notificationService.success(NotificationMessages.PasswordChangedSuccessfully);
        }
      }
    })
  }
}
