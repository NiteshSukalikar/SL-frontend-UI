import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import {
  decryption,
  encryption,
} from 'src/app/shared/genericFunctions/encryptionFun';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { AppService } from 'src/app/utilities/_services/app.service';
import { AuthenticationService } from 'src/app/utilities/_services/authentication.service';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { VisitorsService } from 'src/app/utilities/_services/visitor.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  public title: any;
  signInForm: FormGroup;

  email = 'Email';
  Password: string = 'Password';
  userId: any;
  submitted: boolean = false;
  ipAddress: any = '';
  country: any;
  role: any;
  show: boolean = false;
  routerPath: string;

  constructor(
    private appService: AppService,
    private notificationService: NotificationService,
    private router: Router,
    private authService: AuthenticationService,
    private visitorService: VisitorsService,

  ) { }

  ngOnInit() {
    this.getCurrentRoute();
    this.role = 1;
    localStorage.removeItem('headerTitle');
    //this.signalrService.startConnection();
    this.init();
    this.rememberedEntry();
    this.visitorService.getIpAddress().subscribe((response: any) => {
      if (response) {
        localStorage.setItem('IpAddress', response.ip);
        localStorage.setItem('country', response.country);
      }
    })
  }

  getCurrentRoute() {
    if (this.router.url.includes("superadmin")) {
      this.title = "Super Admin";
      this.routerPath = 'superadmin'
    } else {
      this.title = "Sponsor"
      this.routerPath = 'sponsor'
    }
  }



  init() {
    this.signInForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        // ValidationService.EmailorMobileNumberValidator,
      ]),
      password: new FormControl('', [
        Validators.required,
        //   Validators.minLength(6),
        //   Validators.maxLength(20),
        //   ValidationService.passwordValidator,
      ]),
      remember: new FormControl('')
    });

  }

  onSubmit() {
    this.submitted = true;
    if (this.signInForm.invalid) {
      return;
    }
    let loginObj = {
      email: this.signInForm.value.username,
      password: this.signInForm.value.password,
      roleId:  this.title === 'Super Admin' ? "1" : "2",
      otpVia: 'email'
    }
    if (this.signInForm.value.remember == true) {
      let encryptedUserAndPassword: any = this.signInForm.value.username + "_" + this.signInForm.value.password;
      encryptedUserAndPassword = encryption(encryptedUserAndPassword);
      localStorage.setItem('ShadowEntry', encryptedUserAndPassword);
    }
    this.authService.login(loginObj).subscribe(res => {
      if (res && res.code != null) {
        if (res.code.toString() == HttpStatusCode.StatusCode200) {
          let emailencrypted: any = encryption(this.signInForm.value.username);
          localStorage.setItem('loggedInUserEmail', emailencrypted);
          let id: any = encryption(res.data.userId);
          localStorage.setItem('shadowID', id)
          this.appService.setUserLoggedIn(true);
          localStorage.setItem('UserLoggedIn', "true");
          this.router.navigate([`${this.routerPath}/authentication`]);
          this.notificationService.success(NotificationMessages.resendOTPSuccessfull);
        }
        else {
          this.notificationService.error(NotificationMessages.InvalidUser);
        }
      }
    })
  }

  password() {
    this.show = !this.show;
  }

  rememberedEntry() {
    let shadowEntry = localStorage.getItem("ShadowEntry");
    if (shadowEntry) {
      let decryptedUserAndPassword: any = decryption(shadowEntry);
      decryptedUserAndPassword = decryptedUserAndPassword.split("_");
      this.signInForm.patchValue({
        username: decryptedUserAndPassword[0],
        password: decryptedUserAndPassword[1]
      })
    }
  }

}



// if (
//   this.signInForm.value.username == 'admin@gmail.com' &&
//   this.signInForm.value.password == 'Password@1'
// ) {
//   this.notificationService.success('Welcome Admin');
//   // this.userId = 3;
//   // localStorage.setItem('adminId', this.userId);
//   // this.signalrService.Connect(this.userId);
//   this.router.navigate(['/user/investigator-dashboard']);
// } else if (
//   this.signInForm.value.username == 'user1@gmail.com' &&
//   this.signInForm.value.password == 'Password@1'
// ) {
//   this.notificationService.success('Welcome User1');
//   this.userId = 4;
//   localStorage.setItem('user1Id', this.userId);
//   this.signalrService.Connect(this.userId);
//   this.router.navigate(['/user/participant-dashboard']);
// } else if (
//   this.signInForm.value.username == 'user2@gmail.com' &&
//   this.signInForm.value.password == 'Password@1'
// ) {
//   this.notificationService.success('Welcome User2');
//   this.userId = 5;
//   localStorage.setItem('user2Id', this.userId);
//   this.signalrService.Connect(this.userId);
//   this.router.navigate(['/user/clinical-dashboard']);
// } else {
//   //this.notificationService.error('Invalid User');
//   this.notificationService.success('Welcome User');
//   this.router.navigate(['/user/investigator-dashboard']);
// }