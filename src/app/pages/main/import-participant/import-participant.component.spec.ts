import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportParticipantComponent } from './import-participant.component';

describe('ImportParticipantComponent', () => {
  let component: ImportParticipantComponent;
  let fixture: ComponentFixture<ImportParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
