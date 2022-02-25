import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationProfile2Component } from './organization-profile2.component';

describe('OrganizationProfile2Component', () => {
  let component: OrganizationProfile2Component;
  let fixture: ComponentFixture<OrganizationProfile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationProfile2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationProfile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
