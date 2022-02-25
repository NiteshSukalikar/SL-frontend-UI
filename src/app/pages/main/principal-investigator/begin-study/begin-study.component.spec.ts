import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginStudyComponent } from './begin-study.component';

describe('BeginStudyComponent', () => {
  let component: BeginStudyComponent;
  let fixture: ComponentFixture<BeginStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
