import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreselectionDocumentComponent } from './preselection-document.component';

describe('PreselectionDocumentComponent', () => {
  let component: PreselectionDocumentComponent;
  let fixture: ComponentFixture<PreselectionDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreselectionDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreselectionDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
