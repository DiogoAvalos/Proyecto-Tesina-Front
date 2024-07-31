import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BootstrapUiComponent } from './bootstrap-ui.component';

describe('BootstrapUiComponent', () => {
  let component: BootstrapUiComponent;
  let fixture: ComponentFixture<BootstrapUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
