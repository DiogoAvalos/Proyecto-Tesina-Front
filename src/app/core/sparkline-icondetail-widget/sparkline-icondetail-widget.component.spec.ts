import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SparklineIcondetailWidgetComponent } from './sparkline-icondetail-widget.component';

describe('SparklineIcondetailWidgetComponent', () => {
  let component: SparklineIcondetailWidgetComponent;
  let fixture: ComponentFixture<SparklineIcondetailWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SparklineIcondetailWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparklineIcondetailWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
