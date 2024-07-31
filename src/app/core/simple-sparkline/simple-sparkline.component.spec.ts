import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SimpleSparklineComponent } from './simple-sparkline.component';

describe('SimpleSparklineComponent', () => {
  let component: SimpleSparklineComponent;
  let fixture: ComponentFixture<SimpleSparklineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSparklineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSparklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
