import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopBarchartTilecardComponent } from './top-barchart-tilecard.component';

describe('TopBarchartTilecardComponent', () => {
  let component: TopBarchartTilecardComponent;
  let fixture: ComponentFixture<TopBarchartTilecardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarchartTilecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarchartTilecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
