import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBreifComponent } from './profile-breif.component';

describe('ProfileBreifComponent', () => {
  let component: ProfileBreifComponent;
  let fixture: ComponentFixture<ProfileBreifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBreifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBreifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
