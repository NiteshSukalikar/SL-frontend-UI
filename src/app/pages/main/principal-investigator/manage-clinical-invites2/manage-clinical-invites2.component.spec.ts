import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClinicalInvites2Component } from './manage-clinical-invites2.component';

describe('ManageClinicalInvites2Component', () => {
  let component: ManageClinicalInvites2Component;
  let fixture: ComponentFixture<ManageClinicalInvites2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageClinicalInvites2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClinicalInvites2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
