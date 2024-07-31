import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidStatesticsComponent } from './wid-statestics.component';

describe('WidStatesticsComponent', () => {
  let component: WidStatesticsComponent;
  let fixture: ComponentFixture<WidStatesticsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidStatesticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidStatesticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
