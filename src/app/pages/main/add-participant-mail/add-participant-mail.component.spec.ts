import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParticipantMailComponent } from './add-participant-mail.component';

describe('AddParticipantMailComponent', () => {
  let component: AddParticipantMailComponent;
  let fixture: ComponentFixture<AddParticipantMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParticipantMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParticipantMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
