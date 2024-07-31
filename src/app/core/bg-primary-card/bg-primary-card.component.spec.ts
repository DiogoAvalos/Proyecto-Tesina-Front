import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BgPrimaryCardComponent } from './bg-primary-card.component';

describe('BgPrimaryCardComponent', () => {
  let component: BgPrimaryCardComponent;
  let fixture: ComponentFixture<BgPrimaryCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BgPrimaryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgPrimaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
