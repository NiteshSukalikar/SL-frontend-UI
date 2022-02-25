import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { BreifCardsComponent } from './dashboard/breif-cards/breif-cards.component';
import { ManageSponsorComponent } from './manage-sponsor/manage-sponsor.component';
import { ManageProcedureComponent } from './manage-procedure/manage-procedure.component';
import { ManageFeeComponent } from './manage-fee/manage-fee.component';
import { SearchParticipantComponent } from './search-participant/search-participant.component';
import { ProfileBreifCardComponent } from './search-participant/profile-breif-card/profile-breif-card.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { SearchClinicalTrialComponent } from './search-clinical-trial/search-clinical-trial.component';
import { PreselectionDocumentComponent } from './preselection-document/preselection-document.component';
import { InvitesComponent } from './invites/invites.component';
import { BeginStudyComponent } from './begin-study/begin-study.component';
import { ClinicalSignedProtocolComponent } from './clinical-signed-protocol/clinical-signed-protocol.component';
import { InvitePrincipalInvestigatorComponent } from './invite-principal-investigator/invite-principal-investigator.component';
import { AddNewNonProcedureModalComponent } from './begin-study/add-new-non-procedure-modal/add-new-non-procedure-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BreifCardsComponent,
    ManageSponsorComponent,
    ManageProcedureComponent,
    ManageFeeComponent,
    SearchParticipantComponent,
    ProfileBreifCardComponent,
    AddRoleComponent,
    SearchClinicalTrialComponent,
    PreselectionDocumentComponent,
    InvitesComponent,
    BeginStudyComponent,
    ClinicalSignedProtocolComponent,
    InvitePrincipalInvestigatorComponent,
    AddNewNonProcedureModalComponent,
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
})
export class OrganizationModule {}
