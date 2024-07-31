import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ECommerseComponent } from './e-commerse.component';

describe('ECommerseComponent', () => {
  let component: ECommerseComponent;
  let fixture: ComponentFixture<ECommerseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ECommerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
