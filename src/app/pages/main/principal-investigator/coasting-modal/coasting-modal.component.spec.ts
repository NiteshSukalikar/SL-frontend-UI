import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoastingModalComponent } from './coasting-modal.component';

describe('CoastingModalComponent', () => {
  let component: CoastingModalComponent;
  let fixture: ComponentFixture<CoastingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoastingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoastingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
