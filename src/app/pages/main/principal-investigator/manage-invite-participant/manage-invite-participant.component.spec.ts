import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInviteParticipantComponent } from './manage-invite-participant.component';

describe('ManageInviteParticipantComponent', () => {
  let component: ManageInviteParticipantComponent;
  let fixture: ComponentFixture<ManageInviteParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageInviteParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInviteParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
