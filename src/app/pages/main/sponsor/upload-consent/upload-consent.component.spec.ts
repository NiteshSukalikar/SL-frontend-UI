import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadConsentComponent } from './upload-consent.component';

describe('UploadConsentComponent', () => {
  let component: UploadConsentComponent;
  let fixture: ComponentFixture<UploadConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadConsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
