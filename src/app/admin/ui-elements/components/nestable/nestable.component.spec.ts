import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NestableComponent } from './nestable.component';

describe('NestableComponent', () => {
  let component: NestableComponent;
  let fixture: ComponentFixture<NestableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NestableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
