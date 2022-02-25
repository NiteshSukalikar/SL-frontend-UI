import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalSignedProtocolComponent } from './clinical-signed-protocol.component';

describe('ClinicalSignedProtocolComponent', () => {
  let component: ClinicalSignedProtocolComponent;
  let fixture: ComponentFixture<ClinicalSignedProtocolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalSignedProtocolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalSignedProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
