import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TablesExampleComponent } from './tables-example.component';

describe('TablesExampleComponent', () => {
  let component: TablesExampleComponent;
  let fixture: ComponentFixture<TablesExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
