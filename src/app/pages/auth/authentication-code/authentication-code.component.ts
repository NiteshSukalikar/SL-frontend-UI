import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import { decryption, encryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { AuthenticationService } from 'src/app/utilities/_services/authentication.service';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
@Component({
  selector: 'app-authentication-code',
  templateUrl: './authentication-code.component.html',
  styleUrls: [
    './authentication-code.component.scss',
    '../sign-in/sign-in.component.scss',
  ],
})
export class AuthenticationCodeComponent implements OnInit, OnDestroy {
  AuthenticationForm: FormGroup;
  OTPObj: { OTP: any; otpVia: string; UserId: string; };

  countDown: Subscription | null;
  counter = 100;
  tick = 100;
  IsResend: boolean = true;
  isVerifyClicked: boolean = false;
  title: string;
  routerPath: any;

  constructor(private router: Router,
    private authService: AuthenticationService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.init();
    this.getCurrentRoute();
  }

  getCurrentRoute() {
    if (this.router.url.includes("superadmin")) {
      this.title = "Super Admin";
      this.routerPath = 'user'
    } else {
      this.title = "Sponsor"
      this.routerPath = 'sponsor'
    }
  }

  startTimer(): void {
    this.isVerifyClicked = true;
    this.IsResend = false
    this.countDown = timer(0, this.tick).subscribe(() => {
      if (this.counter == 0) {
        this.countDown = null;
        this.IsResend = true;
      } else {
        --this.counter;
      }
    });
  }

  ngOnDestroy() {
    this.countDown = null;
  }
 

  onSubmit() {
    this.startTimer();
    if (this.AuthenticationForm.invalid) {
      return;
    }

    let ID = localStorage.getItem("shadowID");
    ID = decryption(ID);

    this.OTPObj = {
      OTP: this.AuthenticationForm.value.OTP.trimLeft().trimRight(),
      otpVia: 'email',
      UserId: ID   
    }

    this.authService.LoginOTPVerification(this.OTPObj).subscribe(res => {
      if (res && res.code != null) {
        if (res.data && res.code.toString() == HttpStatusCode.StatusCode200) {

          let encriptToken: any = encryption(res.data.access_token);
          sessionStorage.setItem('NewShadow', encriptToken);
          localStorage.setItem('NewShadow', encriptToken);

          this.notificationService.success(NotificationMessages.LoginSuccessful);
          this.router.navigate([`${this.routerPath}/dashboard`])
        }
        else {
          this.notificationService.error("Invalid OTP");
        }
      }
      else {
        this.notificationService.error("Invalid OTP");
      }
    })
  }

  resendOTP(){
    let email = localStorage.getItem("loggedInUserEmail");

    let resendOTPObj = {
      email: decryption(email)
    }

    this.authService.resendOTP(resendOTPObj).subscribe(res => {
      if (res && res.code != null) {
        if (res.data && res.code.toString() == HttpStatusCode.StatusCode200) {
          this.notificationService.success(NotificationMessages.resendOTPSuccessfull);
        }else{
          this.notificationService.success(NotificationMessages.OTPFailed);
        }
      }
    })
    


  }

  init() {
    this.AuthenticationForm = new FormGroup({
      OTP: new FormControl('', [
        Validators.required,
        Validators.maxLength(6)
      ]),
    });
  }
}
