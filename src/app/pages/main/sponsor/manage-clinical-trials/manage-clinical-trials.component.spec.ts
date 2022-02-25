import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClinicalTrialsComponent } from './manage-clinical-trials.component';

describe('ManageClinicalTrialsComponent', () => {
  let component: ManageClinicalTrialsComponent;
  let fixture: ComponentFixture<ManageClinicalTrialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageClinicalTrialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClinicalTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
