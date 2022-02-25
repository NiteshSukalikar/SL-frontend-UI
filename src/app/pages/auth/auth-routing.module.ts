import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticationCodeComponent } from './authentication-code/authentication-code.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { ActivationComponent } from './activation/activation.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'confirm-password',
        component: ConfirmPasswordComponent,
      },
      {
        path: 'authentication',
        component: AuthenticationCodeComponent,
      },
      {
        path: 'activation',
        component: ActivationComponent,
      },
      {
        path: '',
        redirectTo: 'sign-in',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
