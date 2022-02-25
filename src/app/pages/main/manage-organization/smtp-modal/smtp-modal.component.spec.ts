import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpModalComponent } from './smtp-modal.component';

describe('SmtpModalComponent', () => {
  let component: SmtpModalComponent;
  let fixture: ComponentFixture<SmtpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmtpModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmtpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
