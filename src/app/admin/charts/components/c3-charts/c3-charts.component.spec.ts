import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { C3ChartsComponent } from './c3-charts.component';

describe('C3ChartsComponent', () => {
  let component: C3ChartsComponent;
  let fixture: ComponentFixture<C3ChartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ C3ChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
