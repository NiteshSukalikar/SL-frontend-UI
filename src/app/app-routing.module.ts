import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardServiceGuard } from './auth-guard-service.guard';
import { LayoutComponent } from './pages/main/layout/layout.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/superadmin/sign-in',
  },
  {
    path: 'superadmin',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'sponsor',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'user',
    component: LayoutComponent,
    canActivate: [AuthGuardServiceGuard],
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'organization',
    component: LayoutComponent,
    // canActivate: [AuthGuardServiceGuard],
    loadChildren: () =>
      import('./pages/main/organization/organization.module').then(
        (m) => m.OrganizationModule
      ),
  },
  {
    path: 'sponsor',
    component: LayoutComponent,
    // canActivate: [AuthGuardServiceGuard],
    loadChildren: () =>
      import('./pages/main/sponsor/sponsor.module').then(
        (m) => m.SponsorModule
      ),
  },
  {
    path: 'principal-investigator',
    component: LayoutComponent,
    loadChildren: () =>
      import(
        './pages/main/principal-investigator/principal-investigator.module'
      ).then((m) => m.PrincipalInvestigatorModule),
  },
  {
    path: '**',
    redirectTo: '/superadmin/sign-in',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
