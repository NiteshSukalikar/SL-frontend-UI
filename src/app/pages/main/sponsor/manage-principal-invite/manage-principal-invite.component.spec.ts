import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePrincipalInviteComponent } from './manage-principal-invite.component';

describe('ManagePrincipalInviteComponent', () => {
  let component: ManagePrincipalInviteComponent;
  let fixture: ComponentFixture<ManagePrincipalInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePrincipalInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePrincipalInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
