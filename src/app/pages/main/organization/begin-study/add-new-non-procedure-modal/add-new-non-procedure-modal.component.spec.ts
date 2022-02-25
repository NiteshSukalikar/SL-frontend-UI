import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewNonProcedureModalComponent } from './add-new-non-procedure-modal.component';

describe('AddNewNonProcedureModalComponent', () => {
  let component: AddNewNonProcedureModalComponent;
  let fixture: ComponentFixture<AddNewNonProcedureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewNonProcedureModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewNonProcedureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
