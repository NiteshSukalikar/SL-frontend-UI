import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordMessageModalComponent } from './record-message-modal.component';

describe('RecordMessageModalComponent', () => {
  let component: RecordMessageModalComponent;
  let fixture: ComponentFixture<RecordMessageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordMessageModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
