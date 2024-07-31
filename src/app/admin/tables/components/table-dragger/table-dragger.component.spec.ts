import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableDraggerComponent } from './table-dragger.component';

describe('TableDraggerComponent', () => {
  let component: TableDraggerComponent;
  let fixture: ComponentFixture<TableDraggerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDraggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDraggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
