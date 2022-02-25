import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SponsorRoutingModule } from './sponsor-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreifCardsComponent } from './dashboard/breif-cards/breif-cards.component';
import { ManageClinicalTrialsComponent } from './manage-clinical-trials/manage-clinical-trials.component';
import { ManageClinicInviteComponent } from './manage-clinic-invite/manage-clinic-invite.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { ManagePrincipalInviteComponent } from './manage-principal-invite/manage-principal-invite.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StudyMonitorComponent } from './study-monitor/study-monitor.component';
import { DocumentCenterComponent } from './document-center/document-center.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { CommentComponent } from './comment/comment.component';
import { ProfileBreifCardComponent } from './manage-principal-invite/profile-breif-card/profile-breif-card.component';
import { CommentBlockComponent } from './comment/comment-block/comment-block.component';
import { MessageCenterComponent } from './message-center/message-center.component';
import { AuditLogModalComponent } from './audit-log-modal/audit-log-modal.component';
import { OrganizationProfile2Component } from './organization-profile2/organization-profile2.component';
import { StudySummaryComponent } from './study-summary/study-summary.component';
import { UploadConsentComponent } from './upload-consent/upload-consent.component';
import { PaymentInformationComponent } from './payment-information/payment-information.component';
import { ProfileBreifComponent } from './study-monitor/profile-breif/profile-breif.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { AccordionPageComponent } from './accordion-page/accordion-page.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BreifCardsComponent,
    ManageClinicalTrialsComponent,
    ManageClinicInviteComponent,
    ManageStaffComponent,
    ManagePrincipalInviteComponent,
    StaffProfileComponent,
    StudyMonitorComponent,
    DocumentCenterComponent,
    OrganizationProfileComponent,
    CommentComponent,
    ProfileBreifCardComponent,
    CommentBlockComponent,
    MessageCenterComponent,
    AuditLogModalComponent,
    OrganizationProfile2Component,
    StudySummaryComponent,
    UploadConsentComponent,
    PaymentInformationComponent,
    ProfileBreifComponent,
    AuditLogComponent,
    AccordionPageComponent,
  ],
  imports: [
    CommonModule,
    SponsorRoutingModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
})
export class SponsorModule {}
