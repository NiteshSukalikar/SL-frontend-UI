import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBreifCardComponent } from './profile-breif-card.component';

describe('ProfileBreifCardComponent', () => {
  let component: ProfileBreifCardComponent;
  let fixture: ComponentFixture<ProfileBreifCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBreifCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBreifCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
