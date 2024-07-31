import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NormalTablesComponent } from './normal-tables.component';

describe('NormalTablesComponent', () => {
  let component: NormalTablesComponent;
  let fixture: ComponentFixture<NormalTablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
