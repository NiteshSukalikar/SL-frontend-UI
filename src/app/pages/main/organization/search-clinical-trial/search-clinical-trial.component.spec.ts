import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClinicalTrialComponent } from './search-clinical-trial.component';

describe('SearchClinicalTrialComponent', () => {
  let component: SearchClinicalTrialComponent;
  let fixture: ComponentFixture<SearchClinicalTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClinicalTrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClinicalTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
