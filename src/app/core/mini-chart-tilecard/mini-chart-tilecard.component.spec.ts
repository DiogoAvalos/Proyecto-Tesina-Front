import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MiniChartTilecardComponent } from './mini-chart-tilecard.component';

describe('MiniChartTilecardComponent', () => {
  let component: MiniChartTilecardComponent;
  let fixture: ComponentFixture<MiniChartTilecardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniChartTilecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniChartTilecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
