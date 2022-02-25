import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportParticipant1Component } from './import-participant1.component';

describe('ImportParticipant1Component', () => {
  let component: ImportParticipant1Component;
  let fixture: ComponentFixture<ImportParticipant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportParticipant1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportParticipant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
