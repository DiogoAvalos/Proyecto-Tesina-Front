import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BaicDetailCardComponent } from './baic-detail-card.component';

describe('BaicDetailCardComponent', () => {
  let component: BaicDetailCardComponent;
  let fixture: ComponentFixture<BaicDetailCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BaicDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaicDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
