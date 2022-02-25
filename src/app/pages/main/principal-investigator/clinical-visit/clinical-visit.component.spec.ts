import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalVisitComponent } from './clinical-visit.component';

describe('ClinicalVisitComponent', () => {
  let component: ClinicalVisitComponent;
  let fixture: ComponentFixture<ClinicalVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
