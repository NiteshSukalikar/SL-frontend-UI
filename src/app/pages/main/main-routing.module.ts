import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInvestigatorComponent } from './add-investigator/add-investigator.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { AddParticipantMailComponent } from './add-participant-mail/add-participant-mail.component';
import { AddSponsorComponent } from './add-sponsor/add-sponsor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';
import { ImportParticipantComponent } from './import-participant/import-participant.component';
import { ImportParticipant1Component } from './import-participant1/import-participant1.component';
import { AddEmailTemplateComponent } from './manage-email_template/add-email-template/add-email-template.component';
import { ManageEmail_templateComponent } from './manage-email_template/manage-email_template.component';
import { ManageOrganizationComponent } from './manage-organization/manage-organization.component';
import { AddParticipantComponent } from './manage-participant/add-participant/add-participant.component';
import { ManageParticipantComponent } from './manage-participant/manage-participant.component';
import { ManagePrincipal_investigatorComponent } from './manage-principal_investigator/manage-principal_investigator.component';
import { ManageSponsorComponent } from './manage-sponsor/manage-sponsor.component';
import { NewParticipantComponent } from './new-participant/new-participant.component';
import { SearchParticipantComponent } from './search-participant/search-participant.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'manage-organization',
        component: ManageOrganizationComponent     
      },
      {
        path: 'manage-sponsor',
        component: ManageSponsorComponent     
      },
      {
        path: 'manage-email',
        component: ManageEmail_templateComponent     
      },
      {
        path: 'add-email',
        component: AddEmailTemplateComponent     
      },
      {
        path: 'add-email/:Id',
        component: AddEmailTemplateComponent     
      },
      {
        path: 'manage-investigator',
        component: ManagePrincipal_investigatorComponent
      },  
      {
        path: 'manage-participant',
        component: ManageParticipantComponent,
      },
      {
        path: 'add-organization',
        component: AddOrganizationComponent,
      },
      {
        path: 'add-PI',
        component: AddInvestigatorComponent,
      },
      {
        path: 'add-PI/:Id/:Type',
        component: AddInvestigatorComponent,
      },
      {
        path: 'add-sponsor',
        component: AddSponsorComponent,
      },
      {
        path: 'add-sponsor/:Id/:Type',
        component: AddSponsorComponent
      },
      {
        path: 'add-organization/:Id/:Type',
        component: AddOrganizationComponent
      },
      {
        path: 'search-participant',
        component: SearchParticipantComponent,
      },
      {
        path: 'add-participant',
        component: AddParticipantComponent,
      },
      {
        path: 'add-participant-mail',
        component: AddParticipantMailComponent,
      },
      {
        path: 'import-participant',
        component: ImportParticipantComponent,
      },
      {
        path: 'import-participant1',
        component: ImportParticipant1Component,
      },
      {
        path: 'new-participant',
        component: NewParticipantComponent,
      },
      {
        path: 'edit-participant',
        component: EditParticipantComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
