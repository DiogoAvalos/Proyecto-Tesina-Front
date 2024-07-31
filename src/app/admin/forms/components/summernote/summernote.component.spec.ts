import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SummernoteComponent } from './summernote.component';

describe('SummernoteComponent', () => {
  let component: SummernoteComponent;
  let fixture: ComponentFixture<SummernoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SummernoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummernoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
