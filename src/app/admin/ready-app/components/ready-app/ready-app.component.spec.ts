import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReadyAppComponent } from './ready-app.component';

describe('ReadyAppComponent', () => {
  let component: ReadyAppComponent;
  let fixture: ComponentFixture<ReadyAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
