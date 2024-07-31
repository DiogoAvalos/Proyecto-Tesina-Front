import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailSparklineCardComponent } from './detail-sparkline-card.component';

describe('DetailSparklineCardComponent', () => {
  let component: DetailSparklineCardComponent;
  let fixture: ComponentFixture<DetailSparklineCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSparklineCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSparklineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
