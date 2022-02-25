import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantBreifCardComponent } from './participant-breif-card.component';

describe('ParticipantBreifCardComponent', () => {
  let component: ParticipantBreifCardComponent;
  let fixture: ComponentFixture<ParticipantBreifCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantBreifCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantBreifCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
