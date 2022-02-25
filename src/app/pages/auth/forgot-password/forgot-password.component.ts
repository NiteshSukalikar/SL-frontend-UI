import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import { decryption, encryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { AuthenticationService } from 'src/app/utilities/_services/authentication.service';
import { NotificationService } from 'src/app/utilities/_services/notification.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss', '../sign-in/sign-in.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotPasswordForm: FormGroup;
  submitted: boolean = false;
  constructor(
    private authService: AuthenticationService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.ForgotPasswordForm = new FormGroup({
      Email: new FormControl('', [
        Validators.required
      ]),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.ForgotPasswordForm.invalid) {
      return;
    }
    let PasswordObj = {
      email: (this.ForgotPasswordForm.value.Email.trimLeft().trimRight().toString().toLowerCase()),
      otpVia: 'email'
    }
    console.log(this.ForgotPasswordForm.value);

    this.authService.ForgotPassword(PasswordObj).subscribe(res => {
      if (res && res.code != null) {
        if (res.data && res.code.toString() == HttpStatusCode.StatusCode200) {

          let PassToken: any = res.data.passwordToken;
          PassToken = JSON.stringify(PassToken);
          let encrypted:any = encryption(PassToken);          

          sessionStorage.setItem('NewPasswordShadow', encrypted);
          localStorage.setItem('NewPasswordShadow', encrypted);

          this.notificationService.success(NotificationMessages.LoginSuccessful);
          this.router.navigate(['superadmin/confirm-password'])
        }
        else {
          this.notificationService.error("Invalid Email ID");
        }
      }
      else {
        this.notificationService.error("Invalid Email ID");
      }
    })
  }

}
