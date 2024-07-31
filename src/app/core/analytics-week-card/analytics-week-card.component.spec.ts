import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnalyticsWeekCardComponent } from './analytics-week-card.component';

describe('AnalyticsWeekCardComponent', () => {
  let component: AnalyticsWeekCardComponent;
  let fixture: ComponentFixture<AnalyticsWeekCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsWeekCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsWeekCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
