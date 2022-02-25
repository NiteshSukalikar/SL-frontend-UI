import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PrincipalInvestigatorRoutingModule } from './principal-investigator-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreifCardsComponent } from './dashboard/breif-cards/breif-cards.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { ManageClinicalInvitesComponent } from './manage-clinical-invites/manage-clinical-invites.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentBlockComponent } from './comments/comment-block/comment-block.component';
import { ManageClinicalInvites2Component } from './manage-clinical-invites2/manage-clinical-invites2.component';
import { ProfileBreifComponent } from './manage-clinical-invites2/profile-breif/profile-breif.component';
import { InviteStaffComponent } from './invite-staff/invite-staff.component';
import { ParticipantComponent } from './participant/participant.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ClinicalVisitComponent } from './clinical-visit/clinical-visit.component';
import { ClinicalVisit2Component } from './clinical-visit2/clinical-visit2.component';
import { BeginStudyComponent } from './begin-study/begin-study.component';
import { CoastingModalComponent } from './coasting-modal/coasting-modal.component';
import { ManageInviteParticipantComponent } from './manage-invite-participant/manage-invite-participant.component';
import { ProfileBreifCardComponent } from './manage-invite-participant/profile-breif-card/profile-breif-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BreifCardsComponent,
    AssessmentComponent,
    ManageClinicalInvitesComponent,
    CommentsComponent,
    CommentBlockComponent,
    ManageClinicalInvites2Component,
    ProfileBreifComponent,
    InviteStaffComponent,
    ParticipantComponent,
    AppointmentComponent,
    ClinicalVisitComponent,
    ClinicalVisit2Component,
    BeginStudyComponent,
    CoastingModalComponent,
    ManageInviteParticipantComponent,
    ProfileBreifCardComponent,
  ],
  imports: [
    CommonModule,
    PrincipalInvestigatorRoutingModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
  ],
})
export class PrincipalInvestigatorModule {}
