import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePrincipalInvestigatorComponent } from './invite-principal-investigator.component';

describe('InvitePrincipalInvestigatorComponent', () => {
  let component: InvitePrincipalInvestigatorComponent;
  let fixture: ComponentFixture<InvitePrincipalInvestigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitePrincipalInvestigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitePrincipalInvestigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
