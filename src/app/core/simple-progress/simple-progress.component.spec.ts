import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SimpleProgressComponent } from './simple-progress.component';

describe('SimpleProgressComponent', () => {
  let component: SimpleProgressComponent;
  let fixture: ComponentFixture<SimpleProgressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
