import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreifCardsComponent } from './dashboard/breif-cards/breif-cards.component';
import { RecentParticipantComponent } from './dashboard/recent-participant/recent-participant.component';
import { ManageOrganizationComponent } from './manage-organization/manage-organization.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { ParticipantBreifCardComponent } from './manage-participant/participant-breif-card/participant-breif-card.component';
import { ManageParticipantComponent } from './manage-participant/manage-participant.component';
import { SearchParticipantComponent } from './search-participant/search-participant.component';
import { AddParticipantMailComponent } from './add-participant-mail/add-participant-mail.component';
import { ImportParticipantComponent } from './import-participant/import-participant.component';
import { ImportParticipant1Component } from './import-participant1/import-participant1.component';
import { NewParticipantComponent } from './new-participant/new-participant.component';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';
import { RecordMessageModalComponent } from './edit-participant/record-message-modal/record-message-modal.component';
import { DatabaseModalComponent } from './edit-participant/database-modal/database-modal.component';
import { ProfileBreifCardComponent } from './search-participant/profile-breif-card/profile-breif-card.component';
import { SmtpModalComponent } from './manage-organization/smtp-modal/smtp-modal.component';
import { AddSponsorComponent } from './add-sponsor/add-sponsor.component';
import { ManageSponsorComponent } from './manage-sponsor/manage-sponsor.component';
import { ManagePrincipal_investigatorComponent } from './manage-principal_investigator/manage-principal_investigator.component';
import { AddInvestigatorComponent } from './add-investigator/add-investigator.component';
import { ManageEmail_templateComponent } from './manage-email_template/manage-email_template.component';
import { AddEmailTemplateComponent } from './manage-email_template/add-email-template/add-email-template.component';
import { AddParticipantComponent } from './manage-participant/add-participant/add-participant.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    BreifCardsComponent,
    RecentParticipantComponent,
    ManageOrganizationComponent,
    ManageParticipantComponent,
    ParticipantBreifCardComponent,
    AddOrganizationComponent,
    SearchParticipantComponent,
    AddParticipantMailComponent,
    ImportParticipantComponent,
    ImportParticipant1Component,
    NewParticipantComponent,
    EditParticipantComponent,
    RecordMessageModalComponent,
    DatabaseModalComponent,
    SmtpModalComponent,
    AddSponsorComponent,
    ManageSponsorComponent,
    ManagePrincipal_investigatorComponent,
    AddInvestigatorComponent,
    ManageEmail_templateComponent,
    AddEmailTemplateComponent,
    AddParticipantComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AngularEditorModule,
  ],
  exports: [SharedModule],
})
export class MainModule {}
