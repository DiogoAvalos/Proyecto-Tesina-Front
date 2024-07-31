import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopChartMdTileComponent } from './top-chart-md-tile.component';

describe('TopChartMdTileComponent', () => {
  let component: TopChartMdTileComponent;
  let fixture: ComponentFixture<TopChartMdTileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopChartMdTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopChartMdTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
