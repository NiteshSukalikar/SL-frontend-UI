import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClinicInviteComponent } from './manage-clinic-invite.component';

describe('ManageClinicInviteComponent', () => {
  let component: ManageClinicInviteComponent;
  let fixture: ComponentFixture<ManageClinicInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageClinicInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClinicInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
