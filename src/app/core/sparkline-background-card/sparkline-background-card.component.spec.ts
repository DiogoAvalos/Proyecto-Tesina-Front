import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SparklineBackgroundCardComponent } from './sparkline-background-card.component';

describe('SparklineBackgroundCardComponent', () => {
  let component: SparklineBackgroundCardComponent;
  let fixture: ComponentFixture<SparklineBackgroundCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SparklineBackgroundCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparklineBackgroundCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
