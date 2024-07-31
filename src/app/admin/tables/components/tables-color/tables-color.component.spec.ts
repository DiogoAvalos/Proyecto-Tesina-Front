import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TablesColorComponent } from './tables-color.component';

describe('TablesColorComponent', () => {
  let component: TablesColorComponent;
  let fixture: ComponentFixture<TablesColorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
