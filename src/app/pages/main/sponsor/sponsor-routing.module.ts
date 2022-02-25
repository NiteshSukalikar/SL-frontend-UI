import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionPageComponent } from './accordion-page/accordion-page.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { CommentComponent } from './comment/comment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentCenterComponent } from './document-center/document-center.component';
import { ManageClinicInviteComponent } from './manage-clinic-invite/manage-clinic-invite.component';
import { ManageClinicalTrialsComponent } from './manage-clinical-trials/manage-clinical-trials.component';
import { ManagePrincipalInviteComponent } from './manage-principal-invite/manage-principal-invite.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { MessageCenterComponent } from './message-center/message-center.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { OrganizationProfile2Component } from './organization-profile2/organization-profile2.component';
import { PaymentInformationComponent } from './payment-information/payment-information.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StudyMonitorComponent } from './study-monitor/study-monitor.component';
import { StudySummaryComponent } from './study-summary/study-summary.component';
import { UploadConsentComponent } from './upload-consent/upload-consent.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'manage-clinical-trials',
        component: ManageClinicalTrialsComponent,
      },
      {
        path: 'manage-clinic-invite',
        component: ManageClinicInviteComponent,
      },
      {
        path: 'manage-staff',
        component: ManageStaffComponent,
      },
      {
        path: 'manage-principal-invite',
        component: ManagePrincipalInviteComponent,
      },
      {
        path: 'staff-profile',
        component: StaffProfileComponent,
      },
      {
        path: 'study-monitor',
        component: StudyMonitorComponent,
      },
      {
        path: 'document-center',
        component: DocumentCenterComponent,
      },
      {
        path: 'organization-profile',
        component: OrganizationProfileComponent,
      },
      {
        path: 'comments',
        component: CommentComponent,
      },
      {
        path: 'message-center',
        component: MessageCenterComponent,
      },
      {
        path: 'organization-profile2',
        component: OrganizationProfile2Component,
      },
      {
        path: 'study-summary',
        component: StudySummaryComponent,
      },
      {
        path: 'upload-consent',
        component: UploadConsentComponent,
      },
      {
        path: 'payment-information',
        component: PaymentInformationComponent,
      },
      {
        path: 'audit-log',
        component: AuditLogComponent,
      },
      {
        path: 'accordion',
        component: AccordionPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsorRoutingModule {}
