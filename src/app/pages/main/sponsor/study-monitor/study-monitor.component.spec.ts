import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMonitorComponent } from './study-monitor.component';

describe('StudyMonitorComponent', () => {
  let component: StudyMonitorComponent;
  let fixture: ComponentFixture<StudyMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
