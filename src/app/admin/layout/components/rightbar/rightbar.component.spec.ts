import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RightbarComponent } from './rightbar.component';

describe('RightbarComponent', () => {
  let component: RightbarComponent;
  let fixture: ComponentFixture<RightbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RightbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
