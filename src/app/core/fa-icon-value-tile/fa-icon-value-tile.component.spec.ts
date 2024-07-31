import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FaIconValueTileComponent } from './fa-icon-value-tile.component';

describe('FaIconValueTileComponent', () => {
  let component: FaIconValueTileComponent;
  let fixture: ComponentFixture<FaIconValueTileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FaIconValueTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaIconValueTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
