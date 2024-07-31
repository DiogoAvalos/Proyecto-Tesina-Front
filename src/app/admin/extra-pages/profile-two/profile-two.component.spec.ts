import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileTwoComponent } from './profile-two.component';

describe('ProfileTwoComponent', () => {
  let component: ProfileTwoComponent;
  let fixture: ComponentFixture<ProfileTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
