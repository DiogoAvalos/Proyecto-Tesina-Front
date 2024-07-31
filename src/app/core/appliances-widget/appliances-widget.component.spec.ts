import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppliancesWidgetComponent } from './appliances-widget.component';

describe('AppliancesWidgetComponent', () => {
  let component: AppliancesWidgetComponent;
  let fixture: ComponentFixture<AppliancesWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliancesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
