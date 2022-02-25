import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticationCodeComponent } from './authentication-code/authentication-code.component';
import { CommonModule } from '@angular/common';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { ActivationComponent } from './activation/activation.component';

@NgModule({
  imports: [CommonModule,SharedModule,AuthRoutingModule],
  declarations: [
    SignInComponent,
    ConfirmPasswordComponent,
    ForgotPasswordComponent,
    AuthenticationCodeComponent,
    ActivationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
