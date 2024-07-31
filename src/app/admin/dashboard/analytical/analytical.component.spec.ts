import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnalyticalComponent } from './analytical.component';

describe('AnalyticalComponent', () => {
  let component: AnalyticalComponent;
  let fixture: ComponentFixture<AnalyticalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
