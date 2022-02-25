import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { BeginStudyComponent } from './begin-study/begin-study.component';
import { ClinicalSignedProtocolComponent } from './clinical-signed-protocol/clinical-signed-protocol.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvitePrincipalInvestigatorComponent } from './invite-principal-investigator/invite-principal-investigator.component';
import { InvitesComponent } from './invites/invites.component';
import { ManageFeeComponent } from './manage-fee/manage-fee.component';
import { ManageProcedureComponent } from './manage-procedure/manage-procedure.component';
import { ManageSponsorComponent } from './manage-sponsor/manage-sponsor.component';
import { PreselectionDocumentComponent } from './preselection-document/preselection-document.component';
import { SearchClinicalTrialComponent } from './search-clinical-trial/search-clinical-trial.component';
import { SearchParticipantComponent } from './search-participant/search-participant.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'manage-sponsor',
        component: ManageSponsorComponent,
      },
      {
        path: 'manage-procedure',
        component: ManageProcedureComponent,
      },
      {
        path: 'manage-fee',
        component: ManageFeeComponent,
      },
      {
        path: 'search-participant',
        component: SearchParticipantComponent,
      },
      {
        path: 'add-role',
        component: AddRoleComponent,
      },
      {
        path: 'search-clinical-trial',
        component: SearchClinicalTrialComponent,
      },
      {
        path: 'preselection-document',
        component: PreselectionDocumentComponent,
      },
      {
        path: 'invites',
        component: InvitesComponent,
      },
      {
        path: 'begin-study',
        component: BeginStudyComponent,
      },
      {
        path: 'clinical-signed-protocol',
        component: ClinicalSignedProtocolComponent,
      },
      {
        path: 'invite-principal-investigator',
        component: InvitePrincipalInvestigatorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationRoutingModule {}
