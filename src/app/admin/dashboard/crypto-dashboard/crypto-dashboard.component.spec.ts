import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CryptoDashboardComponent } from './crypto-dashboard.component';

describe('CryptoDashboardComponent', () => {
  let component: CryptoDashboardComponent;
  let fixture: ComponentFixture<CryptoDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
