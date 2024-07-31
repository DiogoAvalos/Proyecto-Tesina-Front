import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvoicesTwoComponent } from './invoices-two.component';

describe('InvoicesTwoComponent', () => {
  let component: InvoicesTwoComponent;
  let fixture: ComponentFixture<InvoicesTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
