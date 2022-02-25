import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseModalComponent } from './database-modal.component';

describe('DatabaseModalComponent', () => {
  let component: DatabaseModalComponent;
  let fixture: ComponentFixture<DatabaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
