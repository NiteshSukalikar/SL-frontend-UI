import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalVisit2Component } from './clinical-visit2.component';

describe('ClinicalVisit2Component', () => {
  let component: ClinicalVisit2Component;
  let fixture: ComponentFixture<ClinicalVisit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalVisit2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalVisit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
