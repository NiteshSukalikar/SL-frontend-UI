import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { BeginStudyComponent } from './begin-study/begin-study.component';
import { ClinicalVisitComponent } from './clinical-visit/clinical-visit.component';
import { ClinicalVisit2Component } from './clinical-visit2/clinical-visit2.component';
import { CommentsComponent } from './comments/comments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InviteStaffComponent } from './invite-staff/invite-staff.component';
import { ManageClinicalInvitesComponent } from './manage-clinical-invites/manage-clinical-invites.component';
import { ManageClinicalInvites2Component } from './manage-clinical-invites2/manage-clinical-invites2.component';
import { ManageInviteParticipantComponent } from './manage-invite-participant/manage-invite-participant.component';
import { ParticipantComponent } from './participant/participant.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'assessment',
        component: AssessmentComponent,
      },
      {
        path: 'manage-clinical-invites',
        component: ManageClinicalInvitesComponent,
      },
      {
        path: 'manage-clinical-invites2',
        component: ManageClinicalInvites2Component,
      },
      {
        path: 'comments',
        component: CommentsComponent,
      },
      {
        path: 'invite-staff',
        component: InviteStaffComponent,
      },
      {
        path: 'appointment',
        component: AppointmentComponent,
      },
      {
        path: 'clinical-visit',
        component: ClinicalVisitComponent,
      },
      {
        path: 'clinical-visit2',
        component: ClinicalVisit2Component,
      },
      {
        path: 'participant',
        component: ParticipantComponent,
      },
      {
        path: 'begin-study',
        component: BeginStudyComponent,
      },
      {
        path: 'manage-invite-participant',
        component: ManageInviteParticipantComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalInvestigatorRoutingModule { }
