import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClinicalInvitesComponent } from './manage-clinical-invites.component';

describe('ManageClinicalInvitesComponent', () => {
  let component: ManageClinicalInvitesComponent;
  let fixture: ComponentFixture<ManageClinicalInvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageClinicalInvitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClinicalInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
