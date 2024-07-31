import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HMenuComponent } from './h-menu.component';

describe('HMenuComponent', () => {
  let component: HMenuComponent;
  let fixture: ComponentFixture<HMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
