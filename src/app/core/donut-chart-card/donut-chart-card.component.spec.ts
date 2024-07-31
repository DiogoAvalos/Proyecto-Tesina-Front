import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DonutChartCardComponent } from './donut-chart-card.component';

describe('DonutChartCardComponent', () => {
  let component: DonutChartCardComponent;
  let fixture: ComponentFixture<DonutChartCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutChartCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
